export default function Footer() {
  return (
    <footer className="bg-dark-secondary border-t border-card">
      <div className="max-w-7xl mx-auto px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
                <circle cx="18" cy="18" r="17" stroke="white" strokeWidth="1.5" />
                <path d="M10 13 L18 10 L26 13 L18 16 Z" fill="white" />
                <path d="M10 13 L10 23 L18 26 L18 16 Z" fill="white" fillOpacity="0.6" />
                <path d="M26 13 L26 23 L18 26 L18 16 Z" fill="white" fillOpacity="0.3" />
              </svg>
            </div>
            <p className="text-slate-text text-sm leading-relaxed max-w-xs">
              Creating immersive technology experiences that transform spaces and engage audiences around the world for over 20 years.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-5">Quick Links</h4>
            {["Products", "Services", "About Us", "Contact", "Portfolio"].map((item) => (
              <a key={item} href="#" className="block text-slate-text hover:text-cyan text-sm mb-3 no-underline transition-colors">{item}</a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-5">Contact</h4>
            <p className="text-slate-text text-sm mb-2">hello@crossworksdi.com</p>
            <p className="text-slate-text text-sm mb-2">+91 9632334728</p>
            <p className="text-slate-text text-sm mb-6">Bangalore, India</p>
            <div className="flex gap-3">
              {["IG", "IN", "YT"].map((s) => (
                <a key={s} href="#"
                  className="w-9 h-9 rounded-full border border-subtle hover:border-cyan hover:text-cyan text-slate-text text-xs font-bold flex items-center justify-center no-underline transition-all">
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-card pt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-slate-muted text-xs">
            © 2026 <a href="#" className="text-cyan no-underline">LogicHive</a>. All rights reserved.
          </p>
          <div className="flex gap-2">
            {["ISO 9001", "ISO 27001"].map((b) => (
              <div key={b} className="w-11 h-11 rounded-full border border-subtle flex items-center justify-center text-[10px] text-slate-muted font-bold text-center leading-tight">
                {b}
              </div>
            ))}
          </div>
          <div className="flex gap-6">
            {["Terms & Conditions", "Privacy Notice"].map((t) => (
              <a key={t} href="#" className="text-slate-muted hover:text-slate-text text-xs no-underline transition-colors">{t}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
