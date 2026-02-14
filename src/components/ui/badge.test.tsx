import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Badge } from "./badge";

describe("Badge", () => {
  it("renders with default variant", () => {
    render(<Badge>Default</Badge>);
    const badge = screen.getByText("Default");
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveAttribute("data-slot", "badge");
    expect(badge).toHaveAttribute("data-variant", "default");
  });

  it("renders with secondary variant", () => {
    render(<Badge variant="secondary">Secondary</Badge>);
    expect(screen.getByText("Secondary")).toHaveAttribute(
      "data-variant",
      "secondary",
    );
  });

  it("renders with destructive variant", () => {
    render(<Badge variant="destructive">Error</Badge>);
    expect(screen.getByText("Error")).toHaveAttribute(
      "data-variant",
      "destructive",
    );
  });

  it("renders with outline variant", () => {
    render(<Badge variant="outline">Outline</Badge>);
    expect(screen.getByText("Outline")).toHaveAttribute(
      "data-variant",
      "outline",
    );
  });

  it("renders with ghost variant", () => {
    render(<Badge variant="ghost">Ghost</Badge>);
    expect(screen.getByText("Ghost")).toHaveAttribute("data-variant", "ghost");
  });

  it("renders with link variant", () => {
    render(<Badge variant="link">Link</Badge>);
    expect(screen.getByText("Link")).toHaveAttribute("data-variant", "link");
  });

  it("applies custom className", () => {
    render(<Badge className="custom">Styled</Badge>);
    expect(screen.getByText("Styled")).toHaveClass("custom");
  });

  it("renders as child element when asChild is true", () => {
    render(
      <Badge asChild>
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- test only */}
        <a href="/test">Link Badge</a>
      </Badge>,
    );
    const link = screen.getByRole("link", { name: "Link Badge" });
    expect(link).toBeInTheDocument();
  });
});
