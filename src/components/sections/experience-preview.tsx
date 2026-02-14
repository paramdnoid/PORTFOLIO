"use client";

import React from "react";
import { useTranslations } from "next-intl";

import { experiences } from "@/config/experience";
import { SectionHeading } from "@/components/shared/section-heading";
import { TimelineEntry } from "@/components/shared/timeline-entry";

/**
 * Experience section for the home page.
 *
 * Shows all professional positions in a changelog-style timeline
 * layout. Uses the same timeline component as the dedicated
 * experience page.
 */
export function ExperiencePreview(): React.ReactElement {
  const t = useTranslations("experience");

  return (
    <section id="experience" className="pt-12 pb-24 px-4 scroll-mt-20">
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
