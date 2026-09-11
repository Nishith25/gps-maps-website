"use client";

import {
  Activity,
  BellRing,
  CloudRain,
  CloudSun,
  Droplets,
  Eye,
  Gauge,
  Radar,
  SunMedium,
  Wind,
} from "lucide-react";

import type {
  WeatherContent,
} from "@/lib/content";

type WeatherIntelligenceProps = {
  content: WeatherContent;
};

const coverage = [
  {
    label:
      "Current weather",
    Icon: CloudSun,
  },
  {
    label:
      "Hourly forecast",
    Icon: SunMedium,
  },
  {
    label:
      "10-day forecast",
    Icon: CloudRain,
  },
  {
    label:
      "Weather radar",
    Icon: Radar,
  },
  {
    label:
      "Weather alerts",
    Icon: BellRing,
  },
  {
    label:
      "Rain awareness",
    Icon: Droplets,
  },
  {
    label:
      "AQI & pollutants",
    Icon: Activity,
  },
  {
    label:
      "Outdoor recommendations",
    Icon: Wind,
  },
];

const detailIcons = [
  Droplets,
  Wind,
  Eye,
  Gauge,
];

function WeatherVisual({
  content,
}: {
  content: WeatherContent;
}) {
  return (
    <div className="relative overflow-hidden rounded-[32px] bg-[#111629] p-6 text-white sm:p-8">
      <div className="pointer-events-none absolute right-[-70px] top-[-70px] h-56 w-56 rounded-full bg-[#6659DF]/25 blur-[85px]" />

      <div className="relative">
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="text-xs font-medium text-white/45">
              {content.location}
            </p>

            <p className="mt-4 text-[68px] font-semibold leading-none tracking-[-0.07em] sm:text-[88px]">
              {content.temperature}
            </p>

            <p className="mt-3 text-lg font-semibold">
              {content.condition}
            </p>

            <p className="mt-1 text-sm text-white/45">
              {content.feelsLike}
            </p>
          </div>

          <CloudRain className="h-11 w-11 text-[#8EC5FF] sm:h-12 sm:w-12" />
        </div>

        <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {content.forecast
            .slice(0, 4)
            .map(
              (
                item,
                index,
              ) => (
                <div
                  key={`${item.time}-${index}`}
                  className={`rounded-[18px] p-3 ${
                    index === 0
                      ? "bg-white text-[#14192B]"
                      : "border border-white/10 bg-white/[0.05]"
                  }`}
                >
                  <p
                    className={`text-[10px] font-medium ${
                      index ===
                      0
                        ? "text-[#7E8595]"
                        : "text-white/40"
                    }`}
                  >
                    {item.time}
                  </p>

                  <p className="mt-2 text-lg font-semibold">
                    {
                      item.temperature
                    }
                  </p>

                  <p
                    className={`mt-1 text-[9px] ${
                      index ===
                      0
                        ? "text-[#5F6A80]"
                        : "text-white/35"
                    }`}
                  >
                    {
                      item.rain
                    }{" "}
                    rain
                  </p>
                </div>
              ),
            )}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-4">
          {content.details
            .slice(0, 4)
            .map(
              (
                detail,
                index,
              ) => {
                const Icon =
                  detailIcons[
                    index
                  ] ?? Gauge;

                return (
                  <div
                    key={`${detail.label}-${index}`}
                    className="border-t border-white/10 pt-4"
                  >
                    <Icon className="h-4 w-4 text-[#9AAEF9]" />

                    <p className="mt-3 text-[9px] uppercase tracking-[0.12em] text-white/35">
                      {
                        detail.label
                      }
                    </p>

                    <p className="mt-1 text-sm font-semibold">
                      {
                        detail.value
                      }
                    </p>
                  </div>
                );
              },
            )}
        </div>

        <div className="mt-7 flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Activity className="h-5 w-5 shrink-0 text-[#63C5A5]" />

            <div>
              <p className="text-xs text-white/40">
                Air quality
              </p>

              <p className="text-sm font-semibold">
                AQI{" "}
                {
                  content.aqi
                    .score
                }{" "}
                ·{" "}
                {
                  content.aqi
                    .label
                }
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 sm:max-w-[230px]">
            <BellRing className="mt-0.5 h-5 w-5 shrink-0 text-[#F1B55A]" />

            <p className="text-xs leading-5 text-white/55">
              {
                content.alert
                  .title
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WeatherIntelligence({
  content,
}: WeatherIntelligenceProps) {
  return (
    <section
      id="weather"
      className="px-4 py-20 sm:px-6 sm:py-28 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-16">
        <div>
          <p className="text-sm font-semibold text-[#2376D0]">
            {content.eyebrow}
          </p>

          <h2 className="mt-4 text-4xl font-semibold leading-[1] tracking-[-0.05em] text-[#101426] sm:text-5xl lg:text-6xl">
            {content.title}
          </h2>

          <p className="mt-5 max-w-xl text-base leading-8 text-[#747C8F] sm:text-lg">
            {content.description}
          </p>

          <div className="mt-8 grid gap-x-8 gap-y-2 sm:grid-cols-2">
            {coverage.map(
              ({
                label,
                Icon,
              }) => (
                <div
                  key={label}
                  className="flex min-h-12 items-center gap-3 border-b border-[#ECEEF3] py-3"
                >
                  <Icon className="h-4 w-4 shrink-0 text-[#5F63C8]" />

                  <span className="text-sm font-medium text-[#4C5467]">
                    {label}
                  </span>
                </div>
              ),
            )}
          </div>

          <div className="mt-7 rounded-[20px] bg-[#F7F8FC] p-4">
            <p className="text-xs font-semibold text-[#5F55D7]">
              {
                content.insight
                  .title
              }{" "}
              ·{" "}
              {
                content.insight
                  .time
              }
            </p>

            <p className="mt-1 text-sm leading-6 text-[#727A8D]">
              {
                content.insight
                  .description
              }
            </p>
          </div>
        </div>

        <WeatherVisual
          content={content}
        />
      </div>
    </section>
  );
}