import { Link } from "react-router-dom";

const VIEW_LABELS = {
  lake: "Lake view",
  garden: "Garden view",
  hill: "Hill view",
};

export default function RoomCard({ room }) {
  const { name, view, price, capacity, blurb, amenities } = room;

  return (
    <div className="flex flex-col border border-espresso/10 p-7">
      <div className="mb-6 aspect-[6/5] bg-biscuit-light">
        <svg viewBox="0 0 300 250" className="h-full w-full">
          <rect width="300" height="250" fill="#E4D3B3" />
          <rect x="40" y="60" width="220" height="150" fill="#FBF9F5" opacity="0.55" />
        </svg>
      </div>

      <span className="text-xs text-espresso-soft">{VIEW_LABELS[view]}</span>
      <h3 className="mt-2 text-2xl font-normal">{name}</h3>
      <p className="mt-3 text-[15px] text-espresso-soft">{blurb}</p>

      <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1.5 text-[13px] text-espresso-soft">
        {amenities.map((item) => (
          <li key={item} className="flex items-center gap-1.5">
            <span className="h-1 w-1 shrink-0 rounded-full bg-biscuit" />
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <div className="mt-6 flex items-baseline justify-between border-t border-espresso/10 pt-5">
          <span className="font-display text-xl">{price}</span>
          <span className="text-xs text-espresso-soft">per night · {capacity}</span>
        </div>
        <Link
          to="/booking"
          className="mt-5 block rounded border border-espresso py-3 text-center text-sm font-medium transition-colors hover:bg-espresso hover:text-ivory"
        >
          Reserve this room
        </Link>
      </div>
    </div>
  );
}
