# Contributing

Thank you for your interest in contributing to this project! This document provides guidelines and instructions for contributing.

## Prerequisites

- **Node.js** >= 22.0.0 (see `.nvmrc` for exact version)
- **npm** >= 10.0.0

## Getting Started

```bash
# Clone the repository
git clone https://github.com/andre/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Development Workflow

### Branch Naming

Use descriptive branch names with a conventional prefix:

- `feat/description` — New feature
- `fix/description` — Bug fix
- `refactor/description` — Code refactoring
- `docs/description` — Documentation changes
- `chore/description` — Maintenance tasks

### Commit Messages

This project uses [Conventional Commits](https://www.conventionalcommits.org/). Commit messages are validated by commitlint.

```
type(scope?): subject

body?

footer?
```

**Allowed types:** `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`

### Code Quality

Before submitting a PR, ensure all checks pass:

```bash
# Run all checks (typecheck + lint + format)
npm run check

# Run tests
npm test

# Run tests with coverage
npm run test:ci
```

### Pre-commit Hooks

Git hooks are managed by Husky and run automatically:

- **pre-commit** — Runs lint-staged (ESLint + Prettier on staged files)
- **commit-msg** — Validates commit message format via commitlint

## Pull Request Process

1. Create a feature branch from `main`
2. Make your changes following the code style guidelines
3. Add/update tests for your changes
4. Ensure all checks pass (`npm run check && npm run test:ci`)
5. Open a Pull Request using the provided template
6. Address review feedback

## Code Style

- **TypeScript** — Strict mode, explicit return types, type-only imports
- **Formatting** — Prettier with project configuration
- **Linting** — ESLint with type-checked rules
- **Components** — Functional components, named exports
- **Imports** — Sorted automatically by Prettier plugin

## Project Structure

See [docs/architecture/folder-structure.md](docs/architecture/folder-structure.md) for a detailed overview.
