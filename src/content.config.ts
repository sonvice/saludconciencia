import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default('Shirley Gaviria'),
    authorRole: z.string().default('Bacterióloga & Paciente de LMC (+22 años)'),
    authorAvatar: z.string().default('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80'),
    category: z.enum([
      'Diagnóstico',
      'Tratamientos e ITKs',
      'Vida Cotidiana',
      'Embarazo y Fertilidad',
      'Salud Mental',
      'Nutrición y Mitos'
    ]),
    image: z.string(),
    imageAlt: z.string(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    readingTime: z.string().default('5 min de lectura'),
  }),
});

export const collections = { blog };
