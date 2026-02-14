"use client";

import type { ReactElement } from "react";
import { useTranslations } from "next-intl";

import type { Project } from "@/types";
import { SectionHeading } from "@/components/shared/section-heading";
import { TimelineProjectEntry } from "@/components/shared/timeline-project-entry";

type ProjectsPageContentProps = {
  projects: Project[];
};

export function ProjectsPageContent({
  projects,
}: ProjectsPageContentProps): ReactElement {
  const t = useTranslations("projects");

  return (
    <div className="py-24 px-4">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="sticky top-[65px] z-20 -mx-4 bg-background px-4 pt-6 pb-4 [&_div.mb-12]:mb-0">
          <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        </div>
        {projects.length > 0 ? (
          <div className="relative">
            {projects.map((project, index) => (
              <TimelineProjectEntry
                key={project.slug}
                project={project}
                index={index}
              />
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">{t("noProjects")}</p>
        )}
      </div>
    </div>
  );
}
