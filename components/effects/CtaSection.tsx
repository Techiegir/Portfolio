"use client";

import React from "react";
import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/portfolio";

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

export const CtaSection: React.FC = () => (
  <section
    id="contact"
    aria-label="Contact"
    className="relative overflow-hidden border-y border-neutral-100 bg-neutral-50 pt-16 pb-24 sm:pt-20 sm:pb-32 lg:pt-24 lg:pb-40"
  >
    <div className="mx-auto flex max-w-[76rem] flex-col items-center px-4 text-center sm:px-6 lg:px-8">
      <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-white shadow-[0_4px_14px_-2px_rgba(15,23,42,0.25)] sm:h-20 sm:w-20">
        <Image
          src="/images/portrait.jpg"
          alt={`${siteConfig.name} portrait`}
          fill
          sizes="80px"
          className="object-cover"
        />
      </div>

      <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-[13px] font-medium text-neutral-600">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        Available for freelance / full-time
      </div>

      <h2 className="mx-auto mt-8 max-w-4xl font-display text-[26px] font-bold leading-[1.1] tracking-[-0.03em] text-neutral-950 sm:text-[34px] lg:text-[44px]">
        Turning complex problems into simple, thoughtful digital experiences.
      </h2>

      <div className="mt-10 flex w-full max-w-xl flex-col items-center justify-center gap-4 sm:mt-12 sm:flex-row">
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
    </div>
  </section>
);