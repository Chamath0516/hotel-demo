import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Waves,
  Sparkles,
  Dumbbell,
  UtensilsCrossed,
  Music,
  Compass,
  Wifi,
  Puzzle,
} from "lucide-react";
import FacilityCard from "../components/FacilityCard";

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

const WELLNESS = [
  {
    icon: Waves,
    name: "Infinity Pool",
    description:
      "A 25-metre infinity pool set at the edge of the lake terrace, so the water seems to run straight into Kandy Lake below.",
    detail: "Open 6:00 am – 9:00 pm",
  },
  {
    icon: Sparkles,
    name: "Ayurveda Spa Suite",
    description:
      "Traditional Ayurvedic treatments using oils blended on site, in three private rooms overlooking the courtyard garden.",
    detail: "By appointment, 8:00 am – 8:00 pm",
  },
  {
    icon: Dumbbell,
    name: "Fitness Studio",
    description:
      "A compact studio with free weights, cardio equipment, and a mat area for morning yoga before the day heats up.",
    detail: "Open 24 hours",
  },
];

const DINING_CULTURE = [
  {
    icon: UtensilsCrossed,
    name: "Kandyan Fine Dining",
    description:
      "Our restaurant serves Kandyan home cooking refined for a five-star table, built around recipes carried from the original family kitchen.",
    detail: "Breakfast 6:30–10:30 am · Dinner 6:30–10:00 pm",
  },
  {
    icon: Music,
    name: "Cultural Dance Performances",
    description:
      "A troupe of local dancers performs traditional Kandyan dance by the pool terrace most evenings — the same repertoire staged each year at the Esala Perahera.",
    detail: "Nightly at 7:00 pm, weather permitting",
  },
];

const EXPLORE = [
  {
    icon: Compass,
    name: "Heritage Tours",
    description:
      "Guided walks to the Temple of the Sacred Tooth Relic and the Royal Botanical Gardens, led by staff who grew up on this stretch of the lake.",
    detail: "Depart daily at 9:00 am, or by request",
  },
  {
    icon: Wifi,
    name: "Business Lounge & WiFi",
    description:
      "A quiet lounge with high-speed WiFi throughout the property, seating for small meetings, and a printer for guests travelling on business.",
    detail: "Open 24 hours",
  },
  {
    icon: Puzzle,
    name: "Kids' Corner",
    description:
      "A supervised play corner with games and craft activities, so parents can take a slower morning by the pool.",
    detail: "Open 9:00 am – 5:00 pm",
  },
];

export default function Facilities() {
  const [introRef, introIn] = useInView();
  const [wellnessRef, wellnessIn] = useInView();
  const [diningRef, diningIn] = useInView();
  const [exploreRef, exploreIn] = useInView();

  return (
    <div>
      {/* ---------- Intro ---------- */}
      <section className="bg-ivory px-6 pb-20 pt-40">
        <div
          ref={introRef}
          className={`reveal mx-auto max-w-xl text-center ${introIn ? "in" : ""}`}
        >
          <p className="text-sm font-medium text-biscuit-deep">Facilities</p>
          <h1 className="mt-4 text-[clamp(32px,4.4vw,52px)]">
            Arranged the way a resident would use them
          </h1>
          <p className="mt-5 text-espresso-soft">
            From the pool at sunrise to the dance performances after dinner —
            here's what's included in every stay, and when to find it.
          </p>
        </div>
      </section>

      {/* ---------- Wellness & Leisure ---------- */}
      <section className="bg-white px-6 py-24">
        <div
          ref={wellnessRef}
          className={`reveal mx-auto max-w-content ${wellnessIn ? "in" : ""}`}
        >
          <h2 className="max-w-[18ch] text-[clamp(26px,3vw,34px)]">
            Wellness & leisure
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {WELLNESS.map((f) => (
              <FacilityCard key={f.name} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Dining & Culture ---------- */}
      <section className="bg-espresso px-6 py-24">
        <div
          ref={diningRef}
          className={`reveal mx-auto max-w-content ${diningIn ? "in" : ""}`}
        >
          <h2 className="max-w-[18ch] text-[clamp(26px,3vw,34px)] text-white">
            Dining & culture
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {DINING_CULTURE.map((f) => (
              <FacilityCard key={f.name} {...f} dark />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Explore & Convenience ---------- */}
      <section className="bg-white px-6 py-24">
        <div
          ref={exploreRef}
          className={`reveal mx-auto max-w-content ${exploreIn ? "in" : ""}`}
        >
          <h2 className="max-w-[18ch] text-[clamp(26px,3vw,34px)]">
            Explore & convenience
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {EXPLORE.map((f) => (
              <FacilityCard key={f.name} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA band ---------- */}
      <section className="bg-ivory px-6 py-24 text-center">
        <h2>See it for yourself</h2>
        <p className="mx-auto mt-4 max-w-[42ch] text-espresso-soft">
          Every facility here is included in your stay — no day passes, no
          add-on fees.
        </p>
        <Link
          to="/booking"
          className="mt-8 inline-block rounded bg-biscuit px-9 py-3.5 text-sm font-medium text-espresso transition-colors hover:bg-biscuit-light"
        >
          Reserve your stay
        </Link>
      </section>
    </div>
  );
}
