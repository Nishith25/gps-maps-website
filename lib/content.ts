import { site } from "@/data/site";
import { getMongoDatabase } from "@/lib/mongodb";

export type CapabilityKey =
  | "navigation"
  | "weather"
  | "nearby"
  | "offline"
  | "travel"
  | "tools";

export type CapabilityContent = {
  id: CapabilityKey;
  label: string;
  title: string;
  description: string;
  sortOrder: number;
  isVisible: boolean;
};

export type HomepageContent = {
  heroTitleTop: string;
  heroTitleBottom: string;
  heroDescription: string;
  playStoreUrl: string;
};

export type BrandContent = {
  name: string;
  shortName: string;
  eyebrow: string;
  navSubtitle: string;
};

export type NavigationContent = {
  featuresLabel: string;
  weatherLabel: string;
  travelLabel: string;
  faqLabel: string;
  getAppLabel: string;
  googlePlayLabel: string;
};

export type StatContent = {
  value: string;
  label: string;
};

export type CapabilitySectionContent = {
  eyebrow: string;
  title: string;
  description: string;
  items: CapabilityContent[];
};

export type ImmersiveContent = {
  eyebrow: string;
  title: string;
  description: string;
  highlights: string[];
};

export type WeatherDetailContent = {
  label: string;
  value: string;
};

export type WeatherForecastContent = {
  time: string;
  temperature: string;
  rain: string;
};

export type WeatherContent = {
  eyebrow: string;
  title: string;
  description: string;
  location: string;
  temperature: string;
  condition: string;
  feelsLike: string;

  details: WeatherDetailContent[];

  forecast: WeatherForecastContent[];

  alert: {
    title: string;
    description: string;
    confidence: string;
  };

  aqi: {
    score: string;
    label: string;
    description: string;
  };

  insight: {
    title: string;
    time: string;
    description: string;
  };
};

export type TravelPlannerContent = {
  from: string;
  to: string;
  date: string;
  duration: string;
  distance: string;
  condition: string;
};

export type TravelActivityContent = {
  name: string;
  score: number;
  level: string;
  bestTime: string;
  description: string;
};

export type TravelReadinessContent = {
  label: string;
  value: string;
};

export type TravelContent = {
  eyebrow: string;
  title: string;
  description: string;
  planner: TravelPlannerContent;
  activities: TravelActivityContent[];
  readiness: TravelReadinessContent[];
};

export type UtilityCategoryContent = {
  name: string;
  distance: string;
};

export type UtilityTextBlock = {
  title: string;
  description: string;
};

export type UtilitiesContent = {
  eyebrow: string;
  title: string;
  description: string;

  nearby: {
    title: string;
    description: string;
    categories: UtilityCategoryContent[];
  };

  parking: UtilityTextBlock;
  speedometer: UtilityTextBlock;
  compass: UtilityTextBlock;
  translator: UtilityTextBlock;

  marquee: string[];
};

export type DownloadContent = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: string;
  benefits: string[];
};

export type FAQContent = {
  question: string;
  answer: string;
  isVisible: boolean;
};

export type FAQSectionContent = {
  eyebrow: string;
  title: string;
  description: string;
};

export type FooterLinkContent = {
  label: string;
  href: string;
};

export type FooterContent = {
  description: string;
  links: FooterLinkContent[];
};

export type SEOContent = {
  title: string;
  description: string;
  keywords: string[];
};

export type SiteContent = {
  brand: BrandContent;
  navigation: NavigationContent;
  stats: StatContent[];
  hero: HomepageContent;
  capabilities: CapabilitySectionContent;
  immersive: ImmersiveContent;
  weather: WeatherContent;
  travel: TravelContent;
  utilities: UtilitiesContent;
  download: DownloadContent;
  faq: FAQContent[];
  faqSection: FAQSectionContent;
  footer: FooterContent;
  seo: SEOContent;
};

type MongoCapability = {
  id?: string;
  label?: string;
  title?: string;
  description?: string;
  visible?: boolean;
};

