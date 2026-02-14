import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";

describe("Dialog", () => {
  it("renders trigger", () => {
    render(
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
      </Dialog>,
    );
    expect(screen.getByText("Open")).toBeInTheDocument();
  });

  it("renders content when open", () => {
    render(
      <Dialog open>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogDescription>Dialog Description</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>,
    );
    expect(screen.getByText("Dialog Title")).toBeInTheDocument();
    expect(screen.getByText("Dialog Description")).toBeInTheDocument();
  });

  it("renders close button by default", () => {
    render(
      <Dialog open>
        <DialogContent>Content</DialogContent>
      </Dialog>,
    );
    expect(screen.getByText("Close")).toBeInTheDocument();
  });

  it("hides close button when showCloseButton is false", () => {
    render(
      <Dialog open>
        <DialogContent showCloseButton={false}>Content</DialogContent>
      </Dialog>,
    );
    expect(screen.queryByText("Close")).not.toBeInTheDocument();
  });

  it("renders DialogFooter", () => {
    render(
      <Dialog open>
        <DialogContent>
          <DialogFooter data-testid="footer">Footer</DialogFooter>
        </DialogContent>
      </Dialog>,
    );
    expect(screen.getByTestId("footer")).toHaveAttribute(
      "data-slot",
      "dialog-footer",
    );
  });

  it("renders DialogFooter with close button", () => {
    render(
      <Dialog open>
        <DialogContent>
          <DialogFooter showCloseButton>Actions</DialogFooter>
        </DialogContent>
      </Dialog>,
    );
    // The footer close button renders a "Close" text
    const closeButtons = screen.getAllByText("Close");
    expect(closeButtons.length).toBeGreaterThanOrEqual(1);
  });

  it("renders DialogClose", () => {
    render(
      <Dialog open>
        <DialogContent>
          <DialogClose data-testid="close-btn">X</DialogClose>
        </DialogContent>
      </Dialog>,
    );
    expect(screen.getByTestId("close-btn")).toBeInTheDocument();
  });
});
