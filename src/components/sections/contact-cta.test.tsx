import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { ContactCTA } from "./contact-cta";

vi.mock("@/components/shared/animated-wrapper", () => ({
  FadeIn: ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => <div className={className}>{children}</div>,
}));

describe("ContactCTA", () => {
  it("renders the heading", () => {
    render(<ContactCTA />);
    expect(
      screen.getByRole("heading", { level: 2, name: "title" }),
    ).toBeInTheDocument();
  });

  it("renders the subtitle", () => {
    render(<ContactCTA />);
    expect(screen.getByText("subtitle")).toBeInTheDocument();
  });

  it("renders a mailto contact link", () => {
    render(<ContactCTA />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", expect.stringContaining("mailto:"));
  });
});
