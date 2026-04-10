# Crossworks — Website

## Getting Started

```bash
npm install
npm run dev
```

## Folder Structure

```
crossworks/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── src/
    ├── main.jsx                        # React entry point
    ├── App.jsx                         # Root: Navbar + Page + Footer
    ├── styles/
    │   └── globals.css                 # CSS variables, keyframes, resets
    ├── pages/
    │   └── HomePage.jsx                # Assembles all home sections
    ├── components/
    │   ├── layout/
    │   │   ├── Navbar.jsx              # Fixed top nav with dropdown
    │   │   └── Footer.jsx              # Footer with links & ISO badges
    │   ├── sections/
    │   │   └── home/
    │   │       ├── HeroSection.jsx         # Cycling words hero
    │   │       ├── TrustedPartnersSection.jsx  # Marquee logos
    │   │       ├── ExpertiseSection.jsx    # Tab selector + content
    │   │       ├── ProductsSection.jsx     # Product grid cards
    │   │       ├── PortfolioSection.jsx    # Portfolio carousel
    │   │       ├── GlobalPresenceSection.jsx   # Map + region cards
    │   │       └── PresentationSection.jsx # Lead capture form
    │   └── ui/                         # (reserved for shared UI components)
    ├── hooks/                          # (reserved for custom hooks)
    ├── utils/                          # (reserved for helpers)
    └── assets/                         # (place images/icons here)
```

## Adding Background Images

Each section has a placeholder `div` where the background goes.
Replace it with an `<img>` or CSS `background-image`:

```jsx
// In HeroSection.jsx — find the placeholder div and replace:
<img
  src="/assets/hero-bg.jpg"
  alt=""
  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.5 }}
/>
```

## Adding New Pages

1. Create `src/pages/NewPage.jsx`
2. Create `src/components/sections/new-page/` folder with section components
3. Add route in `App.jsx` (install `react-router-dom` first)

## Animated Cycling Words (Hero)

Edit the `CYCLING_WORDS` array in `HeroSection.jsx`:

```js
const CYCLING_WORDS = ["Immersive", "Innovative", "Next Generation", "Memorable"];
```
