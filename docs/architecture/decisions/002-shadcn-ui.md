# ADR 002: shadcn/ui over Material UI, Chakra, Radix directly

## Status

**Accepted**

## Context

The project needs a component library for:

- Accessible, production-ready UI primitives (buttons, dialogs, dropdowns, etc.)
- Consistent design language across the portfolio
- Customization to match brand and design requirements
- Compatibility with Tailwind CSS and the existing styling approach

Alternatives considered:

| Option | Pros | Cons |
|--------|------|------|
| **Material UI** | Mature, comprehensive, theming | Heavy bundle, opinionated design, harder to customize deeply |
| **Chakra UI** | Good DX, accessible | v2 has different styling model; v3 still evolving |
| **Radix UI directly** | Unstyled, accessible, flexible | Requires building all styling from scratch |
| **shadcn/ui** | Copy-paste, Tailwind-native, Radix-based | Components live in repo; no npm package to upgrade |

## Decision

Use **shadcn/ui v4** as the primary component library.

Key reasons:

1. **Copy-paste model** — Components are copied into the project, not installed as a dependency. Full ownership and customization without fighting a library's API.
2. **Full customization** — Every component is editable source code. No black boxes or override gymnastics.
3. **Tailwind-native** — Built with Tailwind from the ground up. No CSS-in-JS or separate design tokens to reconcile.
4. **Accessible** — Built on Radix UI primitives, which provide ARIA attributes, keyboard navigation, and focus management out of the box.
5. **Consistent with stack** — Aligns with Tailwind v4, Next.js, and React 19.

## Consequences

### Positive

- Complete control over component appearance and behavior
- No version conflicts with Radix or Tailwind
- Smaller bundle than full UI libraries (only what we use)
- Easy to extend or fork components for project-specific needs
- Components can be Server or Client Components as appropriate

### Negative

- Components must be manually updated when shadcn releases new versions
- No single "upgrade" command; changes require manual merge or re-copy
- Team must understand the component source to modify it

### Follow-up

- Document which components are used and any customizations in [Components](../../components/)
- Consider a script to check for shadcn updates and diff changes
