"use client";

import React from "react";

import { FadeIn } from "@/components/shared/animated-wrapper";

/** Props for the {@link SectionHeading} component. */
export type SectionHeadingProps = {
  /** The main heading text (rendered as `<h2>`). */
  title: string;
  /** Optional subtitle displayed above the title in small caps. */
  subtitle?: string | undefined;
  /** Additional CSS class names for the outer wrapper. */
  className?: string | undefined;
};

/**
 * Reusable section heading with an optional subtitle.
 *
 * Renders a bold `<h2>` title and, when provided, a small uppercase
 * subtitle above it. Wrapped in {@link FadeIn} for scroll animation.
 *
 * @param props - See `SectionHeadingProps` for available options.
 */
export function SectionHeading({
  title,
  subtitle,
  className,
}: SectionHeadingProps): React.ReactElement {
  return (
    <FadeIn className={className}>
      <div className="mb-12 space-y-2">
        {subtitle && (
          <p className="text-sm font-medium tracking-wider text-muted-foreground uppercase">
            {subtitle}
          </p>
        )}
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h2>
      </div>
    </FadeIn>
  );
}
