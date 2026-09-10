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
  Sparkles,
  WifiOff,
} from "lucide-react";

import type {
  TravelActivityContent,
  TravelContent,
  TravelPlannerContent,
  TravelReadinessContent,
} from "@/lib/content";

const activityIcons = [
  Bike,
  Footprints,
  Mountain,
];

type TravelIntelligenceProps = {
  content: TravelContent;
  playStoreUrl: string;
};

function PlannerVisual({
  planner,
}: {
  planner: TravelPlannerContent;
}) {
  return (
    <div className="relative mt-8 overflow-hidden rounded-[30px] border border-[#E6EAF4] bg-[#F8FAFF] p-5 sm:p-6">
      <div className="travel-grid pointer-events-none absolute inset-0 opacity-55" />

      <div className="relative z-10">
        <div className="rounded-[22px] border border-[#E6EAF3] bg-white p-4 shadow-sm">
          <div className="flex items-center gap-3 border-b border-[#EEF0F5] pb-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EEF4FF]">
              <Navigation2 className="h-4 w-4 text-[#3777E1]" />
            </div>

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#969CAD]">
                Starting point
              </p>

              <p className="mt-1 text-sm font-semibold text-[#191E31]">
                {planner.from}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F2EEFF]">
              <MapPin className="h-4 w-4 text-[#785BEA]" />
            </div>

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#969CAD]">
                Destination
              </p>

              <p className="mt-1 text-sm font-semibold text-[#191E31]">
                {planner.to}
              </p>
            </div>
          </div>
        </div>

        <div className="relative mt-5 h-[190px] overflow-hidden rounded-[24px] bg-gradient-to-br from-[#EAF2FF] to-[#F3EEFF]">
          <div className="travel-grid absolute inset-0 opacity-70" />

          <svg
            viewBox="0 0 560 190"
            className="absolute inset-0 h-full w-full"
            fill="none"
          >
            <motion.path
              d="M40 154 C108 142 112 95 179 102 C246 110 271 61 333 70 C399 79 442 33 520 40"
              stroke="url(#travelRoute)"
              strokeWidth="7"
              strokeLinecap="round"
              initial={{
                pathLength: 0,
              }}
              whileInView={{
                pathLength: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1.8,
                ease: "easeInOut",
              }}
            />

            <defs>
              <linearGradient
                id="travelRoute"
                x1="40"
                y1="154"
                x2="520"
                y2="40"
              >
                <stop stopColor="#257EDB" />

                <stop
                  offset="1"
                  stopColor="#875BEF"
                />
              </linearGradient>
            </defs>
          </svg>

          <motion.div
            animate={{
              scale: [1, 1.12, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
            className="absolute bottom-[12%] left-[5%] flex h-11 w-11 items-center justify-center rounded-full border-4 border-white bg-[#287CE0] shadow-lg"
          >
            <Navigation2 className="h-4 w-4 rotate-12 text-white" />
          </motion.div>

          <motion.div
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-[5%] top-[8%] flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6A63F0] to-[#9957EE] shadow-xl shadow-purple-500/20"
          >
            <MapPin className="h-5 w-5 fill-white text-white" />
          </motion.div>

          <div className="absolute bottom-4 right-4 rounded-[18px] border border-white/70 bg-white/85 px-4 py-3 shadow-lg backdrop-blur-xl">
            <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#9298AA]">
              Fastest route
            </p>

            <div className="mt-1 flex items-center gap-2">
              <p className="text-lg font-semibold text-[#171C2F]">
                {planner.duration}
              </p>

              <Route className="h-4 w-4 text-[#755BE7]" />
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3">
          <div className="rounded-[18px] border border-[#E7EAF2] bg-white p-3">
            <p className="text-[9px] uppercase tracking-[0.12em] text-[#9A9FAF]">
              Distance
            </p>

            <p className="mt-1 text-sm font-semibold text-[#181D30]">
              {planner.distance}
            </p>
          </div>

          <div className="rounded-[18px] border border-[#E7EAF2] bg-white p-3">
            <p className="text-[9px] uppercase tracking-[0.12em] text-[#9A9FAF]">
              Date
            </p>

            <div className="mt-1 flex items-center gap-1.5">
              <CalendarDays className="h-3.5 w-3.5 text-[#765CE9]" />

              <p className="text-sm font-semibold text-[#181D30]">
                {planner.date}
              </p>
            </div>
          </div>

          <div className="rounded-[18px] border border-[#DDEFEA] bg-[#F2FAF7] p-3">
            <p className="text-[9px] uppercase tracking-[0.12em] text-[#6D9A8E]">
              Conditions
            </p>

            <p className="mt-1 text-sm font-semibold text-[#24826D]">
              {planner.condition}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ActivityCard({
  activity,
  index,
}: {
  activity: TravelActivityContent;
  index: number;
}) {
  const Icon =
    activityIcons[index] ??
    Footprints;

  return (
    <motion.article
      initial={{
        opacity: 0,
        x: 22,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        delay: index * 0.08,
        duration: 0.55,
      }}
      whileHover={{
        y: -4,
      }}
      className="rounded-[26px] border border-[#E6E9F1] bg-white p-5 shadow-[0_16px_45px_rgba(38,50,89,0.06)]"
    >
      <div className="flex items-start justify-between gap-5">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#EEF5FF] to-[#F2EEFF]">
            <Icon className="h-5 w-5 text-[#665DE6]" />
          </div>

          <div>
            <h4 className="text-lg font-semibold tracking-[-0.03em] text-[#161B2D]">
              {activity.name}
            </h4>

            <p className="mt-1 max-w-[280px] text-xs leading-5 text-[#7A8193]">
              {activity.description}
            </p>
          </div>
        </div>

        <div className="relative flex h-14 w-14 shrink-0 items-center justify-center">
          <svg
            viewBox="0 0 60 60"
            className="absolute inset-0 h-full w-full -rotate-90"
          >
            <circle
              cx="30"
              cy="30"
              r="24"
              fill="none"
              stroke="#ECEEF5"
              strokeWidth="5"
            />

            <motion.circle
              cx="30"
              cy="30"
              r="24"
              fill="none"
              stroke={
                activity.score >= 70
                  ? "#3A9BDA"
                  : "#E7A32F"
              }
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray="151"
              initial={{
                strokeDashoffset: 151,
              }}
              whileInView={{
                strokeDashoffset:
                  151 -
                  (151 *
                    activity.score) /
                    100,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1,
                delay:
                  index * 0.1,
              }}
            />
          </svg>

          <span className="text-sm font-semibold text-[#22273A]">
            {activity.score}
          </span>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <span
          className={`rounded-full px-3 py-1.5 text-[10px] font-semibold ${
            activity.level === "Good"
              ? "bg-[#EDF9F6] text-[#27836F]"
              : "bg-[#FFF7E8] text-[#C4861E]"
          }`}
        >
          {activity.level}
        </span>

        <p className="text-xs text-[#8A91A3]">
          Best time{" "}
          <span className="font-semibold text-[#42495D]">
            {activity.bestTime}
          </span>
        </p>
      </div>
    </motion.article>
  );
}

function ReadinessPanel({
  items,
}: {
  items: TravelReadinessContent[];
}) {
  const icons = [
    CloudSun,
    Route,
    WifiOff,
  ];

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 22,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      className="mt-5 rounded-[30px] bg-gradient-to-r from-[#12172B] to-[#252047] p-6 sm:p-7"
    >
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
        <div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-[#A18AF5]" />

            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#A89AF4]">
              Trip readiness
            </p>
          </div>

          <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">
            Ready before you leave.
          </h3>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {items.map(
            (item, index) => {
              const Icon =
                icons[index] ??
                ShieldCheck;

              return (
                <div
                  key={`${item.label}-${index}`}
                  className="flex min-w-[150px] items-center gap-3 rounded-[18px] border border-white/10 bg-white/[0.06] px-4 py-3"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.08]">
                    <Icon className="h-4 w-4 text-[#9F8BF4]" />
                  </div>

                  <div>
                    <p className="text-[9px] uppercase tracking-[0.12em] text-white/35">
                      {item.label}
                    </p>

                    <p className="mt-0.5 text-sm font-semibold text-white">
                      {
                        item.value
                      }
                    </p>
                  </div>
                </div>
              );
            },
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function TravelIntelligence({
  content,
  playStoreUrl,
}: TravelIntelligenceProps) {
  return (
    <section
      id="travel"
      className="relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32"
    >
      <div className="pointer-events-none absolute left-[-150px] top-[180px] h-[400px] w-[400px] rounded-full bg-[#277BD9]/10 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-[70px] right-[-150px] h-[400px] w-[400px] rounded-full bg-[#8258EC]/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
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

              {content.eyebrow}
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
              className="mt-6 max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-[#101426] sm:text-6xl"
            >
              {content.title}
            </motion.h2>
          </div>

          <motion.p
            initial={{
              opacity: 0,
              y: 16,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="max-w-xl text-base leading-8 text-[#747B8D] sm:text-lg lg:justify-self-end"
          >
            {content.description}
          </motion.p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-12">
          <motion.article
            initial={{
              opacity: 0,
              y: 26,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="rounded-[36px] border border-[#E5E8F1] bg-white p-6 shadow-[0_24px_70px_rgba(38,52,93,0.07)] sm:p-8 lg:col-span-7"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.17em] text-[#655ADF]">
                  Smart route planner
                </p>

                <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#12172A]">
                  Build your journey.
                </h3>

                <p className="mt-3 max-w-lg text-sm leading-6 text-[#777E90]">
                  Choose where you&apos;re
                  going and prepare with
                  route, distance and
                  conditions before
                  starting.
                </p>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F1EEFF]">
                <Route className="h-5 w-5 text-[#735BE6]" />
              </div>
            </div>

            <PlannerVisual
              planner={
                content.planner
              }
            />

            <a
              href={playStoreUrl}
              target="_blank"
              rel="noreferrer"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#5E55D8]"
            >
              Plan in the app

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.article>

          <div className="space-y-4 lg:col-span-5">
            <div className="mb-5">
              <p className="text-xs font-semibold uppercase tracking-[0.17em] text-[#237BD4]">
                Activity suitability
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[#12172A]">
                Pick the right time to
                move.
              </h3>
            </div>

            {content.activities.map(
              (activity, index) => (
                <ActivityCard
                  key={`${activity.name}-${index}`}
                  activity={
                    activity
                  }
                  index={index}
                />
              ),
            )}
          </div>
        </div>

        <ReadinessPanel
          items={
            content.readiness
          }
        />
      </div>
    </section>
  );
}