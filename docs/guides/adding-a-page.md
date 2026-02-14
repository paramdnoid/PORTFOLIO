# Adding a Page

This guide explains how to add a new page to the Portfolio with full i18n support.

---

## Step 1: Create Directory in `src/app/[locale]/`

Create a new directory for your page under the locale segment:

```
src/app/[locale]/new-page/
  page.tsx
```

The `[locale]` segment ensures the page is available for all locales (e.g. `/en/new-page`, `/de/new-page`).

---

## Step 2: Create `page.tsx` with `setRequestLocale()`

```tsx
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function NewPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale); // Required for static generation

  return (
    <div>
      <h1>New Page</h1>
    </div>
  );
}
```

**Why `setRequestLocale()`?** It enables correct static generation for the locale. Always call it in page components.

---

## Step 3: Add `generateMetadata()` with Translations

For SEO, add metadata using the `metadata` namespace:

```tsx
import { getTranslations, setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("newPageTitle"), // Add key to metadata.json
    description: t("newPageDescription"),
  };
}
```

---

## Step 4: Add Translation Keys to All Locale Message Files

Add keys to `messages/en/metadata.json` (and other locales):

```json
{
  "homeTitle": "...",
  "newPageTitle": "New Page | Andre",
  "newPageDescription": "Description of the new page."
}
```

If you add page-specific content, create a new namespace or add to an existing one (e.g. `common` or a custom `newPage`), then add the corresponding JSON files.

---

## Step 5: Add Nav Item to `src/config/navigation.ts`

Add the new page to the navigation:

```ts
export const navigationItems: NavItem[] = [
  { titleKey: "home", href: "/" },
  { titleKey: "about", href: "/about" },
  { titleKey: "projects", href: "/projects" },
  { titleKey: "newPage", href: "/new-page" }, // Add this
  { titleKey: "contact", href: "/contact" },
];
```

Add the `newPage` key to `messages/*/navigation.json`:

```json
{
  "home": "Home",
  "about": "About",
  "projects": "Projects",
  "newPage": "New Page",
  "contact": "Contact"
}
```

---

## Step 6: Use `Link` from `@/i18n/navigation`

For locale-aware links, use the custom `Link` from next-intl:

```tsx
import { Link } from "@/i18n/navigation";

export default function SomeComponent() {
  return <Link href="/new-page">Go to New Page</Link>;
}
```

This ensures the link preserves the current locale (e.g. `/de/new-page` when viewing in German).

---

## Quick Reference

| Step | Action                                                      |
| ---- | ----------------------------------------------------------- |
| 1    | Create `src/app/[locale]/new-page/` directory               |
| 2    | Create `page.tsx` with `setRequestLocale(locale)`           |
| 3    | Add `generateMetadata()` with `getTranslations("metadata")` |
| 4    | Add translation keys to all locale message files            |
| 5    | Add nav item to `src/config/navigation.ts`                  |
| 6    | Use `Link` from `@/i18n/navigation` for locale-aware links  |

---

## Adding a New Namespace

If the page has substantial content, consider a dedicated namespace:

1. Add to `NAMESPACES` in `src/i18n/request.ts`
2. Create `messages/en/newPage.json`
3. Run `npx tsx scripts/generate-locales.ts`
4. Use `useTranslations("newPage")` or `getTranslations("newPage")` in components

See [Namespaces](../i18n/namespaces.md#adding-a-new-namespace) for details.

---

## Related Documentation

- [i18n Overview](../i18n/overview.md) — Architecture and request flow
- [Namespaces](../i18n/namespaces.md) — Full key reference and adding namespaces
- [Getting Started](getting-started.md) — Project setup
