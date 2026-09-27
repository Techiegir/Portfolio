import React from "react";
import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { DesignCollection } from "@/components/effects/DesignCollection";
import { siteConfig } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browse a curated design collection of mobile apps, dashboards, websites, and case studies by " +
    siteConfig.name,
  openGraph: {
    title: `Projects — ${siteConfig.name}`,
    description: "A curated design collection of mobile apps, dashboards, websites, and case studies.",
  },
};

export default function ProjectsPage() {
  return (
    <div className="pt-3 pb-8 sm:pt-7 sm:pb-12">
      {/* Design Collection */}
      <Section>
        <DesignCollection />
      </Section>
    </div>
  );
}
