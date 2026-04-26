import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    // Identity
    title: z.string(),
    date: z.coerce.date(),
    author: z.string(),
    category: z.string(),

    // Display
    excerpt: z.string(),
    image: z.string(),
    imageAlt: z.string().optional(),

    // SEO
    keywords: z.array(z.string()).default([]),

    // Status
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),

    // Optional overrides — only set when defaults don't fit the spec
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    updated: z.coerce.date().optional(),
    ogImage: z.string().optional(),
  }),
});

export const collections = { blog };
