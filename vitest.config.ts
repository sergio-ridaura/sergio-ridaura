import { getViteConfig } from "astro/config";

/**
 * Vitest configuration of the project.
 * @see https://vitest.dev/config/
 */
export default getViteConfig({
  test: {
    exclude: [
      "node_modules",
      ".astro",
      ".github",
      ".vscode",
      ".git",
      "coverage",
      "bash",
      "public",
      ".vercel",
      "dist",
    ],
    coverage: {
      reporter: ["text", "html"],
    },
  },
});
