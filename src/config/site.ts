import { env } from "@/env";

import type { SiteConfig } from "@/types";

export const siteConfig = {
  name: "Andre",
  description: "Full-Stack Developer Portfolio",
  url: env.NEXT_PUBLIC_SITE_URL,
  ogImage: "/og-image.svg",
  links: {
    github: "https://github.com/andre",
    linkedin: "https://linkedin.com/in/andre",
    email: "hello@andre.dev",
  },
} satisfies SiteConfig;
