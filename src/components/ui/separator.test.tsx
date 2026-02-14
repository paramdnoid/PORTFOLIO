import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Separator } from "./separator";

describe("Separator", () => {
  it("renders with data-slot", () => {
    const { container } = render(<Separator />);
    const sep = container.querySelector('[data-slot="separator"]');
    expect(sep).toBeInTheDocument();
  });

  it("renders horizontal by default", () => {
    const { container } = render(<Separator />);
    const sep = container.querySelector('[data-slot="separator"]');
    expect(sep).toHaveAttribute("data-orientation", "horizontal");
  });

  it("renders vertical orientation", () => {
    const { container } = render(<Separator orientation="vertical" />);
    const sep = container.querySelector('[data-slot="separator"]');
    expect(sep).toHaveAttribute("data-orientation", "vertical");
  });

  it("applies custom className", () => {
    const { container } = render(<Separator className="my-sep" />);
    const sep = container.querySelector('[data-slot="separator"]');
    expect(sep).toHaveClass("my-sep");
  });
});
