"use client";

import React from "react";
import { useLocale, useTranslations } from "next-intl";

import type { Experience } from "@/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

/** Props for the {@link TimelineEntry} component. */
export type TimelineEntryProps = {
  /** The experience data to display. */
  experience: Experience;
  /** Optional index for animation delays. */
  index?: number | undefined;
};

/**
 * Single entry in the experience timeline.
 *
 * Displays job title, company, date range, and expandable sections
 * for responsibilities and achievements. Uses the changelog-style
 * two-column layout with a vertical connector line.
 *
 * @param props - See `TimelineEntryProps` for available options.
 */
export function TimelineEntry({
  experience,
}: TimelineEntryProps): React.ReactElement {
  const t = useTranslations("experience");
  const locale = useLocale();

  const formatDateRange = (start: string, end: string | null): string => {
    const startDate = new Date(start + "-01");
    const startFormatted = startDate.toLocaleDateString(locale, {
      month: "short",
      year: "numeric",
    });

    if (!end) {
      return `${startFormatted} - ${t("present")}`;
    }

    const endDate = new Date(end + "-01");
    const endFormatted = endDate.toLocaleDateString(locale, {
      month: "short",
      year: "numeric",
    });

    return `${startFormatted} - ${endFormatted}`;
  };

  const calculateDuration = (start: string, end: string | null): string => {
    const startDate = new Date(start + "-01");
    const endDate = end ? new Date(end + "-01") : new Date();

    const months =
      (endDate.getFullYear() - startDate.getFullYear()) * 12 +
      (endDate.getMonth() - startDate.getMonth());

    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    if (years === 0) {
      return `${remainingMonths} ${remainingMonths === 1 ? t("durationMo") : t("durationMos")}`;
    }

    if (remainingMonths === 0) {
      return `${years} ${years === 1 ? t("durationYr") : t("durationYrs")}`;
    }

    return `${years} ${years === 1 ? t("durationYr") : t("durationYrs")} ${remainingMonths} ${remainingMonths === 1 ? t("durationMo") : t("durationMos")}`;
  };

  return (
    <div className="relative">
      <div className="flex flex-col md:flex-row gap-y-6">
        {/* Left column: Date and duration badge */}
        <div className="md:w-48 flex-shrink-0">
          <div className="md:sticky md:top-[173px] z-10 pb-10 pt-2">
            <time className="text-sm font-medium text-muted-foreground block mb-3">
              {formatDateRange(experience.startDate, experience.endDate)}
            </time>
            <div
              className={`inline-flex relative z-10 items-center justify-center px-3 py-1.5 ${
                experience.current
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              } border border-border rounded-lg text-xs font-semibold uppercase tracking-wide`}
            >
              {experience.current
                ? t("currentPosition")
                : calculateDuration(experience.startDate, experience.endDate)}
            </div>
          </div>
        </div>

        {/* Timeline connector: vertical line + sticky dot */}
        <div className="hidden md:block relative w-8 flex-shrink-0">
          <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-border" />
          <div className="sticky top-[173px] z-10 flex justify-center pt-3">
            <div
              className={`size-3 rounded-full ${
                experience.current ? "bg-primary" : "bg-muted-foreground"
              }`}
            />
          </div>
        </div>

        {/* Right column: Content */}
        <div className="flex-1 relative pb-10">
          <div className="space-y-6">
            {/* Title and tags */}
            <div className="relative z-10 flex flex-col gap-2">
              <h2 className="text-2xl font-semibold tracking-tight text-balance">
                {experience.title}
              </h2>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-lg font-medium text-foreground">
                  {experience.company}
                </span>
                <span className="text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground">
                  {experience.location}
                </span>
              </div>
            </div>

            {/* Description and details */}
            <div className="prose dark:prose-invert max-w-none prose-headings:scroll-mt-8 prose-headings:font-semibold prose-a:no-underline prose-headings:tracking-tight prose-headings:text-balance prose-p:tracking-tight prose-p:text-balance">
              <p className="text-base leading-relaxed text-muted-foreground">
                {experience.description}
              </p>

              {/* Technologies */}
              {experience.technologies &&
                experience.technologies.length > 0 && (
                  <div className="not-prose mt-4">
                    <p className="text-sm font-semibold text-foreground mb-2">
                      {t("technologies")}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {experience.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

              {/* Collapsible sections */}
              {(experience.responsibilities ?? experience.achievements) && (
                <Accordion
                  type="multiple"
                  className="w-full not-prose mt-6"
                  defaultValue={["responsibilities", "achievements"]}
                >
                  {experience.responsibilities &&
                    experience.responsibilities.length > 0 && (
                      <AccordionItem value="responsibilities">
                        <AccordionTrigger>
                          {t("keyResponsibilities")}
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                          <ul className="list-disc space-y-2 pl-4 text-sm text-muted-foreground">
                            {experience.responsibilities.map((resp, idx) => (
                              <li key={idx}>{resp}</li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    )}

                  {experience.achievements &&
                    experience.achievements.length > 0 && (
                      <AccordionItem value="achievements">
                        <AccordionTrigger>
                          {t("keyAchievements")}
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                          <ul className="list-disc space-y-2 pl-4 text-sm text-muted-foreground">
                            {experience.achievements.map((achievement, idx) => (
                              <li key={idx}>
                                <strong className="text-foreground">
                                  {achievement}
                                </strong>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    )}
                </Accordion>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
