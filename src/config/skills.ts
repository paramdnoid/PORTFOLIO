/**
 * Categorised skill sets displayed in the Skills section.
 *
 * Every entry is derived from technologies actually used in portfolio
 * projects (ZunftGewerk, FIECON Consulting, Nana's Artistry) and
 * professional experience spanning 20+ years.
 *
 * Categories are rendered as a responsive grid of badge groups.
 */
export const skillCategories = {
  /* ── Frontend & UI ── */
  frontend: [
    "React 19",
    "Next.js 16",
    "TypeScript",
    "Tailwind CSS v4",
    "HTML/CSS",
    "shadcn/ui",
    "Motion / Framer Motion",
    "SVG-Komponenten",
    "next-intl (i18n)",
    "RTL-Support",
  ],

  /* ── Cross-Platform ── */
  crossPlatform: [
    "Electron",
    "React Native",
    "Expo",
    "Vite",
    "Turborepo Monorepo",
    "tRPC",
  ],

  /* ── Backend & APIs ── */
  backend: [
    "Node.js",
    "Express",
    "tRPC",
    "REST APIs",
    "OpenAPI 3.0",
    "Java",
    "Spring Framework",
    "PHP",
    "Nodemailer",
    "Webhooks",
  ],

  /* ── Datenbanken & Persistenz ── */
  databases: [
    "PostgreSQL",
    "MongoDB",
    "MySQL",
    "Oracle DB",
    "RxDB (Offline-First)",
    "Hibernate",
  ],

  /* ── DevOps & Infrastruktur ── */
  devops: [
    "Docker",
    "AWS",
    "Nginx",
    "PM2",
    "Linux",
    "CI/CD",
    "Jenkins",
    "GitHub Actions",
    "Git",
    "Let's Encrypt",
  ],

  /* ── Testing & Qualitätssicherung ── */
  testing: [
    "Vitest",
    "Testing Library",
    "Puppeteer",
    "SEO-Optimierung",
    "Barrierefreiheit (a11y)",
    "Performance-Optimierung",
    "Lighthouse",
    "Strukturierte Daten (JSON-LD)",
  ],

  /* ── Sicherheit & Compliance ── */
  security: [
    "CSP (Nonce-basiert)",
    "CSRF-Schutz",
    "AES-256-GCM",
    "HashiCorp Vault",
    "HSTS",
    "Rate Limiting",
    "DSGVO-Konformität",
    "UFW-Firewall",
    "SSH-Hardening",
    "Sentry",
    "Prometheus",
    "Grafana",
  ],

  /* ── Führung & Methodik ── */
  leadership: [
    "Team-Führung (12+ Entwickler)",
    "Agile / Scrum",
    "Code Reviews",
    "Projektmanagement",
    "Technische Architektur",
    "Stakeholder-Kommunikation",
    "Mentoring",
  ],
} as const;

/**
 * Union type of valid skill category keys.
 *
 * Derived from the keys of {@link skillCategories}.
 */
export type SkillCategory = keyof typeof skillCategories;
