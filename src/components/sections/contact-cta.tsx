"use client";

import React from "react";
import { useTranslations } from "next-intl";

import { ArrowRight } from "lucide-react";

import { Link } from "@/i18n/navigation";
import { FadeIn } from "@/components/shared/animated-wrapper";
import { Button } from "@/components/ui/button";

/**
 * Call-to-action section encouraging visitors to get in touch.
 *
 * Centered layout with a heading, subtitle, and a prominent
 * button linking to the `/contact` page. Each element fades in
 * with a staggered delay.
 */
export function ContactCTA(): React.ReactElement {
  const t = useTranslations("contact");

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-5xl text-center">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t("title")}
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mx-auto mt-4 max-w-md text-lg text-muted-foreground">
            {t("subtitle")}
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="mt-8">
            <Button size="lg" asChild>
              <Link href="/contact">
                {t("title")}
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
