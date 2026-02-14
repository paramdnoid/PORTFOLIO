import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import NotFound from "./not-found";

vi.mock("next/link", () => ({
  default: ({
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

vi.mock("@/lib/fonts", () => ({
  fontSans: { variable: "font-sans-mock" },
}));

describe("Root NotFound", () => {
  it("renders 404 heading", () => {
    render(<NotFound />);
    expect(screen.getByText("404")).toBeInTheDocument();
  });

  it("renders page not found message", () => {
    render(<NotFound />);
    expect(screen.getByText("Page not found")).toBeInTheDocument();
  });

  it("renders a go home link", () => {
    render(<NotFound />);
    const link = screen.getByRole("link", { name: "Go home" });
    expect(link).toHaveAttribute("href", "/");
  });
});
