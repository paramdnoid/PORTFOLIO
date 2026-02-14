import { describe, expect, it } from "vitest";

import { skillCategories } from "./skills";

describe("skillCategories", () => {
  it("exports four categories", () => {
    expect(Object.keys(skillCategories)).toEqual([
      "frontend",
      "backend",
      "tools",
      "other",
    ]);
  });

  it("each category contains at least one skill", () => {
    for (const skills of Object.values(skillCategories)) {
      expect(skills.length).toBeGreaterThan(0);
    }
  });
});
