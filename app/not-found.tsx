import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-16 sm:py-24">
      <Container className="text-center">
        <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-widest uppercase text-neutral-500 bg-neutral-100 rounded-full">
          404 Error
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900">
          Page Not Found
        </h1>
        <p className="mt-4 text-base sm:text-lg text-neutral-600 max-w-md mx-auto leading-relaxed">
          The page or case study you are looking for doesn&apos;t exist or may have been moved.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
          <Button href="/" variant="primary" size="md" fullWidth className="sm:w-auto">
            Return Home
          </Button>
          <Button href="/projects" variant="outline" size="md" fullWidth className="sm:w-auto">
            View Projects
          </Button>
        </div>
      </Container>
    </div>
  );
}
