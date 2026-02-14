import { z } from "zod";

/**
 * Zod schema for validating required environment variables.
 *
 * Parsed at module load time so that missing or malformed values
 * cause an immediate, descriptive error rather than a runtime surprise.
 */
const envSchema = z.object({
  /** Canonical site URL used for sitemap, OG tags, and absolute links. */
  NEXT_PUBLIC_SITE_URL: z.url().default("http://localhost:3000"),
});

/**
 * Validated environment variables.
 *
 * Access any env var through this object to guarantee type safety
 * and presence at build time.
 *
 * @example
 * ```ts
 * import { env } from "@/env";
 * console.log(env.NEXT_PUBLIC_SITE_URL);
 * ```
 */
export const env = envSchema.parse({
  NEXT_PUBLIC_SITE_URL: process.env["NEXT_PUBLIC_SITE_URL"],
});
