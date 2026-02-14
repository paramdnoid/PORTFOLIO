import { describe, expect, it, vi } from "vitest";

vi.mock("next-intl/routing", () => ({
  defineRouting: (config: unknown) => config,
}));

// Must import AFTER the mock is declared
const { routing } = await import("./routing");

describe("routing", () => {
  it("exports a routing config with locales and default locale", () => {
    expect(routing).toBeDefined();
    expect(routing).toHaveProperty("locales");
    expect(routing).toHaveProperty("defaultLocale");
    expect(routing).toHaveProperty("localePrefix", "as-needed");
  });

  it("uses 'en' as default locale", () => {
    expect(routing.defaultLocale).toBe("en");
  });

  it("includes all locale codes", () => {
    expect(Array.isArray(routing.locales)).toBe(true);
    expect(routing.locales.length).toBeGreaterThan(0);
    expect(routing.locales).toContain("en");
    expect(routing.locales).toContain("de");
  });
});
