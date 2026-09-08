import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/rooms", label: "Rooms" },
  { to: "/about", label: "About" },
  { to: "/facilities", label: "Facilities" },
  { to: "/gallery", label: "Gallery" },
  { to: "/dining", label: "Dining" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const linkClass = ({ isActive }) =>
    [
      "text-espresso transition-opacity hover:opacity-100",
      isActive ? "opacity-100" : "opacity-70",
    ].join(" ");

  return (
    <>
      <header
        className={[
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          solid
            ? "bg-white/95 backdrop-blur-sm shadow-[0_1px_0_rgba(43,36,32,0.1)] py-4"
            : "bg-gradient-to-b from-espresso/40 to-transparent py-7",
        ].join(" ")}
      >
        <div className="mx-auto flex max-w-content items-center justify-between px-6 md:px-10">
          <NavLink
            to="/"
            className={[
              "font-display text-2xl tracking-wide2 transition-colors",
              solid ? "text-espresso" : "text-white",
            ].join(" ")}
          >
            Hotel Nanditha
          </NavLink>

          <nav className="hidden gap-9 text-sm font-medium md:flex">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  [
                    "transition-opacity hover:opacity-100",
                    isActive ? "opacity-100" : "opacity-80",
                    solid ? "text-espresso" : "text-white",
                  ].join(" ")
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <NavLink
              to="/booking"
              className={[
                "hidden rounded border px-6 py-3 text-sm font-medium transition-colors md:inline-flex",
                solid
                  ? "border-espresso text-espresso hover:bg-espresso hover:text-ivory"
                  : "border-white/60 text-white hover:bg-white hover:text-espresso",
              ].join(" ")}
            >
              Reserve
            </NavLink>

            <button
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
              className="p-1 md:hidden"
            >
              <Menu className={solid ? "text-espresso" : "text-white"} size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={[
          "fixed inset-0 z-[60] flex flex-col items-start justify-center gap-7 bg-espresso p-10 transition-opacity",
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        ].join(" ")}
      >
        <button
          aria-label="Close menu"
          onClick={() => setMobileOpen(false)}
          className="absolute right-7 top-7 text-white"
        >
          <X size={30} />
        </button>

        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            onClick={() => setMobileOpen(false)}
            className="font-display text-4xl font-normal text-white"
          >
            {link.label}
          </NavLink>
        ))}
        <NavLink
          to="/booking"
          onClick={() => setMobileOpen(false)}
          className="font-display text-4xl font-normal text-biscuit-light"
        >
          Reserve
        </NavLink>
      </div>
    </>
  );
}