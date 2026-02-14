import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";

describe("Card", () => {
  it("renders with data-slot", () => {
    render(<Card data-testid="card">Content</Card>);
    const card = screen.getByTestId("card");
    expect(card).toHaveAttribute("data-slot", "card");
  });

  it("applies custom className", () => {
    render(
      <Card data-testid="card" className="custom">
        Content
      </Card>,
    );
    expect(screen.getByTestId("card")).toHaveClass("custom");
  });
});

describe("CardHeader", () => {
  it("renders with data-slot", () => {
    render(<CardHeader data-testid="header">Header</CardHeader>);
    expect(screen.getByTestId("header")).toHaveAttribute(
      "data-slot",
      "card-header",
    );
  });
});

describe("CardTitle", () => {
  it("renders with data-slot", () => {
    render(<CardTitle>Title</CardTitle>);
    expect(screen.getByText("Title")).toHaveAttribute(
      "data-slot",
      "card-title",
    );
  });
});

describe("CardDescription", () => {
  it("renders with data-slot", () => {
    render(<CardDescription>Description</CardDescription>);
    expect(screen.getByText("Description")).toHaveAttribute(
      "data-slot",
      "card-description",
    );
  });
});

describe("CardAction", () => {
  it("renders with data-slot", () => {
    render(<CardAction data-testid="action">Action</CardAction>);
    expect(screen.getByTestId("action")).toHaveAttribute(
      "data-slot",
      "card-action",
    );
  });
});

describe("CardContent", () => {
  it("renders with data-slot", () => {
    render(<CardContent data-testid="content">Content</CardContent>);
    expect(screen.getByTestId("content")).toHaveAttribute(
      "data-slot",
      "card-content",
    );
  });
});

describe("CardFooter", () => {
  it("renders with data-slot", () => {
    render(<CardFooter data-testid="footer">Footer</CardFooter>);
    expect(screen.getByTestId("footer")).toHaveAttribute(
      "data-slot",
      "card-footer",
    );
  });
});