type MongoFAQ = {
  question?: string;
  answer?: string;
  visible?: boolean;
};

type MongoHomepageDocument = {
  key: string;

  brand?: Partial<BrandContent>;

  navigation?: Partial<NavigationContent>;

  stats?: Array<Partial<StatContent>>;

  hero?: {
    titleTop?: string;
    titleBottom?: string;
    description?: string;
    playStoreUrl?: string;
  };

  capabilities?: {
    eyebrow?: string;
    title?: string;
    description?: string;
    items?: MongoCapability[];
  };

  immersive?: Partial<ImmersiveContent>;

  weather?: Partial<WeatherContent>;

  travel?: Partial<TravelContent>;

  utilities?: {
    eyebrow?: string;
    title?: string;
    description?: string;

    nearby?: {
      title?: string;
      description?: string;
      categories?: Array<Partial<UtilityCategoryContent>>;
    };

    parking?: Partial<UtilityTextBlock>;
    speedometer?: Partial<UtilityTextBlock>;
    compass?: Partial<UtilityTextBlock>;
    translator?: Partial<UtilityTextBlock>;

    marquee?: string[];
  };

  download?: {
    eyebrow?: string;
    title?: string;
    description?: string;
    primaryCta?: string;
    benefits?: string[];
  };

  faq?: MongoFAQ[];

  faqSection?: Partial<FAQSectionContent>;

  footer?: {
    description?: string;
    links?: Array<Partial<FooterLinkContent>>;
  };

  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
};

const fallbackBrand: BrandContent = {
  name: site.brand.name,
  shortName: site.brand.shortName,
  eyebrow: site.brand.eyebrow,
  navSubtitle: "Navigation & Travel",
};

const fallbackNavigation: NavigationContent = {
  featuresLabel: "Features",
  weatherLabel: "Weather",
  travelLabel: "Travel",
  faqLabel: "FAQ",
  getAppLabel: "Get the app",
  googlePlayLabel: "Get it on Google Play",
};

const fallbackStats: StatContent[] = site.stats.map(
  (item) => ({
    value: item.value,
    label: item.label,
  }),
);

const fallbackHero: HomepageContent = {
  heroTitleTop: site.hero.titleTop,
  heroTitleBottom: site.hero.titleBottom,
  heroDescription: site.hero.description,
  playStoreUrl: site.playStoreUrl,
};

const fallbackCapabilities: CapabilitySectionContent = {
  eyebrow: site.capabilities.eyebrow,
  title: site.capabilities.title,
  description: site.capabilities.description,

  items: site.capabilities.items.map(
    (item, index) => ({
      id: item.id as CapabilityKey,
      label: item.label,
      title: item.title,
      description: item.description,
      sortOrder: index + 1,
      isVisible: true,
    }),
  ),
};

const fallbackImmersive: ImmersiveContent = {
  eyebrow: site.immersive.eyebrow,
  title: site.immersive.title,
  description: site.immersive.description,
  highlights: [...site.immersive.highlights],
};

const fallbackWeather: WeatherContent = {
  eyebrow: site.weather.eyebrow,
  title: site.weather.title,
  description: site.weather.description,
  location: site.weather.location,
  temperature: site.weather.temperature,
  condition: site.weather.condition,
  feelsLike: site.weather.feelsLike,

  details: site.weather.details.map((item) => ({
    label: item.label,
    value: item.value,
  })),

  forecast: site.weather.forecast.map((item) => ({
    time: item.time,
    temperature: item.temperature,
    rain: item.rain,
  })),

  alert: {
    title: site.weather.alert.title,
    description: site.weather.alert.description,
    confidence: site.weather.alert.confidence,
  },

  aqi: {
    score: site.weather.aqi.score,
    label: site.weather.aqi.label,
    description: site.weather.aqi.description,
  },

  insight: {
    title: site.weather.insight.title,
    time: site.weather.insight.time,
    description: site.weather.insight.description,
  },
};

