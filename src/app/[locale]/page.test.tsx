import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import HomePage from "./page";

vi.mock("next-intl/server", () => ({
  setRequestLocale: vi.fn(),
}));
vi.mock("@/components/sections/hero", () => ({
  Hero: () => <div data-testid="hero" />,
}));
vi.mock("@/components/sections/about-preview", () => ({
  AboutPreview: () => <div data-testid="about-preview" />,
}));
vi.mock("@/components/sections/experience-preview", () => ({
  ExperiencePreview: () => <div data-testid="experience-preview" />,
}));
vi.mock("@/components/sections/projects-showcase", () => ({
  ProjectsShowcase: () => <div data-testid="projects-showcase" />,
}));
vi.mock("@/components/sections/skills", () => ({
  Skills: () => <div data-testid="skills" />,
}));
vi.mock("@/components/sections/contact-cta", () => ({
  ContactCTA: () => <div data-testid="contact-cta" />,
}));

describe("HomePage", () => {
  it("renders all homepage sections", async () => {
    const element = await HomePage({
      params: Promise.resolve({ locale: "en" }),
    });
    render(element);

    expect(screen.getByTestId("hero")).toBeInTheDocument();
    expect(screen.getByTestId("about-preview")).toBeInTheDocument();
    expect(screen.getByTestId("projects-showcase")).toBeInTheDocument();
    expect(screen.getByTestId("skills")).toBeInTheDocument();
    expect(screen.getByTestId("contact-cta")).toBeInTheDocument();
  });
});
