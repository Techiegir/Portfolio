"use client";

import React from "react";

import { ToolsSection } from "@/components/effects/ToolsSection";

interface Capability {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const CAPABILITIES: Capability[] = [
  {
    number: "01",
    title: "Product & UI/UX Design",
    description:
      "I design intuitive digital products and experiences that balance user needs, business goals, and usability — from user flows and structure to polished interfaces.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5 text-brand transition-colors duration-500"
        aria-hidden="true"
      >
        <path d="M3 3l7.07 17 2.51-7.39L21 11.07z" />
        <rect
          x="14.5"
          y="15"
          width="6.5"
          height="6.5"
          rx="1.5"
          className="transition-colors duration-500"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "No-Code Execution",
    description:
      "I use modern no-code tools to transform designs into functional digital experiences quickly while maintaining strong visual quality and responsiveness.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5 text-brand transition-colors duration-500"
        aria-hidden="true"
      >
        <rect x="3.5" y="14.5" width="7" height="7" rx="1.5" />
        <rect x="13.5" y="14.5" width="7" height="7" rx="1.5" />
        <rect x="8" y="3" width="7.5" height="7.5" rx="1.5" />
        <path
          d="M11.75 10.5L7.9 13.5M12 10.5l3.6 3.4"
          className="transition-colors duration-500"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Front-End Development",
    description:
      "I bring designs to life through front-end development, creating responsive interfaces while understanding the details that make great designs practical and buildable.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5 text-brand transition-colors duration-500"
        aria-hidden="true"
      >
        <path d="M8.5 7.5L3.5 12l5 4.5" />
        <path d="M15.5 7.5l5 4.5-5 4.5" />
        <path
          d="M13.5 5.5L10.5 18.5"
          className="transition-colors duration-500"
        />
      </svg>
    ),
  },
  {
    number: "04",
    title: "WordPress Development",
    description:
      "I create polished, responsive WordPress websites that combine thoughtful design with practical functionality and easy content management.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5 text-brand transition-colors duration-500"
        aria-hidden="true"
      >
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18" />
        <circle cx="12" cy="15" r="3.4" />
        <path
          d="M8.6 15h6.8M11 11.9c1.3 2 1.3 4.2 0 6.2M13 11.9c-1.3 2-1.3 4.2 0 6.2"
          className="transition-colors duration-500"
        />
      </svg>
    ),
  },
];

export const Capabilities: React.FC = () => (
  <section
    id="capabilities"
    aria-label="What I bring to every project"
    className="relative overflow-hidden border-y border-neutral-100 bg-white pt-[40px] pb-[60px] sm:pt-[72px] sm:pb-[92px]"
  >
    <div className="mx-auto max-w-[76rem] px-4 sm:px-6 lg:px-8">
      <div className="mb-14 flex flex-col items-center text-center sm:mb-20">
        <h2 className="max-w-4xl font-display text-[34px] font-bold leading-[1.08] tracking-[-0.03em] text-neutral-950 sm:text-[42px] lg:text-[50px]">
          What I Bring to Every Project
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-500 sm:text-lg">
          From product thinking and user experience to hands-on execution, I turn ideas into
          thoughtful digital experiences that are designed to work beautifully.
        </p>
      </div>

      <div className="mx-auto grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
        {CAPABILITIES.map((cap) => (
          <div
            key={cap.number}
            className="relative flex h-full flex-col overflow-hidden rounded-[1.4rem] border border-neutral-200/70 bg-gradient-to-br from-white via-[#fbfcff] to-[#f2f5ff] p-6 shadow-[0_14px_30px_-28px_rgba(15,23,42,0.35)] dark:border-[#2a3247] dark:from-[#151a24] dark:via-[#171d2b] dark:to-[#1d2436] dark:shadow-[0_20px_50px_-30px_rgba(0,0,0,0.9)]"
          >
            <div className="pointer-events-none absolute -right-16 -top-20 h-32 w-32 rounded-full bg-[#031B54]/[0.04] blur-2xl dark:bg-[#a5b4fc]/10" />

            <div className="relative flex items-start justify-between">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white ring-1 ring-black/[0.06] dark:bg-[#202636] dark:ring-white/10">
                {cap.icon}
              </span>
              <span className="text-xs font-semibold tracking-[0.3em] text-neutral-400">
                {cap.number}
              </span>
            </div>

            <h3 className="relative mt-6 font-display text-lg font-bold tracking-tight text-neutral-950 sm:text-xl">
              {cap.title}
            </h3>
            <p className="relative mt-3 text-[13px] leading-relaxed text-neutral-500">
              {cap.description}
            </p>
          </div>
        ))}
      </div>

      <ToolsSection />
    </div>
  </section>
);