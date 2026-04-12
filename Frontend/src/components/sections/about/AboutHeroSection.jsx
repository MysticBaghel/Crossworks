import { ArrowRight, Heart, Calendar, Users, Award, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import bg03 from "../../../public/bg03.jpg";

const stats = [
  { icon: Calendar, value: "2006", label: "Founded In" },
  { icon: Users,    value: "500+", label: "Clients Worldwide" },
  { icon: Award,    value: "96%",  label: "Client Retention" },
  { icon: Briefcase,value: "2000+",label: "Successful Projects" },
];

export default function AboutHeroSection() {
  return (
    <section className="relative bg-dark-primary overflow-hidden">
      {/* Background */}
      <img
        src={bg03}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-dark-primary/75" />

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-[90vh] px-8 pt-24 pb-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-blue/40 bg-blue/10 text-blue text-xs font-bold tracking-[0.2em] uppercase px-5 py-2 rounded-full mb-8">
          <Heart size={13} /> OUR STORY
        </div>

        {/* Main heading — heading-hero class as instructed */}
        <h1 className="heading-hero font-black text-white leading-tight mb-6">
          We Are{" "}
          <span className="text-blue text-glow-blue">Crossworks</span>
        </h1>

        <p className="text-slate-text text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Two decades of pioneering immersive technology — since 2006, we've transformed bold visions into unforgettable experiences that captivate audiences worldwide.
        </p>

        <Link
          to="/contacts"
          className="inline-flex items-center gap-2 px-8 py-4 bg-blue hover:bg-blue-light text-dark-primary font-bold rounded-full transition-all duration-300 hover:shadow-[0_0_25px_rgba(13,162,231,0.45)] no-underline text-base"
        >
          Work With Us <ArrowRight size={18} />
        </Link>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 border-t border-white/8 bg-dark-secondary/80 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/8">
          {stats.map(({ icon: Icon, value, label }, i) => (
            <div key={i} className="flex flex-col items-center py-10 px-6 gap-2">
              <Icon size={22} className="text-blue mb-1" />
              <p className="font-black text-3xl text-blue text-glow-blue">{value}</p>
              <p className="text-slate-text text-sm">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
