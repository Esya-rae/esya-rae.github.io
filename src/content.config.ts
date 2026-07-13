// src/content/config.ts
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { file } from "astro/loaders";

const publicationsCollection = defineCollection({
  loader: file("src/content/list.yml"),
  schema: // Wrapped the schema in an array validator
    z.object({
      id: z.string(),
      title: z.string(),
      authors: z.string(),
      venue: z.string(),
      year: z.number(),
      pdfLink: z.string().optional(),
      codeLink: z.string().optional(),
    })
});

export const collections = {
  'publications': publicationsCollection,
};