import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import GlobalError from "./global-error";

describe("GlobalError", () => {
  const mockReset = vi.fn();
  const baseError = Object.assign(new Error("Test error"), {});

  it("renders the error heading", () => {
    render(<GlobalError error={baseError} reset={mockReset} />);
    expect(screen.getByText("Something went wrong")).toBeInTheDocument();
  });

  it("renders the error description", () => {
    render(<GlobalError error={baseError} reset={mockReset} />);
    expect(
      screen.getByText("An unexpected error occurred. Please try again."),
    ).toBeInTheDocument();
  });

  it("renders the try again button", () => {
    render(<GlobalError error={baseError} reset={mockReset} />);
    const button = screen.getByRole("button", { name: "Try again" });
    expect(button).toBeInTheDocument();
  });

  it("calls reset when try again is clicked", () => {
    render(<GlobalError error={baseError} reset={mockReset} />);
    fireEvent.click(screen.getByRole("button", { name: "Try again" }));
    expect(mockReset).toHaveBeenCalledOnce();
  });

  it("renders error digest when provided", () => {
    const errorWithDigest = Object.assign(new Error("Test"), {
      digest: "abc123",
    });
    render(<GlobalError error={errorWithDigest} reset={mockReset} />);
    expect(screen.getByText(/Error ID: abc123/)).toBeInTheDocument();
  });

  it("does not render error digest when not provided", () => {
    render(<GlobalError error={baseError} reset={mockReset} />);
    expect(screen.queryByText(/Error ID:/)).not.toBeInTheDocument();
  });

  it("handles hover styles on button", () => {
    render(<GlobalError error={baseError} reset={mockReset} />);
    const button = screen.getByRole("button", { name: "Try again" });

    fireEvent.mouseOver(button);
    expect(button.style.opacity).toBe("0.9");

    fireEvent.mouseOut(button);
    expect(button.style.opacity).toBe("1");
  });
});
