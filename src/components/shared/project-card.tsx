"use client";

import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

import { ExternalLink } from "lucide-react";

import type { Project } from "@/types";
import { GitHubIcon } from "@/components/icons";
import { FadeInItem } from "@/components/shared/animated-wrapper";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps): React.ReactElement {
  const t = useTranslations("projects");

  return (
    <FadeInItem>
      <Card className="group overflow-hidden transition-colors hover:border-foreground/20">
        {/* Project Image */}
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            priority={project.featured}
          />
        </div>
        <CardHeader>
          <div className="flex items-start justify-between gap-2">
            <div className="space-y-1">
              <CardTitle className="text-xl">{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </div>
            {project.featured && (
              <Badge variant="secondary" className="shrink-0">
                {t("featured")}
              </Badge>
            )}
          </div>
        </CardHeader>
        <CardContent>
          {/* Tags */}
          <div className="mb-4 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            {project.liveUrl && (
              <Button size="sm" variant="default" asChild>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-1.5 size-3.5" />
                  {t("viewProject")}
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button size="sm" variant="outline" asChild>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon className="mr-1.5 size-3.5" />
                  {t("viewCode")}
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </FadeInItem>
  );
}
