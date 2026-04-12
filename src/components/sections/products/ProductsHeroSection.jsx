import { ArrowRight } from "lucide-react";
import bg03 from "../../../public/bg03.jpg";

export default function ProductsHeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-dark-primary">
      {/* BG Image — drop products-hero.jpg in /public */}
      <img
        src= {bg03}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center opacity-40"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-primary/50 via-transparent to-dark-primary/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl w-full">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-subtle text-blue text-xs font-bold tracking-[0.18em] uppercase mb-8 animate-fade-in opacity-0 [animation-fill-mode:forwards]">
          ✦ NEXT-GEN TECHNOLOGY
        </span>

        {/* Heading */}
        <h1 className="heading-hero font-black text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6 animate-fade-up opacity-0 [animation-fill-mode:forwards] animation-delay-200">
          Our <span className="gradient-text text-glow-blue">Products</span>
        </h1>

        {/* Subtitle */}
        <p className="text-slate-text text-lg leading-relaxed max-w-2xl mx-auto mb-10 animate-fade-up opacity-0 [animation-fill-mode:forwards] animation-delay-350">
          Cutting-edge immersive technology solutions designed to create
          unforgettable experiences that captivate every sense.
        </p>

        {/* CTA */}
        <div className="animate-fade-up opacity-0 [animation-fill-mode:forwards] animation-delay-500">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-blue text-dark-primary font-bold text-base transition-all duration-200 hover:bg-blue-light hover:shadow-[0_0_30px_rgba(0,188,212,0.5)] hover:-translate-y-0.5 no-underline shadow-[0_0_20px_rgba(0,188,212,0.3)]"
          >
            Get a Quote <ArrowRight size={18} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in opacity-0 [animation-fill-mode:forwards] animation-delay-500">
        <div className="w-7 h-11 rounded-full border-2 border-white/20 flex justify-center pt-2">
          <div className="w-1 h-2 bg-blue rounded-full animate-scroll-bounce" />
        </div>
      </div>
    </section>
  );
}
