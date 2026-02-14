import { render, screen } from "@testing-library/react";
import { beforeAll, describe, expect, it, vi } from "vitest";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "./command";

// cmdk uses ResizeObserver and scrollIntoView which are not available in jsdom
beforeAll(() => {
  globalThis.ResizeObserver = class {
    observe(): void {}
    unobserve(): void {}
    disconnect(): void {}
  };
  Element.prototype.scrollIntoView = vi.fn();
});

describe("Command", () => {
  it("renders the command container", () => {
    const { container } = render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandEmpty>No results</CommandEmpty>
          <CommandGroup heading="Group">
            <CommandItem>Item 1</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>,
    );
    expect(
      container.querySelector('[data-slot="command"]'),
    ).toBeInTheDocument();
  });

  it("renders CommandInput with placeholder", () => {
    render(
      <Command>
        <CommandInput placeholder="Type here..." />
        <CommandList />
      </Command>,
    );
    expect(screen.getByPlaceholderText("Type here...")).toBeInTheDocument();
  });

  it("renders CommandEmpty when no results", () => {
    render(
      <Command>
        <CommandList>
          <CommandEmpty>No results found</CommandEmpty>
        </CommandList>
      </Command>,
    );
    expect(screen.getByText("No results found")).toBeInTheDocument();
  });

  it("renders CommandGroup with heading", () => {
    render(
      <Command>
        <CommandList>
          <CommandGroup heading="Suggestions">
            <CommandItem>Item</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>,
    );
    expect(screen.getByText("Suggestions")).toBeInTheDocument();
  });

  it("renders CommandItem", () => {
    render(
      <Command>
        <CommandList>
          <CommandItem>Test Item</CommandItem>
        </CommandList>
      </Command>,
    );
    expect(screen.getByText("Test Item")).toBeInTheDocument();
  });

  it("renders CommandSeparator", () => {
    const { container } = render(
      <Command>
        <CommandList>
          <CommandSeparator />
        </CommandList>
      </Command>,
    );
    expect(
      container.querySelector('[data-slot="command-separator"]'),
    ).toBeInTheDocument();
  });

  it("renders CommandShortcut", () => {
    render(<CommandShortcut>⌘K</CommandShortcut>);
    const shortcut = screen.getByText("⌘K");
    expect(shortcut).toHaveAttribute("data-slot", "command-shortcut");
  });

  it("renders CommandDialog when open", () => {
    render(
      <CommandDialog open title="Test Title" description="Test Description">
        <CommandInput placeholder="Search..." />
        <CommandList />
      </CommandDialog>,
    );
    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
  });
});
