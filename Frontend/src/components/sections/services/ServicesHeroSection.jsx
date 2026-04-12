import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import bg03 from "../../../public/bg03.jpg";

export default function ServicesHeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background */}
      <img
        src={bg03}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-dark-primary/80" />
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,188,212,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,188,212,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-blue/40 bg-blue/10 text-blue text-xs font-bold tracking-[0.2em] uppercase px-5 py-2 rounded-full mb-8">
          <span>⚙</span> WHAT WE DO
        </div>

        <h1 className="heading-hero font-black text-white leading-tight mb-6">
          <span className="block text-5xl md:text-7xl lg:text-8xl">We Craft</span>
          <span className="block text-5xl md:text-7xl lg:text-8xl text-blue" style={{ textShadow: "0 0 40px rgba(0,188,212,0.5)" }}>
            Impossible
          </span>
          <span className="block text-5xl md:text-7xl lg:text-8xl">Experiences</span>
        </h1>

        <p className="text-slate-text text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          From experiential marketing to innovation centers — we turn bold visions into technology-powered realities.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contacts"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue hover:bg-blue-light text-dark-primary font-bold rounded-full transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,188,212,0.5)] no-underline text-base"
          >
            Start a Project <ArrowRight size={18} />
          </Link>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-white/25 hover:bg-white/5 text-white font-bold rounded-full transition-all duration-300 no-underline text-base"
          >
            View Our Work <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
