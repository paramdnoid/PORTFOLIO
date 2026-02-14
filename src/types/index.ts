export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    github: string;
    linkedin: string;
    email: string;
  };
};

export type NavItem = {
  /** Translation key, e.g. "home" — resolved via useTranslations("navigation") */
  titleKey: string;
  href: string;
};

export type Project = {
  title: string;
  description: string;
  longDescription?: string | undefined;
  slug: string;
  tags: string[];
  image: string;
  liveUrl?: string | undefined;
  githubUrl?: string | undefined;
  featured: boolean;
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