const fallbackTravel: TravelContent = {
  eyebrow: site.travel.eyebrow,
  title: site.travel.title,
  description: site.travel.description,

  planner: {
    from: site.travel.planner.from,
    to: site.travel.planner.to,
    date: site.travel.planner.date,
    duration: site.travel.planner.duration,
    distance: site.travel.planner.distance,
    condition: site.travel.planner.condition,
  },

  activities: site.travel.activities.map((item) => ({
    name: item.name,
    score: item.score,
    level: item.level,
    bestTime: item.bestTime,
    description: item.description,
  })),

  readiness: site.travel.readiness.map((item) => ({
    label: item.label,
    value: item.value,
  })),
};

const fallbackUtilities: UtilitiesContent = {
  eyebrow: site.utilities.eyebrow,
  title: site.utilities.title,
  description: site.utilities.description,

  nearby: {
    title: site.utilities.nearby.title,
    description: site.utilities.nearby.description,

    categories:
      site.utilities.nearby.categories.map((item) => ({
        name: item.name,
        distance: item.distance,
      })),
  },

  parking: {
    title: site.utilities.parking.title,
    description: site.utilities.parking.description,
  },

  speedometer: {
    title: site.utilities.speedometer.title,
    description: site.utilities.speedometer.description,
  },

  compass: {
    title: site.utilities.compass.title,
    description: site.utilities.compass.description,
  },

  translator: {
    title: site.utilities.translator.title,
    description: site.utilities.translator.description,
  },

  marquee: [...site.utilities.marquee],
};

const fallbackDownload: DownloadContent = {
  eyebrow: site.download.eyebrow,
  title: site.download.title,
  description: site.download.description,
  primaryCta: site.download.primaryCta,
  benefits: [...site.download.benefits],
};

const fallbackFAQ: FAQContent[] =
  site.faq.items.map((item) => ({
    question: item.question,
    answer: item.answer,
    isVisible: true,
  }));

const fallbackFAQSection: FAQSectionContent = {
  eyebrow: site.faq.eyebrow,
  title: site.faq.title,
  description:
    "Everything you need to know before getting started.",
};

const fallbackFooter: FooterContent = {
  description: site.footer.description,

  links: site.footer.links.map((item) => ({
    label: item.label,
    href: item.href,
  })),
};

const fallbackSEO: SEOContent = {
  title: "GPS, Maps, Driving Directions",

  description:
    "Voice navigation, offline maps, live weather, nearby places and intelligent travel tools.",

  keywords: [
    "GPS navigation",
    "maps",
    "voice navigation",
    "offline maps",
    "weather",
    "travel planner",
    "nearby places",
  ],
};

const fallbackSiteContent: SiteContent = {
  brand: fallbackBrand,
  navigation: fallbackNavigation,
  stats: fallbackStats,
  hero: fallbackHero,
  capabilities: fallbackCapabilities,
  immersive: fallbackImmersive,
  weather: fallbackWeather,
  travel: fallbackTravel,
  utilities: fallbackUtilities,
  download: fallbackDownload,
  faq: fallbackFAQ,
  faqSection: fallbackFAQSection,
  footer: fallbackFooter,
  seo: fallbackSEO,
};

function textOrFallback(
  value: unknown,
  fallback: string,
) {
  if (
    typeof value !== "string" ||
    value.trim().length === 0
  ) {
    return fallback;
  }

  return value.trim();
}

function isCapabilityKey(
  value: unknown,
): value is CapabilityKey {
  return (
    value === "navigation" ||
    value === "weather" ||
    value === "nearby" ||
    value === "offline" ||
    value === "travel" ||
    value === "tools"
  );
}

function normalizeStringArray(
  value: unknown,
  fallback: string[],
) {
  if (!Array.isArray(value)) {
    return fallback;
  }

  const valid = value.filter(
    (item): item is string =>
      typeof item === "string" &&
      item.trim().length > 0,
  );

  return valid.length
    ? valid.map((item) => item.trim())
    : fallback;
}

