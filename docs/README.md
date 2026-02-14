# Portfolio Documentation

This directory contains comprehensive documentation for the Portfolio project. All documentation is written in English and maintained for production use.

---

## Architecture

Core architectural decisions, technology choices, and project structure.

| Document                                                                 | Description                                                                            |
| ------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- |
| [Architecture Overview](architecture/overview.md)                        | High-level architecture with request flow diagram, three-layer model, and RSC strategy |
| [Tech Stack](architecture/tech-stack.md)                                 | Complete table of technologies with versions, purposes, and documentation links        |
| [Folder Structure](architecture/folder-structure.md)                     | Full file tree with inline explanations for each directory                             |
| [Architecture Decision Records (ADRs)](architecture/decisions/README.md) | Index of all ADRs documenting key technical decisions                                  |

---

## Components

Documentation for UI components and their usage.

| Document                                               | Description                                              |
| ------------------------------------------------------ | -------------------------------------------------------- |
| [Component Overview](components/overview.md)           | Component hierarchy, naming conventions, composition     |
| [Layout Components](components/layout-components.md)   | Header, Footer, MobileNav, ThemeToggle, LocaleSwitcher   |
| [Section Components](components/section-components.md) | Hero, AboutPreview, ProjectsShowcase, Skills, ContactCTA |
| [Shared Components](components/shared-components.md)   | SectionHeading, ProjectCard, AnimatedWrapper             |
| [UI Components](components/ui-components.md)           | shadcn/ui primitives (Button, Card, Badge, etc.)         |

---

## Styling

Design system, theming, and CSS conventions.

| Document                                              | Description                                      |
| ----------------------------------------------------- | ------------------------------------------------ |
| [Design System](styling/design-system.md)             | OKLCH colors, typography, spacing, CSS variables |
| [Responsive Strategy](styling/responsive-strategy.md) | Breakpoints, mobile-first, responsive patterns   |

---

## i18n

Internationalization setup and usage.

| Document                                             | Description                                         |
| ---------------------------------------------------- | --------------------------------------------------- |
| [i18n Overview](i18n/overview.md)                    | Architecture, request flow, namespaces, RTL support |
| [Adding a Language](i18n/adding-a-language.md)       | Step-by-step guide to add a new locale              |
| [Translation Workflow](i18n/translation-workflow.md) | Manual and AI-assisted translation, QA, CI          |
| [Namespaces](i18n/namespaces.md)                     | Full key reference for all 9 namespaces             |
| [RTL Support](i18n/rtl-support.md)                   | RTL languages and CSS conventions                   |
| [Locale List](i18n/locale-list.md)                   | Complete table of ~128 locales by region            |

---

## Guides

How-to guides and tutorials for common tasks.

| Document                                               | Description                            |
| ------------------------------------------------------ | -------------------------------------- |
| [Getting Started](guides/getting-started.md)           | Prerequisites, setup, project overview |
| [Development Workflow](guides/development-workflow.md) | Git strategy, commits, code review     |
| [Adding a Project](guides/adding-a-project.md)         | Add a project to the portfolio         |
| [Adding a Page](guides/adding-a-page.md)               | Create a new page with i18n            |
| [Deployment](guides/deployment.md)                     | Deploy to Vercel or other platforms    |
| [Performance](guides/performance.md)                   | Lighthouse targets, RSC, images, fonts |

---

## Changelog

Project history and release notes.

| Document                     | Description                         |
| ---------------------------- | ----------------------------------- |
| [Changelog](../CHANGELOG.md) | Version history and notable changes |

---

## Quick Links

- **New to the project?** Start with [Architecture Overview](architecture/overview.md)
- **Understanding tech choices?** See [Tech Stack](architecture/tech-stack.md) and [ADRs](architecture/decisions/README.md)
- **Finding your way around?** Use [Folder Structure](architecture/folder-structure.md)
