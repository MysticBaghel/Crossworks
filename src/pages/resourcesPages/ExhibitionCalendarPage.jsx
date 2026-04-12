import { useState } from "react";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

const TABS = ["Tradeshows UAE", "Tradeshows KSA", "Tradeshows India"];

const tradeshows = {
  "Tradeshows UAE": [
    {
      name: "GITEX Technology Week",
      dates: "14th–18th October 2025",
      location: "Dubai World Trade Centre, Dubai",
      description: "The Middle East's largest tech and innovation show. Crossworks showcases the latest in immersive display technology and experiential solutions.",
    },
    {
      name: "The Big 5 Construction Expo",
      dates: "26th–29th November 2025",
      location: "Dubai World Trade Centre, Dubai",
      description: "A premier construction and building materials event where we demonstrate smart space and signage integration solutions.",
    },
  ],
  "Tradeshows KSA": [
    {
      name: "LEAP Tech Conference",
      dates: "9th-12th February 2026",
      location: "Riyadh Front Exhibition Center, Riyadh",
      description: "Saudi Arabia's flagship technology conference. Crossworks presents next-gen immersive installations for enterprise and government sectors.",
    },
  ],
  "Tradeshows India": [
    {
      name: "IndiaSoft",
      dates: "23rd–26th March 2026",
      location: "New Delhi",
      description: "A leading software and IT services expo connecting global buyers with Indian technology providers.",
    },
    {
      name: "India Multimedia & AV Expo",
      dates: "5th–7th June 2026",
      location: "Bombay Exhibition Centre, Mumbai",
      description: "India's premier audiovisual and multimedia technology show where Crossworks unveils its latest experiential hardware lineup.",
    },
    {
      name: "BrandStorm India",
      dates: "18th–20th September 2026",
      location: "BIEC, Bengaluru",
      description: "A brand activation and experiential marketing summit bringing together the country's top agencies and technology partners.",
    },
  ],
};

export default function ExhibitionCalendarPage() {
  const [activeTab, setActiveTab] = useState("Tradeshows India");
  const shows = tradeshows[activeTab];

  return (
    <>
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-[50vh] flex flex-col items-center justify-center text-center overflow-hidden bg-dark-primary pt-32 pb-16">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full bg-blue/5 blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto px-8">
          <h1 className="heading-hero font-black text-5xl md:text-6xl text-white leading-tight mb-6">
            Exhibition{" "}
            <span className="text-blue" style={{ textShadow: "0 0 40px rgba(0,188,212,0.5)" }}>
              Calendar
            </span>
          </h1>
          <p className="text-slate-text text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Meet us at leading tradeshows across the globe. Explore upcoming exhibitions where Crossworks showcases cutting-edge experiential technology.
          </p>
        </div>
      </section>

      {/* ── Tabs + Cards ── */}
      <section className="bg-dark-primary px-8 pb-28">
        <div className="max-w-5xl mx-auto">

          {/* Tab switcher */}
          <div className="flex items-center justify-center gap-2 flex-wrap mb-14">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border cursor-pointer ${
                  activeTab === tab
                    ? "bg-blue text-dark-primary border-blue"
                    : "bg-transparent text-slate-text border-white/15 hover:border-white/30 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Cards */}
          {shows.length === 0 ? (
            <p className="text-center text-slate-muted py-20">
              No tradeshows listed for {activeTab} yet.
            </p>
          ) : (
            <div className="flex flex-col gap-5">
              {shows.map((show, i) => (
                <div
                  key={i}
                  className="bg-dark-card border border-card rounded-2xl p-7 flex flex-col md:flex-row md:items-center gap-6 hover:border-blue/30 transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-blue/10 border border-blue/20 flex items-center justify-center text-blue shrink-0">
                    <Calendar size={24} />
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-xl mb-2">{show.name}</h3>
                    <div className="flex flex-wrap gap-4 mb-3">
                      <span className="flex items-center gap-1.5 text-slate-text text-sm">
                        <Calendar size={14} className="text-blue" /> {show.dates}
                      </span>
                      <span className="flex items-center gap-1.5 text-slate-text text-sm">
                        <MapPin size={14} className="text-blue" /> {show.location}
                      </span>
                    </div>
                    <p className="text-slate-text text-sm leading-relaxed">{show.description}</p>
                  </div>

                  {/* CTA */}
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-blue text-sm font-semibold hover:gap-3 transition-all no-underline shrink-0"
                  >
                    View details <ArrowRight size={14} />
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
