"use client";

import React from "react";
import { useTranslations } from "next-intl";

import { featuredProjects } from "@/config/projects";
import { Link } from "@/i18n/navigation";
import { FadeIn } from "@/components/shared/animated-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { TimelineProjectEntry } from "@/components/shared/timeline-project-entry";
import { Button } from "@/components/ui/button";

/**
 * Projects preview section for the home page.
 *
 * Shows featured projects in a changelog-style timeline layout
 * matching the experience section. Includes a link to the full
 * projects page.
 */
export function ProjectsShowcase(): React.ReactElement {
  const t = useTranslations("projects");

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="sticky top-[65px] z-20 -mx-4 bg-background px-4 pt-6 pb-4 [&_div.mb-12]:mb-0">
          <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        </div>
        <div className="relative">
          {featuredProjects.map((project, index) => (
            <TimelineProjectEntry
              key={project.slug}
              project={project}
              index={index}
            />
          ))}
        </div>
        <FadeIn className="mt-8 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/projects">{t("allProjects")}</Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
