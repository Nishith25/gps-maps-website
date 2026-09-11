import {
  CloudSun,
  Compass,
  Gauge,
  Languages,
  LocateFixed,
  MapPin,
  Navigation2,
  ParkingCircle,
  Route,
  Search,
  WifiOff,
} from "lucide-react";

const items = [
  {
    label: "Maps",
    Icon: MapPin,
  },
  {
    label: "Navigation",
    Icon: Navigation2,
  },
  {
    label: "Weather",
    Icon: CloudSun,
  },
  {
    label:
      "Offline Maps",
    Icon: WifiOff,
  },
  {
    label: "Nearby",
    Icon: Search,
  },
  {
    label: "Travel",
    Icon: Route,
  },
  {
    label: "Parking",
    Icon: ParkingCircle,
  },
  {
    label: "Compass",
    Icon: Compass,
  },
  {
    label: "Translator",
    Icon: Languages,
  },
  {
    label: "Speedometer",
    Icon: Gauge,
  },
  {
    label: "Location",
    Icon: LocateFixed,
  },
];

export default function EverythingInOne() {
  return (
    <section className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-7xl rounded-[30px] bg-[#F5F6F9] px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold text-[#6559DF]">
            Everything together
          </p>

          <h2 className="mt-4 text-4xl font-semibold leading-[1] tracking-[-0.05em] text-[#101426] sm:text-5xl">
            One app. Every part
            of the journey.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#747C8F]">
            Maps, navigation,
            weather, discovery
            and everyday
            location tools work
            together in one
            place.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {items.map(
            ({
              label,
              Icon,
            }) => (
              <div
                key={label}
                className="flex min-h-16 items-center gap-3 rounded-[16px] bg-white px-3 py-3"
              >
                <Icon className="h-4 w-4 shrink-0 text-[#6259CE]" />

                <span className="text-xs font-semibold text-[#4C5467]">
                  {label}
                </span>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}