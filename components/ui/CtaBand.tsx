"use client";

import React from "react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
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
        className="h-5 w-5"
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
        className="h-5 w-5"
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
        className="h-5 w-5"
        fill="currentColor"
        viewBox="0 0 16 16"
        aria-hidden="true"
      >
        <path d="M4.654 3c.461 0 .887.035 1.278.14.39.07.711.216.996.391s.497.426.641.747c.14.32.216.711.216 1.137 0 .496-.106.922-.356 1.242-.215.32-.566.606-.997.817.606.176 1.067.496 1.348.922s.461.957.461 1.563c0 .496-.105.922-.285 1.278a2.3 2.3 0 0 1-.782.887c-.32.215-.711.39-1.137.496a5.3 5.3 0 0 1-1.278.176L0 12.803V3zm-.285 3.978c.39 0 .71-.105.957-.285.246-.18.355-.497.355-.887 0-.216-.035-.426-.105-.567a1 1 0 0 0-.32-.355 1.8 1.8 0 0 0-.461-.176c-.176-.035-.356-.035-.567-.035H2.17v2.31c0-.005 2.2-.005 2.2-.005zm.105 4.193c.215 0 .426-.035.606-.07.176-.035.356-.106.496-.216s.25-.215.356-.39c.07-.176.14-.391.14-.641 0-.496-.14-.852-.426-1.102-.285-.215-.676-.32-1.137-.32H2.17v2.734h2.305zm6.858-.035q.428.427 1.278.426c.39 0 .746-.106 1.032-.286q.426-.32.53-.64h1.74c-.286.851-.712 1.457-1.278 1.848-.566.355-1.243.566-2.06.566a4.1 4.1 0 0 1-1.527-.285 2.8 2.8 0 0 1-1.137-.782 2.85 2.85 0 0 1-.712-1.172c-.175-.461-.25-.957-.25-1.528 0-.531.07-1.032.25-1.493.18-.46.426-.852.747-1.207.32-.32.711-.606 1.137-.782a4 4 0 0 1 1.493-.285c.606 0 1.137.105 1.598.355.46.25.817.532 1.102.958.285.39.496.851.641 1.348.07.496.105.996.07 1.563h-5.15c0 .58.21 1.11.496 1.396m2.24-3.732c-.25-.25-.642-.391-1.103-.391-.32 0-.566.07-.781.176s-.356.25-.496.39a.96.96 0 0 0-.25.497c-.036.175-.07.32-.07.46h3.196c-.07-.526-.25-.882-.497-1.132zm-3.127-3.728h3.978v.957h-3.978z" />
      </svg>
    ),
  },
];

export const CtaBand: React.FC = () => (
  <section className="border-t border-neutral-100 pt-[16px] sm:pt-[48px] lg:pt-[80px] pb-24 sm:pb-32 lg:pb-40 -mt-[50px]">
    <Container className="text-center">
      <Reveal className="flex flex-col items-center text-center">
        <h2 className="mx-auto max-w-4xl font-display text-3xl font-bold leading-[1.1] tracking-[-0.02em] text-neutral-950 sm:text-4xl lg:text-5xl">
          Prefer a casual chemistry call?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-neutral-600 sm:text-xl">
          Book 20 minutes call to see if I&rsquo;m the right mutual fit for your product roadmap.
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
            href={`https://wa.me/2349044539786?text=${encodeURIComponent("Hi, I came across your portfolio and I'd love to discuss an opportunity with you.")}`}
            variant="outline"
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
            className="h-12 w-full border-neutral-200 bg-transparent px-0 text-[14px] text-neutral-800 whitespace-nowrap transition-colors duration-200 hover:border-brand hover:bg-transparent hover:text-brand sm:w-[170px]"
          >
            Let&rsquo;s Chat
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
);
