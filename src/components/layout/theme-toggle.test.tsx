import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeToggle } from "./theme-toggle";

// Mock next-themes
const mockSetTheme = vi.fn();
vi.mock("next-themes", () => ({
  useTheme: () => ({
    setTheme: mockSetTheme,
    resolvedTheme: "dark",
  }),
}));

// Mock next-intl
vi.mock("next-intl", () => ({
  useTranslations: () => (key: string) => key,
}));

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

  it("calls setTheme when clicked", () => {
    render(<ThemeToggle />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(mockSetTheme).toHaveBeenCalledWith("light");
  });
});
