"use client";

import React from "react";

interface Tool {
  name: string;
  logo: React.ReactNode;
}

const TOOLS: Tool[] = [
  {
    name: "Figma",
    logo: (
      <svg
        viewBox="0 0 38 57"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        aria-hidden="true"
      >
        <path
          d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z"
          fill="#1ABCFE"
        />
        <path
          d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z"
          fill="#0ACF83"
        />
        <path
          d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z"
          fill="#FF7262"
        />
        <path
          d="M0 9.5C0 4.25329 4.25329 0 9.5 0H19V19H9.5C4.25329 19 0 14.7467 0 9.5Z"
          fill="#F24E1E"
        />
        <path
          d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z"
          fill="#A259FF"
        />
      </svg>
    ),
  },
  {
    name: "Claude",
    logo: (
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        aria-hidden="true"
      >
        <circle cx="20" cy="20" r="20" fill="#D9A066" />
        <g stroke="#FFF8EF" strokeWidth={3.4} strokeLinecap="round">
          <line x1="20" y1="8.5" x2="20" y2="14.2" />
          <line x1="20" y1="25.8" x2="20" y2="31.5" />
          <line x1="10.2" y1="13.9" x2="14.5" y2="17" />
          <line x1="25.5" y1="23" x2="29.8" y2="26.1" />
          <line x1="10.2" y1="26.1" x2="14.5" y2="23" />
          <line x1="25.5" y1="17" x2="29.8" y2="13.9" />
        </g>
      </svg>
    ),
  },
  {
    name: "Canva",
    logo: (
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        aria-hidden="true"
      >
        <circle cx="20" cy="20" r="20" fill="#00C4CC" />
        <path
          d="M27.5 13.2C25 10 21.3 8.6 17.5 9.6 12.4 11 9.9 16.6 12 21c2 4.1 6.9 5.2 10.6 2.6"
          stroke="#FFFFFF"
          strokeWidth={4.2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Antigravity",
    logo: (
      <svg
        viewBox="0 0 105 105"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <clipPath id="ag-gmark">
            <path d="M89.6992 93.695C94.3659 97.195 101.366 94.8617 94.9492 88.445C75.6992 69.7783 79.7825 18.445 55.8659 18.445C31.9492 18.445 36.0325 69.7783 16.7825 88.445C9.78251 95.445 17.3658 97.195 22.0325 93.695C40.1159 81.445 38.9492 59.8617 55.8659 59.8617C72.7825 59.8617 71.6159 81.445 89.6992 93.695Z" />
          </clipPath>
        </defs>
        <g clipPath="url(#ag-gmark)">
          <path
            d="M89.6992 93.695C94.3659 97.195 101.366 94.8617 94.9492 88.445C75.6992 69.7783 79.7825 18.445 55.8659 18.445C31.9492 18.445 36.0325 69.7783 16.7825 88.445C9.78251 95.445 17.3658 97.195 22.0325 93.695C40.1159 81.445 38.9492 59.8617 55.8659 59.8617C72.7825 59.8617 71.6159 81.445 89.6992 93.695Z"
            fill="#3186FF"
          />
          <circle cx="58" cy="36" r="17" fill="#FBBC04" opacity="0.75" />
          <circle cx="36" cy="62" r="16" fill="#00B95C" opacity="0.7" />
          <circle cx="58" cy="66" r="18" fill="#FC413D" opacity="0.7" />
          <circle cx="80" cy="78" r="16" fill="#749BFF" opacity="0.9" />
          <circle cx="80" cy="48" r="14" fill="#FFE432" opacity="0.6" />
        </g>
      </svg>
    ),
  },
  {
    name: "OpenAI",
    logo: (
      <svg
        viewBox="0 0 40 40"
        fill="#10A37F"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        aria-hidden="true"
      >
        <path d="M20 3c5.8 5.3 8.8 10.7 8.4 17.5H20V3z" />
        <path d="M20 3c5.8 5.3 8.8 10.7 8.4 17.5H20V3z" transform="rotate(60 20 20)" />
        <path d="M20 3c5.8 5.3 8.8 10.7 8.4 17.5H20V3z" transform="rotate(120 20 20)" />
        <path d="M20 3c5.8 5.3 8.8 10.7 8.4 17.5H20V3z" transform="rotate(180 20 20)" />
        <path d="M20 3c5.8 5.3 8.8 10.7 8.4 17.5H20V3z" transform="rotate(240 20 20)" />
        <path d="M20 3c5.8 5.3 8.8 10.7 8.4 17.5H20V3z" transform="rotate(300 20 20)" />
        <circle cx="20" cy="20" r="4" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    name: "WordPress",
    logo: (
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        aria-hidden="true"
      >
        <circle cx="20" cy="20" r="20" fill="#21759B" />
        <path
          d="M11.5 15.5l2.8 12 6.2-11 1.4 0 4.8 11 2.8-12"
          stroke="#FFFFFF"
          strokeWidth={3.2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "VS Code",
    logo: (
      <svg
        viewBox="0 0 24 24"
        fill="#007ACC"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        aria-hidden="true"
      >
        <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74l3.36 3.267-3.36 3.267a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.94a1.5 1.5 0 0 0-.85-1.353z" />
      </svg>
    ),
  },
];

export const ToolsSection: React.FC = () => (
  <div className="mt-16 sm:mt-24">
    <div className="mb-10 flex flex-col items-center text-center sm:mb-12">
      <h3 className="font-display text-[20px] font-bold leading-[1.12] tracking-[-0.02em] text-neutral-950 sm:text-[24px] lg:text-[28px]">
        Tools Behind My Work
      </h3>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-500 sm:text-base">
        A modern toolkit that helps me move from ideas to meaningful,
        <br />
        high-quality products.
      </p>
    </div>

    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:gap-5">
      {TOOLS.slice(0, 4).map((tool) => (
        <ToolCard key={tool.name} tool={tool} />
      ))}
    </div>
    <div className="mt-3 flex flex-wrap items-center justify-center gap-3 sm:mt-4 sm:gap-4 lg:gap-5">
      {TOOLS.slice(4).map((tool) => (
        <ToolCard key={tool.name} tool={tool} />
      ))}
    </div>
  </div>
);

const ToolCard: React.FC<{ tool: Tool }> = ({ tool }) => (
  <div className="flex w-[104px] flex-col items-center justify-center rounded-2xl border border-neutral-200/80 bg-white p-4 shadow-[0_10px_24px_-26px_rgba(15,23,42,0.45)] sm:w-[124px] sm:p-5 lg:w-[136px]">
    <div className="flex h-10 w-10 items-center justify-center sm:h-11 sm:w-11">
      {tool.logo}
    </div>
    <span className="mt-3 text-[11px] font-medium text-neutral-600 sm:text-xs">
      {tool.name}
    </span>
  </div>
);