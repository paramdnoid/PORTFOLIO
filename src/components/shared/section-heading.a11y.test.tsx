import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import { describe, expect, it, vi } from "vitest";

import { SectionHeading } from "./section-heading";

vi.mock("motion/react", () => ({
  motion: {
    div: ({
      children,
      className,
    }: {
      children: React.ReactNode;
      className?: string;
    }) => <div className={className}>{children}</div>,
  },
}));

describe("SectionHeading a11y", () => {
  it("has no accessibility violations with title only", async () => {
    const { container } = render(<SectionHeading title="Test Title" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("has no accessibility violations with title and subtitle", async () => {
    const { container } = render(
      <SectionHeading title="Test Title" subtitle="Test Subtitle" />,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