function normalizeCapabilities(
  document: MongoHomepageDocument,
): CapabilitySectionContent {
  const mongoItems = document.capabilities?.items;

  if (!Array.isArray(mongoItems)) {
    return {
      ...fallbackCapabilities,
      eyebrow: textOrFallback(
        document.capabilities?.eyebrow,
        fallbackCapabilities.eyebrow,
      ),
      title: textOrFallback(
        document.capabilities?.title,
        fallbackCapabilities.title,
      ),
      description: textOrFallback(
        document.capabilities?.description,
        fallbackCapabilities.description,
      ),
    };
  }

  const mongoMap = new Map<
    CapabilityKey,
    MongoCapability
  >();

  for (const item of mongoItems) {
    if (isCapabilityKey(item.id)) {
      mongoMap.set(item.id, item);
    }
  }

  return {
    eyebrow: textOrFallback(
      document.capabilities?.eyebrow,
      fallbackCapabilities.eyebrow,
    ),

    title: textOrFallback(
      document.capabilities?.title,
      fallbackCapabilities.title,
    ),

    description: textOrFallback(
      document.capabilities?.description,
      fallbackCapabilities.description,
    ),

    items: fallbackCapabilities.items.map(
      (fallback) => {
        const mongoItem =
          mongoMap.get(fallback.id);

        if (!mongoItem) {
          return fallback;
        }

        return {
          ...fallback,

          label: textOrFallback(
            mongoItem.label,
            fallback.label,
          ),

          title: textOrFallback(
            mongoItem.title,
            fallback.title,
          ),

          description: textOrFallback(
            mongoItem.description,
            fallback.description,
          ),

          isVisible:
            mongoItem.visible !== false,
        };
      },
    ),
  };
}

function normalizeImmersive(
  document: MongoHomepageDocument,
): ImmersiveContent {
  const source = document.immersive;

  return {
    eyebrow: textOrFallback(
      source?.eyebrow,
      fallbackImmersive.eyebrow,
    ),

    title: textOrFallback(
      source?.title,
      fallbackImmersive.title,
    ),

    description: textOrFallback(
      source?.description,
      fallbackImmersive.description,
    ),

    highlights: normalizeStringArray(
      source?.highlights,
      fallbackImmersive.highlights,
    ),
  };
}

function normalizeWeather(
  document: MongoHomepageDocument,
): WeatherContent {
  const source = document.weather;

  const details =
    Array.isArray(source?.details) &&
    source.details.length > 0
      ? source.details.map((item, index) => {
          const fallback =
            fallbackWeather.details[index] ??
            fallbackWeather.details[0];

          return {
            label: textOrFallback(
              item?.label,
              fallback.label,
            ),

            value: textOrFallback(
              item?.value,
              fallback.value,
            ),
          };
        })
      : fallbackWeather.details;

  const forecast =
    Array.isArray(source?.forecast) &&
    source.forecast.length > 0
      ? source.forecast.map((item, index) => {
          const fallback =
            fallbackWeather.forecast[index] ??
            fallbackWeather.forecast[0];

          return {
            time: textOrFallback(
              item?.time,
              fallback.time,
            ),

            temperature: textOrFallback(
              item?.temperature,
              fallback.temperature,
            ),

            rain: textOrFallback(
              item?.rain,
              fallback.rain,
            ),
          };
        })
      : fallbackWeather.forecast;

  return {
    eyebrow: textOrFallback(
      source?.eyebrow,
      fallbackWeather.eyebrow,
    ),

    title: textOrFallback(
      source?.title,
      fallbackWeather.title,
    ),

    description: textOrFallback(
      source?.description,
      fallbackWeather.description,
    ),

    location: textOrFallback(
      source?.location,
      fallbackWeather.location,
    ),

    temperature: textOrFallback(
      source?.temperature,
      fallbackWeather.temperature,
    ),

    condition: textOrFallback(
      source?.condition,
      fallbackWeather.condition,
    ),

    feelsLike: textOrFallback(
      source?.feelsLike,
      fallbackWeather.feelsLike,
    ),

    details,
    forecast,

    alert: {
      title: textOrFallback(
        source?.alert?.title,
        fallbackWeather.alert.title,
      ),

      description: textOrFallback(
        source?.alert?.description,
        fallbackWeather.alert.description,
      ),

      confidence: textOrFallback(
        source?.alert?.confidence,
        fallbackWeather.alert.confidence,
      ),
    },

    aqi: {
      score: textOrFallback(
        source?.aqi?.score,
        fallbackWeather.aqi.score,
      ),

      label: textOrFallback(
        source?.aqi?.label,
        fallbackWeather.aqi.label,
      ),

      description: textOrFallback(
        source?.aqi?.description,
        fallbackWeather.aqi.description,
      ),
    },

    insight: {
      title: textOrFallback(
        source?.insight?.title,
        fallbackWeather.insight.title,
      ),

      time: textOrFallback(
        source?.insight?.time,
        fallbackWeather.insight.time,
      ),

      description: textOrFallback(
        source?.insight?.description,
        fallbackWeather.insight.description,
      ),
    },
  };
}

