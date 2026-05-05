import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: "https://plainsocial.app/",
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          es: "https://plainsocial.app/",
          en: "https://plainsocial.app/en",
        },
      },
    },
    {
      url: "https://plainsocial.app/en",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          es: "https://plainsocial.app/",
          en: "https://plainsocial.app/en",
        },
      },
    },
  ];
}
