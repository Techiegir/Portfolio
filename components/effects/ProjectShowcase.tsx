"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  WORK_COLLECTIONS,
  SHOWCASE_IMAGES,
  DASHBOARDS,
  SOULMATES_DESIGNS,
} from "@/data/workCollections";

type Kind = "landing" | "soulmates" | "experiment" | "shop" | "visual";

interface CardData {
  name: string;
  blurb: string;
  kind: Kind;
  accent: string;
  soft: string;
  href: string;
}

interface SceneProps {
  accent: string;
  soft: string;
}

const CARDS: CardData[] = WORK_COLLECTIONS.map(
  ({ name, blurb, kind, accent, soft, href }) => ({
    name,
    blurb,
    kind,
    accent,
    soft,
    href,
  })
);

const SwappingNumber: React.FC<{
  from: string;
  to: string;
  duration?: number;
  delay?: number;
}> = ({ from, to, duration = 5, delay = 0 }) => (
  <span className="relative inline-flex tabular-nums">
    <span>{from}</span>
    <span
      className="lw-anim absolute inset-0"
      style={{ animation: `lw-fade ${duration}s ease-in-out infinite ${delay}s` }}
    >
      {to}
    </span>
  </span>
);

const Chrome: React.FC = () => (
  <div className="flex items-center gap-1.5 bg-neutral-100 px-3 py-2">
    <span className="h-2 w-2 rounded-full bg-[#fca5a5]" />
    <span className="h-2 w-2 rounded-full bg-[#fcd34d]" />
    <span className="h-2 w-2 rounded-full bg-[#86efac]" />
    <span className="ml-2 h-3 w-1/2 rounded-full bg-white/90 ring-1 ring-black/5 sm:w-1/3" />
  </div>
);

const DASH_SPEED = 0.3;

