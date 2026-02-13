# Adding a Language

This guide walks you through adding a new locale to the Portfolio application. Follow these steps in order.

---

## Step 1: Add Locale to `src/i18n/locales.ts`

Add a new entry to the `locales` array with the required metadata:

```ts
{
  code: "xx",           // ISO 639-1 code (e.g. "de", "ja", "ar")
  nativeName: "…",      // Name in the language itself (e.g. "Deutsch")
  englishName: "…",     // Name in English (e.g. "German")
  dir: "ltr",           // "ltr" or "rtl" for right-to-left languages
  region: "europe",     // europe | asia | middle-east | africa | americas | oceania
  translationComplete: false,  // Set true when all namespaces are translated
}
```

**Example — Adding German:**

```ts
{ code: "de", nativeName: "Deutsch", englishName: "German", dir: "ltr", region: "europe", translationComplete: false },
```

**Example — Adding Arabic (RTL):**

```ts
{ code: "ar", nativeName: "العربية", englishName: "Arabic", dir: "rtl", region: "middle-east", translationComplete: false },
```

Place the locale in the appropriate region block (Europe, Asia, Middle East, Africa, Americas, Oceania) for consistency.

---

## Step 2: Run the Locale Generator Script

Generate the message file structure for the new locale:

```bash
npx tsx scripts/generate-locales.ts
```

This script:

- Reads all locale codes from `src/i18n/locales.ts`
- Creates `messages/{code}/` for any locale that doesn't have message files
- Copies English (`messages/en/`) JSON files as templates

**Output example:**

```
✅ Locale generation complete!
   Created: 9 files
   Skipped: 0 files (already exist)
   Total locales: 128
   Namespaces: 9
```

---

## Step 3: Translate All 9 Namespace Files

Translate each file in `messages/{code}/`:

| File | Content |
|------|---------|
| `common.json` | Shared UI strings |
| `navigation.json` | Nav links |
| `hero.json` | Hero section |
| `about.json` | About section |
| `projects.json` | Projects section |
| `skills.json` | Skills section |
| `contact.json` | Contact form |
| `footer.json` | Footer |
| `metadata.json` | Page titles and descriptions (SEO) |

**Tips:**

- Keep the same JSON structure and keys — only change the values
- Use the English files as reference
- For `metadata.json`, ensure titles and descriptions are suitable for SEO
- See [Namespaces](namespaces.md) for the full key reference

---

## Step 4: Set `translationComplete: true`

Once all namespaces are translated, update the locale entry in `src/i18n/locales.ts`:

```ts
{ code: "de", nativeName: "Deutsch", englishName: "German", dir: "ltr", region: "europe", translationComplete: true },
```

This flag can be used by the UI (e.g. locale switcher) to indicate fully translated locales.

---

## Step 5: Test with `/{code}/` URL

1. Start the dev server: `npm run dev`
2. Open `http://localhost:3000/de` (replace `de` with your locale code)
3. Verify:
   - All pages render with translated text
   - No missing keys (if any, English fallback will show)
   - RTL layout (if applicable) — check `dir="rtl"` on `<html>`
   - Navigation, footer, and metadata (page title) are correct

---

## Quick Reference

| Step | Action |
|------|--------|
| 1 | Add locale to `src/i18n/locales.ts` |
| 2 | Run `npx tsx scripts/generate-locales.ts` |
| 3 | Translate all 9 files in `messages/{code}/` |
| 4 | Set `translationComplete: true` |
| 5 | Test at `http://localhost:3000/{code}/` |

---

## Related Documentation

- [Translation Workflow](translation-workflow.md) — Manual and AI-assisted translation strategies
- [Namespaces](namespaces.md) — Full key reference for all namespaces
- [RTL Support](rtl-support.md) — Guidelines for RTL languages
