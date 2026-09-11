"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  AnimatePresence,
  motion,
} from "motion/react";

import type {
  Transition,
} from "motion/react";

import {
  BellRing,
  CloudRain,
  CloudSun,
  Compass,
  Download,
  Eye,
  Gauge,
  Languages,
  LocateFixed,
  Map,
  MapPin,
  Mic,
  Navigation2,
  ParkingCircle,
  Route,
  Search,
  Settings,
  ShieldCheck,
  Users,
  WifiOff,
  Wind,
} from "lucide-react";

const screens = [
  "navigation",
  "weather",
  "travel",
  "tools",
] as const;

type ScreenKey =
  (typeof screens)[number];

const screenLabels: Record<
  ScreenKey,
  string
> = {
  navigation: "Navigation",
  weather: "Weather",
  travel: "Travel",
  tools: "Map Tools",
};

const screenTransition: Transition = {
  duration: 0.42,
  ease: "easeOut",
};

function PhoneStatusBar() {
  return (
    <div className="absolute inset-x-0 top-0 z-40 flex h-9 items-center justify-between px-5 text-[10px] font-semibold text-[#161A28]">
      <span>2:35</span>

      <div className="flex items-center gap-1.5">
        <span className="text-[8px]">
          ●●●
        </span>

        <span>Wi-Fi</span>

        <span className="rounded-[5px] bg-[#161A28] px-1.5 py-0.5 text-[8px] text-white">
          82
        </span>
      </div>
    </div>
  );
}

/* ---------------- NAVIGATION ---------------- */

