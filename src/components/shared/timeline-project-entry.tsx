"use client";

import React from "react";
import { useTranslations } from "next-intl";

import { ExternalLink } from "lucide-react";

import type { Project } from "@/types";
import { GitHubIcon } from "@/components/icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

/** Props for the {@link TimelineProjectEntry} component. */
export type TimelineProjectEntryProps = {
  /** The project data to display. */
  project: Project;
  /** Optional index for animation delays. */
  index?: number | undefined;
};

/**
 * Single entry in the projects timeline.
 *
 * Displays the project title, description, technology tags, and
 * expandable detail section. Uses the same changelog-style two-column
 * layout with a vertical connector line as {@link TimelineEntry}.
 *
 * @param props - See `TimelineProjectEntryProps` for available options.
 */
export function TimelineProjectEntry({
  project,
}: TimelineProjectEntryProps): React.ReactElement {
  const t = useTranslations("projects");

  return (
    <div className="relative">
      <div className="flex flex-col gap-y-6 md:flex-row">
        {/* Left column: Year and featured badge */}
        <div className="flex-shrink-0 md:w-48">
          <div className="z-10 pb-10 pt-2 md:sticky md:top-[173px]">
            <time className="mb-3 block text-sm font-medium text-muted-foreground">
              {project.year}
            </time>
            <div
              className={`relative z-10 inline-flex items-center justify-center rounded-lg border border-border px-3 py-1.5 text-xs font-semibold uppercase tracking-wide ${
                project.featured
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {project.featured ? t("featured") : t("techStack")}
            </div>
          </div>
        </div>

        {/* Timeline connector: vertical line + sticky dot */}
        <div className="hidden md:block relative w-8 flex-shrink-0">
          <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-border" />
          <div className="sticky top-[173px] z-10 flex justify-center pt-3">
            <div
              className={`size-3 rounded-full ${
                project.featured ? "bg-primary" : "bg-muted-foreground"
              }`}
            />
          </div>
        </div>

        {/* Right column: Content */}
        <div className="relative flex-1 pb-10">
          <div className="space-y-6">
            {/* Title */}
            <div className="relative z-10 flex flex-col gap-2">
              <h2 className="text-2xl font-semibold tracking-tight text-balance">
                {project.title}
              </h2>
            </div>

            {/* Description and details */}
            <div className="prose dark:prose-invert max-w-none prose-headings:scroll-mt-8 prose-headings:font-semibold prose-a:no-underline prose-headings:tracking-tight prose-headings:text-balance prose-p:tracking-tight prose-p:text-balance">
              <p className="text-base leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              {/* Technologies */}
              {project.tags.length > 0 && (
                <div className="not-prose mt-4">
                  <p className="mb-2 text-sm font-semibold text-foreground">
                    {t("techStack")}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Collapsible long description */}
              {project.longDescription && (
                <Accordion
                  type="multiple"
                  className="not-prose mt-6 w-full"
                  defaultValue={project.featured ? ["details"] : []}
                >
                  <AccordionItem value="details">
                    <AccordionTrigger>{t("projectDetails")}</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {project.longDescription}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              )}

              {/* Action buttons */}
              {(project.liveUrl ?? project.githubUrl) && (
                <div className="not-prose mt-6 flex gap-2">
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
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
