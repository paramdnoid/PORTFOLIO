import { expect, test } from "@playwright/test";

import {
  clickThemeToggle,
  getTheme,
  ROUTES,
  waitForHydration,
} from "./fixtures";

test.describe("Theme – Toggle & Persistence", () => {
  test("theme toggle switches between dark and light", async ({ page }) => {
    await page.goto(ROUTES.home);
    await waitForHydration(page);

    const initial = await getTheme(page);

    await clickThemeToggle(page);
    const toggled = await getTheme(page);
    expect(toggled).not.toBe(initial);

    await clickThemeToggle(page);
    const restored = await getTheme(page);
    expect(restored).toBe(initial);
  });

  test("theme persists across page navigation", async ({ page }) => {
    await page.goto(ROUTES.home);
    await waitForHydration(page);

    // Switch to light (default is dark)
    const initial = await getTheme(page);
    if (initial === "dark") {
      await clickThemeToggle(page);
    }
    expect(await getTheme(page)).toBe("light");

    // Navigate to about page
    await page.goto(ROUTES.about);
    await waitForHydration(page);

    // Theme should still be light
    expect(await getTheme(page)).toBe("light");
  });

  test("theme persists after page reload", async ({ page }) => {
    await page.goto(ROUTES.home);
    await waitForHydration(page);

    // Switch to light (default is dark)
    const initial = await getTheme(page);
    if (initial === "dark") {
      await clickThemeToggle(page);
    }
    expect(await getTheme(page)).toBe("light");

    // Reload
    await page.reload();
    await waitForHydration(page);

    // Theme should still be light
    expect(await getTheme(page)).toBe("light");
  });

  test("theme toggle is keyboard accessible", async ({ page }) => {
    await page.goto(ROUTES.home);
    await waitForHydration(page);

    const initial = await getTheme(page);

    // Focus the theme toggle button and press Enter
    const themeButton = page.getByRole("button", { name: "Toggle theme" });
    await themeButton.focus();
    await page.keyboard.press("Enter");

    const toggled = await getTheme(page);
    expect(toggled).not.toBe(initial);
  });

  test("theme toggle has correct aria-label", async ({ page }) => {
    await page.goto(ROUTES.home);
    await waitForHydration(page);

    const themeButton = page.getByRole("button", { name: "Toggle theme" });
    await expect(themeButton).toBeVisible();
    await expect(themeButton).toHaveAttribute("aria-label", "Toggle theme");
  });

  test("dark theme applies dark class on html element", async ({ page }) => {
    await page.goto(ROUTES.home);
    await waitForHydration(page);

    // Ensure we are in dark mode
    const current = await getTheme(page);
    if (current === "light") {
      await clickThemeToggle(page);
    }

    const htmlClasses = await page.locator("html").getAttribute("class");
    expect(htmlClasses).toContain("dark");
  });

  test("light theme removes dark class from html element", async ({ page }) => {
    await page.goto(ROUTES.home);
    await waitForHydration(page);

    // Ensure we are in light mode
    const current = await getTheme(page);
    if (current === "dark") {
      await clickThemeToggle(page);
    }

    const htmlClasses = await page.locator("html").getAttribute("class");
    expect(htmlClasses).not.toContain("dark");
  });
});
