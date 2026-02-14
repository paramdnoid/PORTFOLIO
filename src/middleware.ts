/**
 * Next.js Edge Middleware combining rate limiting and i18n routing.
 *
 * 1. **Rate limiting** -- A simple in-memory sliding-window limiter
 *    (100 requests / minute per IP). Returns `429 Too Many Requests`
 *    when exceeded. For production at scale, replace with a distributed
 *    store (e.g. Upstash Redis, Cloudflare KV).
 *
 * 2. **i18n routing** -- Delegates to `next-intl/middleware` to detect
 *    the visitor's locale and rewrite the URL accordingly.
 *
 * Rate-limit headers (`X-RateLimit-*`) are attached to every response.
 *
 * @module middleware
 */
import createMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { routing } from "./i18n/routing";

// ---------------------------------------------------------------------------
// Simple in-memory rate limiter (per-IP, sliding window).
// ---------------------------------------------------------------------------

/** Tracks request count and window expiry for a single IP. */
type RateLimitEntry = {
  count: number;
  resetTime: number;
};

const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 100; // max requests per window
const rateLimitMap = new Map<string, RateLimitEntry>();

// Periodically clean up expired entries to prevent memory leaks.
const CLEANUP_INTERVAL_MS = 300_000; // 5 minutes
let lastCleanup = Date.now();

function cleanupExpiredEntries(): void {
  const now = Date.now();
  if (now - lastCleanup < CLEANUP_INTERVAL_MS) return;
  lastCleanup = now;
  for (const [key, entry] of rateLimitMap) {
    if (now > entry.resetTime) {
      rateLimitMap.delete(key);
    }
  }
}

/**
 * Check whether a given IP address has exceeded the rate limit.
 *
 * Creates or updates the sliding-window counter for the IP and
 * returns the current state including remaining quota and reset time.
 *
 * @param ip - Client IP address (from `x-forwarded-for` or `x-real-ip`).
 * @returns Rate-limit status with `limited`, `remaining`, and `resetTime`.
 */
function isRateLimited(ip: string): {
  limited: boolean;
  remaining: number;
  resetTime: number;
} {
  cleanupExpiredEntries();

  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW_MS,
    });
    return {
      limited: false,
      remaining: RATE_LIMIT_MAX_REQUESTS - 1,
      resetTime: now + RATE_LIMIT_WINDOW_MS,
    };
  }

  entry.count++;

  if (entry.count > RATE_LIMIT_MAX_REQUESTS) {
    return { limited: true, remaining: 0, resetTime: entry.resetTime };
  }

  return {
    limited: false,
    remaining: RATE_LIMIT_MAX_REQUESTS - entry.count,
    resetTime: entry.resetTime,
  };
}

// ---------------------------------------------------------------------------
// next-intl middleware
// ---------------------------------------------------------------------------

const intlMiddleware = createMiddleware(routing);

// ---------------------------------------------------------------------------
// Combined middleware
// ---------------------------------------------------------------------------

/**
 * Combined Next.js middleware: rate limiting + i18n routing.
 *
 * @param request - The incoming Next.js edge request.
 * @returns A `NextResponse` with rate-limit headers attached.
 */
export default function middleware(request: NextRequest): NextResponse {
  // --- Rate limiting ---
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  const { limited, remaining, resetTime } = isRateLimited(ip);

  if (limited) {
    return new NextResponse("Too Many Requests", {
      status: 429,
      headers: {
        "Retry-After": String(Math.ceil((resetTime - Date.now()) / 1000)),
        "X-RateLimit-Limit": String(RATE_LIMIT_MAX_REQUESTS),
        "X-RateLimit-Remaining": "0",
        "X-RateLimit-Reset": String(Math.ceil(resetTime / 1000)),
      },
    });
  }

  // --- next-intl routing ---
  const response = intlMiddleware(request);

  // Attach rate limit headers to every response.
  response.headers.set("X-RateLimit-Limit", String(RATE_LIMIT_MAX_REQUESTS));
  response.headers.set("X-RateLimit-Remaining", String(remaining));
  response.headers.set(
    "X-RateLimit-Reset",
    String(Math.ceil(resetTime / 1000)),
  );

  return response;
}

/**
 * Next.js middleware matcher configuration.
 *
 * Excludes API routes, static assets, and Next.js internals so that
 * only page requests pass through the middleware.
 */
export const config = {
  matcher: ["/((?!api|_next|_vercel|monitoring|.*\\..*).*)"],
};
