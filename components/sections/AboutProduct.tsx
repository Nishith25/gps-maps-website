"use client";

import {
  motion,
  useReducedMotion,
} from "motion/react";

import {
  CloudSun,
  Navigation2,
  Route,
} from "lucide-react";

import type {
  ImmersiveContent,
} from "@/lib/content";

type AboutProductProps = {
  content: ImmersiveContent;
};

const featureStyles = [
  {
    icon: Navigation2,
    label: "Navigation",
    bg: "#EEF2FF",
    iconBg: "#DCE7FF",
    color: "#3977D9",
  },
  {
    icon: CloudSun,
    label: "Weather Intelligence",
    bg: "#EAF9F7",
    iconBg: "#D5F2EE",
    color: "#148B86",
  },
  {
    icon: Route,
    label: "Travel Ready",
    bg: "#F4EEFF",
    iconBg: "#E8DEFF",
    color: "#7054DF",
  },
];

export default function AboutProduct({
  content,
}: AboutProductProps) {
  const reduceMotion =
    useReducedMotion();

  return (
    <section
      id="about"
      className="relative overflow-hidden border-y border-[#EBEAF1] bg-[#FAF9FE] px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="pointer-events-none absolute -left-28 top-0 h-72 w-72 rounded-full bg-[#775AE6]/[0.055] blur-[100px]" />

      <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#28AFA5]/[0.05] blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Heading */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 30,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.65,
              ease: "easeOut",
            }}
          >
            <p className="text-sm font-semibold text-[#6D56DD]">
              {content.eyebrow}
            </p>

            <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-[1] tracking-[-0.055em] text-[#111629] sm:text-5xl lg:text-6xl">
              {content.title}
            </h2>

            <p className="mt-6 max-w-lg text-base leading-8 text-[#71798C]">
              {content.description}
            </p>
          </motion.div>

          {/* App ecosystem */}
          <div className="grid gap-4 sm:grid-cols-3">
            {content.highlights
              .slice(0, 3)
              .map(
                (
                  item,
                  index,
                ) => {
                  const style =
                    featureStyles[
                      index
                    ] ??
                    featureStyles[0];

                  const Icon =
                    style.icon;

                  return (
                    <motion.article
                      key={item}
                      initial={
                        reduceMotion
                          ? false
                          : {
                              opacity:
                                0,
                              y: 28,
                            }
                      }
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.3,
                      }}
                      transition={{
                        duration:
                          0.55,
                        delay:
                          reduceMotion
                            ? 0
                            : index *
                              0.09,
                        ease:
                          "easeOut",
                      }}
                      whileHover={
                        reduceMotion
                          ? undefined
                          : {
                              y: -5,
                            }
                      }
                      className="relative min-h-[245px] overflow-hidden rounded-[26px] border border-white/80 p-5 shadow-[0_16px_45px_rgba(49,45,89,0.065)]"
                      style={{
                        backgroundColor:
                          style.bg,
                      }}
                    >
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-[16px]"
                        style={{
                          backgroundColor:
                            style.iconBg,
                        }}
                      >
                        <Icon
                          className="h-5 w-5"
                          style={{
                            color:
                              style.color,
                          }}
                        />
                      </div>

                      <p
                        className="mt-7 text-[11px] font-bold uppercase tracking-[0.12em]"
                        style={{
                          color:
                            style.color,
                        }}
                      >
                        {style.label}
                      </p>

                      <h3 className="mt-2 text-xl font-semibold leading-7 tracking-[-0.035em] text-[#1B2031]">
                        {item}
                      </h3>

                      <div className="absolute bottom-5 left-5 right-5">
                        <div className="h-1.5 overflow-hidden rounded-full bg-white/60">
                          <motion.div
                            initial={{
                              width: "20%",
                            }}
                            whileInView={{
                              width:
                                index ===
                                0
                                  ? "88%"
                                  : index ===
                                      1
                                    ? "72%"
                                    : "82%",
                            }}
                            viewport={{
                              once: true,
                            }}
                            transition={{
                              duration:
                                0.9,
                              delay:
                                0.25 +
                                index *
                                  0.1,
                            }}
                            className="h-full rounded-full"
                            style={{
                              backgroundColor:
                                style.color,
                            }}
                          />
                        </div>
                      </div>
                    </motion.article>
                  );
                },
              )}
          </div>
        </div>
      </div>
    </section>
  );
}