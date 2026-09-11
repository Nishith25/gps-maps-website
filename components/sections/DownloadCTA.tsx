import Image from "next/image";

import {
  ArrowUpRight,
  Check,
} from "lucide-react";

import type {
  DownloadContent,
} from "@/lib/content";

type DownloadCTAProps = {
  brandName: string;
  content: DownloadContent;
  playStoreUrl: string;
};

export default function DownloadCTA({
  brandName,
  content,
  playStoreUrl,
}: DownloadCTAProps) {
  return (
    <section className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-[#111629] px-6 py-14 text-white sm:px-10 sm:py-16 lg:px-14 lg:py-20">
        <div className="pointer-events-none absolute right-[-100px] top-[-120px] h-[350px] w-[350px] rounded-full bg-[#6959E6]/20 blur-[100px]" />

        <div className="relative grid gap-12 lg:grid-cols-[1fr_0.55fr] lg:items-center">
          <div>
            {/* OFFICIAL APP IDENTITY */}
            <div className="flex items-center gap-4">
              <Image
                src="/app-icon.png"
                alt={`${brandName} app icon`}
                width={64}
                height={64}
                className="h-14 w-14 rounded-[15px] object-cover sm:h-16 sm:w-16"
              />

              <div>
                <p className="text-xs font-medium text-white/40">
                  Available on
                  Google Play
                </p>

                <p className="mt-1 max-w-lg text-base font-semibold tracking-[-0.02em] text-white sm:text-lg">
                  {brandName}
                </p>
              </div>
            </div>

            <p className="mt-9 text-sm font-semibold text-[#ACA0F4]">
              {content.eyebrow}
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
              {content.title}
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-white/55 sm:text-lg">
              {
                content.description
              }
            </p>

            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3">
              {content.benefits.map(
                (benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-2 text-sm text-white/70"
                  >
                    <Check className="h-4 w-4 text-[#ACA0F4]" />

                    {benefit}
                  </div>
                ),
              )}
            </div>

            <a
              href={playStoreUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-9 inline-flex min-h-12 items-center gap-2.5 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#15192C] transition hover:-translate-y-0.5"
            >
              {content.primaryCta}

              <ArrowUpRight className="h-4 w-4" />
            </a>

            <p className="mt-4 text-xs text-white/35">
              Essential features
              available free ·
              Premium options
              available
            </p>
          </div>

          <div className="hidden justify-self-end lg:block">
            <div className="relative">
              <div className="absolute -inset-10 rounded-full bg-[#745BE9]/15 blur-[55px]" />

              <Image
                src="/app-icon.png"
                alt=""
                width={260}
                height={260}
                className="relative h-[220px] w-[220px] rounded-[48px] object-cover shadow-[0_30px_80px_rgba(0,0,0,0.26)] xl:h-[250px] xl:w-[250px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}