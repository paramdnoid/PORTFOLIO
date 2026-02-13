# i18n Architecture Overview

This document describes the internationalization (i18n) architecture of the Portfolio application, including the request flow, library usage, message structure, and RTL support.

---

## Request Flow Diagram

```mermaid
flowchart TB
    subgraph Request["Incoming Request"]
        A[User visits URL]
    end

    subgraph Middleware["Middleware (locale detection)"]
        B[next-intl middleware]
        C{Valid locale?}
        D[Redirect to /locale/path]
        E[Continue with locale]
    end

    subgraph Routing["[locale] segment"]
        F[App Router: src/app/[locale]/]
        G[Locale from URL segment]
    end

    subgraph i18n["i18n/request.ts"]
        H[load messages for locale]
        I[Load English fallback if locale ≠ en]
        J[Deep merge: locale overrides EN]
        K[Return messages to provider]
    end

    subgraph Provider["NextIntlClientProvider"]
        L[Inject messages into React tree]
    end

    subgraph Components["Components"]
        M[useTranslations namespace]
        N[getTranslations namespace]
        O[Render translated text]
    end

    A --> B
    B --> C
    C -->|No| D
    C -->|Yes| E
    D --> F
    E --> F
    F --> G
    G --> H
    H --> I
    I --> J
    J --> K
    K --> L
    L --> M
    L --> N
    M --> O
    N --> O
```

---

## Architecture Summary

| Stage | Location | Responsibility |
|-------|----------|----------------|
| **Middleware** | `src/middleware.ts` | Detects locale from URL/headers, redirects invalid requests |
| **[locale] segment** | `src/app/[locale]/` | Dynamic route segment; all pages live under a locale |
| **i18n/request.ts** | `src/i18n/request.ts` | Loads messages for the current locale, applies deep merge fallback |
| **NextIntlClientProvider** | `src/app/[locale]/layout.tsx` | Provides messages to the React tree |
| **Components** | Throughout `src/` | Use `useTranslations()` (client) or `getTranslations()` (server) |

---

## next-intl Library

The project uses [next-intl](https://next-intl-docs.vercel.app/) for internationalization. Key features:

- **App Router integration** — Works natively with Next.js 13+ App Router
- **Server and client components** — `getTranslations()` for RSC, `useTranslations()` for client components
- **Type-safe messages** — TypeScript support for translation keys
- **Locale routing** — `localePrefix: "as-needed"` (default locale has no prefix; others use `/de`, `/ar`, etc.)
- **Static generation** — All locales are pre-rendered via `generateStaticParams()`

---

## Namespace-Based Message Files

Messages are organized into **9 namespaces**, each stored as a JSON file under `messages/{locale}/`:

| Namespace | File | Purpose |
|-----------|------|---------|
| `common` | `common.json` | Shared UI strings (buttons, labels, actions) |
| `navigation` | `navigation.json` | Nav links (home, about, projects, contact) |
| `hero` | `hero.json` | Hero section (greeting, name, role, tagline, CTAs) |
| `about` | `about.json` | About section content |
| `projects` | `projects.json` | Projects section and project cards |
| `skills` | `skills.json` | Skills categories and labels |
| `contact` | `contact.json` | Contact form and messages |
| `footer` | `footer.json` | Footer content |
| `metadata` | `metadata.json` | Page titles and descriptions (SEO) |

Example usage:

```tsx
// Client component
const t = useTranslations("hero");
return <h1>{t("greeting")} {t("name")}</h1>;

// Server component
const t = await getTranslations({ locale, namespace: "metadata" });
return { title: t("homeTitle") };
```

---

## Deep Merge Fallback to English

For non-English locales, messages are **deep merged** with English as the fallback:

1. Load all namespaces for the requested locale (e.g. `de`)
2. Load all namespaces for English (`en`)
3. **Deep merge**: `deepMerge(englishMessages, localeMessages)`
4. Result: Missing keys in `de` show English text; translated keys override

This ensures:
- **No broken UI** — Incomplete translations still display readable text
- **Progressive translation** — You can translate one namespace at a time
- **Consistency** — New keys added to English automatically appear until translated

---

## RTL Support via `dir` Attribute

Right-to-left (RTL) languages are supported. The locale layout sets `dir="rtl"` on the `<html>` element for RTL locales:

```tsx
const dir = getLocaleDirection(locale);  // from src/i18n/locales.ts
return <html lang={locale} dir={dir} ...>
```

RTL locales: Arabic (`ar`), Persian (`fa`), Hebrew (`he`), Kurdish (`ku`), Pashto (`ps`), Sindhi (`sd`), Urdu (`ur`), Uyghur (`ug`), Yiddish (`yi`).

See [RTL Support](rtl-support.md) for details.

---

## Supported Locales

The application supports **~128 locales** across 6 regions:

- **Europe** — 50 locales (e.g. en, de, fr, es)
- **Asia** — 33 locales (e.g. zh, ja, ko, hi)
- **Middle East** — 9 locales (ar, fa, he, etc., including RTL)
- **Africa** — 27 locales
- **Americas** — 4 locales
- **Oceania** — 4 locales

See [Locale List](locale-list.md) for the complete table.

---

## Related Documentation

- [Adding a Language](adding-a-language.md) — Step-by-step guide to add a new locale
- [Translation Workflow](translation-workflow.md) — Manual and AI-assisted translation
- [Namespaces](namespaces.md) — Full key reference for all namespaces
- [RTL Support](rtl-support.md) — RTL languages and CSS conventions
- [Locale List](locale-list.md) — Complete table of supported locales
