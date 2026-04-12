import { Sparkles } from "lucide-react";

const values = [
  "Innovation First",
  "Client Obsessed",
  "Tech Pioneers",
  "Global Reach",
];

export default function AboutMissionSection() {
  return (
    <section className="bg-dark-secondary py-24 px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">

        {/* Left — text block */}
        <div className="flex-1">
          <h2 className="heading-hero font-black text-4xl md:text-5xl text-white leading-tight mb-6">
            Creating{" "}
            <span className="text-blue text-glow-blue">Impossible</span>
            <br />Experiences
          </h2>
          <p className="text-slate-text leading-relaxed mb-5">
            Crossworks is your ultimate experience creator for events, exhibitions, brand activations, and experiential marketing. We specialise in creating unique and immersive experiences with the latest technology solutions — from augmented reality to hologram displays, interactive touch screens, and cutting-edge robotics.
          </p>
          <p className="text-slate-text leading-relaxed">
            Our technology services are designed to elevate your events and leave a lasting impression on your audience by using the best of interactive technologies and experiential marketing strategies.
          </p>
        </div>

        {/* Right — mission card */}
        <div className="lg:w-[460px] shrink-0 bg-dark-card border border-white/6 rounded-2xl p-8">
          {/* Mission header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-lg bg-blue/15 flex items-center justify-center text-blue">
              <Sparkles size={18} />
            </div>
            <h3 className="font-bold text-white text-xl">Our Mission</h3>
          </div>

          <p className="text-slate-text leading-relaxed mb-8">
            To push the boundaries of what's possible in experiential technology, helping brands forge genuine emotional connections with their audiences through innovation, creativity, and flawless execution.
          </p>

          {/* Value pills — 2×2 grid */}
          <div className="grid grid-cols-2 gap-3">
            {values.map((v, i) => (
              <div
                key={i}
                className="flex items-center justify-center px-4 py-3 rounded-xl border border-blue/25 bg-blue/5 text-blue text-sm font-semibold hover:bg-blue/10 hover:border-blue/50 transition-all duration-200 cursor-default"
              >
                {v}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
