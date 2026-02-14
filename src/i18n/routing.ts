/**
 * Internationalized routing configuration for `next-intl`.
 *
 * Defines the set of supported locales, the default locale,
 * and the prefix strategy (`"as-needed"` omits the prefix for the default locale).
 *
 * @module i18n/routing
 */
import { defineRouting } from "next-intl/routing";

import { defaultLocale, localeCodes } from "./locales";

/**
 * The `next-intl` routing configuration object.
 *
 * Passed to `createNavigation` and `createMiddleware` to keep
 * locale handling consistent across the application.
 */
export const routing = defineRouting({
  locales: localeCodes,
  defaultLocale,
  localePrefix: "as-needed",
});
