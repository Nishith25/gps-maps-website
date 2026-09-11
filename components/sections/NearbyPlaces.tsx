"use client";

import { motion } from "motion/react";

import {
  Coffee,
  Fuel,
  Hospital,
  Landmark,
  MapPin,
  Navigation2,
  Pill,
  Search,
  ShoppingBag,
  TreePine,
  Utensils,
} from "lucide-react";

import type {
  UtilitiesContent,
} from "@/lib/content";

type NearbyPlacesProps = {
  content:
    UtilitiesContent["nearby"];
};

const extraCategories = [
  "Cafes",
  "Pharmacies",
  "ATMs",
  "Parks",
  "Temples",
  "More nearby",
];

const categoryIcons = [
  Utensils,
  Fuel,
  Hospital,
  ShoppingBag,
  Coffee,
  Pill,
  Landmark,
  TreePine,
  MapPin,
  Search,
];

function NearbyVisual() {
  const pins = [
    {
      left: "16%",
      top: "34%",
      Icon: Utensils,
    },
    {
      left: "74%",
      top: "29%",
      Icon: Fuel,
    },
    {
      left: "72%",
      top: "68%",
      Icon: Hospital,
    },
    {
      left: "21%",
      top: "70%",
      Icon: ShoppingBag,
    },
  ];

  return (
    <div className="relative min-h-[400px] overflow-hidden rounded-[30px] border border-[#E6E9F1] bg-[#F7F9FC] sm:min-h-[440px]">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(84,101,138,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(84,101,138,0.07) 1px, transparent 1px)",
          backgroundSize:
            "42px 42px",
        }}
      />

      <div className="absolute left-5 right-5 top-5 z-20 flex items-center gap-3 rounded-[18px] border border-[#E5E8EF] bg-white px-4 py-3 shadow-sm">
        <Search className="h-4 w-4 shrink-0 text-[#858C9D]" />

        <span className="min-w-0 flex-1 truncate text-sm text-[#7B8293]">
          Search nearby places
        </span>

        <span className="ml-auto rounded-full bg-[#F2F4F8] px-2.5 py-1 text-[10px] font-semibold text-[#6E7586]">
          2 km
        </span>
      </div>

      <svg
        viewBox="0 0 600 430"
        className="absolute inset-0 h-full w-full"
        fill="none"
        aria-hidden="true"
      >
        <g opacity="0.18">
          <path
            d="M-15 140 C115 192 170 82 298 148 C412 205 492 106 635 155"
            stroke="#677590"
            strokeWidth="2"
          />

          <path
            d="M-15 300 C95 252 180 338 308 286 C430 236 510 312 625 270"
            stroke="#677590"
            strokeWidth="2"
          />

          <path
            d="M120 -20 C88 120 162 205 126 330 C108 391 126 410 108 455"
            stroke="#677590"
            strokeWidth="2"
          />

          <path
            d="M430 -20 C395 128 478 210 442 338 C423 395 450 420 432 455"
            stroke="#677590"
            strokeWidth="2"
          />
        </g>
      </svg>

      <div className="absolute left-[47%] top-[48%] z-20">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-[#1A67C9] shadow-lg">
          <Navigation2 className="h-5 w-5 rotate-12 text-white" />
        </div>
      </div>

      {pins.map(
        (
          {
            left,
            top,
            Icon,
          },
          index,
        ) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay:
                0.08 * index,
            }}
            style={{
              left,
              top,
            }}
            className="absolute z-20 flex h-11 w-11 items-center justify-center rounded-2xl border border-[#E2E6EE] bg-white shadow-md"
          >
            <Icon className="h-4 w-4 text-[#6759D9]" />
          </motion.div>
        ),
      )}
    </div>
  );
}

export default function NearbyPlaces({
  content,
}: NearbyPlacesProps) {
  const existingNames =
    content.categories.map(
      (category) =>
        category.name.toLowerCase(),
    );

  const categories = [
    ...content.categories.map(
      (category) =>
        category.name,
    ),

    ...extraCategories.filter(
      (category) =>
        !existingNames.includes(
          category.toLowerCase(),
        ),
    ),
  ];

  return (
    <section className="bg-[#FBFCFE] px-4 py-20 sm:px-6 sm:py-28 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
        <div>
          <p className="text-sm font-semibold text-[#6559DF]">
            Explore Nearby
          </p>

          <h2 className="mt-4 text-4xl font-semibold leading-[1] tracking-[-0.05em] text-[#101426] sm:text-5xl">
            {content.title}
          </h2>

          <p className="mt-5 max-w-xl text-base leading-8 text-[#747C8F] sm:text-lg">
            {content.description}
          </p>

          <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-2 sm:grid-cols-3">
            {categories
              .slice(0, 10)
              .map(
                (
                  category,
                  index,
                ) => {
                  const Icon =
                    categoryIcons[
                      index %
                        categoryIcons.length
                    ] ?? MapPin;

                  return (
                    <div
                      key={`${category}-${index}`}
                      className="flex min-h-12 items-center gap-3 border-b border-[#E7EAF0] py-3"
                    >
                      <Icon className="h-4 w-4 shrink-0 text-[#6759D9]" />

                      <span className="text-sm font-medium text-[#4C5467]">
                        {
                          category
                        }
                      </span>
                    </div>
                  );
                },
              )}
          </div>
        </div>

        <NearbyVisual />
      </div>
    </section>
  );
}