import { defineRouting } from "next-intl/routing";
import { localeCodes, defaultLocale } from "./locales";

export const routing = defineRouting({
  locales: localeCodes,
  defaultLocale,
  localePrefix: "as-needed",
});
