import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

import AboutProduct from "@/components/sections/AboutProduct";
import CoreCapabilities from "@/components/sections/CoreCapabilities";
import DownloadCTA from "@/components/sections/DownloadCTA";
import EverythingInOne from "@/components/sections/EverythingInOne";
import FAQ from "@/components/sections/FAQ";
import NearbyPlaces from "@/components/sections/NearbyPlaces";
import ProductSummary from "@/components/sections/ProductSummary";
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
    <main className="min-h-screen overflow-x-hidden bg-white">
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
        stats={content.stats}
      />

      <ProductSummary
        items={content.capabilities.items}
      />

      <AboutProduct
        content={
          content.immersive
        }
      />

      <WeatherIntelligence
        content={content.weather}
      />

      <NearbyPlaces
        content={content.utilities.nearby}
      />

      <TravelIntelligence
        content={content.travel}
        playStoreUrl={content.hero.playStoreUrl}
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
        weather={
          content.weather
        }
        travel={
          content.travel
        }
        utilities={
          content.utilities
        }
      />

      <UtilityShowcase
        content={content.utilities}
      />

      <EverythingInOne />

      <DownloadCTA
        brandName={
          content.brand.name
        }
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
        brand={content.brand}
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