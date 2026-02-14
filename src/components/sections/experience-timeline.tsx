"use client";

import React from "react";
import { useTranslations } from "next-intl";

import { experiences } from "@/config/experience";
import { SectionHeading } from "@/components/shared/section-heading";
import { TimelineEntry } from "@/components/shared/timeline-entry";

/**
 * Complete experience timeline section.
 *
 * Renders all professional experiences in a vertical timeline
 * with changelog-style layout. Used on the dedicated Experience page.
 */
export function ExperienceTimeline(): React.ReactElement {
  const t = useTranslations("experience");

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="sticky top-[65px] z-20 -mx-4 bg-background px-4 pt-6 pb-4 [&_div.mb-12]:mb-0">
          <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        </div>
        <div className="relative">
          {experiences.map((experience, index) => (
            <TimelineEntry
              key={`${experience.company}-${experience.startDate}`}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
