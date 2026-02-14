import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import ContactPage, { generateMetadata } from "./page";

vi.mock("next-intl/server", () => ({
  setRequestLocale: vi.fn(),
  // eslint-disable-next-line @typescript-eslint/promise-function-async -- mock factory
  getTranslations: () => Promise.resolve((key: string) => key),
}));
vi.mock("./contact-content", () => ({
  ContactPageContent: () => <div data-testid="contact-content" />,
}));

describe("ContactPage", () => {
  it("renders ContactPageContent", async () => {
    const element = await ContactPage({
      params: Promise.resolve({ locale: "en" }),
    });
    render(element);
    expect(screen.getByTestId("contact-content")).toBeInTheDocument();
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
