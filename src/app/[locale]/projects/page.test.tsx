import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import ProjectsPage, { generateMetadata } from "./page";

vi.mock("next-intl/server", () => ({
  setRequestLocale: vi.fn(),
  // eslint-disable-next-line @typescript-eslint/promise-function-async -- mock factory
  getTranslations: () => Promise.resolve((key: string) => key),
}));
vi.mock("./projects-content", () => ({
  ProjectsPageContent: ({ projects }: { projects: unknown[] }) => (
    <div data-testid="projects-content">{projects.length} projects</div>
  ),
}));

describe("ProjectsPage", () => {
  it("renders ProjectsPageContent with projects", async () => {
    const element = await ProjectsPage({
      params: Promise.resolve({ locale: "en" }),
    });
    render(element);
    expect(screen.getByTestId("projects-content")).toBeInTheDocument();
  });
});

describe("generateMetadata", () => {
  it("returns title and description", async () => {
    const metadata = await generateMetadata({
      params: Promise.resolve({ locale: "en" }),
    });
    expect(metadata).toHaveProperty("title");
    expect(metadata).toHaveProperty("description");
  });
});
