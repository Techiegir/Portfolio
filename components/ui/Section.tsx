import React from "react";
import { Container } from "./Container";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  badge?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
  id,
  badge,
  title,
  subtitle,
  className = "",
  containerClassName = "",
  children,
  ...props
}) => {
  return (
    <section
      id={id}
      className={`py-12 sm:py-16 lg:py-20 ${className}`}
      {...props}
    >
      <Container className={containerClassName}>
        {(badge || title || subtitle) && (
          <div className="mb-8 sm:mb-12 max-w-3xl">
            {badge && (
              <span className="inline-block px-3 py-1 mb-3 text-xs font-medium tracking-wider uppercase text-neutral-600 bg-neutral-100 rounded-full border border-neutral-200">
                {badge}
              </span>
            )}
            {title && (
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-900">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-3 text-base sm:text-lg text-neutral-600 leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
};
