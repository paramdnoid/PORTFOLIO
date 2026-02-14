"use client";

import type React from "react";

type GlobalErrorProps = {
  error: Error & { digest?: string | undefined };
  reset: () => void;
};

/**
 * Root-level error boundary — catches errors that occur in the root layout
 * itself (which `app/[locale]/error.tsx` cannot handle). Since this replaces
 * the entire HTML document, it must render its own <html> and <body> tags.
 *
 * Intentionally minimal with no external dependencies to guarantee rendering
 * even when the module graph is partially broken.
 */
export default function GlobalError({
  error,
  reset,
}: GlobalErrorProps): React.ReactElement {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          backgroundColor: "#09090b",
          color: "#fafafa",
        }}
      >
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <h1
            style={{
              fontSize: "1.875rem",
              fontWeight: 700,
              letterSpacing: "-0.025em",
            }}
          >
            Something went wrong
          </h1>
          <p
            style={{
              marginTop: "0.75rem",
              fontSize: "1.125rem",
              color: "#a1a1aa",
            }}
          >
            An unexpected error occurred. Please try again.
          </p>
          {error.digest && (
            <p
              style={{
                marginTop: "0.5rem",
                fontSize: "0.875rem",
                color: "#71717a",
              }}
            >
              Error ID: {error.digest}
            </p>
          )}
          <button
            type="button"
            onClick={reset}
            style={{
              marginTop: "2rem",
              padding: "0.625rem 1.5rem",
              fontSize: "0.875rem",
              fontWeight: 500,
              color: "#09090b",
              backgroundColor: "#fafafa",
              border: "none",
              borderRadius: "0.375rem",
              cursor: "pointer",
              transition: "opacity 0.15s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.opacity = "0.9";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.opacity = "1";
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
