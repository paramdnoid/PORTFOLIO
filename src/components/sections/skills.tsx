"use client";

import React from "react";
import { useTranslations } from "next-intl";

import { skillCategories } from "@/config/skills";
import {
  FadeIn,
  FadeInItem,
  StaggerContainer,
} from "@/components/shared/animated-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";

/**
 * Skills section displaying technology proficiencies grouped by category.
 *
 * Iterates over {@link skillCategories} (frontend, backend, tools, other)
 * and renders each skill as a `Badge`. Categories and individual
 * badges animate in with staggered fade-in effects.
 */
export function Skills(): React.ReactElement {
  const t = useTranslations("skills");

  const categories = [
    { key: "frontend" as const, label: t("frontend") },
    { key: "backend" as const, label: t("backend") },
    { key: "tools" as const, label: t("tools") },
    { key: "other" as const, label: t("other") },
  ];

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        <div className="grid gap-8 sm:grid-cols-2">
          {categories.map((category) => (
            <FadeIn key={category.key}>
              <div>
                <h3 className="mb-4 text-sm font-semibold tracking-wider text-muted-foreground uppercase">
                  {category.label}
                </h3>
                <StaggerContainer className="flex flex-wrap gap-2">
                  {skillCategories[category.key].map((skill) => (
                    <FadeInItem key={skill}>
                      <Badge variant="secondary" className="px-3 py-1">
                        {skill}
                      </Badge>
                    </FadeInItem>
                  ))}
                </StaggerContainer>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
