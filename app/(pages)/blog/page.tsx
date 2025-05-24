import Link from "next/link";
import { Card } from "@/components/ui/card";
import { fetchBlogs } from "../../actions";
import Image from "next/image";
import BlogFilters from "@/components/blog-filters";
import { getallcategories } from "@/lib/actions/blogs.action";
import { ArrowUpRight } from "lucide-react";
import { ImageIcon } from "lucide-react";
import { formatDate } from "@/lib/utils";

// Define Blog interface to fix TypeScript errors
interface Blog {
  _id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  readTime: string;
  date: string;
}

export default async function BlogPage() {
  const { blogs: blogPosts, source, error } = await fetchBlogs();

  const categories = (await getallcategories()) ?? [];

  if (error) {
    console.error("Page: Error:", error);
  }

  return (
    <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8 space-y-4 sm:space-y-8">
      <BlogFilters categories={categories} />

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {blogPosts?.map((post: Blog) => (
          <Link href={`/blog/${post._id}`} key={post._id}>
            <Card className="w-full h-full overflow-hidden rounded-xl border bg-card transition-all duration-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
              <div className="relative aspect-16/9 w-full overflow-hidden bg-gray-100 dark:bg-slate-800">
                {post.image ? (
                  <Image
                    width={300}
                    height={300}
                    unoptimized={true}
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <ImageIcon className="h-8 w-8 sm:h-12 sm:w-12 text-gray-300 dark:text-gray-600" />
                  </div>
                )}
              </div>

              <div className="p-3 sm:p-5">
                <div className="mb-2 flex items-center text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  <span>{post.category}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>

                <div className="group relative mb-2">
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg sm:text-xl font-bold leading-tight text-gray-900 dark:text-white line-clamp-2">
                      {post.title}
                    </h3>
                    <div className="ml-2 flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center">
                      <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 dark:text-gray-400" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 h-[1px] bg-gray-900 dark:bg-white" />
                </div>

                <p className="mb-3 sm:mb-4 text-sm sm:text-base text-gray-600 line-clamp-2 sm:line-clamp-3 dark:text-gray-400">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-gray-100 px-2 py-0.5 sm:px-3 sm:py-1 text-xs sm:text-sm font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                    {post.category}
                  </span>
                  <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-500">
                    {formatDate(post.date)}
                  </span>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      {/* <div className="mt-12 flex justify-center">
        <div className="flex gap-2">
          <Button variant="outline" disabled>
            Previous
          </Button>
          <Button>1</Button>
          <Button variant="outline">2</Button>
          <Button variant="outline">3</Button>
          <Button variant="outline">Next</Button>
        </div>
      </div> */}
    </div>
  );
}
