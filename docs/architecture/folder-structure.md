# Folder Structure

This document provides a full file tree of the project with inline explanations for each directory.

---

## Root Structure

```
PORTFOLIO/
├── docs/                    # Project documentation (this directory)
├── e2e/                     # Playwright E2E tests
├── messages/                # Translation message files per locale
├── scripts/                 # Build and utility scripts
├── public/                  # Static assets (images, favicon, etc.)
├── src/                     # Application source code
├── docker/                  # Docker configuration
├── test/                    # Test setup
├── .github/                 # CI workflows, Dependabot, PR template, CONTRIBUTING, SECURITY
├── .vscode/                 # VS Code workspace settings and extensions
├── sentry.client.config.ts  # Sentry client-side configuration
├── sentry.server.config.ts  # Sentry server-side configuration
├── sentry.edge.config.ts    # Sentry edge runtime configuration
├── package.json             # Dependencies, scripts, prettier/commitlint/release config
├── tsconfig.json
├── postcss.config.mjs
├── next.config.ts
├── vitest.config.ts         # Unit/component test configuration
├── playwright.config.ts     # E2E test configuration
├── eslint.config.ts         # ESLint flat config
├── typedoc.json             # TypeDoc API docs configuration
├── .editorconfig            # Editor settings
├── .npmrc                   # npm configuration
├── .nvmrc                   # Node.js version pinning
├── .dockerignore            # Docker build exclusions
└── LICENSE                  # MIT License
```

---

## docs/

Project documentation. Contains architecture docs, ADRs, component docs, styling guides, i18n docs, how-to guides, and changelog.

```
docs/
├── README.md                 # Documentation index
├── CHANGELOG.md              # Version history (Keep a Changelog)
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
├── components/               # Component documentation
├── styling/                  # Styling and design system documentation
├── i18n/                     # Internationalization documentation
└── guides/                   # How-to guides for development workflows
```

---

## e2e/

Playwright end-to-end tests for browser automation. Covers smoke tests, navigation, locale switching, theming, and cross-cutting concerns.

```
e2e/
├── fixtures.ts              # Shared test fixtures and helpers
├── smoke.spec.ts            # Basic smoke tests
├── navigation.spec.ts       # Page navigation tests
├── locale.spec.ts           # Locale switching tests
├── theme.spec.ts            # Dark/light theme tests
└── cross-concern.spec.ts    # Cross-cutting concern tests
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
├── env.ts                    # Environment variable validation (Zod)
├── instrumentation.ts        # Sentry instrumentation (server + edge)
└── middleware.ts              # Edge middleware (rate limiting + i18n routing)
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
├── icons/                    # Custom SVG icon components
│   ├── index.ts             # Barrel export
│   ├── github.tsx
│   └── linkedin.tsx
├── layout/                   # Layout components
│   ├── footer.tsx
│   ├── footer.test.tsx
│   ├── header.tsx
│   ├── locale-switcher.tsx
│   ├── mobile-nav.tsx
│   ├── theme-toggle.tsx
│   └── theme-toggle.test.tsx
├── sections/                 # Page section components
│   ├── about-preview.tsx
│   ├── contact-cta.tsx
│   ├── hero.tsx
│   ├── projects-showcase.tsx
│   └── skills.tsx
├── shared/                   # Reusable domain components
│   ├── animated-wrapper.tsx
│   ├── json-ld.tsx           # JSON-LD structured data for SEO
│   ├── project-card.tsx
│   ├── section-heading.tsx
│   └── section-heading.test.tsx
└── providers/                # Context providers
    └── theme-provider.tsx
```

**Testing convention:** Unit tests are co-located with their components as `*.test.tsx`. Accessibility tests use the `*.a11y.test.tsx` suffix.

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

## middleware.ts

The middleware lives at **`src/middleware.ts`** and combines two responsibilities:

1. **Rate limiting** — In-memory sliding-window limiter (100 requests/minute per IP). Returns `429 Too Many Requests` when exceeded. Attaches `X-RateLimit-*` headers to every response.

2. **i18n routing** — Delegates to `next-intl/middleware` to detect the visitor's locale and rewrite the URL accordingly.

```ts
// src/middleware.ts (simplified)
import createMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest): NextResponse {
  // 1. Rate limiting (per-IP sliding window)
  // 2. next-intl locale routing
  // 3. Attach rate-limit headers
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|monitoring|.*\\..*).*)"],
};
```

## instrumentation.ts

The instrumentation file at **`src/instrumentation.ts`** initializes Sentry for error tracking and performance monitoring. It conditionally loads the appropriate Sentry config based on the runtime:

- **Node.js runtime** — Imports `sentry.server.config.ts`
- **Edge runtime** — Imports `sentry.edge.config.ts`

The client-side Sentry SDK is initialized separately in `sentry.client.config.ts` at the project root.

---

## docker/

Docker configuration for containerized builds and local development.

```
docker/
├── Dockerfile               # Multi-stage production build
└── docker-compose.yml       # Local development with security hardening
```

---

## Summary

| Path                     | Purpose                                        |
| ------------------------ | ---------------------------------------------- |
| `docs/`                  | Documentation                                  |
| `e2e/`                   | Playwright E2E tests                           |
| `messages/`              | Translation JSON per locale                    |
| `scripts/`               | Build/utility scripts                          |
| `src/app/[locale]/`      | Pages and routes                               |
| `src/components/`        | UI, layout, icons, sections, shared, providers |
| `src/config/`            | Site, navigation, projects, skills             |
| `src/lib/`               | Utilities and fonts                            |
| `src/types/`             | TypeScript types                               |
| `src/i18n/`              | i18n routing and config                        |
| `src/env.ts`             | Environment variable validation                |
| `src/middleware.ts`      | Rate limiting + i18n routing                   |
| `src/instrumentation.ts` | Sentry instrumentation                         |
| `docker/`                | Dockerfile and Compose config                  |
| `sentry.*.config.ts`     | Sentry SDK configuration (client/server/edge)  |
