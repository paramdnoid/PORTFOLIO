# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- CodeQL static analysis in CI pipeline
- Playwright E2E test framework with smoke tests
- Accessibility tests with axe-core (jest-axe)
- OCI-compliant labels in Dockerfile
- Docker Compose security hardening (read_only, no-new-privileges, resource limits)
- `packageManager` field for Corepack support
- `preview` and `test:e2e` npm scripts
- Additional ESLint rules (naming-convention, promise-function-async, return-await, no-confusing-void-expression, no-redundant-type-constituents)
- CHANGELOG.md

### Changed

- Upgraded TypeScript target from ES2017 to ES2022
- Increased test coverage thresholds from 85% to 90%
- CI pipeline now enforces least-privilege permissions

### Security

- Added `poweredByHeader: false` to Next.js config
- Added explicit `reactStrictMode: true`
- Added workflow-level `permissions: contents: read` in CI
- Added `security_opt: no-new-privileges` in Docker Compose

## [0.1.0] - 2026-02-14

### Added

- Initial portfolio website with Next.js 16, React 19, TypeScript 5
- Internationalization support for 184+ locales via next-intl
- Dark/light theme with next-themes
- Responsive design with Tailwind CSS 4
- Security headers (CSP, HSTS, COOP, CORP, X-Frame-Options)
- Environment validation with Zod
- CI/CD pipeline with lint, typecheck, test, build, audit
- Docker multi-stage build with health check
- Husky + lint-staged + commitlint
- Dependabot for npm and GitHub Actions
