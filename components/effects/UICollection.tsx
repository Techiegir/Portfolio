"use client";

import React, { useState } from "react";
import Image from "next/image";
import { WORKS, CATEGORY_TABS, type CategoryKey, type UITile } from "@/data/workCollections";

const BAR_WIDTHS = ["w-3/4", "w-1/2", "w-2/3", "w-5/6", "w-1/3", "w-7/12"];

const expand = (items: UITile[], min: number): UITile[] => {
  const out: UITile[] = [];
  let i = 0;
  while (out.length < min) {
    out.push(items[i % items.length]);
    i += 1;
  }
  return out;
};

const Card: React.FC<{ item: UITile }> = ({ item }) => {
  const isMobile = item.kind === "mobile";

  const frameClass = "h-[340px] w-[300px] sm:h-[400px] sm:w-[450px]";

  return (
    <div
      className="group/card relative shrink-0 overflow-hidden rounded-2xl bg-white shadow-[0_24px_50px_-30px_rgba(15,23,42,0.45)] ring-1 ring-black/5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(15,23,42,0.55)]"
      title={`${item.name} — ${item.tag}`}
    >
      <div
        className={`${frameClass} relative flex flex-col gap-2 p-2.5 overflow-hidden`}
        style={{ background: `linear-gradient(140deg, ${item.from} 0%, ${item.to} 110%)` }}
      >
        {item.image ? (
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(min-width: 640px) 450px, 300px"
            quality={100}
            className="object-cover transition-transform duration-500 group-hover/card:scale-105"
          />
        ) : (
          <>
            <div className="flex items-center gap-1.5 px-1 pt-1">
              <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
              <span className="ml-auto h-2 w-2/5 rounded-full bg-white/50" />
            </div>

            <div className="flex-1 rounded-lg bg-white/12 p-2.5 backdrop-blur-sm">
              <div className="mb-2 h-2 w-2/3 rounded-full bg-white/70" />
              <div className="flex items-center gap-1.5">
                <span className="h-4 w-4 shrink-0 rounded-full bg-white/60" />
                <span className="h-2 w-1/2 rounded-full bg-white/40" />
              </div>
              <div className="mt-2.5 space-y-1.5">
                {BAR_WIDTHS.slice(0, isMobile ? 3 : 4).map((w, i) => (
                  <span key={i} className={`block h-1.5 rounded-full bg-white/35 ${w}`} />
                ))}
              </div>
              {!isMobile && (
                <div className="mt-3 flex items-center justify-between">
                  <span className="h-6 w-1/4 rounded-md bg-white/40" />
                  <span className="h-6 w-6 rounded-full bg-white/30" />
                </div>
              )}
            </div>

            {isMobile && <div className="mx-auto mb-0.5 h-1.5 w-1/3 rounded-full bg-white/50" />}
          </>
        )}
      </div>

      <div className="absolute left-3 top-3 start-0 z-10">
        <span className="rounded-full bg-neutral-900/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm shadow-sm">
          {item.name}
        </span>
      </div>
    </div>
  );
};

const Track: React.FC<{ items: UITile[]; duration: number; reverse: boolean }> = ({
  items,
  duration,
  reverse,
}) => (
  <div className="showcase-mask overflow-hidden">
    <div
      className="marquee-track group-hover/showcase:[animation-play-state:paused] flex w-max select-none"
      style={{
        animation: `marquee ${duration}s linear infinite${reverse ? " reverse" : ""}`,
        willChange: "transform",
      }}
    >
      {[items, items].map((half, i) => (
        <div
          key={i}
          className="flex shrink-0 items-center gap-5 pr-5"
          aria-hidden={i === 1 ? "true" : undefined}
        >
          {half.map((item, index) => (
            <Card key={`${item.name}-${index}`} item={item} />
          ))}
        </div>
      ))}
    </div>
  </div>
);

export const UICollection: React.FC = () => {
  const [active, setActive] = useState<CategoryKey>("Mobile Apps");
  const works = WORKS[active];
  const topRow = expand(works, 5);
  const bottomRow = expand([...works].reverse(), 5);

  return (
    <section id="collection" aria-label="UI Designs Collection" className="relative overflow-hidden bg-neutral-50/40 py-16 sm:py-20">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-center text-center sm:mb-14">
          <h2 className="font-display text-[34px] font-bold tracking-tight text-neutral-950 sm:text-[42px] lg:text-[50px]">
            UI Designs Collection
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-500 sm:text-lg lg:max-w-4xl">
            <span className="block">
              A curated collection of digital products I&apos;ve designed across mobile,
              web, dashboards,
            </span>
            <span className="block">
              and product experiences focused on thoughtful UX and purposeful interfaces.
            </span>
          </p>

          <div className="mt-9 flex w-full justify-center">
            <div className="max-w-full overflow-x-auto pb-1">
              <div
                className="mx-auto inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-white p-1 shadow-sm"
                role="tablist"
                aria-label="Filter UI designs by category"
              >
                {CATEGORY_TABS.map((tab) => {
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
        </div>
      </div>

      <div className="group/showcase relative">
        <div
          key={active}
          role="tabpanel"
          className="ui-fade-slide flex flex-col gap-5 lg:gap-6"
          style={{ animation: "ui-fade-slide 0.45s ease" }}
        >
          <Track items={topRow} duration={50} reverse={false} />
          <Track items={bottomRow} duration={70} reverse={true} />
        </div>
      </div>

      <div className="mt-12 flex justify-center sm:mt-14">
        <a
          href="https://www.behance.net/akinyoktemilad15"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-neutral-900 bg-transparent px-7 text-sm font-medium text-neutral-900 transition-colors duration-200 hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
        >
          All Design Works
          <svg
            className="h-4 w-4"
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
    </section>
  );
};