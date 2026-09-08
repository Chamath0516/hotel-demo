import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Wifi, Wind, Bath, Coffee, ShieldCheck, UtensilsCrossed } from "lucide-react";
import RoomCard from "../components/RoomCard";

// Small scroll-reveal hook, duplicated per page rather than shared (see About.jsx / Home.jsx)
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            io.unobserve(el);
          }
        });
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return [ref, inView];
}

const ROOMS = [
  {
    name: "Deluxe Lake View",
    view: "lake",
    price: "$320",
    capacity: "2 guests",
    blurb:
      "Floor-to-ceiling windows over Kandy Lake, with the hills rising beyond it at dusk.",
    amenities: ["Lake-view balcony", "Soaking tub", "Air conditioning", "Minibar"],
  },
  {
    name: "Lake View Twin",
    view: "lake",
    price: "$310",
    capacity: "2 guests",
    blurb:
      "Two beds facing the water, built for friends or family who want the same view without sharing a bed.",
    amenities: ["Lake view", "Twin beds", "Reading nook", "Air conditioning"],
  },
  {
    name: "Executive Lake Suite",
    view: "lake",
    price: "$410",
    capacity: "3 guests",
    blurb:
      "A separate sitting room ahead of the bedroom, both facing the lake through the same run of glass.",
    amenities: ["Private balcony", "Sitting room", "Rain shower", "Turndown service"],
  },
  {
    name: "Moonstone Honeymoon Suite",
    view: "lake",
    price: "$480",
    capacity: "2 guests",
    blurb:
      "Named for the carved moonstone set into its threshold — a private plunge pool looks out over the water.",
    amenities: ["Private plunge pool", "Lake view", "Four-poster bed", "In-room dining"],
  },
  {
    name: "The Royal Suite",
    view: "hill",
    price: "$520",
    capacity: "2 guests",
    blurb:
      "A private sitting room finished in teak and brass, styled after the residences of Kandyan nobility.",
    amenities: ["Private sitting room", "Teak & brass furnishings", "Butler service", "Soaking tub"],
  },
  {
    name: "Hillside Retreat",
    view: "hill",
    price: "$300",
    capacity: "2 guests",
    blurb:
      "A quieter room set toward the hills, where the light comes in low over the tea terraces each morning.",
    amenities: ["Hill-view terrace", "Writing desk", "Rain shower", "Air conditioning"],
  },
  {
    name: "Hillside Suite",
    view: "hill",
    price: "$380",
    capacity: "3 guests",
    blurb:
      "A living area ahead of the bedroom, both opening onto the same hill-facing terrace.",
    amenities: ["Living area", "Hill-view terrace", "Soaking tub", "Espresso service"],
  },
  {
    name: "Garden Pavilion",
    view: "garden",
    price: "$280",
    capacity: "2 guests",
    blurb:
      "A ground-floor room opening directly onto the courtyard gardens and reflecting pool.",
    amenities: ["Private courtyard access", "Outdoor daybed", "Rain shower", "Air conditioning"],
  },
  {
    name: "Garden Pavilion Twin",
    view: "garden",
    price: "$270",
    capacity: "2 guests",
    blurb:
      "The same courtyard access as the Garden Pavilion, arranged with twin beds for guests travelling together.",
    amenities: ["Courtyard access", "Twin beds", "Outdoor daybed", "Air conditioning"],
  },
  {
    name: "Courtyard Family Room",
    view: "garden",
    price: "$360",
    capacity: "4 guests",
    blurb:
      "Two connecting rooms around a shared courtyard, built for families who want their own doors but a shared view.",
    amenities: ["Two connecting rooms", "Courtyard access", "Extra bedding", "Kids' welcome amenities"],
  },
  {
    name: "The Founder's Room",
    view: "garden",
    price: "$340",
    capacity: "2 guests",
    blurb:
      "Furnished with pieces carried over from the family's original 1962 guesthouse — the room closest to where this hotel began.",
    amenities: ["Heritage furnishings", "Courtyard view", "Reading corner", "Air conditioning"],
  },
];

const FILTERS = [
  { key: "all", label: "All rooms" },
  { key: "lake", label: "Lake view" },
  { key: "garden", label: "Garden view" },
  { key: "hill", label: "Hill view" },
];

const INCLUDED = [
  { icon: Wifi, label: "Complimentary WiFi throughout" },
  { icon: Wind, label: "Individual air conditioning" },
  { icon: Bath, label: "Rain shower or soaking tub" },
  { icon: Coffee, label: "In-room tea & coffee service" },
  { icon: ShieldCheck, label: "In-room safe" },
  { icon: UtensilsCrossed, label: "24-hour room service" },
];

export default function Rooms() {
  const [introRef, introIn] = useInView();
  const [gridRef, gridIn] = useInView();
  const [includedRef, includedIn] = useInView();

  const [activeFilter, setActiveFilter] = useState("all");
  const filteredRooms =
    activeFilter === "all" ? ROOMS : ROOMS.filter((r) => r.view === activeFilter);

  return (
    <div>
      {/* ---------- Intro ---------- */}
      <section className="bg-ivory px-6 pb-20 pt-40">
        <div
          ref={introRef}
          className={`reveal mx-auto max-w-xl text-center ${introIn ? "in" : ""}`}
        >
          <p className="text-sm font-medium text-biscuit-deep">Rooms & suites</p>
          <h1 className="mt-4 text-[clamp(32px,4.4vw,52px)]">
            Eleven rooms, three views
          </h1>
          <p className="mt-5 text-espresso-soft">
            Every room at Hotel Nanditha opens onto Kandy Lake, the courtyard
            gardens, or the hills beyond — never a corridor. Choose by the
            view you'd rather wake up to.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`rounded border px-5 py-2 text-sm font-medium transition-colors ${
                activeFilter === f.key
                  ? "border-espresso bg-espresso text-ivory"
                  : "border-espresso/20 text-espresso-soft hover:border-espresso/50"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      {/* ---------- Room grid ---------- */}
      <section className="bg-white px-6 py-24">
        <div
          ref={gridRef}
          className={`reveal mx-auto max-w-content ${gridIn ? "in" : ""}`}
        >
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {filteredRooms.map((room) => (
              <RoomCard key={room.name} room={room} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- What's included ---------- */}
      <section className="bg-espresso px-6 py-32 text-white">
        <div className="mx-auto max-w-content">
          <div
            ref={includedRef}
            className={`reveal mx-auto max-w-xl text-center ${
              includedIn ? "in" : ""
            }`}
          >
            <h2 className="text-[clamp(28px,3.4vw,40px)] text-white">
              Every room includes
            </h2>
            <p className="mt-4 text-white/65">
              The details that stay the same no matter which view you choose.
            </p>
          </div>

          <div className="mt-16 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {INCLUDED.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-4 border-b border-white/10 pb-6"
              >
                <Icon size={22} className="shrink-0 text-biscuit-light" />
                <span className="text-[15px] text-white/85">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA band ---------- */}
      <section className="bg-ivory px-6 py-24 text-center">
        <h2>Not sure which room is yours?</h2>
        <p className="mx-auto mt-4 max-w-[42ch] text-espresso-soft">
          Tell us your dates and how many are travelling, and we'll hold the
          room that fits.
        </p>
        <Link
          to="/booking"
          className="mt-8 inline-block rounded bg-biscuit px-9 py-3.5 text-sm font-medium text-espresso transition-colors hover:bg-biscuit-light"
        >
          Check availability
        </Link>
      </section>
    </div>
  );
}
