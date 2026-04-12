import { useState } from "react";
import { Download } from "lucide-react";

export default function PresentationSection() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (form.firstName && form.lastName && form.email) setSubmitted(true);
  };

  return (
    <section className="bg-dark-secondary py-24 px-8 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-2xl mx-auto relative z-10 text-center">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-subtle text-blue text-xs font-bold tracking-[0.18em] uppercase mb-6">
          <Download size={12} /> Company Presentation
        </span>
        <h2 className="font-black text-4xl md:text-5xl text-white mb-4">Download Our Presentation</h2>
        <p className="text-slate-text leading-relaxed mb-10 max-w-md mx-auto">
          Get a detailed overview of our capabilities, services, and portfolio. Enter your business email and we'll send it right over.
        </p>

        <div className="bg-dark-card border border-subtle rounded-2xl p-8">
          {submitted ? (
            <div className="py-8">
              <div className="w-14 h-14 rounded-full bg-blue/10 flex items-center justify-center text-blue text-2xl mx-auto mb-4">✓</div>
              <h3 className="font-bold text-white text-lg mb-2">You're all set!</h3>
              <p className="text-slate-text text-sm">
                We'll send the presentation to <span className="text-blue">{form.email}</span> shortly.
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <Field label="First Name *" placeholder="John" value={form.firstName}
                  onChange={(v) => setForm((f) => ({ ...f, firstName: v }))} />
                <Field label="Last Name *" placeholder="Doe" value={form.lastName}
                  onChange={(v) => setForm((f) => ({ ...f, lastName: v }))} />
              </div>
              <div className="mb-6">
                <Field label="Business Email *" placeholder="john@yourcompany.com" type="email"
                  value={form.email} onChange={(v) => setForm((f) => ({ ...f, email: v }))} />
              </div>
              <button onClick={handleSubmit}
                className="w-full py-4 bg-blue hover:bg-blue-light text-dark-primary font-bold rounded-xl flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(0,188,212,0.4)] cursor-pointer border-none text-base">
                <Download size={16} /> Send Me the Presentation
              </button>
              <p className="text-slate-muted text-xs mt-3">Only business email addresses are accepted. We respect your privacy.</p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({ label, placeholder, value, onChange, type = "text" }) {
  const [focused, setFocused] = useState(false);
  return (
    <div className="text-left">
      <label className="block text-slate-text text-xs font-medium mb-2">{label}</label>
      <input
        type={type} placeholder={placeholder} value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        className={`w-full px-4 py-3 bg-dark-secondary border rounded-xl text-white text-sm font-sans outline-none transition-colors placeholder:text-slate-muted ${
          focused ? "border-blue" : "border-card"
        }`}
      />
    </div>
  );
}
