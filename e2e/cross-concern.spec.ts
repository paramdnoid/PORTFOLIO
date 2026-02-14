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
  test("theme and locale changes are both preserved after navigation", async ({
    page,
  }) => {
    await page.goto(ROUTES.home);
    await waitForHydration(page);

    // Switch theme to light (default is dark)
    const initialTheme = await getTheme(page);
    if (initialTheme === "dark") {
      await clickThemeToggle(page);
    }
    expect(await getTheme(page)).toBe("light");

    // Switch locale to German
    await switchLocaleTo(page, "Deutsch");
    await expect(page).toHaveURL(/\/de\/?$/);
    expect(await getLocale(page)).toBe("de");

    // Navigate to projects
    await page.goto("/de/projects");
    await waitForHydration(page);

    // Both settings should be preserved
    expect(await getTheme(page)).toBe("light");
    expect(await getLocale(page)).toBe("de");
    await expect(page).toHaveURL(/\/de\/projects$/);
  });

  test("full user journey: home → theme → projects → detail → locale → home", async ({
    page,
  }) => {
    // 1. Start at homepage
    await page.goto(ROUTES.home);
    await waitForHydration(page);
    await expect(page).toHaveURL(/\/$/);

    // 2. Toggle theme to light
    const initialTheme = await getTheme(page);
    if (initialTheme === "dark") {
      await clickThemeToggle(page);
    }
    expect(await getTheme(page)).toBe("light");

    // 3. Navigate to projects page
    await page.goto(ROUTES.projects);
    await waitForHydration(page);
    await expect(page).toHaveURL(/\/projects$/);
    expect(await getTheme(page)).toBe("light");

    // 4. Navigate to a project detail page
    await page.goto(ROUTES.projectDetail("e-commerce-platform"));
    await waitForHydration(page);
    await expect(page.locator("h1")).toContainText("E-Commerce Platform");
    expect(await getTheme(page)).toBe("light");

    // 5. Switch locale to German
    await switchLocaleTo(page, "Deutsch");
    expect(await getLocale(page)).toBe("de");
    // Theme should still be light after locale switch
    expect(await getTheme(page)).toBe("light");

    // 6. Navigate back to homepage
    const logo = page.locator("header").getByRole("link", { name: "Andre" });
    await logo.click();
    await waitForHydration(page);

    // 7. Verify everything is consistent
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
