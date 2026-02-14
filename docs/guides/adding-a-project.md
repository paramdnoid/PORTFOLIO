# Adding a Project

This guide explains how to add a new project to the Portfolio. Project detail pages are generated automatically from the config.

---

## Step 1: Add Project to `src/config/projects.ts`

Add a new entry to the `projects` array, matching the `Project` interface:

```ts
{
  title: string;           // Display name
  description: string;    // Short description (cards, meta)
  longDescription?: string; // Optional; used on detail page
  slug: string;            // URL segment (e.g. "e-commerce-platform")
  tags: string[];          // Tech stack tags
  image: string;           // Path from public/ (e.g. "/projects/myproject.png")
  liveUrl?: string;        // Optional live demo URL
  githubUrl?: string;      // Optional GitHub URL
  featured: boolean;      // Show on homepage showcase
  year: number;           // Year (e.g. 2025)
}
```

### Example

```ts
{
  title: "Weather Dashboard",
  description: "A beautiful weather dashboard with interactive maps and detailed forecasts.",
  longDescription: "Built with Vue.js and D3.js. Integrates OpenWeather API and Mapbox for real-time data and maps.",
  slug: "weather-dashboard",
  tags: ["Vue.js", "D3.js", "OpenWeather API", "Mapbox"],
  image: "/projects/weather.png",
  liveUrl: "https://weather.example.com",
  githubUrl: "https://github.com/andre/weather",
  featured: false,
  year: 2024,
}
```

---

## Step 2: Add Image to `public/projects/`

Place the project image in `public/projects/`:

```
public/projects/
  ecommerce.png
  taskmanager.png
  weather.png
  my-new-project.png   ← Add your image here
```

Reference it in the config as `/projects/my-new-project.png`.

**Recommendations:**

- Use a consistent aspect ratio (e.g. 16:9)
- Optimize file size for web
- Use PNG or WebP for quality

---

## Step 3: Project Detail Page (Auto-Generated)

The project detail page is generated automatically via the dynamic route:

```
src/app/[locale]/projects/[slug]/page.tsx
```

- `generateStaticParams()` builds static paths for all projects
- Each project is available at `/{locale}/projects/{slug}` (e.g. `/en/projects/weather-dashboard`)
- No additional page file is needed

---

## Step 4: Feature on Homepage (Optional)

Set `featured: true` to show the project in the homepage "Featured" section:

```ts
{
  // ...
  featured: true,
  // ...
}
```

`featuredProjects` in the config is derived from `projects.filter((p) => p.featured)`.

---

## Quick Reference

| Step | Action                                                    |
| ---- | --------------------------------------------------------- |
| 1    | Add project object to `src/config/projects.ts`            |
| 2    | Add image to `public/projects/`                           |
| 3    | Detail page auto-generates at `/{locale}/projects/{slug}` |
| 4    | Set `featured: true` for homepage showcase                |

---

## Related Documentation

- [Getting Started](getting-started.md) — Project setup
- [Adding a Page](adding-a-page.md) — Creating custom pages
