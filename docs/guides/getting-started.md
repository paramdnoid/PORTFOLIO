# Getting Started

This guide helps new developers set up the Portfolio project and understand its structure.

---

## Prerequisites

- **Node.js** >= 20.9
- **npm** (included with Node.js)

Verify your setup:

```bash
node -v   # Should be v20.9.0 or higher
npm -v
```

---

## Setup Steps

### 1. Clone the Repository

```bash
git clone <repository-url>
cd portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

### 4. Open in Browser

Navigate to:

```
http://localhost:3000
```

The default locale (English) is served at the root. Other locales use the path prefix (e.g. `http://localhost:3000/de` for German).

---

## Project Overview

The Portfolio is a Next.js 16 application with:

- **App Router** — File-based routing under `src/app/[locale]/`
- **i18n** — ~128 locales via next-intl, with namespace-based message files
- **UI** — shadcn/ui v4 components, Tailwind CSS v4, dark/light theme
- **Animations** — Motion library for scroll and entrance effects
- **Static generation** — All locale routes are pre-rendered at build time

### Key Directories

| Directory | Purpose |
|-----------|---------|
| `src/app/[locale]/` | Pages and layouts (locale-aware) |
| `src/components/` | Reusable UI components |
| `src/config/` | Projects, navigation, site config |
| `src/i18n/` | Locale config, routing, request config |
| `messages/` | Translation JSON files per locale |
| `public/` | Static assets (images, etc.) |

---

## Key Commands

| Command | Description |
|---------|--------------|
| `npm run dev` | Start development server (hot reload) |
| `npm run build` | Production build |
| `npm run start` | Start production server (after build) |
| `npm run lint` | Run ESLint |

### Generate Locale Message Files

When adding new locales or namespaces:

```bash
npx tsx scripts/generate-locales.ts
```

This creates `messages/{code}/*.json` from English for any locale that doesn't have them.

---

## Next Steps

- [Development Workflow](development-workflow.md) — Git strategy, commits, code review
- [Adding a Project](adding-a-project.md) — Add a project to the portfolio
- [Adding a Page](adding-a-page.md) — Create a new page with i18n
- [Deployment](deployment.md) — Deploy to Vercel or other platforms
