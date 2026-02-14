import { expect, test } from "@playwright/test";

import { NAV_ITEMS, PROJECT_SLUGS, ROUTES, waitForHydration } from "./fixtures";

// ---------------------------------------------------------------------------
// Desktop navigation
// ---------------------------------------------------------------------------

test.describe("Navigation – Desktop", () => {
  test.use({ viewport: { width: 1280, height: 720 } });

  test("navigates through all pages via header links", async ({ page }) => {
    await page.goto(ROUTES.home);
    await waitForHydration(page);

    const nav = page.locator("header nav");

    for (const item of NAV_ITEMS) {
      // Home link in the header might be the logo; other items are in <nav>
      if (item.href === "/") continue;

      const link = nav.getByRole("link", { name: item.label });
      await link.click();
      await waitForHydration(page);
      await expect(page).toHaveURL(new RegExp(`${item.href}$`));
    }
  });

  test("browser back navigates to the previous page", async ({ page }) => {
    await page.goto(ROUTES.about);
    await waitForHydration(page);

    // Navigate forward to projects
    await page
      .locator("header nav")
      .getByRole("link", { name: "Projects" })
      .click();
    await waitForHydration(page);
    await expect(page).toHaveURL(/\/projects$/);

    // Go back
    await page.goBack();
    await waitForHydration(page);
    await expect(page).toHaveURL(/\/about$/);
  });

  test("logo click navigates to the homepage", async ({ page }) => {
    await page.goto(ROUTES.projects);
    await waitForHydration(page);

    // The logo is the first link inside <header> containing the site name
    const logo = page.locator("header").getByRole("link", { name: "Andre" });
    await logo.click();
    await waitForHydration(page);

    // URL should be root (no path segments beyond optional locale)
    await expect(page).toHaveURL(/\/$/);
  });

  test("project detail page loads via direct navigation", async ({ page }) => {
    const slug = PROJECT_SLUGS[0]; // e-commerce-platform
    await page.goto(ROUTES.projectDetail(slug));
    await waitForHydration(page);

    await expect(page).toHaveURL(new RegExp(`/projects/${slug}$`));
    // The detail page renders the project title as <h1>
    await expect(page.locator("h1")).toContainText("E-Commerce Platform");
  });

  test("project detail page has back link to projects list", async ({
    page,
  }) => {
    await page.goto(ROUTES.projectDetail(PROJECT_SLUGS[0]));
    await waitForHydration(page);

    // Back link leads to /projects
    const backLink = page.locator("main").getByRole("link").first();
    await backLink.click();
    await waitForHydration(page);
    await expect(page).toHaveURL(/\/projects$/);
  });

  test("unknown route shows 404 page", async ({ page }) => {
    const response = await page.goto("/this-page-does-not-exist");
    expect(response?.status()).toBe(404);
  });

  test("unknown project slug shows 404", async ({ page }) => {
    const response = await page.goto("/projects/nonexistent-project-slug");
    expect(response?.status()).toBe(404);
  });
});

// ---------------------------------------------------------------------------
// Mobile navigation
// ---------------------------------------------------------------------------

test.describe("Navigation – Mobile", () => {
  test.use({ viewport: { width: 390, height: 844 } }); // iPhone-like viewport

  test("mobile menu opens and navigates to each page", async ({ page }) => {
    await page.goto(ROUTES.home);
    await waitForHydration(page);

    // Desktop nav should be hidden
    await expect(page.locator("header nav")).toBeHidden();

    for (const item of NAV_ITEMS) {
      if (item.href === "/") continue;

      // Open the mobile menu sheet
      await page.getByRole("button", { name: "Menu" }).click();

      // Wait for sheet to be visible
      const sheet = page.locator('[role="dialog"]');
      await expect(sheet).toBeVisible();

      // Click nav link inside the sheet
      const link = sheet.getByRole("link", { name: item.label });
      await link.click();

      // Sheet should close after navigation
      await expect(sheet).toBeHidden();

      // Verify navigation
      await waitForHydration(page);
      await expect(page).toHaveURL(new RegExp(`${item.href}$`));
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
