"use client";

import React from "react";

import { FadeIn } from "@/components/shared/animated-wrapper";

type SectionHeadingProps = {
  title: string;
  subtitle?: string | undefined;
  className?: string | undefined;
};

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
