import type { Page } from "@playwright/test";
import { expect } from "@playwright/test";

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

export const ROUTES = {
  home: "/",
} as const;

/** Navigation items that appear in the header (desktop) and mobile sheet. */
export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
] as const;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Wait until the page is hydrated (main visible).
 */
export async function waitForHydration(page: Page): Promise<void> {
  await expect(page.locator("main")).toBeVisible();
}

/**
 * Return the current theme: `"dark"` or `"light"`.
 * Reads the `class` attribute on `<html>` set by `next-themes`.
 */
export async function getTheme(page: Page): Promise<"dark" | "light"> {
  const cls = await page.locator("html").getAttribute("class");
  return cls?.includes("dark") ? "dark" : "light";
}

/**
 * Return the current `lang` attribute on `<html>`.
 */
export async function getLocale(page: Page): Promise<string> {
  const lang = await page.locator("html").getAttribute("lang");
  return lang ?? "";
}

/**
 * Return the current `dir` attribute on `<html>`.
 */
export async function getDirection(page: Page): Promise<string> {
  const dir = await page.locator("html").getAttribute("dir");
  return dir ?? "ltr";
}

/**
 * Click the theme toggle button in the header.
 */
export async function clickThemeToggle(page: Page): Promise<void> {
  await page.getByRole("button", { name: "Toggle theme" }).click();
}

/**
 * Open the locale switcher popover, search for a language, and select it.
 */
export async function switchLocaleTo(
  page: Page,
  search: string,
): Promise<void> {
  // Open the popover
  await page.getByRole("button", { name: "Switch language" }).click();
  // Type into the search input
  await page.getByPlaceholder("Search language...").fill(search);
  // Click the first matching item in the command list
  await page.locator('[role="option"]').first().click();
}
