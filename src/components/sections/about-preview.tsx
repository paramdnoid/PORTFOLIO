"use client";

import React from "react";
import { useTranslations } from "next-intl";

import { FadeIn } from "@/components/shared/animated-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";

export function AboutPreview(): React.ReactElement {
  const t = useTranslations("about");

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
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
