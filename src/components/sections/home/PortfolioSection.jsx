import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const portfolioItems = [
  { tag: "Experience Centres", title: "Bosch Experience Centre" },
  { tag: "Brand Activations", title: "Samsung Galaxy Activation" },
  { tag: "Immersive Exhibitions", title: "GITEX Technology Week" },
  { tag: "Interactive Museums", title: "Science City Museum, Dubai" },
];

export default function PortfolioSection() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((i) => (i - 1 + portfolioItems.length) % portfolioItems.length);
  const next = () => setCurrent((i) => (i + 1) % portfolioItems.length);
  const item = portfolioItems[current];

  return (
    <section className="bg-dark-secondary py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <p className="text-cyan text-xs font-bold tracking-[0.2em] uppercase mb-3">PORTFOLIO</p>
          <h2 className="font-black text-4xl md:text-5xl text-white">We've Cooked Up Something Exceptional</h2>
        </div>

        {/* Card */}
        <div key={current} className="relative bg-dark-card border border-subtle rounded-2xl min-h-[280px] p-12 flex flex-col justify-end overflow-hidden animate-fade-in opacity-0 [animation-fill-mode:forwards]">
          <div className="absolute left-0 top-8 bottom-8 w-1 bg-cyan rounded-r-sm" />
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan/10 text-cyan text-xs font-semibold mb-4 w-fit">
            {item.tag}
          </span>
          <h3 className="font-black text-3xl md:text-4xl text-white">{item.title}</h3>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-6">
          <div className="flex gap-3">
            <button onClick={prev} className="w-11 h-11 rounded-full border border-white/20 hover:border-cyan hover:text-cyan text-white flex items-center justify-center bg-transparent cursor-pointer transition-all">
              <ChevronLeft size={18} />
            </button>
            <button onClick={next} className="w-11 h-11 rounded-full border border-white/20 hover:border-cyan hover:text-cyan text-white flex items-center justify-center bg-transparent cursor-pointer transition-all">
              <ChevronRight size={18} />
            </button>
          </div>
          <div className="flex items-center gap-2 text-slate-text text-sm">
            <span className="w-9 h-1 bg-cyan rounded-full inline-block" />
            {current + 1}/{portfolioItems.length}
          </div>
        </div>

        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center gap-3 px-10 py-4 rounded hover:scale-110  border border-white/20 hover:border-cyan text-white font-bold transition-all no-underline">
            Explore all Projects <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
