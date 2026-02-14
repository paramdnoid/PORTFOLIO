import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { ProjectsShowcase } from "./projects-showcase";

vi.mock("@/components/shared/section-heading", () => ({
  SectionHeading: ({ title }: { title: string }) => <h2>{title}</h2>,
}));
vi.mock("@/components/shared/timeline-project-entry", () => ({
  TimelineProjectEntry: ({ project }: { project: { title: string } }) => (
    <div data-testid="project-entry">{project.title}</div>
  ),
}));

describe("ProjectsShowcase", () => {
  it("renders the section heading", () => {
    render(<ProjectsShowcase />);
    expect(
      screen.getByRole("heading", { level: 2, name: "title" }),
    ).toBeInTheDocument();
  });

  it("renders project entries", () => {
    render(<ProjectsShowcase />);
    const entries = screen.getAllByTestId("project-entry");
    expect(entries.length).toBeGreaterThan(0);
  });

  it("has projects section id for anchor linking", () => {
    const { container } = render(<ProjectsShowcase />);
    const section = container.querySelector("#projects");
    expect(section).toBeInTheDocument();
  });
});
