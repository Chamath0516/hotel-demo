import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// Small scroll-reveal hook, duplicated per page rather than shared (see Home.jsx / About.jsx)
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

const SIGNATURE_DISHES = [
  {
    name: "Lake Perch Ambul Thiyal",
    description:
      "Sour fish curry from Kandy Lake, slow-cooked with goraka and black pepper the way it's made in home kitchens up in the hills.",
    price: "$24",
  },
  {
    name: "Kandyan Lamprais",
    description:
      "A parcel of spiced rice, meat curry, and accompaniments steamed in banana leaf until the flavours settle into one another.",
    price: "$28",
  },
  {
    name: "Jackfruit & Cashew Curry",
    description:
      "A vegetarian mains built around young jackfruit and cashews from the estate gardens above the hotel.",
    price: "$20",
  },
  {
    name: "Wattalapam",
    description:
      "Coconut custard set with jaggery and cardamom, finished with a shard of toasted coconut.",
    price: "$10",
  },
  {
    name: "Kithul Treacle Panna Cotta",
    description:
      "A lighter finish to the meal — panna cotta sweetened with kithul treacle tapped from palms nearby.",
    price: "$11",
  },
  {
    name: "Tea Terrace Sundowner",
    description:
      "A rum cocktail infused with Ceylon black tea, served as the sun drops behind the hills across the lake.",
    price: "$14",
  },
];

const BREAKFAST_HIGHLIGHTS = [
  "String hoppers with coconut sambol and dhal curry",
  "Kiribath with lunu miris, prepared fresh each morning",
  "Made-to-order eggs and an à la carte Western menu",
  "Fresh fruit cut from the garden that morning",
];

const EXPERIENCES = [
  {
    name: "In-Room Dining",
    description:
      "The full menu, brought to your room or balcony, available around the clock for guests who'd rather not leave the view.",
  },
  {
    name: "Courtyard Dinner",
    description:
      "A private table set among the courtyard gardens for two, arranged with a day's notice through the front desk.",
  },
  {
    name: "Chef's Table",
    description:
      "Six seats at the kitchen pass, where our head chef talks through each course as it's plated.",
  },
];

export default function Dining() {
  const [introRef, introIn] = useInView();
  const [menuRef, menuIn] = useInView();
  const [breakfastRef, breakfastIn] = useInView();
  const [experiencesRef, experiencesIn] = useInView();

  return (
    <div>
      {/* ---------- Intro ---------- */}
      <section className="bg-ivory px-6 pb-20 pt-40">
        <div
          ref={introRef}
          className={`reveal mx-auto max-w-xl text-center ${introIn ? "in" : ""}`}
        >
          <p className="text-sm font-medium text-biscuit-deep">Dining</p>
          <h1 className="mt-4 text-[clamp(32px,4.4vw,52px)]">
            Recipes carried from the family kitchen
          </h1>
          <p className="mt-5 text-espresso-soft">
            Our restaurant serves Kandyan home cooking refined for a
            five-star table, built around the same dishes once made for
            family gathered at the original guesthouse.
          </p>
          <p className="mt-6 text-sm text-espresso-soft">
            Breakfast 6:30 – 10:30 am · Dinner 6:30 – 10:00 pm
          </p>
        </div>
      </section>

      {/* ---------- Signature dishes ---------- */}
      <section className="bg-white px-6 py-24">
        <div
          ref={menuRef}
          className={`reveal mx-auto max-w-content ${menuIn ? "in" : ""}`}
        >
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-[clamp(28px,3.4vw,40px)]">Signature dishes</h2>
            <p className="mt-4 text-espresso-soft">
              A short list from a longer menu — the dishes guests ask for by
              name after they've gone home.
            </p>
          </div>

          <div className="mt-14 grid gap-x-10 gap-y-10 md:grid-cols-2">
            {SIGNATURE_DISHES.map((dish) => (
              <div
                key={dish.name}
                className="flex items-baseline justify-between gap-6 border-b border-espresso/10 pb-6"
              >
                <div>
                  <h3 className="text-xl font-normal">{dish.name}</h3>
                  <p className="mt-2 max-w-[42ch] text-[15px] text-espresso-soft">
                    {dish.description}
                  </p>
                </div>
                <span className="shrink-0 font-display text-lg">{dish.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Breakfast ---------- */}
      <section className="bg-espresso px-6 py-32 text-white">
        <div
          ref={breakfastRef}
          className={`reveal mx-auto grid max-w-content items-center gap-16 md:grid-cols-2 ${
            breakfastIn ? "in" : ""
          }`}
        >
          <div>
            <h2 className="max-w-[14ch] text-[clamp(28px,3.4vw,40px)] text-white">
              Breakfast, the way it's always been made here
            </h2>
            <p className="mt-6 max-w-[46ch] text-white/70">
              A buffet of Sri Lankan staples sits alongside a short à la
              carte menu, served on the terrace overlooking the lake until
              mid-morning.
            </p>
            <ul className="mt-8 space-y-3">
              {BREAKFAST_HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-white/85">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-biscuit-light" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="aspect-[4/5] bg-white/10">
            <svg viewBox="0 0 400 500" className="h-full w-full">
              <rect width="400" height="500" fill="#5C5148" opacity="0.4" />
              <rect x="60" y="90" width="280" height="320" fill="#E4D3B3" opacity="0.25" />
            </svg>
          </div>
        </div>
      </section>

      {/* ---------- Dining experiences ---------- */}
      <section className="bg-ivory px-6 py-24">
        <div
          ref={experiencesRef}
          className={`reveal mx-auto max-w-content ${experiencesIn ? "in" : ""}`}
        >
          <h2 className="text-center text-[clamp(28px,3.4vw,40px)]">
            Dining experiences
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {EXPERIENCES.map((exp) => (
              <div key={exp.name} className="border border-espresso/10 bg-white p-7">
                <h3 className="text-xl font-normal">{exp.name}</h3>
                <p className="mt-3 text-[15px] text-espresso-soft">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA band ---------- */}
      <section className="bg-espresso px-6 py-24 text-center">
        <h2 className="text-white">Reserve a table</h2>
        <p className="mx-auto mt-4 max-w-[42ch] text-white/70">
          Tell us your dates and how many are joining, and we'll set the
          table with the right view.
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-block rounded bg-biscuit px-9 py-3.5 text-sm font-medium text-espresso transition-colors hover:bg-biscuit-light"
        >
          Get in touch
        </Link>
      </section>
    </div>
  );
}