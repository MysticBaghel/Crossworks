import { ArrowRight } from "lucide-react";
import img1 from "../../../public/1.jpg";
import img2 from "../../../public/2.jpg";
import img3 from "../../../public/3.jpg";
import img4 from "../../../public/4.jpg";
import img5 from "../../../public/5.jpg";
import img6 from "../../../public/6.jpg";
import img7 from "../../../public/7.jpg";
import img8 from "../../../public/8.jpg";
import img9 from "../../../public/9.jpg";
import img10 from "../../../public/10.jpg";

const products = [
  { title: "3D Hologram", subtitle: "We are Leading 3D Hologram Display Agency", img: img1 },
  { title: "Interactive Screens", subtitle: "We are Leading Interactive Touch Screen Rental Agency", img: img2 },
  { title: "AR & VR", subtitle: "We are Leading AR & VR Solutions Provider", img: img3 },
  { title: "Projection Mapping", subtitle: "We are Leading Projection Mapping Agency", img: img4 },
  { title: "Kinetics", subtitle: "We are Leading Kinetic Display Solutions Provider", img: img5 },
  { title: "Custom LED Display", subtitle: "We are Leading Custom LED Display Provider", img: img6},
  { title: "Interactive Games", subtitle: "We are Leading Interactive Gaming Solutions Provider", img: img7 },
  { title: "Dynamic LED Wall", subtitle: "We are Leading Dynamic LED Wall Provider", img: img8 },
  { title: "Gen AI", subtitle: "We are Leading Generative AI Solutions Provider", img: img9},
  { title: "Robotics", subtitle: "We are Leading Robotics Solutions Provider", img: img10 },
];

function ProductCard({ product, className = "" }) {
  return (
    <div className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(0,188,212,0.25)] ${className}`}>
      {/* Background image */}
      <img
        src={product.img}
        alt={product.title}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
      {/* Text */}
      <div className="absolute bottom-0 left-0 p-6 z-10">
        <h3 className={`font-bold text-lg mb-1 ${product.accent ? "text-blue text-glow-blue" : "text-white"}`}>
          {product.title}
        </h3>
        <p className="text-slate-text text-sm leading-relaxed">{product.subtitle}</p>
        {product.explore && (
          <a href="#" className="inline-flex items-center gap-1 text-blue text-sm font-semibold mt-2 no-underline hover:gap-2 transition-all">
            Explore <ArrowRight size={14} />
          </a>
        )}
      </div>
    </div>
  );
}

export default function ProductsGridSection() {
  return (
    <section className="bg-dark-primary py-20 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Row 1 — 3 large */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {products.slice(0, 3).map((p, i) => <ProductCard key={i} product={p} className="h-72" />)}
        </div>
        {/* Row 2 — 3 medium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {products.slice(3, 6).map((p, i) => <ProductCard key={i} product={p} className="h-64" />)}
        </div>
        {/* Row 3 — 4 small */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.slice(6, 10).map((p, i) => <ProductCard key={i} product={p} className="h-56" />)}
        </div>
      </div>
    </section>
  );
}
