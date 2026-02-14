# Portfolio

Personal developer portfolio built with modern web technologies.

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org) (App Router)
- **UI:** [React 19](https://react.dev), [shadcn/ui](https://ui.shadcn.com), [Radix UI](https://www.radix-ui.com)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com)
- **Animations:** [Motion](https://motion.dev)
- **i18n:** [next-intl](https://next-intl.dev) (128 Locales)
- **Theme:** Dark/Light Mode via [next-themes](https://github.com/pacocoursey/next-themes)
- **Monitoring:** [Sentry](https://sentry.io), [Vercel Analytics](https://vercel.com/docs/analytics), [Speed Insights](https://vercel.com/docs/speed-insights)
- **Deployment:** [Vercel](https://vercel.com)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/              # Next.js App Router pages
│   └── [locale]/     # i18n locale routing
├── components/
│   ├── icons/        # Custom SVG icon components
│   ├── layout/       # Header, Footer, Navigation
│   ├── providers/    # Theme, Context providers
│   ├── sections/     # Page sections (Hero, Skills, etc.)
│   ├── shared/       # Reusable components
│   └── ui/           # shadcn/ui primitives
├── config/           # Site, navigation, project config
├── i18n/             # Internationalization setup
├── lib/              # Utility functions
├── types/            # TypeScript type definitions
├── middleware.ts      # Rate limiting + i18n routing
└── instrumentation.ts # Sentry instrumentation
e2e/                  # Playwright E2E tests
messages/             # Translation files (128 locales)
docs/                 # Architecture & development docs
```

## Scripts

| Command                    | Description                                           |
| -------------------------- | ----------------------------------------------------- |
| `npm run dev`              | Start development server                              |
| `npm run build`            | Production build                                      |
| `npm start`                | Start production server                               |
| `npm run preview`          | Build and start production server                     |
| `npm run lint`             | Run ESLint                                            |
| `npm run typecheck`        | TypeScript type checking                              |
| `npm run format`           | Format code with Prettier                             |
| `npm run check`            | Run all checks (typecheck + lint + format)            |
| `npm test`                 | Run unit tests (Vitest)                               |
| `npm run test:ci`          | Run tests with coverage                               |
| `npm run test:a11y`        | Run accessibility tests                               |
| `npm run test:e2e`         | Run Playwright E2E tests                              |
| `npm run docker:build`     | Build Docker image                                    |
| `npm run generate:locales` | Generate/sync locale message files                    |
| `npm run docs:api`         | Generate API documentation (TypeDoc)                  |
| `npm run release`          | Automated release via semantic-release                |
| `npm run fresh`            | Clean install (removes node_modules, .next, lockfile) |

## Documentation

Detailed documentation is available in the [`docs/`](./docs) directory:

- [Architecture Overview](./docs/architecture/overview.md)
- [Tech Stack](./docs/architecture/tech-stack.md)
- [Folder Structure](./docs/architecture/folder-structure.md)
- [Getting Started Guide](./docs/guides/getting-started.md)
- [Development Workflow](./docs/guides/development-workflow.md)
- [Adding a Project](./docs/guides/adding-a-project.md)
- [Deployment](./docs/guides/deployment.md)
- [Changelog](./CHANGELOG.md)

## License

[MIT](./LICENSE)
