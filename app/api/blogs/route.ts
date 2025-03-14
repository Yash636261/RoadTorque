export const dynamic = "force-dynamic";
export const runtime = "nodejs";

import { NextResponse } from "next/server";
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

export async function GET(request: Request) {
  console.log("API: GET /api/blogs called with URL:", request.url);

  try {
    // Try to connect to MongoDB and fetch blogs
    console.log("API: Attempting to connect to MongoDB...");
    await connectDB();
    console.log("API: MongoDB connection successful");

    console.log("API: Fetching blogs from database...");
    const blogs = await Blog.find({}).sort({ createdAt: -1 });
    console.log(`API: Found ${blogs?.length || 0} blogs in database`);

    // If no blogs found in database, return sample data
    if (!blogs || blogs.length === 0) {
      console.log("API: No blogs found in database, returning sample data");
      return NextResponse.json(convertSampleBlogsToModelFormat(), {
        status: 200,
        headers: {
          "X-Data-Source": "sample",
        },
      });
    }

    console.log("API: Returning blogs from database");
    return NextResponse.json(blogs, {
      status: 200,
      headers: {
        "X-Data-Source": "database",
      },
    });
  } catch (error) {
    console.error("API: MongoDB connection or query failed:", error);
    // Return sample data as fallback
    console.log("API: Using sample blog data as fallback");
    return NextResponse.json(convertSampleBlogsToModelFormat(), {
      status: 200,
      headers: {
        "X-Data-Source": "sample-fallback",
        "X-Error": "MongoDB connection failed",
      },
    });
  }
}

// Note: The POST method can be removed if you're fully migrating to Server Actions
// You can keep it for backward compatibility or for API clients
export async function POST(request: Request) {
  console.log("API: POST /api/blogs called with URL:", request.url);

  try {
    console.log("API: Attempting to connect to MongoDB...");
    await connectDB();
    console.log("API: MongoDB connection successful");

    const data = await request.json();
    console.log(
      "API: Creating new blog with data:",
      JSON.stringify(data).substring(0, 100) + "..."
    );

    const blog = await Blog.create(data);
    console.log("API: Blog created successfully with ID:", blog._id);

    return NextResponse.json(blog);
  } catch (error) {
    console.error("API: Failed to create blog:", error);
    return NextResponse.json(
      {
        error: "Failed to create blog",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
