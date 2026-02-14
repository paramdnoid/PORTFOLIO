# Section Components

Section components are full-width blocks that compose the main content of pages. They typically combine shared components, UI primitives, and translations.

## Hero

**File:** `src/components/sections/hero.tsx`  
**Type:** Client Component (`"use client"`)

The hero section on the home page with greeting, name, role, tagline, and CTAs.

### Structure

```
Hero (min-h-[85vh], centered)
├── Greeting (FadeIn)
├── Name (FadeIn, delay 0.1)
├── Role (FadeIn, delay 0.2)
├── Tagline (FadeIn, delay 0.3)
├── CTAs (FadeIn, delay 0.4)
│   ├── Primary: Link → /projects
│   └── Secondary: Link → /contact
└── Scroll indicator (ArrowDown, animate-bounce)
```

### Features

- **Responsive typography** — Name: `text-5xl sm:text-6xl lg:text-7xl`; Role: `text-2xl sm:text-3xl`
- **Staggered animations** — Each block uses `FadeIn` with incremental delays (0, 0.1, 0.2, 0.3, 0.4)
- **Scroll indicator** — Bouncing arrow at bottom to hint at scrollable content
- **Container** — `max-w-5xl` centered

### Translations

Uses `hero` namespace:

- `hero.greeting` — e.g., "Hi, I'm"
- `hero.name` — Full name
- `hero.role` — e.g., "Software Engineer"
- `hero.tagline` — Short description
- `hero.cta` — Primary button (e.g., "View Projects")
- `hero.ctaSecondary` — Secondary button (e.g., "Get in Touch")

---

## AboutPreview

**File:** `src/components/sections/about-preview.tsx`  
**Type:** Client Component (`"use client"`)

A short about section with heading and bio text.

### Structure

```
AboutPreview (py-24 px-4)
└── Container (max-w-5xl)
    ├── SectionHeading (title, subtitle)
    └── Bio paragraph (FadeIn, max-w-2xl)
```

### Features

- **SectionHeading** — Title and optional subtitle from translations
- **Bio text** — `text-lg leading-relaxed text-muted-foreground`, constrained to `max-w-2xl`

### Translations

Uses `about` namespace:

- `about.title` — Section title
- `about.subtitle` — Section subtitle
- `about.bio` — Bio paragraph

---

## ProjectsShowcase

**File:** `src/components/sections/projects-showcase.tsx`  
**Type:** Client Component (`"use client"`)

Displays featured projects in a grid with a link to all projects.

### Structure

```
ProjectsShowcase (py-24 px-4)
└── Container (max-w-5xl)
    ├── SectionHeading
    ├── StaggerContainer (grid gap-6 md:grid-cols-2)
    │   └── ProjectCard × featuredProjects
    └── FadeIn (mt-8 text-center)
        └── Button "All Projects" → /projects
```

### Features

- **Featured projects** — Uses `featuredProjects` from `@/config/projects`
- **Responsive grid** — 1 column on mobile, 2 columns at `md`
- **Staggered cards** — Each `ProjectCard` is wrapped in `FadeInItem` for staggered reveal
- **All projects link** — Outline button linking to `/projects`

### Translations

Uses `projects` namespace:

- `projects.title` — Section title
- `projects.subtitle` — Section subtitle
- `projects.allProjects` — "All Projects" button text

---

## Skills

**File:** `src/components/sections/skills.tsx`  
**Type:** Client Component (`"use client"`)

A 4-category grid of skill badges.

### Structure

```
Skills (py-24 px-4)
└── Container (max-w-5xl)
    ├── SectionHeading
    └── Grid (gap-8 sm:grid-cols-2)
        └── FadeIn × 4 categories
            ├── Category label (uppercase, muted)
            └── StaggerContainer (flex flex-wrap gap-2)
                └── FadeInItem × skills
                    └── Badge
```

### Categories

| Key      | Skills (examples)                                          |
| -------- | ---------------------------------------------------------- |
| frontend | React, Next.js, TypeScript, Tailwind CSS, HTML/CSS, Vue.js |
| backend  | Node.js, Python, PostgreSQL, MongoDB, REST APIs, GraphQL   |
| tools    | Git, Docker, Vercel, GitHub Actions, Linux, Figma          |
| other    | Agile/Scrum, CI/CD, Testing, Performance, SEO, a11y        |

### Features

- **4 categories** — frontend, backend, tools, other
- **Responsive grid** — 1 column on mobile, 2 at `sm`
- **Nested animations** — `FadeIn` per category, `StaggerContainer` + `FadeInItem` per badge
- **Badges** — Uses shadcn `Badge` with `variant="secondary"`

### Translations

Uses `skills` namespace:

- `skills.title` — Section title
- `skills.subtitle` — Section subtitle
- `skills.frontend` — "Frontend"
- `skills.backend` — "Backend"
- `skills.tools` — "Tools"
- `skills.other` — "Other"

---

## ContactCTA

**File:** `src/components/sections/contact-cta.tsx`  
**Type:** Client Component (`"use client"`)

A call-to-action section encouraging users to visit the contact page.

### Structure

```
ContactCTA (py-24 px-4)
└── Container (max-w-5xl, text-center)
    ├── Title (FadeIn)
    ├── Subtitle (FadeIn, delay 0.1)
    └── CTA Button (FadeIn, delay 0.2)
        └── Link → /contact (with ArrowRight icon)
```

### Features

- **Centered layout** — `text-center`, subtitle `max-w-md mx-auto`
- **Staggered animations** — Title, subtitle, and button with delays 0, 0.1, 0.2
- **Primary CTA** — Large button with arrow icon linking to `/contact`

### Translations

Uses `contact` namespace:

- `contact.title` — CTA title (e.g., "Get in Touch")
- `contact.subtitle` — Supporting text
