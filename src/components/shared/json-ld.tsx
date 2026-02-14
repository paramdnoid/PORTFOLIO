import type { ReactElement } from "react";

import { siteConfig } from "@/config/site";

export type JsonLdProps = {
  /** Additional JSON-LD data to merge into the base Person schema. */
  readonly additionalData?: Record<string, unknown>;
};

/**
 * Renders a JSON-LD structured data script tag for SEO.
 *
 * The base schema describes the portfolio owner as a Person / ProfessionalService
 * and the website itself. Additional page-specific data can be merged in.
 */
export function JsonLd({ additionalData }: JsonLdProps): ReactElement {
  const baseSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: "en",
      },
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#person`,
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
        jobTitle: "Full-Stack Developer",
        ...(additionalData ?? {}),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(baseSchema) }}
    />
  );
}
