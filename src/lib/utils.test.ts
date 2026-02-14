import { describe, expect, it } from "vitest";

import { cn } from "./utils";

describe("cn utility", () => {
  it("merges class names", () => {
    expect(cn("foo", "bar")).toBe("foo bar");
  });

  it("handles conditional classes", () => {
    const hide = false as boolean;
    expect(cn("base", hide && "hidden", "visible")).toBe("base visible");
  });

  it("merges conflicting Tailwind classes", () => {
    expect(cn("px-4", "px-6")).toBe("px-6");
  });

  it("handles undefined and null values", () => {
    expect(cn("base", undefined, null, "end")).toBe("base end");
  });

  it("returns empty string for no arguments", () => {
    expect(cn()).toBe("");
  });
});
