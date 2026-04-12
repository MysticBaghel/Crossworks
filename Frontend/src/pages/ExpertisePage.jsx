import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { expertiseItems } from "../data/expertiseData";

export default function ExpertisePage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const item = expertiseItems.find((e) => e.slug === slug);

  if (!item) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-dark-primary text-white">
          <div className="text-center">
            <p className="text-slate-text mb-4">Page not found.</p>
            <Link to="/" className="text-blue underline">Go home</Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      {/* ── Secondary subnav ── */}
      <div className="fixed top-[80px] left-0 right-0 z-40 bg-dark-secondary border-b border-card">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex overflow-x-auto no-scrollbar">
            {expertiseItems.map((e) => {
              const isActive = e.slug === slug;
              return (
                <button
                  key={e.slug}
                  onClick={() => navigate(`/expertise/${e.slug}`)}
                  className={`shrink-0 px-5 py-3 text-sm font-semibold whitespace-nowrap border-b-2 transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "border-blue text-dark-primary bg-blue"
                      : "border-transparent text-slate-text hover:text-white bg-transparent"
                  }`}
                >
                  {e.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <img
          src={item.bg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-dark-primary/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-primary/80 via-dark-primary/50 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full mt-[132px]">
          <div className="max-w-2xl">
            <p className="text-white/70 text-sm font-medium mb-4">{item.tagline}</p>
            <h1 className="font-black text-4xl md:text-5xl text-blue text-glow-blue leading-tight mb-6">
              {item.heading}
            </h1>
            <p className="text-white/80 text-base leading-relaxed mb-8 max-w-xl">
              {item.description}
            </p>
            <Link
              to="/contacts"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue hover:bg-blue-light text-dark-primary font-bold rounded-full transition-all duration-200 hover:shadow-[0_0_24px_rgba(0,188,212,0.5)] no-underline text-sm"
            >
              Contact Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── What We Deliver ── */}
      <section className="bg-dark-primary py-24 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-black text-3xl md:text-4xl text-white mb-4">
              ✦ {item.deliverTitle} ✦
            </h2>
            <p className="text-slate-text text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              {item.deliverSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {item.cards.map((card, i) => (
              <div
                key={i}
                className="bg-dark-card border border-card rounded-2xl p-7 hover:border-blue/30 transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="text-blue font-bold text-lg mb-3">{card.title}</h3>
                <p className="text-slate-text text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-dark-secondary border-t border-card py-20 px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-black text-2xl md:text-3xl text-white mb-4">
            Ready to get started with {item.label}?
          </h2>
          <p className="text-slate-text text-base mb-8">
            Let's discuss how our {item.label.toLowerCase()} solutions can elevate your next project.
          </p>
          <Link
            to="/contacts"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue hover:bg-blue-light text-dark-primary font-bold rounded-full transition-all duration-200 no-underline text-sm"
          >
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}