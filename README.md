# Portfolio

Personal developer portfolio built with modern web technologies.

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org) (App Router)
- **UI:** [React 19](https://react.dev), [shadcn/ui](https://ui.shadcn.com), [Radix UI](https://www.radix-ui.com)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com)
- **Animations:** [Motion](https://motion.dev)
- **i18n:** [next-intl](https://next-intl.dev) (128 Locales)
- **Theme:** Dark/Light Mode via [next-themes](https://github.com/pacocoursey/next-themes)
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
│   ├── layout/       # Header, Footer, Navigation
│   ├── providers/    # Theme, Context providers
│   ├── sections/     # Page sections (Hero, Skills, etc.)
│   ├── shared/       # Reusable components
│   └── ui/           # shadcn/ui primitives
├── config/           # Site, navigation, project config
├── hooks/            # Custom React hooks
├── i18n/             # Internationalization setup
├── lib/              # Utility functions
└── types/            # TypeScript type definitions
messages/             # Translation files (128 locales)
docs/                 # Architecture & development docs
```

## Scripts

| Command         | Description                                           |
| --------------- | ----------------------------------------------------- |
| `npm run dev`   | Start development server                              |
| `npm run build` | Production build                                      |
| `npm start`     | Start production server                               |
| `npm run lint`  | Run ESLint                                            |
| `npm run fresh` | Clean install (removes node_modules, .next, lockfile) |

## Documentation

Detailed documentation is available in the [`docs/`](./docs) directory:

- [Architecture Overview](./docs/architecture/overview.md)
- [Getting Started Guide](./docs/guides/getting-started.md)
- [Adding a Project](./docs/guides/adding-a-project.md)
- [Changelog](./docs/changelog/CHANGELOG.md)
