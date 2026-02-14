import { expect, test } from "@playwright/test";

import {
  getDirection,
  getLocale,
  ROUTES,
  switchLocaleTo,
  waitForHydration,
} from "./fixtures";

test.describe("Locale – Switching & URL", () => {
  test("default locale (en) has no URL prefix", async ({ page }) => {
    await page.goto(ROUTES.home);
    await waitForHydration(page);

    // URL should be "/" without "/en/" prefix
    expect(page.url()).not.toContain("/en");
    expect(await getLocale(page)).toBe("en");
  });

  test("switching locale changes URL and lang attribute", async ({ page }) => {
    await page.goto(ROUTES.home);
    await waitForHydration(page);

    // Switch to German
    await switchLocaleTo(page, "Deutsch");

    // URL should contain /de
    await expect(page).toHaveURL(/\/de\/?$/);
    expect(await getLocale(page)).toBe("de");
  });

  test("locale persists across page navigation", async ({ page }) => {
    // Start on the German homepage
    await page.goto("/de");
    await waitForHydration(page);
    expect(await getLocale(page)).toBe("de");

    // Navigate to about via header link
    await page.locator("header nav").getByRole("link").nth(1).click();
    await waitForHydration(page);

    // URL should still have /de prefix
    await expect(page).toHaveURL(/\/de\/about$/);
    expect(await getLocale(page)).toBe("de");
  });

  test("switching back to default locale removes URL prefix", async ({
    page,
  }) => {
    // Start on the German homepage
    await page.goto("/de");
    await waitForHydration(page);
    expect(await getLocale(page)).toBe("de");

    // Switch back to English
    await switchLocaleTo(page, "English");

    // URL should no longer have /de or /en prefix
    await expect(page).toHaveURL(/\/$/);
    expect(await getLocale(page)).toBe("en");
  });

  test("RTL locale sets dir attribute to rtl", async ({ page }) => {
    await page.goto(ROUTES.home);
    await waitForHydration(page);

    // Switch to Arabic
    await switchLocaleTo(page, "العربية");

    await expect(page).toHaveURL(/\/ar\/?$/);
    expect(await getLocale(page)).toBe("ar");
    expect(await getDirection(page)).toBe("rtl");
  });

  test("LTR locale keeps dir attribute as ltr", async ({ page }) => {
    await page.goto(ROUTES.home);
    await waitForHydration(page);

    // Default locale (en) is LTR
    expect(await getDirection(page)).toBe("ltr");

    // Switch to French (also LTR)
    await switchLocaleTo(page, "Français");

    await expect(page).toHaveURL(/\/fr\/?$/);
    expect(await getDirection(page)).toBe("ltr");
  });

  test("locale switcher shows current locale as selected", async ({ page }) => {
    await page.goto(ROUTES.home);
    await waitForHydration(page);

    // Open locale switcher
    await page.getByRole("button", { name: "Switch language" }).click();

    // The current locale (English) should have a check mark
    const englishOption = page.locator('[role="option"]', {
      hasText: "English",
    });
    await expect(englishOption).toBeVisible();
    // The check icon (svg) is rendered for the active locale
    await expect(englishOption.locator("svg")).toBeVisible();
  });
});
