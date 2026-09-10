"use client";

import { motion } from "motion/react";

import {
  Activity,
  BellRing,
  CloudRain,
  CloudSun,
  Droplets,
  Eye,
  Footprints,
  Gauge,
  Sparkles,
  SunMedium,
  Umbrella,
  Wind,
} from "lucide-react";

import type {
  WeatherContent,
} from "@/lib/content";

const detailIcons = [
  Droplets,
  Wind,
  Eye,
  Gauge,
];

type WeatherIntelligenceProps = {
  content: WeatherContent;
};

function RainGraph() {
  return (
    <div className="relative mt-7 h-[180px] overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.045]">
      <div className="weather-grid absolute inset-0 opacity-40" />

      <svg
        viewBox="0 0 520 180"
        className="absolute inset-0 h-full w-full"
        fill="none"
      >
        <motion.path
          d="M18 125 C82 117 105 82 166 92 C224 102 257 52 314 66 C379 83 410 38 500 45"
          stroke="url(#weatherLine)"
          strokeWidth="5"
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
            duration: 1.7,
            ease: "easeInOut",
          }}
        />

        <defs>
          <linearGradient
            id="weatherLine"
            x1="18"
            y1="125"
            x2="500"
            y2="45"
          >
            <stop stopColor="#48A6FF" />

            <stop
              offset="1"
              stopColor="#8A66F2"
            />
          </linearGradient>
        </defs>
      </svg>

      <div className="absolute bottom-4 left-5 right-5 flex justify-between text-[10px] font-medium text-white/35">
        <span>5 PM</span>
        <span>8 PM</span>
        <span>11 PM</span>
        <span>2 AM</span>
      </div>
    </div>
  );
}

