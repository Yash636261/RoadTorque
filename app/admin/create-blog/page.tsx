"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createBlog } from "@/app/actions";
import Image from "next/image";
import { Loader2 } from "lucide-react";

export default function CreateBlog() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Admin: Image upload triggered");
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setIsUploading(true);
      console.log("Admin: Creating FormData");
      const formData = new FormData();
      formData.append("file", file);
      formData.append(
        "upload_preset",
        process.env.NEXT_PUBLIC_UPLOAD_PRESET as string
      );
      const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`;
      const response = await fetch(cloudinaryUrl, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `Cloudinary API Error: ${
            errorData.error?.message || response.statusText
          }`
        );
      }
      const data = await response.json();
      setImages([...images, data.secure_url]);
      setIsUploading(false);
    } catch (error) {
      console.error("Error uploading image:", error);
      alert(
        `Failed to upload image: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
      setIsUploading(false);
    }
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!images.length) {
      alert("Please upload an image before creating the blog post");
      return;
    }

    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      title: formData.get("title")?.toString() || "",
      excerpt: formData.get("excerpt")?.toString() || "",
      content: formData.get("content")?.toString() || "",
      images: images,
      category: formData.get("category")?.toString() || "",
      author: {
        name: formData.get("authorName")?.toString() || "",
        avatar: formData.get("authorAvatar")?.toString() || "",
      },
      seo: {
        metaTitle: formData.get("metaTitle")?.toString() || "",
        metaDescription: formData.get("metaDescription")?.toString() || "",
        keywords:
          formData
            .get("keywords")
            ?.toString()
            .split(",")
            .map((k) => k.trim()) || [],
      },
      readTime: formData.get("readTime")?.toString() || "",
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
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700 p-8">
            <h1 className="text-3xl font-bold mb-2 text-slate-900 dark:text-slate-50">
              Create New Blog Post
            </h1>
            <p className="text-slate-500 dark:text-slate-400 mb-8">
              Fill in the details below to create a new blog post.
            </p>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
                    Title
                  </label>
                  <Input
                    name="title"
                    required
                    className="w-full dark:bg-slate-700 dark:border-slate-600 dark:text-slate-50 dark:placeholder-slate-400"
                    placeholder="Enter blog title"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
                    Category
                  </label>
                  <Input
                    name="category"
                    required
                    className="w-full dark:bg-slate-700 dark:border-slate-600 dark:text-slate-50 dark:placeholder-slate-400"
                    placeholder="e.g., Automotive, Reviews"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
                  Excerpt
                </label>
                <Textarea
                  name="excerpt"
                  required
                  className="w-full resize-none dark:bg-slate-700 dark:border-slate-600 dark:text-slate-50 dark:placeholder-slate-400"
                  placeholder="Write a brief summary of your blog post"
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
                  Content
                </label>
                <Textarea
                  name="content"
                  required
                  className="w-full resize-none dark:bg-slate-700 dark:border-slate-600 dark:text-slate-50 dark:placeholder-slate-400"
                  placeholder="Write your blog content here..."
                  rows={12}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2 border border-gray-700 rounded-2xl p-4">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
                    Images URL
                  </label>
                  {images.length > 0 &&
                    images.map((image, index) => (
                      <div
                        key={index}
                        className="rounded-2xl border border-gray-700 h-48 w-full aspect-square relative mb-4"
                      >
                        <Image
                          src={image}
                          alt="Blog Image"
                          fill
                          className="object-cover rounded-2xl"
                        />
                      </div>
                    ))}
                  {isUploading && (
                    <div className="flex items-center justify-center h-full">
                      <Loader2 className="w-4 h-4 animate-spin" />
                    </div>
                  )}
                  {/* <Button type="button" onClick={ImageUpload}>
                    Upload Image
                  </Button> */}
                  <Input
                    type="file"
                    accept="image/*"
                    name="images"
                    onChange={handleImageUpload}
                    multiple
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
                    Read Time
                  </label>
                  <Input
                    name="readTime"
                    placeholder="e.g., 5 min read"
                    required
                    className="w-full dark:bg-slate-700 dark:border-slate-600 dark:text-slate-50 dark:placeholder-slate-400"
                  />
                </div>
              </div>

              <div className="border-t border-slate-100 dark:border-slate-700 pt-8">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-6">
                  Author Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
                      Author Name
                    </label>
                    <Input
                      name="authorName"
                      required
                      className="w-full dark:bg-slate-700 dark:border-slate-600 dark:text-slate-50 dark:placeholder-slate-400"
                      placeholder="Enter author name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
                      Author Avatar URL
                    </label>
                    <Input
                      name="authorAvatar"
                      type="url"
                      required
                      className="w-full dark:bg-slate-700 dark:border-slate-600 dark:text-slate-50 dark:placeholder-slate-400"
                      placeholder="https://example.com/avatar.jpg"
                    />
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-100 dark:border-slate-700 pt-8">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-6">
                  SEO Information
                </h2>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
                      Meta Title
                    </label>
                    <Input
                      name="metaTitle"
                      className="w-full dark:bg-slate-700 dark:border-slate-600 dark:text-slate-50 dark:placeholder-slate-400"
                      placeholder="SEO title for search engines"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
                      Meta Description
                    </label>
                    <Textarea
                      name="metaDescription"
                      className="w-full resize-none dark:bg-slate-700 dark:border-slate-600 dark:text-slate-50 dark:placeholder-slate-400"
                      placeholder="Brief description for search engines"
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
                      Keywords (comma-separated)
                    </label>
                    <Input
                      name="keywords"
                      placeholder="cars, review, automotive"
                      className="w-full dark:bg-slate-700 dark:border-slate-600 dark:text-slate-50 dark:placeholder-slate-400"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-6">
                <Button
                  type="submit"
                  disabled={loading}
                  className="min-w-[200px] dark:bg-slate-700 dark:text-slate-50 dark:hover:bg-slate-600 dark:disabled:bg-slate-800"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Creating...
                    </span>
                  ) : (
                    "Create Blog Post"
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
