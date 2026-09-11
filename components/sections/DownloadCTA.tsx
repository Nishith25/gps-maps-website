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
      "start end",
      "end start",
    ],
  });

  const glowY =
    useTransform(
      scrollYProgress,
      [0, 1],
      [-45, 55],
    );

  const iconY =
    useTransform(
      scrollYProgress,
      [0, 1],
      [-15, 18],
    );

  return (
    <section
      ref={sectionRef}
      className="px-4 py-20 sm:px-6 sm:py-28"
    >
      <motion.div
        initial={
          reduceMotion
            ? false
            : {
                opacity: 0,
                y: 38,
                scale: 0.985,
              }
        }
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.75,
          ease: [
            0.22,
            1,
            0.36,
            1,
          ],
        }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-[#111629] px-6 py-14 text-white sm:px-10 sm:py-16 lg:px-14 lg:py-20"
      >
        {/* Moving glow */}
        <motion.div
          style={
            reduceMotion
              ? undefined
              : {
                  y: glowY,
                }
          }
          className="pointer-events-none absolute right-[-100px] top-[-120px] h-[350px] w-[350px] rounded-full bg-[#6959E6]/20 blur-[100px]"
        />

        <div className="relative grid gap-12 lg:grid-cols-[1fr_0.55fr] lg:items-center">
          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: -20,
                  }
            }
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.65,
              delay: 0.12,
            }}
          >
            {/* Official app identity */}
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

            {/* Benefits */}
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3">
              {content.benefits.map(
                (
                  benefit,
                  index,
                ) => (
                  <motion.div
                    key={benefit}
                    initial={
                      reduceMotion
                        ? false
                        : {
                            opacity:
                              0,
                            y: 10,
                          }
                    }
                    whileInView={{
                      opacity:
                        1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration:
                        0.4,
                      delay:
                        0.2 +
                        index *
                          0.06,
                    }}
                    className="flex items-center gap-2 text-sm text-white/70"
                  >
                    <Check className="h-4 w-4 text-[#ACA0F4]" />

                    {benefit}
                  </motion.div>
                ),
              )}
            </div>

            <a
              href={playStoreUrl}
              target="_blank"
              rel="noreferrer"
              className="group mt-9 inline-flex min-h-12 items-center gap-2.5 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#15192C] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(0,0,0,0.22)]"
            >
              {content.primaryCta}

              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <p className="mt-4 text-xs text-white/35">
              Essential features
              available free ·
              Premium options
              available
            </p>
          </motion.div>

          {/* App icon visual */}
          <motion.div
            style={
              reduceMotion
                ? undefined
                : {
                    y: iconY,
                  }
            }
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    scale: 0.9,
                    rotate: 2,
                  }
            }
            whileInView={{
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 0.75,
              delay: 0.12,
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
            className="hidden justify-self-end lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-10 rounded-full bg-[#745BE9]/15 blur-[55px]" />

              <Image
                src="/app-icon.png"
                alt={`${brandName} app icon`}
                width={260}
                height={260}
                className="relative h-[220px] w-[220px] rounded-[48px] object-cover shadow-[0_30px_80px_rgba(0,0,0,0.26)] xl:h-[250px] xl:w-[250px]"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}