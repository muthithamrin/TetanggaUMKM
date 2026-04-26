import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-inter)", "sans-serif"]
      },
      colors: {
        cream: "rgb(var(--color-cream) / <alpha-value>)",
        cocoa: "rgb(var(--color-cocoa) / <alpha-value>)",
        caramel: "rgb(var(--color-caramel) / <alpha-value>)",
        beige: "rgb(var(--color-beige) / <alpha-value>)",
        sand: "rgb(var(--color-sand) / <alpha-value>)",
        ink: "rgb(var(--color-ink) / <alpha-value>)"
      },
      boxShadow: {
        soft: "0 20px 60px rgba(88, 57, 34, 0.12)"
      },
      backgroundImage: {
        "paper-glow":
          "radial-gradient(circle at top left, rgba(231, 195, 150, 0.35), transparent 35%), radial-gradient(circle at bottom right, rgba(156, 107, 62, 0.18), transparent 30%)"
      }
    }
  },
  plugins: []
};

export default config;
