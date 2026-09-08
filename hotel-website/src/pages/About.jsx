import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { HeartHandshake, Hammer, Leaf, Landmark } from "lucide-react";

// Small scroll-reveal hook, matching the one used on Home.jsx
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

const VALUES = [
  {
    icon: HeartHandshake,
    title: "Hospitality as welcome, not service",
    body: "Kandyan tradition treats a guest as someone entering a household, not a transaction. Staff are trained to remember names, habits, and the small requests nobody wrote down.",
  },
  {
    icon: Hammer,
    title: "Craft over decoration",
    body: "Every carved threshold and brass fitting was made by a named artisan, not sourced from a catalogue. We can tell you who made your headboard.",
  },
  {
    icon: Leaf,
    title: "Grown, not flown in",
    body: "Produce comes from smallholdings within an hour of Kandy. What's not in season isn't on the menu that week.",
  },
  {
    icon: Landmark,
    title: "Built to outlast a trend",
    body: "The proportions here follow Kandyan temple architecture, which has stayed legible for five centuries. We didn't want a hotel that would look dated in five years.",
  },
];

export default function About() {
  const [storyRef, storyIn] = useInView();
  const [valuesRef, valuesIn] = useInView();
  const [craftRef, craftIn] = useInView();
  const [quoteRef, quoteIn] = useInView();

  return (
    <div>
      {/* ---------- Header band ---------- */}
      <section className="bg-espresso px-6 pb-24 pt-40 text-center">
        <p className="text-sm font-medium tracking-wide2 text-biscuit-light">
          Our story
        </p>
        <h1 className="mx-auto mt-5 max-w-2xl text-[clamp(34px,5vw,54px)] text-white">
          A hotel built the way Kandy builds
        </h1>
        <p className="mx-auto mt-6 max-w-[46ch] text-white/70">
          Not inspired by Kandyan architecture — built inside its actual
          rules, by the artisans who still practice them.
        </p>
      </section>

      {/* ---------- Origin story ---------- */}
      <section className="bg-ivory px-6 py-32">
        <div
          ref={storyRef}
          className={`reveal mx-auto grid max-w-content items-center gap-16 md:grid-cols-2 ${
            storyIn ? "in" : ""
          }`}
        >
          <div>
            <h2 className="max-w-[16ch] text-[clamp(28px,3.4vw,40px)]">
              Three generations on the same hillside
            </h2>
            <p className="mt-6 max-w-[46ch] text-espresso-soft">
              The land Hotel Nanditha stands on was bought by our
              grandfather in 1962, a few years after independence, when a
              plot above Kandy Lake was still something a schoolteacher
              could afford. He built a family house here. His daughter
              turned two of its rooms into a guesthouse in the 1990s.
            </p>
            <p className="mt-4 max-w-[46ch] text-espresso-soft">
              We rebuilt it properly in 2019 — not by demolishing, but by
              bringing in the same category of craftsmen who restore the
              temples nearby, and asking them to design a hotel instead.
              Nanditha was our grandmother's name. It means "one who
              brings joy," which was also, by all accounts, her review of
              her own guesthouse.
            </p>
            <div className="mt-10 flex gap-10 border-t border-espresso/10 pt-8">
              <div>
                <div className="font-display text-3xl text-biscuit-deep">1962</div>
                <div className="mt-1 text-[13px] text-espresso-soft">Land acquired</div>
              </div>
              <div>
                <div className="font-display text-3xl text-biscuit-deep">2019</div>
                <div className="mt-1 text-[13px] text-espresso-soft">Rebuilt as a hotel</div>
              </div>
              <div>
                <div className="font-display text-3xl text-biscuit-deep">3</div>
                <div className="mt-1 text-[13px] text-espresso-soft">Generations involved</div>
              </div>
            </div>
          </div>

          <div className="aspect-[4/5] bg-biscuit-light">
            <svg viewBox="0 0 400 500" className="h-full w-full">
              <rect width="400" height="500" fill="#E4D3B3" />
              <rect x="70" y="80" width="260" height="340" fill="#FBF9F5" opacity="0.5" />
              <path d="M70,420 A130,42 0 0 1 330,420" fill="none" stroke="#8B6B44" strokeWidth="2" opacity="0.4" />
            </svg>
          </div>
        </div>
      </section>

      {/* ---------- Values ---------- */}
      <section className="bg-white px-6 py-32">
        <div className="mx-auto max-w-content">
          <div
            ref={valuesRef}
            className={`reveal mx-auto max-w-xl text-center ${
              valuesIn ? "in" : ""
            }`}
          >
            <h2 className="text-[clamp(28px,3.4vw,40px)]">What guides the house</h2>
            <p className="mt-4 text-espresso-soft">
              Four things we check ourselves against, more than we check
              against a star rating.
            </p>
          </div>

          <div className="mt-16 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {VALUES.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="flex gap-5 border-b border-espresso/10 pb-10"
              >
                <Icon size={24} className="mt-1 shrink-0 text-biscuit-deep" />
                <div>
                  <h3 className="text-xl font-normal">{title}</h3>
                  <p className="mt-2 max-w-[42ch] text-[15px] text-espresso-soft">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Craftsmanship ---------- */}
      <section className="bg-ivory px-6 py-32">
        <div
          ref={craftRef}
          className={`reveal mx-auto grid max-w-content items-center gap-16 md:grid-cols-2 ${
            craftIn ? "in" : ""
          }`}
        >
          <div className="order-2 md:order-1 aspect-[5/4] bg-biscuit-light">
            <svg viewBox="0 0 400 320" className="h-full w-full">
              <rect width="400" height="320" fill="#D9C8A5" />
              <rect x="50" y="50" width="300" height="220" fill="#FBF9F5" opacity="0.45" />
              <rect x="90" y="90" width="90" height="140" fill="#8B6B44" opacity="0.3" />
              <rect x="220" y="90" width="90" height="140" fill="#8B6B44" opacity="0.2" />
            </svg>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="max-w-[16ch] text-[clamp(28px,3.4vw,40px)]">
              Made by hand, by people we can name
            </h2>
            <p className="mt-6 max-w-[46ch] text-espresso-soft">
              The moonstone thresholds were carved by the same family
              workshop that maintains several of Kandy's temple steps. The
              brass lamps are made in Pilimatalawa, a fifteen-minute drive
              from the hotel, by a smith whose father supplied the same
              designs to the original guesthouse in the 1990s.
            </p>
            <p className="mt-4 max-w-[46ch] text-espresso-soft">
              Nothing here was chosen from a hospitality supply catalogue.
              If a guest asks who made something, there is always an
              answer.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Founder quote ---------- */}
      <section className="bg-biscuit-light px-6 py-28 text-center">
        <div ref={quoteRef} className={`reveal ${quoteIn ? "in" : ""}`}>
          <p className="mx-auto max-w-2xl font-display text-2xl italic leading-relaxed text-espresso md:text-3xl">
            "We didn't want to build a hotel that performed hospitality.
            We wanted one that simply continued what my mother was
            already doing in two spare rooms."
          </p>
          <div className="mt-6 text-sm text-espresso-soft">
            Ruwani Jayasuriya, General Manager — granddaughter of the
            original owner
          </div>
        </div>
      </section>

      {/* ---------- CTA band ---------- */}
      <section className="bg-espresso px-6 py-24 text-center">
        <h2 className="text-white">Come see it for yourself.</h2>
        <p className="mx-auto mt-4 max-w-[42ch] text-white/70">
          The best way to understand the house is to spend a night inside
          it.
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