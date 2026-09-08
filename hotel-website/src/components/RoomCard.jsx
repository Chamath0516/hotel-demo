import { Link } from "react-router-dom";

const VIEW_LABELS = {
  lake: "Lake view",
  garden: "Garden view",
  hill: "Hill view",
};

function RoomImage({ className }) {
  return (
    <div className={`bg-biscuit-light ${className}`}>
      <svg viewBox="0 0 300 250" className="h-full w-full">
        <rect width="300" height="250" fill="#E4D3B3" />
        <rect x="40" y="60" width="220" height="150" fill="#FBF9F5" opacity="0.55" />
      </svg>
    </div>
  );
}

export default function RoomCard({ room, layout = "grid" }) {
  const { name, view, price, capacity, blurb, amenities } = room;

  if (layout === "list") {
    return (
      <div className="flex flex-col gap-6 border-b border-espresso/10 py-8 sm:flex-row">
        <RoomImage className="aspect-[6/5] w-full shrink-0 sm:w-64" />

        <div className="flex flex-1 flex-col sm:flex-row sm:items-start sm:justify-between sm:gap-8">
          <div className="flex-1">
            <span className="text-xs text-espresso-soft">{VIEW_LABELS[view]}</span>
            <h3 className="mt-2 text-2xl font-normal">{name}</h3>
            <p className="mt-3 max-w-[52ch] text-[15px] text-espresso-soft">{blurb}</p>
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 text-[13px] text-espresso-soft">
              {amenities.map((item) => (
                <li key={item} className="flex items-center gap-1.5">
                  <span className="h-1 w-1 shrink-0 rounded-full bg-biscuit" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex shrink-0 flex-col items-start gap-4 sm:mt-0 sm:w-48 sm:items-end sm:text-right">
            <div>
              <span className="font-display text-xl">{price}</span>
              <span className="block text-xs text-espresso-soft">
                per night · {capacity}
              </span>
            </div>
            <Link
              to="/booking"
              className="w-full rounded border border-espresso py-3 text-center text-sm font-medium transition-colors hover:bg-espresso hover:text-ivory sm:w-auto sm:px-6"
            >
              Reserve
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col border border-espresso/10 p-7">
      <RoomImage className="mb-6 aspect-[6/5]" />

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
