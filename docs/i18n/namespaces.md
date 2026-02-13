# Translation Namespaces

This document lists all 9 namespaces and their keys. Use it as a reference when translating or adding new strings.

---

## Namespace Reference Table

### `common`

Shared UI strings used across the application.

| Key | English Value |
|-----|---------------|
| `viewProject` | View Project |
| `viewAll` | View All |
| `backToHome` | Back to Home |
| `loading` | Loading... |
| `error` | Something went wrong |
| `scrollDown` | Scroll down |
| `builtWith` | Built with |
| `close` | Close |
| `menu` | Menu |
| `search` | Search |
| `toggleTheme` | Toggle theme |
| `switchLanguage` | Switch language |
| `searchLanguage` | Search language... |

---

### `navigation`

Navigation menu links.

| Key | English Value |
|-----|---------------|
| `home` | Home |
| `about` | About |
| `projects` | Projects |
| `contact` | Contact |

---

### `hero`

Hero section on the homepage.

| Key | English Value |
|-----|---------------|
| `greeting` | Hi, I'm |
| `name` | Andre |
| `role` | Full-Stack Developer |
| `tagline` | I build modern web experiences with attention to detail. |
| `cta` | See my work |
| `ctaSecondary` | Get in touch |

---

### `about`

About section content.

| Key | English Value |
|-----|---------------|
| `title` | About Me |
| `subtitle` | Get to know me |
| `bio` | I'm a passionate full-stack developer with a love for creating beautiful, performant web applications. I specialize in modern technologies and always strive for clean, maintainable code. |
| `experienceTitle` | Experience |
| `techTitle` | Technologies I work with |

---

### `projects`

Projects section and project cards.

| Key | English Value |
|-----|---------------|
| `title` | Projects |
| `subtitle` | Selected work |
| `featured` | Featured |
| `viewProject` | View Project |
| `viewCode` | View Code |
| `techStack` | Tech Stack |
| `allProjects` | All Projects |
| `noProjects` | No projects found. |

---

### `skills`

Skills section categories.

| Key | English Value |
|-----|---------------|
| `title` | Skills & Tools |
| `subtitle` | Technologies I work with |
| `frontend` | Frontend |
| `backend` | Backend |
| `tools` | Tools & DevOps |
| `other` | Other |

---

### `contact`

Contact form and messages.

| Key | English Value |
|-----|---------------|
| `title` | Get in Touch |
| `subtitle` | Let's work together |
| `nameLabel` | Name |
| `namePlaceholder` | Your name |
| `emailLabel` | Email |
| `emailPlaceholder` | your@email.com |
| `messageLabel` | Message |
| `messagePlaceholder` | Tell me about your project... |
| `send` | Send Message |
| `sending` | Sending... |
| `success` | Message sent successfully! |
| `error` | Failed to send message. Please try again. |

---

### `footer`

Footer content.

| Key | English Value |
|-----|---------------|
| `copyright` | All rights reserved. |
| `madeWith` | Made with |
| `sourceCode` | Source Code |

---

### `metadata`

Page titles and descriptions for SEO. Used in `generateMetadata()`.

| Key | English Value |
|-----|---------------|
| `homeTitle` | Andre — Full-Stack Developer |
| `homeDescription` | Portfolio of Andre, a full-stack developer specializing in modern web technologies. |
| `aboutTitle` | About |
| `aboutDescription` | Learn more about Andre and his experience as a developer. |
| `projectsTitle` | Projects |
| `projectsDescription` | Selected projects and work by Andre. |
| `contactTitle` | Contact |
| `contactDescription` | Get in touch with Andre for collaboration or inquiries. |

---

## Adding a New Namespace

To add a new namespace (e.g. `blog`):

### 1. Add to `src/i18n/request.ts`

Add the namespace to the `NAMESPACES` array:

```ts
const NAMESPACES = [
  "common",
  "navigation",
  // ...
  "metadata",
  "blog",  // new
] as const;
```

### 2. Create Message Files

Create `messages/en/blog.json` (and optionally other locales):

```json
{
  "title": "Blog",
  "readMore": "Read more"
}
```

### 3. Use in Components

```tsx
// Client component
const t = useTranslations("blog");
return <h1>{t("title")}</h1>;

// Server component
const t = await getTranslations("blog");
return <h1>{t("title")}</h1>;
```

### 4. Generate for Other Locales

Run `npx tsx scripts/generate-locales.ts` — it will copy the new namespace from English to all locales that have message directories. For locales created before adding the namespace, you may need to manually add the file or re-run the script after ensuring the locale directory exists.

---

## Related Documentation

- [i18n Overview](overview.md) — Architecture and request flow
- [Adding a Language](adding-a-language.md) — Adding a new locale
- [Translation Workflow](translation-workflow.md) — Translation strategies