function normalizeTravel(
  document: MongoHomepageDocument,
): TravelContent {
  const source = document.travel;

  const activities =
    Array.isArray(source?.activities) &&
    source.activities.length > 0
      ? source.activities.map(
          (item, index) => {
            const fallback =
              fallbackTravel.activities[index] ??
              fallbackTravel.activities[0];

            return {
              name: textOrFallback(
                item?.name,
                fallback.name,
              ),

              score:
                typeof item?.score === "number"
                  ? item.score
                  : fallback.score,

              level: textOrFallback(
                item?.level,
                fallback.level,
              ),

              bestTime: textOrFallback(
                item?.bestTime,
                fallback.bestTime,
              ),

              description: textOrFallback(
                item?.description,
                fallback.description,
              ),
            };
          },
        )
      : fallbackTravel.activities;

  const readiness =
    Array.isArray(source?.readiness) &&
    source.readiness.length > 0
      ? source.readiness.map(
          (item, index) => {
            const fallback =
              fallbackTravel.readiness[index] ??
              fallbackTravel.readiness[0];

            return {
              label: textOrFallback(
                item?.label,
                fallback.label,
              ),

              value: textOrFallback(
                item?.value,
                fallback.value,
              ),
            };
          },
        )
      : fallbackTravel.readiness;

  return {
    eyebrow: textOrFallback(
      source?.eyebrow,
      fallbackTravel.eyebrow,
    ),

    title: textOrFallback(
      source?.title,
      fallbackTravel.title,
    ),

    description: textOrFallback(
      source?.description,
      fallbackTravel.description,
    ),

    planner: {
      from: textOrFallback(
        source?.planner?.from,
        fallbackTravel.planner.from,
      ),

      to: textOrFallback(
        source?.planner?.to,
        fallbackTravel.planner.to,
      ),

      date: textOrFallback(
        source?.planner?.date,
        fallbackTravel.planner.date,
      ),

      duration: textOrFallback(
        source?.planner?.duration,
        fallbackTravel.planner.duration,
      ),

      distance: textOrFallback(
        source?.planner?.distance,
        fallbackTravel.planner.distance,
      ),

      condition: textOrFallback(
        source?.planner?.condition,
        fallbackTravel.planner.condition,
      ),
    },

    activities,
    readiness,
  };
}

