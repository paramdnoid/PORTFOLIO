/**
 * Categorised skill sets displayed in the Skills section.
 *
 * Each key represents a skill category (frontend, backend, tools, other)
 * and its value is a readonly array of technology/skill names.
 */
export const skillCategories = {
  frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "HTML/CSS",
    "Vue.js",
  ],
  backend: [
    "Node.js",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "REST APIs",
    "GraphQL",
  ],
  tools: ["Git", "Docker", "Vercel", "GitHub Actions", "Linux", "Figma"],
  other: ["Agile/Scrum", "CI/CD", "Testing", "Performance", "SEO", "a11y"],
} as const;

/**
 * Union type of valid skill category keys.
 *
 * Derived from the keys of {@link skillCategories}.
 */
export type SkillCategory = keyof typeof skillCategories;
