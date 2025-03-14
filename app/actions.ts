"use server";

import connectDB from "@/lib/mongodb";
import Blog from "@/lib/models/Blog";
import { blogPosts } from "@/lib/blog-data";

// Helper function to convert sample data to match MongoDB model format
const convertSampleBlogsToModelFormat = () => {
  return blogPosts.map((post) => ({
    _id: post.id.toString(),
    title: post.title,
    excerpt: post.excerpt,
    content: post.content,
    image: post.image,
    category: post.category,
    date: post.date,
    readTime: post.readTime,
    author: post.author,
    seo: post.seo,
    relatedPosts: post.relatedPosts || [],
  }));
};

export async function fetchBlogs() {
  console.log("Server Action: fetchBlogs called");

  try {
    // Try to connect to MongoDB and fetch blogs
    console.log("Server Action: Attempting to connect to MongoDB...");
    await connectDB();
    console.log("Server Action: MongoDB connection successful");

    console.log("Server Action: Fetching blogs from database...");
    const blogs = await Blog.find({}).sort({ createdAt: -1 });
    console.log(`Server Action: Found ${blogs?.length || 0} blogs in database`);

    // If no blogs found in database, return sample data
    if (!blogs || blogs.length === 0) {
      console.log(
        "Server Action: No blogs found in database, returning sample data"
      );
      return {
        blogs: convertSampleBlogsToModelFormat(),
        source: "sample",
        error: null,
      };
    }

    console.log("Server Action: Returning blogs from database");
    return {
      blogs,
      source: "database",
      error: null,
    };
  } catch (error) {
    console.error("Server Action: MongoDB connection or query failed:", error);
    // Return sample data as fallback
    console.log("Server Action: Using sample blog data as fallback");
    return {
      blogs: convertSampleBlogsToModelFormat(),
      source: "sample-fallback",
      error: error instanceof Error ? error.message : String(error),
    };
  }
}

export async function createBlog(data: any) {
  console.log("Server Action: createBlog called");

  try {
    console.log("Server Action: Attempting to connect to MongoDB...");
    await connectDB();
    console.log("Server Action: MongoDB connection successful");

    console.log(
      "Server Action: Creating new blog with data:",
      JSON.stringify(data).substring(0, 100) + "..."
    );

    const blog = await Blog.create(data);
    console.log("Server Action: Blog created successfully with ID:", blog._id);

    return { success: true, blog };
  } catch (error) {
    console.error("Server Action: Failed to create blog:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : String(error),
    };
  }
}
