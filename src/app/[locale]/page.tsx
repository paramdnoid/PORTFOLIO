import type { ReactElement } from "react";
import { setRequestLocale } from "next-intl/server";

import { AboutPreview } from "@/components/sections/about-preview";
import { ContactCTA } from "@/components/sections/contact-cta";
import { Hero } from "@/components/sections/hero";
import { ProjectsShowcase } from "@/components/sections/projects-showcase";
import { Skills } from "@/components/sections/skills";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({
  params,
}: Props): Promise<ReactElement> {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <AboutPreview />
      <ProjectsShowcase />
      <Skills />
      <ContactCTA />
    </>
  );
}
