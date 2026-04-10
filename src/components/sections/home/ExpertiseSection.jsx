import { useState } from "react";
import { ArrowRight } from "lucide-react";

const items = [
  { label: "Experiential Marketing", description: "We design immersive brand experiences that forge emotional connections, drive foot traffic, and create lasting impressions through multi-sensory storytelling." },
  { label: "Interactive Museums", description: "Transforming museum spaces with cutting-edge interactive displays, AR/VR exhibits, and digital installations that educate and inspire visitors of all ages." },
  { label: "Event & Conferences", description: "End-to-end AV and experiential solutions for corporate events, product launches, and conferences — making every moment unforgettable." },
  { label: "Brand Activations", description: "We create innovative brand activations that generate buzz, drive foot traffic, and leave lasting impressions on your target audience through technology and creativity." },
  { label: "Immersive Exhibitions", description: "From trade show booths to full-scale immersive worlds, we design exhibition environments that captivate audiences and communicate your brand's story powerfully." },
  { label: "Innovation Center", description: "Future-ready innovation centers equipped with the latest interactive technologies, enabling organizations to showcase their R&D and attract top talent." },
];

export default function ExpertiseSection() {
  const [active, setActive] = useState(3);
  return (
    <section className="bg-dark-primary py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-cyan text-xs font-bold tracking-[0.2em] uppercase mb-4">✦ OUR EXPERTISE ✦</p>
          <h2 className="font-black text-4xl md:text-5xl text-white">
            Your Go-To for Brand Activation{" "}
            <span className="text-cyan text-glow-cyan">& Event Technology Solutions</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="bg-dark-card border border-subtle rounded-2xl p-6 mb-8 overflow-x-auto">
          <div className="flex justify-between min-w-max md:min-w-0 gap-2">
            {items.map((item, i) => (
              <button key={i} onClick={() => setActive(i)}
                className="flex flex-col items-center gap-3 px-4 pb-2 flex-1 min-w-[110px] bg-transparent border-none cursor-pointer group">
                <div className={`rounded-full transition-all duration-200 ${
                  active === i ? "w-3.5 h-3.5 bg-cyan shadow-[0_0_12px_rgba(0,188,212,0.6)]" : "w-2.5 h-2.5 border border-white/20"
                }`} />
                <span className={`text-xs text-center leading-snug transition-colors ${
                  active === i ? "text-white font-semibold" : "text-slate-text"
                }`}>{item.label}</span>
                {active === i && <div className="w-8 h-0.5 bg-cyan rounded-full" />}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div key={active} className="text-center animate-fade-up opacity-0 [animation-fill-mode:forwards]">
          <h3 className="text-cyan text-glow-cyan font-bold text-2xl mb-4">{items[active].label}</h3>
          <p className="text-slate-text max-w-2xl mx-auto leading-relaxed mb-8">{items[active].description}</p>
          <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:bg-white/5 text-white font-medium transition-all">
            Explore <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
