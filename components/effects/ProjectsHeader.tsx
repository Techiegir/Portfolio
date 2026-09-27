"use client";

import React, { useState } from "react";

import { Container } from "@/components/ui/Container";

const CATEGORIES = ["All", "Mobile Apps", "Websites", "Dashboards", "Case Studies"] as const;

type Category = (typeof CATEGORIES)[number];

export const ProjectsHeader: React.FC = () => {
  const [active, setActive] = useState<Category>("All");

  return (
    <section className="pt-8 pb-8 sm:pt-12 sm:pb-12">
      <Container className="text-center">
        <h1 className="mx-auto font-display text-[40px] font-bold leading-[1.06] tracking-[-0.02em] text-neutral-950 sm:text-[52px] lg:text-[64px]">
          Selected Projects
        </h1>

        <p className="mx-auto mt-4 max-w-[1000px] text-base leading-relaxed text-neutral-500 sm:text-lg">
          Explore design solutions spanning user research, interface prototyping, cross-functional
          <span className="block">design systems, and end-to-end product architecture.</span>
        </p>

        <div className="mt-8 flex justify-center sm:mt-12">
          <div className="no-scrollbar max-w-full overflow-x-auto pb-1">
            <div className="mx-auto inline-flex w-max items-center gap-1 rounded-full border border-neutral-200 bg-white p-1 shadow-sm">
              {CATEGORIES.map((category) => {
                const isActive = category === active;
                return (
                  <button
                    key={category}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActive(category)}
                    className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? "bg-brand text-brand-foreground shadow-[0_8px_18px_-10px_rgba(79,70,229,0.7)]"
                        : "text-neutral-500 hover:text-neutral-800"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};