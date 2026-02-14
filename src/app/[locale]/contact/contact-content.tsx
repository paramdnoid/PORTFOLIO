"use client";

import type { ReactElement } from "react";
import { useTranslations } from "next-intl";

import { Mail } from "lucide-react";

import { siteConfig } from "@/config/site";
import { FadeIn } from "@/components/shared/animated-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";

export function ContactPageContent(): ReactElement {
  const t = useTranslations("contact");

  return (
    <div className="py-24 px-4">
      <div className="container mx-auto max-w-3xl">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        <FadeIn>
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground">{t("subtitle")}</p>
            <Button size="lg" asChild>
              <a href={`mailto:${siteConfig.links.email}`}>
                <Mail className="mr-2 size-4" />
                {t("send")}
              </a>
            </Button>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
