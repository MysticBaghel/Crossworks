import { Rocket, Zap, Code2, Globe, Sparkles, Users, Briefcase } from "lucide-react";

const milestones = [
  {
    year: "2006",
    icon: Rocket,
    title: "The Foundational Years",
    body: "Arvin Padmanabha launched the brand in July 2006 with a focus on BTL marketing and event management, operating as a high-end event production house for global brands in India's growing tech hubs.",
    side: "left",
  },
  {
    year: "2011",
    icon: Zap,
    title: "The New Media Pivot",
    body: "Shifted from standard events toward 'New Media' — combining software with physical hardware. CrossWorks was formally registered as a partnership firm, marking the birth of creative tech.",
    side: "right",
  },
  {
    year: "2013",
    icon: Code2,
    title: "Incorporation & Creative Tech",
    body: "Incorporated as Crossworks Integrated Marketing Services Pvt Ltd on Feb 7, 2013. Developed proprietary tech like Tweet-to-Dispense machines and early AR filters for corporate events.",
    side: "left",
  },
  {
    year: "2018",
    icon: Globe,
    title: "Silicon Valley of India",
    body: "Established a strong presence in Bangalore, becoming the go-to agency for tech giants like Bosch and Zeiss who needed interactive experience centers beyond traditional brochures.",
    side: "right",
  },
  {
    year: "2019",
    icon: Sparkles,
    title: "The Immersive Tech Era",
    body: "Rebranded as CrossworksDI and leaned into AI and Mixed Reality. Launched the 'No-Logram' holographic display and Mood AI — software that tracks crowd sentiment in real time.",
    side: "left",
  },
  {
    year: "2022",
    icon: Users,
    title: "LogicHive Partnership",
    body: "Began a deep technical collaboration with LogicHive, an engineering R&D firm. LogicHive provided backend engineering while Crossworks delivered creative UI/UX and experiential design.",
    side: "right",
  },
  {
    year: "2025",
    icon: Briefcase,
    title: "The LogicHive Acquisition",
    body: "LogicHive officially acquired Crossworks Design Innovations in October 2025, creating a full-stack experiential giant offering end-to-end solutions — from hardware engineering and AI to consumer-facing brand experiences.",
    side: "left",
  },
];

export default function AboutJourneySection() {
  return (
    <section className="bg-dark-primary py-24 px-8">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="heading-hero font-black text-4xl md:text-5xl text-white">
            Our <span className="text-blue text-glow-blue">Journey</span>
          </h2>
          <p className="text-slate-text mt-4 text-base">
            From a small startup to an industry leader — the milestones that shaped Crossworks.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical centre line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-blue/20 -translate-x-1/2" />

          <div className="flex flex-col gap-0">
            {milestones.map((m, i) => {
              const Icon = m.icon;
              const isLeft = m.side === "left";

              return (
                <div key={i} className="relative flex items-center justify-between gap-8 mb-16">
                  {/* LEFT side */}
                  <div className={`flex-1 ${isLeft ? "flex justify-end pr-10" : "pr-10"}`}>
                    {isLeft && (
                      <div className="bg-dark-card border border-white/6 rounded-2xl p-6 max-w-[400px] text-right hover:border-blue/25 transition-colors duration-300">
                        {/* Year + icon */}
                        <div className="flex items-center justify-end gap-3 mb-3">
                          <span className="heading-hero font-black text-2xl text-blue">{m.year}</span>
                          <div className="w-9 h-9 rounded-lg bg-blue/15 flex items-center justify-center text-blue shrink-0">
                            <Icon size={17} />
                          </div>
                        </div>
                        <h3 className="font-bold text-white text-lg mb-2">{m.title}</h3>
                        <p className="text-slate-text text-sm leading-relaxed">{m.body}</p>
                      </div>
                    )}
                  </div>

                  {/* Centre dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-blue border-2 border-dark-primary shadow-[0_0_10px_rgba(13,162,231,0.6)] z-10 shrink-0" />

                  {/* RIGHT side */}
                  <div className={`flex-1 ${!isLeft ? "flex justify-start pl-10" : "pl-10"}`}>
                    {!isLeft && (
                      <div className="bg-dark-card border border-white/6 rounded-2xl p-6 max-w-[400px] hover:border-blue/25 transition-colors duration-300">
                        {/* Year + icon */}
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-9 h-9 rounded-lg bg-blue/15 flex items-center justify-center text-blue shrink-0">
                            <Icon size={17} />
                          </div>
                          <span className="heading-hero font-black text-2xl text-blue">{m.year}</span>
                        </div>
                        <h3 className="font-bold text-white text-lg mb-2">{m.title}</h3>
                        <p className="text-slate-text text-sm leading-relaxed">{m.body}</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
