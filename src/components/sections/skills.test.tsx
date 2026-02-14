import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { Skills } from "./skills";

vi.mock("@/components/shared/animated-wrapper", () => ({
  FadeIn: ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => <div className={className}>{children}</div>,
  FadeInItem: ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => <div className={className}>{children}</div>,
  StaggerContainer: ({
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

describe("Skills", () => {
  it("renders the section heading", () => {
    render(<Skills />);
    expect(
      screen.getByRole("heading", { level: 2, name: "title" }),
    ).toBeInTheDocument();
  });

  it("renders all four category labels", () => {
    render(<Skills />);
    expect(screen.getByText("frontend")).toBeInTheDocument();
    expect(screen.getByText("backend")).toBeInTheDocument();
    expect(screen.getByText("tools")).toBeInTheDocument();
    expect(screen.getByText("other")).toBeInTheDocument();
  });

  it("renders individual skills as badges", () => {
    render(<Skills />);
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("Node.js")).toBeInTheDocument();
    expect(screen.getByText("Git")).toBeInTheDocument();
  });
});
