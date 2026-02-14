# RTL Support

The Portfolio application supports Right-to-Left (RTL) languages. This document describes which languages are RTL, how the `dir` attribute is applied, CSS conventions, and how to test.

---

## RTL Languages Supported

The following 9 locales use RTL direction:

| Code | Native Name | English Name |
| ---- | ----------- | ------------ |
| `ar` | العربية     | Arabic       |
| `fa` | فارسی       | Persian      |
| `he` | עברית       | Hebrew       |
| `ku` | Kurdî       | Kurdish      |
| `ps` | پښتو        | Pashto       |
| `sd` | سنڌي        | Sindhi       |
| `ur` | اردو        | Urdu         |
| `ug` | ئۇيغۇرچە    | Uyghur       |
| `yi` | ייִדיש      | Yiddish      |

These are defined in `src/i18n/locales.ts` with `dir: "rtl"`.

---

## How `dir="rtl"` Is Applied

The locale layout (`src/app/[locale]/layout.tsx`) sets the text direction on the `<html>` element:

```tsx
import { getLocaleDirection } from "@/i18n/locales";

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  const dir = getLocaleDirection(locale); // "ltr" or "rtl"

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      {/* ... */}
    </html>
  );
}
```

`getLocaleDirection()` reads the `dir` property from the locale config in `src/i18n/locales.ts`. This ensures:

- RTL locales automatically flip layout direction
- LTR locales use the default left-to-right layout
- No per-page or per-component configuration is needed

---

## CSS Logical Properties

Use **CSS Logical Properties** instead of physical properties for layout that should flip in RTL:

| Avoid (Physical)    | Prefer (Logical)       |
| ------------------- | ---------------------- |
| `margin-left`       | `margin-inline-start`  |
| `margin-right`      | `margin-inline-end`    |
| `padding-left`      | `padding-inline-start` |
| `padding-right`     | `padding-inline-end`   |
| `left`              | `inset-inline-start`   |
| `right`             | `inset-inline-end`     |
| `text-align: left`  | `text-align: start`    |
| `text-align: right` | `text-align: end`      |
| `border-left`       | `border-inline-start`  |
| `border-right`      | `border-inline-end`    |

**Example:**

```css
/* Flips correctly in RTL */
.card {
  margin-inline-start: 1rem;
  padding-inline-end: 1.5rem;
  text-align: start;
}
```

Tailwind CSS supports logical properties via utilities such as `ms-`, `me-`, `ps-`, `pe-`, `start`, `end`, etc.

---

## Testing RTL

### 1. Visit an RTL Locale URL

Open:

```
http://localhost:3000/ar/
```

Replace `ar` with any RTL locale code (e.g. `fa`, `he`, `ur`).

### 2. Verify Layout

- Navigation and content should flow from right to left
- Icons and arrows that indicate direction should be mirrored (if using logical properties)
- Text alignment should follow RTL conventions

### 3. Inspect `dir` Attribute

In DevTools, confirm the `<html>` element has `dir="rtl"`:

```html
<html lang="ar" dir="rtl"></html>
```

---

## Adding a New RTL Locale

When adding an RTL language:

1. Set `dir: "rtl"` in `src/i18n/locales.ts`
2. Run `npx tsx scripts/generate-locales.ts`
3. Translate all namespaces
4. Test at `/{code}/` and verify layout

---

## Related Documentation

- [i18n Overview](overview.md) — Architecture and request flow
- [Adding a Language](adding-a-language.md) — Step-by-step guide
- [Locale List](locale-list.md) — Complete list of supported locales
