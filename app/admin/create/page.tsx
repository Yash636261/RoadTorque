"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { getBaseUrl } from "@/lib/utils";
import { createBlog } from "@/app/actions";

export default function CreateBlog() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      title: formData.get("title"),
      excerpt: formData.get("excerpt"),
      content: formData.get("content"),
      image: formData.get("image"),
      category: formData.get("category"),
      author: {
        name: formData.get("authorName"),
        avatar: formData.get("authorAvatar"),
      },
      seo: {
        metaTitle: formData.get("metaTitle"),
        metaDescription: formData.get("metaDescription"),
        keywords: formData
          .get("keywords")
          ?.toString()
          .split(",")
          .map((k) => k.trim()),
      },
      readTime: formData.get("readTime"),
    };

    console.log("Admin: Form data prepared:", data);

    try {
      console.log("Admin: Calling createBlog server action...");
      const result = await createBlog(data);

      console.log("Admin: Server action result:", result);

      if (!result.success) {
        throw new Error(result.error || "Failed to create blog");
      }

      alert("Blog post created successfully!");
      router.push("/blog");
    } catch (error) {
      console.error("Admin: Error creating blog:", error);
      alert("Failed to create blog post");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Create New Blog Post</h1>

      <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium">Title</label>
          <Input name="title" required />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Excerpt</label>
          <Textarea name="excerpt" required />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Content</label>
          <Textarea name="content" required rows={10} />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Image URL</label>
          <Input name="image" type="url" required />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Category</label>
          <Input name="category" required />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Author Name</label>
          <Input name="authorName" required />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Author Avatar URL</label>
          <Input name="authorAvatar" type="url" required />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Read Time</label>
          <Input name="readTime" placeholder="e.g., 5 min read" required />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Meta Title</label>
          <Input name="metaTitle" />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Meta Description</label>
          <Textarea name="metaDescription" />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">
            Keywords (comma-separated)
          </label>
          <Input name="keywords" placeholder="cars, review, automotive" />
        </div>

        <Button type="submit" disabled={loading}>
          {loading ? "Creating..." : "Create Blog Post"}
        </Button>
      </form>
    </div>
  );
}
