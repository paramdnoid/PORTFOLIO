# Development Workflow

This document describes the Git workflow, commit conventions, and code review practices for the Portfolio project.

---

## Git Branch Strategy

| Branch      | Purpose                                        |
| ----------- | ---------------------------------------------- |
| `main`      | Production-ready code; protected               |
| `feature/*` | New features (e.g. `feature/add-blog-page`)    |
| `fix/*`     | Bug fixes (e.g. `fix/contact-form-validation`) |

### Workflow

1. Create a branch from `main` for your work
2. Make commits following the conventions below
3. Open a pull request (PR) when ready
4. Address review feedback
5. Merge after approval

---

## Commit Conventions

Use [Conventional Commits](https://www.conventionalcommits.org/) for clear, machine-readable commit messages.

### Format

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Types

| Type       | Use For                                                 |
| ---------- | ------------------------------------------------------- |
| `feat`     | New feature                                             |
| `fix`      | Bug fix                                                 |
| `docs`     | Documentation only                                      |
| `style`    | Formatting, whitespace (no code change)                 |
| `refactor` | Code change that neither fixes a bug nor adds a feature |
| `test`     | Adding or updating tests                                |
| `chore`    | Build, tooling, dependencies                            |

### Examples

```
feat(projects): add project detail page with metadata
fix(contact): validate email format before submit
docs(i18n): add translation workflow guide
style: format components with Prettier
refactor(header): extract locale switcher to separate component
chore(deps): bump next-intl to 4.8.2
```

---

## Lint Before Commit

Run ESLint before committing:

```bash
npm run lint
```

Fix any reported issues. Consider enabling a pre-commit hook (e.g. via Husky) to enforce this.

---

## Code Review Checklist

When reviewing a PR, verify:

| Area              | Checklist                                                                                    |
| ----------------- | -------------------------------------------------------------------------------------------- |
| **TypeScript**    | No `any`; types are correct; no type errors                                                  |
| **Translations**  | New user-facing strings use i18n; keys added to all relevant locale files (or at least `en`) |
| **RSC vs Client** | Server components by default; `"use client"` only when needed (hooks, interactivity)         |
| **Responsive**    | Layout works on mobile, tablet, desktop                                                      |
| **Accessibility** | Semantic HTML; ARIA where needed; keyboard navigation; color contrast                        |

### RSC vs Client Components

- **Server components** — Default; use for data fetching, metadata, static content
- **Client components** — Use when you need `useState`, `useEffect`, `useTranslations` in components that require client-side interactivity, or event handlers

---

## Related Documentation

- [Getting Started](getting-started.md) — Setup and project overview
- [Adding a Page](adding-a-page.md) — Creating new pages with i18n
- [Adding a Project](adding-a-project.md) — Adding portfolio projects
