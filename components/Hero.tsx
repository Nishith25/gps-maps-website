"use client";

import {
  useRef,
} from "react";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

import {
  ArrowRight,
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

export default function Hero({
  titleTop,
  titleBottom,
  description,
  playStoreUrl,
  googlePlayLabel,
  stats,
}: HeroProps) {
  const sectionRef =
    useRef<HTMLElement | null>(
      null,
    );

  const reduceMotion =
    useReducedMotion();

  const {
    scrollYProgress,
  } = useScroll({
    target: sectionRef,
    offset: [
      "start start",
      "end start",
    ],
  });

  const phoneY =
    useTransform(
      scrollYProgress,
      [0, 1],
      [0, 55],
    );

  const phoneScale =
    useTransform(
      scrollYProgress,
      [0, 1],
      [1, 0.975],
    );

  const glowY =
    useTransform(
      scrollYProgress,
      [0, 1],
      [0, 70],
    );

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative overflow-hidden bg-white px-4 pb-24 pt-32 sm:px-6 sm:pb-28 sm:pt-36"
    >
      {/* Soft background glow */}
      <motion.div
        style={
          reduceMotion
            ? undefined
            : {
                y: glowY,
              }
        }
        className="pointer-events-none absolute left-1/2 top-[250px] h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-[#6659DF]/[0.055] blur-[115px]"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-5xl text-center">
          {/* Main headline */}
          <motion.h1
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 30,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.75,
              ease: "easeOut",
            }}
            className="text-[48px] font-semibold leading-[0.94] tracking-[-0.065em] text-[#101426] sm:text-[70px] lg:text-[88px]"
          >
            {titleTop}

            <motion.span
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 18,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: "easeOut",
              }}
              className="mt-2 block text-[#6256D9]"
            >
              {titleBottom}
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 18,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.65,
              delay: 0.16,
              ease: "easeOut",
            }}
            className="mx-auto mt-8 max-w-2xl text-base leading-8 text-[#6E7689] sm:text-lg"
          >
            {description}
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 18,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.65,
              delay: 0.23,
              ease: "easeOut",
            }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href={playStoreUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-full bg-[#111629] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_35px_rgba(17,22,41,0.18)] sm:w-auto"
            >
              {googlePlayLabel}

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="#capabilities"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-[#DFE3EA] bg-white px-6 py-3.5 text-sm font-semibold text-[#30364A] transition duration-300 hover:-translate-y-0.5 hover:border-[#CBCFD8] hover:bg-[#FAFAFC] sm:w-auto"
            >
              Explore features
            </a>
          </motion.div>

          {/* Stats */}
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
              duration: 0.65,
              delay: 0.3,
              ease: "easeOut",
            }}
            className="mx-auto mt-10 grid max-w-xl grid-cols-3 divide-x divide-[#E8EAF0]"
          >
            {stats
              .slice(0, 3)
              .map(
                (
                  stat,
                  index,
                ) => (
                  <motion.div
                    key={`${stat.label}-${index}`}
                    initial={
                      reduceMotion
                        ? false
                        : {
                            opacity: 0,
                            y: 10,
                          }
                    }
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.45,
                      delay:
                        0.36 +
                        index *
                          0.07,
                    }}
                    className="px-2 sm:px-5"
                  >
                    <p className="text-lg font-semibold tracking-[-0.035em] text-[#151A2C] sm:text-xl">
                      {stat.value}
                    </p>

                    <p className="mt-1 text-[10px] leading-4 text-[#9399A8] sm:text-xs">
                      {stat.label}
                    </p>
                  </motion.div>
                ),
              )}
          </motion.div>
        </div>

        {/* Phone */}
        <motion.div
          style={
            reduceMotion
              ? undefined
              : {
                  y: phoneY,
                  scale:
                    phoneScale,
                }
          }
          className="relative mt-12 sm:mt-14"
        >
          <PhoneNavigationMockup />
        </motion.div>
      </div>
    </section>
  );
}