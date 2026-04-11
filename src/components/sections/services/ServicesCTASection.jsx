import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ServicesCTASection() {
  return (
    <section className="bg-dark-secondary py-28 px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-black text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
          Ready to Create{" "}
          <span className="text-blue" style={{ textShadow: "0 0 40px rgba(0,188,212,0.5)" }}>
            Something
            <br />
            Extraordinary
          </span>
          ?
        </h2>
        <p className="text-slate-text text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Let's discuss how our services and technology can elevate your next event, activation, or experience.
        </p>
        <Link
          to="/contacts"
          className="inline-flex items-center gap-2 px-10 py-4 bg-blue hover:bg-blue-light text-dark-primary font-bold rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,188,212,0.5)] no-underline text-base"
        >
          Get in Touch <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
