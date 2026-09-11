"use client";

import Image from "next/image";

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
      className="relative overflow-hidden bg-white px-4 pb-24 pt-32 sm:px-6 sm:pt-36"
    >
      {/* Soft scroll-reactive glow */}
      <motion.div
        style={
          reduceMotion
            ? undefined
            : {
                y: glowY,
              }
        }
        className="pointer-events-none absolute left-1/2 top-[300px] h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-[#6659DF]/5 blur-[110px]"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          {/* Official app branding */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 18,
                    scale: 0.97,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.55,
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
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

          {/* Main headline */}
          <motion.h1
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 28,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.75,
              delay: 0.08,
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
            className="mt-9 text-[47px] font-semibold leading-[0.95] tracking-[-0.06em] text-[#101426] sm:text-[68px] lg:text-[84px]"
          >
            {titleTop}

            <motion.span
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 14,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.16,
                ease: [
                  0.22,
                  1,
                  0.36,
                  1,
                ],
              }}
              className="mt-2 block text-[#6256D9]"
            >
              {titleBottom}
            </motion.span>
          </motion.h1>

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
              delay: 0.2,
            }}
            className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#6E7689] sm:text-lg"
          >
            {description}
          </motion.p>

          {/* CTA buttons */}
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
              delay: 0.28,
            }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href={playStoreUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-full bg-[#111629] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(17,22,41,0.18)] sm:w-auto"
            >
              {googlePlayLabel}

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="#capabilities"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-[#DFE3EA] px-6 py-3.5 text-sm font-semibold text-[#30364A] transition duration-300 hover:-translate-y-0.5 hover:border-[#C7CCD6] hover:bg-[#FAFAFC] sm:w-auto"
            >
              Explore features
            </a>
          </motion.div>

          {/* Statistics */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 15,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.65,
              delay: 0.36,
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
                        0.42 +
                        index *
                          0.08,
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

        {/* Phone with subtle scroll parallax */}
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