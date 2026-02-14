import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { AboutPreview } from "./about-preview";

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
  SectionHeading: ({
    title,
    subtitle,
  }: {
    title: string;
    subtitle?: string;
  }) => (
    <div>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  ),
}));

describe("AboutPreview", () => {
  it("renders section heading with title and subtitle", () => {
    render(<AboutPreview />);
    expect(
      screen.getByRole("heading", { level: 2, name: "title" }),
    ).toBeInTheDocument();
    expect(screen.getByText("subtitle")).toBeInTheDocument();
  });

  it("renders bio text", () => {
    render(<AboutPreview />);
    expect(screen.getByText("bio")).toBeInTheDocument();
  });
});
