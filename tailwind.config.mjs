/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

/**
 * TailwindCSS configuration.
 * @see https://tailwindcss.com/docs/content-configuration
 */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    colors: {
      /** Light and dark */
      transparent: colors.transparent,
      light: colors.white,
      dark: "#111",
      /** Type */
      primary: colors.red,
      secondary: colors.orange,
      success: colors.green,
      danger: colors.red,
      warning: colors.yellow,
      info: colors.sky,
      /** Colors */
      amber: colors.amber,
      blue: colors.blue,
      cyan: colors.cyan,
      emerald: colors.emerald,
      fuchsia: colors.fuchsia,
      gray: colors.gray,
      green: colors.green,
      indigo: colors.indigo,
      lime: colors.lime,
      magenta: colors.pink,
      neutral: colors.neutral,
      orange: colors.orange,
      pink: colors.pink,
      purple: colors.purple,
      red: colors.red,
      rose: colors.rose,
      sky: colors.sky,
      slate: colors.slate,
      stone: colors.stone,
      teal: colors.teal,
      violet: colors.violet,
      yellow: colors.yellow,
      zinc: colors.zinc,
    },
    fontFamily: {
      sans: ["AtkinsonHyperlegible"],
    },
    extend: {
      typography: () => ({
        lg: {
          css: {
            h1: {
              fontSize: 36,
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
