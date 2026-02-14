# Shared Components

Shared components are reusable building blocks used across multiple sections and pages. They encapsulate common patterns for headings, cards, badges, and animations.

## SectionHeading

**File:** `src/components/shared/section-heading.tsx`  
**Type:** Client Component (`"use client"`)

A standardized section title with optional subtitle.

### Props

```tsx
interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}
```

| Prop        | Type   | Required | Description                           |
| ----------- | ------ | -------- | ------------------------------------- |
| `title`     | string | Yes      | Main heading text                     |
| `subtitle`  | string | No       | Small uppercase label above the title |
| `className` | string | No       | Additional CSS classes                |

### Usage

```tsx
<SectionHeading title={t("title")} subtitle={t("subtitle")} />
```

### Styling

- **Subtitle** — `text-sm font-medium tracking-wider text-muted-foreground uppercase`
- **Title** — `text-3xl font-bold tracking-tight sm:text-4xl`
- Wrapped in `FadeIn` for scroll-triggered animation.

---

## ProjectCard

**File:** `src/components/shared/project-card.tsx`  
**Type:** Client Component (`"use client"`)

Displays a single project with metadata, tags, and action buttons.

### Props

```tsx
interface ProjectCardProps {
  project: Project;
}
```

Uses the `Project` type from `@/types`:

```tsx
interface Project {
  title: string;
  description: string;
  longDescription?: string;
  slug: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: number;
}
```

### Features

- **Card layout** — Uses shadcn `Card`, `CardHeader`, `CardContent`.
- **Featured badge** — Shows "Featured" badge when `project.featured` is true.
- **Tags** — Renders `Badge` for each tag with `variant="outline"`.
- **Action buttons** — "View Project" (primary) for `liveUrl`, "View Code" (outline) for `githubUrl`.
- **Hover effect** — `hover:border-foreground/20` on the card.
- **Animation** — Wrapped in `FadeInItem` for use inside `StaggerContainer`.

### Translations

Uses `projects` namespace:

- `projects.featured` — "Featured" badge
- `projects.viewProject` — Primary CTA
- `projects.viewCode` — GitHub CTA

---

## JsonLd

**File:** `src/components/shared/json-ld.tsx`
**Type:** Server Component

Renders a JSON-LD structured data `<script>` tag for SEO. The base schema describes the portfolio owner as a `Person` and the website as a `WebSite` using Schema.org vocabulary.

### Props

```tsx
interface JsonLdProps {
  additionalData?: Record<string, unknown>;
}
```

| Prop             | Type                      | Required | Description                                         |
| ---------------- | ------------------------- | -------- | --------------------------------------------------- |
| `additionalData` | `Record<string, unknown>` | No       | Additional JSON-LD data to merge into Person schema |

### Usage

```tsx
<JsonLd />
<JsonLd additionalData={{ knowsAbout: ["React", "TypeScript"] }} />
```

### Output

Generates a `@graph` with:

- **WebSite** — Site name, URL, description
- **Person** — Name, URL, description, social links (`sameAs`), job title

Data is sourced from `siteConfig` in `src/config/site.ts`.

---

## AnimatedWrapper

**File:** `src/components/shared/animated-wrapper.tsx`  
**Type:** Client Component (`"use client"`)

Provides scroll-triggered and staggered animations using the Motion library.

### Components

#### FadeIn

Single-element fade-in with optional delay.

```tsx
<FadeIn delay={0.2}>
  <p>Content</p>
</FadeIn>
```

| Prop        | Type      | Default | Description                   |
| ----------- | --------- | ------- | ----------------------------- |
| `children`  | ReactNode | —       | Content to animate            |
| `delay`     | number    | 0       | Delay before animation starts |
| `className` | string    | —       | Additional CSS classes        |

- **Animation:** Opacity 0→1, y: 24→0
- **Trigger:** `whileInView` with `viewport={{ once: true, margin: "-100px" }}`
- **Easing:** `[0.21, 0.47, 0.32, 0.98]`
- **Duration:** 0.5s

#### StaggerContainer

Container that staggers child animations.

```tsx
<StaggerContainer className="grid gap-6 md:grid-cols-2">
  {items.map((item) => (
    <FadeInItem key={item.id}>
      <ProjectCard project={item} />
    </FadeInItem>
  ))}
</StaggerContainer>
```

| Prop        | Type      | Description                     |
| ----------- | --------- | ------------------------------- |
| `children`  | ReactNode | Must be `FadeInItem` components |
| `className` | string    | Layout classes (e.g., grid)     |

- **Stagger:** `staggerChildren: 0.1` — each child animates 0.1s after the previous
- **Trigger:** `whileInView` with `viewport={{ once: true, margin: "-100px" }}`

#### FadeInItem

Child component for use inside `StaggerContainer`. Uses the same `fadeInUp` variants as `FadeIn` so stagger timing applies correctly.

```tsx
<FadeInItem>
  <Card>...</Card>
</FadeInItem>
```

### Variants

```tsx
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};
```

### Usage Patterns

1. **Sequential delays** — Multiple `FadeIn` with increasing `delay`:

   ```tsx
   <FadeIn>Greeting</FadeIn>
   <FadeIn delay={0.1}>Name</FadeIn>
   <FadeIn delay={0.2}>Role</FadeIn>
   ```

2. **Staggered list** — `StaggerContainer` + `FadeInItem`:

   ```tsx
   <StaggerContainer className="grid gap-6 md:grid-cols-2">
     {projects.map((p) => (
       <FadeInItem key={p.slug}>
         <ProjectCard project={p} />
       </FadeInItem>
     ))}
   </StaggerContainer>
   ```

3. **Nested stagger** — `FadeIn` for category, `StaggerContainer` + `FadeInItem` for items:
   ```tsx
   <FadeIn>
     <h3>Category</h3>
     <StaggerContainer className="flex flex-wrap gap-2">
       {skills.map((s) => (
         <FadeInItem key={s}>
           <Badge>{s}</Badge>
         </FadeInItem>
       ))}
     </StaggerContainer>
   </FadeIn>
   ```
