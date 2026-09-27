"use client";

import React from "react";
import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/data/portfolio";

const TIMELINE = [
  {
    number: "01",
    label: "The Beginning",
    text: "My journey into UI/UX started through a friend who introduced me to an opportunity that opened the door to design.",
  },
  {
    number: "02",
    label: "Learning",
    text: "I began learning the fundamentals of UI/UX and became increasingly interested in how design could solve real problems.",
  },
  {
    number: "03",
    label: "Building",
    text: "I started working on real projects, developing my process and learning how to move from ideas and user flows to polished digital experiences.",
  },
  {
    number: "04",
    label: "Today",
    text: "Today, I work across UI/UX and Product Design, creating experiences across SaaS, fintech, AI, e-commerce, and other digital products.",
  },
];

const PILLARS = [
  {
    number: "01",
    label: "Product Thinking",
    text: "Understanding the problem behind the product and connecting design decisions to business goals.",
  },
  {
    number: "02",
    label: "UX Thinking",
    text: "Turning complex requirements and flows into experiences that feel clear and intuitive.",
  },
  {
    number: "03",
    label: "Visual Craft",
    text: "Using typography, hierarchy, spacing, interaction, and visual systems to create polished experiences.",
  },
  {
    number: "04",
    label: "Collaboration",
    text: "Working closely with developers and teams to make sure ideas can move successfully from design to implementation.",
  },
];

