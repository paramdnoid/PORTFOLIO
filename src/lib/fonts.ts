/**
 * Font configuration loaded via `next/font/google`.
 *
 * Provides optimised, self-hosted Geist font families for
 * sans-serif and monospace text. The CSS variables are injected
 * into the root layout for global availability.
 *
 * @module lib/fonts
 */
import { Geist, Geist_Mono } from "next/font/google";

/**
 * Geist sans-serif font instance.
 *
 * Loaded with `latin` and `latin-ext` subsets. Exposes the
 * CSS custom property `--font-geist-sans`.
 */
export const fontSans = Geist({
  subsets: ["latin", "latin-ext"],
  variable: "--font-geist-sans",
});

/**
 * Geist monospace font instance.
 *
 * Loaded with the `latin` subset. Exposes the CSS custom property
 * `--font-geist-mono`.
 */
export const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});