function normalizeUtilities(
  document: MongoHomepageDocument,
): UtilitiesContent {
  const source = document.utilities;

  const categories =
    Array.isArray(source?.nearby?.categories) &&
    source.nearby.categories.length > 0
      ? source.nearby.categories.map(
          (item, index) => {
            const fallback =
              fallbackUtilities.nearby.categories[
                index
              ] ??
              fallbackUtilities.nearby.categories[0];

            return {
              name: textOrFallback(
                item?.name,
                fallback.name,
              ),

              distance: textOrFallback(
                item?.distance,
                fallback.distance,
              ),
            };
          },
        )
      : fallbackUtilities.nearby.categories;

  return {
    eyebrow: textOrFallback(
      source?.eyebrow,
      fallbackUtilities.eyebrow,
    ),

    title: textOrFallback(
      source?.title,
      fallbackUtilities.title,
    ),

    description: textOrFallback(
      source?.description,
      fallbackUtilities.description,
    ),

    nearby: {
      title: textOrFallback(
        source?.nearby?.title,
        fallbackUtilities.nearby.title,
      ),

      description: textOrFallback(
        source?.nearby?.description,
        fallbackUtilities.nearby.description,
      ),

      categories,
    },

    parking: {
      title: textOrFallback(
        source?.parking?.title,
        fallbackUtilities.parking.title,
      ),

      description: textOrFallback(
        source?.parking?.description,
        fallbackUtilities.parking.description,
      ),
    },

    speedometer: {
      title: textOrFallback(
        source?.speedometer?.title,
        fallbackUtilities.speedometer.title,
      ),

      description: textOrFallback(
        source?.speedometer?.description,
        fallbackUtilities.speedometer.description,
      ),
    },

    compass: {
      title: textOrFallback(
        source?.compass?.title,
        fallbackUtilities.compass.title,
      ),

      description: textOrFallback(
        source?.compass?.description,
        fallbackUtilities.compass.description,
      ),
    },

    translator: {
      title: textOrFallback(
        source?.translator?.title,
        fallbackUtilities.translator.title,
      ),

      description: textOrFallback(
        source?.translator?.description,
        fallbackUtilities.translator.description,
      ),
    },

    marquee: normalizeStringArray(
      source?.marquee,
      fallbackUtilities.marquee,
    ),
  };
}

function normalizeDownload(
  document: MongoHomepageDocument,
): DownloadContent {
  const source = document.download;

  return {
    eyebrow: textOrFallback(
      source?.eyebrow,
      fallbackDownload.eyebrow,
    ),

    title: textOrFallback(
      source?.title,
      fallbackDownload.title,
    ),

    description: textOrFallback(
      source?.description,
      fallbackDownload.description,
    ),

    primaryCta: textOrFallback(
      source?.primaryCta,
      fallbackDownload.primaryCta,
    ),

    benefits: normalizeStringArray(
      source?.benefits,
      fallbackDownload.benefits,
    ),
  };
}

function normalizeFAQ(
  document: MongoHomepageDocument,
): FAQContent[] {
  if (
    !Array.isArray(document.faq) ||
    document.faq.length === 0
  ) {
    return fallbackFAQ;
  }

  const validFAQs = document.faq
    .filter(
      (item) =>
        typeof item.question === "string" &&
        item.question.trim().length > 0 &&
        typeof item.answer === "string" &&
        item.answer.trim().length > 0,
    )
    .map((item) => ({
      question: item.question!.trim(),
      answer: item.answer!.trim(),
      isVisible: item.visible !== false,
    }));

  return validFAQs.length > 0
    ? validFAQs
    : fallbackFAQ;
}

function normalizeFooter(
  document: MongoHomepageDocument,
): FooterContent {
  const source = document.footer;

  const links =
    Array.isArray(source?.links) &&
    source.links.length > 0
      ? source.links
          .filter(
            (item) =>
              typeof item.label === "string" &&
              item.label.trim() &&
              typeof item.href === "string" &&
              item.href.trim(),
          )
          .map((item) => ({
            label: item.label!.trim(),
            href: item.href!.trim(),
          }))
      : fallbackFooter.links;

  return {
    description: textOrFallback(
      source?.description,
      fallbackFooter.description,
    ),

    links:
      links.length > 0
        ? links
        : fallbackFooter.links,
  };
}

