"use client";
import Link from "next/link";
import { fetchBlogs } from "../../../actions";
import Image from "next/image";
import BlogFilters from "@/components/filters/blog-filters";
import { getallcategories } from "@/lib/actions/blogs.action";
import { ArrowUpRight, AlertCircle } from "lucide-react";
import { ImageIcon } from "lucide-react";
import { formatDate } from "@/lib/utils";
import { useEffect, useState, useCallback } from "react";
import { useDebounce } from "@/hooks/use-debounce";

// Define Blog interface to fix TypeScript errors
interface Blog {
  _id: string;
  title: string;
  excerpt: string;
  content: string;
  images: string[];
  category: string;
  readTime: string;
  date: string;
}

export default function BlogContent() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]);
  const [categories, setCategories] = useState<
    { category: string; count: number }[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearch = useDebounce(searchQuery, 300);

  useEffect(() => {
    try {
      const fetchData = async () => {
        setIsLoading(true);
        setError(null);
        const { blogs: blogPosts, error } = await fetchBlogs();
        if (error) {
          setError("Failed to fetch blogs. Please try again later.");
          return;
        }
        setBlogs(blogPosts || []);
        setFilteredBlogs(blogPosts || []);
        const categories = (await getallcategories()) ?? [];
        setCategories(categories);
      };
      fetchData();
    } catch (error) {
      setError("An unexpected error occurred. Please try again later.");
      console.error("Error fetching blogs:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    let filtered = [...blogs];

    // Apply category filter
    if (activeFilter !== "All") {
      filtered = filtered.filter((blog) => blog.category === activeFilter);
    }

    // Apply search filter
    if (debouncedSearch) {
      const query = debouncedSearch.toLowerCase();
      filtered = filtered.filter(
        (blog) =>
          blog.title.toLowerCase().includes(query) ||
          blog.excerpt.toLowerCase().includes(query) ||
          blog.content.toLowerCase().includes(query)
      );
    }

    setFilteredBlogs(filtered);
  }, [activeFilter, debouncedSearch, blogs]);

  const handleFilterChange = useCallback((filter: string) => {
    setActiveFilter(filter);
  }, []);

  const handleSearchChange = useCallback((search: string) => {
    setSearchQuery(search);
  }, []);

  const renderBlogCard = (post: Blog) => (
    <Link href={`/blog/${post._id}`} key={post._id}>
      <div className="w-full p-4 rounded-3xl border border-[#D5D5D7] dark:border-[#6A8C8D] h-full overflow-hidden transition-all duration-300 hover:shadow-md dark:bg-[#11393B] dark:hover:bg-[#0D2527]">
        <div className="relative rounded-2xl aspect-16/9 w-full overflow-hidden bg-gray-100 dark:bg-[#2e2e2e]">
          {post.images[0] ? (
            <Image
              width={300}
              height={300}
              unoptimized={true}
              src={post.images[0] || "/placeholder.svg"}
              alt={post.title}
              className="h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <ImageIcon className="h-8 w-8 sm:h-12 sm:w-12 text-gray-300 dark:text-gray-600" />
            </div>
          )}
        </div>

        <div className=" pt-2 pb-4 space-y-2 mt-3">
          <div className="px-4 w-fit py-1.5 bg-[#f6f3ee] rounded-full flex justify-center items-center gap-2.5">
            <div className="text-center justify-center text-[#11393b] text-sm font-medium leading-none">
              {post.category}
            </div>
          </div>

          <h3 className="text-lg sm:text-xl font-semibold leading-tight text-gray-900 dark:text-white line-clamp-2">
            {post.title}
          </h3>

          <p className="mb-3 sm:mb-4 text-sm sm:text-sm text-gray-600 line-clamp-2 sm:line-clamp-3 dark:text-[#E1E1E1]">
            {post.excerpt}
          </p>

          <div className="text-xs sm:text-sm text-gray-500 font-normal dark:text-[#F6F3EE]">
            {post.readTime} <span className="mx-2">•</span>{" "}
            {formatDate(post.date)}
          </div>
        </div>
        <div className=" pb-2 font-medium text-base text-[#F18350] flex-start gap-1  ">
          Read More <ArrowUpRight className=" size-6" />
        </div>
      </div>
    </Link>
  );

  const renderSkeletonCard = () => (
    <div className="w-full h-full overflow-hidden rounded-xl border bg-card dark:border-[#4b4b4b] dark:bg-[#2e2e2e]">
      <div className="relative aspect-16/9 w-full bg-gray-100 dark:bg-[#2e2e2e] animate-pulse" />
      <div className="p-3 sm:p-5 space-y-3">
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
        <div className="flex justify-between">
          <div className="h-6 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
          <div className="h-6 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8 space-y-4 sm:space-y-8">
      <BlogFilters
        categories={categories}
        onFilterChange={handleFilterChange}
        onSearchChange={handleSearchChange}
        isLoading={isLoading}
      />

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {isLoading || (!error && blogs.length === 0) ? (
          <>
            {[0, 1, 2, 3, 4, 5].map((item) => (
              <div key={item}>{renderSkeletonCard()}</div>
            ))}
          </>
        ) : error ? (
          <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
            <AlertCircle className="h-12 w-12 text-red-500 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {error}
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Please try refreshing the page or contact support if the problem
              persists.
            </p>
          </div>
        ) : filteredBlogs.length === 0 ? (
          <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              No blogs found
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              {searchQuery || activeFilter !== "All"
                ? "Try adjusting your search or filter criteria"
                : "There are no blogs available at the moment"}
            </p>
          </div>
        ) : (
          filteredBlogs.map(renderBlogCard)
        )}
      </div>
    </div>
  );
}
