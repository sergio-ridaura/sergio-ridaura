import pack from "../package.json";
import type GlobalsType from "./globals.type";

/**
 * Globals variables.
 * @note product information
 */
const globals: GlobalsType = {
  name: "Astro.js Blog",
  short_name: "Astro Blog",
  description: pack.description,
  author: pack.author,
  keywords: pack.keywords,
  site: "https://astro-blog-sr.vercel.app",
  manifest: {
    theme_color: "#007bff",
    background_color: "#000000",
  },
};

export default globals;
