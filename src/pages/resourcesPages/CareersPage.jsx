import { useState } from "react";
import { MapPin, Briefcase, Users, Clock, ArrowRight, X } from "lucide-react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

const jobs = [
  {
    id: 1,
    title: "Event & Advertising Operations Executive",
    location: "Bengaluru",
    type: "Full-time",
    vacancies: "1 vacancy",
    posted: "Posted March 2026",
    description:
      "We are seeking a detail-oriented and dynamic Event & Advertising Operations Executive to support the planning, execution, and post-event processes of various campaigns, events, and brand activations. The ideal candidate will have hands-on experience in event logistics, vendor coordination, and on-ground execution.",
    responsibilities: [
      "Plan and coordinate end-to-end event logistics across multiple simultaneous projects.",
      "Liaise with vendors, venues, and internal teams to ensure seamless delivery.",
      "Manage on-ground setup, teardown, and real-time troubleshooting during events.",
      "Track campaign performance metrics and prepare post-event reports.",
      "Support advertising operations including media placements and activation timelines.",
    ],
    requirements: [
      "1–3 years of experience in event management or brand activations.",
      "Strong organisational and multitasking skills.",
      "Willingness to travel and work flexible hours including weekends.",
      "Proficiency in MS Office; familiarity with project management tools is a plus.",
      "Excellent communication skills in English and Kannada/Hindi.",
    ],
  },
  {
    id: 2,
    title: "Senior AV Solutions Engineer",
    location: "Bengaluru",
    type: "Full-time",
    vacancies: "2 vacancies",
    posted: "Posted February 2026",
    description:
      "Join our technical delivery team as a Senior AV Solutions Engineer. You will be responsible for designing, installing, and commissioning complex audiovisual systems for corporate experience centres, museums, and large-scale exhibitions.",
    responsibilities: [
      "Design AV system architectures for experience centres and exhibition spaces.",
      "Lead on-site installation, commissioning, and handover of AV systems.",
      "Develop technical documentation and user manuals for delivered systems.",
      "Mentor junior engineers and conduct internal training sessions.",
      "Collaborate with the design team to ensure technical feasibility of creative concepts.",
    ],
    requirements: [
      "5+ years of experience in professional AV installation and integration.",
      "Proficiency with systems from Crestron, Extron, or AMX.",
      "Experience with video distribution, signal processing, and control systems.",
      "CTS certification preferred.",
      "Ability to read and produce technical drawings and CAD layouts.",
    ],
  },
  {
    id: 3,
    title: "Immersive Experience Designer",
    location: "Bengaluru / Remote",
    type: "Full-time",
    vacancies: "1 vacancy",
    posted: "Posted January 2026",
    description:
      "We're looking for a creative technologist to join our experience design team. As an Immersive Experience Designer you'll bridge concept and execution — translating brand briefs into spatial, interactive, and multi-sensory experiences.",
    responsibilities: [
      "Develop spatial and interactive design concepts for exhibitions, brand activations, and innovation centres.",
      "Create detailed design documentation including mood boards, 3D layouts, and interaction flows.",
      "Collaborate with AV engineers and software developers to bring designs to life.",
      "Present concepts to clients and incorporate feedback through design iterations.",
      "Stay ahead of industry trends in immersive tech, projection mapping, and XR.",
    ],
    requirements: [
      "3+ years of experience in experiential, spatial, or interaction design.",
      "Strong portfolio demonstrating immersive or large-format design work.",
      "Proficiency in tools such as Unreal Engine, TouchDesigner, or similar.",
      "Understanding of AV technologies and their design implications.",
      "Excellent visual communication and storytelling skills.",
    ],
  },
];

export default function CareersPage() {
  const [openJob, setOpenJob] = useState(null);

  return (
    <>
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-[50vh] flex flex-col items-center justify-center text-center overflow-hidden bg-dark-primary pt-32 pb-16">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-blue/5 blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto px-8">
          <h1 className="heading-hero font-black text-5xl md:text-6xl text-white leading-tight mb-6">
            Join Our Team
          </h1>
          <p className="text-slate-text text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Be part of a team that's shaping the future of immersive experiences. We're always looking for talented, passionate individuals.
          </p>
        </div>
      </section>

      {/* ── Jobs list ── */}
      <section className="bg-dark-primary px-8 pb-28">
        <div className="max-w-5xl mx-auto flex flex-col gap-5">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-dark-card border border-card rounded-2xl p-7 hover:border-blue/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Info */}
                <div className="flex-1">
                  <h3 className="text-white font-bold text-xl mb-3">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <span className="flex items-center gap-1.5 text-slate-text text-sm">
                      <MapPin size={14} className="text-blue" /> {job.location}
                    </span>
                    <span className="flex items-center gap-1.5 text-slate-text text-sm">
                      <Briefcase size={14} className="text-blue" /> {job.type}
                    </span>
                    <span className="flex items-center gap-1.5 text-slate-text text-sm">
                      <Users size={14} className="text-blue" /> {job.vacancies}
                    </span>
                    <span className="flex items-center gap-1.5 text-slate-text text-sm">
                      <Clock size={14} className="text-blue" /> {job.posted}
                    </span>
                  </div>
                  <p className="text-slate-text text-sm leading-relaxed line-clamp-3">
                    {job.description}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex gap-3 shrink-0 self-start md:self-center">
                  <button
                    onClick={() => setOpenJob(openJob?.id === job.id ? null : job)}
                    className="px-5 py-2.5 border border-white/20 hover:border-blue/40 text-white text-sm font-semibold rounded-lg transition-all cursor-pointer bg-transparent hover:bg-white/5"
                  >
                    Details
                  </button>
                  <a
                    href="mailto:hello@crossworksdi.com"
                    className="px-5 py-2.5 bg-blue hover:bg-blue-light text-dark-primary text-sm font-bold rounded-lg transition-all no-underline"
                  >
                    Apply Now
                  </a>
                </div>
              </div>

              {/* Expandable details */}
              {openJob?.id === job.id && (
                <div className="mt-6 pt-6 border-t border-card animate-fade-up opacity-0 [animation-fill-mode:forwards]">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-white font-bold mb-3">Responsibilities</h4>
                      <ul className="space-y-2">
                        {job.responsibilities.map((r, i) => (
                          <li key={i} className="flex items-start gap-2 text-slate-text text-sm">
                            <ArrowRight size={14} className="text-blue mt-0.5 shrink-0" /> {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((r, i) => (
                          <li key={i} className="flex items-start gap-2 text-slate-text text-sm">
                            <ArrowRight size={14} className="text-blue mt-0.5 shrink-0" /> {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <button
                    onClick={() => setOpenJob(null)}
                    className="mt-6 flex items-center gap-1.5 text-slate-muted hover:text-white text-xs transition-colors cursor-pointer bg-transparent border-none"
                  >
                    <X size={13} /> Close details
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
