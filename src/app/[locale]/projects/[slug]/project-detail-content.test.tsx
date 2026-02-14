import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import type { Project } from "@/types";

import { ProjectDetailContent } from "./project-detail-content";

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

const baseProject: Project = {
  title: "Test Project",
  description: "Short desc",
  slug: "test-project",
  tags: ["React", "Node.js"],
  image: "/test.svg",
  featured: true,
  year: 2025,
};

describe("ProjectDetailContent", () => {
  it("renders project title", () => {
    render(<ProjectDetailContent project={baseProject} />);
    expect(
      screen.getByRole("heading", { level: 1, name: "Test Project" }),
    ).toBeInTheDocument();
  });

  it("renders project description", () => {
    render(<ProjectDetailContent project={baseProject} />);
    expect(screen.getByText("Short desc")).toBeInTheDocument();
  });

  it("renders long description when available", () => {
    render(
      <ProjectDetailContent
        project={{ ...baseProject, longDescription: "Long description here" }}
      />,
    );
    expect(screen.getByText("Long description here")).toBeInTheDocument();
  });

  it("renders project tags", () => {
    render(<ProjectDetailContent project={baseProject} />);
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("Node.js")).toBeInTheDocument();
  });

  it("renders back link to projects", () => {
    render(<ProjectDetailContent project={baseProject} />);
    const backLink = screen.getByText("backToHome").closest("a");
    expect(backLink).toHaveAttribute("href", "/projects");
  });

  it("renders live URL when available", () => {
    render(
      <ProjectDetailContent
        project={{ ...baseProject, liveUrl: "https://example.com" }}
      />,
    );
    const link = screen.getByText("viewProject").closest("a");
    expect(link).toHaveAttribute("href", "https://example.com");
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("renders GitHub URL when available", () => {
    render(
      <ProjectDetailContent
        project={{
          ...baseProject,
          githubUrl: "https://github.com/test/repo",
        }}
      />,
    );
    const link = screen.getByText("viewCode").closest("a");
    expect(link).toHaveAttribute("href", "https://github.com/test/repo");
  });

  it("does not render live URL link when not provided", () => {
    render(<ProjectDetailContent project={baseProject} />);
    expect(screen.queryByText("viewProject")).not.toBeInTheDocument();
  });

  it("does not render GitHub link when not provided", () => {
    render(<ProjectDetailContent project={baseProject} />);
    expect(screen.queryByText("viewCode")).not.toBeInTheDocument();
  });
});
