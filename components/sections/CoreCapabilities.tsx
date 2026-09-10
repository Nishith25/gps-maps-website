"use client";

import { motion } from "motion/react";

import {
  ArrowDownToLine,
  CloudSun,
  Compass,
  Gauge,
  Languages,
  Map,
  MapPin,
  Navigation2,
  ParkingCircle,
  Route,
  Search,
  Sparkles,
  SunMedium,
  Utensils,
} from "lucide-react";

import type {
  CapabilityContent,
  CapabilityKey,
} from "@/lib/content";

type CoreCapabilitiesProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: CapabilityContent[];
};

function NavigationVisual() {
  return (
    <div className="relative mt-8 h-[260px] overflow-hidden rounded-[28px] border border-white/15 bg-white/[0.06]">
      <div className="capability-grid absolute inset-0 opacity-35" />

      <motion.div
        animate={{
          x: [0, 6, 0],
          y: [0, -5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[10%] top-[13%] rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium text-white/70 backdrop-blur-xl"
      >
        <div className="flex items-center gap-2">
          <Search className="h-3.5 w-3.5" />
          Search destination
        </div>
      </motion.div>

      <svg
        viewBox="0 0 520 260"
        className="absolute inset-0 h-full w-full"
        fill="none"
      >
        <motion.path
          d="M46 224 C112 192 120 146 188 143 C258 140 258 91 326 81 C387 72 424 37 479 34"
          stroke="url(#capRoute)"
          strokeWidth="8"
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
            id="capRoute"
            x1="46"
            y1="224"
            x2="479"
            y2="34"
          >
            <stop stopColor="#63A7FF" />
            <stop
              offset="1"
              stopColor="#A97CFF"
            />
          </linearGradient>
        </defs>
      </svg>

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 2.6,
          repeat: Infinity,
        }}
        className="absolute bottom-[11%] left-[7%]"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-xl">
          <Navigation2 className="h-5 w-5 rotate-12 text-[#5169E8]" />
        </div>
      </motion.div>

      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[6%] top-[7%]"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6677FF] to-[#9E5CF2] shadow-xl shadow-purple-500/20">
          <MapPin className="h-5 w-5 fill-white text-white" />
        </div>
      </motion.div>

      <div className="absolute bottom-5 right-5 rounded-2xl border border-white/10 bg-[#10162B]/80 px-4 py-3 backdrop-blur-xl">
        <p className="text-[10px] uppercase tracking-[0.17em] text-white/40">
          Fastest route
        </p>

        <div className="mt-1 flex items-center gap-3">
          <p className="text-xl font-semibold text-white">
            14 min
          </p>

          <Route className="h-4 w-4 text-[#8E73F4]" />
        </div>
      </div>
    </div>
  );
}

function WeatherVisual() {
  return (
    <div className="relative mt-8 h-[170px] overflow-hidden rounded-[26px] bg-gradient-to-br from-[#F3F7FF] to-[#ECE9FF]">
      <motion.div
        animate={{
          y: [0, -7, 0],
          rotate: [0, 4, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-6 top-6"
      >
        <SunMedium className="h-12 w-12 text-[#FFB640]" />
      </motion.div>

      <motion.div
        animate={{
          x: [0, 7, 0],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-5 top-7"
      >
        <CloudSun className="h-14 w-14 text-[#675BE6]" />
      </motion.div>

      <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
        <div>
          <p className="text-4xl font-semibold tracking-[-0.05em] text-[#15192A]">
            30°
          </p>

          <p className="mt-1 text-xs font-medium text-[#757B8D]">
            Comfortable outside
          </p>
        </div>

        <div className="rounded-full bg-white/80 px-3 py-1.5 text-xs font-semibold text-[#6458DC] shadow-sm">
          56% rain
        </div>
      </div>
    </div>
  );
}

function NearbyVisual() {
  return (
    <div className="relative mt-8 h-[170px] overflow-hidden rounded-[26px] border border-[#E9ECF4] bg-[#F8F9FD]">
      <div className="capability-grid-light absolute inset-0 opacity-60" />

      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[21%] top-[25%]"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7559ED] text-white shadow-lg shadow-purple-500/20">
          <Utensils className="h-4 w-4" />
        </div>
      </motion.div>

      <motion.div
        animate={{
          y: [0, 7, 0],
        }}
        transition={{
          duration: 3.7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[22%] top-[18%]"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2F8EE9] text-white shadow-lg shadow-blue-500/20">
          <ParkingCircle className="h-4 w-4" />
        </div>
      </motion.div>

      <motion.div
        animate={{
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
        }}
        className="absolute bottom-[20%] left-[46%]"
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-[#356FE2] to-[#7F5CEB] shadow-xl">
          <MapPin className="h-4 w-4 fill-white text-white" />
        </div>
      </motion.div>
    </div>
  );
}

function OfflineVisual() {
  return (
    <div className="relative mt-8 flex h-[190px] items-center justify-center overflow-hidden rounded-[27px] bg-[#F3F6FF]">
      <motion.div
        animate={{
          rotate: [0, 2, -2, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute flex h-[130px] w-[175px] items-center justify-center rounded-[30px] border border-[#DCE4FF] bg-white shadow-[0_20px_60px_rgba(56,83,167,0.12)]"
      >
        <Map className="h-16 w-16 text-[#5E69E8]" />

        <div className="absolute -bottom-4 -right-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#3479E4] to-[#8458EE] text-white shadow-xl">
          <motion.div
            animate={{
              y: [0, 4, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            <ArrowDownToLine className="h-5 w-5" />
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute bottom-4 left-4 rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold text-[#5B6380] shadow-sm">
        Ready offline
      </div>
    </div>
  );
}

function TravelVisual() {
  return (
    <div className="relative mt-8 h-[190px] overflow-hidden rounded-[27px] bg-gradient-to-r from-[#151A31] to-[#27234B]">
      <div className="absolute left-5 top-5 rounded-full bg-white/10 px-3 py-1.5 text-[11px] font-medium text-white/70">
        Travel intelligence
      </div>

      <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-2">
        {[
          ["Weather", "Good"],
          ["Traffic", "Light"],
          ["Route", "Fast"],
        ].map(([label, value]) => (
          <div
            key={label}
            className="rounded-2xl border border-white/10 bg-white/[0.07] p-3 backdrop-blur-xl"
          >
            <p className="text-[10px] text-white/40">
              {label}
            </p>

            <p className="mt-1 text-sm font-semibold text-white">
              {value}
            </p>
          </div>
        ))}
      </div>

      <motion.div
        animate={{
          x: [0, 22, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-10 top-8"
      >
        <Navigation2 className="h-12 w-12 rotate-[42deg] text-[#8D74F2]" />
      </motion.div>
    </div>
  );
}

function ToolsVisual() {
  const tools = [
    {
      icon: ParkingCircle,
      label: "Parking",
    },
    {
      icon: Gauge,
      label: "Speed",
    },
    {
      icon: Compass,
      label: "Compass",
    },
    {
      icon: Languages,
      label: "Translate",
    },
  ];

  return (
    <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
      {tools.map((tool, index) => {
        const Icon = tool.icon;

        return (
          <motion.div
            key={tool.label}
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
            transition={{
              delay: index * 0.08,
            }}
            whileHover={{
              y: -5,
            }}
            className="rounded-[22px] border border-[#E7EAF2] bg-white p-4 shadow-[0_12px_35px_rgba(28,44,92,0.05)]"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F2EFFF]">
              <Icon className="h-4 w-4 text-[#7659E9]" />
            </div>

            <p className="mt-4 text-xs font-semibold text-[#555D72]">
              {tool.label}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}

export default function CoreCapabilities({
  eyebrow,
  title,
  description,
  items,
}: CoreCapabilitiesProps) {
  const featureMap = Object.fromEntries(
    items.map((item) => [
      item.id,
      item,
    ]),
  ) as Partial<
    Record<
      CapabilityKey,
      CapabilityContent
    >
  >;

  const navigation =
    featureMap.navigation;

  const weather =
    featureMap.weather;

  const nearby =
    featureMap.nearby;

  const offline =
    featureMap.offline;

  const travel =
    featureMap.travel;

  const tools =
    featureMap.tools;

  const showSideColumn =
    weather?.isVisible ||
    nearby?.isVisible;

  return (
    <section
      id="capabilities"
      className="relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32"
    >
      <div className="pointer-events-none absolute left-[-200px] top-[400px] h-[400px] w-[400px] rounded-full bg-[#7958EF]/10 blur-[120px]" />

      <div className="pointer-events-none absolute right-[-200px] top-[100px] h-[420px] w-[420px] rounded-full bg-[#2775D9]/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
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
            className="inline-flex items-center gap-2 rounded-full border border-[#E2E3FF] bg-white px-4 py-2 text-xs font-semibold text-[#6659DD] shadow-sm"
          >
            <Sparkles className="h-3.5 w-3.5" />

            {eyebrow}
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
            transition={{
              delay: 0.07,
            }}
            className="mt-6 text-4xl font-semibold tracking-[-0.05em] text-[#101426] sm:text-5xl lg:text-6xl"
          >
            {title}
          </motion.h2>

          <motion.p
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
            transition={{
              delay: 0.12,
            }}
            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#747B8D] sm:text-lg"
          >
            {description}
          </motion.p>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-12">
          {navigation?.isVisible && (
            <motion.article
              initial={{
                opacity: 0,
                y: 28,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.65,
              }}
              className="overflow-hidden rounded-[34px] bg-gradient-to-br from-[#12172A] via-[#171D36] to-[#2C2452] p-6 shadow-[0_30px_80px_rgba(32,39,78,0.15)] sm:p-8 lg:col-span-7 lg:self-start"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A99AF7]">
                {navigation.label}
              </p>

              <h3 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                {navigation.title}
              </h3>

              <p className="mt-4 max-w-xl leading-7 text-white/55">
                {navigation.description}
              </p>

              <NavigationVisual />
            </motion.article>
          )}

          {showSideColumn && (
            <div className="grid gap-5 lg:col-span-5">
              {weather?.isVisible && (
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
                    duration: 0.6,
                    delay: 0.08,
                  }}
                  className="rounded-[32px] border border-[#E7EAF3] bg-white p-6 shadow-[0_22px_60px_rgba(41,54,95,0.07)] sm:p-7"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.17em] text-[#6E5ADF]">
                    {weather.label}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[#111629]">
                    {weather.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#747B8C]">
                    {weather.description}
                  </p>

                  <WeatherVisual />
                </motion.article>
              )}

              {nearby?.isVisible && (
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
                    duration: 0.6,
                    delay: 0.14,
                  }}
                  className="rounded-[32px] border border-[#E7EAF3] bg-white p-6 shadow-[0_22px_60px_rgba(41,54,95,0.07)] sm:p-7"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.17em] text-[#2676D3]">
                    {nearby.label}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[#111629]">
                    {nearby.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#747B8C]">
                    {nearby.description}
                  </p>

                  <NearbyVisual />
                </motion.article>
              )}
            </div>
          )}

          {offline?.isVisible && (
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
              transition={{
                duration: 0.65,
              }}
              className="rounded-[32px] border border-[#E7EAF3] bg-white p-6 shadow-[0_22px_60px_rgba(41,54,95,0.07)] sm:p-7 lg:col-span-5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.17em] text-[#5F58DE]">
                {offline.label}
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[#111629]">
                {offline.title}
              </h3>

              <p className="mt-3 leading-7 text-[#747B8C]">
                {offline.description}
              </p>

              <OfflineVisual />
            </motion.article>
          )}

          {travel?.isVisible && (
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
              transition={{
                duration: 0.65,
                delay: 0.08,
              }}
              className="rounded-[32px] border border-[#E7EAF3] bg-white p-6 shadow-[0_22px_60px_rgba(41,54,95,0.07)] sm:p-7 lg:col-span-7"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.17em] text-[#3973DA]">
                {travel.label}
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[#111629]">
                {travel.title}
              </h3>

              <p className="mt-3 max-w-xl leading-7 text-[#747B8C]">
                {travel.description}
              </p>

              <TravelVisual />
            </motion.article>
          )}

          {tools?.isVisible && (
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
              transition={{
                duration: 0.65,
              }}
              className="rounded-[34px] border border-[#E7EAF3] bg-[#F9FAFD] p-6 sm:p-8 lg:col-span-12"
            >
              <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.17em] text-[#705AE2]">
                    {tools.label}
                  </p>

                  <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#111629]">
                    {tools.title}
                  </h3>

                  <p className="mt-3 max-w-xl leading-7 text-[#747B8C]">
                    {tools.description}
                  </p>
                </div>

                <ToolsVisual />
              </div>
            </motion.article>
          )}
        </div>
      </div>
    </section>
  );
}