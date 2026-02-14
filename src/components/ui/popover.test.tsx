import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "./popover";

describe("Popover", () => {
  it("renders trigger", () => {
    render(
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>Content</PopoverContent>
      </Popover>,
    );
    expect(screen.getByText("Open")).toBeInTheDocument();
  });

  it("renders content when open", () => {
    render(
      <Popover open>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>Popover Content</PopoverContent>
      </Popover>,
    );
    expect(screen.getByText("Popover Content")).toBeInTheDocument();
  });

  it("renders PopoverAnchor", () => {
    render(
      <Popover>
        <PopoverAnchor data-testid="anchor" />
        <PopoverTrigger>Open</PopoverTrigger>
      </Popover>,
    );
    expect(screen.getByTestId("anchor")).toBeInTheDocument();
  });

  it("renders PopoverHeader, PopoverTitle, PopoverDescription", () => {
    render(
      <Popover open>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>
          <PopoverHeader>
            <PopoverTitle>Title</PopoverTitle>
            <PopoverDescription>Desc</PopoverDescription>
          </PopoverHeader>
        </PopoverContent>
      </Popover>,
    );
    expect(screen.getByText("Title")).toHaveAttribute(
      "data-slot",
      "popover-title",
    );
    expect(screen.getByText("Desc")).toHaveAttribute(
      "data-slot",
      "popover-description",
    );
  });
});
