import type { Certification, Experience } from "@/types";

/**
 * Professional experience timeline.
 *
 * Each entry represents a position held, rendered in the experience
 * timeline with a changelog-style layout. Current positions are marked
 * with `current: true` and receive special visual treatment.
 *
 * @see {@link Experience} for the type definition.
 */
export const experiences: Experience[] = [
  {
    title: "Bereichsleiter Entwicklung",
    company: "Tivialis",
    location: "Maspalomas, ES",
    startDate: "2022-02",
    endDate: null,
    current: true,
    description:
      "Leitung von Entwicklungsteams und Architektur von Enterprise-Lösungen für internationale Kunden. Verantwortlich für drei Hauptprojekte: ZunftGewerk (Cross-Platform SaaS), FIECON Consulting (Corporate Website, 44 Sprachen) und Nana's Artistry (Atelier-Website).",
    responsibilities: [
      "Strategische Technologieführung und Team-Management (12+ Entwickler) über mehrere parallele Projekte",
      "Architektur und Implementierung skalierbarer Full-Stack-Lösungen mit React 19, Next.js 16, TypeScript und Tailwind CSS v4",
      "Cross-Platform-Entwicklung mit Electron (Desktop), React Native/Expo (Mobile) und Turborepo-Monorepo-Architektur",
      "Implementierung von Enterprise-Sicherheit: AES-256-GCM-Verschlüsselung mit HashiCorp Vault, nonce-basierte CSP, CSRF-Schutz, HSTS und DSGVO-Konformität",
      "Aufbau von CI/CD-Pipelines mit GitHub Actions, Docker-Containerisierung und AWS-Cloud-Infrastruktur",
      "Etablierung von Testing-Standards mit Vitest, Testing Library und Puppeteer (20+ Testdateien pro Projekt)",
      "Mentoring von Senior-Entwicklern, Code Reviews und technische Architektur-Entscheidungen",
      "Stakeholder-Kommunikation und technische Projektplanung nach Agile/Scrum",
    ],
    technologies: [
      "TypeScript",
      "React 19",
      "Next.js 16",
      "Tailwind CSS v4",
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
      "shadcn/ui",
      "Motion / Framer Motion",
      "next-intl",
      "Docker",
      "AWS",
      "Nginx",
      "PM2",
      "GitHub Actions",
      "Vitest",
      "Testing Library",
      "Puppeteer",
      "Sentry",
      "Prometheus",
      "Grafana",
      "HashiCorp Vault",
      "Let's Encrypt",
    ],
    achievements: [
      "Aufbau und Leitung eines High-Performance-Entwicklungsteams mit 12+ Ingenieuren",
      "Architektur von ZunftGewerk: Cross-Platform-SaaS mit Offline-First-Sync (19 Module, 10.000+ Änderungen in der Queue) und AES-256-GCM-Verschlüsselung mit automatischer Schlüsselrotation",
      "Delivery von FIECON Consulting: 76 Komponenten, 44 Sprachen mit RTL-Support, 7 Animationsmodule, 132 Sitemap-URLs, 12 Compliance-Dokumente — Marktwert 45.000–65.000 €",
      "Aufbau von Nana's Artistry: Masonry-Galerie mit 220+ Instagram-Bildern, Bento-Grid-Layout und scroll-basierten Animationen",
      "Implementierung von CI/CD-Pipelines mit 60% schnelleren Deployments und automatisiertem Server-Setup (PM2, Nginx, UFW-Firewall, SSH-Hardening)",
    ],
  },
  {
    title: "Bereichsleiter Entwicklung",
    company: "SiH",
    location: "Remote",
    startDate: "2018-06",
    endDate: "2022-01",
    current: false,
    description:
      "Leitung von Entwicklungsinitiativen und Management technischer Teams für Healthcare-Technologie-Lösungen.",
    responsibilities: [
      "Leitung des Entwicklungsteams und technische Strategieplanung",
      "Full-Stack-Entwicklung mit React, Node.js und modernen JavaScript-Frameworks",
      "Datenbank-Design und Performance-Optimierung (MongoDB, PostgreSQL)",
      "Agile Projektleitung mit Scrum, Sprint-Planung und Retrospektiven",
      "Aufbau von CI/CD-Pipelines mit Jenkins und Docker-Containerisierung",
      "Technische Stakeholder-Kommunikation und Architektur-Reviews",
      "Monitoring und Observability mit Logging und Alerting-Systemen",
    ],
    technologies: [
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "REST APIs",
      "MongoDB",
      "PostgreSQL",
      "Docker",
      "Jenkins",
      "Linux",
      "Git",
      "CI/CD",
      "Agile / Scrum",
    ],
    achievements: [
      "Erfolgreiche Migration von Monolith zu Microservices-Architektur",
      "Reduktion der System-Ausfallzeiten um 80% durch verbessertes Monitoring",
      "Etablierung automatisierter Tests mit einer Code Coverage von 85%",
    ],
  },
  {
    title: "Projektleiter Software Entwicklung",
    company: "Invitel GmbH",
    location: "Magdeburg, DE",
    startDate: "2013-04",
    endDate: "2018-06",
    current: false,
    description:
      "Projektmanagement und Java-Enterprise-Entwicklung für Unternehmensanwendungen.",
    responsibilities: [
      "Leitung von Software-Entwicklungsprojekten von Konzeption bis Deployment",
      "Java-Enterprise-Anwendungsentwicklung mit Spring Framework und Hibernate",
      "Team-Koordination, Ressourcenplanung und Aufbau des Teams von 3 auf 10 Entwickler",
      "Kundenanforderungsanalyse und technische Beratung",
      "Code Reviews, Qualitätssicherung und Etablierung von Entwicklungsstandards",
      "Aufbau automatisierter Deployment-Prozesse mit Maven und CI/CD",
    ],
    technologies: [
      "Java",
      "Spring Framework",
      "Hibernate",
      "MySQL",
      "Oracle DB",
      "REST APIs",
      "Maven",
      "Git",
      "Linux",
      "CI/CD",
      "Agile / Scrum",
    ],
    achievements: [
      "Erfolgreiche Lieferung von 15+ Enterprise-Projekten innerhalb von Zeit und Budget",
      "Implementierung automatisierter Deployments mit 70% schnellerer Release-Zeit",
      "Aufbau des Teams von 3 auf 10 Entwickler mit Mentoring-Programm",
    ],
  },
  {
    title: "Anwendungsentwickler",
    company: "walter services GmbH",
    location: "Magdeburg, DE",
    startDate: "2005-11",
    endDate: "2013-04",
    current: false,
    description:
      "Full-Stack-Webentwicklung mit Fokus auf Frontend-Technologien, Benutzerfreundlichkeit und Performance-Optimierung.",
    responsibilities: [
      "Frontend-Entwicklung mit HTML, CSS und JavaScript — Aufbau einer firmenweiten Komponentenbibliothek",
      "Backend-Entwicklung und API-Integration mit PHP und MySQL",
      "Datenbank-Design, Wartung und Performance-Tuning",
      "UI/UX-Design und Usability-Optimierung",
      "SEO-Optimierung und Performance-Verbesserung (50% schnellere Ladezeiten)",
      "Technische Dokumentation und Wissenstransfer",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "MySQL",
      "jQuery",
      "Apache",
      "REST APIs",
      "SEO",
      "Performance-Optimierung",
      "Linux",
    ],
    achievements: [
      "Entwicklung eines Kundenportals für 10.000+ Nutzer",
      "Verbesserung der Seitenladezeiten um 50% durch Optimierung",
      "Aufbau einer wiederverwendbaren Komponentenbibliothek, die firmenweit eingesetzt wird",
    ],
  },
  {
    title: "Freier Mitarbeiter",
    company: "CoraIT AGIS",
    location: "Magdeburg, DE",
    startDate: "2005-04",
    endDate: "2005-11",
    current: false,
    description:
      "Freelance-Softwareentwicklung und Beratungsdienstleistungen für individuelle Webanwendungen.",
    responsibilities: [
      "Entwicklung individueller Webanwendungen mit HTML, CSS, JavaScript und PHP",
      "Datenbank-Design und Implementierung mit MySQL",
      "Kundenberatung und Anforderungserhebung",
      "Projektdokumentation und technische Übergabe",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Apache"],
    achievements: [
      "Lieferung von 5 erfolgreichen Kundenprojekten",
      "Entwicklung responsiver Websites — bevor es Industriestandard wurde",
    ],
  },
];

/**
 * Professional certifications and education.
 */
export const certifications: Certification[] = [
  {
    title: "Fachinformatiker für Anwendungsentwicklung",
    issuer: "IHK Magdeburg",
    date: "2005-01",
    description:
      "Certified IT Specialist for Application Development (German Federal IT Certification)",
    credentialId: null,
  },
  {
    title: "Ausbildung: Fachinformatiker",
    issuer: "megalearn Akademie",
    date: "2003-02",
    endDate: "2005-01",
    description: "Professional training in software development and IT systems",
    credentialId: null,
  },
];

/**
 * Subset of {@link experiences} where `current` is `true`.
 *
 * Used for featuring current positions on the home page.
 */
export const currentExperiences = experiences.filter((exp) => exp.current);

/**
 * Featured experiences for home page preview (most recent 3).
 */
export const featuredExperiences = experiences.slice(0, 3);
