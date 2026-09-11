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

const iconMap = {
  navigation: Navigation2,
  weather: CloudSun,
  nearby: MapPin,
  offline: WifiOff,
  travel: Route,
  tools: Compass,
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
      title:
        "Real-time tracking",
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
      title:
        "Private circles",
      description:
        "Create groups for family, friends and teams.",
    },
    {
      icon: MapPin,
      title:
        "Location sharing",
      description:
        "Share live location with people you choose.",
    },
    {
      icon: ShieldCheck,
      title:
        "Geofencing alerts",
      description:
        "Get alerts when someone enters or leaves an area.",
    },
    {
      icon: MessageCircle,
      title:
        "Circle chat",
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

  /*
   * Correctly typed Motion variants.
   *
   * The previous TypeScript issue happened because
   * the cubic-bezier number array was inferred as number[].
   */
  const cardVariants: Variants = {
    hidden: reduceMotion
      ? {
          opacity: 1,
        }
      : {
          opacity: 0,
          y: 30,
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
            : 0.09,
      },
    },
  };

  const safetyContainerVariants: Variants =
    {
      hidden: {},

      visible: {
        transition: {
          staggerChildren:
            reduceMotion
              ? 0
              : 0.08,
        },
      },
    };

  const assuranceContainerVariants: Variants =
    {
      hidden: {},

      visible: {
        transition: {
          staggerChildren:
            reduceMotion
              ? 0
              : 0.07,
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
      className="bg-white px-4 py-20 sm:px-6 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
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
            duration: 0.68,
            ease: "easeOut",
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold text-[#6559DF]">
            {eyebrow}
          </p>

          <h2 className="mt-4 text-4xl font-semibold leading-[1] tracking-[-0.05em] text-[#101426] sm:text-5xl lg:text-6xl">
            {title}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#747C8F] sm:text-lg">
            {description}
          </p>
        </motion.div>

        {/* Main capabilities */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
          variants={
            containerVariants
          }
          className="mt-14 grid gap-x-8 border-y border-[#E6E9EF] md:grid-cols-2 lg:grid-cols-3"
        >
          {visibleItems.map(
            (item) => {
              const Icon =
                iconMap[item.id];

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
                  key={item.id}
                  id={item.id}
                  className="scroll-mt-24 border-b border-[#E6E9EF] py-8 md:px-5 lg:px-7"
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            y: -3,
                            scale:
                              1.04,
                          }
                    }
                    transition={{
                      duration: 0.2,
                    }}
                    className="flex h-11 w-11 items-center justify-center rounded-[15px] bg-[#F2F3F7]"
                  >
                    <Icon className="h-5 w-5 text-[#5E59C8]" />
                  </motion.div>

                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.13em] text-[#9398A7]">
                    {item.label}
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-[#151A2C]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#777F91]">
                    {
                      item.description
                    }
                  </p>

                  {/* Feature chips */}
                  <motion.div
                    layout
                    className="mt-6 flex flex-wrap gap-2"
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
                            opacity:
                              1,
                            scale: 1,
                          }}
                          transition={{
                            duration:
                              0.25,
                            delay:
                              reduceMotion
                                ? 0
                                : index *
                                  0.015,
                          }}
                          key={
                            feature
                          }
                          className="rounded-full bg-[#F5F6F9] px-3 py-1.5 text-[11px] font-medium text-[#61697B]"
                        >
                          {feature}
                        </motion.span>
                      ),
                    )}
                  </motion.div>

                  {/* Expand button */}
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
                      className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-[#6257D5] transition-colors hover:text-[#5148C2]"
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

                  {/* Weather mini summary */}
                  {item.id ===
                    "weather" && (
                    <motion.div
                      layout
                      className="mt-6 border-t border-[#ECEEF3] pt-5"
                    >
                      <div className="flex items-end justify-between gap-4">
                        <div>
                          <p className="text-3xl font-semibold tracking-[-0.05em] text-[#171C2F]">
                            {
                              weather.temperature
                            }
                          </p>

                          <p className="mt-1 text-xs text-[#7F8798]">
                            {
                              weather.condition
                            }
                          </p>
                        </div>

                        <div className="text-right">
                          <p className="text-xs font-semibold text-[#318271]">
                            AQI{" "}
                            {
                              weather
                                .aqi
                                .score
                            }
                          </p>

                          <p className="mt-1 text-[10px] text-[#7E8797]">
                            {
                              weather
                                .aqi
                                .label
                            }
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Travel mini summary */}
                  {item.id ===
                    "travel" && (
                    <motion.div
                      layout
                      className="mt-6 border-t border-[#ECEEF3] pt-5"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.11em] text-[#979DAC]">
                            Example
                            journey
                          </p>

                          <p className="mt-1 text-sm font-semibold text-[#22273A]">
                            {
                              travel
                                .planner
                                .duration
                            }{" "}
                            ·{" "}
                            {
                              travel
                                .planner
                                .distance
                            }
                          </p>
                        </div>

                        <p className="text-xs font-medium text-[#318271]">
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

        {/* Location + Safety */}
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
            amount: 0.18,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="scroll-mt-24 mt-14 rounded-[28px] bg-[#F7F8FB] p-6 sm:p-8 lg:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-14">
            {/* Left */}
            <div>
              <motion.div
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        rotate:
                          -3,
                        scale:
                          1.04,
                      }
                }
                transition={{
                  duration: 0.2,
                }}
                className="flex h-11 w-11 items-center justify-center rounded-[15px] bg-white"
              >
                <ShieldCheck className="h-5 w-5 text-[#5E59C8]" />
              </motion.div>

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.13em] text-[#9398A7]">
                Location & Safety
              </p>

              <h3 className="mt-2 text-3xl font-semibold tracking-[-0.045em] text-[#151A2C]">
                Stay connected to
                the people and
                places that matter.
              </h3>

              <p className="mt-4 max-w-md text-sm leading-7 text-[#747C8F]">
                Live location,
                sharing, private
                circles and safety
                tools extend GPS
                Maps beyond basic
                navigation.
              </p>
            </div>

            {/* Right */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              variants={
                safetyContainerVariants
              }
            >
              <div className="grid gap-x-7 gap-y-6 sm:grid-cols-2">
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
                      className="flex gap-3"
                    >
                      <motion.div
                        whileHover={
                          reduceMotion
                            ? undefined
                            : {
                                scale:
                                  1.06,
                              }
                        }
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[12px] bg-white"
                      >
                        <FeatureIcon className="h-4 w-4 text-[#6259CE]" />
                      </motion.div>

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

              {/* Tracking chips */}
              <motion.div
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 15,
                      }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.3,
                  ease: "easeOut",
                }}
                className="mt-7 flex flex-wrap gap-2 border-t border-[#E3E6EC] pt-6"
              >
                {trackingUseCases.map(
                  (feature) => (
                    <span
                      key={feature}
                      className="rounded-full bg-white px-3 py-1.5 text-[11px] font-medium text-[#61697B]"
                    >
                      {feature}
                    </span>
                  ),
                )}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Compact feature assurance row */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          variants={
            assuranceContainerVariants
          }
          className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
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
                transition={{
                  duration: 0.2,
                }}
                className="flex items-center gap-3 rounded-[16px] border border-[#E7E9EF] bg-white px-4 py-4 transition-shadow hover:shadow-[0_10px_30px_rgba(33,41,70,0.06)]"
              >
                <FeatureIcon className="h-4 w-4 shrink-0 text-[#6559DF]" />

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