import { describe, expect, it } from "vitest";

import { featuredProjects, projects } from "./projects";

describe("projects config", () => {
  it("exports a non-empty array of projects", () => {
    expect(projects.length).toBeGreaterThan(0);
  });

  it("every project has all required fields", () => {
    for (const project of projects) {
      expect(project.title).toBeTruthy();
      expect(project.description).toBeTruthy();
      expect(project.slug).toBeTruthy();
      expect(project.tags.length).toBeGreaterThan(0);
      expect(project.image).toBeTruthy();
      expect(typeof project.featured).toBe("boolean");
      expect(typeof project.year).toBe("number");
    }
  });

  it("all slugs are unique", () => {
    const slugs = projects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("slugs are URL-safe (lowercase, hyphens, no spaces)", () => {
    for (const project of projects) {
      expect(project.slug).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    }
  });

  it("image paths start with /", () => {
    for (const project of projects) {
      expect(project.image.startsWith("/")).toBe(true);
    }
  });
});

describe("featuredProjects", () => {
  it("only contains projects marked as featured", () => {
    for (const project of featuredProjects) {
      expect(project.featured).toBe(true);
    }
  });

  it("contains all featured projects from the main list", () => {
    const expected = projects.filter((p) => p.featured);
    expect(featuredProjects).toEqual(expected);
  });

  it("has at least one featured project", () => {
    expect(featuredProjects.length).toBeGreaterThan(0);
  });
});
