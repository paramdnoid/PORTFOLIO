# ADR 003: Motion (motion/react) over GSAP or CSS-only

## Status

**Accepted**

## Context

The Portfolio needs animations for:

- Page and section transitions
- Scroll-triggered reveals
- Micro-interactions (buttons, cards, hover states)
- Staggered list animations (e.g., project cards, skill badges)

Requirements:

- React-friendly API
- Good performance (no layout thrashing, minimal reflows)
- Tree-shakeable to keep bundle size small
- Support for spring-based physics for natural motion

Alternatives considered:

| Option                    | Pros                                                     | Cons                                                                   |
| ------------------------- | -------------------------------------------------------- | ---------------------------------------------------------------------- |
| **GSAP**                  | Industry standard, powerful, ScrollTrigger               | Imperative API, larger bundle, less React-idiomatic                    |
| **CSS-only**              | No JS, performant for simple cases                       | Limited orchestration, no spring physics, harder for complex sequences |
| **Framer Motion**         | React-first, popular                                     | Superseded by Motion (same team, Motion is the successor)              |
| **Motion (motion/react)** | React-first, declarative, spring physics, tree-shakeable | Newer; smaller community than Framer Motion historically               |

## Decision

Use **Motion** (from the `motion` package, imported as `motion/react`) for animations.

Key reasons:

1. **React-first declarative API** — Components like `<motion.div>`, hooks like `useScroll`, `useInView`. Fits React's composition model.
2. **Tree-shakeable** — Import only what you use. No need to bundle the full animation engine.
3. **Spring physics** — Natural, bouncy motion out of the box. Better than linear or ease curves for many interactions.
4. **Successor to Framer Motion** — Same team, improved architecture. Motion is the recommended path forward.
5. **Layout animations** — `layout` prop enables smooth layout changes without manual measurement.
6. **Scroll and viewport** — `whileInView` and scroll-linked animations integrate cleanly with React.

## Consequences

### Positive

- Declarative, readable animation code
- Small bundle impact when tree-shaking is used correctly
- Spring physics improve perceived quality of interactions
- Good TypeScript support
- Works with Server Components when wrapping client-only animated parts

### Negative

- Motion is newer; some edge cases may require workarounds
- Team must learn Motion's API (similar to Framer Motion)
- Overuse of animations can harm performance; use sparingly

### Follow-up

- Use `AnimatedWrapper` or similar shared component to encapsulate Motion usage
- Prefer `whileInView` for scroll-triggered animations; avoid heavy `useScroll` usage on low-end devices
