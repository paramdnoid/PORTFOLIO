import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import type { Project } from "@/types";

import { ProjectsPageContent } from "./projects-content";

vi.mock("@/components/shared/animated-wrapper", () => ({
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
vi.mock("@/components/shared/project-card", () => ({
  ProjectCard: ({ project }: { project: { title: string } }) => (
    <div data-testid="project-card">{project.title}</div>
  ),
}));

const mockProjects: Project[] = [
  {
    title: "Project 1",
    description: "Desc 1",
    slug: "project-1",
    tags: ["React"],
    image: "/img1.svg",
    featured: true,
    year: 2025,
  },
];

describe("ProjectsPageContent", () => {
  it("renders the section heading", () => {
    render(<ProjectsPageContent projects={mockProjects} />);
    expect(
      screen.getByRole("heading", { level: 2, name: "title" }),
    ).toBeInTheDocument();
  });

  it("renders project cards when projects exist", () => {
    render(<ProjectsPageContent projects={mockProjects} />);
    expect(screen.getByTestId("project-card")).toBeInTheDocument();
    expect(screen.getByText("Project 1")).toBeInTheDocument();
  });

  it("renders no-projects message when empty", () => {
    render(<ProjectsPageContent projects={[]} />);
    expect(screen.getByText("noProjects")).toBeInTheDocument();
  });
});
