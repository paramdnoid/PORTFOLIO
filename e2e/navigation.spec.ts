import { expect, test } from "@playwright/test";

import { NAV_ITEMS, ROUTES, waitForHydration } from "./fixtures";

// ---------------------------------------------------------------------------
// Desktop navigation
// ---------------------------------------------------------------------------

test.describe("Navigation – Desktop", () => {
  test.use({ viewport: { width: 1280, height: 720 } });

  test("nav links scroll to sections on single page", async ({ page }) => {
    await page.goto(ROUTES.home);
    await waitForHydration(page);

    const nav = page.locator("header nav");

    for (const item of NAV_ITEMS) {
      if (item.href === "/") continue;

      const link = nav.getByRole("link", { name: item.label });
      await link.click();
      await page.waitForTimeout(300); // Allow scroll
      const hash = item.href.replace("/", "");
      await expect(page).toHaveURL(new RegExp(`${hash}$`));
    }
  });

  test("logo click navigates to the homepage", async ({ page }) => {
    await page.goto(ROUTES.home);
    await waitForHydration(page);

    // Scroll to a section first
    await page.goto(`${ROUTES.home}#projects`);
    await waitForHydration(page);

    const logo = page.locator("header").getByRole("link", { name: "Andre" });
    await logo.click();
    await waitForHydration(page);

    await expect(page).toHaveURL(/\/$/);
  });

  test("unknown route shows 404 page", async ({ page }) => {
    const response = await page.goto("/this-page-does-not-exist");
    expect(response?.status()).toBe(404);
  });
});

// ---------------------------------------------------------------------------
// Mobile navigation
// ---------------------------------------------------------------------------

test.describe("Navigation – Mobile", () => {
  test.use({ viewport: { width: 390, height: 844 } }); // iPhone-like viewport

  test("mobile menu opens and scrolls to sections", async ({ page }) => {
    await page.goto(ROUTES.home);
    await waitForHydration(page);

    await expect(page.locator("header nav")).toBeHidden();

    for (const item of NAV_ITEMS) {
      if (item.href === "/") continue;

      await page.getByRole("button", { name: "Menu" }).click();

      const sheet = page.locator('[role="dialog"]');
      await expect(sheet).toBeVisible();

      const link = sheet.getByRole("link", { name: item.label });
      await link.click();

      await expect(sheet).toBeHidden();

      await page.waitForTimeout(300);
      const hash = item.href.replace("/", "");
      await expect(page).toHaveURL(new RegExp(`${hash}$`));
    }
  });

  test("mobile menu closes when pressing Escape", async ({ page }) => {
    await page.goto(ROUTES.home);
    await waitForHydration(page);

    await page.getByRole("button", { name: "Menu" }).click();
    const sheet = page.locator('[role="dialog"]');
    await expect(sheet).toBeVisible();

    await page.keyboard.press("Escape");
    await expect(sheet).toBeHidden();
  });
});
