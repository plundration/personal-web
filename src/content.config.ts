import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const projects = defineCollection({
    loader: glob({ pattern: '**/*.(md)', base: './src/pages/projekty' }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            slug: z.string(),
            date: z.string(),
            tags: z.array(z.string()),
            summary: z.string(),
            status: z.enum(['DEPLOYED', 'ARCHIVED', 'IN_DEVELOPMENT']),

            role: z.string().optional(),
            team: z.string().optional(),
            client: z.string().optional(),
            coverImage: image().optional(),
            liveUrl: z.string().url().optional(),
        }),
});

export const collections = { projects };
