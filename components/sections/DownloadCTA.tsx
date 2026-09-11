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
      [-40, 55],
    );

  const iconY =
    useTransform(
      scrollYProgress,
      [0, 1],
      [-12, 20],
    );

  return (
    <section
      ref={sectionRef}
      className="bg-white px-4 py-20 sm:px-6 sm:py-28"
    >
      <motion.div
        initial={
          reduceMotion
            ? false
            : {
                opacity: 0,
                y: 36,
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
          duration: 0.75,
          ease: "easeOut",
        }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-[#E5E4F2] bg-[#F7F6FF] px-6 py-12 sm:px-10 sm:py-16 lg:px-14 lg:py-20"
      >
        {/* Background decoration */}
        <motion.div
          style={
            reduceMotion
              ? undefined
              : {
                  y: glowY,
                }
          }
          className="pointer-events-none absolute right-[-90px] top-[-120px] h-[380px] w-[380px] rounded-full bg-[#745BE9]/10 blur-[105px]"
        />

        <div className="pointer-events-none absolute bottom-[-160px] left-[-130px] h-[320px] w-[320px] rounded-full bg-[#1A67C9]/[0.06] blur-[95px]" />

        <div className="relative grid gap-12 lg:grid-cols-[1fr_0.62fr] lg:items-center">
          {/* Content */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: -24,
                  }
            }
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.65,
              delay: 0.08,
              ease: "easeOut",
            }}
          >
            <p className="text-sm font-semibold text-[#6559DF]">
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

            {/* Benefits */}
            <div className="mt-7 flex flex-wrap gap-3">
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
                        0.16 +
                        index *
                          0.06,
                    }}
                    className="flex items-center gap-2 rounded-full border border-[#E3E1F1] bg-white px-3.5 py-2 text-xs font-medium text-[#50586C]"
                  >
                    <Check className="h-3.5 w-3.5 text-[#6559DF]" />

                    {benefit}
                  </motion.div>
                ),
              )}
            </div>

            {/* CTA */}
            <a
              href={playStoreUrl}
              target="_blank"
              rel="noreferrer"
              className="group mt-9 inline-flex min-h-12 items-center gap-2.5 rounded-full bg-[#111629] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(17,22,41,0.18)]"
            >
              {content.primaryCta}

              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <p className="mt-4 text-xs text-[#9A9FAE]">
              Essential features
              available free ·
              Premium options
              available
            </p>
          </motion.div>

          {/* App identity visual */}
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
                    y: 25,
                    scale: 0.94,
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
              duration: 0.7,
              delay: 0.1,
              ease: "easeOut",
            }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[330px] rounded-[30px] border border-white bg-white/80 p-6 shadow-[0_24px_70px_rgba(70,66,130,0.10)] backdrop-blur-sm sm:p-8"
            >
              <div className="pointer-events-none absolute inset-0 rounded-[30px] bg-gradient-to-br from-white/70 to-[#EEEAFE]/40" />

              <div className="relative">
                <Image
                  src="/app-icon.png"
                  alt={`${brandName} app icon`}
                  width={150}
                  height={150}
                  className="mx-auto h-[118px] w-[118px] rounded-[28px] object-cover shadow-[0_18px_45px_rgba(74,74,120,0.18)] sm:h-[138px] sm:w-[138px]"
                />

                <div className="mt-6 text-center">
                  <p className="text-base font-semibold tracking-[-0.025em] text-[#151A2B]">
                    {brandName}
                  </p>

                  <p className="mt-1 text-xs text-[#8C93A3]">
                    Available on Google Play
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-center gap-2">
                  <span className="rounded-full bg-[#F2F1FA] px-3 py-1.5 text-[10px] font-semibold text-[#6559DF]">
                    10Cr+ downloads
                  </span>

                  <span className="rounded-full bg-[#F2F1FA] px-3 py-1.5 text-[10px] font-semibold text-[#6559DF]">
                    4.1★
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}