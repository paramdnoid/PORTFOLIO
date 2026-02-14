import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import ProjectNotFound from "./not-found";

vi.mock("next-intl/server", () => ({
  // eslint-disable-next-line @typescript-eslint/promise-function-async -- mock factory
  getTranslations: () => Promise.resolve((key: string) => key),
}));
vi.mock("@/i18n/navigation", () => ({
  Link: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}));

describe("ProjectNotFound", () => {
  it("renders 404 heading", async () => {
    const element = await ProjectNotFound();
    render(element);
    expect(screen.getByText("404")).toBeInTheDocument();
  });

  it("renders not found message", async () => {
    const element = await ProjectNotFound();
    render(element);
    expect(screen.getByText("notFound")).toBeInTheDocument();
  });

  it("renders back to projects link", async () => {
    const element = await ProjectNotFound();
    render(element);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/projects");
  });
});
