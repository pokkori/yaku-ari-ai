import { MetadataRoute } from "next";

const BASE_URL = "https://myakuari-ai.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: `${BASE_URL}`, lastModified: new Date("2026-03-31"), changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${BASE_URL}/tool`, lastModified: new Date("2026-03-31"), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${BASE_URL}/legal`, lastModified: new Date("2026-03-31"), changeFrequency: "monthly" as const, priority: 0.3 },
    { url: `${BASE_URL}/terms`, lastModified: new Date("2026-03-31"), changeFrequency: "monthly" as const, priority: 0.3 },
    { url: `${BASE_URL}/privacy`, lastModified: new Date("2026-03-31"), changeFrequency: "monthly" as const, priority: 0.3 },
  ];

  const keywordSlugs = [
    "myakuari-line-signs",
    "kare-kioku-aru-sain",
    "line-henshin-hayai-imi",
    "nanpa-myakuari-signs",
    "joshi-myakuari-behavior",
    "date-myakuari-check",
    "line-kigou-kimochi",
    "myakuari-versus-kimai",
    "sukinahito-line-check",
    "kokuhaku-timing-myakuari",
  ];

  const keywordPages = keywordSlugs.map((slug) => ({
    url: `${BASE_URL}/keywords/${slug}`,
    lastModified: new Date("2026-03-31"),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...keywordPages];
}
