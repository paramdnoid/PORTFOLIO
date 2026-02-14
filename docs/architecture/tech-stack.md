# Tech Stack

This document lists all technologies used in the Portfolio project, with versions, purposes, and links to official documentation.

---

## Technology Table

| Technology                         | Version | Purpose                                                                                   | Documentation                                                                                                   |
| ---------------------------------- | ------- | ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| **Next.js**                        | 16.x    | React framework with App Router, SSR, SSG, file-based routing, and RSC                    | [nextjs.org/docs](https://nextjs.org/docs)                                                                      |
| **React**                          | 19.x    | UI library for building component-based interfaces                                        | [react.dev](https://react.dev)                                                                                  |
| **TypeScript**                     | 5.x     | Static typing for JavaScript, improved DX and fewer runtime errors                        | [typescriptlang.org/docs](https://www.typescriptlang.org/docs/)                                                 |
| **Tailwind CSS**                   | 4.x     | Utility-first CSS framework; CSS-based config, OKLCH colors, no config file               | [tailwindcss.com/docs](https://tailwindcss.com/docs)                                                            |
| **shadcn/ui** (CLI)                | 3.x     | Copy-paste component library built on Radix UI; Tailwind-native, accessible, customizable | [ui.shadcn.com](https://ui.shadcn.com)                                                                          |
| **Motion** (motion/react)          | 12.x    | Declarative animation library for React; spring physics, tree-shakeable                   | [motion.dev/docs/react](https://motion.dev/docs/react)                                                          |
| **next-themes**                    | 0.4.x   | Theme switching (dark/light/system) with persistence and no flash                         | [github.com/pacocoursey/next-themes](https://github.com/pacocoursey/next-themes)                                |
| **next-intl**                      | 4.x     | Internationalization for Next.js App Router; namespaces, RTL, ~128 locales                | [next-intl-docs.vercel.app](https://next-intl-docs.vercel.app)                                                  |
| **Geist**                          | —       | Primary font family (Geist Sans, Geist Mono) for typography                               | [vercel.com/font](https://vercel.com/font)                                                                      |
| **ESLint**                         | 9.x     | Linting and code quality; eslint-config-next for Next.js rules                            | [eslint.org/docs](https://eslint.org/docs/latest/)                                                              |
| **Radix UI**                       | 1.x     | Unstyled, accessible primitives (used via shadcn/ui)                                      | [radix-ui.com](https://www.radix-ui.com)                                                                        |
| **Lucide React**                   | 0.564.x | Icon library; consistent, tree-shakeable SVG icons                                        | [lucide.dev](https://lucide.dev)                                                                                |
| **cmdk**                           | 1.x     | Command palette / search component                                                        | [cmdk.paco.me](https://cmdk.paco.me)                                                                            |
| **Sonner**                         | 2.x     | Toast notifications                                                                       | [sonner.emilkowal.ski](https://sonner.emilkowal.ski)                                                            |
| **class-variance-authority (cva)** | 0.7.x   | Type-safe variant styling for components                                                  | [cva.style/docs](https://cva.style/docs)                                                                        |
| **clsx**                           | 2.x     | Conditional class name utility                                                            | [github.com/lukeed/clsx](https://github.com/lukeed/clsx)                                                        |
| **tailwind-merge**                 | 3.x     | Merge Tailwind classes without conflicts                                                  | [github.com/dcastil/tailwind-merge](https://github.com/dcastil/tailwind-merge)                                  |
| **tw-animate-css**                 | 1.x     | Tailwind-compatible animation utilities                                                   | [tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate)                                       |
| **Zod**                            | 4.x     | Schema validation for environment variables                                               | [zod.dev](https://zod.dev)                                                                                      |
| **Vitest**                         | 4.x     | Unit/component testing framework                                                          | [vitest.dev](https://vitest.dev)                                                                                |
| **Testing Library**                | 16.x    | React component testing utilities (`@testing-library/react`)                              | [testing-library.com](https://testing-library.com)                                                              |
| **Playwright**                     | 1.x     | End-to-end testing framework for browser automation                                       | [playwright.dev](https://playwright.dev)                                                                        |
| **Prettier**                       | 3.x     | Code formatting                                                                           | [prettier.io](https://prettier.io)                                                                              |
| **Husky**                          | 9.x     | Git hooks for pre-commit linting and formatting                                           | [typicode.github.io/husky](https://typicode.github.io/husky)                                                    |
| **commitlint**                     | 20.x    | Enforce Conventional Commits format                                                       | [commitlint.js.org](https://commitlint.js.org)                                                                  |
| **lint-staged**                    | 16.x    | Run linters on staged files only                                                          | [github.com/lint-staged/lint-staged](https://github.com/lint-staged/lint-staged)                                |
| **@sentry/nextjs**                 | 10.x    | Error tracking, performance monitoring, and session replay                                | [docs.sentry.io/platforms/javascript/guides/nextjs](https://docs.sentry.io/platforms/javascript/guides/nextjs/) |
| **@vercel/analytics**              | 1.x     | Privacy-friendly web analytics                                                            | [vercel.com/docs/analytics](https://vercel.com/docs/analytics)                                                  |
| **@vercel/speed-insights**         | 1.x     | Real-user performance monitoring (Core Web Vitals)                                        | [vercel.com/docs/speed-insights](https://vercel.com/docs/speed-insights)                                        |
| **semantic-release**               | 25.x    | Automated versioning and changelog generation from Conventional Commits                   | [semantic-release.gitbook.io](https://semantic-release.gitbook.io)                                              |
| **TypeDoc**                        | 0.28.x  | Auto-generated API documentation from TSDoc comments                                      | [typedoc.org](https://typedoc.org)                                                                              |
| **@next/bundle-analyzer**          | 16.x    | Bundle analysis for Next.js builds                                                        | [npmjs.com/package/@next/bundle-analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)                  |

---

## Core Stack Summary

| Layer          | Technologies                             |
| -------------- | ---------------------------------------- |
| **Framework**  | Next.js 16, React 19                     |
| **Language**   | TypeScript 5                             |
| **Styling**    | Tailwind CSS v4, shadcn/ui               |
| **Animations** | Motion (motion/react)                    |
| **Theming**    | next-themes                              |
| **i18n**       | next-intl                                |
| **Typography** | Geist font                               |
| **Monitoring** | Sentry, Vercel Analytics, Speed Insights |
| **Testing**    | Vitest, Testing Library, Playwright      |
| **Tooling**    | ESLint, Prettier, Husky, commitlint      |
| **Release**    | semantic-release, TypeDoc                |

---

## Version Notes

- Versions are approximate; exact versions are defined in `package.json`.
- Run `npm list` or inspect `package.json` for the current locked versions.
- Major upgrades should be documented in the [Changelog](../CHANGELOG.md).
