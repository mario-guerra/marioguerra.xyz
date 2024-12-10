// https://docs.astro.build/en/guides/content-collections/#defining-collections

import { z, defineCollection } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';

const productsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      main: z.object({
        id: z.number(),
        content: z.string(),
        imgCard: image(),
        imgMain: image(),
        imgAlt: z.string(),
      }),
      tabs: z.array(
        z.object({
          id: z.string(),
          dataTab: z.string(),
          title: z.string(),
        })
      ),
      longDescription: z.object({
        title: z.string(),
        subTitle: z.string(),
        btnTitle: z.string(),
        btnURL: z.string(),
      }),
      descriptionList: z.array(
        z.object({
          title: z.string(),
          subTitle: z.string(),
        })
      ),
      specificationsLeft: z.array(
        z.object({
          title: z.string(),
          subTitle: z.string(),
        })
      ),
      specificationsRight: z
        .array(
          z.object({
            title: z.string(),
            subTitle: z.string(),
          })
        )
        .optional(),
      tableData: z
        .array(
          z.object({
            feature: z.array(z.string()),
            description: z.array(z.array(z.string())),
          })
        )
        .optional(),
      blueprints: z.object({
        first: image().optional(),
        second: image().optional(),
      }),
    }),
});

const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),                           // Blog post title
      description: z.string(),                    // Blog post description
      author: z.string(),                         // Author's name
      date: z.string().transform((str) => new Date(str)), // Convert string to Date object
      image: z.string().refine((value) => value.endsWith('.jpg') || value.endsWith('.png') || value.endsWith('.jpeg'), {
        message: "Image must be a .jpg or .png file",
      }),                                         // Valid image formats
      categories: z.array(z.string()),            // Required array of categories
      tags: z.array(z.string()).optional(),       // Optional array of tags
    }),
});

const insightsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      cardImage: image(),
      cardImageAlt: z.string(),
    }),
});

export const collections = {
  docs: defineCollection({ schema: docsSchema() }),
  products: productsCollection,
  blog: blogCollection,
  insights: insightsCollection,
};
