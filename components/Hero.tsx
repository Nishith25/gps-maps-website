"use client";

import Image from "next/image";

import { motion } from "motion/react";

import {
  ArrowRight,
} from "lucide-react";

import PhoneNavigationMockup from "@/components/visuals/PhoneNavigationMockup";

import type {
  StatContent,
} from "@/lib/content";

type HeroProps = {
  brandName: string;
  titleTop: string;
  titleBottom: string;
  description: string;
  playStoreUrl: string;
  googlePlayLabel: string;
  stats: StatContent[];
};

export default function Hero({
  brandName,
  titleTop,
  titleBottom,
  description,
  playStoreUrl,
  googlePlayLabel,
  stats,
}: HeroProps) {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-white px-4 pb-24 pt-32 sm:px-6 sm:pt-36"
    >
      <div className="pointer-events-none absolute left-1/2 top-[300px] h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-[#6659DF]/5 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          {/* OFFICIAL APP BRAND */}
          <motion.div
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="mx-auto flex w-fit items-center gap-3 rounded-[18px] border border-[#E6E8EF] bg-white p-2.5 pr-4 shadow-[0_8px_30px_rgba(32,40,68,0.06)]"
          >
            <Image
              src="/app-icon.png"
              alt={`${brandName} app icon`}
              width={52}
              height={52}
              priority
              className="h-12 w-12 rounded-[13px] object-cover"
            />

            <div className="text-left">
              <p className="max-w-[230px] text-sm font-semibold leading-5 tracking-[-0.02em] text-[#171B2B] sm:max-w-none sm:text-base">
                {brandName}
              </p>

              <p className="mt-0.5 text-[10px] font-medium text-[#949AA9]">
                Available on Google Play
              </p>
            </div>
          </motion.div>

          <motion.h1
            initial={{
              opacity: 0,
              y: 18,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.08,
            }}
            className="mt-9 text-[47px] font-semibold leading-[0.95] tracking-[-0.06em] text-[#101426] sm:text-[68px] lg:text-[84px]"
          >
            {titleTop}

            <span className="mt-2 block text-[#6256D9]">
              {titleBottom}
            </span>
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.16,
            }}
            className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#6E7689] sm:text-lg"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.23,
            }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href={playStoreUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-full bg-[#111629] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 sm:w-auto"
            >
              {googlePlayLabel}

              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>

            <a
              href="#capabilities"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-[#DFE3EA] px-6 py-3.5 text-sm font-semibold text-[#30364A] transition hover:border-[#C7CCD6] sm:w-auto"
            >
              Explore features
            </a>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
            className="mx-auto mt-9 grid max-w-xl grid-cols-3 divide-x divide-[#E8EAF0]"
          >
            {stats
              .slice(0, 3)
              .map(
                (
                  stat,
                  index,
                ) => (
                  <div
                    key={`${stat.label}-${index}`}
                    className="px-2 sm:px-5"
                  >
                    <p className="text-lg font-semibold tracking-[-0.035em] text-[#151A2C] sm:text-xl">
                      {
                        stat.value
                      }
                    </p>

                    <p className="mt-1 text-[10px] leading-4 text-[#9399A8] sm:text-xs">
                      {
                        stat.label
                      }
                    </p>
                  </div>
                ),
              )}
          </motion.div>
        </div>

        {/* Phone stays immediately in the opening */}
        <div className="relative mt-12 sm:mt-14">
          <PhoneNavigationMockup />
        </div>
      </div>
    </section>
  );
}