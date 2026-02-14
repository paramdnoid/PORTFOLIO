import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";

describe("Sheet", () => {
  it("renders trigger", () => {
    render(
      <Sheet>
        <SheetTrigger>Open Sheet</SheetTrigger>
      </Sheet>,
    );
    expect(screen.getByText("Open Sheet")).toBeInTheDocument();
  });

  it("renders content when open", () => {
    render(
      <Sheet open>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Sheet Title</SheetTitle>
            <SheetDescription>Sheet Description</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>,
    );
    expect(screen.getByText("Sheet Title")).toBeInTheDocument();
    expect(screen.getByText("Sheet Description")).toBeInTheDocument();
  });

  it("renders close button by default", () => {
    render(
      <Sheet open>
        <SheetContent>Content</SheetContent>
      </Sheet>,
    );
    expect(screen.getByText("Close")).toBeInTheDocument();
  });

  it("hides close button when showCloseButton is false", () => {
    render(
      <Sheet open>
        <SheetContent showCloseButton={false}>Content</SheetContent>
      </Sheet>,
    );
    expect(screen.queryByText("Close")).not.toBeInTheDocument();
  });

  it("renders with left side", () => {
    render(
      <Sheet open>
        <SheetContent side="left">Left content</SheetContent>
      </Sheet>,
    );
    expect(screen.getByText("Left content")).toBeInTheDocument();
  });

  it("renders with top side", () => {
    render(
      <Sheet open>
        <SheetContent side="top">Top content</SheetContent>
      </Sheet>,
    );
    expect(screen.getByText("Top content")).toBeInTheDocument();
  });

  it("renders with bottom side", () => {
    render(
      <Sheet open>
        <SheetContent side="bottom">Bottom content</SheetContent>
      </Sheet>,
    );
    expect(screen.getByText("Bottom content")).toBeInTheDocument();
  });

  it("renders SheetFooter", () => {
    render(
      <Sheet open>
        <SheetContent>
          <SheetFooter data-testid="footer">Footer</SheetFooter>
        </SheetContent>
      </Sheet>,
    );
    expect(screen.getByTestId("footer")).toHaveAttribute(
      "data-slot",
      "sheet-footer",
    );
  });

  it("renders SheetClose", () => {
    render(
      <Sheet open>
        <SheetContent>
          <SheetClose data-testid="close">X</SheetClose>
        </SheetContent>
      </Sheet>,
    );
    expect(screen.getByTestId("close")).toBeInTheDocument();
  });
});
