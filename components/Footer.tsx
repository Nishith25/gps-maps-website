import Image from "next/image";

import {
  ArrowUpRight,
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
    <footer className="border-t border-[#ECEEF3] bg-white px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr_0.7fr]">
          <div>
            <a
              href="#top"
              className="inline-flex items-center gap-3"
            >
              <Image
                src="/app-icon.png"
                alt={`${brand.name} app icon`}
                width={48}
                height={48}
                className="h-11 w-11 rounded-[13px] object-cover"
              />

              <div>
                <p className="font-semibold tracking-[-0.02em] text-[#14192B]">
                  {brand.name}
                </p>

                <p className="mt-0.5 text-[9px] uppercase tracking-[0.14em] text-[#999EAD]">
                  {brand.navSubtitle}
                </p>
              </div>
            </a>

            <p className="mt-5 max-w-md text-sm leading-7 text-[#777F91]">
              {
                content.description
              }
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#999EAD]">
              Explore
            </p>

            <div className="mt-4 flex flex-col gap-3">
              {content.links.map(
                (link) => (
                  <a
                    key={`${link.label}-${link.href}`}
                    href={link.href}
                    className="w-fit text-sm font-medium text-[#4D5569] transition hover:text-[#6559DF]"
                  >
                    {
                      link.label
                    }
                  </a>
                ),
              )}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#999EAD]">
              Download
            </p>

            <a
              href={playStoreUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#111629] px-5 text-sm font-semibold text-white"
            >
              Google Play

              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-[#ECEEF3] pt-5 text-xs text-[#969BAA] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year}{" "}
            {brand.name}. All
            rights reserved.
          </p>

          <p>
            Navigate smarter.
            Explore with
            confidence.
          </p>
        </div>
      </div>
    </footer>
  );
}