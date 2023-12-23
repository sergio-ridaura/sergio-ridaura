import { defineConfig } from "astro/config";
import globals from "./src/globals";
import mdx from "@astrojs/mdx";
import node from "@astrojs/node";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import webmanifest from "astro-webmanifest";

let adapter = vercel({
  analytics: true,
  speedInsights: {
    enabled: true,
  },
});
if (process.argv[3] === "--node" || process.argv[2] === "preview") {
  adapter = node({
    mode: "standalone",
  });
}

/**
 * Astro.js configuration.
 * @see https://astro.build/config
 */
export default defineConfig({
  site: globals.site,
  prefetch: true,
  output: "server",
  adapter: adapter,
  integrations: [
    tailwind(),
    react(),
    mdx(),
    sitemap(),
    webmanifest({
      name: globals.name,
      short_name: globals.short_name,
      description: globals.description,
      start_url: "/",
      display: "standalone",
      icon: "public/icon.svg",
      theme_color: globals.manifest?.theme_color,
      background_color: globals.manifest?.background_color,
      orientation: "portrait-primary",
      config: {
        iconPurpose: ["any", "maskable"],
      },
    }),
  ],
});
