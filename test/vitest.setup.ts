import "@testing-library/jest-dom/vitest";

import { toHaveNoViolations } from "jest-axe";
import { expect, vi } from "vitest";

// Register jest-axe matchers (toHaveNoViolations)
expect.extend(toHaveNoViolations);

// ---------------------------------------------------------------------------
// Global Mocks — provide sensible defaults for commonly used modules.
// Individual test files can override these with their own vi.mock() calls.
// ---------------------------------------------------------------------------

// next-intl
vi.mock("next-intl", () => ({
  useTranslations: () => (key: string) => key,
  useLocale: () => "en",
  useMessages: () => ({}),
  useNow: () => new Date(),
  useTimeZone: () => "UTC",
  useFormatter: () => ({
    number: (n: number) => String(n),
    dateTime: (d: Date) => d.toISOString(),
    relativeTime: (d: Date) => d.toISOString(),
  }),
}));

// next/navigation
vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    refresh: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
    prefetch: vi.fn(),
  }),
  usePathname: () => "/",
  useSearchParams: () => new URLSearchParams(),
  useParams: () => ({}),
  redirect: vi.fn(),
  notFound: vi.fn(),
}));

// next-themes
vi.mock("next-themes", () => ({
  useTheme: () => ({
    theme: "dark",
    setTheme: vi.fn(),
    resolvedTheme: "dark",
    themes: ["light", "dark", "system"],
    systemTheme: "dark",
  }),
  // eslint-disable-next-line @typescript-eslint/promise-function-async -- React 19 ReactNode includes Promise; mock is intentionally sync
  ThemeProvider: ({ children }: { children: React.ReactNode }) => children,
}));

// motion/react — render children without animation
vi.mock("motion/react", () => ({
  motion: new Proxy(
    {},
    {
      get: (_target, prop) => {
        if (typeof prop !== "string") return undefined;
        return ({
          children,
          className,
          ...rest
        }: {
          children?: React.ReactNode;
          className?: string;
          [key: string]: unknown;
        }) => {
          // Filter out motion-specific props
          const htmlProps: Record<string, unknown> = {};
          for (const [key, value] of Object.entries(rest)) {
            if (
              !key.startsWith("initial") &&
              !key.startsWith("animate") &&
              !key.startsWith("exit") &&
              !key.startsWith("transition") &&
              !key.startsWith("variants") &&
              !key.startsWith("while") &&
              key !== "layout" &&
              key !== "layoutId"
            ) {
              htmlProps[key] = value;
            }
          }
          const element = globalThis.document.createElement(prop);
          if (className) element.className = className;
          return { type: prop, props: { className, children, ...htmlProps } };
        };
      },
    },
  ),
  // eslint-disable-next-line @typescript-eslint/promise-function-async -- React 19 ReactNode includes Promise; mock is intentionally sync
  AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
  useMotionValue: () => ({ get: () => 0, set: vi.fn() }),
  useTransform: () => ({ get: () => 0 }),
  useSpring: () => ({ get: () => 0 }),
  useInView: () => true,
  useAnimation: () => ({ start: vi.fn(), stop: vi.fn() }),
}));
