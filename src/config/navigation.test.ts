import { describe, it, expect } from "vitest";
import { navigationItems } from "./navigation";

describe("navigation config", () => {
  it("exports a non-empty array of nav items", () => {
    expect(navigationItems.length).toBeGreaterThan(0);
  });

  it("every item has a titleKey and href", () => {
    for (const item of navigationItems) {
      expect(item.titleKey).toBeTruthy();
      expect(item.href).toBeTruthy();
    }
  });

  it("all hrefs start with /", () => {
    for (const item of navigationItems) {
      expect(item.href.startsWith("/")).toBe(true);
    }
  });

  it("all titleKeys are unique", () => {
    const keys = navigationItems.map((item) => item.titleKey);
    expect(new Set(keys).size).toBe(keys.length);
  });

  it("all hrefs are unique", () => {
    const hrefs = navigationItems.map((item) => item.href);
    expect(new Set(hrefs).size).toBe(hrefs.length);
  });

  it("includes home route", () => {
    const homeItem = navigationItems.find((item) => item.href === "/");
    expect(homeItem).toBeDefined();
  });
});
