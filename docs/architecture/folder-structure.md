# Folder Structure

This document provides a full file tree of the project with inline explanations for each directory.

---

## Root Structure

```
PORTFOLIO/
├── docs/                    # Project documentation (this directory)
├── messages/                 # Translation message files per locale
├── scripts/                  # Build and utility scripts
├── public/                   # Static assets (images, favicon, etc.)
├── src/                      # Application source code
├── docker/                   # Docker configuration
├── test/                     # Test setup
├── .github/                  # CI workflows and Dependabot
├── package.json
├── tsconfig.json
├── postcss.config.mjs
├── next.config.ts
├── vitest.config.ts          # Test configuration
├── eslint.config.ts          # ESLint flat config
├── commitlint.config.ts      # Commit message linting
├── .prettierrc.json          # Prettier configuration
└── .editorconfig             # Editor settings
```

---

## docs/

Project documentation. Contains architecture docs, ADRs, component docs, styling guides, i18n docs, how-to guides, and changelog.

```
docs/
├── README.md                 # Documentation index
├── architecture/             # Architecture documentation
│   ├── overview.md
│   ├── tech-stack.md
│   ├── folder-structure.md
│   └── decisions/            # Architecture Decision Records (ADRs)
│       ├── README.md
│       ├── 001-nextjs-app-router.md
│       ├── 002-shadcn-ui.md
│       ├── 003-motion-animations.md
│       ├── 004-tailwind-v4.md
│       ├── 005-dark-mode-first.md
│       └── 006-next-intl-i18n.md
├── components/               # Component documentation (placeholder)
├── styling/                  # Styling documentation (placeholder)
├── i18n/                     # i18n documentation (placeholder)
├── guides/                   # How-to guides (placeholder)
└── changelog/                # Version history (placeholder)
```

---

## messages/

Translation message files organized by locale. Each locale has a subdirectory (e.g., `en/`, `es/`, `fr/`) containing JSON files split by namespace.

```
messages/
├── en/                       # English (default locale)
│   ├── about.json
│   ├── common.json
│   ├── contact.json
│   ├── footer.json
│   ├── hero.json
│   ├── metadata.json
│   ├── navigation.json
│   ├── projects.json
│   └── skills.json
├── es/                       # Spanish
├── fr/                       # French
└── ...                       # ~128 locales (see src/i18n/locales.ts)
```

**Namespace splitting** reduces bundle size by loading only the messages needed for each page/component.

---

## scripts/

Build and utility scripts. Used for code generation, locale setup, or other automation.

```
scripts/
└── generate-locales.ts       # Generates or syncs locale message files
```

---

## src/

Application source code. Contains the Next.js app, components, config, lib, types, and i18n setup.

```
src/
├── app/                      # Next.js App Router
├── components/               # React components
├── config/                   # Site and app configuration
├── i18n/                     # Internationalization setup
├── lib/                      # Utilities and shared logic
├── types/                    # TypeScript type definitions
├── env.ts                    # Environment variable validation (zod)
└── proxy.ts                  # next-intl proxy for locale handling
```

---

## src/app/

Next.js App Router. Defines routes, layouts, and page-level logic.

```
src/app/
├── layout.tsx                # Root layout (minimal; delegates to [locale])
├── globals.css               # Global CSS and Tailwind imports
├── not-found.tsx             # 404 page
├── robots.ts                 # robots.txt generation
├── sitemap.ts                # Sitemap generation
└── [locale]/                 # Locale-scoped routes (dynamic segment)
    ├── layout.tsx            # Locale layout: providers, Header, Footer, main
    ├── page.tsx              # Home page
    ├── loading.tsx           # Loading UI (Suspense fallback)
    ├── error.tsx             # Error boundary
    ├── about/
    │   └── page.tsx
    ├── contact/
    │   ├── page.tsx
    │   └── contact-content.tsx
    └── projects/
        ├── page.tsx
        ├── projects-content.tsx
        └── [slug]/
            ├── page.tsx
            ├── project-detail-content.tsx
            └── not-found.tsx   # Project-specific 404
```

**Pattern:** Pages are thin wrappers; content is often extracted to `*-content.tsx` for clarity and reuse.

---

## src/components/

React components organized by role.

```
src/components/
├── ui/                       # Primitive UI components (shadcn/ui)
│   ├── badge.tsx
│   ├── button.tsx
│   ├── card.tsx
│   ├── command.tsx           # cmdk command palette
│   ├── dialog.tsx
│   ├── popover.tsx
│   ├── separator.tsx
│   ├── sheet.tsx
│   ├── sonner.tsx            # Toast component
│   └── tooltip.tsx
├── layout/                   # Layout components
│   ├── footer.tsx
│   ├── header.tsx
│   ├── locale-switcher.tsx
│   ├── mobile-nav.tsx
│   └── theme-toggle.tsx
├── sections/                 # Page section components
│   ├── about-preview.tsx
│   ├── contact-cta.tsx
│   ├── hero.tsx
│   ├── projects-showcase.tsx
│   └── skills.tsx
├── shared/                   # Reusable domain components
│   ├── animated-wrapper.tsx
│   ├── project-card.tsx
│   └── section-heading.tsx
└── providers/                # Context providers
    └── theme-provider.tsx
```

---

## src/config/

Static configuration for the site. No React components.

```
src/config/
├── navigation.ts             # Nav links structure
├── projects.ts               # Project data for portfolio
├── site.ts                   # Site name, URL, metadata defaults
└── skills.ts                 # Skills data for skills section
```

---

## src/lib/

Utility functions and shared logic.

```
src/lib/
├── fonts.ts                  # Geist font configuration
└── utils.ts                  # cn() and other helpers
```

---

## src/types/

TypeScript type definitions and interfaces.

```
src/types/
└── index.ts                  # Shared types (Project, NavItem, etc.)
```

---

## src/i18n/

Internationalization configuration for next-intl.

```
src/i18n/
├── routing.ts                # Locale list, default locale, prefix strategy
├── locales.ts                # Locale codes, direction (LTR/RTL)
├── navigation.ts             # Locale-aware Link and useRouter
└── request.ts                # Server-side i18n config (getRequestConfig)
```

---

## proxy.ts

The proxy lives at **`src/proxy.ts`** (Next.js 16 convention, replaces the former `middleware.ts`). It uses `next-intl` to:

- Detect and set the locale from the URL or `Accept-Language`
- Redirect to the appropriate locale prefix when needed
- Exclude static files and API routes via the matcher config

```ts
// src/proxy.ts
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
```

---

## Summary

| Path                | Purpose                                 |
| ------------------- | --------------------------------------- |
| `docs/`             | Documentation                           |
| `messages/`         | Translation JSON per locale             |
| `scripts/`          | Build/utility scripts                   |
| `src/app/[locale]/` | Pages and routes                        |
| `src/components/`   | UI, layout, sections, shared, providers |
| `src/config/`       | Site, navigation, projects, skills      |
| `src/lib/`          | Utilities and fonts                     |
| `src/types/`        | TypeScript types                        |
| `src/i18n/`         | i18n routing and config                 |
| `src/env.ts`        | Environment variable validation         |
| `src/proxy.ts`      | Locale proxy                            |
