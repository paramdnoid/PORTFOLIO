/**
 * Dynamic XML sitemap generator for Next.js.
 *
 * Produces entries for all static pages and individual project detail
 * pages so that search engines can discover every public URL.
 *
 * @module app/sitemap
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 */
import type { MetadataRoute } from "next";

import { projects } from "@/config/projects";
import { siteConfig } from "@/config/site";

/** Static route paths included in the sitemap. */
const staticRoutes = ["/", "/about", "/projects", "/contact"];

/**
 * Generate the sitemap entries consumed by Next.js at build time.
 *
 * @returns An array of sitemap entries with URL, last-modified date,
 *          change frequency, and priority.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1.0 : 0.8,
  }));

  const projectEntries: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${siteConfig.url}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...projectEntries];
}
