import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import ProjectDetailPage, {
  generateMetadata,
  generateStaticParams,
} from "./page";

const mockNotFound = vi.fn();

vi.mock("next-intl/server", () => ({
  setRequestLocale: vi.fn(),
}));
vi.mock("next/navigation", () => ({
  notFound: () => {
    mockNotFound();
    throw new Error("NEXT_NOT_FOUND");
  },
  useRouter: () => ({ push: vi.fn() }),
  usePathname: () => "/",
  useSearchParams: () => new URLSearchParams(),
  useParams: () => ({}),
  redirect: vi.fn(),
}));
vi.mock("./project-detail-content", () => ({
  ProjectDetailContent: ({ project }: { project: { title: string } }) => (
    <div data-testid="project-detail">{project.title}</div>
  ),
}));

describe("ProjectDetailPage", () => {
  it("renders project detail for a valid slug", async () => {
    const element = await ProjectDetailPage({
      params: Promise.resolve({ locale: "en", slug: "e-commerce-platform" }),
    });
    render(element);
    expect(screen.getByTestId("project-detail")).toBeInTheDocument();
    expect(screen.getByText("E-Commerce Platform")).toBeInTheDocument();
  });

  it("calls notFound for an invalid slug", async () => {
    await expect(
      ProjectDetailPage({
        params: Promise.resolve({ locale: "en", slug: "nonexistent" }),
      }),
    ).rejects.toThrow("NEXT_NOT_FOUND");
    expect(mockNotFound).toHaveBeenCalled();
  });
});

describe("generateStaticParams", () => {
  it("returns slug params for all projects", () => {
    const params = generateStaticParams();
    expect(params.length).toBeGreaterThan(0);
    expect(params[0]).toHaveProperty("slug");
  });
});

describe("generateMetadata", () => {
  it("returns title and description for a valid slug", async () => {
    const metadata = await generateMetadata({
      params: Promise.resolve({ locale: "en", slug: "e-commerce-platform" }),
    });
    expect(metadata).toHaveProperty("title", "E-Commerce Platform");
  });

  it("returns empty object for an invalid slug", async () => {
    const metadata = await generateMetadata({
      params: Promise.resolve({ locale: "en", slug: "nonexistent" }),
    });
    expect(metadata).toEqual({});
  });
});
