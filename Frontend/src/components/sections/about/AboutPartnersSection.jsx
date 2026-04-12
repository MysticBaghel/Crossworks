const partners = [
  "Herbalife Nutrition", "Fastrack", "Nilkamal", "Trends", "Makino",
  "Continental", "Wipro", "Bisleri", "Bosch", "Samsung", "Zeiss", "Siemens",
];

export default function AboutPartnersSection() {
  const items = [...partners, ...partners];
  return (
    <section className="bg-dark-primary py-20 overflow-hidden border-t border-white/5">
      <div className="text-center mb-10 px-8">
        <p className="text-blue text-xs font-bold tracking-[0.2em] uppercase mb-3">
          TRUSTED PARTNERS
        </p>
        <h2 className="font-bold text-2xl md:text-3xl text-white">
          Loved by Industry Leaders
        </h2>
      </div>

      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark-primary to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark-primary to-transparent z-10 pointer-events-none" />

        <div className="flex gap-4 animate-marquee w-max">
          {items.map((name, i) => (
            <div
              key={i}
              className="flex-shrink-0 min-w-[180px] h-16 bg-dark-card border border-card rounded-xl flex items-center justify-center px-6"
            >
              <span className="text-slate-text font-semibold text-sm whitespace-nowrap">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
