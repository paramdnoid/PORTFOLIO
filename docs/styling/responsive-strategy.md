# Responsive Strategy

This document describes the breakpoint system, mobile-first approach, and key responsive patterns used in the portfolio application.

## Breakpoints

The project uses Tailwind's default breakpoints:

| Prefix    | Min Width | Typical Usage               |
| --------- | --------- | --------------------------- |
| (default) | 0px       | Mobile-first base           |
| `sm`      | 640px     | Large phones, small tablets |
| `md`      | 768px     | Tablets                     |
| `lg`      | 1024px    | Laptops                     |
| `xl`      | 1280px    | Desktops                    |
| `2xl`     | 1536px    | Large desktops              |

### Usage

```tsx
// Mobile first: base applies to all, sm/md/lg override as viewport grows
<div className="text-3xl sm:text-4xl lg:text-5xl" />
<div className="grid grid-cols-1 md:grid-cols-2" />
<nav className="hidden md:flex" />
```

## Mobile-First Approach

Styles are written for the smallest viewport first; larger breakpoints add or override as needed.

```tsx
// Base = mobile
className = "flex flex-col gap-4";

// sm and up = horizontal layout
className = "flex flex-col gap-4 sm:flex-row sm:gap-6";

// Base = 1 column
className = "grid gap-6";

// md and up = 2 columns
className = "grid gap-6 md:grid-cols-2";
```

## Container

Content width is constrained for readability:

```tsx
<div className="container mx-auto max-w-5xl px-4">
  {/* max-w-5xl = 64rem = 1024px */}
</div>
```

- `container` — Responsive padding
- `max-w-5xl` — 1024px max width
- `mx-auto` — Centered
- `px-4` — 1rem horizontal padding on small screens

## Key Responsive Patterns

### Header: Desktop Nav vs. Hamburger

| Viewport | Navigation       | Actions                     |
| -------- | ---------------- | --------------------------- |
| &lt; md  | Hidden           | Hamburger (MobileNav)       |
| ≥ md     | Inline nav links | LocaleSwitcher, ThemeToggle |

```tsx
{/* Desktop nav - hidden below md */}
<nav className="hidden items-center gap-1 md:flex">
  {navigationItems.map(...)}
</nav>

{/* Mobile nav - only below md */}
<div className="md:hidden">
  <MobileNav />
</div>
```

### Project Grid

| Viewport | Columns |
| -------- | ------- |
| &lt; md  | 1       |
| ≥ md     | 2       |

```tsx
<StaggerContainer className="grid gap-6 md:grid-cols-2">
  {projects.map((project) => (
    <ProjectCard key={project.slug} project={project} />
  ))}
</StaggerContainer>
```

### Skills Grid

| Viewport | Columns |
| -------- | ------- |
| &lt; sm  | 1       |
| ≥ sm     | 2       |

```tsx
<div className="grid gap-8 sm:grid-cols-2">
  {categories.map((category) => (...))}
</div>
```

### Footer Layout

| Viewport | Layout             |
| -------- | ------------------ |
| &lt; sm  | Stacked (flex-col) |
| ≥ sm     | Row (flex-row)     |

```tsx
<div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
  <div className="flex items-center gap-4">{/* Social links */}</div>
  <p>{/* Copyright */}</p>
</div>
```

### LocaleSwitcher Label

| Viewport | Display                            |
| -------- | ---------------------------------- |
| &lt; sm  | Locale code (e.g., "EN")           |
| ≥ sm     | Full native name (e.g., "English") |

```tsx
<span className="hidden sm:inline">{currentConfig?.nativeName}</span>
<span className="sm:hidden">{currentLocale.toUpperCase()}</span>
```

### Typography Scaling

| Element         | Mobile   | sm       | lg       |
| --------------- | -------- | -------- | -------- |
| Hero name       | text-5xl | text-6xl | text-7xl |
| Hero role       | text-2xl | text-3xl | —        |
| Section heading | text-3xl | text-4xl | —        |

```tsx
<h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
  {t("name")}
</h1>
<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
  {title}
</h2>
```

## Section Padding

Sections use consistent vertical padding:

```tsx
<section className="py-24 px-4">
```

- `py-24` — 6rem (96px) top and bottom
- `px-4` — 1rem horizontal padding

## Touch Targets

Interactive elements meet minimum touch target sizes:

- Buttons: `size-9` (36px) for icon buttons
- Nav links: `px-3 py-2` for adequate tap area
- MobileNav links: `py-2.5` for comfortable tapping
