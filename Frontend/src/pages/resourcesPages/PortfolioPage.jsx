import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import img1 from "../../public/1.jpg";
import img2 from "../../public/2.jpg";
import img3 from "../../public/3.jpg";
import img4 from "../../public/4.jpg";
import img5 from "../../public/5.jpg";
import img6 from "../../public/6.jpg";
import img7 from "../../public/7.jpg";
import img8 from "../../public/8.jpg";
import img9 from "../../public/9.jpg";
import img10 from "../../public/10.jpg";

const CATEGORIES = ["All", "Experience Centres", "Brand Activations", "Exhibitions", "Events"];

const projects = [
  { id: 1, title: "Bosch Experience Centre", category: "Experience Centres", year: "2023", image: img1 },
  { id: 2, title: "Samsung Brand Lounge", category: "Brand Activations", year: "2024", image: img2 },
  { id: 3, title: "NVIDIA Tech Pavilion", category: "Experience Centres", year: "2024", image: img3 },
  { id: 4, title: "Tata Motors Auto Expo", category: "Exhibitions", year: "2024", image: img4 },
  { id: 5, title: "Infosys Innovation Hub", category: "Experience Centres", year: "2023", image: img5 },
  { id: 6, title: "Reliance Retail Activation", category: "Brand Activations", year: "2025", image: img6 },
  { id: 7, title: "India Fintech Summit", category: "Events", year: "2025", image: img7 },
  { id: 8, title: "Mahindra EV Showcase", category: "Exhibitions", year: "2025", image: img8 },
  { id: 9, title: "Google Cloud Next India", category: "Events", year: "2025", image: img9 },
  { id: 10, title: "ABB Industrial Experience", category: "Experience Centres", year: "2026", image: img10 },
];

export default function PortfolioPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-[55vh] flex flex-col items-center justify-center text-center overflow-hidden bg-dark-primary pt-32 pb-16">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,188,212,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,188,212,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-blue/5 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto px-8">
          <div className="inline-flex items-center gap-2 border border-blue/40 bg-blue/10 text-blue text-xs font-bold tracking-[0.2em] uppercase px-5 py-2 rounded-full mb-8">
            <span>✦</span> OUR WORK <span>✦</span>
          </div>
          <h1 className="heading-hero font-black text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
            Project{" "}
            <span className="text-blue" style={{ textShadow: "0 0 40px rgba(0,188,212,0.5)" }}>
              Portfolio
            </span>
          </h1>
          <p className="text-slate-text text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Explore the immersive experiences we've crafted for the world's most ambitious brands.
          </p>
        </div>
      </section>

      {/* ── Filter + Grid ── */}
      <section className="bg-dark-primary px-8 pb-28">
        <div className="max-w-7xl mx-auto">

          {/* Filter bar */}
          <div className="flex items-center gap-3 flex-wrap mb-12">
            <svg className="text-slate-muted shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
            </svg>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 border cursor-pointer ${
                  active === cat
                    ? "bg-blue text-dark-primary border-blue"
                    : "bg-transparent text-slate-text border-white/15 hover:border-white/30 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <div
                key={project.id}
                className="group relative bg-dark-card border border-card rounded-2xl overflow-hidden cursor-pointer hover:border-blue/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-card/90 via-dark-card/20 to-transparent" />
                  <span className="absolute top-4 right-4 bg-dark-primary/80 backdrop-blur-sm text-blue text-xs font-bold px-3 py-1 rounded-full border border-blue/30">
                    {project.year}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-blue text-xs font-bold tracking-widest uppercase mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-white font-bold text-lg mb-4 group-hover:text-blue transition-colors">
                    {project.title}
                  </h3>
                  <a href="#" className="inline-flex items-center gap-2 text-slate-text hover:text-blue text-sm font-medium transition-all no-underline group-hover:gap-3">
                    View Project <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-slate-muted py-20">No projects found in this category.</p>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
