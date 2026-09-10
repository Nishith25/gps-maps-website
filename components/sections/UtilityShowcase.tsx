"use client";

import { motion } from "motion/react";

import {
  Compass,
  Fuel,
  Gauge,
  Hospital,
  Languages,
  LocateFixed,
  MapPin,
  Navigation2,
  ParkingCircle,
  Search,
  ShoppingBag,
  Sparkles,
  Utensils,
} from "lucide-react";

import type { UtilitiesContent } from "@/lib/content";

const categoryIcons = [
  Utensils,
  Fuel,
  Hospital,
  ShoppingBag,
];

const categoryStyles = [
  "from-[#7359ED] to-[#9359EF]",
  "from-[#2D83E5] to-[#53A0ED]",
  "from-[#E25E76] to-[#F28799]",
  "from-[#39A988] to-[#64C4A8]",
];

function NearbyCanvas({
  categories,
}: {
  categories: UtilitiesContent["nearby"]["categories"];
}) {
  return (
    <div className="relative mt-8 min-h-[420px] overflow-hidden rounded-[30px] border border-[#E5E9F3] bg-gradient-to-br from-[#F5F8FF] to-[#F4F0FF]">
      <div className="utility-map-grid absolute inset-0 opacity-70" />

      <div className="absolute left-6 right-6 top-6 z-20">
        <div className="flex items-center gap-3 rounded-[20px] border border-white/80 bg-white/90 px-4 py-3 shadow-[0_15px_45px_rgba(44,54,91,0.08)] backdrop-blur-xl">
          <Search className="h-4 w-4 text-[#7A8193]" />

          <span className="text-sm text-[#8A91A3]">
            Search places nearby
          </span>

          <div className="ml-auto rounded-full bg-[#F1EEFF] px-3 py-1 text-[10px] font-semibold text-[#7059E4]">
            2 km
          </div>
        </div>
      </div>

      <svg
        viewBox="0 0 600 420"
        className="absolute inset-0 h-full w-full"
        fill="none"
      >
        <g opacity="0.18">
          <path
            d="M-10 95 C100 130 160 52 260 95 C360 140 405 70 615 110"
            stroke="#637397"
            strokeWidth="2"
          />

          <path
            d="M-20 250 C100 205 173 292 294 240 C410 191 474 274 620 215"
            stroke="#637397"
            strokeWidth="2"
          />

          <path
            d="M72 -20 C98 80 44 151 100 238 C154 321 100 374 130 440"
            stroke="#637397"
            strokeWidth="2"
          />

          <path
            d="M400 -20 C360 91 455 160 408 249 C360 340 426 377 394 440"
            stroke="#637397"
            strokeWidth="2"
          />
        </g>
      </svg>

      <motion.div
        animate={{
          scale: [1, 1.13, 1],
        }}
        transition={{
          duration: 2.7,
          repeat: Infinity,
        }}
        className="absolute left-[45%] top-[44%] z-20"
      >
        <div className="relative flex h-14 w-14 items-center justify-center rounded-full border-[5px] border-white bg-gradient-to-br from-[#287FDF] to-[#7959EA] shadow-[0_14px_35px_rgba(80,78,211,0.25)]">
          <Navigation2 className="h-5 w-5 rotate-12 text-white" />

          <motion.div
            animate={{
              scale: [1, 2, 1],
              opacity: [0.3, 0, 0.3],
            }}
            transition={{
              duration: 2.7,
              repeat: Infinity,
            }}
            className="absolute inset-0 -z-10 rounded-full bg-[#665AE5]"
          />
        </div>
      </motion.div>

      {[
        {
          left: "15%",
          top: "37%",
          Icon: Utensils,
          gradient: "from-[#7658EE] to-[#9A5CEE]",
        },
        {
          left: "72%",
          top: "29%",
          Icon: Fuel,
          gradient: "from-[#287EE1] to-[#4D9CEC]",
        },
        {
          left: "69%",
          top: "66%",
          Icon: Hospital,
          gradient: "from-[#E15D79] to-[#F08497]",
        },
        {
          left: "23%",
          top: "69%",
          Icon: ShoppingBag,
          gradient: "from-[#36A887] to-[#62C3A7]",
        },
      ].map(({ left, top, Icon, gradient }, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            scale: 0.6,
            y: 12,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          animate={{
            y: [0, index % 2 === 0 ? -7 : 7, 0],
          }}
          viewport={{
            once: true,
          }}
          transition={{
            opacity: {
              delay: index * 0.08,
            },
            scale: {
              delay: index * 0.08,
            },
            y: {
              duration: 3 + index * 0.35,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          style={{
            left,
            top,
          }}
          className={`absolute z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} text-white shadow-xl`}
        >
          <Icon className="h-5 w-5" />
        </motion.div>
      ))}

      <div className="absolute bottom-5 left-5 right-5 z-20 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {categories.map((category, index) => {
          const Icon =
            categoryIcons[index % categoryIcons.length] ??
            Utensils;

          const categoryStyle =
            categoryStyles[index % categoryStyles.length] ??
            "from-[#7359ED] to-[#9359EF]";

          return (
            <motion.div
              key={`${category.name}-${index}`}
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
                delay: 0.1 + index * 0.06,
              }}
              className="rounded-[18px] border border-white/80 bg-white/90 p-3 shadow-sm backdrop-blur-xl"
            >
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br ${categoryStyle} text-white`}
              >
                <Icon className="h-3.5 w-3.5" />
              </div>

              <p className="mt-3 text-xs font-semibold text-[#1B2032]">
                {category.name}
              </p>

              <p className="mt-1 text-[10px] text-[#9298A8]">
                {category.distance}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function ParkingVisual() {
  return (
    <div className="relative mt-6 h-[190px] overflow-hidden rounded-[25px] bg-gradient-to-br from-[#15192E] to-[#28204A]">
      <div className="utility-dark-grid absolute inset-0 opacity-40" />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="absolute left-[18%] top-[28%]"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-gradient-to-br from-[#626DF1] to-[#9858EF] shadow-xl shadow-purple-500/20">
          <ParkingCircle className="h-6 w-6 text-white" />
        </div>
      </motion.div>

      <motion.div
        animate={{
          y: [0, -7, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
        }}
        className="absolute right-[12%] top-[24%] rounded-full border border-white/10 bg-white/[0.07] px-3 py-2 text-[10px] font-medium text-white/60 backdrop-blur-xl"
      >
        Saved parking
      </motion.div>

      <div className="absolute bottom-5 left-5 right-5 rounded-[18px] border border-white/10 bg-white/[0.06] p-3 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <MapPin className="h-4 w-4 text-[#9B7CF4]" />

          <div>
            <p className="text-[9px] uppercase tracking-[0.12em] text-white/30">
              Parking location
            </p>

            <p className="mt-0.5 text-xs font-semibold text-white">
              Pinned successfully
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SpeedVisual() {
  return (
    <div className="relative mt-6 flex h-[165px] items-center justify-center overflow-hidden rounded-[25px] bg-[#F5F7FC]">
      <div className="absolute h-[130px] w-[130px] rounded-full border-[11px] border-[#E8EBF3]" />

      <motion.div
        initial={{
          rotate: -125,
        }}
        whileInView={{
          rotate: 25,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.4,
          ease: "easeOut",
        }}
        className="absolute bottom-[49%] left-1/2 h-[55px] w-1 origin-bottom rounded-full bg-gradient-to-t from-[#765AE9] to-[#347DE0]"
      />

      <div className="relative text-center">
        <p className="text-4xl font-semibold tracking-[-0.055em] text-[#131829]">
          48
        </p>

        <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#969CAC]">
          km/h
        </p>
      </div>
    </div>
  );
}

function CompassVisual() {
  return (
    <div className="relative mt-6 flex h-[165px] items-center justify-center overflow-hidden rounded-[25px] bg-gradient-to-br from-[#F5F7FF] to-[#F3EFFF]">
      <motion.div
        animate={{
          rotate: [0, 18, -8, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative flex h-[115px] w-[115px] items-center justify-center rounded-full border border-[#DDE2F0] bg-white shadow-[0_15px_35px_rgba(41,53,96,0.08)]"
      >
        <span className="absolute top-2 text-[10px] font-semibold text-[#5B6275]">
          N
        </span>

        <span className="absolute bottom-2 text-[10px] font-semibold text-[#A0A5B2]">
          S
        </span>

        <span className="absolute left-3 text-[10px] font-semibold text-[#A0A5B2]">
          W
        </span>

        <span className="absolute right-3 text-[10px] font-semibold text-[#A0A5B2]">
          E
        </span>

        <Navigation2 className="h-12 w-12 text-[#685DE7]" />
      </motion.div>
    </div>
  );
}

function TranslatorVisual() {
  return (
    <div className="mt-6 rounded-[25px] bg-gradient-to-br from-[#F9F5FF] to-[#EEF5FF] p-5">
      <div className="flex items-center justify-between">
        <div className="rounded-full bg-white px-3 py-1.5 text-[10px] font-semibold text-[#646C7F] shadow-sm">
          English
        </div>

        <Languages className="h-5 w-5 text-[#755DE8]" />

        <div className="rounded-full bg-white px-3 py-1.5 text-[10px] font-semibold text-[#646C7F] shadow-sm">
          Hindi
        </div>
      </div>

      <motion.div
        animate={{
          opacity: [0.55, 1, 0.55],
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
        }}
        className="mt-5 rounded-[18px] border border-white bg-white/75 p-4"
      >
        <p className="text-[10px] uppercase tracking-[0.13em] text-[#9B9FAE]">
          Translate while travelling
        </p>

        <div className="mt-3 h-2 w-[82%] rounded-full bg-[#DBDDF0]" />

        <div className="mt-2 h-2 w-[58%] rounded-full bg-[#E6E2F8]" />
      </motion.div>
    </div>
  );
}

function MovingStrip({
  items,
}: {
  items: string[];
}) {
  const repeatedItems = [
    ...items,
    ...items,
  ];

  return (
    <div className="relative mt-14 overflow-hidden">
      <div className="utility-fade-left pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-24" />

      <div className="utility-fade-right pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-24" />

      <motion.div
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex w-max gap-3"
      >
        {repeatedItems.map(
          (item, index) => (
            <div
              key={`${item}-${index}`}
              className="flex shrink-0 items-center gap-2 rounded-full border border-[#E2E6EF] bg-white px-5 py-3 text-xs font-semibold text-[#525A6E] shadow-sm"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#337CE0] to-[#7B5AE9]" />

              {item}
            </div>
          ),
        )}
      </motion.div>
    </div>
  );
}

type UtilityShowcaseProps = {
  content: UtilitiesContent;
};

export default function UtilityShowcase({
  content,
}: UtilityShowcaseProps) {
  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32">
      <div className="pointer-events-none absolute left-[-180px] top-[280px] h-[400px] w-[400px] rounded-full bg-[#337CE0]/10 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-[100px] right-[-160px] h-[420px] w-[420px] rounded-full bg-[#8158ED]/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
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
            className="inline-flex items-center gap-2 rounded-full border border-[#DFE3FF] bg-white px-4 py-2 text-xs font-semibold text-[#6659DF] shadow-sm"
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
            className="mt-6 text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-[#101426] sm:text-6xl"
          >
            {content.title}
          </motion.h2>

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
            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#747B8D] sm:text-lg"
          >
            {content.description}
          </motion.p>
        </div>

        <MovingStrip
          items={content.marquee}
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-12">
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
            className="rounded-[36px] border border-[#E4E8F2] bg-white p-6 shadow-[0_25px_70px_rgba(38,52,93,0.07)] sm:p-8 lg:col-span-7"
          >
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.17em] text-[#6659DF]">
                  Nearby places
                </p>

                <h3 className="mt-3 text-3xl font-semibold tracking-[-0.045em] text-[#12172A]">
                  {content.nearby.title}
                </h3>

                <p className="mt-3 max-w-lg text-sm leading-6 text-[#777E90]">
                  {content.nearby.description}
                </p>
              </div>

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F0EEFF]">
                <LocateFixed className="h-5 w-5 text-[#725AE6]" />
              </div>
            </div>

            <NearbyCanvas
              categories={
                content.nearby.categories
              }
            />
          </motion.article>

          <div className="grid gap-5 lg:col-span-5">
            <motion.article
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
              className="rounded-[32px] border border-[#E4E8F2] bg-white p-6 shadow-[0_20px_60px_rgba(38,52,93,0.06)] sm:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#695AE3]">
                    Parking manager
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[#14192B]">
                    {content.parking.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#7A8192]">
                    {content.parking.description}
                  </p>
                </div>

                <ParkingCircle className="h-6 w-6 shrink-0 text-[#715BE6]" />
              </div>

              <ParkingVisual />
            </motion.article>
          </div>

          <motion.article
            initial={{
              opacity: 0,
              y: 24,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="rounded-[32px] border border-[#E4E8F2] bg-white p-6 shadow-[0_20px_60px_rgba(38,52,93,0.06)] sm:p-7 lg:col-span-4"
          >
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#3479D8]">
                Speedometer
              </p>

              <Gauge className="h-5 w-5 text-[#3479D8]" />
            </div>

            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[#14192B]">
              {content.speedometer.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#7A8192]">
              {content.speedometer.description}
            </p>

            <SpeedVisual />
          </motion.article>

          <motion.article
            initial={{
              opacity: 0,
              y: 24,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.06,
            }}
            className="rounded-[32px] border border-[#E4E8F2] bg-white p-6 shadow-[0_20px_60px_rgba(38,52,93,0.06)] sm:p-7 lg:col-span-4"
          >
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#735AE4]">
                Compass
              </p>

              <Compass className="h-5 w-5 text-[#735AE4]" />
            </div>

            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[#14192B]">
              {content.compass.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#7A8192]">
              {content.compass.description}
            </p>

            <CompassVisual />
          </motion.article>

          <motion.article
            initial={{
              opacity: 0,
              y: 24,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.12,
            }}
            className="rounded-[32px] border border-[#E4E8F2] bg-white p-6 shadow-[0_20px_60px_rgba(38,52,93,0.06)] sm:p-7 lg:col-span-4"
          >
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8A58DE]">
                Translator
              </p>

              <Languages className="h-5 w-5 text-[#8A58DE]" />
            </div>

            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[#14192B]">
              {content.translator.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#7A8192]">
              {content.translator.description}
            </p>

            <TranslatorVisual />
          </motion.article>
        </div>
      </div>
    </section>
  );
}