"use client";

import { motion } from "motion/react";

import {
  ArrowUpRight,
  Check,
  CloudSun,
  MapPin,
  Navigation2,
  Sparkles,
  WifiOff,
} from "lucide-react";

import type {
  DownloadContent,
} from "@/lib/content";

type DownloadCTAProps = {
  content: DownloadContent;
  playStoreUrl: string;
};

export default function DownloadCTA({
  content,
  playStoreUrl,
}: DownloadCTAProps) {
  return (
    <section className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[42px] bg-gradient-to-br from-[#151A30] via-[#1C2142] to-[#35245E] px-6 py-16 shadow-[0_40px_120px_rgba(37,44,93,0.22)] sm:rounded-[52px] sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        <div className="pointer-events-none absolute left-[-100px] top-[-120px] h-[360px] w-[360px] rounded-full bg-[#287EDC]/30 blur-[120px]" />

        <div className="pointer-events-none absolute bottom-[-160px] right-[-100px] h-[430px] w-[430px] rounded-full bg-[#9856EF]/30 blur-[130px]" />

        <div className="download-grid pointer-events-none absolute inset-0 opacity-30" />

        <motion.div
          animate={{
            y: [0, -9, 0],
            rotate: [0, 3, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[8%] top-[13%] hidden h-16 w-16 items-center justify-center rounded-[22px] border border-white/10 bg-white/[0.07] text-white backdrop-blur-xl md:flex"
        >
          <Navigation2 className="h-7 w-7" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 4.7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[24%] top-[26%] hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-4 py-2.5 text-xs font-medium text-white/70 backdrop-blur-xl lg:flex"
        >
          <CloudSun className="h-4 w-4 text-[#83BBFF]" />

          Live weather
        </motion.div>

        <motion.div
          animate={{
            y: [0, -7, 0],
          }}
          transition={{
            duration: 3.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[18%] right-[10%] hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-4 py-2.5 text-xs font-medium text-white/70 backdrop-blur-xl lg:flex"
        >
          <WifiOff className="h-4 w-4 text-[#A98CF4]" />

          Offline ready
        </motion.div>

        <motion.div
          animate={{
            y: [0, 6, 0],
          }}
          transition={{
            duration: 4.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[31%] right-[31%] hidden h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#417EE5] to-[#8C5AEC] text-white shadow-xl lg:flex"
        >
          <MapPin className="h-5 w-5 fill-white" />
        </motion.div>

        <div className="relative z-10 max-w-3xl">
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
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-semibold text-[#B6A3FF]"
          >
            <Sparkles className="h-3.5 w-3.5" />

            {content.eyebrow}
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
              delay: 0.06,
            }}
            className="mt-7 max-w-3xl text-5xl font-semibold leading-[0.96] tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl"
          >
            {content.title}
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
              delay: 0.1,
            }}
            className="mt-6 max-w-2xl text-base leading-8 text-white/55 sm:text-lg"
          >
            {content.description}
          </motion.p>

          <motion.div
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
              delay: 0.15,
            }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {content.benefits.map(
              (benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2.5 text-xs font-medium text-white/70"
                >
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#8266EE]/20">
                    <Check className="h-3 w-3 text-[#AD97FA]" />
                  </div>

                  {benefit}
                </div>
              ),
            )}
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
              delay: 0.2,
            }}
            whileHover={{
              y: -4,
            }}
            href={playStoreUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#15192C] shadow-[0_15px_45px_rgba(0,0,0,0.14)]"
          >
            {content.primaryCta}

            <ArrowUpRight className="h-4 w-4" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}