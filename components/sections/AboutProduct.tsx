import {
  Check,
} from "lucide-react";

import type {
  ImmersiveContent,
} from "@/lib/content";

type AboutProductProps = {
  content: ImmersiveContent;
};

export default function AboutProduct({
  content,
}: AboutProductProps) {
  return (
    <section
      id="about"
      className="border-y border-[#ECEEF3] bg-[#FBFCFE] px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <p className="text-sm font-semibold text-[#6559DF]">
            {content.eyebrow}
          </p>

          <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-[1] tracking-[-0.05em] text-[#101426] sm:text-5xl lg:text-6xl">
            {content.title}
          </h2>
        </div>

        <div className="lg:pt-7">
          <p className="max-w-2xl text-base leading-8 text-[#6F778A] sm:text-lg">
            {content.description}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {content.highlights.map(
              (item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 border-t border-[#E4E7ED] pt-4"
                >
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EEECFF]">
                    <Check className="h-3.5 w-3.5 text-[#6559DF]" />
                  </div>

                  <p className="text-sm font-medium leading-6 text-[#444C5F]">
                    {item}
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}