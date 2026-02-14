import type { ReactElement } from "react";
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { projects } from "@/config/projects";

import { ProjectDetailContent } from "./project-detail-content";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams(): { slug: string }[] {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: Props): Promise<ReactElement> {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return <ProjectDetailContent project={project} />;
}
