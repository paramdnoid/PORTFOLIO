"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/shared/animated-wrapper";
import { ArrowDown } from "lucide-react";
import React from "react";

export function Hero(): React.ReactElement {
  const t = useTranslations("hero");

  return (
    <section className="relative flex min-h-[85vh] items-center justify-center px-4">
      <div className="container mx-auto max-w-5xl">
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
              <Link href="/projects">{t("cta")}</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">{t("ctaSecondary")}</Link>
            </Button>
          </div>
        </FadeIn>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="size-5 text-muted-foreground" />
      </div>
    </section>
  );
}
