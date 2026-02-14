"use client";

import React from "react";
import { useTranslations } from "next-intl";

import {
  ExternalLink,
  Globe,
  Scissors,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

import type { Project } from "@/types";
import { cn } from "@/lib/utils";
import { GitHubIcon } from "@/components/icons";
import { FadeInItem } from "@/components/shared/animated-wrapper";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

/* ------------------------------------------------------------------ */
/*  Visual theme configuration per project                            */
/* ------------------------------------------------------------------ */

type ProjectVisual = {
  /** CSS gradient applied to the visual header. */
  gradient: string;
  /** Accent colour for decorative elements. */
  accent: string;
  /** Lucide icon rendered in the header. */
  icon: LucideIcon;
};

const visualsBySlug: Record<string, ProjectVisual> = {
  zunftgewerk: {
    gradient:
      "linear-gradient(135deg, rgba(16,185,129,0.18) 0%, rgba(6,182,212,0.10) 50%, transparent 100%)",
    accent: "rgb(16,185,129)",
    icon: ShieldCheck,
  },
  "fiecon-consulting": {
    gradient:
      "linear-gradient(135deg, rgba(245,158,11,0.18) 0%, rgba(217,119,6,0.10) 50%, transparent 100%)",
    accent: "rgb(245,158,11)",
    icon: Globe,
  },
  "nanas-artistry": {
    gradient:
      "linear-gradient(135deg, rgba(236,72,153,0.18) 0%, rgba(168,85,247,0.10) 50%, transparent 100%)",
    accent: "rgb(236,72,153)",
    icon: Scissors,
  },
};

const defaultVisual: ProjectVisual = {
  gradient:
    "linear-gradient(135deg, rgba(161,161,170,0.15) 0%, rgba(113,113,122,0.08) 50%, transparent 100%)",
  accent: "rgb(161,161,170)",
  icon: ShieldCheck,
};

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */

/** Props for the {@link ProjectCard} component. */
export type ProjectCardProps = {
  /** The project data to display. */
  project: Project;
  /** Additional CSS class names forwarded to the outermost wrapper. */
  className?: string | undefined;
};

/**
 * Card component that renders a single portfolio project.
 *
 * Displays a gradient visual header with a themed icon, the project
 * title, description, technology tags, and action buttons (live URL
 * and/or GitHub link). Featured projects receive a secondary badge.
 *
 * Wrapped in a {@link FadeInItem} for staggered entrance animations.
 */
export function ProjectCard({
  project,
  className,
}: ProjectCardProps): React.ReactElement {
  const t = useTranslations("projects");
  const visual = visualsBySlug[project.slug] ?? defaultVisual;
  const Icon = visual.icon;

  return (
    <FadeInItem className={cn(className)}>
      <div className="group relative h-full overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-foreground/20 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20">
        {/* ── Visual Header ── */}
        <div className="relative h-44 overflow-hidden bg-zinc-100 dark:bg-zinc-950">
          {/* Colour gradient */}
          <div
            className="absolute inset-0"
            style={{ background: visual.gradient }}
          />

          {/* Dot grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.04] dark:opacity-[0.03]"
            style={{
              backgroundImage:
                "radial-gradient(circle, currentColor 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* Glow: top-right */}
          <div
            className="absolute -right-8 -top-8 size-36 rounded-full opacity-[0.12] blur-2xl"
            style={{ backgroundColor: visual.accent }}
          />
          {/* Glow: bottom-left */}
          <div
            className="absolute -bottom-6 -left-6 size-28 rounded-full opacity-[0.08] blur-xl"
            style={{ backgroundColor: visual.accent }}
          />

          {/* Centre icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex size-16 items-center justify-center rounded-2xl border border-black/5 bg-white/10 shadow-sm backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 dark:border-white/10 dark:bg-white/5">
              <Icon
                className="size-8 text-zinc-700 dark:text-white/70"
                strokeWidth={1.5}
              />
            </div>
          </div>

          {/* Bottom accent line */}
          <div
            className="absolute bottom-0 left-0 h-px w-full opacity-30"
            style={{
              background: `linear-gradient(to right, transparent, ${visual.accent}, transparent)`,
            }}
          />
        </div>

        {/* ── Content ── */}
        <div className="flex flex-col gap-4 p-6">
          {/* Title row */}
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-xl font-semibold tracking-tight">
              {project.title}
            </h3>
            {project.featured && (
              <Badge variant="secondary" className="shrink-0 text-xs">
                {t("featured")}
              </Badge>
            )}
          </div>

          {/* Description */}
          <p className="text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="text-xs font-normal"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-2 pt-1">
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
        </div>
      </div>
    </FadeInItem>
  );
}
