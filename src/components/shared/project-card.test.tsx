import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import type { Project } from "@/types";

import { ProjectCard } from "./project-card";

vi.mock("@/components/shared/animated-wrapper", () => ({
  FadeInItem: ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => <div className={className}>{children}</div>,
}));

vi.mock("next/image", () => ({
  default: function MockImage(props: Record<string, unknown>) {
    // eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element
    return <img {...(props as React.ImgHTMLAttributes<HTMLImageElement>)} />;
  },
}));

const baseProject: Project = {
  title: "Test Project",
  description: "A test project description",
  slug: "test-project",
  tags: ["React", "TypeScript"],
  image: "/test.svg",
  featured: false,
  year: 2025,
};

describe("ProjectCard", () => {
  it("renders project title and description", () => {
    render(<ProjectCard project={baseProject} />);
    expect(screen.getByText("Test Project")).toBeInTheDocument();
    expect(screen.getByText("A test project description")).toBeInTheDocument();
  });

  it("renders project tags", () => {
    render(<ProjectCard project={baseProject} />);
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
  });

  it("renders featured badge when featured", () => {
    render(<ProjectCard project={{ ...baseProject, featured: true }} />);
    expect(screen.getByText("featured")).toBeInTheDocument();
  });

  it("does not render featured badge when not featured", () => {
    render(<ProjectCard project={baseProject} />);
    expect(screen.queryByText("featured")).not.toBeInTheDocument();
  });

  it("renders live URL link when available", () => {
    render(
      <ProjectCard
        project={{ ...baseProject, liveUrl: "https://example.com" }}
      />,
    );
    const link = screen.getByText("viewProject").closest("a");
    expect(link).toHaveAttribute("href", "https://example.com");
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("renders GitHub link when available", () => {
    render(
      <ProjectCard
        project={{ ...baseProject, githubUrl: "https://github.com/test" }}
      />,
    );
    const link = screen.getByText("viewCode").closest("a");
    expect(link).toHaveAttribute("href", "https://github.com/test");
  });

  it("does not render live URL link when not provided", () => {
    render(<ProjectCard project={baseProject} />);
    expect(screen.queryByText("viewProject")).not.toBeInTheDocument();
  });

  it("does not render GitHub link when not provided", () => {
    render(<ProjectCard project={baseProject} />);
    expect(screen.queryByText("viewCode")).not.toBeInTheDocument();
  });

  it("renders project image", () => {
    render(<ProjectCard project={baseProject} />);
    const img = screen.getByAltText("Test Project");
    expect(img).toBeInTheDocument();
  });
});
