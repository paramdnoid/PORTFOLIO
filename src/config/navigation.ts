import type { NavItem } from "@/types";

/**
 * Primary navigation items rendered in the header and mobile menu.
 *
 * Each item's `titleKey` is resolved at render time via
 * `useTranslations("navigation")` to support i18n.
 *
 * @see {@link NavItem} for the type definition.
 */
export const navigationItems: NavItem[] = [
  { titleKey: "home", href: "/" },
  { titleKey: "about", href: "/about" },
  { titleKey: "experience", href: "/#experience" },
  { titleKey: "projects", href: "/projects" },
  { titleKey: "contact", href: "/contact" },
];
