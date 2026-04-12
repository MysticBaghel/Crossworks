import img1 from "../../../public/Collaborate.jpg";
import img2 from "../../../public/BuildInnovate.jpg";
import img3 from "../../../public/Celebrate.jpg";
import img4 from "../../../public/LearnGrow.jpg";
import img5 from "../../../public/DemoDay.jpg";
import img6 from "../../../public/TeamOutings.jpg";
import img7 from "../../../public/Games.jpg";
import img8 from "../../../public/OnTheFloor.jpg";
import img9 from "../../../public/ColorDay.jpg";
import img10 from "../../../public/FestivalVibes.jpg";
import img11 from "../../../public/TechExploration.jpg";
import img12 from "../../../public/WorkMode.jpg";

const gallery = [
  { img: img1,  title: "Collaborate & Create",   desc: "Our teams brainstorm together, merging creativity with cutting-edge technology to..." },
  { img: img2,  title: "Build & Innovate",        desc: "Our innovation lab is where ideas become reality — from LED sculptures to interactiv..." },
  { img: img3,  title: "Celebrate & Deliver",     desc: "Every successful project launch is a celebration. We pour our passion into ever..." },
  { img: img4,  title: "Learn & Grow",            desc: "A culture of continuous learning where engineers, designers, and strategists push..." },
  { img: img5,  title: "Demo Day",                desc: "Testing and showcasing our latest interactive creations with the whole team." },
  { img: img6,  title: "Team Outings",            desc: "We work hard and play harder — bonding beyond the office walls." },
  { img: img7,  title: "Fun & Games",             desc: "From Jenga battles to game nights, we keep the team spirit alive." },
  { img: img8,  title: "On the Floor",            desc: "Our team representing Crossworks at exhibitions and industry events worldwide." },
  { img: img9,  title: "Color Days",              desc: "Themed dress-up days that bring color, joy, and unity to our workspace." },
  { img: img10, title: "Festival Vibes",          desc: "Celebrating festivals and traditions together as one big family." },
  { img: img11, title: "New Tech Exploration",    desc: "Whiteboarding sessions and brainstorming to explore emerging technologies and..." },
  { img: img12, title: "Serious Work Mode",       desc: "Heads down, focused, and delivering — our team in full execution mode." },
];

function GalleryCard({ item, className = "" }) {
  return (
    <div className={`relative rounded-2xl overflow-hidden group cursor-default ${className}`}>
      <img
        src={item.img}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 p-5 z-10">
        <h3 className="font-bold text-white text-base mb-1">{item.title}</h3>
        <p className="text-slate-text text-xs leading-relaxed line-clamp-2">{item.desc}</p>
      </div>
    </div>
  );
}

export default function AboutLifeSection() {
  return (
    <section className="bg-dark-secondary py-24 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="heading-hero font-black text-white">
            Life at <span className="text-blue text-glow-blue">Crossworks</span>
          </h2>
          <p className="text-slate-text mt-4 text-base">
            Where creativity meets technology — a glimpse inside our world.
          </p>
        </div>

        {/* Row 1 — 4 cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          {gallery.slice(0, 4).map((item, i) => (
            <GalleryCard key={i} item={item} className="h-64" />
          ))}
        </div>

        {/* Row 2 — 4 cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          {gallery.slice(4, 8).map((item, i) => (
            <GalleryCard key={i} item={item} className="h-64" />
          ))}
        </div>

        {/* Row 3 — 4 cards (was 2, now shows all remaining) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {gallery.slice(8, 12).map((item, i) => (
            <GalleryCard key={i} item={item} className="h-64" />
          ))}
        </div>
      </div>
    </section>
  );
}