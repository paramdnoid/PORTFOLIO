import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { ContactPageContent } from "./contact-content";

vi.mock("@/components/shared/animated-wrapper", () => ({
  FadeIn: ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => <div className={className}>{children}</div>,
}));
vi.mock("@/components/shared/section-heading", () => ({
  SectionHeading: ({ title }: { title: string }) => <h2>{title}</h2>,
}));

describe("ContactPageContent", () => {
  it("renders the heading", () => {
    render(<ContactPageContent />);
    expect(
      screen.getByRole("heading", { level: 2, name: "title" }),
    ).toBeInTheDocument();
  });

  it("renders subtitle text", () => {
    render(<ContactPageContent />);
    expect(screen.getByText("subtitle")).toBeInTheDocument();
  });

  it("renders email link with correct href", () => {
    render(<ContactPageContent />);
    const emailLink = screen.getByText("send").closest("a");
    expect(emailLink).toHaveAttribute("href", "mailto:hello@andre.dev");
  });
});
