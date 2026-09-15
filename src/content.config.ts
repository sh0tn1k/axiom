import { defineCollection, z, reference } from 'astro:content';
import { glob } from 'astro/loaders';

const authors = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/authors' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    bio: z.string(),
    avatar: z.string(),
    socials: z
      .object({
        telegram: z.string().optional(),
        twitter: z.string().optional(),
        github: z.string().optional(),
        email: z.string().optional(),
      })
      .optional(),
  }),
});

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    cover: z.string(),
    rubric: z.enum(['models', 'tools', 'research', 'business']),
    author: reference('authors'),
    featured: z.boolean().default(false),
  }),
});

export const collections = { authors, articles };
