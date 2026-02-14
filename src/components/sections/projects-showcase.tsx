"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { featuredProjects } from "@/config/projects";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProjectCard } from "@/components/shared/project-card";
import { FadeIn, StaggerContainer } from "@/components/shared/animated-wrapper";
import { Button } from "@/components/ui/button";
import React from "react";

export function ProjectsShowcase(): React.ReactElement {
  const t = useTranslations("projects");

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        <StaggerContainer className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </StaggerContainer>
        <FadeIn className="mt-8 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/projects">{t("allProjects")}</Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
