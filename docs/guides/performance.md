# Performance

This document outlines performance targets, strategies, and monitoring for the Portfolio application.

---

## Lighthouse Targets

Aim for perfect scores across all Core Web Vitals:

| Metric | Target | Description |
|--------|--------|--------------|
| **Performance** | 100 | LCP, FID, CLS, TBT, Speed Index |
| **Accessibility** | 100 | ARIA, contrast, semantics, keyboard |
| **Best Practices** | 100 | HTTPS, console errors, deprecated APIs |
| **SEO** | 100 | Meta tags, crawlability, mobile-friendly |

Run Lighthouse in Chrome DevTools (Lighthouse tab) or via CLI:

```bash
npx lighthouse http://localhost:3000 --view
```

---

## RSC Strategy

**Default to Server Components** — Most of the app uses React Server Components (RSC):

- No client-side JavaScript for static content
- Smaller bundle size
- Faster initial load

**Client components only when needed** — Use `"use client"` for:

- `useState`, `useEffect`, other React hooks
- `useTranslations` in interactive components
- Event handlers (onClick, onChange)
- Browser APIs

This keeps the client bundle minimal.

---

## Image Optimization

Use `next/image` for all images:

```tsx
import Image from "next/image";

<Image
  src="/projects/ecommerce.png"
  alt="E-commerce Platform"
  width={800}
  height={450}
  priority={false}  // Use true for above-the-fold images
/>
```

Benefits:

- Automatic WebP/AVIF when supported
- Lazy loading by default
- Responsive `srcset`
- Prevents layout shift with dimensions

---

## Fonts

Fonts are loaded via `next/font` (Geist) in `src/lib/fonts.ts`:

- Fonts are self-hosted and optimized
- No layout shift (size-adjust)
- Preloaded for critical path

---

## Static Generation

All locale routes are statically generated at build time:

- `generateStaticParams()` in `src/app/[locale]/layout.tsx` for locales
- `generateStaticParams()` in `src/app/[locale]/projects/[slug]/page.tsx` for projects
- No server-side locale detection at runtime
- Pages are served as static HTML with minimal hydration

---

## Bundle Monitoring

Monitor bundle size to avoid regressions:

```bash
npm run build
```

Inspect the build output for:

- Page sizes
- First Load JS shared by all
- Route-specific JS

Consider adding `@next/bundle-analyzer` for detailed analysis:

```bash
npm install -D @next/bundle-analyzer
```

---

## Best Practices Summary

| Area | Practice |
|------|----------|
| **Components** | Server by default; client only when needed |
| **Images** | Always use `next/image` |
| **Fonts** | Use `next/font` (Geist) |
| **i18n** | Static generation for all locales |
| **Animations** | Use Motion; prefer `transform` and `opacity` |
| **Third-party** | Lazy load non-critical scripts |

---

## Related Documentation

- [Getting Started](getting-started.md) — Project setup
- [Deployment](deployment.md) — Production deployment
