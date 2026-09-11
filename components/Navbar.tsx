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
        window.scrollY > 10,
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
    [
      "Home",
      "#top",
    ],
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
          ? "border-[#ECEEF3] bg-white/95 shadow-[0_6px_25px_rgba(20,28,54,0.04)] backdrop-blur-xl"
          : "border-transparent bg-white/90 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex min-h-[72px] max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
        {/* Logo / Brand */}
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
            width={42}
            height={42}
            priority
            className="h-10 w-10 shrink-0 rounded-[12px] object-cover"
          />

          <div className="min-w-0">
            {/* Full app name on desktop */}
            <p className="hidden max-w-[270px] truncate text-sm font-semibold tracking-[-0.02em] text-[#111629] md:block">
              {brand.name}
            </p>

            {/* Short name on mobile */}
            <p className="truncate text-sm font-semibold tracking-[-0.02em] text-[#111629] md:hidden">
              {brand.shortName}
            </p>

            <p className="hidden text-[9px] uppercase tracking-[0.14em] text-[#999FAD] md:block">
              {brand.navSubtitle}
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map(
            ([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-sm font-medium text-[#626A7D] transition-colors hover:text-[#111629]"
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
            className="hidden min-h-11 items-center gap-2 rounded-full bg-[#111629] px-5 text-sm font-semibold text-white transition hover:-translate-y-0.5 sm:inline-flex"
          >
            {navigation.getAppLabel}

            <ArrowUpRight className="h-4 w-4" />
          </a>

          {/* Mobile Menu */}
          <button
            type="button"
            onClick={() =>
              setOpen(
                (value) => !value,
              )
            }
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E4E7EE] bg-white text-[#151A2C] lg:hidden"
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

      {/* Mobile Navigation */}
      {open && (
        <div className="border-t border-[#ECEEF3] bg-white px-4 pb-5 pt-3 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col">
            {links.map(
              ([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() =>
                    setOpen(false)
                  }
                  className="flex min-h-12 items-center rounded-xl px-3 text-sm font-medium text-[#4F566B] transition hover:bg-[#F7F8FB]"
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
              className="mt-3 flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#111629] px-5 text-sm font-semibold text-white"
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