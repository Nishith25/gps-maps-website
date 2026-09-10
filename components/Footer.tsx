import {
  ArrowUpRight,
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
    <footer className="px-4 pb-6 sm:px-6">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[36px] border border-[#E4E7EF] bg-white">
        <div className="grid gap-12 px-6 py-12 sm:px-10 lg:grid-cols-[1.3fr_0.7fr_0.7fr] lg:px-12">
          <div>
            <a
              href="#top"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1A67C9] to-[#8152ED] shadow-lg shadow-purple-500/15">
                <Navigation2 className="h-5 w-5 text-white" />
              </div>

              <div>
                <p className="font-semibold tracking-[-0.025em] text-[#14192B]">
                  {brand.shortName}
                </p>

                <p className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.17em] text-[#9A9FAE]">
                  {
                    brand.navSubtitle
                  }
                </p>
              </div>
            </a>

            <p className="mt-6 max-w-md text-sm leading-7 text-[#777E90]">
              {
                content.description
              }
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#999EAD]">
              Explore
            </p>

            <div className="mt-5 flex flex-col gap-4">
              {content.links.map(
                (link) => (
                  <a
                    key={`${link.label}-${link.href}`}
                    href={link.href}
                    className="w-fit text-sm font-medium text-[#4D5569] transition hover:text-[#6659DF]"
                  >
                    {link.label}
                  </a>
                ),
              )}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#999EAD]">
              Download
            </p>

            <a
              href={playStoreUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#12172A] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
            >
              Google Play

              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-[#ECEEF3] px-6 py-5 text-xs text-[#969BAA] sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-12">
          <p>
            © {year} {brand.name}. All
            rights reserved.
          </p>

          <p>
            Navigate smarter. Explore
            with confidence.
          </p>
        </div>
      </div>
    </footer>
  );
}