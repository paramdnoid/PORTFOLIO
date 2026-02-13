# UI Components

The application uses [shadcn/ui](https://ui.shadcn.com/) for base UI primitives. These components live in `src/components/ui/` and provide consistent styling, accessibility, and behavior.

## Installed Components

| Component       | File              | Description                                      |
|----------------|-------------------|--------------------------------------------------|
| **Button**     | `button.tsx`      | Primary actions, variants (default, outline, ghost, etc.) |
| **Card**       | `card.tsx`        | Content containers with header, content, footer   |
| **Badge**      | `badge.tsx`       | Labels, tags, status indicators                   |
| **Separator**  | `separator.tsx`   | Horizontal or vertical dividers                   |
| **Tooltip**    | `tooltip.tsx`     | Hover hints (via `TooltipProvider`)              |
| **Sonner**     | `sonner.tsx`      | Toast notifications (`Toaster`)                  |
| **Sheet**      | `sheet.tsx`       | Slide-in panels (e.g., MobileNav)                |
| **Dropdown Menu** | `dropdown-menu.tsx` | Context menus, actions                        |
| **Scroll Area**| `scroll-area.tsx` | Custom scrollable regions                        |
| **Command**    | `command.tsx`     | Command palette, searchable lists (cmdk)          |
| **Popover**    | `popover.tsx`     | Floating content (e.g., LocaleSwitcher)          |
| **Dialog**     | `dialog.tsx`      | Modal dialogs                                    |

## Location

All shadcn components are in:

```
src/components/ui/
├── badge.tsx
├── button.tsx
├── card.tsx
├── command.tsx
├── dialog.tsx
├── dropdown-menu.tsx
├── popover.tsx
├── scroll-area.tsx
├── separator.tsx
├── sheet.tsx
├── sonner.tsx
└── tooltip.tsx
```

## Adding New Components

Use the shadcn CLI to add new components:

```bash
npx shadcn@latest add [component-name]
```

Examples:

```bash
npx shadcn@latest add tabs
npx shadcn@latest add accordion
npx shadcn@latest add avatar
```

The CLI will:

1. Download the component source into `src/components/ui/`
2. Install any required dependencies (e.g., Radix UI primitives)
3. Use the project's existing Tailwind and design tokens

### Prerequisites

- Run from the project root
- Ensure `tailwind.config` and `components.json` (if present) are configured
- Components will inherit the project's theme (CSS variables, radius, etc.)

## Usage Patterns

### Button Variants

```tsx
<Button>Default</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="link">Link</Button>
```

### Button Sizes

```tsx
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">Icon only</Button>
```

### Card Structure

```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
  <CardFooter>Footer</CardFooter>
</Card>
```

### Composing with Radix

Many shadcn components wrap [Radix UI](https://www.radix-ui.com/) primitives. You can extend them by importing from `@/components/ui/[name]` and customizing as needed.

## Theming

UI components use CSS variables from the design system:

- `--background`, `--foreground`
- `--primary`, `--primary-foreground`
- `--secondary`, `--muted`, `--accent`
- `--border`, `--input`, `--ring`
- `--radius` for border radius

See [Theming](../styling/theming.md) for details.
