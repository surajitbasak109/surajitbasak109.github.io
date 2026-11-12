import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog posts: add a .md file to src/content/blog/
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

// Interview-prep and study notes: add a .md file to src/content/notes/
const notes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    group: z.string().default('General'),
    order: z.number().default(0),
    difficulty: z.enum(['Easy', 'Medium', 'Hard']).optional(),
    link: z.string().url().optional(),
  }),
});

export const collections = { blog, notes };