const LandingScene: React.FC<SceneProps> = () => {
  const progressRef = useRef(0);
  const total = DASHBOARDS.length;
  const [, setTick] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let prev = performance.now();
    const step = (now: number) => {
      const dt = Math.min((now - prev) / 1000, 0.05);
      prev = now;
      progressRef.current += dt * DASH_SPEED;
      setTick((v) => v + 1);
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  const t = progressRef.current;

  return (
    <div className="flex h-full w-full flex-col">
      <Chrome />
      <div
        className="relative flex-1 overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #172554 0%, #0f172a 100%)",
        }}
      >
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3"
          style={{
            background:
              "radial-gradient(65% 100% at 50% 100%, rgba(30,64,175,0.4) 0%, transparent 72%)",
            zIndex: 1,
          }}
        />

        {DASHBOARDS.map((src, i) => {
          let d = ((i - t) % total + total) % total;
          if (d > total / 2) d -= total;
          const visible = d > -1 && d < 1;

          return (
            <div
              key={i}
              className="absolute inset-0 flex items-center justify-center p-3 sm:p-4"
              style={{
                transform: `translateX(${d * 100}%)`,
                opacity: visible ? 1 : 0,
                zIndex: 20 - Math.abs(d) * 8,
                willChange: "transform",
              }}
            >
              <div className="relative flex h-full w-full flex-col overflow-hidden rounded-xl border border-white/10 bg-neutral-950/70 shadow-[0_45px_90px_-35px_rgba(2,8,32,0.95),0_18px_40px_-18px_rgba(2,8,32,0.7)] backdrop-blur">
                <div className="relative z-10 flex h-9 shrink-0 items-center gap-2 border-b border-white/10 bg-neutral-950/80 px-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#f87171]/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#fbbf24]/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#34d399]/80" />
                  <span className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[9px] font-medium tracking-wide text-white/50">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
                    insights.dashboard / reports
                  </span>
                </div>
                <div className="relative flex-1 overflow-hidden bg-slate-950 p-2 sm:p-3">
                  <div
                    className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                    style={{
                      width: "70%",
                      aspectRatio: "1",
                      background:
                        "radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(37,99,235,0.12) 45%, transparent 72%)",
                    }}
                  />
                  <div className="relative h-full w-full">
                    <Image
                      src={src}
                      alt={`Dashboard ${i + 1}`}
                      fill
                      sizes="600px"
                      quality={95}
                      className="object-contain drop-shadow-[0_14px_30px_rgba(2,8,32,0.55)]"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const SoulmatesScene: React.FC<SceneProps> = () => (
  <div
    className="relative flex h-full w-full items-center justify-center overflow-hidden"
    style={{
      background:
        "radial-gradient(120% 120% at 25% 0%, #8b2243 0%, #54172f 50%, #21121c 100%)",
    }}
  >
    <div className="relative h-full w-full overflow-hidden px-[50px] py-4 sm:py-5">
      <div
        className="lw-anim relative w-full"
        style={{ animation: "lw-scroll-y 10s ease-in-out infinite" }}
      >
        {[...SOULMATES_DESIGNS, ...SOULMATES_DESIGNS].map((d, i) => (
          <div
            key={i}
            className="relative w-full"
            aria-hidden={i >= SOULMATES_DESIGNS.length}
          >
            <Image
              src={d.src}
              alt={`Soulmates design ${(i % SOULMATES_DESIGNS.length) + 1}`}
              width={d.width}
              height={d.height}
              quality={80}
              className="h-auto w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ExperimentScene: React.FC<SceneProps> = ({ accent }) => {
  const words = ["PLAY", "FORM", "MOTION", "LIGHT", "RHYTHM"];
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-neutral-50">
      <span
        className="lw-anim pointer-events-none h-44 w-44 rounded-2xl border-2 sm:h-56 sm:w-56"
        style={{ borderColor: accent, opacity: 0.65, animation: "lw-spin 26s linear infinite" }}
      />
      <span
        className="lw-anim pointer-events-none absolute h-36 w-36 rounded-full border-2 sm:h-44 sm:w-44"
        style={{ borderColor: accent, opacity: 0.3, animation: "lw-spin 18s linear infinite reverse" }}
      />
      <span
        className="lw-anim absolute left-[30%] top-[26%] h-3 w-3 rounded-full sm:h-4 sm:w-4"
        style={{ background: accent, animation: "lw-float-b 7s ease-in-out infinite" }}
      />
      <span className="absolute inset-x-0 bottom-0 overflow-hidden">
        <div
          className="lw-anim flex w-max items-center gap-8 py-3.5 text-lg font-bold tracking-[0.25em] sm:text-xl"
          style={{ color: accent, animation: "lw-scroll-x 16s linear infinite" }}
        >
          {[0, 1].map((half) => (
            <div key={half} className="flex shrink-0 items-center gap-8 pr-8" aria-hidden={half === 1}>
              {words.map((w) => (
                <span key={w} className="flex items-center gap-8">
                  <span className="whitespace-nowrap">{w}</span>
                  <span className="text-neutral-300">●</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </span>
      <span className="absolute bottom-4 right-4 text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-400">
        No. 03
      </span>
    </div>
  );
};

const ShopScene: React.FC<SceneProps> = ({ accent, soft }) => {
  const products = [
    { a: "#fecdd3", b: "#fb7185", price: "$89" },
    { a: "#fde68a", b: "#f59e0b", price: "$128" },
    { a: "#bbf7d0", b: "#22c55e", price: "$64" },
    { a: "#c7d2fe", b: "#6366f1", price: "$210" },
    { a: "#a5f3fc", b: "#06b6d4", price: "$96" },
  ];

  return (
    <div
      className="relative flex h-full w-full flex-col items-center justify-center gap-5 overflow-hidden p-5 sm:p-6"
      style={{ background: soft }}
    >
      <div className="absolute inset-x-0 top-0 h-full">
        <div className="flex h-full items-center overflow-hidden">
          <div className="lw-anim flex w-max items-center gap-4" style={{ animation: "lw-scroll-x 24s linear infinite" }}>
            {[0, 1].map((half) => (
              <div key={half} className="flex shrink-0 items-center gap-4 pr-4" aria-hidden={half === 1}>
                {products.map((p, i) => (
                  <div
                    key={p.price + i}
                    className="w-24 shrink-0 overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-black/5 sm:w-28"
                  >
                    <div className="relative aspect-square">
                      <div className="absolute inset-0" style={{ background: p.a }} />
                      <div
                        className="lw-anim absolute inset-0"
                        style={{ background: p.b, animation: `lw-fade 7s ease-in-out infinite ${i * 0.4}s` }}
                      />
                    </div>
                    <div className="flex items-center justify-between px-2.5 py-2">
                      <span className="h-1.5 w-1/2 rounded-full bg-neutral-200" />
                      <span className="text-[10px] font-bold text-neutral-800">{p.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-xs rounded-2xl bg-white/90 p-3.5 shadow-xl ring-1 ring-black/5 backdrop-blur">
        <div className="flex items-center justify-between text-xs font-semibold text-neutral-900">
          <span>Cart</span>
          <span>
            <SwappingNumber from="3" to="5" duration={8} />
          </span>
        </div>
        <div className="mt-2 flex items-center justify-between border-t border-neutral-100 pt-2.5">
          <span className="text-[10px] uppercase tracking-[0.18em] text-neutral-400">Total</span>
          <span className="text-sm font-bold text-neutral-900">
            <SwappingNumber from="$197" to="$286" duration={8} />
          </span>
        </div>
        <span
          className="relative mt-3 block overflow-hidden rounded-full py-2 text-center text-[11px] font-semibold"
          style={{ background: accent, color: "#fff" }}
        >
          <span className="invisible">Add to bag</span>
          <span className="absolute inset-0 flex items-center justify-center">Add to bag</span>
          <span
            className="lw-anim absolute inset-0 flex items-center justify-center"
            style={{ background: "#fff", color: accent, animation: "lw-fade 8s ease-in-out infinite" }}
          >
            Added ✓
          </span>
        </span>
      </div>
    </div>
  );
};

const SHOWCASE_SPEED = 0.34;
const SHOWCASE_SPACING = 26;

const SHOWCASE_SCALE = [1, 0.72, 0.5, 0.34];
const SHOWCASE_OPACITY = [1, 0.92, 0.6, 0.12];
const SHOWCASE_ROT = [0, 9, 17, 24];

const showcaseBlend = (d: number) => {
  const k = Math.min(Math.abs(d), 3);
  const i = Math.min(Math.floor(k), 2);
  const f = k - i;
  return {
    scale: SHOWCASE_SCALE[i] + (SHOWCASE_SCALE[i + 1] - SHOWCASE_SCALE[i]) * f,
    opacity: SHOWCASE_OPACITY[i] + (SHOWCASE_OPACITY[i + 1] - SHOWCASE_OPACITY[i]) * f,
    rot: SHOWCASE_ROT[i] + (SHOWCASE_ROT[i + 1] - SHOWCASE_ROT[i]) * f,
  };
};

const VisualScene: React.FC<SceneProps> = () => {
  const progressRef = useRef(0);
  const total = SHOWCASE_IMAGES.length;
  const [, setTick] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let prev = performance.now();
    const step = (now: number) => {
      const dt = Math.min((now - prev) / 1000, 0.05);
      prev = now;
      progressRef.current += dt * SHOWCASE_SPEED;
      setTick((v) => v + 1);
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  const t = progressRef.current;

  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{
        background: "linear-gradient(150deg, #1e3a8a 0%, #0f172a 100%)",
        perspective: "1200px",
      }}
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: "58%",
          aspectRatio: "1",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.35) 0%, rgba(37,99,235,0.14) 45%, transparent 72%)",
          zIndex: 1,
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3"
        style={{
          background:
            "radial-gradient(60% 100% at 50% 100%, rgba(30,64,175,0.35) 0%, transparent 70%)",
          zIndex: 1,
        }}
      />

      {SHOWCASE_IMAGES.map((src, i) => {
        let d = ((i - t) % total + total) % total;
        if (d > total / 2) d -= total;

        const p = showcaseBlend(d);
        const rot = d > 0 ? -p.rot : p.rot;

        return (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${50 + d * SHOWCASE_SPACING}%`,
              top: "50%",
              width: "calc(24% + 64px)",
              opacity: p.opacity,
              zIndex: 40 - Math.abs(d) * 10,
              transform: `translate(-50%, -50%) scale(${p.scale}) rotateY(${rot}deg)`,
              transformOrigin: "50% 50%",
              willChange: "transform, opacity",
            }}
          >
            <div className="relative overflow-hidden rounded-[16px] border border-white/10 bg-gradient-to-b from-neutral-700 via-neutral-900 to-neutral-950 p-[7px] shadow-[0_35px_70px_-25px_rgba(2,8,32,0.95),0_10px_28px_-10px_rgba(2,8,32,0.7)]">
              <span className="pointer-events-none absolute left-1/2 top-[9px] z-20 h-[5px] w-[5px] -translate-x-1/2 rounded-full bg-neutral-900 ring-1 ring-white/10" />
              <div
                className="relative overflow-hidden rounded-[10px] bg-neutral-950"
                style={{ aspectRatio: "1125 / 2436" }}
              >
                <Image
                  src={src}
                  alt={`UI design ${i + 1}`}
                  fill
                  sizes="300px"
                  quality={95}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const SCENES: Record<Kind, React.FC<SceneProps>> = {
  landing: LandingScene,
  soulmates: SoulmatesScene,
  experiment: ExperimentScene,
  shop: ShopScene,
  visual: VisualScene,
};

const HoverArrow: React.FC = () => (
  <span className="absolute right-4 top-4 z-20 flex h-12 w-12 translate-y-1 items-center justify-center rounded-full bg-neutral-950 text-white opacity-0 shadow-lg transition-all duration-500 group-hover/card:translate-y-0 group-hover/card:scale-110 group-hover/card:bg-brand group-hover/card:opacity-100 sm:right-5 sm:top-5 sm:h-14 sm:w-14">
    <svg
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  </span>
);

const ProjectCard: React.FC<{ data: CardData; index: number }> = ({ data, index }) => {
  const Scene = SCENES[data.kind];
  return (
    <Link
      href={data.href}
      aria-label={`${data.name} — creative experiments`}
      className="lw-enter group/card relative flex scroll-mt-28 flex-col"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="relative aspect-[5/6] w-full overflow-hidden rounded-[1.75rem] bg-white shadow-[0_30px_60px_-45px_rgba(15,23,42,0.45)] ring-1 ring-black/5 transition-all duration-500 group-hover/card:scale-[1.02] group-hover/card:shadow-[0_45px_90px_-45px_rgba(15,23,42,0.6)] sm:aspect-[5/4]">
        <Scene accent={data.accent} soft={data.soft} />
        <HoverArrow />
      </div>

      <div className="mt-5 flex items-start justify-between gap-6 px-1">
        <div className="min-w-0">
          <h3 className="font-display text-xl font-bold tracking-tight text-neutral-950 sm:text-2xl">
            {data.name}
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-neutral-500">{data.blurb}</p>
        </div>
        <span className="mt-1 inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-neutral-700 transition-colors duration-300 group-hover/card:text-brand">
          View All
          <svg
            className="h-4 w-4 transition-transform duration-300 group-hover/card:translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
};

const AboutCard: React.FC = () => (
  <div
    className="lw-enter group/card relative flex scroll-mt-28 flex-col"
    style={{ transitionDelay: "400ms" }}
  >
    <div className="relative aspect-[5/6] overflow-hidden rounded-[1.75rem] bg-neutral-950 shadow-[0_30px_60px_-45px_rgba(15,23,42,0.6)] ring-1 ring-black/10 transition-all duration-500 group-hover/card:scale-[1.02] group-hover/card:shadow-[0_45px_90px_-45px_rgba(15,23,42,0.75)] sm:aspect-[5/4]">
      <Image
        src="/images/mine.jpeg"
        alt="Nafisat Akinyokun, product designer"
        fill
        sizes="(min-width: 640px) 560px, 100vw"
        quality={90}
        className="object-cover object-top transition-transform duration-700 group-hover/card:scale-[1.03]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/25 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-6 p-6 sm:flex-row sm:items-end sm:justify-between sm:p-8">
        <Link href="/about" aria-label="Meet the designer" className="block text-left">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/70">
            Meet the designer
          </p>
          <p className="mt-3 font-display text-xl font-bold leading-[1.15] tracking-tight text-white sm:text-[24px]">
            Hi, I know you hardly see a{" "}
            <span className="italic text-brand">beauty</span> Product Designer.
          </p>
        </Link>
        <Link
          href="/about"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-xs font-semibold text-white backdrop-blur transition-colors duration-300 group-hover/card:bg-brand"
        >
          Get to know me
          <svg
            className="h-4 w-4 transition-transform duration-500 group-hover/card:translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  </div>
);

export const ProjectShowcase: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = wrapperRef.current;
    if (!root) return;
    const targets = root.querySelectorAll(".lw-enter");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="showcase"
      aria-label="More experiments and creative work"
      className="relative overflow-hidden border-y border-neutral-100 bg-neutral-50/40 pt-[40px] pb-[60px] sm:pt-[72px] sm:pb-[92px]"
    >
      <div className="mx-auto max-w-[76rem] px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-center text-center sm:mb-20">
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-neutral-400">
            Experiments · Side work
          </p>
          <h2 className="mt-5 max-w-4xl font-display text-[34px] font-bold leading-[1.08] tracking-[-0.03em] text-neutral-950 sm:text-[42px] lg:text-[50px]">
            Beyond the Main Work
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-500 sm:text-lg">
            A few ideas, experiments, and creative pieces from beyond my main case studies.
          </p>
        </div>

        <div
          ref={wrapperRef}
          className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-7"
        >
          {CARDS.map((card, index) => (
            <ProjectCard key={card.name} data={card} index={index} />
          ))}
          <AboutCard />
        </div>

        <p className="mt-12 text-center text-xs uppercase tracking-[0.25em] text-neutral-400 sm:mt-16">
          More experiments to come
        </p>
      </div>
    </section>
  );
};