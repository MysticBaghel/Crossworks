import { ArrowRight } from "lucide-react";

export default function ProductsCTASection() {
  return (
    <section className="bg-dark-secondary py-32 px-8 relative overflow-hidden">
      {/* Glow bg */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="heading-hero font-black text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
          Ready to Transform Your Space?
        </h2>
        <p className="text-slate-text text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Let's discuss how our immersive technology can elevate your next project.
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
