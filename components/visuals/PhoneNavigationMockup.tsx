"use client";

import { motion } from "motion/react";

import {
  CloudSun,
  LocateFixed,
  MapPin,
  Mic,
  Navigation2,
  Search,
  WifiOff,
} from "lucide-react";

export default function PhoneNavigationMockup() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        delay: 0.15,
        ease: [0.2, 0.8, 0.2, 1],
      }}
      className="relative mx-auto w-[275px] max-w-full sm:w-[310px] lg:w-[330px]"
    >
      <div className="pointer-events-none absolute -inset-12 -z-10 rounded-full bg-[#6659DF]/10 blur-[70px]" />

      <div className="relative overflow-hidden rounded-[44px] border-[7px] border-[#171A24] bg-[#F8FAFD] shadow-[0_35px_90px_rgba(29,38,68,0.20)]">
        {/* Dynamic island */}
        <div className="absolute left-1/2 top-2.5 z-30 h-6 w-[90px] -translate-x-1/2 rounded-full bg-[#171A24]" />

        <div className="relative h-[560px] overflow-hidden sm:h-[610px]">
          {/* Map */}
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: "#F8FAFD",
              backgroundImage:
                "linear-gradient(rgba(89,103,136,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(89,103,136,0.07) 1px, transparent 1px)",
              backgroundSize: "34px 34px",
            }}
          />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_30%,rgba(129,82,237,0.10),transparent_30%),radial-gradient(circle_at_25%_72%,rgba(26,103,201,0.09),transparent_32%)]" />

          {/* Search */}
          <div className="absolute left-4 right-4 top-11 z-20 rounded-[18px] border border-[#E6E9F0] bg-white px-4 py-3 shadow-[0_10px_30px_rgba(35,44,76,0.08)]">
            <div className="flex items-center gap-3">
              <Search className="h-4 w-4 shrink-0 text-[#8A91A3]" />

              <p className="min-w-0 flex-1 truncate text-xs font-medium text-[#7C8496]">
                Search destination
              </p>

              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F1EEFF]">
                <Mic className="h-3.5 w-3.5 text-[#7059E4]" />
              </div>
            </div>
          </div>

          {/* Weather */}
          <div className="absolute left-5 top-[112px] z-20 flex items-center gap-2 rounded-full border border-[#E6E9F0] bg-white px-3 py-2 text-[10px] font-semibold text-[#50586A] shadow-sm">
            <CloudSun className="h-3.5 w-3.5 text-[#2778D4]" />

            30° · Clear
          </div>

          {/* Locate */}
          <div className="absolute right-5 top-[112px] z-20 flex h-9 w-9 items-center justify-center rounded-full border border-[#E6E9F0] bg-white shadow-sm">
            <LocateFixed className="h-4 w-4 text-[#2778D4]" />
          </div>

          {/* Roads + Route */}
          <svg
            viewBox="0 0 300 570"
            className="absolute inset-0 z-10 h-full w-full"
            fill="none"
            aria-hidden="true"
          >
            <g opacity="0.16">
              <path
                d="M-20 200 C55 170 80 240 160 205 C215 180 245 205 330 166"
                stroke="#596783"
                strokeWidth="2"
              />

              <path
                d="M-10 330 C55 296 104 350 170 318 C220 295 255 330 315 292"
                stroke="#596783"
                strokeWidth="2"
              />

              <path
                d="M48 95 C30 175 82 216 58 288 C36 355 75 422 50 505"
                stroke="#596783"
                strokeWidth="2"
              />

              <path
                d="M228 86 C205 165 245 226 220 299 C196 368 240 420 214 520"
                stroke="#596783"
                strokeWidth="2"
              />
            </g>

            <motion.path
              d="M62 458 C88 415 82 372 126 348 C168 325 143 277 188 252 C224 233 220 194 252 166"
              stroke="url(#phoneNavigationRoute)"
              strokeWidth="8"
              strokeLinecap="round"
              initial={{
                pathLength: 0,
              }}
              animate={{
                pathLength: 1,
              }}
              transition={{
                duration: 1.7,
                delay: 0.55,
                ease: "easeInOut",
              }}
            />

            <defs>
              <linearGradient
                id="phoneNavigationRoute"
                x1="58"
                y1="460"
                x2="255"
                y2="160"
              >
                <stop stopColor="#1A67C9" />

                <stop
                  offset="1"
                  stopColor="#8152ED"
                />
              </linearGradient>
            </defs>
          </svg>

          {/* Destination */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 0.95,
              type: "spring",
              stiffness: 160,
            }}
            className="absolute right-[10%] top-[27%] z-20"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-[16px] bg-[#7557E8] shadow-[0_10px_25px_rgba(117,87,232,0.28)]">
              <MapPin className="h-5 w-5 fill-white text-white" />
            </div>
          </motion.div>

          {/* Current location */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.75,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 1.05,
              type: "spring",
              stiffness: 160,
            }}
            className="absolute bottom-[19%] left-[15%] z-20"
          >
            <div className="relative flex h-11 w-11 items-center justify-center rounded-full border-4 border-white bg-[#1A67C9] shadow-lg">
              <Navigation2 className="h-4 w-4 rotate-12 text-white" />

              <motion.div
                animate={{
                  scale: [1, 1.6, 1],
                  opacity: [0.18, 0, 0.18],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                }}
                className="absolute -inset-2 -z-10 rounded-full bg-[#1A67C9]"
              />
            </div>
          </motion.div>

          {/* Route information */}
          <motion.div
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1.1,
              duration: 0.5,
            }}
            className="absolute bottom-4 left-4 right-4 z-30 rounded-[23px] border border-[#E5E8EF] bg-white p-4 shadow-[0_18px_45px_rgba(35,45,78,0.12)]"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#9A9FAE]">
                  Fastest route
                </p>

                <div className="mt-1 flex items-baseline gap-2">
                  <p className="text-2xl font-semibold tracking-[-0.04em] text-[#151A2B]">
                    14 min
                  </p>

                  <span className="text-xs text-[#8A91A3]">
                    8.4 km
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 rounded-full bg-[#F2F7FF] px-2.5 py-1.5 text-[9px] font-semibold text-[#3377CB]">
                <WifiOff className="h-3 w-3" />

                Offline
              </div>
            </div>

            <div className="mt-4 flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#111629] px-4 text-xs font-semibold text-white">
              Start route

              <Navigation2 className="h-3.5 w-3.5" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}