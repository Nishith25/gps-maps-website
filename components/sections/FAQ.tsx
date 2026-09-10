"use client";

import { useState } from "react";

import { motion } from "motion/react";

import {
  ChevronDown,
  Sparkles,
} from "lucide-react";

import type {
  FAQContent,
  FAQSectionContent,
} from "@/lib/content";

type FAQProps = {
  section: FAQSectionContent;
  items: FAQContent[];
};

export default function FAQ({
  section,
  items,
}: FAQProps) {
  const [openItem, setOpenItem] =
    useState<number | null>(0);

  const visibleItems = items.filter(
    (item) => item.isVisible,
  );

  return (
    <section
      id="faq"
      className="relative px-4 py-24 sm:px-6 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <motion.div
              initial={{
                opacity: 0,
                y: 12,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="inline-flex items-center gap-2 rounded-full border border-[#E1E4FF] bg-white px-4 py-2 text-xs font-semibold text-[#6659DF] shadow-sm"
            >
              <Sparkles className="h-3.5 w-3.5" />

              {section.eyebrow}
            </motion.div>

            <motion.h2
              initial={{
                opacity: 0,
                y: 18,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="mt-6 max-w-md text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-[#101426] sm:text-6xl"
            >
              {section.title}
            </motion.h2>

            <p className="mt-6 max-w-sm text-base leading-7 text-[#7A8192]">
              {section.description}
            </p>
          </div>

          <div className="divide-y divide-[#E6E9F1] border-y border-[#E6E9F1]">
            {visibleItems.map(
              (item, index) => {
                const open =
                  openItem === index;

                return (
                  <motion.div
                    key={`${item.question}-${index}`}
                    initial={{
                      opacity: 0,
                      y: 14,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay:
                        index * 0.04,
                    }}
                    className="py-1"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setOpenItem(
                          open
                            ? null
                            : index,
                        )
                      }
                      className="flex w-full items-center justify-between gap-6 py-6 text-left"
                      aria-expanded={open}
                    >
                      <span className="text-lg font-semibold tracking-[-0.025em] text-[#181D30] sm:text-xl">
                        {
                          item.question
                        }
                      </span>

                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          open
                            ? "rotate-180 border-[#DCD7FF] bg-[#F0EDFF]"
                            : "border-[#E5E8EF] bg-white"
                        }`}
                      >
                        <ChevronDown className="h-4 w-4 text-[#6659DF]" />
                      </div>
                    </button>

                    <div
                      className={`grid transition-all duration-500 ${
                        open
                          ? "grid-rows-[1fr] pb-6 opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-2xl pr-12 text-sm leading-7 text-[#737A8C] sm:text-base">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              },
            )}
          </div>
        </div>
      </div>
    </section>
  );
}