export const prerender = true;

import { getCollection } from "astro:content";
import globals from "../globals";
import rss from "@astrojs/rss";

/**
 * RSS.
 */
export async function GET() {
  const posts = await getCollection("blog");
  return rss({
    title: globals.name,
    description: globals.description,
    site: globals.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/blog/${post.slug}/`,
      customData: `
        <language>${post.data.lang}</language>
        <author>${post.author || globals.author.email}</author>
        <image>${globals.site}${post.data.heroImage}</image>
      `,
    })),
  });
}
