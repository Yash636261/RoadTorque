import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/", "/admin", "/login", "/signup"],
    },
    sitemap: "https://roadtorque.com/sitemap.xml",
  };
}
