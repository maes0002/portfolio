import { defineConfig } from "astro/config";
import alpinejs from "@astrojs/alpinejs";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default defineConfig({
  vite: {
    css: {
      postcss: {
        plugins: [tailwindcss({ config: "./tailwind.config.mjs" }), autoprefixer()],
      },
    },
  },
  integrations: [alpinejs()],
});
