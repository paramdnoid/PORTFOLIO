/**
 * Locale-aware navigation utilities.
 *
 * Re-exports `Link`, `redirect`, `usePathname`, `useRouter`, and `getPathname`
 * from `next-intl/navigation`, pre-configured with the application's
 * {@link routing} settings. Use these instead of the plain Next.js equivalents
 * to ensure URLs contain the correct locale prefix.
 *
 * @module i18n/navigation
 *
 * @example
 * ```tsx
 * import { Link, useRouter } from "@/i18n/navigation";
 *
 * <Link href="/projects">Projects</Link>
 * ```
 */
import { createNavigation } from "next-intl/navigation";

import { routing } from "./routing";

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
