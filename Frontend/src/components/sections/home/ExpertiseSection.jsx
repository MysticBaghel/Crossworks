import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { expertiseItems } from "../../../data/expertiseData";

function Particle({ style }) {
  return <div className="absolute rounded-full bg-blue/60 pointer-events-none" style={{ width: 5, height: 5, ...style }} />;
}

const PARTICLES = [
  { top: "18%", left: "4%" }, { top: "62%", left: "2%" }, { top: "38%", left: "8%" },
  { top: "80%", left: "14%" }, { top: "12%", left: "22%" }, { top: "55%", left: "30%" },
  { top: "75%", left: "42%" }, { top: "20%", left: "58%" }, { top: "88%", left: "68%" },
  { top: "35%", left: "78%" }, { top: "65%", left: "88%" }, { top: "10%", left: "94%" },
  { top: "50%", left: "96%" }, { top: "42%", left: "50%", opacity: 0.3 },
];

export default function ExpertiseSection() {
  const [active, setActive] = useState(4);
  const navigate = useNavigate();
  const current = expertiseItems[active];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-dark-primary py-24 px-8">
      {PARTICLES.map((p, i) => (
        <Particle key={i} style={{ top: p.top, left: p.left, opacity: p.opacity ?? 0.55 }} />
      ))}

      <div className="relative z-10 max-w-6xl w-full mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-blue text-xs font-bold tracking-[0.2em] uppercase mb-5">✦ OUR EXPERTISE ✦</p>
          <h2 className="heading-hero font-black text-white leading-tight">
            Your Go-To for Brand Activation{" "}
            <span className="text-blue text-glow-blue">& Event Technology Solutions</span>
          </h2>
        </div>

        {/* Tabs bar */}
        <div className="bg-dark-card/80 backdrop-blur-sm border border-subtle rounded-2xl mb-10">
          <div className="flex">
            {expertiseItems.map((item, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{ transformOrigin: "center center" }}
                className="relative flex flex-col items-center justify-center gap-4 py-8 px-2 flex-1 bg-transparent border-none cursor-pointer transition-all duration-300 ease-out hover:scale-110"
              >
                <div className={`rounded-full transition-all duration-300 ${
                  active === i
                    ? "w-5 h-5 bg-blue shadow-[0_0_18px_6px_rgba(0,188,212,0.6)]"
                    : "w-4 h-4 border-2 border-white/30"
                }`} />
                <span className={`text-center font-bold leading-snug transition-all duration-300 ${
                  active === i ? "text-white text-sm" : "text-slate-text text-xs"
                }`}>
                  {item.label}
                </span>
                <div className={`absolute bottom-3 h-[2px] bg-blue rounded-full transition-all duration-300 ${
                  active === i ? "w-10" : "w-0"
                }`} />
              </button>
            ))}
          </div>
        </div>

        {/* Description */}
        <div key={active} className="text-center animate-fade-up opacity-0 [animation-fill-mode:forwards]">
          <h3 className="text-blue text-glow-blue font-bold text-2xl md:text-3xl mb-4">{current.label}</h3>
          <p className="text-slate-text text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8">{current.description}</p>
          <button
            onClick={() => navigate(`/expertise/${current.slug}`)}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-dark-card/80 border border-white/20 hover:border-blue/40 hover:bg-dark-hover text-white font-semibold transition-all duration-200"
          >
            Explore <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
