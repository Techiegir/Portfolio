import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/portfolio";
import { WORK_COLLECTIONS } from "@/data/workCollections";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const staticPages = ["", "/projects", "/about", "/contact"].map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const workPages = WORK_COLLECTIONS.map((collection) => ({
    url: `${base}${collection.href}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...workPages];
}