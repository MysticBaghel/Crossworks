import { ArrowRight } from "lucide-react";

export default function RentalsCTASection() {
  return (
    <section className="bg-dark-secondary py-32 px-8 relative overflow-hidden">
      {/* Glow bg */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-subtle text-blue text-xs font-bold tracking-[0.18em] uppercase mb-8">
          ✦ CUSTOM PACKAGES
        </span>
        <h2 className="font-black text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
          Need a Custom Rental Package?
        </h2>
        <p className="text-slate-text text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          We'll curate the perfect technology mix for your event. Tell us your vision and we'll handle the rest.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-blue text-dark-primary font-bold text-base transition-all duration-200 hover:bg-blue-light hover:shadow-[0_0_35px_rgba(0,188,212,0.6)] hover:-translate-y-0.5 no-underline shadow-[0_0_25px_rgba(0,188,212,0.4)]"
        >
          Get in Touch <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}
