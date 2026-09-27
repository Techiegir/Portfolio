import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import {
  WORK_COLLECTIONS,
  SHOWCASE_IMAGES,
  DASHBOARDS,
  SOULMATES_DESIGNS,
} from "@/data/workCollections";

interface WorkPageProps {
  params: { slug: string };
}

export function generateMetadata({ params }: WorkPageProps): Metadata {
  const collection = WORK_COLLECTIONS.find((c) => c.slug === params.slug);
  if (!collection) return {};
  return {
    title: collection.name,
    description: collection.blurb,
  };
}

export default function WorkCollectionPage({ params }: WorkPageProps) {
  const collection = WORK_COLLECTIONS.find((c) => c.slug === params.slug);
  if (!collection) notFound();

  const count =
    collection.kind === "visual"
      ? SHOWCASE_IMAGES.length
      : collection.kind === "landing"
        ? DASHBOARDS.length
        : SOULMATES_DESIGNS.length;

  return (
    <div className="py-10 sm:py-16">
      <Container>
        <Link
          href="/#showcase"
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 transition-colors hover:text-brand"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Beyond the Main Work
        </Link>

        <div className="mt-8 sm:mt-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-neutral-400">
            Experiments · Side work
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-[30px] font-bold leading-[1.1] tracking-[-0.03em] text-neutral-950 sm:text-[42px]">
            {collection.name}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-500 sm:text-lg">
            {collection.blurb} — {count} designs.
          </p>
        </div>

        {collection.kind === "visual" && (
          <div className="mt-12 grid grid-cols-2 gap-4 sm:mt-16 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
            {SHOWCASE_IMAGES.map((src, i) => (
              <div
                key={src}
                className="relative aspect-[1125/2436] overflow-hidden rounded-3xl border border-neutral-100 bg-gradient-to-b from-neutral-100 to-neutral-200 p-[7px] shadow-[0_20px_45px_-25px_rgba(15,23,42,0.4)] ring-1 ring-black/5"
              >
                <Image
                  src={src}
                  alt={`Mobile UI design ${i + 1}`}
                  fill
                  sizes="(min-width: 1024px) 280px, (min-width: 768px) 220px, 160px"
                  quality={70}
                  priority={i < 6}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        )}

        {collection.kind === "landing" && (
          <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
            {DASHBOARDS.map((src, i) => (
              <div
                key={src}
                className="relative aspect-[6/5] overflow-hidden rounded-2xl bg-white shadow-[0_20px_45px_-25px_rgba(15,23,42,0.4)] ring-1 ring-black/5"
              >
                <Image
                  src={src}
                  alt={`Dashboard design ${i + 1}`}
                  fill
                  sizes="(min-width: 1024px) 360px, (min-width: 768px) 340px, 100vw"
                  quality={70}
                  priority={i < 2}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        )}

        {collection.kind === "soulmates" && (
          <div className="mt-12 space-y-12 sm:mt-16">
            {SOULMATES_DESIGNS.map((design, i) => (
              <div
                key={design.src}
                className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-[0_30px_60px_-35px_rgba(15,23,42,0.45)] ring-1 ring-black/5"
              >
                <Image
                  src={design.src}
                  alt={`Soulmates design ${i + 1}`}
                  width={design.width}
                  height={design.height}
                  quality={55}
                  priority={i < 1}
                  className="h-auto w-full object-contain"
                />
              </div>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}