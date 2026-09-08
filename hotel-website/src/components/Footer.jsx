import { Link } from "react-router-dom";

const EXPLORE_LINKS = [
  { to: "/about", label: "Our story" },
  { to: "/rooms", label: "Rooms & suites" },
  { to: "/facilities", label: "Facilities" },
  { to: "/booking", label: "Reserve" },
];

export default function Footer() {
  return (
    <footer className="bg-espresso pb-9 pt-20 text-white/85">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="grid grid-cols-2 gap-10 border-b border-white/15 pb-14 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <div className="font-display text-2xl tracking-wide2 text-white">
              Hotel Nanditha
            </div>
            <p className="mt-3 max-w-[34ch] text-sm text-white/60">
              A five-star Kandyan-style retreat above Kandy Lake, built in the
              proportions and craft of the last royal capital of Sri Lanka.
            </p>
          </div>

          <div>
            <h5 className="mb-4 text-[13.5px] font-medium text-white">
              Visit
            </h5>
            <p className="text-[14.5px] text-white/70">
              Hotel Nanditha
              <br />
              Sangaraja Mawatha
              <br />
              Kandy, Sri Lanka
            </p>
          </div>

          <div>
            <h5 className="mb-4 text-[13.5px] font-medium text-white">
              Contact
            </h5>
            <a
              href="mailto:stay@hotelnanditha.com"
              className="mb-2 block text-[14.5px] text-white/70 hover:text-biscuit-light"
            >
              stay@hotelnanditha.com
            </a>
            <a
              href="tel:+94812345678"
              className="block text-[14.5px] text-white/70 hover:text-biscuit-light"
            >
              +94 81 234 5678
            </a>
          </div>

          <div>
            <h5 className="mb-4 text-[13.5px] font-medium text-white">
              Explore
            </h5>
            {EXPLORE_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="mb-2 block text-[14.5px] text-white/70 hover:text-biscuit-light"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 pt-7 text-[13px] text-white/50 sm:flex-row">
          <span>&copy; {new Date().getFullYear()} Hotel Nanditha. A demo built for illustration.</span>
          <span>Site built by your web studio</span>
        </div>
      </div>
    </footer>
  );
}