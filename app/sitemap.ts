import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

const BASE = "https://friendwhocodes.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/portfolio", "/products", "/blog", "/contact"].map(
    (path) => ({
      url: `${BASE}${path}`,
      lastModified: new Date(),
    })
  );

  const postRoutes = getAllPosts().map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [...staticRoutes, ...postRoutes];
}
