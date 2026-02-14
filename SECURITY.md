# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| latest  | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability in this project, please report it responsibly.

**Do not open a public issue.**

Instead, please send an email to **hello@andre.dev** with:

- A description of the vulnerability
- Steps to reproduce the issue
- Any potential impact

You will receive a response within **48 hours** acknowledging receipt, and a follow-up within **5 business days** with a plan for resolution.

## Security Measures

This project implements the following security measures:

- **Rate Limiting** — In-memory sliding-window limiter (100 req/min per IP) in Edge middleware
- **Content Security Policy (CSP)** — Strict CSP headers on all responses
- **HTTP Strict Transport Security (HSTS)** — With preload and subdomains
- **X-Frame-Options** — Set to DENY to prevent clickjacking
- **Cross-Origin policies** — COOP, CORP, and X-Permitted-Cross-Domain-Policies
- **Permissions Policy** — Restricts access to browser APIs
- **Dependency auditing** — Automated via `npm audit` in CI and Dependabot
- **Environment validation** — Runtime validation of environment variables via Zod
- **Error monitoring** — Sentry for error tracking and performance monitoring
