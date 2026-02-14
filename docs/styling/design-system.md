# Design System

This document describes the design tokens, typography, spacing, and visual system used across the portfolio application.

## Color System

Colors are defined using **OKLCH** (Oklab Lightness Chroma Hue) for perceptually uniform color space and wide gamut support.

### CSS Variables

All colors are exposed as CSS custom properties in `:root` and `.dark`. The theme layer maps these to Tailwind utilities via `@theme inline` in `globals.css`.

| Variable                 | Light Mode                   | Dark Mode                    | Usage                        |
| ------------------------ | ---------------------------- | ---------------------------- | ---------------------------- |
| `--background`           | `oklch(1 0 0)`               | `oklch(0.141 0.005 285.823)` | Page background              |
| `--foreground`           | `oklch(0.141 0.005 285.823)` | `oklch(0.985 0 0)`           | Primary text                 |
| `--primary`              | `oklch(0.21 0.006 285.885)`  | `oklch(0.92 0.004 286.32)`   | Buttons, links               |
| `--primary-foreground`   | `oklch(0.985 0 0)`           | `oklch(0.21 0.006 285.885)`  | Text on primary              |
| `--secondary`            | `oklch(0.967 0.001 286.375)` | `oklch(0.274 0.006 286.033)` | Secondary surfaces           |
| `--secondary-foreground` | `oklch(0.21 0.006 285.885)`  | `oklch(0.985 0 0)`           | Text on secondary            |
| `--muted`                | `oklch(0.967 0.001 286.375)` | `oklch(0.274 0.006 286.033)` | Muted backgrounds            |
| `--muted-foreground`     | `oklch(0.552 0.016 285.938)` | `oklch(0.705 0.015 286.067)` | Muted text                   |
| `--accent`               | `oklch(0.967 0.001 286.375)` | `oklch(0.274 0.006 286.033)` | Hover states                 |
| `--accent-foreground`    | `oklch(0.21 0.006 285.885)`  | `oklch(0.985 0 0)`           | Text on accent               |
| `--destructive`          | `oklch(0.577 0.245 27.325)`  | `oklch(0.704 0.191 22.216)`  | Errors, destructive actions  |
| `--border`               | `oklch(0.92 0.004 286.32)`   | `oklch(1 0 0 / 10%)`         | Borders                      |
| `--input`                | `oklch(0.92 0.004 286.32)`   | `oklch(1 0 0 / 15%)`         | Input borders                |
| `--ring`                 | `oklch(0.705 0.015 286.067)` | `oklch(0.552 0.016 285.938)` | Focus rings                  |
| `--card`                 | `oklch(1 0 0)`               | `oklch(0.21 0.006 285.885)`  | Card backgrounds             |
| `--card-foreground`      | `oklch(0.141 0.005 285.823)` | `oklch(0.985 0 0)`           | Card text                    |
| `--popover`              | `oklch(1 0 0)`               | `oklch(0.21 0.006 285.885)`  | Popover/dropdown backgrounds |
| `--popover-foreground`   | `oklch(0.141 0.005 285.823)` | `oklch(0.985 0 0)`           | Popover text                 |

### Tailwind Usage

```tsx
<div className="bg-background text-foreground" />
<Button className="bg-primary text-primary-foreground" />
<p className="text-muted-foreground" />
<div className="border border-border" />
```

---

## Typography

### Font Families

| Token         | Font       | Variable            | Usage               |
| ------------- | ---------- | ------------------- | ------------------- |
| `--font-sans` | Geist Sans | `--font-geist-sans` | Body text, headings |
| `--font-mono` | Geist Mono | `--font-geist-mono` | Code, monospace     |

Fonts are loaded via `next/font/google` in `src/lib/fonts.ts`:

```ts
export const fontSans = Geist({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
});

export const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});
```

The root `body` uses `font-sans antialiased` by default.

### Font Sizes

Tailwind's default scale is used. Common sizes in the app:

| Class       | Approx. Size    | Usage                     |
| ----------- | --------------- | ------------------------- |
| `text-xs`   | 0.75rem (12px)  | Labels, badges            |
| `text-sm`   | 0.875rem (14px) | Secondary text, nav       |
| `text-base` | 1rem (16px)     | Body                      |
| `text-lg`   | 1.125rem (18px) | Lead paragraphs           |
| `text-xl`   | 1.25rem (20px)  | Card titles               |
| `text-2xl`  | 1.5rem (24px)   | Hero role                 |
| `text-3xl`  | 1.875rem (30px) | Section headings (mobile) |
| `text-4xl`  | 2.25rem (36px)  | Section headings (sm+)    |
| `text-5xl`  | 3rem (48px)     | Hero name (mobile)        |
| `text-6xl`  | 3.75rem (60px)  | Hero name (sm)            |
| `text-7xl`  | 4.5rem (72px)   | Hero name (lg)            |

### Font Weights

- `font-medium` — 500 (labels, nav)
- `font-semibold` — 600 (category headings)
- `font-bold` — 700 (headings)

### Tracking

- `tracking-tight` — Headings
- `tracking-wider` — Uppercase labels (e.g., section subtitles)

---

## Spacing System

The project uses Tailwind's default spacing scale (4px base):

| Token | Value         | Common Usage                       |
| ----- | ------------- | ---------------------------------- |
| `1`   | 0.25rem (4px) | Tight gaps                         |
| `2`   | 0.5rem (8px)  | Icon gaps                          |
| `4`   | 1rem (16px)   | Section padding, gaps              |
| `6`   | 1.5rem (24px) | Card padding                       |
| `8`   | 2rem (32px)   | Large gaps                         |
| `12`  | 3rem (48px)   | Section spacing                    |
| `24`  | 6rem (96px)   | Section vertical padding (`py-24`) |

### Container

- `container` — Responsive max-width
- `max-w-5xl` — 64rem (1024px), used for content width
- `px-4` — Horizontal padding on mobile

---

## Border Radius

Radius tokens are derived from a base `--radius` variable:

| Token          | Formula                      | Usage           |
| -------------- | ---------------------------- | --------------- |
| `--radius`     | 0.625rem (10px)              | Base            |
| `--radius-sm`  | `calc(var(--radius) - 4px)`  | Small elements  |
| `--radius-md`  | `calc(var(--radius) - 2px)`  | Buttons, inputs |
| `--radius-lg`  | `var(--radius)`              | Cards           |
| `--radius-xl`  | `calc(var(--radius) + 4px)`  | Large cards     |
| `--radius-2xl` | `calc(var(--radius) + 8px)`  | Modals          |
| `--radius-3xl` | `calc(var(--radius) + 12px)` | —               |
| `--radius-4xl` | `calc(var(--radius) + 16px)` | —               |

### Tailwind Classes

```tsx
rounded - md; // radius-md
rounded - lg; // radius-lg
rounded - xl; // radius-xl
rounded - full; // 9999px (pills, avatars)
```

---

## Shadows

Shadcn components use `shadow-sm`, `shadow`, `shadow-lg` etc. Custom shadows are not heavily customized; the design relies on borders and subtle elevation.

- `shadow-xs` — Very subtle (buttons)
- `shadow-sm` — Cards
- `shadow-lg` — Modals, popovers

---

## RTL Support

Direction-aware custom properties for RTL locales:

```css
[dir="rtl"] {
  --direction-start: right;
  --direction-end: left;
}
[dir="ltr"] {
  --direction-start: left;
  --direction-end: right;
}
```

Use `start`/`end` or `ms`/`me` (margin-inline-start/end) for directional spacing when supporting RTL.
