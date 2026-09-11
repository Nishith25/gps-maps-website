"use client";

import { motion } from "motion/react";

import type {
  CapabilityContent,
  CapabilityKey,
} from "@/lib/content";

type ProductSummaryProps = {
  items: CapabilityContent[];
};

const labelOverrides: Partial<
  Record<CapabilityKey, string>
> = {
  navigation: "Voice Navigation",
  offline: "Offline Maps",
  weather: "Live Weather",
  nearby: "Nearby Places",
  travel: "Travel Planner",
  tools: "Smart Tools",
};

export default function ProductSummary({
  items,
}: ProductSummaryProps) {
  const visibleItems = items
    .filter(
      (item) => item.isVisible,
    )
    .sort(
      (a, b) =>
        a.sortOrder -
        b.sortOrder,
    );

  return (
    <section className="border-y border-[#ECEEF3] bg-[#FBFCFE]">
      <div className="mx-auto grid max-w-7xl grid-cols-2 px-4 sm:grid-cols-3 sm:px-6 lg:grid-cols-6">
        {visibleItems.map(
          (item, index) => (
            <motion.div
              key={item.id}
              initial={{
                opacity: 0,
                y: 8,
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
              className="flex min-h-[82px] items-center gap-2.5 border-b border-[#ECEEF3] px-2 py-4 sm:px-3 lg:border-b-0"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#6659DF]" />

              <span className="text-sm font-medium text-[#4F576B]">
                {labelOverrides[
                  item.id
                ] ??
                  item.label}
              </span>
            </motion.div>
          ),
        )}
      </div>
    </section>
  );
}