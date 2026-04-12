import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../../public/logo.png";

const navLinks = [
  { label: "Products", href: "/products" },
  { label: "Rentals", href: "/rentals" },
  { label: "Services", href: "/services" },
  {
    label: "Resources",
    href: "#resources",
    dropdown: [
      { label: "Portfolio", href: "/portfolio" },
      { label: "Exhibition Calendar", href: "/exhibition-calendar" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
    ],
  },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contacts" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest("[data-dropdown]")) {
        setResourcesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-dark-primary/90 backdrop-blur-md border-b border-subtle" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between py-5">
        <a href="/" className="flex items-center gap-2 no-underline">
          <img src={logo} alt="Crossworks" className="h-7 w-auto" />
          <span className="font-black text-lg tracking-widest text-white uppercase">CROSSWORKS</span>
        </a>

        <ul className="hidden md:flex items-center gap-6 list-none m-0 p-0">
          {navLinks.map((link) =>
            link.dropdown ? (
              <li key={link.label} className="relative" data-dropdown>
                <button
                  onClick={() => setResourcesOpen((p) => !p)}
                  className="flex items-center gap-1 text-white/80 hover:text-white text-sm font-medium transition-colors bg-transparent border-none cursor-pointer p-0"
                >
                  {link.label}
                  <ChevronDown size={14} className={`transition-transform duration-200 ${resourcesOpen ? "rotate-180" : ""}`} />
                </button>
                {resourcesOpen && (
                  <div className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 bg-dark-card border border-subtle rounded-xl p-2 min-w-[160px] shadow-2xl">
                    {link.dropdown.map((item) => (
                      <a key={item.label} href={item.href} className="block px-4 py-2 text-slate-text hover:text-white hover:bg-dark-hover text-sm rounded-lg transition-all no-underline">
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ) : (
              <li key={link.label}>
                <a href={link.href} className="text-white/80 hover:text-white text-sm font-medium transition-colors no-underline">
                  {link.label}
                </a>
              </li>
            )
          )}
        </ul>

        <button onClick={() => setMobileOpen((p) => !p)} className="md:hidden text-white bg-transparent border-none cursor-pointer">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-dark-secondary border-t border-card px-8 pb-6">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setMobileOpen(false)}
              className="block py-3 text-slate-text hover:text-white text-base border-b border-card no-underline transition-colors">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}