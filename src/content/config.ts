import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
  }),
});

export const collections = <const>{
  blog: blogCollection,
};
