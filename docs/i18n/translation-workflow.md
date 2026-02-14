# Translation Workflow

This document describes how to translate the Portfolio application, including manual and AI-assisted workflows, quality assurance, and CI checks.

---

## Manual Workflow

1. **Copy English as base** — Run `npx tsx scripts/generate-locales.ts` to create `messages/{code}/*.json` from English.
2. **Translate namespace by namespace** — Start with `common.json` and `navigation.json` (high visibility), then `hero`, `about`, `projects`, `skills`, `contact`, `footer`, and finally `metadata.json`.
3. **Preserve structure** — Keep all keys; only change string values. Do not remove or rename keys.
4. **Validate JSON** — Ensure valid JSON (no trailing commas, proper escaping).
5. **Test in browser** — Visit `/{code}/` and verify each page.

---

## AI-Assisted Workflow

### GPT / Claude / Translation APIs

You can use AI or translation APIs to speed up translation:

1. **Bulk translation** — Provide the English JSON and ask the model to translate to the target language while preserving keys.
2. **Namespace-by-namespace** — Translate one file at a time for better context (e.g. "Translate this contact form JSON to German").
3. **Post-editing** — Always review AI output for:
   - Tone and formality
   - Technical terms (e.g. "Full-Stack Developer")
   - SEO-friendly metadata
   - RTL-specific considerations (if applicable)

### Example Prompt

```
Translate the following JSON to German. Keep all keys unchanged.
Only translate the string values. Maintain the same JSON structure.

{
  "viewProject": "View Project",
  "viewAll": "View All",
  "backToHome": "Back to Home",
  ...
}
```

---

## Quality Assurance

### Check for Missing Keys

Compare each locale's message files with English to ensure no keys are missing:

1. **Manual diff** — Use a diff tool to compare `messages/en/*.json` with `messages/{code}/*.json`.
2. **Key extraction** — Extract all keys from English files and verify they exist in the target locale.
3. **Runtime check** — Visit every page in the locale; missing keys will show English text (thanks to deep merge fallback).

### Deep Merge Fallback

The application uses a **deep merge** of English messages under locale-specific messages. If a key is missing in the locale file:

- The English value is used automatically
- No runtime error occurs
- The UI remains functional

This allows progressive translation: you can ship partial translations and complete them over time.

---

## Potential CI Check Script

You can add a CI script to validate translation completeness. Example concept:

```bash
#!/bin/bash
# scripts/check-translations.sh
# Compares keys in each locale against English; exits 1 if keys are missing

EN_KEYS=$(jq -r 'keys[]' messages/en/*.json | sort -u)
for locale in messages/*/; do
  code=$(basename "$locale")
  [ "$code" = "en" ] && continue
  for file in messages/en/*.json; do
    base=$(basename "$file")
    diff <(jq -r 'keys[]' "messages/en/$base" | sort) \
         <(jq -r 'keys[]' "messages/$code/$base" 2>/dev/null | sort) && continue
    echo "Missing keys in $code/$base"
    exit 1
  done
done
echo "All locales have complete key sets"
```

**Note:** This script is optional. The deep merge fallback means missing keys are not fatal; the CI check helps enforce completeness for fully translated locales.

---

## Best Practices

| Practice                     | Description                                                                         |
| ---------------------------- | ----------------------------------------------------------------------------------- |
| **Consistent terminology**   | Use the same translation for repeated terms (e.g. "View Project") across namespaces |
| **Context-aware**            | Provide context when using AI (e.g. "This is a portfolio website hero section")     |
| **Metadata quality**         | `metadata.json` affects SEO — write concise, keyword-rich titles and descriptions   |
| **RTL testing**              | For RTL locales, verify layout and text alignment                                   |
| **Placeholder preservation** | Keep placeholders like `{name}` in interpolation strings unchanged                  |

---

## Related Documentation

- [Adding a Language](adding-a-language.md) — Step-by-step guide
- [Namespaces](namespaces.md) — Full key reference
- [RTL Support](rtl-support.md) — RTL-specific guidelines
