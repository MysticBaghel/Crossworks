import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
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
  {
    title: "3D Hologram",
    subtitle: "We are Leading 3D Hologram Display Agency",
    img: img1,
    emoji: "🪄",
    slug: "3d-hologram",
  },
  {
    title: "Interactive Screens",
    subtitle: "We are Leading Interactive Touch Screen Rental Agency",
    img: img2,
    emoji: "🟦",
    slug: "interactive-screens",
    highlight: true,
  },
  {
    title: "AR & VR",
    subtitle: "We are Leading AR & VR Solutions Provider",
    img: img3,
    emoji: "🥽",
    slug: "ar-vr",
  },
  {
    title: "Projection Mapping",
    subtitle: "We are Leading Projection Mapping Agency",
    img: img4,
    emoji: "🎬",
    slug: "projection-mapping",
  },
  {
    title: "Kinetics",
    subtitle: "We are Leading Kinetic Display Solutions Provider",
    img: img5,
    emoji: "⚙️",
    slug: "kinetics",
  },
  {
    title: "Custom LED Display",
    subtitle: "We are Leading Custom LED Display Provider",
    img: img6,
    emoji: "💡",
    slug: "custom-led-display",
  },
  {
    title: "Interactive Games",
    subtitle: "We are Leading Interactive Gaming Solutions Provider",
    img: img7,
    emoji: "🎮",
    slug: "interactive-games",
  },
  {
    title: "Dynamic LED Wall",
    subtitle: "We are Leading Dynamic LED Wall Provider",
    img: img8,
    emoji: "🖥️",
    slug: "dynamic-led-wall",
    highlight: true,
  },
  {
    title: "Gen AI",
    subtitle: "We are Leading Generative AI Solutions Provider",
    img: img9,
    emoji: "🤖",
    slug: "gen-ai",
  },
  {
    title: "Robotics",
    subtitle: "We are Leading Robotics Solutions Provider",
    img: img10,
    emoji: "🦾",
    slug: "robotics",
  },
];

function ProductCard({ product, className = "" }) {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden cursor-pointer group transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-[0_0_28px_rgba(0,188,212,0.22)] ${className}`}
    >
      {/* Background image */}
      <img
        src={product.img}
        alt={product.title}
        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
      />
      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 p-5 z-10">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-base leading-none">{product.emoji}</span>
          <h3
            className={`font-bold text-base leading-tight ${
              product.highlight ? "text-blue" : "text-white"
            }`}
            style={product.highlight ? { textShadow: "0 0 12px rgba(0,188,212,0.6)" } : {}}
          >
            {product.title}
          </h3>
        </div>
        <p className="text-slate-text text-xs leading-relaxed">{product.subtitle}</p>
        {product.highlight && (
          <Link
            to={`/products/${product.slug}`}
            className="inline-flex items-center gap-1 text-blue text-xs font-semibold mt-2 no-underline hover:gap-2 transition-all"
          >
            Explore <ArrowRight size={12} />
          </Link>
        )}
      </div>
    </div>
  );
}

export default function ServicesPoweredBySection() {
  return (
    <section className="bg-dark-primary py-24 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="font-black text-4xl md:text-5xl text-white">
            Powered By Our{" "}
            <span className="text-blue" style={{ textShadow: "0 0 30px rgba(0,188,212,0.4)" }}>
              Products
            </span>
          </h2>
          <p className="text-slate-text mt-4 text-lg">Every service is backed by our cutting-edge technology stack.</p>
        </div>

        {/* Row 1 — 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {products.slice(0, 3).map((p, i) => (
            <ProductCard key={i} product={p} className="h-72" />
          ))}
        </div>

        {/* Row 2 — 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {products.slice(3, 6).map((p, i) => (
            <ProductCard key={i} product={p} className="h-64" />
          ))}
        </div>

        {/* Row 3 — 4 cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {products.slice(6, 10).map((p, i) => (
            <ProductCard key={i} product={p} className="h-56" />
          ))}
        </div>

        {/* CTA button */}
        <div className="flex justify-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue hover:bg-blue-light text-dark-primary font-bold rounded-full transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,188,212,0.5)] no-underline text-base"
          >
            Explore all Products <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
