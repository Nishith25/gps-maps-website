"use client";

import { motion } from "motion/react";

import {
  ArrowRight,
  CloudSun,
  LocateFixed,
  MapPin,
  Navigation2,
  Route,
  Sparkles,
  WifiOff,
} from "lucide-react";

import type { StatContent } from "@/lib/content";

type HeroProps = {
  eyebrow: string;
  titleTop: string;
  titleBottom: string;
  description: string;
  playStoreUrl: string;
  googlePlayLabel: string;
  stats: StatContent[];
};

function FeatureChip({
  icon,
  label,
  className = "",
}: {
  icon: React.ReactNode;
  label: string;
  className?: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 16,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.65,
        delay: 0.65,
      }}
      className={`absolute z-20 flex items-center gap-2 rounded-full border border-white/80 bg-white/90 px-4 py-2.5 text-xs font-semibold text-[#30364A] shadow-[0_15px_40px_rgba(30,42,80,0.12)] backdrop-blur-xl ${className}`}
    >
      {icon}

      {label}
    </motion.div>
  );
}

export default function Hero({
  eyebrow,
  titleTop,
  titleBottom,
  description,
  playStoreUrl,
  googlePlayLabel,
  stats,
}: HeroProps) {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 sm:pb-24 sm:pt-36 lg:min-h-[920px]"
    >
      <div className="pointer-events-none absolute left-[-180px] top-[160px] h-[420px] w-[420px] rounded-full bg-[#8152ED]/10 blur-[100px]" />

      <div className="pointer-events-none absolute right-[-100px] top-[70px] h-[470px] w-[470px] rounded-full bg-[#1A67C9]/10 blur-[110px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.93fr_1.07fr] lg:gap-12">
        {/* =====================================================
            LEFT SIDE
        ===================================================== */}
        <div className="relative z-10">
          <motion.div
            initial={{
              opacity: 0,
              y: 14,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.55,
            }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#DFE5FF] bg-white/80 px-4 py-2 text-xs font-semibold text-[#5F55D7] shadow-sm backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5" />

            {eyebrow}
          </motion.div>

          <motion.h1
            initial={{
              opacity: 0,
              y: 22,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.08,
            }}
            className="max-w-4xl text-[52px] font-semibold leading-[0.95] tracking-[-0.055em] text-[#101426] sm:text-[68px] lg:text-[82px]"
          >
            {titleTop}

            <span className="mt-2 block bg-gradient-to-r from-[#1A67C9] via-[#586FE3] to-[#8152ED] bg-clip-text text-transparent">
              {titleBottom}
            </span>
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 18,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.65,
              delay: 0.18,
            }}
            className="mt-8 max-w-xl text-base leading-8 text-[#656D82] sm:text-lg"
          >
            {description}
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            initial={{
              opacity: 0,
              y: 18,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.65,
              delay: 0.28,
            }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href={playStoreUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#1A67C9] to-[#8152ED] px-7 py-4 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(105,82,237,0.24)] transition duration-300 hover:-translate-y-1"
            >
              {googlePlayLabel}

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="#capabilities"
              className="inline-flex items-center justify-center rounded-full border border-[#E0E4ED] bg-white px-7 py-4 text-sm font-semibold text-[#292F43] transition hover:-translate-y-1 hover:border-[#CBD1E0]"
            >
              Explore features
            </a>
          </motion.div>

          {/* STATS */}
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.7,
              delay: 0.45,
            }}
            className="mt-11 flex flex-wrap gap-x-8 gap-y-5"
          >
            {stats.map((stat, index) => (
              <div
                key={`${stat.label}-${index}`}
              >
                <div className="text-xl font-semibold tracking-[-0.035em] text-[#14192A]">
                  {stat.value}
                </div>

                <div className="mt-1 text-xs font-medium text-[#9197A8]">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* =====================================================
            RIGHT SIDE MAP VISUAL
        ===================================================== */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.96,
            y: 24,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 0.18,
            ease: [0.2, 0.8, 0.2, 1],
          }}
          className="relative mx-auto w-full max-w-[650px]"
        >
          <FeatureChip
            label="Live Weather"
            icon={
              <CloudSun className="h-4 w-4 text-[#1A67C9]" />
            }
            className="-left-2 top-[16%] sm:-left-10"
          />

          <FeatureChip
            label="Offline Maps"
            icon={
              <WifiOff className="h-4 w-4 text-[#8152ED]" />
            }
            className="-right-1 top-[28%] sm:-right-8"
          />

          <FeatureChip
            label="Voice Navigation"
            icon={
              <Navigation2 className="h-4 w-4 text-[#6755E8]" />
            }
            className="bottom-[10%] left-[3%] sm:-left-4"
          />

          <div className="relative aspect-[1/1] overflow-hidden rounded-[42px] border border-white/90 bg-white/60 p-4 shadow-[0_35px_100px_rgba(41,59,116,0.16)] backdrop-blur-xl sm:p-6">
            <div className="map-grid relative h-full overflow-hidden rounded-[32px] border border-[#E7EAF6] bg-[#F8FAFF]">
              {/* CURRENT LOCATION */}
              <div className="absolute left-[7%] top-[7%] flex items-center gap-2 rounded-full border border-[#E6E9F2] bg-white/90 px-4 py-2 text-xs font-semibold text-[#465066] shadow-sm">
                <LocateFixed className="h-3.5 w-3.5 text-[#1A67C9]" />

                Current location
              </div>

              <div className="absolute right-[8%] top-[8%] flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg">
                <Route className="h-4 w-4 text-[#8152ED]" />
              </div>

              {/* ROUTE */}
              <svg
                viewBox="0 0 600 600"
                className="absolute inset-0 h-full w-full"
                fill="none"
              >
                <motion.path
                  d="M98 472 C150 410 153 345 228 326 C305 307 280 222 358 197 C426 174 447 123 514 94"
                  stroke="url(#routeGradient)"
                  strokeWidth="11"
                  strokeLinecap="round"
                  initial={{
                    pathLength: 0,
                  }}
                  animate={{
                    pathLength: 1,
                  }}
                  transition={{
                    duration: 2,
                    delay: 0.55,
                    ease: "easeInOut",
                  }}
                />

                <defs>
                  <linearGradient
                    id="routeGradient"
                    x1="90"
                    y1="480"
                    x2="520"
                    y2="90"
                  >
                    <stop
                      stopColor="#1A67C9"
                    />

                    <stop
                      offset="1"
                      stopColor="#8152ED"
                    />
                  </linearGradient>
                </defs>
              </svg>

              {/* CURRENT POSITION */}
              <motion.div
                initial={{
                  scale: 0,
                }}
                animate={{
                  scale: 1,
                }}
                transition={{
                  delay: 1.1,
                  type: "spring",
                  stiffness: 180,
                }}
                className="absolute bottom-[17%] left-[13%]"
              >
                <div className="relative">
                  <div className="absolute -inset-4 animate-ping rounded-full bg-[#1A67C9]/15" />

                  <div className="relative flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-[#1A67C9] shadow-xl">
                    <Navigation2 className="h-5 w-5 rotate-12 text-white" />
                  </div>
                </div>
              </motion.div>

              {/* DESTINATION */}
              <motion.div
                initial={{
                  y: -15,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  delay: 1.3,
                  duration: 0.5,
                }}
                className="absolute right-[10%] top-[11%]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-gradient-to-br from-[#754DF2] to-[#9357F0] shadow-xl shadow-purple-500/25">
                  <MapPin className="h-6 w-6 fill-white text-white" />
                </div>
              </motion.div>

              {/* ROUTE INFORMATION */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 1.45,
                  duration: 0.6,
                }}
                className="absolute bottom-[7%] right-[6%] w-[220px] rounded-[24px] border border-white bg-white/90 p-4 shadow-[0_20px_50px_rgba(32,43,82,0.12)] backdrop-blur-xl sm:w-[245px]"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#9A9FB0]">
                      Fastest route
                    </p>

                    <p className="mt-1 text-lg font-semibold tracking-[-0.035em] text-[#151A2B]">
                      14 min
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F0EDFF]">
                    <Navigation2 className="h-5 w-5 text-[#7657E9]" />
                  </div>
                </div>

                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-[#EEF0F6]">
                  <motion.div
                    initial={{
                      width: 0,
                    }}
                    animate={{
                      width: "76%",
                    }}
                    transition={{
                      duration: 1.2,
                      delay: 1.7,
                    }}
                    className="h-full rounded-full bg-gradient-to-r from-[#1A67C9] to-[#8152ED]"
                  />
                </div>

                <div className="mt-3 flex items-center justify-between text-[11px] font-medium text-[#7C8395]">
                  <span>
                    8.4 km
                  </span>

                  <span>
                    Light traffic
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}