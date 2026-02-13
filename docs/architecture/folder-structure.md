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
├── middleware.ts             # (Not at root; see src/middleware.ts)
├── package.json
├── tsconfig.json
├── tailwind.config.ts       # (Tailwind v4 may use CSS-based config)
├── postcss.config.mjs
└── next.config.ts
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

Application source code. Contains the Next.js app, components, config, lib, types, hooks, styles, and i18n setup.

```
src/
├── app/                      # Next.js App Router
├── components/               # React components
├── config/                   # Site and app configuration
├── hooks/                    # Custom React hooks
├── i18n/                     # Internationalization setup
├── lib/                      # Utilities and shared logic
├── styles/                   # Global styles (if any beyond app/globals.css)
├── types/                    # TypeScript type definitions
└── middleware.ts            # next-intl middleware for locale handling
```

---

## src/app/

Next.js App Router. Defines routes, layouts, and page-level logic.

```
src/app/
├── layout.tsx                # Root layout (minimal; delegates to [locale])
├── globals.css               # Global CSS and Tailwind imports
├── not-found.tsx             # 404 page
└── [locale]/                 # Locale-scoped routes (dynamic segment)
    ├── layout.tsx            # Locale layout: providers, Header, Footer, main
    ├── page.tsx              # Home page
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
            └── project-detail-content.tsx
```

**Pattern:** Pages are thin wrappers; content is often extracted to `*-content.tsx` for clarity and reuse.

---

## src/components/

React components organized by role.

```
src/components/
├── ui/                       # Primitive UI components (shadcn/ui)
│   ├── button.tsx
│   ├── card.tsx
│   ├── dialog.tsx
│   ├── dropdown-menu.tsx
│   ├── popover.tsx
│   ├── scroll-area.tsx
│   ├── separator.tsx
│   ├── sheet.tsx
│   ├── tooltip.tsx
│   ├── command.tsx           # cmdk command palette
│   ├── badge.tsx
│   └── sonner.tsx            # Toast component
├── layout/                   # Layout components
│   ├── header.tsx
│   ├── footer.tsx
│   ├── locale-switcher.tsx
│   ├── theme-toggle.tsx
│   └── mobile-nav.tsx
├── sections/                 # Page section components
│   ├── hero.tsx
│   ├── skills.tsx
│   ├── about-preview.tsx
│   ├── projects-showcase.tsx
│   └── contact-cta.tsx
├── shared/                   # Reusable domain components
│   ├── project-card.tsx
│   ├── skill-badge.tsx
│   ├── animated-wrapper.tsx
│   └── section-heading.tsx
└── providers/                # Context providers
    └── theme-provider.tsx
```

---

## src/config/

Static configuration for the site. No React components.

```
src/config/
├── site.ts                   # Site name, URL, metadata defaults
├── navigation.ts             # Nav links structure
└── projects.ts               # Project data for portfolio
```

---

## src/lib/

Utility functions and shared logic.

```
src/lib/
├── utils.ts                  # cn() and other helpers
├── fonts.ts                  # Geist font configuration
└── metadata.ts               # Metadata helpers (if used)
```

---

## src/types/

TypeScript type definitions and interfaces.

```
src/types/
└── index.ts                  # Shared types (Project, NavItem, etc.)
```

---

## src/hooks/

Custom React hooks.

```
src/hooks/
├── use-scroll-spy.ts         # Scroll spy for nav highlighting
└── use-media-query.ts        # Responsive breakpoint detection
```

---

## src/styles/

Additional styles beyond `app/globals.css`. May be empty if all styles live in globals or component-scoped Tailwind.

```
src/styles/
└── (additional CSS if needed)
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

The middleware lives at **`src/middleware.ts`** (Next.js convention). It uses `next-intl` to:

- Detect and set the locale from the URL or `Accept-Language`
- Redirect to the appropriate locale prefix when needed
- Exclude static files and API routes via the matcher config

```ts
// src/middleware.ts
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
```

---

## Summary

| Path | Purpose |
|------|---------|
| `docs/` | Documentation |
| `messages/` | Translation JSON per locale |
| `scripts/` | Build/utility scripts |
| `src/app/[locale]/` | Pages and routes |
| `src/components/` | UI, layout, sections, shared, providers |
| `src/config/` | Site and app config |
| `src/lib/` | Utilities and fonts |
| `src/types/` | TypeScript types |
| `src/hooks/` | Custom hooks |
| `src/i18n/` | i18n routing and config |
| `src/middleware.ts` | Locale middleware |
