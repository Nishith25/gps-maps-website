import Image from "next/image";

import {
  ArrowUpRight,
  MapPin,
  Navigation2,
} from "lucide-react";

import type {
  BrandContent,
  FooterContent,
} from "@/lib/content";

type FooterProps = {
  brand: BrandContent;
  content: FooterContent;
  playStoreUrl: string;
};

export default function Footer({
  brand,
  content,
  playStoreUrl,
}: FooterProps) {
  const year =
    new Date().getFullYear();

  return (
    <footer className="border-t border-[#E7E4F0] bg-[#F7F5FC] px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[1.35fr_0.65fr_0.7fr]">
          {/* Brand */}
          <div>
            <a
              href="#top"
              className="inline-flex items-center gap-3"
            >
              <Image
                src="/app-icon.png"
                alt={`${brand.name} app icon`}
                width={52}
                height={52}
                className="h-12 w-12 rounded-[14px] object-cover shadow-[0_8px_22px_rgba(82,70,153,0.12)]"
              />

              <div>
                <p className="font-bold tracking-[-0.025em] text-[#171B2B]">
                  {brand.name}
                </p>

                <p className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.13em] text-[#979DAB]">
                  {brand.navSubtitle}
                </p>
              </div>
            </a>

            <p className="mt-5 max-w-md text-sm leading-7 text-[#747C8E]">
              {
                content.description
              }
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <div className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[10px] font-medium text-[#5C6476]">
                <Navigation2 className="h-3 w-3 text-[#6B54DC]" />

                Smart navigation
              </div>

              <div className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[10px] font-medium text-[#5C6476]">
                <MapPin className="h-3 w-3 text-[#269773]" />

                Nearby discovery
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#9298A7]">
              Explore
            </p>

            <div className="mt-5 flex flex-col gap-3">
              {content.links.map(
                (link) => (
                  <a
                    key={`${link.label}-${link.href}`}
                    href={link.href}
                    className="w-fit text-sm font-medium text-[#555D70] transition hover:text-[#6A53DA]"
                  >
                    {
                      link.label
                    }
                  </a>
                ),
              )}

              <a
                href="#safety"
                className="w-fit text-sm font-medium text-[#555D70] transition hover:text-[#6A53DA]"
              >
                Location & Safety
              </a>

              <a
                href="#faq"
                className="w-fit text-sm font-medium text-[#555D70] transition hover:text-[#6A53DA]"
              >
                FAQ
              </a>
            </div>
          </div>

          {/* Download */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#9298A7]">
              Get the app
            </p>

            <p className="mt-5 max-w-[220px] text-sm leading-6 text-[#747C8D]">
              Maps, weather and
              travel tools in one
              place.
            </p>

            <a
              href={playStoreUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#6F52E5] px-5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(111,82,229,0.19)] transition hover:-translate-y-0.5 hover:bg-[#6249D5]"
            >
              Google Play

              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[#E4E1EC] pt-6 text-xs text-[#969CAA] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year}{" "}
            {brand.name}. All
            rights reserved.
          </p>

          <p>
            Navigate smarter ·
            Explore with
            confidence
          </p>
        </div>
      </div>
    </footer>
  );
}