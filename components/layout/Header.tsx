"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navItems, siteConfig } from "@/data/portfolio";
import { Button } from "@/components/ui/Button";

const sparklePath =
  "M12 2c.5 4.6 2.6 6.7 9 7-6.4.3-8.5 2.4-9 7-.5-4.6-2.6-6.7-9-7 6.4-.3 8.5-2.4 9-7z";

const ThemeIcon: React.FC<{ dark: boolean }> = ({ dark }) =>
  dark ? (
    <svg
      className="theme-icon-sparkle h-4 w-4 text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.9)]"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d={sparklePath} />
    </svg>
  ) : (
    <svg
      className="h-4 w-4 text-amber-500"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d={sparklePath} />
    </svg>
  );

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [avatarFailed, setAvatarFailed] = useState(false);
  const [dark, setDark] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const nextDark = !root.classList.contains("dark");
    root.classList.add("theme-toggle");
    if (nextDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    try {
      localStorage.setItem("theme", nextDark ? "dark" : "light");
    } catch (e) {
      /* ignore storage errors */
    }
    setDark(nextDark);
    window.setTimeout(() => {
      root.classList.remove("theme-toggle");
    }, 450);
  };

  // Close mobile menu whenever pathname changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Close the mobile menu with the Escape key
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileMenuOpen]);

  const showAvatarImage = Boolean(siteConfig.profileImage) && !avatarFailed;

  return (
    <>
      <header className="fixed inset-x-4 top-[30px] z-50 rounded-full border border-white/[0.12] bg-white/[0.08] shadow-[0_4px_18px_-6px_rgba(0,0,0,0.12)] backdrop-blur-xl sm:inset-x-8 lg:inset-x-[50px]">
      <div className="mx-auto w-full max-w-7xl px-3 sm:px-4 lg:px-5">
        <div className="flex h-14 items-center justify-between gap-3 sm:h-16">
          {/* Profile / Branding */}
          <Link
            href="/"
            prefetch
            className="group flex min-w-0 shrink items-center gap-2 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 sm:gap-3"
            aria-label={`${siteConfig.name} — ${siteConfig.role}`}
          >
            <span className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-sm font-semibold text-white ring-1 ring-neutral-900/10">
              {showAvatarImage ? (
                <Image
                  src={siteConfig.profileImage}
                  alt={`${siteConfig.name} profile`}
                  fill
                  sizes="40px"
                  className="object-cover"
                  onError={() => setAvatarFailed(true)}
                />
              ) : (
                siteConfig.name.charAt(0)
              )}
            </span>
            <span className="flex min-w-0 flex-col leading-tight">
              <span className="max-[430px]:text-base whitespace-nowrap text-lg font-extrabold tracking-tight text-neutral-900 sm:text-xl">
                {siteConfig.name}
              </span>
              <span className="mt-0.5 hidden text-xs font-normal text-neutral-500 sm:block sm:text-sm">
                {siteConfig.role}
              </span>
            </span>
          </Link>

          {/* Desktop Navigation + CTA */}
          <div className="hidden items-center lg:flex">
            <nav className="flex items-center gap-0.5 lg:gap-1" aria-label="Main">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    prefetch
                    className={`relative rounded-md px-2 py-2 text-sm transition-colors ${
                      isActive
                        ? "font-semibold text-neutral-900"
                        : "font-normal text-neutral-500 hover:text-neutral-700"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute inset-x-2 -bottom-[1px] h-[2px] rounded-full bg-brand" />
                    )}
                  </Link>
                );
              })}
            </nav>
            <div className="ml-3 flex items-center gap-3 lg:ml-4">
              <div className="h-6 w-px bg-neutral-200" aria-hidden="true" />
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
                title={dark ? "Switch to light mode" : "Switch to dark mode"}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-900/10 bg-white/60 text-neutral-700 transition-colors hover:border-neutral-900/10 hover:bg-white hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              >
                <ThemeIcon dark={dark} />
              </button>
              <Button
                href={`https://wa.me/2349044539786?text=${encodeURIComponent("Hi, I came across your portfolio and I'd love to discuss an opportunity with you.")}`}
                variant="primary"
                size="md"
                target="_blank"
                rel="noopener noreferrer"
                className="!bg-neutral-900 !text-white hover:!bg-neutral-800 shadow-[0_3px_12px_-3px_rgba(0,0,0,0.4)]"
              >
                Get in Touch
              </Button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
              title={dark ? "Switch to light mode" : "Switch to dark mode"}
              className="hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-900/10 bg-white/60 text-neutral-700 transition-colors hover:bg-white hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              <ThemeIcon dark={dark} />
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-neutral-700 transition-colors hover:bg-brand-subtle hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle main menu"
            >
              {mobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>

    {/* Mobile Menu Dropdown */}
    {mobileMenuOpen && (
      <>
        <div
          aria-hidden="true"
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 z-30 bg-transparent"
        />
        <div className="fixed inset-x-4 bottom-4 top-[92px] z-40 overflow-y-auto rounded-[1.5rem] border border-neutral-900/[0.08] bg-white px-4 py-6 sm:inset-x-8 sm:top-[100px] sm:rounded-3xl lg:inset-x-[50px]">
        <nav className="flex flex-col gap-1" aria-label="Main">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                prefetch
                onClick={() => setMobileMenuOpen(false)}
                className={`relative rounded-lg px-4 py-3 text-base transition-colors ${
                  isActive
                    ? "bg-brand-subtle font-semibold text-neutral-900"
                    : "font-normal text-neutral-600 hover:bg-neutral-50"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <button
          type="button"
          onClick={toggleTheme}
          className="mt-6 flex w-full items-center gap-3 rounded-xl bg-neutral-50 px-4 py-3 text-sm font-medium text-neutral-700 transition-colors hover:bg-brand-subtle hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        >
          <ThemeIcon dark={dark} />
          {dark ? "Switch to light mode" : "Switch to dark mode"}
        </button>
        <div className="mt-6 border-t border-neutral-200 pt-4">
          <Button
            href={`https://wa.me/2349044539786?text=${encodeURIComponent("Hi, I came across your portfolio and I'd love to discuss an opportunity with you.")}`}
            variant="primary"
            fullWidth
            size="md"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="!bg-neutral-900 !text-white hover:!bg-neutral-800 shadow-[0_3px_12px_-3px_rgba(0,0,0,0.4)]"
          >
            Get in Touch
          </Button>
        </div>
      </div>
      </>
    )}
  </>
  );
};