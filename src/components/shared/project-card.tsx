"use client";

import { useTranslations } from "next-intl";
import type { Project } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { FadeInItem } from "@/components/shared/animated-wrapper";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const t = useTranslations("projects");

  return (
    <FadeInItem>
      <Card className="group overflow-hidden transition-colors hover:border-foreground/20">
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
                  <Github className="mr-1.5 size-3.5" />
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
