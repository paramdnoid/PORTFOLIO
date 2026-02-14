import type { Metadata } from "next";
import React from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { AboutPreview } from "@/components/sections/about-preview";
import { Skills } from "@/components/sections/skills";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: t("aboutTitle"),
    description: t("aboutDescription"),
  };
}

export default async function AboutPage({
  params,
}: Props): Promise<React.ReactElement> {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="pt-8">
      <AboutPreview />
      <Skills />
    </div>
  );
}
