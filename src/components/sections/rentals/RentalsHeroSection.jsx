import { ArrowRight, Search } from "lucide-react";
import { useState } from "react";


export default function RentalsHeroSection({ onSearch, onFilter, activeFilter }) {
  const [query, setQuery] = useState("");

  const categories = ["All", "Displays", "AR & VR", "Interactive", "Hologram", "LED"];

  const handleSearch = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-dark-primary">
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-primary/60 via-transparent to-dark-primary/90" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl w-full">

        {/* Badge */}
        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-subtle text-blue text-xs font-bold tracking-[0.18em] uppercase mb-8 animate-fade-in opacity-0 [animation-fill-mode:forwards]">
          ✦ READY TO DEPLOY
        </span>

        {/* Heading — clamp keeps it on one line across all viewports */}
        <h1
          className="heading-hero font-black text-white leading-tight mb-6 animate-fade-up opacity-0 [animation-fill-mode:forwards] animation-delay-200"
        >
          Technology <span className="text-blue text-glow-blue">Rentals</span>
        </h1>

        {/* Subtitle */}
        <p className="text-slate-text text-lg leading-relaxed max-w-2xl mx-auto mb-10 animate-fade-up opacity-0 [animation-fill-mode:forwards] animation-delay-350">
          Ready-made, fast-moving rental solutions for trade shows, weddings,
          corporate events, brand activations, and every occasion in between.
        </p>

        {/* CTA */}
        <div className="animate-fade-up opacity-0 [animation-fill-mode:forwards] animation-delay-500 mb-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-blue text-dark-primary font-bold text-base transition-all duration-200 hover:bg-blue-light hover:shadow-[0_0_30px_rgba(0,188,212,0.5)] hover:-translate-y-0.5 no-underline shadow-[0_0_20px_rgba(0,188,212,0.3)]"
          >
            Request a Quote <ArrowRight size={18} />
          </a>
        </div>

        {/* Search + Filter */}
        <div className="animate-fade-up opacity-0 [animation-fill-mode:forwards] animation-delay-500 max-w-2xl mx-auto">
          {/* Search Bar */}
          <div className="relative mb-5">
            <Search size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-muted" />
            <input
              type="text"
              placeholder="Search rentals..."
              value={query}
              onChange={handleSearch}
              className="w-full bg-dark-card/80 backdrop-blur-md border border-subtle text-white placeholder:text-slate-muted rounded-full pl-12 pr-6 py-4 text-sm outline-none focus:border-cyan/40 transition-colors"
            />
          </div>

          {/* Filter Pills — compact, subtle, matches reference */}
          <div className="flex flex-wrap justify-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => onFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-widest uppercase transition-all duration-200 cursor-pointer ${
                  activeFilter === cat
                    ? "bg-dark-card text-white ring-1 ring-white/20"
                    : "bg-transparent text-slate-muted hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in opacity-0 [animation-fill-mode:forwards] animation-delay-500">
        <div className="w-7 h-11 rounded-full border-2 border-white/20 flex justify-center pt-2">
          <div className="w-1 h-2 bg-cyan rounded-full animate-scroll-bounce" />
        </div>
      </div>
    </section>
  );
}
