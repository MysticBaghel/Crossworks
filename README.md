# Crossworks — Immersive Technology Web App

A modern, responsive marketing website for **Crossworks**, a company specializing in immersive technology experiences — including interactive museums, brand activations, experiential marketing, and innovation centers.

Built with **React 18**, **Vite**, **Tailwind CSS v4**, and **React Router v7**.

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/MysticBaghel/Crossworks.git
cd Crossworks/Frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be running at `http://localhost:5173`

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build locally |

---

## 📁 Project Structure

```
Crossworks/
├── .gitignore
├── README.md
│
└── Frontend/
    ├── index.html                        # App entry point
    ├── vite.config.js                    # Vite configuration
    ├── tailwind.config.js                # Tailwind theme & custom tokens
    ├── package.json
    │
    └── src/
        ├── main.jsx                      # React root, router setup
        ├── App.jsx                       # Route definitions
        │
        ├── styles/
        │   └── globals.css               # Global styles, font imports, CSS vars
        │
        ├── Public/                       # Static image assets
        │   ├── logo.png
        │   ├── bg01.jpg – bg04.jpg       # Hero background images
        │   ├── 1.jpg – 10.jpg            # Portfolio/gallery images
        │   └── *.jpg                     # Named lifestyle/event images
        │
        ├── data/
        │   └── expertiseData.js          # Content data for all expertise pages
        │
        ├── pages/
        │   ├── HomePage.jsx
        │   ├── ProductsPage.jsx
        │   ├── RentalsPage.jsx
        │   ├── ServicesPage.jsx
        │   ├── AboutPage.jsx
        │   ├── ContactPage.jsx
        │   ├── ExpertisePage.jsx         # Dynamic page driven by slug + expertiseData
        │   └── resourcesPages/
        │       ├── BlogPage.jsx
        │       ├── CareersPage.jsx
        │       ├── ExhibitionCalendarPage.jsx
        │       └── PortfolioPage.jsx
        │
        └── components/
            ├── layout/
            │   ├── Navbar.jsx            # Fixed top nav with dropdown + mobile menu
            │   └── Footer.jsx
            │
            └── sections/
                ├── home/
                │   ├── HeroSection.jsx
                │   ├── ProductsSection.jsx
                │   ├── ExpertiseSection.jsx
                │   ├── PresentationSection.jsx
                │   ├── PortfolioSection.jsx
                │   ├── GlobalPresenceSection.jsx
                │   └── TrustedPartnersSection.jsx
                ├── about/
                │   ├── AboutHeroSection.jsx
                │   ├── AboutMissionSection.jsx
                │   ├── AboutJourneySection.jsx
                │   ├── AboutLifeSection.jsx
                │   ├── AboutPartnersSection.jsx
                │   └── AboutCTASection.jsx
                ├── contact/
                │   ├── ContactHeroSection.jsx
                │   └── ContactFormSection.jsx
                ├── products/
                │   ├── ProductsHeroSection.jsx
                │   ├── ProductsGridSection.jsx
                │   └── ProductsCTASection.jsx
                ├── rentals/
                │   ├── RentalsHeroSection.jsx
                │   └── RentalsCTASection.jsx
                └── services/
                    ├── ServicesHeroSection.jsx
                    ├── ServicesExpertiseSection.jsx
                    ├── ServicesPoweredBySection.jsx
                    ├── ServicesProcessSection.jsx
                    └── ServicesCTASection.jsx
```

---

## 🛣️ Routes

| Path | Page |
|---|---|
| `/` | Home |
| `/products` | Products |
| `/rentals` | Rentals |
| `/services` | Services |
| `/about` | About Us |
| `/contacts` | Contact |
| `/expertise/:slug` | Dynamic Expertise page |
| `/portfolio` | Portfolio |
| `/blog` | Blog |
| `/careers` | Careers |
| `/exhibition-calendar` | Exhibition Calendar |

### Expertise Slugs

The `/expertise/:slug` route is driven by `src/data/expertiseData.js`. Valid slugs are:

- `experiential-marketing`
- `interactive-museums`
- `event-conferences`
- `brand-activations`
- `immersive-exhibitions`
- `innovation-center`

---

## 🎨 Design System

Custom Tailwind tokens defined in `tailwind.config.js`:

### Colors

| Token | Value | Usage |
|---|---|---|
| `blue` | `#00bcd4` | Primary accent, CTAs, headings |
| `blue-light` | `#26d9ef` | Hover states |
| `dark-primary` | `#040d18` | Page background |
| `dark-secondary` | `#071220` | Section backgrounds, navbar |
| `dark-card` | `#0a1929` | Card backgrounds |
| `dark-hover` | `#0d2137` | Hover backgrounds |
| `slate-text` | `#8ca0b8` | Body text, descriptions |
| `slate-muted` | `#4a6580` | Muted/secondary text |

### Border Tokens

| Token | Value |
|---|---|
| `border-subtle` | `rgba(0,188,212,0.18)` |
| `border-card` | `rgba(255,255,255,0.06)` |

### Typography

- **Font**: [Montserrat](https://fonts.google.com/specimen/Montserrat) (imported via Google Fonts in `globals.css`)

### Animations

| Class | Effect |
|---|---|
| `animate-fade-up` | Fade in + slide up on load |
| `animate-fade-in` | Fade in on load |
| `animate-marquee` | Infinite horizontal scroll (partner logos) |
| `animate-scroll-bounce` | Bouncing scroll indicator |
| `animate-pulse-glow` | Pulsing cyan glow on elements |

---

## 🧩 Key Components

### `Navbar.jsx`
- Fixed top navigation with scroll-based background blur
- Dropdown menu for Resources links
- Click-outside detection to close dropdown
- Responsive mobile hamburger menu

### `ExpertisePage.jsx`
- Dynamic page using `useParams()` to read `:slug`
- Fixed secondary subnav bar for switching between expertise areas
- Full-screen hero with background image per expertise
- Content cards grid pulled from `expertiseData.js`

### `expertiseData.js`
Central data file for all expertise pages. Each entry contains:
```js
{
  slug: "immersive-exhibitions",
  label: "Immersive Exhibitions",
  tagline: "Full-Sensory Experiences",
  heading: "Design Exhibition Spaces That Captivate Every Sense",
  description: "...",
  bg: "/src/Public/bg02.png",
  deliverTitle: "What We Deliver",
  deliverSubtitle: "...",
  cards: [
    { title: "...", desc: "..." },
  ]
}
```

---

## 📦 Dependencies

### Production

| Package | Version | Purpose |
|---|---|---|
| `react` | ^18.3.1 | UI framework |
| `react-dom` | ^18.3.1 | DOM rendering |
| `react-router-dom` | ^7.14.0 | Client-side routing |
| `lucide-react` | ^0.383.0 | Icon library |

### Development

| Package | Version | Purpose |
|---|---|---|
| `vite` | ^5.4.2 | Build tool & dev server |
| `@vitejs/plugin-react` | ^4.3.1 | React Fast Refresh |
| `tailwindcss` | ^4.0.0 | Utility-first CSS |
| `@tailwindcss/vite` | ^4.0.0 | Tailwind Vite integration |

---

## 📝 Notes

- Images are stored in `src/Public/` and referenced via relative import paths or direct strings in data files.
- The project uses **Tailwind CSS v4** which has a different config approach from v3 — the `@tailwindcss/vite` plugin replaces PostCSS setup.
- All pages follow a consistent section-based composition pattern — pages import and compose section components rather than containing inline JSX.
