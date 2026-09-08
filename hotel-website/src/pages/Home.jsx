import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/images/hero-palace.jpg";
import deluxeLakeViewImage from "../assets/images/room-deluxe-lake-view.jpeg";
import royalSuiteImage from "../assets/images/room-royal-suite.jpeg";
import gardenPavilionImage from "../assets/images/room-garden-pavilion.jpeg";
import hotelIntroductionImage from "../assets/images/hotel-introduction.jpeg";
import {
  Waves,
  Sparkles,
  UtensilsCrossed,
  Music,
  Compass,
  Wifi,
  MapPin,
} from "lucide-react";

// Small scroll-reveal hook, used once per section rather than on every card
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
    image: deluxeLakeViewImage,
    price: "$320",
    blurb:
      "Floor-to-ceiling windows over Kandy Lake, with the hills rising beyond it at dusk.",
  },
  {
    name: "The Royal Suite",
    image: royalSuiteImage,
    price: "$520",
    blurb:
      "A private sitting room finished in teak and brass, styled after the residences of Kandyan nobility.",
  },
  {
    name: "Garden Pavilion",
    image: gardenPavilionImage,
    price: "$280",
    blurb:
      "A ground-floor room opening directly onto the courtyard gardens and reflecting pool.",
  },
];

const FACILITIES = [
  { icon: Waves, label: "Infinity pool over the lake" },
  { icon: Sparkles, label: "Ayurveda spa suite" },
  { icon: UtensilsCrossed, label: "Kandyan fine dining restaurant" },
  { icon: Music, label: "Nightly cultural dance performances" },
  { icon: Compass, label: "Curated heritage tours" },
  { icon: Wifi, label: "Business lounge & WiFi throughout" },
];

const REVIEWS = [
  {
    quote:
      "The kind of quiet luxury that doesn't need to announce itself. We watched the Perahera route from our balcony and never wanted to leave.",
    name: "E. & M. Fontaine",
    origin: "Lyon, France — demo review",
  },
  {
    quote:
      "Our children still talk about the dance performance by the pool. Staff arranged a temple visit for us within an hour of asking.",
    name: "The Herrera family",
    origin: "Manila, Philippines — demo review",
  },
];

