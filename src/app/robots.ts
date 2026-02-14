/**
 * Robots.txt generator for Next.js.
 *
 * Allows all user agents to crawl the entire site and points
 * them to the XML sitemap.
 *
 * @module app/robots
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
 */
import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

/**
 * Generate the `robots.txt` rules consumed by Next.js at build time.
 *
 * @returns Robots configuration allowing all crawlers.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
