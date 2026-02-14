import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

import bundleAnalyzer from "@next/bundle-analyzer";
import { withSentryConfig } from "@sentry/nextjs";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env["ANALYZE"] === "true",
});

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    key: "Cross-Origin-Opener-Policy",
    value: "same-origin",
  },
  {
    key: "Cross-Origin-Resource-Policy",
    value: "same-origin",
  },
  {
    key: "X-Permitted-Cross-Domain-Policies",
    value: "none",
  },
  // Explizit den veralteten XSS-Filter deaktivieren — verhindert
  // XSS-Audit-Angriffe in älteren Browsern (OWASP-Empfehlung).
  {
    key: "X-XSS-Protection",
    value: "0",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Next.js benötigt 'unsafe-inline' für Inline-Skripte (Hydration, Chunks).
      // Für maximale Sicherheit sollte in Zukunft ein nonce-basierter Ansatz
      // evaluiert werden, sobald Next.js dies nativ unterstützt.
      "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https:",
      "font-src 'self' https://fonts.gstatic.com https://fonts.googleapis.com",
      "connect-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com https://*.ingest.sentry.io",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "upgrade-insecure-requests",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  output: "standalone",
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  logging: {
    fetches: { fullUrl: true },
  },
  experimental: {
    // Optimiert Tree-Shaking fuer Pakete mit vielen benannten Exports.
    // lucide-react ist bereits standardmaessig optimiert; hier werden
    // zusaetzliche Bibliotheken hinzugefuegt, die Barrel-Files nutzen.
    optimizePackageImports: ["radix-ui", "motion"],
  },
  headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
      // Langzeit-Caching fuer statische Assets aus /public/
      {
        source: "/:path*\\.(js|css|woff2|avif|webp|png|jpg|ico|svg)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

const sentryBuildOptions = {
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options
  ...(process.env["SENTRY_ORG"] ? { org: process.env["SENTRY_ORG"] } : {}),
  ...(process.env["SENTRY_PROJECT"]
    ? { project: process.env["SENTRY_PROJECT"] }
    : {}),

  // Only print logs for uploading source maps in CI.
  silent: !process.env["CI"],

  // Delete source maps after uploading to Sentry to keep them private.
  sourcemaps: {
    deleteSourcemapsAfterUpload: true,
  },

  // Automatically tree-shake Sentry logger statements to reduce bundle size.
  disableLogger: true,

  // Upload a larger set of source maps for prettier stack traces (increases build time).
  widenClientFileUpload: true,

  // Automatically instrument React components to track their performance.
  reactComponentAnnotation: { enabled: true },

  // Route browser requests to Sentry through a Next.js rewrite to circumvent
  // ad-blockers. This can increase your server load as well as your hosting
  // bill. Note: Check that the configured route will not match with your
  // Next.js middleware, otherwise reporting of client-side errors will fail.
  tunnelRoute: "/monitoring",
} as const;

export default withSentryConfig(
  withBundleAnalyzer(withNextIntl(nextConfig)),
  sentryBuildOptions,
);
