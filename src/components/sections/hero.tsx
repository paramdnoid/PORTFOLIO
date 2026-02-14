"use client";

import React from "react";
import { useTranslations } from "next-intl";

import { ArrowDown, Award, Calendar } from "lucide-react";

import { certifications } from "@/config/experience";
import { FadeIn } from "@/components/shared/animated-wrapper";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

/**
 * Format a certification date range for display.
 *
 * Returns "MMM YYYY" for a single date, or "MMM YYYY – MMM YYYY"
 * when an end date is provided.
 */
function formatCertDate(date: string, endDate?: string): string {
  const start = new Date(date + "-01");
  const startFormatted = start.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });

  if (!endDate) return startFormatted;

  const end = new Date(endDate + "-01");
  const endFormatted = end.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });

  return `${startFormatted} – ${endFormatted}`;
}

/**
 * Full-viewport hero section displayed at the top of the home page.
 *
 * Two-column layout on desktop: left side shows greeting, name, role,
 * tagline, and CTAs; right side displays professional certifications
 * and education in compact enterprise-style cards. On mobile, the
 * layout stacks vertically. A bouncing arrow at the bottom hints
 * that the page is scrollable.
 */
export function Hero(): React.ReactElement {
  const t = useTranslations("hero");

  return (
    <section className="relative flex min-h-[85vh] items-center justify-center px-4">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
          {/* ── Left column: intro content ── */}
          <div>
            <FadeIn>
              <p className="mb-4 text-sm font-medium tracking-wider text-muted-foreground uppercase">
                {t("greeting")}
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                {t("name")}
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-2 text-2xl font-medium text-muted-foreground sm:text-3xl">
                {t("role")}
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="mt-6 max-w-lg text-lg text-muted-foreground">
                {t("tagline")}
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <a href="#experience">{t("cta")}</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#contact">{t("ctaSecondary")}</a>
                </Button>
              </div>
            </FadeIn>
          </div>

          {/* ── Right column: certifications & education ── */}
          <FadeIn delay={0.5}>
            <div className="flex flex-col gap-4 lg:w-[340px]">
              <p className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
                {t("certificationsLabel")}
              </p>
              {certifications.map((cert) => (
                <Card
                  key={cert.title}
                  className="gap-4 py-4 transition-colors hover:border-foreground/20"
                >
                  <CardHeader className="gap-1.5 px-4 pb-0">
                    <CardTitle className="flex items-start gap-2 text-base">
                      <Award className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span className="leading-snug">{cert.title}</span>
                    </CardTitle>
                    <CardDescription className="pl-6 text-sm">
                      {cert.issuer}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-4 pt-0">
                    <div className="space-y-2">
                      {cert.description && (
                        <p className="pl-6 text-xs leading-relaxed text-muted-foreground">
                          {cert.description}
                        </p>
                      )}
                      <div className="flex items-center gap-1.5 pl-6 text-xs text-muted-foreground">
                        <Calendar className="size-3.5" />
                        <span>{formatCertDate(cert.date, cert.endDate)}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="size-5 text-muted-foreground" />
      </div>
    </section>
  );
}
