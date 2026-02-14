import { describe, expect, it, vi } from "vitest";

vi.mock("next-intl/navigation", () => ({
  createNavigation: () => ({
    Link: vi.fn(),
    redirect: vi.fn(),
    usePathname: vi.fn(),
    useRouter: vi.fn(),
    getPathname: vi.fn(),
  }),
}));

const nav = await import("./navigation");

describe("i18n/navigation", () => {
  it("exports Link", () => {
    expect(nav.Link).toBeDefined();
  });

  it("exports redirect", () => {
    expect(nav.redirect).toBeDefined();
  });

  it("exports usePathname", () => {
    expect(nav.usePathname).toBeDefined();
  });

  it("exports useRouter", () => {
    expect(nav.useRouter).toBeDefined();
  });

  it("exports getPathname", () => {
    expect(nav.getPathname).toBeDefined();
  });
});
