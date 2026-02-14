import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { Hero } from "./hero";

vi.mock("@/components/shared/animated-wrapper", () => ({
  FadeIn: ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => <div className={className}>{children}</div>,
}));
vi.mock("@/i18n/navigation", () => ({
  Link: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}));

describe("Hero", () => {
  it("renders greeting, name, role, and tagline", () => {
    render(<Hero />);
    expect(screen.getByText("greeting")).toBeInTheDocument();
    expect(screen.getByText("name")).toBeInTheDocument();
    expect(screen.getByText("role")).toBeInTheDocument();
    expect(screen.getByText("tagline")).toBeInTheDocument();
  });

  it("renders CTA buttons linking to projects and contact", () => {
    render(<Hero />);
    const ctaLink = screen.getByText("cta").closest("a");
    expect(ctaLink).toHaveAttribute("href", "/projects");

    const ctaSecondary = screen.getByText("ctaSecondary").closest("a");
    expect(ctaSecondary).toHaveAttribute("href", "/contact");
  });

  it("renders the heading as h1", () => {
    render(<Hero />);
    expect(
      screen.getByRole("heading", { level: 1, name: "name" }),
    ).toBeInTheDocument();
  });
});
