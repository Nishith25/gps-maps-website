"use client";

import { motion } from "motion/react";

import {
  Compass,
  Gauge,
  Languages,
  LocateFixed,
  ParkingCircle,
  Search,
} from "lucide-react";

import type {
  UtilitiesContent,
} from "@/lib/content";

type UtilityShowcaseProps = {
  content: UtilitiesContent;
};

export default function UtilityShowcase({
  content,
}: UtilityShowcaseProps) {
  const tools = [
    {
      title:
        content.parking
          .title,
      description:
        content.parking
          .description,
      label: "Parking",
      Icon: ParkingCircle,
    },
    {
      title:
        content.speedometer
          .title,
      description:
        content.speedometer
          .description,
      label: "Speedometer",
      Icon: Gauge,
    },
    {
      title:
        content.compass
          .title,
      description:
        content.compass
          .description,
      label: "Compass",
      Icon: Compass,
    },
    {
      title:
        content.translator
          .title,
      description:
        content.translator
          .description,
      label: "Translator",
      Icon: Languages,
    },
    {
      title:
        "Know exactly where you are.",
      description:
        "View your current location quickly whenever you need location context.",
      label: "My Location",
      Icon: LocateFixed,
    },
    {
      title:
        "Find the address around you.",
      description:
        "Use location tools to identify addresses and understand where you are.",
      label: "Find Address",
      Icon: Search,
    },
  ];

  return (
    <section
      id="tools"
      className="px-4 py-20 sm:px-6 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-[#6559DF]">
            {content.eyebrow}
          </p>

          <h2 className="mt-4 text-4xl font-semibold leading-[1] tracking-[-0.05em] text-[#101426] sm:text-5xl lg:text-6xl">
            {content.title}
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-[#747C8F] sm:text-lg">
            {content.description}
          </p>
        </div>

        <div className="mt-12 grid gap-x-8 border-y border-[#E7EAF0] md:grid-cols-2 lg:grid-cols-3">
          {tools.map(
            (
              {
                title,
                description,
                label,
                Icon,
              },
              index,
            ) => (
              <motion.article
                key={`${label}-${index}`}
                initial={{
                  opacity: 0,
                  y: 10,
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
                    index *
                    0.04,
                }}
                className="border-b border-[#E7EAF0] py-7 md:px-2 lg:px-4"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-[14px] bg-[#F3F4F8]">
                  <Icon className="h-4 w-4 text-[#5F5AC8]" />
                </div>

                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-[#9298A7]">
                  {label}
                </p>

                <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-[#161B2D]">
                  {title}
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-6 text-[#777F91]">
                  {
                    description
                  }
                </p>
              </motion.article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}