export default function Home() {
  const [introRef, introIn] = useInView();
  const [roomsRef, roomsIn] = useInView();
  const [facilitiesRef, facilitiesIn] = useInView();
  const [galleryRef, galleryIn] = useInView();
  const [reviewsRef, reviewsIn] = useInView();
  const [locationRef, locationIn] = useInView();

  return (
    <div>
      {/* ---------- Hero ---------- */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-espresso px-6 pb-20 pt-40 text-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
          role="img"
          aria-label="Hotel Nanditha palace above Kandy Lake"
        />
        <div className="pointer-events-none absolute inset-0 bg-espresso/60" />
        <p className="relative z-10 font-script text-2xl text-biscuit-light">
          Kandy, Sri Lanka
        </p>
        <h1 className="relative z-10 mt-5 max-w-3xl text-[clamp(38px,6vw,68px)] !text-biscuit-light">
          A palace of quiet grace above Kandy Lake
        </h1>
        <p className="relative z-10 mx-auto mt-6 max-w-[46ch] text-white/75">
          Hotel Nanditha is a five-star retreat built in the proportions of
          the last royal capital of Sri Lanka — carved thresholds, teak and
          brass, and a stillness that outlasts the view.
        </p>
        <div className="relative z-10 mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/booking"
            className="rounded bg-biscuit px-8 py-3.5 text-sm font-medium text-espresso transition-colors hover:bg-biscuit-light"
          >
            Reserve your stay
          </Link>
          <Link
            to="/rooms"
            className="rounded border border-white/50 px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white hover:text-espresso"
          >
            Explore rooms
          </Link>
        </div>

      </section>

      {/* ---------- Introduction ---------- */}
      <section className="bg-ivory px-6 py-32">
        <div
          ref={introRef}
          className={`reveal mx-auto grid max-w-content items-center gap-16 md:grid-cols-2 ${
            introIn ? "in" : ""
          }`}
        >
          <div className="aspect-[4/5] overflow-hidden rounded bg-biscuit-light">
            <img
              src={hotelIntroductionImage}
              alt="Hotel Nanditha architecture inspired by Kandy's royal heritage"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h2 className="max-w-[14ch] text-[clamp(28px,3.4vw,40px)]">
              Built in the grammar of a royal capital
            </h2>
            <p className="mt-6 max-w-[46ch] text-espresso-soft">
              Kandy was the last kingdom to fall to colonial rule, and it kept
              its architecture stubbornly its own — pitched tiered roofs,
              carved moonstone thresholds, courtyards open to the hills.
              Hotel Nanditha was designed by Kandyan craftsmen using those
              same forms, scaled for a five-star stay rather than a palace.
            </p>
            <p className="mt-4 max-w-[46ch] text-espresso-soft">
              Every guest room opens onto Kandy Lake or the surrounding
              hills. Every common space is built around a threshold, a
              courtyard, or a view — never a corridor.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-block border-b border-espresso pb-1 text-sm font-medium"
            >
              Read our story
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- Rooms preview ---------- */}
      <section className="bg-white px-6 py-32">
        <div className="mx-auto max-w-content">
          <div
            ref={roomsRef}
            className={`reveal mx-auto max-w-xl text-center ${
              roomsIn ? "in" : ""
            }`}
          >
            <h2 className="text-[clamp(28px,3.4vw,40px)]">
              Rooms & suites
            </h2>
            <p className="mt-4 text-espresso-soft">
              Eleven room types, from garden pavilions to the Royal Suite.
              Every one is built around a view of the lake or the hills.
            </p>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {ROOMS.map((room) => (
              <div key={room.name} className="border border-espresso/10 p-7">
                <div className="mb-6 aspect-[6/5] bg-biscuit-light">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-normal">{room.name}</h3>
                <p className="mt-3 text-[15px] text-espresso-soft">
                  {room.blurb}
                </p>
                <div className="mt-6 flex items-baseline justify-between border-t border-espresso/10 pt-5">
                  <span className="font-display text-xl">{room.price}</span>
                  <span className="text-xs text-espresso-soft">per night</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/rooms"
              className="inline-block rounded border border-espresso px-8 py-3.5 text-sm font-medium transition-colors hover:bg-espresso hover:text-ivory"
            >
              View all rooms
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- Facilities ---------- */}
      <section className="bg-espresso px-6 py-32 text-white">
        <div className="mx-auto max-w-content">
          <div
            ref={facilitiesRef}
            className={`reveal mx-auto max-w-xl text-center ${
              facilitiesIn ? "in" : ""
            }`}
          >
            <h2 className="text-[clamp(28px,3.4vw,40px)] text-white">
              Facilities
            </h2>
            <p className="mt-4 text-white/65">
              What's included in every stay, arranged the way a resident
              would use it rather than a brochure would list it.
            </p>
          </div>

          <div className="mt-16 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {FACILITIES.map(({ icon: Icon, label }) => (
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

      {/* ---------- Gallery preview ---------- */}
      <section className="bg-ivory px-6 py-32">
        <div className="mx-auto max-w-content">
          <div
            ref={galleryRef}
            className={`reveal flex flex-wrap items-end justify-between gap-6 ${
              galleryIn ? "in" : ""
            }`}
          >
            <h2 className="text-[clamp(28px,3.4vw,40px)]">Gallery</h2>
            <Link
              to="/gallery"
              className="border-b border-espresso pb-1 text-sm font-medium"
            >
              View full gallery
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { fill: "#C9A671", cap: "The lake terrace" },
              { fill: "#E4D3B3", cap: "Royal Suite interior" },
              { fill: "#8B6B44", cap: "Courtyard at dusk" },
              { fill: "#D9C8A5", cap: "Evening dance performance" },
            ].map((item) => (
              <div key={item.cap} className="group relative aspect-[3/4] overflow-hidden">
                <svg viewBox="0 0 200 260" className="h-full w-full">
                  <rect width="200" height="260" fill={item.fill} />
                </svg>
                <span className="absolute bottom-3 left-3 font-display text-sm italic text-white drop-shadow">
                  {item.cap}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Reviews ---------- */}
      <section className="bg-biscuit-light px-6 py-32">
        <div
          ref={reviewsRef}
          className={`reveal mx-auto max-w-content ${reviewsIn ? "in" : ""}`}
        >
          <h2 className="text-center text-[clamp(28px,3.4vw,40px)]">
            From our guests
          </h2>
          <div className="mt-16 grid gap-10 md:grid-cols-2">
            {REVIEWS.map((r) => (
              <div key={r.name} className="bg-white p-9">
                <p className="font-display text-xl italic leading-relaxed text-espresso">
                  "{r.quote}"
                </p>
                <div className="mt-6 border-t border-espresso/10 pt-4 text-sm">
                  <div className="font-medium">{r.name}</div>
                  <div className="text-espresso-soft">{r.origin}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Location ---------- */}
      <section className="bg-white px-6 py-32">
        <div
          ref={locationRef}
          className={`reveal mx-auto grid max-w-content items-center gap-16 md:grid-cols-2 ${
            locationIn ? "in" : ""
          }`}
        >
          <div>
            <h2 className="max-w-[14ch] text-[clamp(28px,3.4vw,40px)]">
              A short walk from the Temple of the Sacred Tooth Relic
            </h2>
            <p className="mt-6 max-w-[46ch] text-espresso-soft">
              Hotel Nanditha sits on Sangaraja Mawatha, on the quieter side of
              Kandy Lake — close enough to reach the Temple of the Sacred
              Tooth Relic on foot, a short drive from the Royal Botanical
              Gardens at Peradeniya.
            </p>
            <div className="mt-8 flex items-start gap-3 text-sm text-espresso-soft">
              <MapPin size={18} className="mt-0.5 shrink-0 text-biscuit-deep" />
              <span>Sangaraja Mawatha, Kandy, Sri Lanka</span>
            </div>
          </div>
          <div className="flex aspect-[4/3] items-center justify-center bg-biscuit-light text-sm text-espresso-soft">
            Map placeholder — embed Google Maps here
          </div>
        </div>
      </section>

      {/* ---------- CTA band ---------- */}
      <section className="bg-espresso px-6 py-24 text-center">
        <h2 className="text-white">Your stay begins with a threshold.</h2>
        <p className="mx-auto mt-4 max-w-[42ch] text-white/70">
          Check availability for your dates and we'll hold your room while
          you decide.
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