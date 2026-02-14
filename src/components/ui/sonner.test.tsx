import { render } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { Toaster } from "./sonner";

const { themeState } = vi.hoisted(() => ({
  themeState: { resolvedTheme: "dark" as string | undefined },
}));

vi.mock("next-themes", () => ({
  useTheme: () => ({
    resolvedTheme: themeState.resolvedTheme,
    setTheme: vi.fn(),
  }),
}));

// sonner uses matchMedia when theme is "system"
beforeEach(() => {
  window.matchMedia = ((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  })) as typeof window.matchMedia;
});

describe("Toaster", () => {
  it("renders without crashing", () => {
    const { container } = render(<Toaster />);
    expect(container).toBeDefined();
  });

  it("renders when resolvedTheme is undefined (falls back to system)", () => {
    themeState.resolvedTheme = undefined;
    const { container } = render(<Toaster />);
    expect(container).toBeDefined();
    themeState.resolvedTheme = "dark";
  });
});
