import React from "react";
import Link from "next/link";
import { SkillBubbles } from "@/components/effects/SkillBubbles";
import { UICollection } from "@/components/effects/UICollection";
import { ProjectShowcase } from "@/components/effects/ProjectShowcase";
import { Capabilities } from "@/components/effects/Capabilities";
import { Testimonials } from "@/components/effects/Testimonials";
import { CtaSection } from "@/components/effects/CtaSection";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative -mt-[80px] flex min-h-[100svh] flex-col items-center justify-center overflow-hidden border-b border-neutral-100 bg-gradient-to-b from-neutral-50/60 to-white px-4 pt-[104px] pb-20 sm:-mt-[88px] sm:py-24 dark:from-[#151a24]/70 dark:to-[#0a0d13]">
        <SkillBubbles />
        <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
          <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-normal text-neutral-950 leading-[1.4] sm:text-5xl lg:text-6xl dark:text-white">
            <span className="mb-[8px] block">
              I Design Products{" "}
              <span className="font-semibold italic text-brand dark:text-[#818cf8]">People</span>
            </span>
            <span className="block">
              Love &amp;{" "}
              <span className="font-semibold italic text-brand dark:text-[#818cf8]">Businesses</span> Grow With.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl lg:text-lg text-neutral-600 leading-relaxed dark:text-neutral-300">
            I combine UX strategy, product thinking, and thoughtful interface design to turn complex problems into simple, useful digital experiences.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://calendly.com/nakinyokun/30min?back=1&month=2026-09"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-[196px] items-center justify-center rounded-full bg-brand px-6 text-sm font-medium text-white transition-colors duration-200 hover:bg-brand-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            >
              Book a Call
            </a>
            <Link
              href="/contact"
              className="group inline-flex h-12 w-[196px] items-center justify-center gap-2 rounded-full border border-neutral-900 bg-white px-6 text-sm font-medium text-neutral-900 transition-colors duration-200 hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 dark:border-neutral-700 dark:bg-[#161a24] dark:text-neutral-100 dark:hover:border-brand dark:hover:text-brand"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-neutral-900 text-white transition-colors duration-200 group-hover:bg-brand">
                <svg
                  className="h-3 w-3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M22 2 11 13" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M22 2 15 22l-4-9-9-4Z"
                  />
                </svg>
              </span>
              Send a Message
            </Link>
          </div>
        </div>
      </section>

      <UICollection />

      <ProjectShowcase />

      <Capabilities />

      <Testimonials />

      <CtaSection />
    </>
  );
}
