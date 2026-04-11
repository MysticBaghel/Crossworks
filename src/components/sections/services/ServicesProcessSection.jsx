import { useState } from "react";
import { Target, Layers, Zap, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Target,
    step: "STEP 1",
    title: "Discover",
    description: "Deep-dive into your vision, audience, and objectives",
  },
  {
    icon: Layers,
    step: "STEP 2",
    title: "Design",
    description: "Craft bespoke concepts blending creativity & technology",
  },
  {
    icon: Zap,
    step: "STEP 3",
    title: "Develop",
    description: "Build and engineer every detail to perfection",
  },
  {
    icon: Sparkles,
    step: "STEP 4",
    title: "Deliver",
    description: "Execute flawlessly and measure impact",
  },
];

function ArcRing({ active = false }) {
  return (
    <div
      className="absolute inset-0 rounded-full pointer-events-none"
      style={{
        border: "1.5px dashed",
        borderColor: active ? "rgba(13,162,231,0.55)" : "rgba(13,162,231,0.2)",
        transition: "border-color 0.4s ease",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: "var(--color-blue)",
          opacity: active ? 1 : 0.5,
          transformOrigin: "50% calc(50% + 72px)",
          animation: "orbitDot 6s linear infinite",
          boxShadow: active
            ? "0 0 8px 3px rgba(13,162,231,0.7)"
            : "0 0 4px 1px rgba(13,162,231,0.3)",
          transition: "opacity 0.4s ease, box-shadow 0.4s ease",
        }}
      />
    </div>
  );
}

export default function ServicesProcessSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="bg-dark-secondary py-24 px-8">
      <style>{`
        @keyframes orbitDot {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to   { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="heading-hero font-black text-4xl md:text-5xl text-white">
            Our <span className="text-blue text-glow-blue">Process</span>
          </h2>
          <p className="text-slate-text mt-4 text-lg">
            A proven four-phase approach from concept to launch.
          </p>
        </div>

        <div className="relative flex flex-col md:flex-row items-start justify-between gap-12 md:gap-4">
          <div className="hidden md:block absolute top-[72px] left-[12.5%] right-[12.5%] h-px bg-blue/20" />

          {steps.map((s, i) => {
            const Icon = s.icon;
            const isActive = hovered === i;

            return (
              <div
                key={i}
                className="flex-1 flex flex-col items-center text-center relative z-10 cursor-default"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="relative w-[144px] h-[144px] flex items-center justify-center mb-6">
                  <ArcRing active={isActive} />

                  <div
                    className="w-[104px] h-[104px] rounded-full border-2 flex items-center justify-center"
                    style={{
                      borderColor: isActive
                        ? "rgba(13,162,231,0.85)"
                        : "rgba(13,162,231,0.28)",
                      backgroundColor: isActive
                        ? "rgba(13,162,231,0.1)"
                        : "var(--color-dark-card)",
                      boxShadow: isActive
                        ? "0 0 28px rgba(13,162,231,0.3), 0 0 60px rgba(13,162,231,0.12)"
                        : "none",
                      transition: "all 0.4s ease",
                    }}
                  >
                    <Icon
                      size={32}
                      style={{
                        color: isActive ? "var(--color-blue)" : "rgba(13,162,231,0.5)",
                        filter: isActive
                          ? "drop-shadow(0 0 7px rgba(13,162,231,0.85))"
                          : "none",
                        transition: "all 0.4s ease",
                      }}
                    />
                  </div>
                </div>

                <p
                  className="text-xs font-bold tracking-[0.18em] uppercase mb-2"
                  style={{
                    color: isActive ? "var(--color-blue)" : "var(--color-slate-muted)",
                    transition: "color 0.3s ease",
                  }}
                >
                  {s.step}
                </p>

                <h3
                  className="font-black text-xl mb-3"
                  style={{
                    color: isActive ? "var(--color-blue)" : "#ffffff",
                    transition: "color 0.3s ease",
                  }}
                >
                  {s.title}
                </h3>

                <p className="text-slate-text text-sm leading-relaxed max-w-[200px]">
                  {s.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}