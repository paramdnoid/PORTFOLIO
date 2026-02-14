import { resolve } from "path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    testTimeout: 10_000,
    hookTimeout: 10_000,
    clearMocks: true,
    mockReset: true,
    restoreMocks: true,
    setupFiles: ["./test/vitest.setup.ts"],
    include: ["src/**/*.test.{ts,tsx}"],
    coverage: {
      provider: "v8",
      reporter: ["text", "lcov", "html"],
      include: ["src/**/*.{ts,tsx}"],
      exclude: [
        "src/**/*.test.{ts,tsx}",
        "src/**/*.a11y.test.{ts,tsx}",
        "src/**/*.d.ts",
        "src/types/**",
        "src/env.ts",
        "src/proxy.ts",
        "src/components/providers/**",
        "src/app/**/layout.tsx",
        "src/app/**/loading.tsx",
        "src/app/**/error.tsx",
        "src/app/robots.ts",
        "src/app/sitemap.ts",
        "src/lib/fonts.ts",
        "src/i18n/request.ts",
      ],
      thresholds: {
        statements: 90,
        branches: 90,
        functions: 90,
        lines: 90,
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
