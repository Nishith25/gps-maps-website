"use client";

import {
  motion,
  useReducedMotion,
} from "motion/react";

import {
  Check,
} from "lucide-react";

import type {
  ImmersiveContent,
} from "@/lib/content";

type AboutProductProps = {
  content: ImmersiveContent;
};

export default function AboutProduct({
  content,
}: AboutProductProps) {
  const reduceMotion =
    useReducedMotion();

  return (
    <section
      id="about"
      className="border-y border-[#ECEEF3] bg-[#FBFCFE] px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        {/* Left side */}
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
            ease: [
              0.22,
              1,
              0.36,
              1,
            ],
          }}
        >
          <p className="text-sm font-semibold text-[#6559DF]">
            {content.eyebrow}
          </p>

          <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-[1] tracking-[-0.05em] text-[#101426] sm:text-5xl lg:text-6xl">
            {content.title}
          </h2>
        </motion.div>

        {/* Right side */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 34,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.22,
          }}
          transition={{
            duration: 0.7,
            delay: 0.08,
            ease: [
              0.22,
              1,
              0.36,
              1,
            ],
          }}
          className="lg:pt-7"
        >
          <p className="max-w-2xl text-base leading-8 text-[#6F778A] sm:text-lg">
            {content.description}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {content.highlights.map(
              (
                item,
                index,
              ) => (
                <motion.div
                  key={item}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 20,
                        }
                  }
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.4,
                  }}
                  transition={{
                    duration:
                      0.5,
                    delay:
                      reduceMotion
                        ? 0
                        : index *
                          0.09,
                    ease: [
                      0.22,
                      1,
                      0.36,
                      1,
                    ],
                  }}
                  className="flex items-start gap-3 border-t border-[#E4E7ED] pt-4"
                >
                  <motion.div
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            scale:
                              1.08,
                          }
                    }
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EEECFF]"
                  >
                    <Check className="h-3.5 w-3.5 text-[#6559DF]" />
                  </motion.div>

                  <p className="text-sm font-medium leading-6 text-[#444C5F]">
                    {item}
                  </p>
                </motion.div>
              ),
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}