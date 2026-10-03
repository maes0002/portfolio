import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import animated from "tailwindcss-animated";
import intersect from "tailwindcss-intersect";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          400: "#00E4F5",
          500: "#006269",
          600: "#006D75",
        },
        secondary: {
          400: "#F5E400",
          500: "#F5A600",
          600: "#F57A00",
        },
      },
      fontFamily: {
        display: ["Honk", "monospace"],
        sans: ["Geist Mono", "sans-serif"],
        serif: ["Domine", "serif"],
      },
    },
  },
  plugins: [forms(), typography(), animated, intersect],
};
