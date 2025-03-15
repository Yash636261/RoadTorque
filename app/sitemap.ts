import { MetadataRoute } from "next";
import { fetchBlogs } from "./actions";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://roadtorque.com";
  const { blogs: blogPosts } = await fetchBlogs();

  // Static routes
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
  ];

  // Blog posts
  const blogRoutes = blogPosts?.map((post) => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: new Date(post.date),
    changeFrequency: "daily" as const,
    priority: 0.8,
  }));

  return [...routes, ...(blogRoutes || [])];
}
