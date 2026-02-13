import type { SiteConfig } from "@/types";

export const siteConfig = {
  name: "Andre",
  description: "Full-Stack Developer Portfolio",
  url: "https://andre.dev",
  ogImage: "/og-image.png",
  links: {
    github: "https://github.com/andre",
    linkedin: "https://linkedin.com/in/andre",
    email: "hello@andre.dev",
  },
} as const satisfies SiteConfig;
