"use client";

import { motion } from "motion/react";

import {
  ArrowRight,
  Bike,
  CalendarDays,
  CloudSun,
  Footprints,
  MapPin,
  Mountain,
  Navigation2,
  Route,
  ShieldCheck,
  TreePine,
  Trophy,
  WifiOff,
} from "lucide-react";

import type {
  TravelActivityContent,
  TravelContent,
} from "@/lib/content";

type TravelIntelligenceProps = {
  content: TravelContent;
  playStoreUrl: string;
};

const extraActivities: TravelActivityContent[] =
  [
    {
      name: "Cricket",
      score: 68,
      level: "Good",
      bestTime:
        "5:00 PM",
      description:
        "Check weather and outdoor conditions before play.",
    },
    {
      name: "Picnic",
      score: 74,
      level: "Good",
      bestTime:
        "5:30 PM",
      description:
        "Plan around temperature, rain and outdoor comfort.",
    },
  ];

const activityIcons = [
  Bike,
  Footprints,
  Mountain,
  Trophy,
  TreePine,
];

export default function TravelIntelligence({
  content,
  playStoreUrl,
}: TravelIntelligenceProps) {
  const existingNames =
    content.activities.map(
      (item) =>
        item.name.toLowerCase(),
    );

  const activities = [
    ...content.activities,

    ...extraActivities.filter(
      (item) =>
        !existingNames.includes(
          item.name.toLowerCase(),
        ),
    ),
  ];

  return (
    <section
      id="travel"
      className="bg-[#FBFCFE] px-4 py-20 sm:px-6 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold text-[#6559DF]">
              {
                content.eyebrow
              }
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1] tracking-[-0.05em] text-[#101426] sm:text-5xl lg:text-6xl">
              {content.title}
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-[#747C8F] sm:text-lg lg:justify-self-end">
            {
              content.description
            }
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          {/* Planner */}
          <div className="overflow-hidden rounded-[30px] border border-[#E5E8EF] bg-white p-5 sm:p-7">
            <div className="flex items-center justify-between gap-5">
              <div>
                <p className="text-xs font-semibold text-[#6559DF]">
                  Smart route
                  planner
                </p>

                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-[#151A2C]">
                  Plan the journey,
                  not just the
                  route.
                </h3>
              </div>

              <Route className="h-6 w-6 shrink-0 text-[#6559DF]" />
            </div>

            <div className="mt-7 rounded-[24px] bg-[#F7F9FC] p-4 sm:p-5">
              <div className="flex items-start gap-3 border-b border-[#E7EAF0] pb-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white">
                  <Navigation2 className="h-4 w-4 text-[#2877D2]" />
                </div>

                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#969CAD]">
                    From
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#1A1F31]">
                    {
                      content
                        .planner
                        .from
                    }
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white">
                  <MapPin className="h-4 w-4 text-[#735AE5]" />
                </div>

                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#969CAD]">
                    To
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#1A1F31]">
                    {
                      content
                        .planner
                        .to
                    }
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
              <div className="border-r border-[#ECEEF3] pr-2">
                <p className="text-[8px] uppercase tracking-[0.1em] text-[#9A9FAE] sm:text-[9px]">
                  Duration
                </p>

                <p className="mt-1 text-xs font-semibold text-[#202538] sm:text-sm">
                  {
                    content
                      .planner
                      .duration
                  }
                </p>
              </div>

              <div className="border-r border-[#ECEEF3] px-2">
                <p className="text-[8px] uppercase tracking-[0.1em] text-[#9A9FAE] sm:text-[9px]">
                  Distance
                </p>

                <p className="mt-1 text-xs font-semibold text-[#202538] sm:text-sm">
                  {
                    content
                      .planner
                      .distance
                  }
                </p>
              </div>

              <div className="pl-2">
                <p className="text-[8px] uppercase tracking-[0.1em] text-[#9A9FAE] sm:text-[9px]">
                  Conditions
                </p>

                <p className="mt-1 text-xs font-semibold text-[#24826D] sm:text-sm">
                  {
                    content
                      .planner
                      .condition
                  }
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {content.readiness.map(
                (
                  item,
                  index,
                ) => {
                  const icons =
                    [
                      CloudSun,
                      Route,
                      WifiOff,
                    ];

                  const Icon =
                    icons[
                      index
                    ] ??
                    ShieldCheck;

                  return (
                    <div
                      key={`${item.label}-${index}`}
                      className="flex items-center gap-2 rounded-full bg-[#F5F6FA] px-3 py-2 text-xs font-medium text-[#5D6578]"
                    >
                      <Icon className="h-3.5 w-3.5 text-[#6559DF]" />

                      {
                        item.label
                      }
                      :{" "}
                      {
                        item.value
                      }
                    </div>
                  );
                },
              )}
            </div>

            <a
              href={playStoreUrl}
              target="_blank"
              rel="noreferrer"
              className="group mt-7 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#5E55D8]"
            >
              Plan in the app

              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Activities */}
          <div>
            <div className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-[#2376D0]" />

              <p className="text-sm font-semibold text-[#2376D0]">
                Activity
                suitability
              </p>
            </div>

            <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#151A2C]">
              Pick the right time
              to move.
            </h3>

            <div className="mt-6 divide-y divide-[#E7EAF0] border-y border-[#E7EAF0]">
              {activities
                .slice(0, 5)
                .map(
                  (
                    activity,
                    index,
                  ) => {
                    const Icon =
                      activityIcons[
                        index
                      ] ??
                      Footprints;

                    return (
                      <motion.div
                        key={`${activity.name}-${index}`}
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
                            index *
                            0.04,
                        }}
                        className="grid grid-cols-[auto_1fr_auto] items-center gap-3 py-4"
                      >
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white">
                          <Icon className="h-4 w-4 text-[#6559DF]" />
                        </div>

                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-[#24293B]">
                            {
                              activity.name
                            }
                          </p>

                          <p className="mt-0.5 truncate text-xs text-[#8A91A3]">
                            Best
                            time{" "}
                            {
                              activity.bestTime
                            }
                          </p>
                        </div>

                        <div className="text-right">
                          <p className="text-sm font-semibold text-[#24293B]">
                            {
                              activity.score
                            }
                          </p>

                          <p className="text-[10px] font-medium text-[#748091]">
                            {
                              activity.level
                            }
                          </p>
                        </div>
                      </motion.div>
                    );
                  },
                )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}