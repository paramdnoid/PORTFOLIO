import { env } from "@/env";

import type { SiteConfig } from "@/types";

/**
 * Central site configuration.
 *
 * Single source of truth for the site name, description, canonical URL,
 * Open Graph image, and external profile links. Referenced by layouts,
 * metadata generators, structured data, and the footer.
 *
 * @see {@link SiteConfig} for the type definition.
 */
export const siteConfig = {
  name: "Andre Zimmermann",
  description:
    "Development Leader & Full-Stack Engineer with 20+ years of experience",
  url: env.NEXT_PUBLIC_SITE_URL,
  ogImage: "/og-image.svg",
  links: {
    github: "https://github.com/andrz1mm3rmann",
    linkedin: "https://linkedin.com/in/andre-zimmermann",
    email: "andrz1mm3rmann@gmail.com",
  },
} satisfies SiteConfig;
