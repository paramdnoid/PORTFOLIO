/**
 * Global site configuration.
 *
 * Holds metadata such as the site name, description, canonical URL,
 * Open Graph image path, and external profile links.
 *
 * @see `siteConfig` in `config/site.ts` for the concrete instance used at runtime.
 */
export type SiteConfig = {
  /** Display name shown in the header and meta tags. */
  name: string;
  /** Default meta description for SEO. */
  description: string;
  /** Canonical base URL of the deployed site (no trailing slash). */
  url: string;
  /** Path to the default Open Graph image, relative to `public/`. */
  ogImage: string;
  /** External profile and contact links. */
  links: {
    /** GitHub profile URL. */
    github: string;
    /** LinkedIn profile URL. */
    linkedin: string;
    /** Contact email address. */
    email: string;
  };
};

/**
 * A single navigation entry used in the header and mobile menu.
 *
 * The `titleKey` is resolved at render time via `useTranslations("navigation")`.
 */
export type NavItem = {
  /** Translation key, e.g. "home" — resolved via useTranslations("navigation") */
  titleKey: string;
  /** Route path, e.g. "/" or "/projects". */
  href: string;
};

/**
 * Describes a portfolio project displayed on the projects page and showcase section.
 *
 * Projects may optionally include a live URL, GitHub link, and an extended description
 * for the detail view.
 */
export type Project = {
  /** Human-readable project title. */
  title: string;
  /** Short description shown in project cards. */
  description: string;
  /** Extended description shown on the project detail page. */
  longDescription?: string | undefined;
  /** URL-safe slug used for routing, e.g. "e-commerce-platform". */
  slug: string;
  /** Technology tags displayed as badges. */
  tags: string[];
  /** Path to the project thumbnail image, relative to `public/`. */
  image: string;
  /** Optional URL to the live/deployed project. */
  liveUrl?: string | undefined;
  /** Optional URL to the GitHub repository. */
  githubUrl?: string | undefined;
  /** Whether this project is featured on the home page. */
  featured: boolean;
  /** Year the project was completed or last updated. */
  year: number;
};

/** Metadata for a supported locale */
export type LocaleConfig = {
  /** ISO 639-1 code, e.g. "de" */
  code: string;
  /** Native name, e.g. "Deutsch" */
  nativeName: string;
  /** English name, e.g. "German" */
  englishName: string;
  /** Text direction */
  dir: "ltr" | "rtl";
  /** Region for grouping in UI */
  region: "europe" | "asia" | "middle-east" | "africa" | "americas" | "oceania";
  /** Whether translations are complete */
  translationComplete: boolean;
};

/**
 * Professional experience entry for timeline/resume display.
 *
 * Represents a single position held, with optional responsibilities,
 * technologies, and achievements for detailed views.
 */
export type Experience = {
  /** Job title or position name. */
  title: string;
  /** Company or organization name. */
  company: string;
  /** Location (city, country code). */
  location: string;
  /** Start date in YYYY-MM format. */
  startDate: string;
  /** End date in YYYY-MM format, or null if current. */
  endDate: string | null;
  /** Whether this is a current/ongoing position. */
  current: boolean;
  /** Brief description of the role (1-2 sentences). */
  description: string;
  /** Detailed responsibilities (optional, for expanded view). */
  responsibilities?: string[] | undefined;
  /** Technologies/tools used in this role. */
  technologies?: string[] | undefined;
  /** Key achievements or accomplishments. */
  achievements?: string[] | undefined;
};

/**
 * Professional certification or educational credential.
 */
export type Certification = {
  /** Certification or degree title. */
  title: string;
  /** Issuing organization. */
  issuer: string;
  /** Issue date in YYYY-MM format. */
  date: string;
  /** End date for programs with duration (optional). */
  endDate?: string | undefined;
  /** Description of certification content or significance. */
  description?: string | undefined;
  /** Credential ID or verification number (optional). */
  credentialId?: string | null | undefined;
};
