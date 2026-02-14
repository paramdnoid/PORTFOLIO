"use client";

import React from "react";
import { useTranslations } from "next-intl";

import { projects } from "@/config/projects";
import { SectionHeading } from "@/components/shared/section-heading";
import { TimelineProjectEntry } from "@/components/shared/timeline-project-entry";

/**
 * Projects section for the single-page portfolio.
 *
 * Shows all projects in a changelog-style timeline layout
 * matching the experience section.
 */
export function ProjectsShowcase(): React.ReactElement {
  const t = useTranslations("projects");

  return (
    <section id="projects" className="py-24 px-4 scroll-mt-20">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="sticky top-[65px] z-20 -mx-4 bg-background px-4 pt-6 pb-4 [&_div.mb-12]:mb-0">
          <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        </div>
        <div className="relative">
          {projects.length > 0 ? (
            projects.map((project, index) => (
              <TimelineProjectEntry
                key={project.slug}
                project={project}
                index={index}
              />
            ))
          ) : (
            <p className="text-muted-foreground">{t("noProjects")}</p>
          )}
        </div>
      </div>
    </section>
  );
}
