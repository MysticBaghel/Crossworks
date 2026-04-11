import { useState } from "react";
import { ArrowRight, Megaphone, BookOpen, Calendar, Palette, Eye, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Megaphone,
    label: "Experiential Marketing",
    sub: "Activations delivered",
    stat: "200+",
    statLabel: "Activations delivered",
    description:
      "Create immersive brand experiences that captivate audiences and drive meaningful engagement through interactive technology and creative storytelling.",
    tags: ["Brand activations", "Product launches", "Pop-up experiences", "Guerrilla marketing"],
  },
  {
    icon: BookOpen,
    label: "Interactive Museums",
    sub: "Museums transformed",
    stat: "50+",
    statLabel: "Museums transformed",
    description:
      "Design and build state-of-the-art interactive museum exhibits that educate, entertain, and inspire visitors with cutting-edge technology.",
    tags: ["Touch-screen exhibits", "Immersive installations", "Audio-visual systems", "Digital archives"],
  },
  {
    icon: Calendar,
    label: "Events & Conferences",
    sub: "Events powered",
    stat: "500+",
    statLabel: "Events powered",
    description:
      "Elevate your events with technology solutions that transform ordinary gatherings into extraordinary, memorable experiences.",
    tags: ["Trade shows", "Corporate events", "Award ceremonies", "Product showcases"],
  },
  {
    icon: Palette,
    label: "Brand Activations",
    sub: "Brands activated",
    stat: "100+",
    statLabel: "Brands activated",
    description:
      "Bring your brand to life with innovative activations that create buzz, drive foot traffic, and leave lasting impressions on your target audience.",
    tags: ["Mall activations", "Roadshows", "Sampling campaigns", "Digital activations"],
  },
  {
    icon: Eye,
    label: "Immersive Exhibitions",
    sub: "Exhibitions built",
    stat: "75+",
    statLabel: "Exhibitions built",
    description:
      "Create unforgettable exhibition experiences that draw visitors in and keep them engaged with multi-sensory, technology-driven displays.",
    tags: ["360° environments", "Projection mapping", "Holographic displays", "VR experiences"],
  },
  {
    icon: Lightbulb,
    label: "Innovation Centers",
    sub: "Centers designed",
    stat: "30+",
    statLabel: "Centers designed",
    description:
      "Design and build innovation centers and experience rooms that showcase your company's vision, products, and technological capabilities.",
    tags: ["Corporate showrooms", "Visitor centers", "Technology demos", "Interactive walls"],
  },
];

export default function ServicesExpertiseSection() {
  const [active, setActive] = useState(0);
  const current = services[active];
  const Icon = current.icon;

  return (
    <section className="bg-dark-primary py-24 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-black text-4xl md:text-5xl text-white">
            Our <span className="text-blue" style={{ textShadow: "0 0 30px rgba(0,188,212,0.4)" }}>Expertise</span>
          </h2>
          <p className="text-slate-text mt-4 text-lg">Six disciplines. One mission. Unforgettable experiences.</p>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left — sidebar list */}
          <div className="flex flex-col gap-3 lg:w-[380px] shrink-0">
            {services.map((s, i) => {
              const SIcon = s.icon;
              const isActive = active === i;
              return (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`flex items-center gap-4 px-5 py-4 rounded-xl text-left transition-all duration-200 border cursor-pointer bg-transparent w-full ${
                    isActive
                      ? "border-blue/50 bg-dark-card"
                      : "border-white/6 hover:border-white/15 hover:bg-dark-card/50"
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      isActive ? "bg-blue/20 text-blue" : "bg-white/5 text-slate-text"
                    }`}
                  >
                    <SIcon size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`font-semibold text-sm ${isActive ? "text-blue" : "text-white"}`}>{s.label}</p>
                    <p className="text-slate-text text-xs mt-0.5">{s.sub}</p>
                  </div>
                  {isActive && <ArrowRight size={16} className="text-blue shrink-0" />}
                </button>
              );
            })}
          </div>

          {/* Right — detail panel */}
          <div
            key={active}
            className="flex-1 bg-dark-card border border-white/6 rounded-2xl p-8 md:p-10 relative overflow-hidden animate-fade-up opacity-0 [animation-fill-mode:forwards]"
          >
            {/* decorative corner glow */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-blue/5 blur-3xl pointer-events-none" />

            {/* Stat */}
            <p className="text-blue font-black text-6xl md:text-7xl mb-1" style={{ textShadow: "0 0 30px rgba(0,188,212,0.4)" }}>
              {current.stat}
            </p>
            <p className="text-slate-text text-sm mb-8">{current.statLabel}</p>

            {/* Icon + Title */}
            <div className="w-12 h-12 rounded-xl bg-blue/15 flex items-center justify-center text-blue mb-4">
              <Icon size={24} />
            </div>
            <h3 className="text-white font-bold text-2xl mb-4">{current.label}</h3>
            <p className="text-slate-text leading-relaxed mb-8">{current.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {current.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-4 py-1.5 rounded-full border border-white/15 text-slate-text text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Learn more */}
            <a
              href="#"
              className="inline-flex items-center gap-2 text-blue font-semibold text-sm hover:gap-3 transition-all no-underline"
            >
              Learn more <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
