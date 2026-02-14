import type { ReactElement } from "react";

export default function Loading(): ReactElement {
  return (
    <div className="min-h-screen px-4 py-24">
      <div className="container mx-auto max-w-5xl">
        {/* Hero skeleton */}
        <div className="mb-24 flex min-h-[60vh] flex-col justify-center">
          <div className="h-4 w-32 animate-pulse rounded bg-muted" />
          <div className="mt-4 h-12 w-80 animate-pulse rounded bg-muted" />
          <div className="mt-3 h-8 w-64 animate-pulse rounded bg-muted" />
          <div className="mt-6 h-20 w-96 max-w-full animate-pulse rounded bg-muted" />
          <div className="mt-8 flex gap-4">
            <div className="h-11 w-36 animate-pulse rounded-md bg-muted" />
            <div className="h-11 w-36 animate-pulse rounded-md bg-muted" />
          </div>
        </div>

        {/* Section skeleton */}
        <div className="mb-16">
          <div className="mb-2 h-4 w-24 animate-pulse rounded bg-muted" />
          <div className="mb-12 h-9 w-64 animate-pulse rounded bg-muted" />
          <div className="grid gap-6 md:grid-cols-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-48 animate-pulse rounded-lg bg-muted" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
