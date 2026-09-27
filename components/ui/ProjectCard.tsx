import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, priority = false }) => {
  return (
    <article className="group w-full">
      {/* Clean image frame */}
      <Link
        href={`/projects#${project.slug}`}
        aria-label={`Explore ${project.title}`}
        className="relative block h-[340px] sm:h-[440px] w-full overflow-hidden rounded-xl bg-neutral-100"
      >
        <Image
          src={project.imageUrl}
          alt={`Preview of ${project.title}`}
          fill
          sizes="100vw"
          priority={priority}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </Link>

      {/* Project info */}
      <div className="mt-5 sm:mt-6">
        <h3 className="font-display text-xl font-semibold tracking-tight text-neutral-950 sm:text-2xl">
          {project.title}
        </h3>

        <div className="mt-2 flex flex-col gap-3 sm:mt-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
          <p className="text-[13px] leading-relaxed text-neutral-500 sm:w-[65%] sm:max-w-lg sm:text-[15px]">
            {project.tagline || project.description}
          </p>

          <Link
            href={`/projects#${project.slug}`}
            className="group/view inline-flex shrink-0 items-center gap-1.5 self-start text-sm font-semibold text-neutral-700 transition-colors duration-300 hover:text-brand sm:self-end"
          >
            <span>View Project</span>
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover/view:translate-x-1"
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
    </article>
  );
};