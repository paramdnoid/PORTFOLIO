import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import AboutPage, { generateMetadata } from "./page";

vi.mock("next-intl/server", () => ({
  setRequestLocale: vi.fn(),
  // eslint-disable-next-line @typescript-eslint/promise-function-async -- mock factory
  getTranslations: () => Promise.resolve((key: string) => key),
}));
vi.mock("@/components/sections/about-preview", () => ({
  AboutPreview: () => <div data-testid="about-preview" />,
}));
vi.mock("@/components/sections/skills", () => ({
  Skills: () => <div data-testid="skills" />,
}));

describe("AboutPage", () => {
  it("renders about preview and skills sections", async () => {
    const element = await AboutPage({
      params: Promise.resolve({ locale: "en" }),
    });
    render(element);

    expect(screen.getByTestId("about-preview")).toBeInTheDocument();
    expect(screen.getByTestId("skills")).toBeInTheDocument();
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
