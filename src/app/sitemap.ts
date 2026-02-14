/**
 * Dynamic XML sitemap generator for Next.js.
 *
 * Single-page portfolio: produces entries for the homepage only.
 *
 * @module app/sitemap
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 */
import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

/**
 * Generate the sitemap entries consumed by Next.js at build time.
 *
 * @returns An array of sitemap entries with URL, last-modified date,
 *          change frequency, and priority.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteConfig.url}/`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
  ];
}
