import { useState } from "react";
import { Calendar, Clock, ArrowRight, Bookmark } from "lucide-react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import img1 from "../../public/BuildInnovate.jpg";
import img2 from "../../public/Collaborate.jpg";
import img3 from "../../public/DemoDay.jpg";
import img4 from "../../public/LearnGrow.jpg";
import img5 from "../../public/TechExploration.jpg";
import img6 from "../../public/WorkMode.jpg";

const CATEGORIES = ["All", "Technology", "Design", "Events", "Industry"];

const posts = [
  {
    id: 1,
    title: "The Future of Immersive Brand Experiences in 2026",
    excerpt: "How brands are using spatial computing, LED environments, and generative AI to create never-before-seen consumer touchpoints.",
    category: "Technology",
    date: "3 March 2026",
    readTime: "5 min read",
    image: img1,
    featured: true,
  },
  {
    id: 2,
    title: "Designing for Emotion: What Makes an Exhibition Unforgettable",
    excerpt: "Our design team breaks down the psychology behind immersive space design and how we engineer emotional journeys.",
    category: "Design",
    date: "18 February 2026",
    readTime: "7 min read",
    image: img2,
    featured: false,
  },
  {
    id: 3,
    title: "Behind the Scenes: Building the Bosch Experience Centre",
    excerpt: "A deep dive into how we delivered one of India's most technically complex brand experience spaces in under 90 days.",
    category: "Industry",
    date: "5 February 2026",
    readTime: "9 min read",
    image: img3,
    featured: false,
  },
  {
    id: 4,
    title: "Projection Mapping at Scale: Lessons From GITEX 2025",
    excerpt: "Key technical and creative takeaways from running a 180° projection-mapped dome at the Middle East's biggest tech show.",
    category: "Technology",
    date: "29 January 2026",
    readTime: "6 min read",
    image: img4,
    featured: false,
  },
  {
    id: 5,
    title: "How Event Technology Is Reshaping Corporate Conferences",
    excerpt: "Interactive walls, real-time data visualisation, and audience engagement tools are redefining what a conference can be.",
    category: "Events",
    date: "10 January 2026",
    readTime: "4 min read",
    image: img5,
    featured: false,
  },
  {
    id: 6,
    title: "Our Sustainability Pledge: Green Experiential Installations",
    excerpt: "From low-power LED rigs to reusable modular structures, here is how Crossworks is building more sustainably.",
    category: "Industry",
    date: "22 December 2025",
    readTime: "5 min read",
    image: img6,
    featured: false,
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const featured = posts.find((p) => p.featured);
  const filtered =
    activeCategory === "All"
      ? posts.filter((p) => !p.featured)
      : posts.filter((p) => p.category === activeCategory && !p.featured);

  const showFeatured = activeCategory === "All";

  return (
    <>
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-[50vh] flex flex-col items-center justify-center text-center overflow-hidden bg-dark-primary pt-32 pb-16">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-blue/5 blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto px-8">
          <h1 className="heading-hero font-black text-5xl md:text-6xl text-white leading-tight mb-6">
            Our{" "}
            <span className="text-blue" style={{ textShadow: "0 0 40px rgba(0,188,212,0.5)" }}>
              Blog
            </span>
          </h1>
          <p className="text-slate-text text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Insights, trends, and stories from the world of experiential technology, immersive design, and brand activations.
          </p>
        </div>
      </section>

      {/* ── Filter + Posts ── */}
      <section className="bg-dark-primary px-8 pb-28">
        <div className="max-w-7xl mx-auto">

          {/* Category filter */}
          <div className="flex items-center justify-center gap-2 flex-wrap mb-14">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border cursor-pointer ${
                  activeCategory === cat
                    ? "bg-blue text-dark-primary border-blue"
                    : "bg-transparent text-slate-text border-white/15 hover:border-white/30 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured post — full-width split card */}
          {showFeatured && featured && (
            <div className="grid md:grid-cols-2 bg-dark-card border border-card rounded-2xl overflow-hidden mb-10 hover:border-blue/30 transition-all duration-300 group">
              {/* Image side */}
              <div className="relative h-64 md:h-auto overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-dark-card/60 md:block hidden" />
                <span className="absolute top-4 left-4 flex items-center gap-1.5 bg-blue/90 text-dark-primary text-xs font-bold px-3 py-1.5 rounded-full">
                  <Bookmark size={11} /> Featured
                </span>
              </div>
              {/* Text side */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <span className="inline-block bg-blue/10 text-blue text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4 w-fit border border-blue/20">
                  {featured.category}
                </span>
                <h2 className="text-white font-black text-2xl md:text-3xl mb-4 leading-tight group-hover:text-blue transition-colors">
                  {featured.title}
                </h2>
                <p className="text-slate-text text-sm leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-slate-muted text-xs mb-6">
                  <span className="flex items-center gap-1.5"><Calendar size={12} className="text-blue" /> {featured.date}</span>
                  <span className="flex items-center gap-1.5"><Clock size={12} className="text-blue" /> {featured.readTime}</span>
                </div>
                <a href="#" className="inline-flex items-center gap-2 text-blue font-semibold text-sm hover:gap-3 transition-all no-underline">
                  Read more <ArrowRight size={14} />
                </a>
              </div>
            </div>
          )}

          {/* Regular posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post) => (
              <div
                key={post.id}
                className="group bg-dark-card border border-card rounded-2xl overflow-hidden hover:border-blue/30 transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-card/80 to-transparent" />
                  <span className="absolute top-4 left-4 bg-blue/90 text-dark-primary text-xs font-bold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-white font-bold text-base leading-snug mb-3 group-hover:text-blue transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-text text-sm leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-4 text-slate-muted text-xs">
                      <span className="flex items-center gap-1.5"><Calendar size={11} className="text-blue" /> {post.date}</span>
                      <span className="flex items-center gap-1.5"><Clock size={11} className="text-blue" /> {post.readTime}</span>
                    </div>
                    <a href="#" className="text-blue hover:text-blue-light transition-colors no-underline">
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-slate-muted py-20">No posts found in this category.</p>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
