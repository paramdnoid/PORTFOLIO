import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { GitHubIcon } from "./github";
// Import the barrel module to ensure it's executed for coverage
import * as Icons from "./index";
import { LinkedInIcon } from "./linkedin";

describe("Icon barrel exports", () => {
  it("re-exports GitHubIcon", () => {
    expect(Icons.GitHubIcon).toBe(GitHubIcon);
  });

  it("re-exports LinkedInIcon", () => {
    expect(Icons.LinkedInIcon).toBe(LinkedInIcon);
  });

  it("renders GitHubIcon as svg", () => {
    const { container } = render(<Icons.GitHubIcon />);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("renders LinkedInIcon as svg", () => {
    const { container } = render(<Icons.LinkedInIcon />);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });
});
