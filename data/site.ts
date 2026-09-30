export const site = {
  brand: {
    name: "GPS, Maps, Driving Directions",
    shortName: "GPS Maps",
    eyebrow: "Maps • Navigation • Weather • Travel",
  },

  playStoreUrl:
    "https://play.google.com/store/apps/details?id=com.maps.voice.navigation.traffic.gps.location.route.driving.directions&hl=en_IN",

  hero: {
    titleTop: "Navigate smarter.",
    titleBottom: "Stay ready everywhere.",
    description:
      "Voice navigation, offline maps, weather radar, AQI, nearby discovery, live location and travel intelligence — all in one GPS experience.",
  },

  stats: [
    {
      value: "10Cr+",
      label: "Downloads",
    },
    {
      value: "4.0★",
      label: "Google Play",
    },
    {
      value: "1L+",
      label: "Reviews",
    },
  ],

  capabilities: {
    eyebrow: "Built for every journey",
    title: "More than maps. Your complete travel toolkit.",
    description:
      "Navigate, download maps, check weather and AQI, discover nearby places, plan around conditions and stay connected with live location tools.",

    items: [
      {
        id: "navigation",
        label: "Navigation",
        title: "Turn-by-turn navigation for real journeys.",
        description:
          "Voice guidance, destination search, traffic awareness, route options and map tools help keep every trip moving.",
      },
      {
        id: "weather",
        label: "Live Weather",
        title: "Weather intelligence before every journey.",
        description:
          "Current weather, hourly forecasts, longer-range outlooks, radar, alerts and AQI help you prepare before leaving.",
      },
      {
        id: "nearby",
        label: "Nearby Places",
        title: "See what’s around you.",
        description:
          "Explore restaurants, cafes, fuel stations, hospitals, shopping, parking and other useful places around your location.",
      },
      {
        id: "offline",
        label: "Offline Maps",
        title: "No signal. Still moving.",
        description:
          "Download supported countries, regions or selected areas in advance and keep essential map access ready when connectivity drops.",
      },
      {
        id: "travel",
        label: "Travel Intelligence",
        title: "Plan the trip around real conditions.",
        description:
          "Combine route planning, forecasts and activity suitability to make smarter decisions before you travel.",
      },
      {
        id: "tools",
        label: "Smart Tools",
        title: "Everyday map tools without the clutter.",
        description:
          "My Location, Find Address, Parking Manager, Ride Dashboard, compass, translator and other map tools stay within reach.",
      },
    ],
  },

  immersive: {
    eyebrow: "One intelligent map",
    title: "Your world. Connected.",
    description:
      "Move through cities, discover nearby places, prepare for changing weather and stay ready even when connectivity disappears.",

    highlights: [
      "Voice-guided routes",
      "Live weather awareness",
      "Offline-ready maps",
    ],
  },

  weather: {
    eyebrow: "Weather intelligence",
    title: "Know what’s ahead before you step outside.",
    description:
      "Hourly forecasts, longer-range outlooks, radar, rain awareness, weather alerts and air-quality insights help you prepare before every journey.",

    location: "Madhapur",
    temperature: "30°",
    condition: "Light rain",
    feelsLike: "Feels like 34°",

    details: [
      {
        label: "Humidity",
        value: "58%",
      },
      {
        label: "Wind",
        value: "13 km/h",
      },
      {
        label: "Visibility",
        value: "10 km",
      },
      {
        label: "Pressure",
        value: "1008 hPa",
      },
    ],

    forecast: [
      {
        time: "Now",
        temperature: "30°",
        rain: "56%",
      },
      {
        time: "8 PM",
        temperature: "29°",
        rain: "74%",
      },
      {
        time: "11 PM",
        temperature: "27°",
        rain: "48%",
      },
      {
        time: "2 AM",
        temperature: "26°",
        rain: "32%",
      },
    ],

    alert: {
      title: "Rain likely in the next few hours",
      description:
        "Rain probability may reach 74% around your current area.",
      confidence: "74% confidence",
    },

    aqi: {
      score: "25",
      label: "Good",
      description: "Air quality is healthy for outdoor plans.",
    },

    insight: {
      title: "Best time to walk",
      time: "5:30 PM",
      description:
        "Conditions look comfortable for a short outdoor activity.",
    },
  },

  travel: {
  eyebrow: "Travel intelligence",
  title: "Plan the trip around the conditions.",
  description:
    "Build smarter journeys with route awareness, weather conditions and activity suitability working together.",

  planner: {
    from: "Current location",
    to: "Your destination",
    date: "Today",
    duration: "28 min",
    distance: "16.2 km",
    condition: "Good conditions",
  },

  activities: [
    {
      name: "Cycling",
      score: 71,
      level: "Good",
      bestTime: "5:30 PM",
      description: "Comfortable conditions with basic weather precautions.",
    },
    {
      name: "Running",
      score: 65,
      level: "Fair",
      bestTime: "6:00 PM",
      description: "Possible, but consider rain probability before heading out.",
    },
    {
      name: "Hiking",
      score: 63,
      level: "Fair",
      bestTime: "6:30 AM",
      description: "Conditions are workable with some weather awareness.",
    },
  ],

  readiness: [
    {
      label: "Weather",
      value: "Good",
    },
    {
      label: "Route",
      value: "Clear",
    },
    {
      label: "Offline maps",
      value: "Ready",
    },
  ],
},
utilities: {
  eyebrow: "Explore & utilities",
  title: "Everything around you. Right when you need it.",
  description:
    "Discover useful places nearby and access everyday navigation tools without jumping between different apps.",

  nearby: {
    title: "Explore nearby",
    description:
      "Restaurants, hospitals, fuel stations, shopping and more — quickly discover what matters around your location.",

    categories: [
      {
        name: "Restaurants",
        distance: "90 m",
      },
      {
        name: "Fuel",
        distance: "815 m",
      },
      {
        name: "Hospitals",
        distance: "199 m",
      },
      {
        name: "Shopping",
        distance: "283 m",
      },
    ],
  },

  parking: {
    title: "Never lose your parking spot.",
    description:
      "Pin where you parked and return to it when you’re ready.",
  },

  speedometer: {
    title: "Your ride dashboard.",
    description:
      "Track live speed, distance, ride time, direction and useful trip information while you move.",
  },

  compass: {
    title: "Stay oriented in every mode.",
    description:
      "Use the digital compass and its available viewing modes whenever direction matters.",
  },

  translator: {
    title: "Translate while you travel.",
    description:
      "Switch languages and translate useful text while you’re on the move.",
  },

  marquee: [
    "Restaurants",
    "Cafes",
    "Fuel",
    "Hospitals",
    "Shopping",
    "Parking",
    "Compass",
    "Translator",
    "Speedometer",
    "My Location",
  ],
},
download: {
  eyebrow: "Ready when you are",
  title: "Take smarter navigation everywhere.",
  description:
    "Navigation, offline maps, live weather, nearby discovery and travel intelligence — together in one app.",

  primaryCta: "Get it on Google Play",

  benefits: [
    "Voice navigation",
    "Offline maps",
    "Live weather",
    "Smart travel tools",
  ],
},

faq: {
  eyebrow: "FAQ",
  title: "A few things you may want to know.",

  items: [
    {
      question: "What can I use GPS Maps for?",
      answer:
        "GPS Maps combines navigation, nearby place discovery, weather information, offline map access and useful travel tools in one experience.",
    },
    {
      question: "Can I use maps without an internet connection?",
      answer:
        "Supported map regions can be downloaded in advance so important map information remains available when connectivity is limited.",
    },
    {
      question: "Does the app include voice navigation?",
      answer:
        "Yes. Voice-assisted navigation helps you search for destinations and follow routes while travelling.",
    },
    {
      question: "Does the app provide weather information?",
      answer:
        "Yes. The app includes current conditions, forecasts, weather alerts, radar information and additional travel-focused weather insights.",
    },
    {
      question: "Can I discover places near my location?",
      answer:
        "Yes. You can explore useful nearby categories such as restaurants, hospitals, fuel stations, shopping, cafes and more.",
    },
    {
      question: "Where can I download the app?",
      answer:
        "The app is available through Google Play. Use any Get the App button on this website to open the official listing.",
    },
  ],
},

footer: {
  description:
    "Navigation, maps, weather and smart travel tools designed to help you move with confidence.",

  links: [
    {
      label: "Features",
      href: "#capabilities",
    },
    {
      label: "Weather & AQI",
      href: "#weather",
    },
    {
      label: "Travel Planner",
      href: "#travel",
    },
    {
      label: "Location & Safety",
      href: "#safety",
    },
    {
      label: "Map Tools",
      href: "#tools",
    },
    {
      label: "FAQ",
      href: "#faq",
    },
  ],
},
} as const;