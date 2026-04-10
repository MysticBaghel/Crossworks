import bg01 from "../../../Public/bg01.jpg"
import { useState, useEffect } from "react";

const CYCLING_WORDS = ["Immersive", "Innovative", "Next Generation", "Memorable"];

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % CYCLING_WORDS.length);
        setVisible(true);
      }, 200);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-dark-primary">
      {/* BG Image — drop your image in /public and update src */}
      <img
        src={bg01}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center opacity-40"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-primary/40 via-transparent to-dark-primary/80" />

      {/* Decorative circle */}
      <div className="absolute -left-20 top-1/3 w-72 h-72 rounded-full border border-cyan/10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl w-full">
        <h1 className="font-black text-5xl md:text-6xl lg:text-7xl leading-tight text-white mb-4 animate-fade-up opacity-0 [animation-fill-mode:forwards]">
          We Build{" "}
          <span
            className={`text-cyan text-glow-cyan whitespace-nowrap inline-block transition-all duration-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {CYCLING_WORDS[wordIndex]}
          </span>
          <br />
          Tech Experiences
        </h1>

        <p className="text-slate-text text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10 animate-fade-up opacity-0 [animation-fill-mode:forwards] animation-delay-200">
          Creating immersive technology experiences that transform spaces and
          engage audiences around the world for over 20 years.
        </p>

        <div className="flex gap-4 justify-center flex-wrap animate-fade-up opacity-0 [animation-fill-mode:forwards] animation-delay-350">
          <a href="#products"
            className="px-8 py-3 bg-cyan hover:bg-cyan-light text-dark-primary font-bold rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,188,212,0.4)] no-underline">
            Explore Products
          </a>
          <a href="#contact"
            className="px-8 py-3 border border-white/25 hover:bg-white/10 text-white font-bold rounded-lg transition-all duration-200 no-underline">
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-fade-in opacity-0 [animation-fill-mode:forwards] animation-delay-500">
        <div className="w-7 h-11 rounded-full border-2 border-white/20 flex justify-center pt-2">
          <div className="w-1 h-2 bg-cyan rounded-full animate-scroll-bounce" />
        </div>
      </div>
    </section>
  );
}
