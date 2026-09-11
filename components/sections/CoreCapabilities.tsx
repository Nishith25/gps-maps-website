"use client";

import {
  useState,
} from "react";

import {
  motion,
  useReducedMotion,
} from "motion/react";

import type {
  Variants,
} from "motion/react";

import {
  BellRing,
  Bike,
  Camera,
  ChevronDown,
  CloudSun,
  Compass,
  Languages,
  LocateFixed,
  MapPin,
  MessageCircle,
  Navigation2,
  Route,
  ShieldCheck,
  Users,
  WifiOff,
} from "lucide-react";

import type {
  CapabilityContent,
  CapabilityKey,
  TravelContent,
  UtilitiesContent,
  WeatherContent,
} from "@/lib/content";

type CoreCapabilitiesProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: CapabilityContent[];
  weather: WeatherContent;
  travel: TravelContent;
  utilities: UtilitiesContent;
};

type FeatureGroup = {
  highlights: string[];
  more: string[];
};

type CapabilityStyle = {
  background: string;
  iconBackground: string;
  accent: string;
  badgeBackground: string;
};

const iconMap = {
  navigation: Navigation2,
  weather: CloudSun,
  nearby: MapPin,
  offline: WifiOff,
  travel: Route,
  tools: Compass,
};

const styleMap: Record<
  CapabilityKey,
  CapabilityStyle
> = {
  navigation: {
    background: "#F2F5FF",
    iconBackground: "#DDE7FF",
    accent: "#3976DA",
    badgeBackground: "#E7EEFF",
  },

  weather: {
    background: "#ECFAF8",
    iconBackground: "#D5F2EE",
    accent: "#138F88",
    badgeBackground: "#DFF6F2",
  },

  nearby: {
    background: "#EFF9F3",
    iconBackground: "#DDF3E6",
    accent: "#279765",
    badgeBackground: "#E3F5EA",
  },

  offline: {
    background: "#EEF5FF",
    iconBackground: "#DCEAFF",
    accent: "#3478D7",
    badgeBackground: "#E2EEFF",
  },

  travel: {
    background: "#EFF8FA",
    iconBackground: "#DCEFF3",
    accent: "#24889A",
    badgeBackground: "#E2F2F5",
  },

  tools: {
    background: "#F7F1FF",
    iconBackground: "#EADFFF",
    accent: "#7356DF",
    badgeBackground: "#EEE6FF",
  },
};

function unique(
  values: string[],
) {
  return Array.from(
    new Set(values),
  );
}

