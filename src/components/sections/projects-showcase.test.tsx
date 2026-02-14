import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { ProjectsShowcase } from "./projects-showcase";

vi.mock("@/components/shared/animated-wrapper", () => ({
  FadeIn: ({
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
vi.mock("@/components/shared/project-card", () => ({
  ProjectCard: ({ project }: { project: { title: string } }) => (
    <div data-testid="project-card">{project.title}</div>
  ),
}));
vi.mock("@/i18n/navigation", () => ({
  Link: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}));

describe("ProjectsShowcase", () => {
  it("renders the section heading", () => {
    render(<ProjectsShowcase />);
    expect(
      screen.getByRole("heading", { level: 2, name: "title" }),
    ).toBeInTheDocument();
  });

  it("renders featured project cards", () => {
    render(<ProjectsShowcase />);
    const cards = screen.getAllByTestId("project-card");
    expect(cards.length).toBeGreaterThan(0);
  });

  it("renders 'all projects' link", () => {
    render(<ProjectsShowcase />);
    const link = screen.getByText("allProjects").closest("a");
    expect(link).toHaveAttribute("href", "/projects");
  });
});
