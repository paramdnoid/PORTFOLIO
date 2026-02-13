# ADR 005: Dark mode as default

## Status

**Accepted**

## Context

The Portfolio targets a **developer and technical audience**. Common preferences in this demographic include:

- Preference for dark mode to reduce eye strain during long coding or browsing sessions
- Use of dark-themed IDEs (VS Code, Cursor, etc.) and system preferences
- Expectation that developer-focused sites offer dark mode, often as the default

Additionally:

- Dark mode can convey a modern, technical aesthetic
- `next-themes` provides robust theme switching with no flash of wrong theme on load
- Supporting both light and dark ensures accessibility for users who prefer light mode

## Decision

Use **dark mode as the default theme** with `next-themes`.

Implementation:

- `ThemeProvider` is configured with `defaultTheme="dark"`
- `enableSystem` allows users to follow their OS preference if they prefer
- Users can override with an explicit light/dark toggle (ThemeToggle component)
- Theme preference is persisted (e.g., in `localStorage`) so it survives page reloads and sessions

## Consequences

### Positive

- Aligns with audience expectations (developers, technical users)
- Reduces eye strain for default experience
- `next-themes` handles persistence and prevents flash of unstyled content
- Light mode remains available for users who prefer it
- System preference can be respected when user hasn't made an explicit choice

### Negative

- Design must look good in both modes; requires testing in light and dark
- Some assets (e.g., logos, images) may need light/dark variants
- Default dark may surprise users coming from predominantly light-mode web

### Follow-up

- Ensure all components and sections are tested in both themes
- Document theme variable usage in [Styling](../../styling/)
- Consider `color-scheme: dark` in HTML for native form controls and scrollbars
