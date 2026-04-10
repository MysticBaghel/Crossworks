import bg02 from "../../../Public/bg02.png";

const regions = [
  { region: "Americas", locations: [{ city: "Delaware", country: "United States" }] },
  { region: "Middle East", locations: [{ city: "Qatar", country: "Qatar" }, { city: "Dubai", country: "UAE" }, { city: "Oman", country: "Oman" }] },
  { region: "India", locations: [{ city: "Puttur", country: "Dakshina Kannada" }, { city: "Mysore", country: "Karnataka" }, { city: "Bangalore", country: "Karnataka" }] },
];

export default function GlobalPresenceSection() {
  return (
    <section className="bg-dark-primary py-24 px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-subtle text-cyan text-xs font-bold tracking-[0.18em] uppercase mb-5">
            🌐 Worldwide Operations
          </span>
          <h2 className="font-black text-4xl md:text-5xl text-white mb-4">Our Global Presence</h2>
          <p className="text-slate-text max-w-lg mx-auto leading-relaxed">
            We are proud to have a growing international footprint, with offices in the United States, the Middle East, and India.
          </p>
        </div>

        {/* Map + overlapping cards */}
        <div className="relative">
          {/* Map image */}
          <img
            src={bg02}
            alt="World Map"
            className="w-full h-[480px] object-cover object-center opacity-30 rounded-2xl"
          />

          {/* Fade bottom of map into background */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-primary to-transparent rounded-b-2xl" />

          {/* Cards overlapping the bottom of the map */}
          <div className="absolute bottom-0 left-0 right-0 px-4 translate-y-1/3 grid grid-cols-1 md:grid-cols-3 gap-6">
            {regions.map((r) => (
              <div key={r.region} className="bg-dark-card border border-card hover:border-cyan rounded-2xl p-7 transition-colors duration-200">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-lg bg-cyan/10 flex items-center justify-center text-sm">📍</div>
                  <h3 className="font-bold text-white text-base">{r.region}</h3>
                </div>
                {r.locations.map((loc) => (
                  <div key={loc.city} className="flex items-center gap-2 mb-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan flex-shrink-0" />
                    <span className="text-white text-sm font-medium">{loc.city}</span>
                    <span className="text-slate-muted text-sm">— {loc.country}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Spacer to push content below out from under the overlapping cards */}
        <div className="h-52" />

      </div>
    </section>
  );
}