import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import { describe, expect, it, vi } from "vitest";

import { ThemeToggle } from "./theme-toggle";

vi.mock("next-themes", () => ({
  useTheme: () => ({
    setTheme: vi.fn(),
    resolvedTheme: "dark",
  }),
}));

vi.mock("next-intl", () => ({
  useTranslations: () => (key: string) => key,
}));

describe("ThemeToggle a11y", () => {
  it("has no accessibility violations", async () => {
    const { container } = render(<ThemeToggle />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
