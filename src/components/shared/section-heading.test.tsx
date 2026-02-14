import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { SectionHeading } from "./section-heading";

// Mock motion/react to render children without animation
vi.mock("motion/react", () => ({
  motion: {
    div: ({
      children,
      className,
    }: {
      children: React.ReactNode;
      className?: string;
    }) => <div className={className}>{children}</div>,
  },
}));

describe("SectionHeading", () => {
  it("renders the title", () => {
    render(<SectionHeading title="My Title" />);
    expect(
      screen.getByRole("heading", { level: 2, name: "My Title" }),
    ).toBeInTheDocument();
  });

  it("renders the subtitle when provided", () => {
    render(<SectionHeading title="Title" subtitle="Subtitle Text" />);
    expect(screen.getByText("Subtitle Text")).toBeInTheDocument();
  });

  it("does not render subtitle element when not provided", () => {
    const { container } = render(<SectionHeading title="Title Only" />);
    const paragraphs = container.querySelectorAll("p");
    expect(paragraphs.length).toBe(0);
  });

  it("applies custom className", () => {
    const { container } = render(
      <SectionHeading title="Title" className="custom-class" />,
    );
    // The className is passed to the FadeIn wrapper (mocked as div)
    expect(container.querySelector(".custom-class")).toBeInTheDocument();
  });
});
