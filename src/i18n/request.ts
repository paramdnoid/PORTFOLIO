/**
 * Server-side request configuration for `next-intl`.
 *
 * Loads translation messages for the requested locale, falling back
 * to English for any missing keys. Messages are split into namespaces
 * and loaded in parallel for performance.
 *
 * @module i18n/request
 */
import { getRequestConfig } from "next-intl/server";

import { routing } from "./routing";

/** Shape of a dynamically imported messages JSON module. */
type MessagesModule = {
  default: Record<string, unknown>;
};

/**
 * All translation namespace identifiers.
 *
 * Each namespace corresponds to a JSON file under `messages/<locale>/`.
 */
const NAMESPACES = [
  "common",
  "navigation",
  "hero",
  "about",
  "projects",
  "skills",
  "contact",
  "footer",
  "metadata",
] as const;

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale)) {
    locale = routing.defaultLocale;
  }

  // Load all namespaces in parallel
  const [localeMessages, fallbackMessages] = await Promise.all([
    loadAllNamespaces(locale),
    locale !== "en" ? loadAllNamespaces("en") : Promise.resolve({}),
  ]);

  // Deep merge: locale-specific overrides fallback
  const messages =
    locale === "en"
      ? localeMessages
      : deepMerge(fallbackMessages, localeMessages);

  return { locale, messages };
});

/**
 * Load all namespace JSON files for a given locale in parallel.
 *
 * Missing namespace files are silently ignored so that partially
 * translated locales still work.
 *
 * @param locale - ISO 639-1 locale code, e.g. "de".
 * @returns An object keyed by namespace with the parsed messages.
 */
async function loadAllNamespaces(
  locale: string,
): Promise<Record<string, Record<string, string>>> {
  const entries = await Promise.all(
    NAMESPACES.map(async (ns) => {
      try {
        const mod = (await import(
          `../../messages/${locale}/${ns}.json`
        )) as MessagesModule;
        return [ns, mod.default] as const;
      } catch {
        return [ns, {}] as const;
      }
    }),
  );
  return Object.fromEntries(entries);
}

/**
 * Recursively merge two plain objects (shallow clone, source wins).
 *
 * Used to overlay locale-specific translations on top of the
 * English fallback so that untranslated keys still render in English.
 *
 * @param target - Base object (fallback translations).
 * @param source - Override object (locale-specific translations).
 * @returns A new merged object.
 */
function deepMerge(
  target: Record<string, unknown>,
  source: Record<string, unknown>,
): Record<string, unknown> {
  const result = { ...target };
  for (const key of Object.keys(source)) {
    const sourceVal = source[key];
    const targetVal = target[key];
    if (
      sourceVal != null &&
      typeof sourceVal === "object" &&
      !Array.isArray(sourceVal)
    ) {
      const targetObj =
        targetVal != null &&
        typeof targetVal === "object" &&
        !Array.isArray(targetVal)
          ? (targetVal as Record<string, unknown>)
          : {};
      result[key] = deepMerge(targetObj, sourceVal as Record<string, unknown>);
    } else {
      result[key] = sourceVal;
    }
  }
  return result;
}
