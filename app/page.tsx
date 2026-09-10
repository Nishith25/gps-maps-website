import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

import CoreCapabilities from "@/components/sections/CoreCapabilities";
import DownloadCTA from "@/components/sections/DownloadCTA";
import FAQ from "@/components/sections/FAQ";
import ImmersiveMap from "@/components/sections/ImmersiveMap";
import TravelIntelligence from "@/components/sections/TravelIntelligence";
import UtilityShowcase from "@/components/sections/UtilityShowcase";
import WeatherIntelligence from "@/components/sections/WeatherIntelligence";

import {
  getSiteContent,
} from "@/lib/content";

export const dynamic =
  "force-dynamic";

export default async function Home() {
  const content =
    await getSiteContent();

  return (
    <main className="min-h-screen">
      <Navbar
        brand={content.brand}
        navigation={
          content.navigation
        }
        playStoreUrl={
          content.hero
            .playStoreUrl
        }
      />

      <Hero
        eyebrow={
          content.brand.eyebrow
        }
        titleTop={
          content.hero
            .heroTitleTop
        }
        titleBottom={
          content.hero
            .heroTitleBottom
        }
        description={
          content.hero
            .heroDescription
        }
        playStoreUrl={
          content.hero
            .playStoreUrl
        }
        googlePlayLabel={
          content.navigation
            .googlePlayLabel
        }
        stats={
          content.stats
        }
      />

      <CoreCapabilities
        eyebrow={
          content.capabilities
            .eyebrow
        }
        title={
          content.capabilities
            .title
        }
        description={
          content.capabilities
            .description
        }
        items={
          content.capabilities
            .items
        }
      />

      <ImmersiveMap
        content={
          content.immersive
        }
        playStoreUrl={
          content.hero
            .playStoreUrl
        }
      />

      <WeatherIntelligence
        content={
          content.weather
        }
      />

      <TravelIntelligence
        content={
          content.travel
        }
        playStoreUrl={
          content.hero
            .playStoreUrl
        }
      />

      <UtilityShowcase
        content={
          content.utilities
        }
      />

      <DownloadCTA
        content={
          content.download
        }
        playStoreUrl={
          content.hero
            .playStoreUrl
        }
      />

      <FAQ
        section={
          content.faqSection
        }
        items={
          content.faq
        }
      />

      <Footer
        brand={
          content.brand
        }
        content={
          content.footer
        }
        playStoreUrl={
          content.hero
            .playStoreUrl
        }
      />
    </main>
  );
}