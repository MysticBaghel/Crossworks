import { useState } from "react";
import { ArrowRight } from "lucide-react";

import img1 from "../../../Public/1.jpg";
import img2 from "../../../Public/2.jpg";
import img3 from "../../../Public/3.jpg";
import img4 from "../../../Public/4.jpg";
import img5 from "../../../Public/5.jpg";
import img6 from "../../../Public/6.jpg";
import img7 from "../../../Public/7.jpg";
import img8 from "../../../Public/8.jpg";
import img9 from "../../../Public/9.jpg";
import img10 from "../../../Public/10.jpg";

const products = [
  { title: "3D Hologram", subtitle: "We are Leading 3D Hologram Display Agency", img: img1 },
  { title: "Interactive Screens", subtitle: "We are Leading Interactive Touch Screen Rental Agency", img: img2 },
  { title: "AR & VR", subtitle: "We are Leading AR & VR Solutions Provider", img: img3 },
  { title: "Projection Mapping", subtitle: "We are Leading Projection Mapping Agency", img: img4 },
  { title: "Kinetics", subtitle: "We are Leading Kinetic Display Solutions Provider", img: img5 },
  { title: "Custom LED Display", subtitle: "We are Leading Custom LED Display Provider", img: img6 },
  { title: "Interactive Games", subtitle: "We are Leading Interactive Gaming Solutions Provider", img: img7 },
  { title: "Dynamic LED Wall", subtitle: "We are Leading Dynamic LED Wall Provider", img: img8 },
  { title: "Gen AI", subtitle: "We are Leading Generative AI Solutions Provider", img: img9, accent: true, explore: true },
  { title: "Robotics", subtitle: "We are Leading Robotics Solutions Provider", img: img10 },
];

function ProductCard({ product, className = "" }) {
  return (
    <div className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(0,188,212,0.3)] ${className}`}>
      
      {/* Background image */}
      <img
        src={product.img}
        alt={product.title}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

      {/* Text pinned to bottom */}
      <div className="absolute bottom-0 left-0 p-6 z-10">
        <h3 className={`font-bold text-lg mb-1 ${product.accent ? "text-cyan text-glow-cyan" : "text-white"}`}>
          {product.title}
        </h3>
        <p className="text-slate-text text-sm leading-relaxed">{product.subtitle}</p>
        {product.explore && (
          <a href="#" className="inline-flex items-center gap-1 text-cyan text-sm font-semibold mt-2 no-underline hover:gap-2 transition-all">
            Explore <ArrowRight size={14} />
          </a>
        )}
      </div>
    </div>
  );
}

export default function ProductsSection() {
  return (
    <section id="products" className="bg-dark-primary py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full border border-subtle text-cyan text-xs font-bold tracking-[0.18em] uppercase mb-5">
            ✦ SOLUTIONS
          </span>
          <h2 className="font-black text-4xl md:text-5xl text-white mb-4">
            Our <span className="text-cyan text-glow-cyan">Products</span>
          </h2>
          <p className="text-slate-text max-w-md mx-auto leading-relaxed">
            Cutting-edge immersive technology solutions designed to captivate every sense.
          </p>
        </div>

        {/* Row 1 — 3 large */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {products.slice(0, 3).map((p, i) => <ProductCard key={i} product={p} className="h-72" />)}
        </div>
        {/* Row 2 — 3 medium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {products.slice(3, 6).map((p, i) => <ProductCard key={i} product={p} className="h-60" />)}
        </div>
        {/* Row 3 — 4 small */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {products.slice(6, 10).map((p, i) => <ProductCard key={i} product={p} className="h-52" />)}
        </div>

        <div className="text-center">
          <a href="#" className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-cyan text-black font-bold transition-all duration-200 no-underline shadow-[0_0_25px_rgba(0,188,212,0.5),0_0_50px_rgba(0,188,212,0.2)] hover:shadow-[0_0_35px_rgba(0,188,212,0.7),0_0_70px_rgba(0,188,212,0.4)]">
            Explore All Products <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}