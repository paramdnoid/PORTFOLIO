"use client";

import { useTranslations } from "next-intl";
import type { Project } from "@/types";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProjectCard } from "@/components/shared/project-card";
import { StaggerContainer } from "@/components/shared/animated-wrapper";

interface ProjectsPageContentProps {
  projects: Project[];
}

export function ProjectsPageContent({ projects }: ProjectsPageContentProps) {
  const t = useTranslations("projects");

  return (
    <div className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        {projects.length > 0 ? (
          <StaggerContainer className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </StaggerContainer>
        ) : (
          <p className="text-muted-foreground">{t("noProjects")}</p>
        )}
      </div>
    </div>
  );
}
