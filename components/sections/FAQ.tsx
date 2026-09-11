"use client";

import {
  useState,
} from "react";

import {
  ChevronDown,
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

  const visibleItems =
    items.filter(
      (item) =>
        item.isVisible,
    );

  return (
    <section
      id="faq"
      className="px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        <div>
          <p className="text-sm font-semibold text-[#6559DF]">
            {section.eyebrow}
          </p>

          <h2 className="mt-4 max-w-md text-4xl font-semibold leading-[1] tracking-[-0.05em] text-[#101426] sm:text-5xl">
            {section.title}
          </h2>

          <p className="mt-5 max-w-sm text-base leading-7 text-[#747C8F]">
            {
              section.description
            }
          </p>
        </div>

        <div className="divide-y divide-[#E7EAF0] border-y border-[#E7EAF0]">
          {visibleItems.map(
            (
              item,
              index,
            ) => {
              const open =
                openItem ===
                index;

              return (
                <div
                  key={`${item.question}-${index}`}
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
                    className="flex min-h-[74px] w-full items-center justify-between gap-5 py-5 text-left"
                  >
                    <span className="text-base font-semibold tracking-[-0.02em] text-[#191E31] sm:text-lg">
                      {
                        item.question
                      }
                    </span>

                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-[#656D80] transition-transform duration-300 ${
                        open
                          ? "rotate-180"
                          : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      open
                        ? "grid-rows-[1fr] pb-6 opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl pr-8 text-sm leading-7 text-[#737B8D] sm:text-base">
                        {
                          item.answer
                        }
                      </p>
                    </div>
                  </div>
                </div>
              );
            },
          )}
        </div>
      </div>
    </section>
  );
}