const SOCIALS = [
  {
    label: "Email",
    href: `https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email}`,
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nafisat-akinyokun-ab0245329/",
    icon: (
      <svg
        className="h-[18px] w-[18px]"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com/nafeesah8855472",
    icon: (
      <svg
        className="h-[18px] w-[18px]"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
      </svg>
    ),
  },
  {
    label: "Behance",
    href: "https://www.behance.net/akinyoktemilad15",
    icon: (
      <svg
        className="h-[18px] w-[18px]"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M21.333 17.817h-6.155c.128 2.18 1.727 2.969 3.564 2.969 1.373 0 2.49-.497 2.844-1.148h2.443c-.603 2.2-2.724 3.352-5.31 3.352-3.967 0-6.53-2.127-6.53-6.262 0-4.303 2.741-6.384 6.36-6.384 3.616 0 5.779 2.102 5.779 5.934 0 .506-.051 1.063-.145 1.539h-7.897c-.004.798.531 1.572 2.548 1.572 1.222 0 1.543-.463 1.596-1.034l-5.07.674zm-6.399-2.6h5.168c-.143-1.766-1.013-2.411-2.551-2.411-1.645 0-2.505.642-2.617 2.41zM3.5 8.004H9v2.573H3.5v-2.573zm5.89.025c1.457.646 2.342 1.763 2.342 3.326 0 2.437-1.797 3.964-4.386 3.964H0V3.348h7.085c2.504 0 4.387 1.413 4.387 3.727 0 1.16-.444 2.051-1.082 2.954zM7.26 6.229c0-1.254-.768-1.751-1.845-1.751H4.216v3.6h1.385c1.017 0 1.659-.452 1.659-1.849zm1.37 6.645c0-1.295-.88-1.748-2.018-1.748h-1.73v3.606h1.635c1.181 0 2.113-.474 2.113-1.858z" />
      </svg>
    ),
  },
];

const PORTRAIT = "/images/mine.jpeg";

const GALLERY = [
  {
    src: "/images/nel.jpeg",
    alt: "Portrait",
  },
  {
    src: "/images/nofi.jpeg",
    alt: "Workspace detail",
  },
  {
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80",
    alt: "Everyday moments",
  },
  {
    src: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1600&q=80",
    alt: "Travel",
  },
];

export const AboutContent: React.FC = () => {
  return (
    <div>
      {/* Hero */}
      <section className="flex items-center justify-center border-b border-neutral-100 px-4 pt-[20px] pb-20 sm:pt-[52px] sm:pb-28 lg:pt-[84px] lg:pb-36">
        <Container className="text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
              🌍 Based in Lagos, working globally
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mx-auto mt-6 max-w-5xl font-display text-4xl font-bold leading-[1.08] tracking-[-0.02em] text-neutral-950 sm:text-5xl lg:text-6xl">
              I design digital experiences that make complex things feel simple.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-neutral-600 sm:text-xl">
              I’m {siteConfig.name.split(" ")[0]}, a UI/UX &amp; Product Designer focused on turning
              ideas, problems, and business goals into clear, engaging digital experiences.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-8 text-[13px] font-medium uppercase tracking-[0.18em] text-neutral-400">
              UI/UX Designer <span className="mx-2 text-neutral-300">·</span> Product Designer
              <span className="mx-2 text-neutral-300">·</span> Nigeria
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Story / Timeline */}
      <section className="pt-[-26px] sm:pt-[-10px] lg:pt-[6px] pb-16 sm:pb-20 lg:pb-24">        <Container>
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
              My Journey
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-[-0.01em] text-neutral-950 sm:text-4xl lg:text-5xl">
              How I got here.
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 items-stretch gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <figure className="group relative h-full min-h-[420px] w-full overflow-hidden rounded-2xl bg-neutral-100 sm:min-h-[520px] lg:min-h-[540px]">
                <Image
                  src={PORTRAIT}
                  alt="Portrait of Nafisat"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <span className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-neutral-900/5" />
              </figure>
            </Reveal>

            <div className="lg:col-span-7">
              <ol className="space-y-10 border-l border-neutral-200 pl-8 sm:pl-12 lg:pl-16">
                {TIMELINE.map((item, index) => (
                  <Reveal key={item.number} as="li" delay={index * 60}>
                    <div className="relative">
                      <span className="absolute -left-9 top-2.5 h-2 w-2 rounded-full bg-brand sm:-left-[52px] lg:-left-[68px]" />
                      <span className="font-display text-3xl font-bold leading-none text-neutral-200 sm:text-4xl">
                        {item.number}
                      </span>
                      <h3 className="mt-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-neutral-500">
                        {item.label}
                      </h3>
                      <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-neutral-600 sm:text-base">
                        {item.text}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </section>

      {/* How I Think */}
      <section className="border-y border-neutral-100 pt-[4px] sm:pt-[20px] lg:pt-[36px] pb-16 sm:pb-20 lg:pb-24">
        <Container>
          <Reveal className="text-right">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
              How I Think
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-[-0.01em] text-neutral-950 sm:text-4xl lg:text-5xl">
              Beyond the interface.
            </h2>
            <p className="mt-5 ml-auto max-w-2xl text-lg leading-relaxed text-neutral-600">
              I balance user needs, business goals, and technical reality.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 items-stretch gap-12 lg:mt-16 lg:flex lg:flex-row lg:items-stretch lg:gap-16">
            <Reveal className="lg:order-2 lg:min-w-0 lg:flex-1">
              <figure className="group relative h-full min-h-[420px] w-full overflow-hidden rounded-2xl bg-neutral-100 sm:min-h-[520px] lg:min-h-[540px]">
                <Image
                  src={GALLERY[1].src}
                  alt={GALLERY[1].alt}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <span className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-neutral-900/5" />
              </figure>
            </Reveal>

            <div className="lg:order-1 lg:w-[calc((100%_-_4rem)_*_5_/_12_+_2.5rem)]">
              <div className="mt-10 space-y-10 border-l border-neutral-200 pl-8 sm:pl-12 lg:border-l-0 lg:border-r lg:pl-0 lg:pr-12">
                {PILLARS.map((pillar, index) => (
                  <Reveal key={pillar.number} delay={index * 60}>
                    <div className="relative">
                      <span className="absolute -left-9 top-2.5 h-2 w-2 rounded-full bg-brand sm:-left-[52px] lg:left-auto lg:-right-[52px]" />
                      <span className="font-display text-3xl font-bold leading-none text-neutral-200 sm:text-4xl">
                        {pillar.number}
                      </span>
                      <h3 className="mt-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-neutral-500">
                        {pillar.label}
                      </h3>
                      <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-neutral-600 sm:text-base">
                        {pillar.text}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Personal Image Gallery */}
      <section className="pt-[20px] sm:pt-[52px] lg:pt-[68px] pb-20 sm:pb-28 lg:pb-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Reveal className="text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                Personal Gallery
              </span>
              <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-bold tracking-[-0.01em] text-neutral-950 sm:text-4xl lg:text-5xl">
                Beyond the pixels.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-neutral-600">
                A few moments, places, and things that make me who I am outside of design.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 lg:mt-20 lg:grid-cols-12 lg:gap-6">
            <Reveal className="lg:col-span-7">
              <figure className="group relative aspect-[4/3] h-full w-full overflow-hidden rounded-2xl lg:w-[calc(100%-1.25rem)] sm:min-h-[420px]">
                <Image
                  src={GALLERY[0].src}
                  alt={GALLERY[0].alt}
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <span className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-neutral-900/5" />
              </figure>
            </Reveal>

            <div className="grid grid-cols-1 gap-5 lg:col-span-5 lg:gap-6">
              <Reveal className="h-full">
                <figure className="group relative aspect-[16/10] h-full w-full overflow-hidden rounded-2xl lg:aspect-[4/3]">
                  <Image
                    src={GALLERY[1].src}
                    alt={GALLERY[1].alt}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <span className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-neutral-900/5" />
                </figure>
              </Reveal>
              <Reveal className="h-full" delay={80}>
                <figure className="group relative aspect-[16/10] h-full w-full overflow-hidden rounded-2xl lg:aspect-[4/3]">
                  <Image
                    src={GALLERY[2].src}
                    alt={GALLERY[2].alt}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <span className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-neutral-900/5" />
                </figure>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
      <section className="border-t border-neutral-100 pt-[16px] sm:pt-[48px] lg:pt-[80px] pb-24 sm:pb-32 lg:pb-40">
        <Container className="text-center">
          <Reveal className="flex flex-col items-center text-center">
            <h2 className="mx-auto max-w-4xl font-display text-3xl font-bold leading-[1.1] tracking-[-0.02em] text-neutral-950 sm:text-4xl lg:text-5xl">
              Have a problem worth solving?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-neutral-600 sm:text-xl">
              I’d love to hear about your next product, idea, or challenge.
            </p>
            <div className="mx-auto mt-10 flex w-full max-w-xl flex-col items-center justify-center gap-4 sm:mt-12 sm:flex-row">
              <Button
                href="https://calendly.com/nakinyokun/30min?back=1&month=2026-09"
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                className="h-12 w-full px-0 text-[14px] sm:w-[170px]"
              >
                Book a Call
              </Button>
              <Button
                href={`mailto:${siteConfig.email}`}
                variant="outline"
                size="lg"
                className="h-12 w-full border-neutral-200 bg-transparent px-0 text-[14px] text-neutral-800 whitespace-nowrap transition-colors duration-200 hover:border-brand hover:bg-transparent hover:text-brand sm:w-[170px]"
              >
                Send a Message
              </Button>
            </div>

            <div className="mt-12 flex items-center justify-center gap-3 sm:mt-14 sm:gap-4">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100 text-neutral-900 ring-1 ring-neutral-200/70 transition-colors duration-200 hover:bg-white hover:text-brand hover:ring-brand/40"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
};
