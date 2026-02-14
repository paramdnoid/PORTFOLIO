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

export type SkillCategory = keyof typeof skillCategories;
