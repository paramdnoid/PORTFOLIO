"use client";

import React from "react";
import { useTranslations } from "next-intl";

import { Award, Calendar } from "lucide-react";

import { certifications } from "@/config/experience";
import {
  FadeInItem,
  StaggerContainer,
} from "@/components/shared/animated-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

/**
 * Certifications and education section.
 *
 * Displays professional certifications and educational credentials
 * in a grid layout with cards. Shows IHK certification prominently.
 */
export function Certifications(): React.ReactElement {
  const t = useTranslations("experience");

  const formatCertDate = (date: string, endDate?: string): string => {
    const startDate = new Date(date + "-01");
    const startFormatted = startDate.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });

    if (!endDate) {
      return startFormatted;
    }

    const end = new Date(endDate + "-01");
    const endFormatted = end.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });

    return `${startFormatted} - ${endFormatted}`;
  };

  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-5xl px-4">
        <SectionHeading
          title={t("certificationsTitle")}
          subtitle={t("certificationsSubtitle")}
        />
        <StaggerContainer className="grid gap-6 md:grid-cols-2">
          {certifications.map((cert) => (
            <FadeInItem key={cert.title}>
              <Card className="h-full transition-colors hover:border-foreground/20">
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <div className="space-y-1 flex-1">
                      <CardTitle className="text-xl flex items-start gap-2">
                        <Award className="size-5 text-primary mt-1 flex-shrink-0" />
                        <span>{cert.title}</span>
                      </CardTitle>
                      <CardDescription className="text-base">
                        {cert.issuer}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {cert.description && (
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {cert.description}
                      </p>
                    )}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="size-4" />
                      <span>{formatCertDate(cert.date, cert.endDate)}</span>
                    </div>
                    {cert.credentialId && (
                      <Badge variant="outline" className="text-xs font-mono">
                        ID: {cert.credentialId}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            </FadeInItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
