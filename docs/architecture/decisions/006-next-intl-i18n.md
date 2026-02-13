# ADR 006: next-intl for internationalization

## Status

**Accepted**

## Context

The Portfolio aims to support a **large number of locales** (~128) for maximum reach. Requirements include:

- **Next.js App Router** compatibility (RSC, Server Components, middleware)
- **Namespace splitting** — Load only the messages needed per page/component to keep bundles small
- **Fallback strategy** — Missing translations should fall back to English (or another base locale) via deep merge
- **RTL support** — Right-to-left languages (e.g., Arabic, Hebrew) must be supported
- **SEO** — Locale-specific URLs, metadata, and `hreflang` for search engines
- **Type safety** — TypeScript support for message keys and interpolation

Alternatives considered:

| Option | Pros | Cons |
|--------|------|------|
| **next-i18next** | Mature, widely used | Built for Pages Router; App Router support is less mature |
| **react-intl** | Feature-rich, FormatJS ecosystem | No built-in Next.js integration; manual setup for RSC |
| **Custom solution** | Full control | High effort; reinventing i18n (routing, loading, RTL) is error-prone |
| **next-intl** | App Router native, RSC support, namespaces, RTL | Newer than next-i18next; smaller community |

## Decision

Use **next-intl** for internationalization.

Key reasons:

1. **~128 locales** — Supports the full set of locales needed for global reach
2. **Namespace splitting** — Messages are split by namespace (e.g., `hero`, `navigation`, `projects`). Each page loads only what it needs.
3. **Deep merge fallback to EN** — Missing keys in a locale fall back to English (or configured default) via deep object merge. No empty strings for incomplete translations.
4. **RTL support** — `dir` attribute and locale direction are handled. Layout and components can adapt for RTL.
5. **App Router native** — Middleware, `getTranslations`, `getMessages`, `NextIntlClientProvider` integrate with App Router and RSC.
6. **Type-safe** — TypeScript can infer message keys when configured correctly.
7. **Middleware integration** — Locale detection, redirects, and prefix handling are built-in.

## Consequences

### Positive

- Clean integration with Next.js 16 and App Router
- Small message bundles per route thanks to namespaces
- Graceful fallback prevents blank UI for incomplete translations
- RTL languages work without custom hacks
- Single library handles routing, loading, and client/server usage

### Negative

- Message structure must be planned (namespaces, nesting) to avoid duplication
- Adding a new locale requires message files; automation (e.g., `scripts/generate-locales.ts`) helps
- Team must learn next-intl's API (server vs. client usage)

### Follow-up

- Document message structure and namespace usage in [i18n](../../i18n/)
- Use `scripts/generate-locales.ts` to scaffold new locales from English
- Ensure `getLocaleDirection` is used in layout for RTL (`dir` attribute on `<html>`)
