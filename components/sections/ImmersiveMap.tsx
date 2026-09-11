"use client";

import { motion } from "motion/react";
import {
  CloudSun,
  Fuel,
  Hospital,
  MapPin,
  Mic,
  Navigation2,
  Route,
  Sparkles,
  Utensils,
  WifiOff,
} from "lucide-react";

import { site } from "@/data/site";

function PlacePin({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
        y: 12,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        delay,
        duration: 0.5,
      }}
      animate={{
        y: [0, -6, 0],
      }}
      className={`absolute flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.10] text-white shadow-2xl backdrop-blur-xl ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function ImmersiveMap() {
  return (
    <section className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[42px] bg-[#101426] shadow-[0_40px_120px_rgba(27,34,69,0.20)] sm:rounded-[52px]">
        <div className="pointer-events-none absolute left-[-100px] top-[-100px] h-[350px] w-[350px] rounded-full bg-[#236FD7]/25 blur-[120px]" />

        <div className="pointer-events-none absolute bottom-[-150px] right-[-80px] h-[420px] w-[420px] rounded-full bg-[#8559EE]/25 blur-[130px]" />

        <div className="relative grid min-h-[760px] lg:grid-cols-[0.78fr_1.22fr]">
          <div className="relative z-10 flex flex-col justify-center p-7 sm:p-12 lg:p-14">
            <motion.div
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
              className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-semibold text-[#AF9DFF] backdrop-blur-xl"
            >
              <Sparkles className="h-3.5 w-3.5" />

              {site.immersive.eyebrow}
            </motion.div>

            <motion.h2
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
              className="mt-7 max-w-xl text-5xl font-semibold leading-[0.96] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl"
            >
              {site.immersive.title}
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
                delay: 0.14,
              }}
              className="mt-6 max-w-lg text-base leading-8 text-white/55 sm:text-lg"
            >
              {site.immersive.description}
            </motion.p>

            <motion.div
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
                delay: 0.2,
              }}
              className="mt-9 space-y-3"
            >
              {site.immersive.highlights.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm font-medium text-white/70"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/[0.06]">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#8B6CF0]" />
                  </div>

                  {item}
                </div>
              ))}
            </motion.div>

            <motion.a
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
                delay: 0.26,
              }}
              href={site.playStoreUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#12172A] transition hover:-translate-y-1"
            >
              Start navigating

              <Navigation2 className="h-4 w-4" />
            </motion.a>
          </div>

          <div className="relative min-h-[520px] overflow-hidden lg:min-h-full">
            <div className="world-grid absolute inset-0 opacity-70" />

            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#101426]/30" />

            <svg
              viewBox="0 0 760 760"
              preserveAspectRatio="xMidYMid slice"
              className="absolute inset-0 h-full w-full"
              fill="none"
            >
              <g opacity="0.18">
                <path
                  d="M40 90 C180 130 210 40 360 90 C500 140 560 70 740 100"
                  stroke="white"
                  strokeWidth="2"
                />

                <path
                  d="M20 230 C170 190 220 300 380 240 C540 180 620 250 760 210"
                  stroke="white"
                  strokeWidth="2"
                />

                <path
                  d="M20 420 C160 380 270 440 390 390 C520 340 600 430 760 370"
                  stroke="white"
                  strokeWidth="2"
                />

                <path
                  d="M70 690 C180 570 300 650 430 570 C550 500 630 600 750 510"
                  stroke="white"
                  strokeWidth="2"
                />

                <path
                  d="M150 0 C130 160 250 210 210 350 C180 480 270 590 220 760"
                  stroke="white"
                  strokeWidth="2"
                />

                <path
                  d="M470 0 C420 180 530 250 470 390 C420 520 540 620 510 760"
                  stroke="white"
                  strokeWidth="2"
                />
              </g>

              <motion.path
                d="M105 665 C164 602 145 528 223 488 C305 446 274 368 358 324 C444 279 414 213 500 176 C573 144 606 87 675 72"
                stroke="url(#immersiveRoute)"
                strokeWidth="13"
                strokeLinecap="round"
                initial={{
                  pathLength: 0,
                }}
                whileInView={{
                  pathLength: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 2.2,
                  ease: "easeInOut",
                }}
              />

              <defs>
                <linearGradient
                  id="immersiveRoute"
                  x1="100"
                  y1="665"
                  x2="680"
                  y2="70"
                >
                  <stop stopColor="#3191FF" />
                  <stop offset="0.48" stopColor="#596EEF" />
                  <stop offset="1" stopColor="#A05AF2" />
                </linearGradient>
              </defs>
            </svg>

            <PlacePin
              className="left-[15%] top-[25%]"
              delay={0.3}
            >
              <Utensils className="h-4 w-4" />
            </PlacePin>

            <PlacePin
              className="right-[13%] top-[28%]"
              delay={0.4}
            >
              <Fuel className="h-4 w-4" />
            </PlacePin>

            <PlacePin
              className="right-[32%] top-[50%]"
              delay={0.5}
            >
              <Hospital className="h-4 w-4" />
            </PlacePin>

            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.55,
                type: "spring",
              }}
              className="absolute bottom-[10%] left-[8%]"
            >
              <div className="relative">
                <motion.div
                  animate={{
                    scale: [1, 1.8, 1],
                    opacity: [0.3, 0, 0.3],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                  }}
                  className="absolute inset-0 rounded-full bg-[#318BFA]"
                />

                <div className="relative flex h-14 w-14 items-center justify-center rounded-full border-4 border-[#101426] bg-[#318BFA] shadow-2xl">
                  <Navigation2 className="h-6 w-6 rotate-12 text-white" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                y: -20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.75,
              }}
              className="absolute right-[5%] top-[5%]"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-[22px] bg-gradient-to-br from-[#6B63F3] to-[#A557F1] shadow-[0_18px_45px_rgba(140,83,239,0.38)]">
                <MapPin className="h-7 w-7 fill-white text-white" />
              </div>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.7,
              }}
              className="absolute bottom-[8%] right-[4%] w-[245px] rounded-[26px] border border-white/10 bg-[#151A2C]/80 p-5 shadow-2xl backdrop-blur-2xl sm:w-[275px]"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35">
                    Fastest route
                  </p>

                  <p className="mt-1 text-2xl font-semibold tracking-[-0.04em] text-white">
                    14 min
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.07]">
                  <Route className="h-5 w-5 text-[#9477F4]" />
                </div>
              </div>

              <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{
                    width: 0,
                  }}
                  whileInView={{
                    width: "76%",
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 1.2,
                    delay: 0.8,
                  }}
                  className="h-full rounded-full bg-gradient-to-r from-[#3090FF] to-[#965CF1]"
                />
              </div>

              <div className="mt-4 flex justify-between text-[11px] font-medium text-white/40">
                <span>8.4 km</span>
                <span>Light traffic</span>
              </div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
              }}
              className="absolute left-[5%] top-[7%] flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-4 py-2.5 text-xs font-semibold text-white/75 backdrop-blur-xl"
            >
              <Mic className="h-4 w-4 text-[#9477F4]" />

              Voice navigation
            </motion.div>

            <motion.div
              animate={{
                y: [0, 6, 0],
              }}
              transition={{
                duration: 3.8,
                repeat: Infinity,
              }}
              className="absolute right-[6%] top-[42%] flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-4 py-2.5 text-xs font-semibold text-white/75 backdrop-blur-xl"
            >
              <CloudSun className="h-4 w-4 text-[#74B4FF]" />

              30° · Clear
            </motion.div>

            <motion.div
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute bottom-[30%] left-[6%] flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-4 py-2.5 text-xs font-semibold text-white/75 backdrop-blur-xl"
            >
              <WifiOff className="h-4 w-4 text-[#A486F4]" />

              Offline ready
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}