import { defineCollection, z } from "astro:content";

/**
 * Blog collection.
 */
const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    author: z.string().optional(),
    lang: z.string().optional(),
    keywords: z.string().optional(),
  }),
});

export const collections = { blog };
