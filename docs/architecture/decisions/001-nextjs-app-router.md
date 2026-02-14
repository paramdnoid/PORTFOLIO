# ADR 001: Next.js with App Router

## Status

**Accepted**

## Context

The Portfolio project requires:

- **Server-Side Rendering (SSR)** and **Static Site Generation (SSG)** for SEO and fast initial loads
- **File-based routing** for predictable, maintainable URL structure
- **React Server Components (RSC)** to reduce client bundle size and improve performance
- **Internationalization (i18n)** with locale-prefixed routes (e.g., `/en`, `/es`)
- **Metadata generation** per page and locale for social sharing and search engines

Alternative frameworks considered:

- **Remix** — Strong data loading story but different mental model; smaller ecosystem
- **Astro** — Excellent for content sites but less suited for highly interactive React apps
- **Vite + React Router** — Full client-side control but requires manual SSR/SSG setup
- **Create React App (deprecated)** — No built-in SSR, outdated tooling

Next.js provides the best balance of ecosystem, documentation, and built-in features for a React-based portfolio with i18n and RSC.

## Decision

Use **Next.js 16** with the **App Router** as the primary framework.

- All routes live under `src/app/`
- The `[locale]` dynamic segment handles internationalization at the routing level
- React Server Components are the default; Client Components are used only when needed
- `generateStaticParams` enables static generation for all locale routes
- The proxy handles locale detection and redirects before the request reaches the App Router

## Consequences

### Positive

- **`[locale]` segment for i18n** — Locale is part of the URL structure, enabling clean URLs and static generation per locale
- **RSC by default** — Smaller client bundles, faster hydration, direct server data access
- **Built-in optimizations** — Image optimization, font optimization, automatic code splitting
- **Strong ecosystem** — next-intl, next-themes, and other libraries integrate seamlessly
- **Vercel deployment** — First-class support if deploying to Vercel

### Negative

- **Learning curve** — App Router and RSC have different patterns than Pages Router
- **Framework lock-in** — Migrating away from Next.js would require significant refactoring
- **Convention over configuration** — Some flexibility is traded for convention

### Follow-up

- Document RSC vs. Client Component usage in [Architecture Overview](../overview.md)
- Ensure all pages use `generateStaticParams` for static export compatibility
