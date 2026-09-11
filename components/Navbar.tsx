"use client";

import Image from "next/image";

import {
  useEffect,
  useState,
} from "react";

import {
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

import type {
  BrandContent,
  NavigationContent,
} from "@/lib/content";

type NavbarProps = {
  brand: BrandContent;
  navigation: NavigationContent;
  playStoreUrl: string;
};

export default function Navbar({
  brand,
  navigation,
  playStoreUrl,
}: NavbarProps) {
  const [open, setOpen] =
    useState(false);

  const [scrolled, setScrolled] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(
        window.scrollY > 12,
      );
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      },
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll,
      );
    };
  }, []);

  const links = [
    ["Home", "#top"],
    [
      navigation.featuresLabel,
      "#capabilities",
    ],
    [
      "Location & Safety",
      "#safety",
    ],
    [
      navigation.faqLabel,
      "#faq",
    ],
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-[#E8E7F0] bg-white/95 shadow-[0_8px_30px_rgba(52,46,100,0.055)] backdrop-blur-xl"
          : "border-transparent bg-white/88 backdrop-blur-lg"
      }`}
    >
      <div className="mx-auto flex min-h-[72px] max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
        {/* Brand */}
        <a
          href="#top"
          className="flex min-w-0 items-center gap-3"
          aria-label={`${brand.name} home`}
          onClick={() =>
            setOpen(false)
          }
        >
          <Image
            src="/app-icon.png"
            alt={`${brand.name} app icon`}
            width={44}
            height={44}
            priority
            className="h-10 w-10 shrink-0 rounded-[12px] object-cover shadow-[0_5px_15px_rgba(90,73,190,0.12)]"
          />

          <div className="min-w-0">
            <p className="hidden max-w-[275px] truncate text-sm font-bold tracking-[-0.025em] text-[#171B2B] md:block">
              {brand.name}
            </p>

            <p className="truncate text-sm font-bold tracking-[-0.025em] text-[#171B2B] md:hidden">
              {brand.shortName}
            </p>

            <p className="hidden text-[9px] font-medium uppercase tracking-[0.13em] text-[#999EAD] md:block">
              {brand.navSubtitle}
            </p>
          </div>
        </a>

        {/* Desktop links */}
        <nav className="hidden items-center gap-1 lg:flex">
          {links.map(
            ([label, href]) => (
              <a
                key={href}
                href={href}
                className="rounded-full px-4 py-2 text-sm font-medium text-[#646B7D] transition-all duration-200 hover:bg-[#F4F1FF] hover:text-[#6553D9]"
              >
                {label}
              </a>
            ),
          )}
        </nav>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-2">
          <a
            href={playStoreUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden min-h-11 items-center gap-2 rounded-full bg-[#6F52E5] px-5 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(111,82,229,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#6247D8] sm:inline-flex"
          >
            {navigation.getAppLabel}

            <ArrowUpRight className="h-4 w-4" />
          </a>

          <button
            type="button"
            onClick={() =>
              setOpen(
                (value) => !value,
              )
            }
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E6E5EE] bg-white text-[#24293A] shadow-sm lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            {open ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-[#ECEAF2] bg-white px-4 pb-5 pt-3 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {links.map(
              ([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() =>
                    setOpen(false)
                  }
                  className="flex min-h-12 items-center rounded-[14px] px-3 text-sm font-medium text-[#50586B] transition hover:bg-[#F5F2FF] hover:text-[#6553D9]"
                >
                  {label}
                </a>
              ),
            )}

            <a
              href={playStoreUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() =>
                setOpen(false)
              }
              className="mt-3 flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#6F52E5] px-5 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(111,82,229,0.18)]"
            >
              {
                navigation.googlePlayLabel
              }

              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}