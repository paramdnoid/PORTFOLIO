"use client";

import type { ReactElement } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Project } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/shared/animated-wrapper";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

interface ProjectDetailContentProps {
  project: Project;
}

export function ProjectDetailContent({
  project,
}: ProjectDetailContentProps): ReactElement {
  const t = useTranslations("projects");
  const tCommon = useTranslations("common");

  return (
    <div className="py-24 px-4">
      <div className="container mx-auto max-w-3xl">
        <FadeIn>
          <Link
            href="/projects"
            className="mb-8 inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="mr-1.5 size-4" />
            {tCommon("backToHome")}
          </Link>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="text-4xl font-bold tracking-tight">{project.title}</h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-4 text-lg text-muted-foreground">
            {project.longDescription ?? project.description}
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-6">
            <h3 className="mb-3 text-sm font-semibold tracking-wider text-muted-foreground uppercase">
              {t("techStack")}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-8 flex gap-3">
            {project.liveUrl && (
              <Button asChild>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 size-4" />
                  {t("viewProject")}
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button variant="outline" asChild>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 size-4" />
                  {t("viewCode")}
                </a>
              </Button>
            )}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
