import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
    type: 'data',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        longDescription: z.string(),
        technologies: z.array(z.string()),
        category: z.enum(['web', 'blockchain', 'backend', 'fullstack', 'other']),
        featured: z.boolean().default(false),
        status: z.enum(['completed', 'in-progress', 'planned']).default('completed'),
        links: z.object({
            github: z.string().optional(),
            live: z.string().optional(),
            demo: z.string().optional(),
        }).optional(),
        metrics: z.object({
            users: z.string().optional(),
            performance: z.string().optional(),
            impact: z.string().optional(),
        }).optional(),
        image: z.string().optional(),
        order: z.number().default(0),
    }),
});

export const collections = {
    projects: projectsCollection,
};
