import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

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

  if (!locale || !routing.locales.includes(locale as (typeof routing.locales)[number])) {
    locale = routing.defaultLocale;
  }

  // Load all namespaces in parallel
  const [localeMessages, fallbackMessages] = await Promise.all([
    loadAllNamespaces(locale),
    locale !== "en" ? loadAllNamespaces("en") : Promise.resolve({}),
  ]);

  // Deep merge: locale-specific overrides fallback
  const messages = locale === "en" ? localeMessages : deepMerge(fallbackMessages, localeMessages);

  return { locale, messages };
});

async function loadAllNamespaces(
  locale: string,
): Promise<Record<string, Record<string, string>>> {
  const entries = await Promise.all(
    NAMESPACES.map(async (ns) => {
      try {
        const mod = await import(`../../messages/${locale}/${ns}.json`);
        return [ns, mod.default] as const;
      } catch {
        return [ns, {}] as const;
      }
    }),
  );
  return Object.fromEntries(entries);
}

function deepMerge(
  target: Record<string, unknown>,
  source: Record<string, unknown>,
): Record<string, unknown> {
  const result = { ...target };
  for (const key of Object.keys(source)) {
    const sourceVal = source[key];
    const targetVal = target[key];
    if (
      sourceVal &&
      typeof sourceVal === "object" &&
      !Array.isArray(sourceVal)
    ) {
      result[key] = deepMerge(
        (targetVal as Record<string, unknown>) ?? {},
        sourceVal as Record<string, unknown>,
      );
    } else {
      result[key] = sourceVal;
    }
  }
  return result;
}