function NavigationScreen() {
  const quickTools = [
    {
      icon: Map,
      label: "Offline Maps",
      color: "#3478E5",
      bg: "#EAF2FF",
    },
    {
      icon: CloudSun,
      label: "Weather",
      color: "#D58B16",
      bg: "#FFF5DE",
    },
    {
      icon: Route,
      label: "Map Tools",
      color: "#7256E9",
      bg: "#F0EBFF",
    },
    {
      icon: MapPin,
      label: "Explore Places",
      color: "#25A97D",
      bg: "#E8F8F2",
    },
    {
      icon: Compass,
      label: "Compass",
      color: "#E65B55",
      bg: "#FDECEA",
    },
    {
      icon: Settings,
      label: "Settings",
      color: "#CF4E79",
      bg: "#FBEAF0",
    },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#EEF3F8]">
      {/* map */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor:
            "#EEF3F8",

          backgroundImage:
            "linear-gradient(25deg, transparent 47%, rgba(174,184,197,.55) 48%, rgba(174,184,197,.55) 50%, transparent 51%), linear-gradient(120deg, transparent 46%, rgba(174,184,197,.48) 47%, rgba(174,184,197,.48) 49%, transparent 50%)",

          backgroundSize:
            "125px 105px",
        }}
      />

      {/* map areas */}
      <div className="absolute left-[20%] top-[46%] h-24 w-36 rotate-[-8deg] rounded-[40%] bg-[#CDECCF]/70" />

      <div className="absolute right-[10%] top-[37%] h-20 w-28 rounded-full bg-[#BEE7F0]/70" />

      {/* map names */}
      <p className="absolute left-[38%] top-[47%] z-10 text-[14px] font-bold tracking-[0.08em] text-[#5E6472]">
        MADHAPUR
      </p>

      <p className="absolute left-[9%] top-[37%] z-10 text-[9px] font-semibold text-[#727987]">
        HITEC CITY
      </p>

      <p className="absolute bottom-[210px] left-[33%] z-10 text-[10px] font-semibold text-[#687181]">
        Durgam Cheruvu
      </p>

      {/* origin destination */}
      <div className="absolute left-3 right-3 top-11 z-20 rounded-[22px] border border-[#E0DFF0] bg-[#FAF9FF]/95 p-3 shadow-[0_12px_35px_rgba(44,47,75,0.12)] backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <p className="text-[12px] font-bold text-[#272A39]">
            Origin - Destination
          </p>

          <span className="rounded-full bg-[#7048E8] px-2.5 py-1 text-[8px] font-bold text-white">
            PRO
          </span>
        </div>

        <div className="mt-2.5 space-y-2">
          <div className="flex min-h-9 items-center gap-2 rounded-[12px] bg-white px-3">
            <LocateFixed className="h-3.5 w-3.5 text-[#7754E8]" />

            <p className="truncate text-[9px] text-[#4E5566]">
              Capital Park, Madhapur
            </p>
          </div>

          <div className="flex min-h-9 items-center gap-2 rounded-[12px] bg-white px-3">
            <MapPin className="h-3.5 w-3.5 text-[#7754E8]" />

            <p className="text-[9px] text-[#9499A6]">
              Destination
            </p>
          </div>
        </div>

        <div className="mt-2.5 flex min-h-9 items-center justify-center gap-2 rounded-[12px] bg-[#9A7AF1] text-[10px] font-semibold text-white">
          <Navigation2 className="h-3.5 w-3.5" />

          Start Navigation
        </div>
      </div>

      {/* live tracking */}
      <motion.div
        animate={{
          y: [0, -3, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-3 right-3 top-[244px] z-20 flex items-center justify-between rounded-[20px] bg-gradient-to-r from-[#8257E9] via-[#477FD7] to-[#23BDAE] px-3.5 py-3 text-white shadow-[0_12px_30px_rgba(68,101,195,0.2)]"
      >
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-[12px] bg-white">
            <Users className="h-4 w-4 text-[#7856E7]" />
          </div>

          <div>
            <p className="text-[11px] font-bold">
              Live Tracking
            </p>

            <p className="mt-0.5 text-[8px] text-white/80">
              Share real-time location
            </p>
          </div>
        </div>

        <span className="rounded-full bg-white/85 px-2 py-1 text-[8px] font-bold text-[#6953D6]">
          LIVE
        </span>
      </motion.div>

      {/* current point */}
      <div className="absolute left-[47%] top-[55%] z-10">
        <div className="relative flex h-7 w-7 items-center justify-center rounded-full border-[4px] border-white bg-[#3777DF] shadow-md">
          <div className="h-2.5 w-2.5 rounded-full bg-white" />
        </div>
      </div>

      {/* nearby info */}
      <div className="absolute left-4 top-[335px] z-10 rounded-full bg-white/95 px-3 py-2 shadow-sm">
        <p className="text-[8px] font-semibold text-[#606779]">
          Nearby · Food · Fuel · Hospitals
        </p>
      </div>

      {/* quick access */}
      <div className="absolute bottom-4 left-3 right-3 z-30 rounded-[24px] border border-[#E6E5ED] bg-white p-4 shadow-[0_18px_40px_rgba(34,42,71,0.14)]">
        <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#9A9FAD]">
          Quick access
        </p>

        <div className="mt-3 grid grid-cols-3 gap-y-4">
          {quickTools.map(
            ({
              icon: Icon,
              label,
              color,
              bg,
            }) => (
              <div
                key={label}
                className="flex flex-col items-center text-center"
              >
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-full"
                  style={{
                    backgroundColor:
                      bg,
                  }}
                >
                  <Icon
                    className="h-4 w-4"
                    style={{
                      color,
                    }}
                  />
                </div>

                <p className="mt-1.5 text-[8px] font-medium leading-3 text-[#454B5D]">
                  {label}
                </p>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}

/* ---------------- WEATHER ---------------- */

function WeatherScreen() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#F5FAFD] px-4 pb-5 pt-12">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold tracking-[-0.03em] text-[#171B2B]">
          Weather
        </h3>

        <div className="flex gap-2 text-[#4C5567]">
          <Search className="h-4 w-4" />
          <Settings className="h-4 w-4" />
        </div>
      </div>

      {/* current */}
      <div className="mt-5 overflow-hidden rounded-[22px] bg-gradient-to-br from-[#777C86] to-[#A6A9AF] p-4 text-white shadow-sm">
        <p className="text-lg font-bold">
          Madhapur
        </p>

        <p className="mt-0.5 text-[9px] text-white/70">
          Updated 2:26 PM
        </p>

        <div className="mt-7 flex items-end justify-between">
          <div>
            <p className="text-5xl font-semibold leading-none">
              31°
            </p>

            <p className="mt-2 text-[13px] font-semibold">
              Overcast Clouds
            </p>

            <p className="mt-1 text-[9px] text-white/80">
              Feels like 34°
            </p>
          </div>

          <span className="rounded-[10px] bg-white/20 px-2.5 py-2 text-[9px] font-semibold">
            56% rain
          </span>
        </div>
      </div>

      {/* metrics */}
      <div className="mt-3 grid grid-cols-2 gap-2">
        {[
          {
            icon: CloudRain,
            label: "Humidity",
            value: "58%",
            color: "#36B9E6",
          },
          {
            icon: Wind,
            label: "Wind",
            value: "13 km/h",
            color: "#39BB76",
          },
          {
            icon: Eye,
            label: "Visibility",
            value: "10 km",
            color: "#29B6D1",
          },
          {
            icon: Gauge,
            label: "AQI",
            value: "25 · Good",
            color: "#2AAD77",
          },
        ].map(
          ({
            icon: Icon,
            label,
            value,
            color,
          }) => (
            <div
              key={label}
              className="flex items-center gap-2 rounded-[14px] bg-white p-2.5"
            >
              <div
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F1F4F8]"
              >
                <Icon
                  className="h-3.5 w-3.5"
                  style={{
                    color,
                  }}
                />
              </div>

              <div>
                <p className="text-[8px] text-[#8A91A1]">
                  {label}
                </p>

                <p className="text-[10px] font-semibold text-[#252A3A]">
                  {value}
                </p>
              </div>
            </div>
          ),
        )}
      </div>

      {/* insight */}
      <div className="mt-3 rounded-[16px] bg-[#BDEDEA] p-3">
        <p className="text-[9px] font-bold text-[#283B40]">
          Smart Insight
        </p>

        <p className="mt-1 text-[8px] leading-4 text-[#52646B]">
          Comfortable conditions
          are opening for outdoor
          plans.
        </p>
      </div>

      {/* hourly */}
      <p className="mt-4 text-[11px] font-bold text-[#1F2434]">
        Hourly Forecast
      </p>

      <div className="mt-2 grid grid-cols-3 gap-2">
        {[
          [
            "Now",
            "30°",
            "56%",
          ],
          [
            "8 PM",
            "29°",
            "74%",
          ],
          [
            "11 PM",
            "27°",
            "48%",
          ],
        ].map(
          ([time, temp, rain]) => (
            <div
              key={time}
              className={`rounded-[14px] p-2.5 text-center ${
                time === "Now"
                  ? "bg-[#148992] text-white"
                  : "bg-white text-[#242939]"
              }`}
            >
              <p className="text-[8px] font-medium">
                {time}
              </p>

              <CloudRain className="mx-auto mt-2 h-4 w-4" />

              <p className="mt-1 text-lg font-semibold">
                {temp}
              </p>

              <p className="text-[7px] opacity-70">
                {rain} rain
              </p>
            </div>
          ),
        )}
      </div>

      {/* weather navigation */}
      <div className="absolute bottom-0 left-0 right-0 grid grid-cols-5 border-t border-[#ECE5F0] bg-[#FAF2FC] px-2 py-2">
        {[
          "Weather",
          "Radar",
          "AQI",
          "Alerts",
          "Travel",
        ].map(
          (item, index) => (
            <div
              key={item}
              className="text-center"
            >
              <div
                className={`mx-auto h-1.5 w-1.5 rounded-full ${
                  index === 0
                    ? "bg-[#7258E6]"
                    : "bg-[#717887]"
                }`}
              />

              <p
                className={`mt-1 text-[7px] ${
                  index === 0
                    ? "font-bold text-[#7258E6]"
                    : "text-[#555D70]"
                }`}
              >
                {item}
              </p>
            </div>
          ),
        )}
      </div>
    </div>
  );
}

/* ---------------- TRAVEL ---------------- */

function TravelScreen() {
  const activities = [
    {
      name: "Cycling",
      score: "71",
      status: "Good",
      color: "#36B8DB",
    },
    {
      name: "Running",
      score: "65",
      status: "Fair",
      color: "#E7A11C",
    },
    {
      name: "Hiking",
      score: "63",
      status: "Fair",
      color: "#E7A11C",
    },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#F7FAFC] px-4 pb-5 pt-12">
      <h3 className="text-lg font-bold tracking-[-0.03em] text-[#171B2B]">
        Travel Planner
      </h3>

      <div className="mt-4 grid grid-cols-2 border-b border-[#D5E4E8] text-center">
        <div className="border-b-[3px] border-[#148A91] pb-2">
          <Route className="mx-auto h-4 w-4 text-[#337DE4]" />

          <p className="mt-1 text-[9px] font-semibold text-[#337DE4]">
            Travel
          </p>
        </div>

        <div className="pb-2">
          <Users className="mx-auto h-4 w-4 text-[#778091]" />

          <p className="mt-1 text-[9px] text-[#667084]">
            Activity
          </p>
        </div>
      </div>

      {/* planner */}
      <div className="mt-4 rounded-[20px] border border-[#E0E6EA] bg-white p-3">
        <div className="space-y-2">
          <div className="flex h-10 items-center gap-2 rounded-[10px] border border-[#E9EDF1] px-3">
            <LocateFixed className="h-3.5 w-3.5 text-[#556071]" />

            <p className="text-[9px] text-[#7A8291]">
              Source City
            </p>
          </div>

          <div className="flex h-10 items-center gap-2 rounded-[10px] border border-[#E9EDF1] px-3">
            <MapPin className="h-3.5 w-3.5 text-[#556071]" />

            <p className="text-[9px] text-[#7A8291]">
              Destination City
            </p>
          </div>
        </div>

        <button
          type="button"
          className="mt-3 flex min-h-10 w-full items-center justify-center rounded-full bg-[#3271E8] text-[10px] font-semibold text-white"
        >
          Build Travel Plan
        </button>
      </div>

      {/* activity intelligence */}
      <div className="mt-3 rounded-[16px] bg-[#B9EFEC] px-3 py-2.5">
        <p className="text-[11px] font-semibold text-[#284148]">
          Weather suitability
        </p>

        <p className="mt-0.5 text-[8px] text-[#557178]">
          Madhapur · 30°
        </p>
      </div>

      <div className="mt-3 space-y-2">
        {activities.map(
          ({
            name,
            score,
            status,
            color,
          }) => (
            <div
              key={name}
              className="flex items-center justify-between rounded-[15px] border border-[#E6E9EC] bg-white p-3 shadow-[0_4px_12px_rgba(36,44,72,0.04)]"
            >
              <div>
                <p className="text-[11px] font-bold text-[#1E2333]">
                  {name}
                </p>

                <p className="mt-0.5 text-[8px] text-[#747C8E]">
                  Best conditions:
                  5:30 AM
                </p>

                <span className="mt-2 inline-block rounded-[7px] bg-[#F5F7F9] px-2 py-1 text-[7px] font-semibold text-[#566071]">
                  {status}
                </span>
              </div>

              <div
                className="flex h-10 w-10 items-center justify-center rounded-full border-[4px]"
                style={{
                  borderColor:
                    color,
                }}
              >
                <span className="text-[10px] font-bold text-[#202536]">
                  {score}
                </span>
              </div>
            </div>
          ),
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 grid grid-cols-5 border-t border-[#ECE5F0] bg-[#FAF2FC] px-2 py-2">
        {[
          "Weather",
          "Radar",
          "AQI",
          "Alerts",
          "Travel",
        ].map(
          (item, index) => (
            <div
              key={item}
              className="text-center"
            >
              <div
                className={`mx-auto h-1.5 w-1.5 rounded-full ${
                  index === 4
                    ? "bg-[#7258E6]"
                    : "bg-[#717887]"
                }`}
              />

              <p
                className={`mt-1 text-[7px] ${
                  index === 4
                    ? "font-bold text-[#7258E6]"
                    : "text-[#555D70]"
                }`}
              >
                {item}
              </p>
            </div>
          ),
        )}
      </div>
    </div>
  );
}

/* ---------------- TOOLS ---------------- */

function ToolsScreen() {
  const tools = [
    {
      icon: LocateFixed,
      title: "My Location",
      description:
        "See current location",
      bg: "#EDF2FF",
      iconColor: "#3478E5",
    },
    {
      icon: Search,
      title: "Find Address",
      description:
        "Search any place",
      bg: "#EAF8F1",
      iconColor: "#22A576",
    },
    {
      icon: ParkingCircle,
      title: "Parking",
      description:
        "Find nearby parking",
      bg: "#FFF4E7",
      iconColor: "#F29A24",
    },
    {
      icon: Gauge,
      title: "Speedometer",
      description:
        "Check current speed",
      bg: "#EAF2FC",
      iconColor: "#3178D7",
    },
    {
      icon: Mic,
      title: "Voice Navigation",
      description:
        "Voice guidance",
      bg: "#F2EDFF",
      iconColor: "#7054E6",
    },
    {
      icon: Languages,
      title: "Translator",
      description:
        "Text & voice",
      bg: "#FDEDEE",
      iconColor: "#E76067",
    },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden bg-white px-4 pt-12">
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#ECEEF2]">
          <span className="text-sm text-[#555D6F]">
            ‹
          </span>
        </div>

        <h3 className="text-lg font-bold tracking-[-0.03em] text-[#171B2B]">
          Map Tools
        </h3>
      </div>

      <p className="mt-3 text-[9px] leading-4 text-[#848B9B]">
        Everyday GPS tools in
        one place.
      </p>

      <div className="mt-5 grid grid-cols-2 gap-3">
        {tools.map(
          ({
            icon: Icon,
            title,
            description,
            bg,
            iconColor,
          }) => (
            <motion.div
              key={title}
              whileHover={{
                y: -2,
              }}
              className="flex min-h-[132px] flex-col items-center justify-center rounded-[20px] p-3 text-center"
              style={{
                backgroundColor:
                  bg,
              }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/50">
                <Icon
                  className="h-4 w-4"
                  style={{
                    color:
                      iconColor,
                  }}
                />
              </div>

              <p className="mt-3 text-[11px] font-bold text-[#1F2433]">
                {title}
              </p>

              <p className="mt-1 text-[8px] leading-3 text-[#858C9B]">
                {description}
              </p>
            </motion.div>
          ),
        )}
      </div>

      {/* extra capability strip */}
      <div className="mt-4 grid grid-cols-3 gap-2">
        <div className="rounded-[12px] bg-[#F7F8FB] p-2 text-center">
          <WifiOff className="mx-auto h-3.5 w-3.5 text-[#5F5BD6]" />

          <p className="mt-1 text-[7px] font-medium text-[#555D70]">
            Offline
          </p>
        </div>

        <div className="rounded-[12px] bg-[#F7F8FB] p-2 text-center">
          <ShieldCheck className="mx-auto h-3.5 w-3.5 text-[#2D9A75]" />

          <p className="mt-1 text-[7px] font-medium text-[#555D70]">
            Safety
          </p>
        </div>

        <div className="rounded-[12px] bg-[#F7F8FB] p-2 text-center">
          <Download className="mx-auto h-3.5 w-3.5 text-[#3378DC]" />

          <p className="mt-1 text-[7px] font-medium text-[#555D70]">
            Maps
          </p>
        </div>
      </div>
    </div>
  );
}

/* ---------------- MAIN PHONE ---------------- */

export default function PhoneNavigationMockup() {
  const [activeIndex, setActiveIndex] =
    useState(0);

  const activeScreen =
    screens[activeIndex];

  useEffect(() => {
    const timer =
      window.setInterval(() => {
        setActiveIndex(
          (current) =>
            (current + 1) %
            screens.length,
        );
      }, 4500);

    return () => {
      window.clearInterval(
        timer,
      );
    };
  }, []);

  const renderScreen = () => {
    switch (activeScreen) {
      case "navigation":
        return (
          <NavigationScreen />
        );

      case "weather":
        return <WeatherScreen />;

      case "travel":
        return <TravelScreen />;

      case "tools":
        return <ToolsScreen />;

      default:
        return (
          <NavigationScreen />
        );
    }
  };

  return (
    <div className="relative mx-auto w-full">
      {/* phone */}
      <motion.div
        initial={{
          opacity: 0,
          y: 24,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.75,
          ease: "easeOut",
        }}
        className="relative mx-auto w-[300px] max-w-full sm:w-[338px] lg:w-[360px]"
      >
        <div className="pointer-events-none absolute -inset-12 -z-10 rounded-full bg-[#6B59DF]/10 blur-[80px]" />

        <div className="relative overflow-hidden rounded-[46px] border-[8px] border-[#181B26] bg-white shadow-[0_35px_95px_rgba(26,35,65,0.22)]">
          {/* camera island */}
          <div className="absolute left-1/2 top-2 z-50 h-5 w-[82px] -translate-x-1/2 rounded-full bg-[#181B26]" />

          <div className="relative h-[610px] overflow-hidden sm:h-[650px]">
            <PhoneStatusBar />

            <AnimatePresence
              mode="wait"
              initial={false}
            >
              <motion.div
                key={activeScreen}
                initial={{
                  opacity: 0,
                  x: 12,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -12,
                }}
                transition={
                  screenTransition
                }
                className="absolute inset-0"
              >
                {renderScreen()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* Screen controller */}
      <div className="mx-auto mt-5 flex w-fit max-w-full items-center gap-1 rounded-full border border-[#E5E7ED] bg-white p-1.5 shadow-[0_10px_30px_rgba(34,42,68,0.06)]">
        {screens.map(
          (
            screen,
            index,
          ) => {
            const isActive =
              index ===
              activeIndex;

            return (
              <button
                key={screen}
                type="button"
                onClick={() =>
                  setActiveIndex(
                    index,
                  )
                }
                className={`min-h-9 rounded-full px-2.5 text-[10px] font-semibold transition-all sm:px-3 ${
                  isActive
                    ? "bg-[#111629] text-white"
                    : "text-[#6A7183] hover:bg-[#F5F6F9]"
                }`}
                aria-label={`Show ${screenLabels[screen]}`}
              >
                {
                  screenLabels[
                    screen
                  ]
                }
              </button>
            );
          },
        )}
      </div>

      <p className="mt-3 text-center text-[10px] text-[#9A9FAD]">
        Navigation · Weather ·
        Travel intelligence ·
        Everyday map tools
      </p>
    </div>
  );
}