# ADR 004: Tailwind v4 CSS-based approach

## Status

**Accepted**

## Context

The project requires:

- Utility-first CSS for rapid, consistent styling
- Theme support (colors, spacing, typography) aligned with design system
- Dark mode support via CSS variables
- Minimal configuration overhead
- Compatibility with shadcn/ui and next-themes

Tailwind CSS v4 introduces a **CSS-first** configuration model, moving away from the JavaScript `tailwind.config.js` file.

## Decision

Use **Tailwind CSS v4** with its CSS-based configuration approach.

Key characteristics:

1. **No config file** — Configuration is done in CSS using `@theme` and custom properties. No `tailwind.config.ts` for most use cases.
2. **CSS variables** — Theme values (colors, radii, spacing) are exposed as CSS variables. Easy to override for dark mode or theming.
3. **OKLCH colors** — Tailwind v4 uses OKLCH by default for better perceptual uniformity and wider color gamut support.
4. **PostCSS / Vite integration** — Uses `@tailwindcss/postcss` for integration with the build pipeline.
5. **Smaller output** — Improved purging and optimization reduce final CSS size.

## Consequences

### Positive

- Single source of truth for design tokens in CSS
- Dark mode via `next-themes` and `class` strategy works seamlessly with CSS variables
- OKLCH provides better color consistency across themes
- Less JavaScript in the build; config lives in stylesheets
- Aligns with modern CSS capabilities (custom properties, color functions)

### Negative

- Different mental model from Tailwind v3; team must learn new config approach
- Some v3 plugins may not be compatible yet
- Migration from v3 projects requires config translation

### Follow-up

- Document theme variables and customization in [Styling](../../styling/)
- Ensure shadcn/ui components use Tailwind v4-compatible syntax
- Use `tw-animate-css` or similar for animation utilities if needed
