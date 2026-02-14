import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { MobileNav } from "./mobile-nav";

vi.mock("@/i18n/navigation", () => ({
  Link: ({
    children,
    href,
    onClick,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
    onClick?: () => void;
    [key: string]: unknown;
  }) => (
    <a href={href} onClick={onClick} {...props}>
      {children}
    </a>
  ),
}));

describe("MobileNav", () => {
  it("renders the menu button", () => {
    render(<MobileNav />);
    const button = screen.getByRole("button", { name: "menu" });
    expect(button).toBeInTheDocument();
  });

  it("opens the sheet and shows navigation links", () => {
    render(<MobileNav />);
    const menuButton = screen.getByRole("button", { name: "menu" });
    fireEvent.click(menuButton);

    // Navigation items should be visible
    expect(screen.getByText("home")).toBeInTheDocument();
    expect(screen.getByText("about")).toBeInTheDocument();
    expect(screen.getByText("projects")).toBeInTheDocument();
    expect(screen.getByText("contact")).toBeInTheDocument();
  });

  it("closes the sheet when a navigation link is clicked", () => {
    render(<MobileNav />);
    const menuButton = screen.getByRole("button", { name: "menu" });
    fireEvent.click(menuButton);

    // Click a nav link
    const homeLink = screen.getByText("home");
    fireEvent.click(homeLink);

    // The sheet should close (the title disappears from the dialog)
    expect(screen.queryByText("Andre")).not.toBeInTheDocument();
  });
});
