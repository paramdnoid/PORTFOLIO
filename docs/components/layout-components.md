# Layout Components

Layout components provide the persistent shell of the application: header, footer, and navigation. They are rendered in the locale layout and appear on every page.

## Header

**File:** `src/components/layout/header.tsx`  
**Type:** Client Component (`"use client"`)

The main site header with sticky positioning, scroll-based styling, and responsive navigation.

### Features

- **Sticky positioning** — `sticky top-0 z-50` keeps the header visible while scrolling.
- **Backdrop blur on scroll** — When `scrollY > 50`, the header gets `bg-background/80 backdrop-blur-xl` and a subtle border.
- **Transparent when at top** — At the top of the page, the header uses `border-transparent bg-transparent` for a seamless look.
- **Desktop navigation** — Nav links are visible at `md` and above (`hidden md:flex`).
- **Mobile navigation** — Below `md`, a hamburger menu opens `MobileNav`.
- **Locale switcher** — `LocaleSwitcher` for language selection.
- **Theme toggle** — `ThemeToggle` for dark/light mode.

### Implementation Details

```tsx
const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => setScrolled(window.scrollY > 50);
  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
```

The scroll threshold of 50px triggers the visual transition. Uses `passive: true` for better scroll performance.

### Structure

```
Header
├── Link (logo/name) → /
├── nav (desktop, md+)
│   └── Link × navigationItems
└── Actions
    ├── LocaleSwitcher
    ├── ThemeToggle
    └── MobileNav (md only)
```

---

## Footer

**File:** `src/components/layout/footer.tsx`  
**Type:** Component (uses `useTranslations` from next-intl for translated copyright text)

The site footer with social links and copyright.

### Features

- **Social links** — GitHub, LinkedIn, and Email icons linking to `siteConfig.links`.
- **Copyright** — Dynamic year and translated copyright text via `t("copyright")`.
- **Responsive layout** — `flex-col` on mobile, `flex-row` at `sm` and above.

### Structure

```
Footer
└── Container
    ├── Social links (GitHub, LinkedIn, Mail)
    └── Copyright text
```

### Translations

Uses the `footer` namespace:

- `footer.copyright` — e.g., "All rights reserved."

---

## MobileNav

**File:** `src/components/layout/mobile-nav.tsx`  
**Type:** Client Component (`"use client"`)

A slide-in navigation panel for mobile viewports.

### Features

- **Sheet component** — Uses shadcn `Sheet` for a slide-in overlay from the right.
- **Trigger** — Hamburger icon (`Menu`) in a ghost `Button`, shown only below `md`.
- **Content** — Site name in header, `Separator`, and nav links.
- **Auto-close on navigation** — `onClick={() => setOpen(false)}` on each link.

### Structure

```
Sheet
├── SheetTrigger (Button with Menu icon)
└── SheetContent (side="right", w-72)
    ├── SheetHeader (site name)
    ├── Separator
    └── nav (Link × navigationItems)
```

### Accessibility

- `aria-label` from `tCommon("menu")` on the trigger button.

---

## ThemeToggle

**File:** `src/components/layout/theme-toggle.tsx`  
**Type:** Client Component (`"use client"`)

Toggles between light and dark theme using `next-themes`.

### Features

- **Sun/Moon icons** — Sun visible in light mode, Moon in dark mode.
- **Animated transition** — Icons use `scale` and `rotate` transitions for a smooth switch.
- **`useTheme`** — Uses `resolvedTheme` and `setTheme` from `next-themes`.

### Implementation

```tsx
<Button onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
  <Sun className="size-4 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
  <Moon className="absolute size-4 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
</Button>
```

Both icons are rendered; visibility is controlled via `scale-0` / `scale-100` and `dark:` variants.

### Translations

- `common.toggleTheme` — Accessible label for the toggle.

---

## LocaleSwitcher

**File:** `src/components/layout/locale-switcher.tsx`  
**Type:** Client Component (`"use client"`)

A language switcher using Command + Popover for searchable locale selection.

### Features

- **~184 languages** — Supports all locales from `@/i18n/locales`.
- **Search** — `CommandInput` filters by native name, English name, and locale code.
- **Region grouping** — Locales grouped by region (Europe, Asia, Middle East, Africa, Americas, Oceania) via `getLocalesByRegion()`.
- **Current locale indicator** — Check icon next to the active locale.
- **Responsive label** — Full native name at `sm+`, locale code (e.g., "EN") on small screens.

### Structure

```
Popover
├── PopoverTrigger (Button with Languages icon + current locale)
└── PopoverContent (align="end", w-72)
    └── Command
        ├── CommandInput (search placeholder)
        └── CommandList (max-h-72)
            └── CommandGroup × regions
                └── CommandItem × locales
```

### Locale Data

Each locale has:

- `code` — ISO 639-1 (e.g., `"en"`, `"de"`)
- `nativeName` — e.g., "Deutsch"
- `englishName` — e.g., "German"
- `region` — For grouping in the UI

### Translations

- `common.switchLanguage` — Accessible label.
- `common.searchLanguage` — Placeholder for the search input.
