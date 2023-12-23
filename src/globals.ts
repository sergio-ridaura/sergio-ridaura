import pack from "../package.json";
import type GlobalsType from "./globals.type";

/**
 * Globals variables.
 * @note product information
 */
const globals: GlobalsType = {
  name: "Sergio Ridaura",
  short_name: "Sergio Ridaura",
  description: pack.description,
  author: pack.author,
  keywords: pack.keywords,
  site: "https://sergio-ridaura.vercel.app",
  manifest: {
    theme_color: "#ff0000",
    background_color: "#000000",
  },
};

export default globals;
