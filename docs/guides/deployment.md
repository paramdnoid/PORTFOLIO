# Deployment

This guide covers deploying the Portfolio to production. Vercel is the recommended platform for Next.js applications.

---

## Vercel (Recommended)

### Step 1: Push to GitHub

Ensure your project is in a Git repository and pushed to GitHub:

```bash
git init
git add .
git commit -m "feat: initial portfolio setup"
git branch -M main
git remote add origin https://github.com/your-username/portfolio.git
git push -u origin main
```

### Step 2: Import in Vercel

1. Go to [vercel.com](https://vercel.com) and sign in (GitHub recommended)
2. Click **Add New** → **Project**
3. Import your GitHub repository
4. Vercel auto-detects Next.js — no build configuration needed
5. Click **Deploy**

### Step 3: Environment Variables (If Needed)

If your project uses environment variables (e.g. for a contact form API):

1. In Vercel: Project → **Settings** → **Environment Variables**
2. Add variables for Production, Preview, and/or Development
3. Redeploy for changes to take effect

### Step 4: Custom Domain

1. Go to Project → **Settings** → **Domains**
2. Add your domain (e.g. `portfolio.example.com`)
3. Follow DNS instructions (A record or CNAME to Vercel)
4. Vercel provisions SSL automatically

---

## Build Optimizations

The Portfolio is optimized for static generation:

- **All locales** — `generateStaticParams()` in the locale layout pre-renders all ~128 locales
- **Project pages** — Each project detail page is statically generated
- **No runtime locale detection** — Locales are determined at build time

Vercel will:

- Build the entire static export
- Serve pages from the edge
- Cache aggressively for fast loads

---

## Other Platforms

The application can be deployed to any platform that supports Next.js:

| Platform        | Notes                                                      |
| --------------- | ---------------------------------------------------------- |
| **Netlify**     | Next.js plugin; similar to Vercel                          |
| **Railway**     | Supports Node.js; use `npm run build` and `npm run start`  |
| **Docker**      | Use `node:22-alpine`; run `npm run build && npm run start` |
| **Self-hosted** | Node.js server; `npm run build` then `npm run start`       |

Ensure the platform supports:

- Node.js >= 22.0.0
- Next.js 16 App Router
- Static generation for all locale routes

---

## Related Documentation

- [Getting Started](getting-started.md) — Local setup
- [Performance](performance.md) — Lighthouse targets and optimizations
