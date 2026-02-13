"use client";

import { FadeIn } from "@/components/shared/animated-wrapper";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  className,
}: SectionHeadingProps) {
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
