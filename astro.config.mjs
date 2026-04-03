import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://grooveshare.github.io",
  server: {
    host: true,
    port: 8080
  },
});