import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { Header } from "./header";

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}));
// Mock sub-components to isolate Header
vi.mock("@/components/layout/locale-switcher", () => ({
  LocaleSwitcher: () => <div data-testid="locale-switcher" />,
}));
vi.mock("@/components/layout/mobile-nav", () => ({
  MobileNav: () => <div data-testid="mobile-nav" />,
}));
vi.mock("@/components/layout/theme-toggle", () => ({
  ThemeToggle: () => <div data-testid="theme-toggle" />,
}));
vi.mock("@/i18n/navigation", () => ({
  Link: ({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
    [key: string]: unknown;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

describe("Header", () => {
  it("renders the site name as a link", () => {
    render(<Header />);
    const homeLink = screen.getByRole("link", { name: /Andre/i });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");
  });

  it("renders navigation items", () => {
    render(<Header />);
    expect(screen.getByText("home")).toBeInTheDocument();
    expect(screen.getByText("about")).toBeInTheDocument();
    expect(screen.getByText("experience")).toBeInTheDocument();
    expect(screen.getByText("projects")).toBeInTheDocument();
    expect(screen.getByText("contact")).toBeInTheDocument();
  });

  it("renders LocaleSwitcher, ThemeToggle, and MobileNav", () => {
    render(<Header />);
    expect(screen.getByTestId("locale-switcher")).toBeInTheDocument();
    expect(screen.getByTestId("theme-toggle")).toBeInTheDocument();
    expect(screen.getByTestId("mobile-nav")).toBeInTheDocument();
  });

  it("adds scrolled styling on scroll", () => {
    render(<Header />);
    const header = document.querySelector("header");
    expect(header).not.toBeNull();
    expect(header?.className).toContain("border-transparent");

    // Simulate scroll
    Object.defineProperty(window, "scrollY", { value: 100, writable: true });
    fireEvent.scroll(window);

    expect(header?.className).toContain("backdrop-blur-xl");
  });

  it("removes scrolled styling when scrolled back up", () => {
    render(<Header />);
    const header = document.querySelector("header");
    expect(header).not.toBeNull();

    // Scroll down
    Object.defineProperty(window, "scrollY", { value: 100, writable: true });
    fireEvent.scroll(window);
    expect(header?.className).toContain("backdrop-blur-xl");

    // Scroll back up
    Object.defineProperty(window, "scrollY", { value: 0, writable: true });
    fireEvent.scroll(window);
    expect(header?.className).toContain("border-transparent");
  });
});
