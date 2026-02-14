import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { FadeIn, FadeInItem, StaggerContainer } from "./animated-wrapper";

vi.mock("motion/react", () => ({
  motion: {
    div: ({
      children,
      className,
    }: {
      children?: React.ReactNode;
      className?: string;
    }) => <div className={className}>{children}</div>,
  },
}));

describe("FadeIn", () => {
  it("renders children", () => {
    render(<FadeIn>Hello</FadeIn>);
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });

  it("applies className", () => {
    const { container } = render(<FadeIn className="custom">Content</FadeIn>);
    expect(container.querySelector(".custom")).toBeInTheDocument();
  });

  it("accepts a delay prop", () => {
    render(<FadeIn delay={0.5}>Delayed</FadeIn>);
    expect(screen.getByText("Delayed")).toBeInTheDocument();
  });
});

describe("StaggerContainer", () => {
  it("renders children", () => {
    render(<StaggerContainer>Staggered</StaggerContainer>);
    expect(screen.getByText("Staggered")).toBeInTheDocument();
  });

  it("applies className", () => {
    const { container } = render(
      <StaggerContainer className="stagger">Items</StaggerContainer>,
    );
    expect(container.querySelector(".stagger")).toBeInTheDocument();
  });
});

describe("FadeInItem", () => {
  it("renders children", () => {
    render(<FadeInItem>Item</FadeInItem>);
    expect(screen.getByText("Item")).toBeInTheDocument();
  });

  it("applies className", () => {
    const { container } = render(
      <FadeInItem className="item-class">Content</FadeInItem>,
    );
    expect(container.querySelector(".item-class")).toBeInTheDocument();
  });
});
