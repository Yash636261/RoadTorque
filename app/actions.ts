"use server";

import connectDB from "@/lib/mongodb";
import Blog from "@/lib/models/Blog";



export async function fetchBlogs() {
  console.log("Server Action: fetchBlogs called");

  try {
    // Try to connect to MongoDB and fetch blogs
    console.log("Server Action: Attempting to connect to MongoDB...");
    await connectDB();
    console.log("Server Action: MongoDB connection successful");

    console.log("Server Action: Fetching blogs from database...");
    const blogs = await Blog.find({}).sort({ createdAt: -1 });

    // Convert MongoDB documents to plain JavaScript objects and ensure _id is a string
    const serializedBlogs = blogs.map((blog) => {
      const plainObject = blog.toObject();
      return {
        ...plainObject,
        _id: plainObject._id.toString(),
      };
    });

    console.log("Server Action: Returning blogs from database");
    return {
      blogs: serializedBlogs,
      source: "database",
      error: null,
    };
  } catch (error) {
    console.error("Server Action: MongoDB connection or query failed:", error);
    // Return sample data as fallback
    console.log("Server Action: Using sample blog data as fallback");
    return {
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

    // Convert MongoDB document to plain object and serialize _id
    const serializedBlog = {
      ...blog.toObject(),
      _id: blog._id.toString(),
      date: blog.date.toISOString(),
      createdAt: blog.createdAt.toISOString(),
      updatedAt: blog.updatedAt.toISOString(),
    };

    return { success: true, blog: serializedBlog };
  } catch (error) {
    console.error("Server Action: Failed to create blog:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : String(error),
    };
  }
}
