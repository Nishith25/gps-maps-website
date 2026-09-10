"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  ArrowUpRight,
  Menu,
  Navigation2,
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
        window.scrollY > 40,
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
      navigation.featuresLabel,
      "#capabilities",
    ],
    [
      navigation.weatherLabel,
      "#weather",
    ],
    [
      navigation.travelLabel,
      "#travel",
    ],
    [
      navigation.faqLabel,
      "#faq",
    ],
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 px-4 transition-all duration-500 sm:px-6 ${
        scrolled
          ? "pt-2"
          : "pt-4"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl border transition-all duration-500 ${
          scrolled
            ? "rounded-[18px] border-white/70 bg-white/70 px-4 py-2.5 shadow-[0_14px_45px_rgba(28,44,92,0.10)] backdrop-blur-2xl sm:px-5"
            : "rounded-[22px] border-white/80 bg-white/80 px-4 py-3 shadow-[0_12px_50px_rgba(28,44,92,0.08)] backdrop-blur-xl sm:px-5"
        }`}
      >
        <div className="flex items-center justify-between">
          <a
            href="#top"
            className="flex min-w-0 items-center gap-3"
            aria-label={`${brand.shortName} home`}
          >
            <div
              className={`flex shrink-0 items-center justify-center bg-gradient-to-br from-[#1A67C9] to-[#8152ED] shadow-lg shadow-purple-500/20 transition-all duration-500 ${
                scrolled
                  ? "h-9 w-9 rounded-xl"
                  : "h-10 w-10 rounded-2xl"
              }`}
            >
              <Navigation2
                className="h-5 w-5 text-white"
                strokeWidth={2.3}
              />
            </div>

            <div className="min-w-0">
              <div className="truncate text-sm font-semibold tracking-[-0.02em] text-[#101426] sm:text-base">
                {brand.shortName}
              </div>

              {!scrolled && (
                <div className="hidden text-[10px] font-medium uppercase tracking-[0.18em] text-[#8B91A7] sm:block">
                  {
                    brand.navSubtitle
                  }
                </div>
              )}
            </div>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {links.map(
              ([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="text-sm font-medium text-[#555D72] transition hover:text-[#111629]"
                >
                  {label}
                </a>
              ),
            )}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={playStoreUrl}
              target="_blank"
              rel="noreferrer"
              className={`hidden items-center gap-2 rounded-full bg-[#111629] font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#232941] sm:flex ${
                scrolled
                  ? "px-4 py-2.5 text-xs"
                  : "px-5 py-3 text-sm"
              }`}
            >
              {
                navigation.getAppLabel
              }

              <ArrowUpRight className="h-4 w-4" />
            </a>

            <button
              type="button"
              onClick={() =>
                setOpen(
                  (value) =>
                    !value,
                )
              }
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E7EAF2] bg-white text-[#151A2C] lg:hidden"
              aria-label="Toggle navigation"
              aria-expanded={open}
              aria-controls="mobile-navigation"
            >
              {open ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {open && (
          <div
            id="mobile-navigation"
            className="mt-4 border-t border-[#ECEEF4] pt-4 lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {links.map(
                ([label, href]) => (
                  <a
                    key={href}
                    href={href}
                    onClick={() =>
                      setOpen(false)
                    }
                    className="rounded-xl px-3 py-3 text-sm font-medium text-[#4F566B] transition hover:bg-[#F5F6FB]"
                  >
                    {label}
                  </a>
                ),
              )}

              <a
                href={playStoreUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#111629] px-4 py-3 text-sm font-semibold text-white"
              >
                {
                  navigation.googlePlayLabel
                }

                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}