export default function CoreCapabilities({
  eyebrow,
  title,
  description,
  items,
  weather,
  travel,
  utilities,
}: CoreCapabilitiesProps) {
  const [expanded, setExpanded] =
    useState<CapabilityKey | null>(
      null,
    );

  const reduceMotion =
    useReducedMotion();

  const nearbyNames =
    utilities.nearby.categories.map(
      (item) => item.name,
    );

  const activityNames =
    travel.activities.map(
      (item) => item.name,
    );

  const groups: Record<
    CapabilityKey,
    FeatureGroup
  > = {
    navigation: {
      highlights: [
        "Turn-by-turn navigation",
        "Voice directions",
        "Real-time traffic",
        "Driving directions",
      ],

      more: [
        "Shortest route discovery",
        "Alternative route suggestions",
        "Destination search",
        "Address search",
        "Precise current location",
        "Real-time location updates",
        "Route guidance",
        "Background navigation",
        "Active navigation notification",
        "Map styles",
        "Multi-stop route planner",
        "Optimized routes",
        "Speed camera alerts",
        "Speed limit alerts",
      ],
    },

    offline: {
      highlights: [
        "Offline maps",
        "Offline navigation",
        "Offline directions",
        "Download map regions",
      ],

      more: [
        "Custom offline regions",
        "Maps ready before a trip",
        "Navigation with limited connectivity",
        "Essential map access without internet",
      ],
    },

    weather: {
      highlights: [
        "Current weather",
        "Hourly forecast",
        "10-day forecast",
        "Weather radar",
      ],

      more: [
        "Weather alerts",
        "Rain awareness",
        "Rain probability",
        "AQI",
        "Air pollutants",
        "Air-quality health guidance",
        "Outdoor recommendations",
        "Best-time recommendations",
      ],
    },

    nearby: {
      highlights: [
        "Restaurants",
        "Fuel stations",
        "Hospitals",
        "Parking",
      ],

      more: unique([
        ...nearbyNames,
        "Cafes",
        "Pharmacies",
        "ATMs",
        "Shopping",
        "Parks",
        "Temples",
        "Pubs",
        "Clubs",
        "Business ratings",
        "Business reviews",
        "Directions to places",
      ]),
    },

    travel: {
      highlights: [
        "Travel planner",
        "Weather-aware planning",
        "Cycling suitability",
        "Running suitability",
      ],

      more: unique([
        ...activityNames,
        "Hiking",
        "Cricket",
        "Picnic",
        "Best-time recommendations",
        "Trip readiness",
        "Route conditions",
        "Weather conditions",
        "Offline-map readiness",
      ]),
    },

    tools: {
      highlights: [
        "Parking manager",
        "Speedometer",
        "Compass",
        "Translator",
      ],

      more: [
        "My Location",
        "Find Address",
        "After-call GPS tools",
        "After-call nearby places",
        "After-call maps",
        "After-call route access",
        "After-call navigation shortcuts",
      ],
    },
  };

  const visibleItems = items
    .filter(
      (item) => item.isVisible,
    )
    .sort(
      (a, b) =>
        a.sortOrder -
        b.sortOrder,
    );

  const safetyFeatures = [
    {
      icon: LocateFixed,
      title: "Real-time tracking",
      description:
        "Track precise location as it changes.",
    },
    {
      icon: Route,
      title:
        "Location & travel history",
      description:
        "Review previous location and travel activity.",
    },
    {
      icon: Users,
      title: "Private circles",
      description:
        "Create groups for family, friends and teams.",
    },
    {
      icon: MapPin,
      title: "Location sharing",
      description:
        "Share live location with people you choose.",
    },
    {
      icon: ShieldCheck,
      title: "Geofencing alerts",
      description:
        "Get alerts when someone enters or leaves an area.",
    },
    {
      icon: MessageCircle,
      title: "Circle chat",
      description:
        "Communicate directly with circle members.",
    },
  ];

  const trackingUseCases = [
    "Family tracking",
    "Friends tracking",
    "Kids tracking",
    "Loved-ones tracking",
    "Employee tracking",
    "Fleet tracking",
    "Field staff tracking",
    "Add or remove circle members",
  ];

  const cardVariants: Variants = {
    hidden: reduceMotion
      ? {
          opacity: 1,
        }
      : {
          opacity: 0,
          y: 34,
        },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.58,
        ease: "easeOut",
      },
    },
  };

  const containerVariants: Variants = {
    hidden: {},

    visible: {
      transition: {
        staggerChildren:
          reduceMotion
            ? 0
            : 0.085,
      },
    },
  };

  const assuranceItems = [
    {
      icon: Camera,
      label:
        "Speed camera alerts",
    },
    {
      icon: BellRing,
      label:
        "Traffic & route alerts",
    },
    {
      icon: Bike,
      label:
        "Activity recommendations",
    },
    {
      icon: Languages,
      label:
        "Travel utilities",
    },
  ];

  return (
    <section
      id="capabilities"
      className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 sm:py-28 lg:py-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-[180px] h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-[#745AE8]/[0.035] blur-[110px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 30,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.65,
            ease: "easeOut",
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold text-[#6D56DD]">
            {eyebrow}
          </p>

          <h2 className="mt-4 text-4xl font-semibold leading-[1] tracking-[-0.055em] text-[#111629] sm:text-5xl lg:text-6xl">
            {title}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#747C8F] sm:text-lg">
            {description}
          </p>
        </motion.div>

        {/* Capabilities */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.05,
          }}
          variants={
            containerVariants
          }
          className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {visibleItems.map(
            (item) => {
              const Icon =
                iconMap[item.id];

              const style =
                styleMap[item.id];

              const group =
                groups[item.id];

              const isExpanded =
                expanded ===
                item.id;

              const allFeatures = [
                ...group.highlights,
                ...group.more,
              ];

              const visibleFeatures =
                isExpanded
                  ? allFeatures
                  : group.highlights;

              return (
                <motion.article
                  layout
                  variants={
                    cardVariants
                  }
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          y: -5,
                        }
                  }
                  key={item.id}
                  id={item.id}
                  className="scroll-mt-24 overflow-hidden rounded-[26px] border border-[#E8E8EF] p-6 shadow-[0_14px_40px_rgba(38,43,72,0.045)]"
                  style={{
                    backgroundColor:
                      style.background,
                  }}
                >
                  {/* Top row */}
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-[16px]"
                      style={{
                        backgroundColor:
                          style.iconBackground,
                      }}
                    >
                      <Icon
                        className="h-5 w-5"
                        style={{
                          color:
                            style.accent,
                        }}
                      />
                    </div>

                    <span
                      className="rounded-full px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.11em]"
                      style={{
                        backgroundColor:
                          style.badgeBackground,
                        color:
                          style.accent,
                      }}
                    >
                      {item.label}
                    </span>
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold leading-7 tracking-[-0.045em] text-[#181D2F]">
                    {item.title}
                  </h3>

                  <p className="mt-3 min-h-[72px] text-sm leading-6 text-[#70798B]">
                    {
                      item.description
                    }
                  </p>

                  {/* Chips */}
                  <motion.div
                    layout
                    className="mt-5 flex flex-wrap gap-2"
                  >
                    {visibleFeatures.map(
                      (
                        feature,
                        index,
                      ) => (
                        <motion.span
                          layout
                          initial={
                            reduceMotion
                              ? false
                              : {
                                  opacity:
                                    0,
                                  scale:
                                    0.96,
                                }
                          }
                          animate={{
                            opacity: 1,
                            scale: 1,
                          }}
                          transition={{
                            duration:
                              0.22,
                            delay:
                              reduceMotion
                                ? 0
                                : index *
                                  0.012,
                          }}
                          key={
                            feature
                          }
                          className="rounded-full border border-white/80 bg-white/80 px-3 py-1.5 text-[10px] font-medium text-[#596175]"
                        >
                          {feature}
                        </motion.span>
                      ),
                    )}
                  </motion.div>

                  {group.more.length >
                    0 && (
                    <button
                      type="button"
                      onClick={() =>
                        setExpanded(
                          isExpanded
                            ? null
                            : item.id,
                        )
                      }
                      className="mt-5 flex min-h-9 items-center gap-1.5 text-xs font-semibold"
                      style={{
                        color:
                          style.accent,
                      }}
                    >
                      {isExpanded
                        ? "Show less"
                        : `View all ${allFeatures.length} features`}

                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-300 ${
                          isExpanded
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    </button>
                  )}

                  {/* Weather detail */}
                  {item.id ===
                    "weather" && (
                    <motion.div
                      layout
                      className="mt-5 flex items-end justify-between rounded-[18px] bg-white/75 p-4"
                    >
                      <div>
                        <p className="text-[9px] font-medium text-[#8D94A3]">
                          Current
                        </p>

                        <p className="mt-1 text-3xl font-semibold tracking-[-0.055em] text-[#192031]">
                          {
                            weather.temperature
                          }
                        </p>

                        <p className="mt-1 text-[10px] text-[#70798A]">
                          {
                            weather.condition
                          }
                        </p>
                      </div>

                      <div className="text-right">
                        <p className="text-[9px] text-[#8D94A3]">
                          Air quality
                        </p>

                        <p className="mt-1 text-sm font-bold text-[#168C74]">
                          AQI{" "}
                          {
                            weather
                              .aqi
                              .score
                          }
                        </p>

                        <p className="text-[9px] text-[#168C74]">
                          {
                            weather
                              .aqi
                              .label
                          }
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {/* Travel detail */}
                  {item.id ===
                    "travel" && (
                    <motion.div
                      layout
                      className="mt-5 grid grid-cols-3 gap-2 rounded-[18px] bg-white/75 p-3"
                    >
                      <div>
                        <p className="text-[8px] text-[#9298A6]">
                          Time
                        </p>

                        <p className="mt-1 text-xs font-bold text-[#252A3A]">
                          {
                            travel
                              .planner
                              .duration
                          }
                        </p>
                      </div>

                      <div>
                        <p className="text-[8px] text-[#9298A6]">
                          Distance
                        </p>

                        <p className="mt-1 text-xs font-bold text-[#252A3A]">
                          {
                            travel
                              .planner
                              .distance
                          }
                        </p>
                      </div>

                      <div>
                        <p className="text-[8px] text-[#9298A6]">
                          Status
                        </p>

                        <p className="mt-1 text-[10px] font-bold text-[#198477]">
                          {
                            travel
                              .planner
                              .condition
                          }
                        </p>
                      </div>
                    </motion.div>
                  )}
                </motion.article>
              );
            },
          )}
        </motion.div>

        {/* Location & Safety */}
        <motion.div
          id="safety"
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 35,
                  scale: 0.985,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="scroll-mt-24 relative mt-16 overflow-hidden rounded-[30px] border border-[#DEDDF0] bg-[#F4F0FF] p-6 sm:p-8 lg:p-10"
        >
          <div className="pointer-events-none absolute -right-28 -top-32 h-80 w-80 rounded-full bg-[#7254E5]/10 blur-[85px]" />

          <div className="pointer-events-none absolute -bottom-32 left-[30%] h-72 w-72 rounded-full bg-[#21B8AA]/10 blur-[90px]" />

          <div className="relative grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-14">
            {/* Intro */}
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-[#E3D9FF]">
                <ShieldCheck className="h-5 w-5 text-[#6F52DF]" />
              </div>

              <p className="mt-6 text-xs font-bold uppercase tracking-[0.12em] text-[#6D56DD]">
                Location & Safety
              </p>

              <h3 className="mt-3 max-w-md text-3xl font-semibold leading-[1.08] tracking-[-0.05em] text-[#171C2D] sm:text-4xl">
                Stay connected to
                the people and
                places that matter.
              </h3>

              <p className="mt-5 max-w-md text-sm leading-7 text-[#70788A]">
                Live location,
                private circles,
                sharing and safety
                tools extend GPS
                Maps beyond
                navigation.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#7655E6] via-[#4B7EDB] to-[#21B6AA] px-4 py-2 text-xs font-semibold text-white shadow-[0_12px_30px_rgba(84,87,200,0.18)]">
                <Users className="h-4 w-4" />

                Live Tracking
              </div>
            </div>

            {/* Safety tools */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.15,
              }}
              variants={
                containerVariants
              }
            >
              <div className="grid gap-3 sm:grid-cols-2">
                {safetyFeatures.map(
                  ({
                    icon:
                      FeatureIcon,
                    title,
                    description:
                      featureDescription,
                  }) => (
                    <motion.div
                      key={title}
                      variants={
                        cardVariants
                      }
                      className="flex gap-3 rounded-[18px] border border-white bg-white/80 p-4 shadow-[0_8px_25px_rgba(58,50,100,0.045)]"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[13px] bg-[#EEE8FF]">
                        <FeatureIcon className="h-4 w-4 text-[#6B52DA]" />
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-[#24293B]">
                          {title}
                        </p>

                        <p className="mt-1 text-xs leading-5 text-[#7B8294]">
                          {
                            featureDescription
                          }
                        </p>
                      </div>
                    </motion.div>
                  ),
                )}
              </div>

              <div className="mt-5 flex flex-wrap gap-2 border-t border-[#DED8EC] pt-5">
                {trackingUseCases.map(
                  (feature) => (
                    <span
                      key={feature}
                      className="rounded-full bg-white/80 px-3 py-1.5 text-[10px] font-medium text-[#61697B]"
                    >
                      {feature}
                    </span>
                  ),
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Extra features */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          variants={
            containerVariants
          }
          className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
        >
          {assuranceItems.map(
            ({
              icon:
                FeatureIcon,
              label,
            }) => (
              <motion.div
                key={label}
                variants={
                  cardVariants
                }
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -3,
                      }
                }
                className="flex items-center gap-3 rounded-[18px] border border-[#E7E8EE] bg-white px-4 py-4 shadow-[0_8px_24px_rgba(38,45,74,0.035)]"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[12px] bg-[#F1EDFF]">
                  <FeatureIcon className="h-4 w-4 text-[#6A55DB]" />
                </div>

                <p className="text-xs font-semibold text-[#4E5669]">
                  {label}
                </p>
              </motion.div>
            ),
          )}
        </motion.div>
      </div>
    </section>
  );
}