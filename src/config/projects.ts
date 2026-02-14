import type { Project } from "@/types";

/**
 * Complete list of portfolio projects.
 *
 * Each entry is rendered as a `ProjectCard` on the projects page.
 * Projects marked as `featured` also appear in the home page showcase.
 *
 * @see {@link Project} for the type definition.
 */
export const projects: Project[] = [
  {
    title: "ZunftGewerk",
    description:
      "Cross-Platform Management-Software für Handwerksbetriebe mit Offline-First-Sync und Ende-zu-Ende-Verschlüsselung auf Banken- und Behördenniveau mit rotierenden Schlüsseln.",
    longDescription:
      "Umfassende SaaS-Branchenlösung als Turborepo-Monorepo mit vier Apps: Express-Backend mit tRPC, Electron-Desktop-App (Windows, macOS, Linux), React-Native-Mobile-App (iOS & Android via Expo) und Vite-Landing-Page. AES-256-GCM-Verschlüsselung auf Banken- und Behördenniveau mit automatischer Schlüsselrotation über HashiCorp Vault, DSGVO-konform mit deutschem Hosting. 19 Module arbeiten vollständig offline mit automatischer Synchronisation alle 30 Sekunden und einer Queue für über 10.000 Änderungen. Weitere Features: Multi-Tenancy mit rollenbasierter Zugriffskontrolle, REST-API mit OpenAPI-3.0-Spezifikation, Webhooks mit Retry-Logik, Auftragsplanung, Rechnungsstellung mit PDF-Generierung, Personalverwaltung, Materialverwaltung und branchenspezifische Module für Kaminfeger, Maler, HLK-Techniker und weitere Gewerke. Monitoring via Prometheus und Grafana.",
    slug: "zunftgewerk",
    tags: [
      "TypeScript",
      "React",
      "Electron",
      "React Native",
      "Expo",
      "Node.js",
      "Express",
      "tRPC",
      "PostgreSQL",
      "RxDB",
      "Turborepo",
      "Vite",
      "OpenAPI 3.0",
      "Webhooks",
      "AES-256-GCM",
      "HashiCorp Vault",
      "DSGVO",
      "Docker",
      "Prometheus",
      "Grafana",
    ],
    image: "/projects/zunftgewerk.svg",
    featured: true,
    year: 2025,
  },
  {
    title: "FIECON Consulting",
    description:
      "Corporate Website für eine internationale Beratungsgesellschaft — 76 Komponenten, 44 Sprachen mit RTL-Support, 7 Animationsmodule, nonce-basierte CSP und 12 Compliance-Dokumente.",
    longDescription:
      "Corporate Website für Fiegler Consulting KG mit Büros in Hamburg, Belgrad und Texas. 76 Komponenten umfassend 6 Hauptsektionen (Hero, About, Services, Philosophy, Offices, Contact), 7 Animationskomponenten (FadeIn, TextReveal, SlideReveal, ScrollProgress, CountUp, StaggerChildren, MagneticButton), 44 SVG-Flaggen als React-Komponenten und 4 interaktive Kartenkomponenten (Deutschland, Serbien, USA/Texas mit County-Pfaden). Vollständige Internationalisierung in 44 Sprachen inkl. RTL-Support für Arabisch mit eigenem Font (Noto Sans Arabic), ~200+ Übersetzungsschlüssel pro Sprache und 132 Sitemap-URLs. Sicherheit auf Enterprise-Niveau: nonce-basierte Content Security Policy, CSRF-Schutz mit Origin-Validierung, Rate Limiting (5 Anfragen/Minute pro IP), HSTS, SSH-Key-Only-Authentication und UFW-Firewall. 20 Testdateien (API, UI, i18n, Barrierefreiheit, SEO, Integration) mit Vitest und Testing Library. 12 Dokumentations- und Compliance-Dokumente inkl. Sicherheitsrichtlinie, Risikoanalyse, Business-Continuity-Plan und Incident-Response-Plan. Zusatzmodul: Visitenkarten-Generator mit Puppeteer für Flyeralarm-konforme Druckvorlagen (85×55 mm, 300 DPI). Deployed auf dediziertem Server mit PM2, Nginx und Let's Encrypt, Monitoring via Sentry.",
    slug: "fiecon-consulting",
    tags: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Motion",
      "next-intl",
      "SVG-Komponenten",
      "RTL-Support",
      "Node.js",
      "Nodemailer",
      "Vitest",
      "Testing Library",
      "Puppeteer",
      "CSP (Nonce)",
      "CSRF-Schutz",
      "HSTS",
      "Rate Limiting",
      "Sentry",
      "PM2",
      "Nginx",
      "Linux",
      "Let's Encrypt",
      "SEO / JSON-LD",
      "Barrierefreiheit",
    ],
    image: "/projects/fiecon-consulting.svg",
    liveUrl: "https://www.fiecon-consulting.eu",
    featured: true,
    year: 2025,
  },
  {
    title: "Nana's Artistry",
    description:
      "Website für ein Schweizer Nähatelier — handgefertigte Kleidung nach Mass mit Instagram-Galerie, Service-Übersicht und Kontaktformular.",
    longDescription:
      "Vollständige Webpräsenz für ein Nähatelier in Ilanz, Graubünden. Features umfassen eine Masonry-Galerie mit über 220 Instagram-Bildern, Lightbox mit Keyboard- und Touch-Navigation, animierte Service-Übersicht im Bento-Grid-Layout für Overalls, Pumphosen, Jacken und mehr, Kontaktformular mit Validierung sowie ein durchgängig responsives Design mit scroll-basierten Framer-Motion-Animationen und dekorativen SVG-Elementen.",
    slug: "nanas-artistry",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
      "SEO",
      "Barrierefreiheit",
      "Performance-Optimierung",
      "Lighthouse",
    ],
    image: "/projects/nanas-artistry.svg",
    featured: true,
    year: 2025,
  },
];

/**
 * Subset of {@link projects} where `featured` is `true`.
 *
 * Used by the `ProjectsShowcase` section on the home page.
 */
export const featuredProjects = projects.filter((p) => p.featured);
