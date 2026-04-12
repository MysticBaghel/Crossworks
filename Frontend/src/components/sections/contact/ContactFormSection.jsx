import { useState } from "react";
import { ArrowRight } from "lucide-react";

const clientTypes = ["End Client", "Agency", "Event Company", "Fabricator", "AV Company", "Other"];

export default function ContactFormSection() {
  const [budget, setBudget] = useState(10);
  const [selected, setSelected] = useState([]);
  const [agreed, setAgreed] = useState(false);

  const toggleType = (type) => {
    setSelected((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const formatBudget = (val) => {
    if (val >= 100) return "₹50L+";
    return `₹${val.toFixed(1)}L`;
  };

  return (
    <section className="bg-dark-primary py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-2xl border border-card bg-dark-secondary/60 overflow-hidden grid grid-cols-1 md:grid-cols-[2fr_3fr]">

          {/* Left */}
          <div className="p-10 flex flex-col justify-center border-r border-card">
            <p className="text-blue text-xs font-bold tracking-[0.18em] uppercase flex items-center gap-2 mb-4">
              <span>✉</span> START YOUR JOURNEY
            </p>
            <h2 className="font-bold text-3xl text-white leading-snug mb-5">
              Let's Innovate Together
            </h2>
            <p className="text-slate-text text-sm leading-relaxed">
              We're ready to transform your ideas with our cutting-edge solutions in AR, VR, Holograms, Interactive Screens, and more. Have a question or want to collaborate? Fill out the form.
            </p>
          </div>

          {/* Right — Form */}
          <div className="p-10 space-y-5">
            {/* Row 1 */}
            <div className="grid grid-cols-2 gap-4">
              <input placeholder="Full Name*" className="bg-dark-card border border-card rounded-lg px-4 py-3 text-sm text-white placeholder:text-slate-muted outline-none focus:border-subtle transition-colors" />
              <input placeholder="Email*" type="email" className="bg-dark-card border border-card rounded-lg px-4 py-3 text-sm text-white placeholder:text-slate-muted outline-none focus:border-subtle transition-colors" />
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-[auto_1fr_1fr] gap-4">
              <select className="bg-dark-card border border-card rounded-lg px-3 py-3 text-sm text-slate-text outline-none focus:border-subtle transition-colors cursor-pointer">
                <option>+91</option>
                <option>+1</option>
                <option>+44</option>
                <option>+971</option>
              </select>
              <input placeholder="Phone*" type="tel" className="bg-dark-card border border-card rounded-lg px-4 py-3 text-sm text-white placeholder:text-slate-muted outline-none focus:border-subtle transition-colors" />
              <input placeholder="Company Name" className="bg-dark-card border border-card rounded-lg px-4 py-3 text-sm text-white placeholder:text-slate-muted outline-none focus:border-subtle transition-colors" />
            </div>

            {/* Client type */}
            <div className="flex flex-wrap gap-2">
              {clientTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => toggleType(type)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
                    selected.includes(type)
                      ? "border-blue text-blue bg-blue/10"
                      : "border-card text-slate-text hover:border-subtle hover:text-white"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Budget slider */}
            <div>
              <div className="flex justify-between text-xs text-slate-muted mb-2">
                <span>₹0.3L</span>
                <span className="text-blue font-semibold">Budget Range</span>
                <span>₹50L+</span>
              </div>
              <input
                type="range" min="0.3" max="100" step="0.1"
                value={budget}
                onChange={(e) => setBudget(parseFloat(e.target.value))}
                className="w-full accent-blue cursor-pointer"
              />
              <p className="text-center text-blue text-sm font-semibold mt-1">{formatBudget(budget)}</p>
            </div>

            {/* Message */}
            <textarea
              placeholder="Please enter your project details"
              rows={4}
              className="w-full bg-dark-card border border-card rounded-lg px-4 py-3 text-sm text-white placeholder:text-slate-muted outline-none focus:border-subtle transition-colors resize-none"
            />

            {/* Checkbox */}
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="accent-blue w-4 h-4 cursor-pointer"
              />
              <span className="text-slate-text text-sm">
                I have read the{" "}
                <a href="#" className="text-blue no-underline hover:underline">Terms and Conditions</a>
                {" "}& {" "}
                <a href="#" className="text-blue no-underline hover:underline">Privacy Notice</a>
                {" "}agreement
              </span>
            </label>

            {/* Submit */}
            <button
              className="px-8 py-3 rounded-lg bg-blue text-dark-primary font-bold text-sm transition-all hover:bg-blue-light hover:shadow-[0_0_20px_rgba(13,162,231,0.3)] cursor-pointer"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
