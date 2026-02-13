export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    github: string;
    linkedin: string;
    email: string;
  };
}

export interface NavItem {
  /** Translation key, e.g. "home" — resolved via useTranslations("navigation") */
  titleKey: string;
  href: string;
}

export interface Project {
  title: string;
  description: string;
  longDescription?: string;
  slug: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: number;
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "tools" | "other";
  level: "expert" | "advanced" | "intermediate";
}

/** Metadata for a supported locale */
export interface LocaleConfig {
  /** ISO 639-1 code, e.g. "de" */
  code: string;
  /** Native name, e.g. "Deutsch" */
  nativeName: string;
  /** English name, e.g. "German" */
  englishName: string;
  /** Text direction */
  dir: "ltr" | "rtl";
  /** Region for grouping in UI */
  region:
    | "europe"
    | "asia"
    | "middle-east"
    | "africa"
    | "americas"
    | "oceania";
  /** Whether translations are complete */
  translationComplete: boolean;
}
