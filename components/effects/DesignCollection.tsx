"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  WORKS,
  CATEGORY_TABS,
  type CategoryKey,
  type UITile,
} from "@/data/workCollections";

const PROJECT_TABS = ["All", ...CATEGORY_TABS] as const;

type ProjectTab = (typeof PROJECT_TABS)[number];

const CATEGORY_LABELS: Record<CategoryKey, string> = {
  "Mobile Apps": "Mobile App",
  Websites: "Website",
  Dashboards: "Dashboard",
  "Case Studies": "Case Study",
};

const VIEW_ALL_HREF = "https://www.behance.net/akinyoktemilad15";

const allProjects: Array<UITile & { category: CategoryKey }> = CATEGORY_TABS.flatMap(
  (key) =>
    WORKS[key].map((item) => ({
      ...item,
      category: key,
    }))
);

const ProjectCard: React.FC<{ item: UITile & { category: CategoryKey } }> = ({ item }) => (
  <article className="group/project relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_24px_50px_-30px_rgba(15,23,42,0.45)] ring-1 ring-black/5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(15,23,42,0.55)]">
    <div className="relative aspect-[5/4] shrink-0 overflow-hidden p-2.5">
      <div
        className="absolute inset-0"
        style={{ background: `linear-gradient(140deg, ${item.from} 0%, ${item.to} 110%)` }}
      />
      {item.image && (
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
          quality={80}
          className="object-cover transition-transform duration-500 group-hover/project:scale-105"
        />
      )}
      <span className="absolute left-3 top-3 z-10 rounded-full bg-neutral-900/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm shadow-sm">
        {item.name}
      </span>
    </div>

    <div className="flex flex-1 items-center justify-between gap-4 border-t border-neutral-100 px-5 py-4">
      <div className="min-w-0">
        <span className="inline-flex items-center text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
          {CATEGORY_LABELS[item.category]}
        </span>
        <h3 className="mt-1 truncate font-display text-lg font-bold tracking-tight text-neutral-950">
          {item.name}
        </h3>
        <p className="mt-0.5 truncate text-sm text-neutral-500">{item.tag}</p>
      </div>

      <a
        href={item.href ?? VIEW_ALL_HREF}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-neutral-900 transition-colors duration-200 hover:text-brand"
      >
        View Project
        <svg
          className="h-4 w-4 transition-transform duration-300 group-hover/project:translate-x-0.5"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  </article>
);

export const DesignCollection: React.FC = () => {
  const [active, setActive] = useState<ProjectTab>("All");
  const projects =
    active === "All"
      ? allProjects
      : allProjects.filter((item) => item.category === active);

  return (
    <section id="design-collection" aria-label="Design Collection" className="pt-0 sm:pt-[18px]">
      <div className="mb-10 flex flex-col items-center text-center sm:mb-14">
        <h2 className="font-display text-[clamp(2rem,8.5vw,3.25rem)] font-bold tracking-tight text-neutral-950 sm:text-[60px]">
          Design Collection
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-500 sm:text-lg">
          A curated collection of digital products across mobile, web, dashboards, and product
          experiences.
        </p>

        <div className="mt-9 flex w-full justify-center">
          <div className="max-w-full overflow-x-auto pb-1">
            <div
              className="mx-auto inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-white p-1 shadow-sm"
              role="tablist"
              aria-label="Filter projects by category"
            >
              {PROJECT_TABS.map((tab) => {
                const isActive = tab === active;
                return (
                  <button
                    key={tab}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActive(tab)}
                    className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? "bg-brand text-brand-foreground shadow-[0_8px_18px_-10px_rgba(79,70,229,0.7)]"
                        : "text-neutral-500 hover:text-neutral-800"
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <p className="mt-2 text-[14px] text-neutral-500">
          Want to see more projects?{" "}
          <a
            href={VIEW_ALL_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-brand transition-colors duration-200 hover:text-brand/80"
          >
            Checkout my Behance
          </a>
        </p>
      </div>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-6">
        {projects.map((item) => (
          <ProjectCard key={`${item.category}-${item.name}`} item={item} />
        ))}
      </div>
    </section>
  );
};