"use client";

import React from "react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "I came to Nafisat with a rough idea, a few screenshots, and no real structure. She turned it into a clear, thoughtful product experience while keeping our business goal at the centre the whole time. She asks the right questions early, and that saved us months.",
    name: "Oluwaseun Adeyemi",
    role: "Founder & CEO",
    company: "Lantern Finance",
  },
  {
    quote:
      "We handed Nafisat a dashboard with years of accumulated complexity. She simplified the workflows without losing the detail our power users rely on, and mapped every user journey before touching a single screen. Client feedback turned into practical design decisions.",
    name: "Fatima Bello",
    role: "Product Lead",
    company: "CartEdge",
  },
  {
    quote:
      "Nafisat's files are a developer's dream — consistent spacing, named variants, and clear states on everything. We built the screens she handed over with almost no back-and-forth. She understands that a good design is one a team can actually ship.",
    name: "David Okafor",
    role: "Co-founder & CTO",
    company: "Trilio",
  },
  {
    quote:
      "We move fast and Nafisat kept up. She owned tasks from start to finish, communicated progress clearly, and rarely needed prompting. For a small startup with no design team, that level of independence was exactly what we needed.",
    name: "Amara Nwosu",
    role: "Founder",
    company: "Fern & Co.",
  },
  {
    quote:
      "What stood out most was how easy the whole process felt. Nafisat communicates clearly, catches details other people miss, and solves problems before they become problems. The final product looked considered, polished, and just right.",
    name: "James Adewale",
    role: "Project Lead",
    company: "BrightEdge",
  },
  {
    quote:
      "Nafisat took a dense health-tracking feature and made it feel simple to use. She grounded every choice in real feedback, and the result was a flow our users understood immediately. Genuinely collaborative from kickoff to launch.",
    name: "Ngozi Eze",
    role: "Head of Product",
    company: "Kibo Health",
  },
  {
    quote:
      "Even with tight deadlines, Nafisat delivered consistently and never cut corners on quality. She kept me updated, asked the right questions, and turned messy requirements into screens we were proud to ship.",
    name: "Samuel Adeleke",
    role: "Product Manager",
    company: "NovaPay",
  },
];

const Card: React.FC<{ t: Testimonial }> = ({ t }) => (
  <figure className="flex h-full min-h-[220px] w-[280px] flex-col rounded-2xl border border-neutral-200/70 bg-white px-5 py-6 shadow-[0_14px_30px_-28px_rgba(15,23,42,0.35)] sm:w-[320px]">
    <p className="flex items-start gap-1.5 text-[13px] leading-relaxed text-neutral-600">
      <span
        aria-hidden="true"
        className="font-display mt-px text-lg leading-none text-brand"
      >
        &ldquo;
      </span>
      <span>{t.quote}</span>
    </p>
    <figcaption className="mt-auto pt-6">
      <p className="text-[13px] font-semibold text-neutral-950">{t.name}</p>
      <p className="mt-0.5 text-[11px] tracking-wide text-neutral-400">
        {t.role} · {t.company}
      </p>
    </figcaption>
  </figure>
);

const Track: React.FC<{ hidden?: boolean }> = ({ hidden }) => (
  <div className="flex w-max" aria-hidden={hidden || undefined}>
    {TESTIMONIALS.map((t) => (
      <div key={t.name} className="flex shrink-0 pr-4 sm:pr-5">
        <Card t={t} />
      </div>
    ))}
  </div>
);

export const Testimonials: React.FC = () => (
  <section
    id="testimonials"
    aria-label="What clients say"
    className="relative overflow-hidden border-y border-neutral-100 bg-neutral-50/40 pt-[40px] pb-[76px] sm:pt-[72px] sm:pb-[108px]"
  >
    <div className="mx-auto max-w-[76rem] px-4 sm:px-6 lg:px-8">
      <div className="mb-10 flex flex-col items-center text-center sm:mb-12">
        <h2 className="max-w-4xl font-display text-[34px] font-bold leading-[1.08] tracking-[-0.03em] text-neutral-950 sm:text-[42px] lg:text-[50px]">
          What Clients Say
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-500 sm:text-lg">
          A few words from the people I&apos;ve worked with about the process, collaboration,
          and products we built together.
        </p>
      </div>
    </div>

    <div
      className="testimonial-mask no-scrollbar overflow-x-auto overscroll-x-contain"
      tabIndex={0}
      aria-label="Testimonials carousel"
    >
      <div className="testimonial-flow flex w-max hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]">
        <Track />
        <Track hidden />
      </div>
    </div>
  </section>
);