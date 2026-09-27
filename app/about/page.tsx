import React from "react";
import type { Metadata } from "next";
import { AboutContent } from "@/components/about/AboutContent";
import { siteConfig } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "A little more about Nafisat — how I got here, how I think about design, and the person behind the work.",
  openGraph: {
    title: `About Me — ${siteConfig.name}`,
    description:
      "A little more about Nafisat — how I got here, how I think about design, and the person behind the work.",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}