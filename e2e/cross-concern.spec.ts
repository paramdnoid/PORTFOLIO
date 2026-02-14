import { expect, test } from "@playwright/test";

import {
  clickThemeToggle,
  getLocale,
  getTheme,
  ROUTES,
  switchLocaleTo,
  waitForHydration,
} from "./fixtures";

test.describe("Cross-Concern – Theme + Locale combined", () => {
  test("theme and locale changes are preserved on single page", async ({
    page,
  }) => {
    await page.goto(ROUTES.home);
    await waitForHydration(page);

    const initialTheme = await getTheme(page);
    if (initialTheme === "dark") {
      await clickThemeToggle(page);
    }
    expect(await getTheme(page)).toBe("light");

    await switchLocaleTo(page, "Deutsch");
    await expect(page).toHaveURL(/\/de\/?$/);
    expect(await getLocale(page)).toBe("de");

    // Scroll to projects section
    await page.goto("/de#projects");
    await waitForHydration(page);

    expect(await getTheme(page)).toBe("light");
    expect(await getLocale(page)).toBe("de");
    await expect(page).toHaveURL(/\/de#projects$/);
  });

  test("full user journey: home → theme → section → locale → home", async ({
    page,
  }) => {
    await page.goto(ROUTES.home);
    await waitForHydration(page);
    await expect(page).toHaveURL(/\/$/);

    const initialTheme = await getTheme(page);
    if (initialTheme === "dark") {
      await clickThemeToggle(page);
    }
    expect(await getTheme(page)).toBe("light");

    await page.goto("/#projects");
    await waitForHydration(page);
    await expect(page).toHaveURL(/#projects$/);
    expect(await getTheme(page)).toBe("light");

    await switchLocaleTo(page, "Deutsch");
    expect(await getLocale(page)).toBe("de");
    expect(await getTheme(page)).toBe("light");

    const logo = page.locator("header").getByRole("link", { name: "Andre" });
    await logo.click();
    await waitForHydration(page);

    await expect(page).toHaveURL(/\/de\/?$/);
    expect(await getLocale(page)).toBe("de");
    expect(await getTheme(page)).toBe("light");
  });

  test("theme toggle works correctly after locale switch", async ({ page }) => {
    await page.goto(ROUTES.home);
    await waitForHydration(page);

    // Switch locale to French
    await switchLocaleTo(page, "Français");
    await expect(page).toHaveURL(/\/fr\/?$/);

    // Theme toggle should still work
    const before = await getTheme(page);
    await clickThemeToggle(page);
    const after = await getTheme(page);
    expect(after).not.toBe(before);
  });

  test("locale switch works correctly after theme change", async ({ page }) => {
    await page.goto(ROUTES.home);
    await waitForHydration(page);

    // Switch theme
    await clickThemeToggle(page);
    const themeAfterToggle = await getTheme(page);

    // Switch locale to German
    await switchLocaleTo(page, "Deutsch");
    await expect(page).toHaveURL(/\/de\/?$/);

    // Theme should not have changed
    expect(await getTheme(page)).toBe(themeAfterToggle);
  });
});