function CurrentWeather({
  content,
}: {
  content: WeatherContent;
}) {
  return (
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
        duration: 0.65,
      }}
      className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-[#12172A] via-[#18203B] to-[#2C2453] p-7 shadow-[0_28px_80px_rgba(34,42,84,0.15)] sm:p-9 lg:col-span-7"
    >
      <div className="pointer-events-none absolute right-[-50px] top-[-60px] h-[220px] w-[220px] rounded-full bg-[#6659EE]/30 blur-[90px]" />

      <div className="relative">
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A99AF7]">
              Current conditions
            </p>

            <h3 className="mt-3 text-xl font-semibold text-white">
              {content.location}
            </h3>

            <p className="mt-1 text-sm text-white/40">
              Live weather overview
            </p>
          </div>

          <motion.div
            animate={{
              y: [0, -6, 0],
              rotate: [0, 4, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex h-16 w-16 items-center justify-center rounded-[22px] border border-white/10 bg-white/[0.08]"
          >
            <CloudRain className="h-8 w-8 text-[#80BAFF]" />
          </motion.div>
        </div>

        <div className="mt-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="text-[76px] font-semibold leading-none tracking-[-0.07em] text-white sm:text-[92px]">
              {content.temperature}
            </div>

            <p className="mt-3 text-lg font-semibold text-white">
              {content.condition}
            </p>

            <p className="mt-1 text-sm text-white/45">
              {content.feelsLike}
            </p>
          </div>

          <div className="rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-xs font-semibold text-[#B6A6FF] backdrop-blur-xl">
            56% chance of rain
          </div>
        </div>

        <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {content.details.map(
            (detail, index) => {
              const Icon =
                detailIcons[index] ??
                Gauge;

              return (
                <motion.div
                  key={`${detail.label}-${index}`}
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
                  transition={{
                    delay:
                      0.1 +
                      index * 0.07,
                  }}
                  className="rounded-[20px] border border-white/10 bg-white/[0.055] p-4"
                >
                  <Icon className="h-4 w-4 text-[#8EAFFF]" />

                  <p className="mt-4 text-[10px] uppercase tracking-[0.14em] text-white/35">
                    {detail.label}
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white">
                    {detail.value}
                  </p>
                </motion.div>
              );
            },
          )}
        </div>

        <RainGraph />
      </div>
    </motion.article>
  );
}

function ForecastCard({
  content,
}: {
  content: WeatherContent;
}) {
  return (
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
      className="rounded-[34px] border border-[#E6E9F3] bg-white p-6 shadow-[0_22px_60px_rgba(41,54,95,0.07)] sm:p-7 lg:col-span-5"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.17em] text-[#6559DF]">
            Hourly forecast
          </p>

          <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[#111629]">
            See what&apos;s coming next.
          </h3>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F1EEFF]">
          <CloudSun className="h-5 w-5 text-[#765BEA]" />
        </div>
      </div>

      <div className="mt-7 space-y-3">
        {content.forecast.map(
          (item, index) => (
            <motion.div
              key={`${item.time}-${index}`}
              initial={{
                opacity: 0,
                x: 15,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay:
                  index * 0.07,
              }}
              className={`flex items-center justify-between rounded-[20px] border p-4 ${
                index === 0
                  ? "border-[#D9E3FF] bg-gradient-to-r from-[#EEF4FF] to-[#F2EEFF]"
                  : "border-[#ECEEF4] bg-[#FAFBFD]"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-xl ${
                    index === 0
                      ? "bg-white"
                      : "bg-[#F1F3F8]"
                  }`}
                >
                  {index === 1 ? (
                    <CloudRain className="h-4 w-4 text-[#695BE5]" />
                  ) : (
                    <SunMedium className="h-4 w-4 text-[#F4AB32]" />
                  )}
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#1B2032]">
                    {item.time}
                  </p>

                  <p className="mt-0.5 text-xs text-[#8A91A3]">
                    {item.rain} rain
                  </p>
                </div>
              </div>

              <p className="text-xl font-semibold tracking-[-0.04em] text-[#111629]">
                {
                  item.temperature
                }
              </p>
            </motion.div>
          ),
        )}
      </div>
    </motion.article>
  );
}

function AlertCard({
  content,
}: {
  content: WeatherContent;
}) {
  return (
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
      className="rounded-[32px] border border-[#F3DFBE] bg-[#FFF9EF] p-6 sm:p-7 lg:col-span-4"
    >
      <div className="flex items-center justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FFF0CE]">
          <BellRing className="h-5 w-5 text-[#DF941E]" />
        </div>

        <span className="rounded-full bg-white px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#C88925] shadow-sm">
          Weather alert
        </span>
      </div>

      <h3 className="mt-6 text-xl font-semibold tracking-[-0.035em] text-[#232638]">
        {content.alert.title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-[#7C7467]">
        {content.alert.description}
      </p>

      <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-[#F2E3C7]">
        <motion.div
          initial={{
            width: 0,
          }}
          whileInView={{
            width: "74%",
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.1,
          }}
          className="h-full rounded-full bg-[#E8A22D]"
        />
      </div>

      <p className="mt-3 text-xs font-semibold text-[#C48620]">
        {content.alert.confidence}
      </p>
    </motion.article>
  );
}

function AQICard({
  content,
}: {
  content: WeatherContent;
}) {
  return (
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
      transition={{
        delay: 0.08,
      }}
      className="rounded-[32px] border border-[#DCEFE9] bg-[#F2FBF8] p-6 sm:p-7 lg:col-span-4"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.17em] text-[#238C77]">
            Air quality
          </p>

          <h3 className="mt-3 text-xl font-semibold text-[#192C28]">
            Healthy for outdoor
            plans.
          </h3>
        </div>

        <Activity className="h-6 w-6 text-[#249A83]" />
      </div>

      <div className="mt-8 flex items-center gap-5">
        <div className="relative flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 h-full w-full -rotate-90"
          >
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="#DDF2EC"
              strokeWidth="8"
              fill="none"
            />

            <motion.circle
              cx="50"
              cy="50"
              r="40"
              stroke="#28A88D"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="251"
              initial={{
                strokeDashoffset: 251,
              }}
              whileInView={{
                strokeDashoffset: 186,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1.2,
              }}
            />
          </svg>

          <div className="text-center">
            <p className="text-2xl font-semibold text-[#162A26]">
              {content.aqi.score}
            </p>

            <p className="text-[9px] uppercase tracking-[0.12em] text-[#6B8E86]">
              AQI
            </p>
          </div>
        </div>

        <div>
          <p className="text-lg font-semibold text-[#20856F]">
            {content.aqi.label}
          </p>

          <p className="mt-2 text-sm leading-6 text-[#66847D]">
            {
              content.aqi
                .description
            }
          </p>
        </div>
      </div>
    </motion.article>
  );
}

function InsightCard({
  content,
}: {
  content: WeatherContent;
}) {
  return (
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
      transition={{
        delay: 0.14,
      }}
      className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#EEF5FF] to-[#F2EDFF] p-6 sm:p-7 lg:col-span-4"
    >
      <div className="absolute right-[-30px] top-[-35px] h-32 w-32 rounded-full bg-[#7562EA]/10 blur-[35px]" />

      <div className="relative">
        <div className="flex items-center justify-between">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-sm">
            <Footprints className="h-5 w-5 text-[#6559DF]" />
          </div>

          <Umbrella className="h-5 w-5 text-[#8B78EC]" />
        </div>

        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.17em] text-[#6559DF]">
          Smart insight
        </p>

        <h3 className="mt-3 text-xl font-semibold tracking-[-0.035em] text-[#191D31]">
          {content.insight.title}
        </h3>

        <p className="mt-2 text-3xl font-semibold tracking-[-0.05em] text-[#6254D9]">
          {content.insight.time}
        </p>

        <p className="mt-4 text-sm leading-6 text-[#73798D]">
          {
            content.insight
              .description
          }
        </p>
      </div>
    </motion.article>
  );
}

export default function WeatherIntelligence({
  content,
}: WeatherIntelligenceProps) {
  return (
    <section
      id="weather"
      className="relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32"
    >
      <div className="pointer-events-none absolute left-[-160px] top-[200px] h-[380px] w-[380px] rounded-full bg-[#2A7DE0]/10 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-[100px] right-[-140px] h-[400px] w-[400px] rounded-full bg-[#8058ED]/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
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
              className="inline-flex items-center gap-2 rounded-full border border-[#E0E4FF] bg-white px-4 py-2 text-xs font-semibold text-[#6559DF] shadow-sm"
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
              transition={{
                delay: 0.06,
              }}
              className="mt-6 max-w-2xl text-4xl font-semibold leading-[1] tracking-[-0.05em] text-[#101426] sm:text-5xl lg:text-6xl"
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
            transition={{
              delay: 0.1,
            }}
            className="max-w-xl text-base leading-8 text-[#72798B] sm:text-lg lg:justify-self-end"
          >
            {content.description}
          </motion.p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-12">
          <CurrentWeather
            content={content}
          />

          <ForecastCard
            content={content}
          />

          <AlertCard
            content={content}
          />

          <AQICard
            content={content}
          />

          <InsightCard
            content={content}
          />
        </div>
      </div>
    </section>
  );
}