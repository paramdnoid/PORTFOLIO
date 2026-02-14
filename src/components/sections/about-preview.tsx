"use client";

import React from "react";
import { useTranslations } from "next-intl";

import { FadeIn } from "@/components/shared/animated-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";

/**
 * Short biography section shown on the home page.
 *
 * Renders a {@link SectionHeading} with the translated title/subtitle
 * and a single paragraph bio. Links to the full About page are handled
 * elsewhere in the navigation.
 */
export function AboutPreview(): React.ReactElement {
  const t = useTranslations("about");

  return (
    <section id="about" className="relative pt-24 pb-12 px-4 scroll-mt-20">
      {/* Ambient glow for frosted glass depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/4 top-1/3 size-[400px] rounded-full blur-3xl"
        style={{ backgroundColor: "var(--chrome)", opacity: 0.04 }}
      />
      <div className="container relative mx-auto max-w-5xl px-4">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        <FadeIn>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {t("bio")}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
