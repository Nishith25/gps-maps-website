import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || "gps_maps_website";

if (!uri) {
  throw new Error("MONGODB_URI is missing");
}

const client = new MongoClient(uri);

try {
  await client.connect();

  const db = client.db(dbName);

  const result = await db
    .collection("site_content")
    .updateOne(
      { key: "homepage" },
      {
        $set: {
          brand: {
            name: "GPS, Maps, Driving Directions",
            shortName: "GPS Maps",
            eyebrow:
              "Maps • Navigation • Weather • Travel",
            navSubtitle:
              "Navigation & Travel"
          },

          navigation: {
            featuresLabel: "Features",
            weatherLabel: "Weather",
            travelLabel: "Travel",
            faqLabel: "FAQ",
            getAppLabel: "Get the app",
            googlePlayLabel:
              "Get it on Google Play"
          },

          stats: [
            {
              value: "10Cr+",
              label: "Downloads"
            },
            {
              value: "4.1★",
              label: "Google Play"
            },
            {
              value: "All-in-one",
              label: "Travel Toolkit"
            }
          ],

          immersive: {
            eyebrow: "One intelligent map",
            title: "Your world. Connected.",
            description:
              "Move through cities, discover nearby places, prepare for changing weather and stay ready even when connectivity disappears.",
            highlights: [
              "Voice-guided routes",
              "Live weather awareness",
              "Offline-ready maps"
            ]
          },

          weather: {
            eyebrow: "Weather intelligence",
            title:
              "Know the conditions before they change.",
            description:
              "Live forecasts, rain awareness, air quality and useful travel insights help you prepare before every journey.",
            location: "Madhapur",
            temperature: "30°",
            condition: "Light rain",
            feelsLike: "Feels like 34°",

            details: [
              {
                label: "Humidity",
                value: "58%"
              },
              {
                label: "Wind",
                value: "13 km/h"
              },
              {
                label: "Visibility",
                value: "10 km"
              },
              {
                label: "Pressure",
                value: "1008 hPa"
              }
            ],

            forecast: [
              {
                time: "Now",
                temperature: "30°",
                rain: "56%"
              },
              {
                time: "8 PM",
                temperature: "29°",
                rain: "74%"
              },
              {
                time: "11 PM",
                temperature: "27°",
                rain: "48%"
              },
              {
                time: "2 AM",
                temperature: "26°",
                rain: "32%"
              }
            ],

            alert: {
              title:
                "Rain likely in the next few hours",
              description:
                "Rain probability may reach 74% around your current area.",
              confidence: "74% confidence"
            },

            aqi: {
              score: "25",
              label: "Good",
              description:
                "Air quality is healthy for outdoor plans."
            },

            insight: {
              title: "Best time to walk",
              time: "5:30 PM",
              description:
                "Conditions look comfortable for a short outdoor activity."
            }
          },

          travel: {
            eyebrow: "Travel intelligence",
            title: "Plan beyond the route.",
            description:
              "Build smarter journeys with route awareness, weather conditions and activity recommendations working together.",

            planner: {
              from: "Current location",
              to: "Your destination",
              date: "Today",
              duration: "28 min",
              distance: "16.2 km",
              condition: "Good conditions"
            },

            activities: [
              {
                name: "Cycling",
                score: 71,
                level: "Good",
                bestTime: "5:30 PM",
                description:
                  "Comfortable conditions with basic weather precautions."
              },
              {
                name: "Running",
                score: 65,
                level: "Fair",
                bestTime: "6:00 PM",
                description:
                  "Possible, but consider rain probability before heading out."
              },
              {
                name: "Hiking",
                score: 63,
                level: "Fair",
                bestTime: "6:30 AM",
                description:
                  "Conditions are workable with some weather awareness."
              }
            ],

            readiness: [
              {
                label: "Weather",
                value: "Good"
              },
              {
                label: "Route",
                value: "Clear"
              },
              {
                label: "Offline maps",
                value: "Ready"
              }
            ]
          },

          utilities: {
            eyebrow: "Explore & utilities",
            title:
              "Everything around you. Right when you need it.",
            description:
              "Discover useful places nearby and access everyday navigation tools without jumping between different apps.",

            nearby: {
              title: "Explore nearby",
              description:
                "Restaurants, hospitals, fuel stations, shopping and more — quickly discover what matters around your location.",
              categories: [
                {
                  name: "Restaurants",
                  distance: "90 m"
                },
                {
                  name: "Fuel",
                  distance: "815 m"
                },
                {
                  name: "Hospitals",
                  distance: "199 m"
                },
                {
                  name: "Shopping",
                  distance: "283 m"
                }
              ]
            },

            parking: {
              title:
                "Never lose your parking spot.",
              description:
                "Pin where you parked and return to it when you’re ready."
            },

            speedometer: {
              title: "Know your ride.",
              description:
                "Track live speed and essential ride information while you move."
            },

            compass: {
              title: "Stay oriented.",
              description:
                "A quick compass when direction matters."
            },

            translator: {
              title:
                "Travel without the language barrier.",
              description:
                "Translate text and useful phrases while you’re on the move."
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
              "My Location"
            ]
          },

          download: {
            eyebrow: "Ready when you are",
            title:
              "Take smarter navigation everywhere.",
            description:
              "Navigation, offline maps, live weather, nearby discovery and travel intelligence — together in one app.",
            primaryCta:
              "Get it on Google Play",

            benefits: [
              "Voice navigation",
              "Offline maps",
              "Live weather",
              "Smart travel tools"
            ]
          },

          faqSection: {
            eyebrow: "FAQ",
            title:
              "A few things you may want to know.",
            description:
              "Everything you need to know before getting started."
          },

          footer: {
            description:
              "Navigation, maps, weather and smart travel tools designed to help you move with confidence.",

            links: [
              {
                label: "Features",
                href: "#capabilities"
              },
              {
                label: "Weather",
                href: "#weather"
              },
              {
                label: "Travel",
                href: "#travel"
              },
              {
                label: "FAQ",
                href: "#faq"
              }
            ]
          },

          seo: {
            title:
              "GPS, Maps, Driving Directions",
            description:
              "Voice navigation, offline maps, live weather, nearby places and intelligent travel tools.",
            keywords: [
              "GPS navigation",
              "maps",
              "voice navigation",
              "offline maps",
              "weather",
              "travel planner",
              "nearby places"
            ]
          }
        }
      }
    );

  console.log("✅ Homepage content updated");
  console.log(
    "Matched documents:",
    result.matchedCount
  );
  console.log(
    "Modified documents:",
    result.modifiedCount
  );
} catch (error) {
  console.error(
    "❌ Homepage content update failed"
  );
  console.error(error);
  process.exitCode = 1;
} finally {
  await client.close();
}