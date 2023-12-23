export const prerender = true;

import globals from "../globals";

/**
 * Robots file generator.
 * @returns https://docs.astro.build/en/install/manual/#4-create-your-first-static-asset
 */
export async function GET(): Promise<Response> {
  return new Response(`User-agent: *
Allow: /
Sitemap: ${globals.site}/sitemap-index.xml`);
}
