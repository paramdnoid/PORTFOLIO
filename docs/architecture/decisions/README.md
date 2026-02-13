# Architecture Decision Records (ADRs)

This directory contains Architecture Decision Records documenting significant technical decisions made during the development of the Portfolio project.

---

## ADR Format

Each ADR follows a consistent structure:

| Section | Description |
|---------|-------------|
| **Status** | Current state: Proposed, Accepted, Deprecated, Superseded |
| **Context** | The situation, constraints, and forces that led to the decision |
| **Decision** | The chosen approach and rationale |
| **Consequences** | Positive and negative outcomes, trade-offs, and follow-up actions |

---

## ADR Index

| ADR | Title | Status |
|-----|-------|--------|
| [001](001-nextjs-app-router.md) | Next.js with App Router | Accepted |
| [002](002-shadcn-ui.md) | shadcn/ui over Material UI, Chakra, Radix directly | Accepted |
| [003](003-motion-animations.md) | Motion (motion/react) over GSAP or CSS-only | Accepted |
| [004](004-tailwind-v4.md) | Tailwind v4 CSS-based approach | Accepted |
| [005](005-dark-mode-first.md) | Dark mode as default | Accepted |
| [006](006-next-intl-i18n.md) | next-intl for internationalization | Accepted |

---

## When to Create an ADR

Create a new ADR when:

- Choosing a major technology or library
- Adopting a significant architectural pattern
- Making a decision that affects multiple parts of the system
- Reversing or significantly changing a previous decision (mark the old one as Superseded)

---

## Naming Convention

ADRs are numbered sequentially: `NNN-short-title.md` (e.g., `007-graphql-api.md`).
