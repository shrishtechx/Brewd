/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F7F1E6",
        "off-white": "#FBF7EF",
        beige: "#E8DCC6",
        sand: "#D9C7A6",
        terracotta: "#B5552F",
        "terracotta-soft": "#C9764E",
        brass: "#B08A3E",
        "brass-light": "#D4AF5A",
        "coffee-brown": "#3A2317",
        "coffee-mid": "#5A3A26",
        roasted: "#2A160D",
        chicory: "#6E4B7A",
        // Accent colors sampled from the four-quadrant brand mark
        "brand-red": "#AE3E29",
        "brand-amber": "#E8A012",
        "brand-blue": "#3C6E93",
        "brand-brown": "#4E2A16",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      fontFamily: {
        serif: ['"Playfair Display"', "Georgia", "serif"],
        body: ["Poppins", "system-ui", "sans-serif"],
      },
      keyframes: {
        steam: {
          "0%": { transform: "translateY(0) scaleX(1)", opacity: "0" },
          "30%": { opacity: "0.5" },
          "100%": { transform: "translateY(-40px) scaleX(1.6)", opacity: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-25%)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        steam: "steam 3s ease-out infinite",
        marquee: "marquee 30s linear infinite",
        "spin-slow": "spin-slow 24s linear infinite",
      },
    },
  },
  plugins: [],
};
