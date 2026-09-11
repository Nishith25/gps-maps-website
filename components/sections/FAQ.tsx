"use client";

import {
  useState,
} from "react";

import {
  motion,
  useReducedMotion,
} from "motion/react";

import {
  ChevronDown,
  HelpCircle,
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

  const reduceMotion =
    useReducedMotion();

  const visibleItems =
    items.filter(
      (item) =>
        item.isVisible,
    );

  return (
    <section
      id="faq"
      className="bg-[#FBFBFD] px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        {/* Intro */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 28,
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
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-[15px] bg-[#EEE8FF]">
            <HelpCircle className="h-5 w-5 text-[#6B53DD]" />
          </div>

          <p className="mt-6 text-sm font-semibold text-[#6D56DD]">
            {section.eyebrow}
          </p>

          <h2 className="mt-4 max-w-md text-4xl font-semibold leading-[1] tracking-[-0.055em] text-[#111629] sm:text-5xl">
            {section.title}
          </h2>

          <p className="mt-5 max-w-sm text-base leading-7 text-[#747C8F]">
            {
              section.description
            }
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {visibleItems.map(
            (
              item,
              index,
            ) => {
              const open =
                openItem ===
                index;

              return (
                <motion.div
                  key={`${item.question}-${index}`}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 18,
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
                    duration:
                      0.45,
                    delay:
                      reduceMotion
                        ? 0
                        : index *
                          0.045,
                  }}
                  className={`overflow-hidden rounded-[20px] border transition-colors ${
                    open
                      ? "border-[#DCD5F4] bg-[#F6F2FF]"
                      : "border-[#E8E9EE] bg-white"
                  }`}
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
                    aria-expanded={
                      open
                    }
                    className="flex min-h-[76px] w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                  >
                    <span className="text-base font-semibold tracking-[-0.025em] text-[#191E31] sm:text-lg">
                      {
                        item.question
                      }
                    </span>

                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors ${
                        open
                          ? "bg-[#E6DEFF] text-[#6851D9]"
                          : "bg-[#F4F5F7] text-[#656D80]"
                      }`}
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${
                          open
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    </div>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      open
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl px-5 pb-6 text-sm leading-7 text-[#6F778A] sm:px-6 sm:text-base">
                        {
                          item.answer
                        }
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            },
          )}
        </div>
      </div>
    </section>
  );
}