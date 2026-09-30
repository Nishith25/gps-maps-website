"use client";

import {
  motion,
  useReducedMotion,
} from "motion/react";

import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import PhoneNavigationMockup from "@/components/visuals/PhoneNavigationMockup";

import type {
  StatContent,
} from "@/lib/content";

type HeroProps = {
  titleTop: string;
  titleBottom: string;
  description: string;
  playStoreUrl: string;
  googlePlayLabel: string;
  stats: StatContent[];
};

const quickHighlights = [
  "Voice navigation",
  "Offline maps",
  "Weather & radar",
  "Live location",
  "AQI insights",
  "Travel planner",
];

export default function Hero({
  titleTop,
  titleBottom,
  description,
  playStoreUrl,
  googlePlayLabel,
  stats,
}: HeroProps) {
  const reduceMotion =
    useReducedMotion();

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-[#ECEEF3] bg-white px-4 pb-20 pt-32 sm:px-6 sm:pb-24 sm:pt-36 lg:pb-28"
    >
      {/* Fitro-inspired subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(rgba(16,20,38,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(16,20,38,0.04) 1px, transparent 1px)",
          backgroundSize:
            "38px 38px",
        }}
      />

      {/* Background depth */}
      <div className="pointer-events-none absolute right-[7%] top-[180px] h-[340px] w-[340px] rounded-full bg-[#704AF6]/[0.07] blur-[105px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-14 xl:gap-20">
        {/* Hero copy */}
        <div className="text-center lg:text-left">
          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 12,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.45,
              ease: "easeOut",
            }}
            className="mx-auto inline-flex items-center rounded-full border border-[#E4E7EE] bg-white px-4 py-2 text-xs font-semibold text-[#5C6476] shadow-[0_8px_28px_rgba(25,32,55,0.04)] lg:mx-0"
          >
            Navigation · Weather · Offline Maps · Live Location
          </motion.div>

          <motion.h1
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 24,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.06,
              ease: "easeOut",
            }}
            className="mt-6 text-[46px] font-semibold leading-[0.94] tracking-[-0.06em] text-[#101426] sm:text-[62px] lg:text-[72px] xl:text-[78px]"
          >
            {titleTop}

            <span className="mt-2 block text-[#6857DE]">
              {titleBottom}
            </span>
          </motion.h1>

          <motion.p
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 16,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.14,
              ease: "easeOut",
            }}
            className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#6E7689] sm:text-lg lg:mx-0"
          >
            {description}
          </motion.p>

          {/* Main CTA */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 16,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.21,
            }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start"
          >
            <a
              href={playStoreUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-full bg-[#111629] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_35px_rgba(17,22,41,0.17)] sm:w-auto"
            >
              {googlePlayLabel}

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="#capabilities"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-[#DDE1E9] bg-white px-6 py-3.5 text-sm font-semibold text-[#30364A] transition duration-300 hover:-translate-y-0.5 hover:border-[#C9CED8] sm:w-auto"
            >
              Explore features
            </a>
          </motion.div>

          {/* Compact capabilities */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 12,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.55,
              delay: 0.28,
            }}
            className="mt-7 flex flex-wrap justify-center gap-2 lg:justify-start"
          >
            {quickHighlights.map(
              (item) => (
                <div
                  key={item}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#E7E9EF] bg-white px-3 py-2 text-[11px] font-medium text-[#596175]"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#6A58DF]" />

                  {item}
                </div>
              ),
            )}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 12,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.34,
            }}
            className="mx-auto mt-10 grid max-w-xl grid-cols-3 divide-x divide-[#E7E9EF] lg:mx-0"
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
                    className="px-2 text-center sm:px-5 lg:first:pl-0"
                  >
                    <p className="text-xl font-semibold tracking-[-0.04em] text-[#151A2C] sm:text-2xl">
                      {stat.value}
                    </p>

                    <p className="mt-1 text-[10px] leading-4 text-[#9399A8] sm:text-xs">
                      {stat.label}
                    </p>
                  </div>
                ),
              )}
          </motion.div>
        </div>

        {/* Product phone */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  x: 30,
                  y: 12,
                }
          }
          animate={{
            opacity: 1,
            x: 0,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.12,
            ease: "easeOut",
          }}
          className="relative mx-auto w-full max-w-[520px] lg:justify-self-end"
        >
          <PhoneNavigationMockup />
        </motion.div>
      </div>
    </section>
  );
}