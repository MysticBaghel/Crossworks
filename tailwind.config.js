/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cyan: {
          DEFAULT: "#00bcd4",
          light: "#26d9ef",
        },
        dark: {
          primary: "#040d18",
          secondary: "#071220",
          card: "#0a1929",
          hover: "#0d2137",
        },
        slate: {
          text: "#8ca0b8",
          muted: "#4a6580",
        },
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(28px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        scrollBounce: {
          "0%, 100%": { transform: "translateY(0)", opacity: 1 },
          "50%": { transform: "translateY(6px)", opacity: 0.4 },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(0,188,212,0.3)" },
          "50%": { boxShadow: "0 0 20px 8px rgba(0,188,212,0.3)" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        marquee: "marquee 30s linear infinite",
        "scroll-bounce": "scrollBounce 1.5s infinite",
        "pulse-glow": "pulseGlow 2s infinite",
      },
      dropShadow: {
        cyan: [
          "0 0 20px rgba(0,188,212,0.8)",
          "0 0 40px rgba(0,188,212,0.5)",
          "0 0 80px rgba(0,188,212,0.3)",
        ],
      },
      backgroundImage: {
        "card-gradient": "linear-gradient(to top, rgba(0,0,0,0.8) 30%, transparent 100%)",
      },
      borderColor: {
        subtle: "rgba(0,188,212,0.18)",
        card: "rgba(255,255,255,0.06)",
      },
    },
  },
  plugins: [],
};
