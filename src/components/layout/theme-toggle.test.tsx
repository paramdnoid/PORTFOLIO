import { fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { ThemeToggle } from "./theme-toggle";

const { mockSetTheme, themeState } = vi.hoisted(() => ({
  mockSetTheme: vi.fn(),
  themeState: { resolvedTheme: "dark" as string },
}));

// Mock next-themes
vi.mock("next-themes", () => ({
  useTheme: () => ({
    setTheme: mockSetTheme,
    resolvedTheme: themeState.resolvedTheme,
  }),
}));

// Mock next-intl
vi.mock("next-intl", () => ({
  useTranslations: () => (key: string) => key,
}));

afterEach(() => {
  themeState.resolvedTheme = "dark";
});

describe("ThemeToggle", () => {
  it("renders a button", () => {
    render(<ThemeToggle />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("has an accessible aria-label", () => {
    render(<ThemeToggle />);
    const button = screen.getByRole("button", { name: "toggleTheme" });
    expect(button).toBeInTheDocument();
  });

  it("has a screen-reader-only label", () => {
    render(<ThemeToggle />);
    const srOnly = screen.getByText("toggleTheme");
    expect(srOnly).toBeInTheDocument();
    expect(srOnly).toHaveClass("sr-only");
  });

  it("calls setTheme with 'light' when current theme is dark", () => {
    render(<ThemeToggle />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(mockSetTheme).toHaveBeenCalledWith("light");
  });

  it("calls setTheme with 'dark' when current theme is light", () => {
    themeState.resolvedTheme = "light";
    render(<ThemeToggle />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(mockSetTheme).toHaveBeenCalledWith("dark");
  });
});
