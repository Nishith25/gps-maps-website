"use client";

import Image from "next/image";

import {
  motion,
  useReducedMotion,
} from "motion/react";

import {
  ArrowUpRight,
  Check,
  Star,
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
  const reduceMotion =
    useReducedMotion();

  return (
    <section className="bg-white px-4 py-20 sm:px-6 sm:py-28">
      <motion.div
        initial={
          reduceMotion
            ? false
            : {
                opacity: 0,
                y: 35,
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
          amount: 0.18,
        }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-[#E3E0F0] bg-[#F7F4FF] px-6 py-12 sm:px-10 sm:py-16 lg:px-14 lg:py-20"
      >
        <div className="pointer-events-none absolute -right-20 -top-24 h-[360px] w-[360px] rounded-full bg-[#7656E5]/10 blur-[100px]" />

        <div className="pointer-events-none absolute -bottom-28 left-[35%] h-[300px] w-[300px] rounded-full bg-[#22B4A6]/[0.07] blur-[90px]" />

        <div className="relative grid gap-12 lg:grid-cols-[1fr_0.65fr] lg:items-center">
          {/* Copy */}
          <div>
            <p className="text-sm font-semibold text-[#6C55DD]">
              {content.eyebrow}
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1] tracking-[-0.055em] text-[#111629] sm:text-5xl lg:text-6xl">
              {content.title}
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#70788B] sm:text-lg">
              {
                content.description
              }
            </p>

            <div className="mt-7 flex flex-wrap gap-2.5">
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
                        index *
                        0.06,
                    }}
                    className="flex items-center gap-2 rounded-full border border-[#E3E0F0] bg-white px-3.5 py-2 text-xs font-medium text-[#51596B]"
                  >
                    <Check className="h-3.5 w-3.5 text-[#6D55DF]" />

                    {benefit}
                  </motion.div>
                ),
              )}
            </div>

            <a
              href={playStoreUrl}
              target="_blank"
              rel="noreferrer"
              className="group mt-9 inline-flex min-h-12 items-center gap-2.5 rounded-full bg-[#6F52E5] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(111,82,229,0.23)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#6148D2]"
            >
              {content.primaryCta}

              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <p className="mt-4 text-xs text-[#969CAA]">
              Essential features
              available free ·
              Premium options
              available
            </p>
          </div>

          {/* App install card */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 25,
                    scale: 0.96,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.65,
              delay: 0.08,
              ease: "easeOut",
            }}
            className="mx-auto w-full max-w-[345px] lg:ml-auto"
          >
            <div className="rounded-[30px] border border-white bg-white/85 p-6 shadow-[0_24px_70px_rgba(71,62,125,0.11)] backdrop-blur-md sm:p-7">
              <div className="flex items-center gap-4">
                <Image
                  src="/app-icon.png"
                  alt={`${brandName} app icon`}
                  width={84}
                  height={84}
                  className="h-[76px] w-[76px] rounded-[20px] object-cover shadow-[0_12px_30px_rgba(84,73,160,0.16)]"
                />

                <div>
                  <p className="text-sm font-bold leading-5 tracking-[-0.025em] text-[#171C2D]">
                    {brandName}
                  </p>

                  <p className="mt-1 text-[10px] text-[#9197A6]">
                    Navigation &
                    Travel
                  </p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-[16px] bg-[#F5F2FF] p-3">
                  <p className="text-[9px] font-medium text-[#8D93A1]">
                    Downloads
                  </p>

                  <p className="mt-1 text-lg font-bold tracking-[-0.04em] text-[#202537]">
                    10Cr+
                  </p>
                </div>

                <div className="rounded-[16px] bg-[#EFF9F7] p-3">
                  <p className="text-[9px] font-medium text-[#8D93A1]">
                    Google Play
                  </p>

                  <div className="mt-1 flex items-center gap-1">
                    <p className="text-lg font-bold tracking-[-0.04em] text-[#202537]">
                      4.1
                    </p>

                    <Star className="h-4 w-4 fill-[#F3A71D] text-[#F3A71D]" />
                  </div>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between rounded-[16px] bg-gradient-to-r from-[#7656E5] via-[#4C7DD9] to-[#24B5A7] px-4 py-3 text-white">
                <div>
                  <p className="text-[9px] text-white/70">
                    Ready for
                  your next trip
                  </p>

                  <p className="mt-0.5 text-xs font-bold">
                    Navigate smarter
                  </p>
                </div>

                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}