export default function FacilityCard({ icon: Icon, name, description, detail, dark = false }) {
  return (
    <div className={`border p-7 ${dark ? "border-white/15" : "border-espresso/10"}`}>
      <Icon size={26} className={dark ? "text-biscuit-light" : "text-biscuit-deep"} />

      <h3 className={`mt-5 text-xl font-normal ${dark ? "text-white" : "text-espresso"}`}>
        {name}
      </h3>

      <p className={`mt-3 text-[15px] ${dark ? "text-white/70" : "text-espresso-soft"}`}>
        {description}
      </p>

      {detail && (
        <p
          className={`mt-4 border-t pt-4 text-[13px] ${
            dark ? "border-white/15 text-white/55" : "border-espresso/10 text-espresso-soft"
          }`}
        >
          {detail}
        </p>
      )}
    </div>
  );
}
