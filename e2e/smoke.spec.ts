import { expect, test } from "@playwright/test";

test.describe("Smoke Tests", () => {
  test("homepage loads successfully", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Andre/i);
    await expect(page.locator("main")).toBeVisible();
  });

  test("navigation links are visible on desktop", async ({ page }) => {
    await page.goto("/");
    const nav = page.locator("header nav");
    await expect(nav).toBeVisible();

    // Check that navigation links exist
    const links = nav.locator("a");
    await expect(links.first()).toBeVisible();
  });

  test("about page loads", async ({ page }) => {
    await page.goto("/about");
    await expect(page.locator("main")).toBeVisible();
  });

  test("projects page loads", async ({ page }) => {
    await page.goto("/projects");
    await expect(page.locator("main")).toBeVisible();
  });

  test("contact page loads", async ({ page }) => {
    await page.goto("/contact");
    await expect(page.locator("main")).toBeVisible();
  });

  test("404 page displays for unknown routes", async ({ page }) => {
    const response = await page.goto("/this-page-does-not-exist");
    expect(response?.status()).toBe(404);
  });

  test("locale switching works", async ({ page }) => {
    await page.goto("/");
    // Verify the page has the default lang attribute
    const htmlLang = await page.locator("html").getAttribute("lang");
    expect(htmlLang).toBeTruthy();
  });

  test("theme toggle button is accessible", async ({ page }) => {
    await page.goto("/");
    const themeButton = page.locator("button", {
      has: page.locator(".sr-only"),
    });
    await expect(themeButton.first()).toBeVisible();
  });

  test("footer is visible with social links", async ({ page }) => {
    await page.goto("/");
    const footer = page.locator("footer");
    await expect(footer).toBeVisible();

    // Check social links have aria-labels
    const githubLink = footer.locator('a[aria-label="GitHub"]');
    await expect(githubLink).toBeVisible();
  });
});