export async function getSiteContent(): Promise<SiteContent> {
  try {
    const db = await getMongoDatabase();

    const document =
      await db
        .collection<MongoHomepageDocument>(
          "site_content",
        )
        .findOne({
          key: "homepage",
        });

    if (!document) {
      console.warn(
        "MongoDB homepage document not found. Using site.ts fallback.",
      );

      return fallbackSiteContent;
    }

    return {
      brand: {
        name: textOrFallback(
          document.brand?.name,
          fallbackBrand.name,
        ),

        shortName: textOrFallback(
          document.brand?.shortName,
          fallbackBrand.shortName,
        ),

        eyebrow: textOrFallback(
          document.brand?.eyebrow,
          fallbackBrand.eyebrow,
        ),

        navSubtitle: textOrFallback(
          document.brand?.navSubtitle,
          fallbackBrand.navSubtitle,
        ),
      },

      navigation: {
        featuresLabel: textOrFallback(
          document.navigation?.featuresLabel,
          fallbackNavigation.featuresLabel,
        ),

        weatherLabel: textOrFallback(
          document.navigation?.weatherLabel,
          fallbackNavigation.weatherLabel,
        ),

        travelLabel: textOrFallback(
          document.navigation?.travelLabel,
          fallbackNavigation.travelLabel,
        ),

        faqLabel: textOrFallback(
          document.navigation?.faqLabel,
          fallbackNavigation.faqLabel,
        ),

        getAppLabel: textOrFallback(
          document.navigation?.getAppLabel,
          fallbackNavigation.getAppLabel,
        ),

        googlePlayLabel: textOrFallback(
          document.navigation?.googlePlayLabel,
          fallbackNavigation.googlePlayLabel,
        ),
      },

      stats:
        Array.isArray(document.stats) &&
        document.stats.length > 0
          ? document.stats.map((item, index) => {
              const fallback =
                fallbackStats[index] ??
                fallbackStats[0];

              return {
                value: textOrFallback(
                  item.value,
                  fallback.value,
                ),

                label: textOrFallback(
                  item.label,
                  fallback.label,
                ),
              };
            })
          : fallbackStats,

      hero: {
        heroTitleTop: textOrFallback(
          document.hero?.titleTop,
          fallbackHero.heroTitleTop,
        ),

        heroTitleBottom: textOrFallback(
          document.hero?.titleBottom,
          fallbackHero.heroTitleBottom,
        ),

        heroDescription: textOrFallback(
          document.hero?.description,
          fallbackHero.heroDescription,
        ),

        playStoreUrl: textOrFallback(
          document.hero?.playStoreUrl,
          fallbackHero.playStoreUrl,
        ),
      },

      capabilities:
        normalizeCapabilities(document),

      immersive:
        normalizeImmersive(document),

      weather:
        normalizeWeather(document),

      travel:
        normalizeTravel(document),

      utilities:
        normalizeUtilities(document),

      download:
        normalizeDownload(document),

      faq:
        normalizeFAQ(document),

      faqSection: {
        eyebrow: textOrFallback(
          document.faqSection?.eyebrow,
          fallbackFAQSection.eyebrow,
        ),

        title: textOrFallback(
          document.faqSection?.title,
          fallbackFAQSection.title,
        ),

        description: textOrFallback(
          document.faqSection?.description,
          fallbackFAQSection.description,
        ),
      },

      footer:
        normalizeFooter(document),

      seo: {
        title: textOrFallback(
          document.seo?.title,
          fallbackSEO.title,
        ),

        description: textOrFallback(
          document.seo?.description,
          fallbackSEO.description,
        ),

        keywords: normalizeStringArray(
          document.seo?.keywords,
          fallbackSEO.keywords,
        ),
      },
    };
  } catch (error) {
    console.error(
      "MongoDB content loading failed:",
      error,
    );

    return fallbackSiteContent;
  }
}