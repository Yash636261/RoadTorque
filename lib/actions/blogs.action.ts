"use server";

import Blog from "../models/Blog";
import connectDB from "@/lib/mongodb";

export async function getblogsbyid(id: string) {
  try {
    await connectDB();
    const blog = await Blog.findById(id);
    return blog;
  } catch (error) {
    console.error("Error fetching blog by ID:", error);
  }
}
