import type { Project } from "@/types";

/**
 * Complete list of portfolio projects.
 *
 * Each entry is rendered as a `ProjectCard` on the projects page.
 * Projects marked as `featured` also appear in the home page showcase.
 *
 * @see {@link Project} for the type definition.
 */
export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce platform built with Next.js, featuring real-time inventory management and seamless checkout.",
    longDescription:
      "Full-featured e-commerce solution with product catalog, cart management, Stripe payment integration, and admin dashboard. Built with performance and accessibility in mind.",
    slug: "e-commerce-platform",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "PostgreSQL"],
    image: "/projects/ecommerce.svg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/andre/ecommerce",
    featured: true,
    year: 2025,
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team workspaces.",
    longDescription:
      "Real-time task management with drag-and-drop boards, team collaboration features, and automated workflow triggers. Uses WebSockets for live updates.",
    slug: "task-management",
    tags: ["React", "Node.js", "Socket.io", "MongoDB", "Docker"],
    image: "/projects/taskmanager.svg",
    githubUrl: "https://github.com/andre/taskmanager",
    featured: true,
    year: 2025,
  },
  {
    title: "Weather Dashboard",
    description:
      "A beautiful weather dashboard with interactive maps and detailed forecasts.",
    slug: "weather-dashboard",
    tags: ["Vue.js", "D3.js", "OpenWeather API", "Mapbox"],
    image: "/projects/weather.svg",
    liveUrl: "https://weather.example.com",
    featured: false,
    year: 2024,
  },
];

/**
 * Subset of {@link projects} where `featured` is `true`.
 *
 * Used by the `ProjectsShowcase` section on the home page.
 */
export const featuredProjects = projects.filter((p) => p.featured);
