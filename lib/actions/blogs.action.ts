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

export async function getallcategories() {
  try {
    await connectDB();
    const result = await Blog.aggregate([
      { $group: { _id: "$category", count: { $sum: 1 } } },
      { $project: { _id: 0, category: "$_id", count: 1 } },
    ]);
    return result;
  } catch (error) {
    console.error("Error fetching all categories:", error);
  }
}
