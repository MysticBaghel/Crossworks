import bg01 from "../../../public/bg01.jpg";
import { Mail, Phone, MessageCircle } from "lucide-react";

export default function ContactHeroSection() {
  return (
    <section className="relative h-[60vh] flex flex-col items-center justify-end overflow-hidden bg-dark-primary pb-0">
      <img src={bg01} alt="" className="absolute inset-0 w-full h-full object-cover object-center opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-dark-primary/40 via-transparent to-dark-primary/80" />

      {/* Contact chips */}
      <div className="relative z-10 flex flex-wrap justify-center gap-4 pb-12">
        {[
          { icon: <Mail size={16} />, label: "hello@crossworksdi.com" },
          { icon: <Phone size={16} />, label: "+91 9632334728" },
          { icon: <MessageCircle size={16} />, label: "+91 9632334728" },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2 px-6 py-3 rounded-full border border-subtle bg-dark-primary/60 backdrop-blur-md text-white text-sm font-medium">
            <span className="text-blue">{item.icon}</span>
            {item.label}
          </div>
        ))}
      </div>
    </section>
  );
}
