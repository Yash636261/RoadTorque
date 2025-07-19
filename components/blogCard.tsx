import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

interface Blog {
  _id: string;
  title: string;
  excerpt: string;
  content: string;
  images: string[];
  category: string;
  readTime: string;
  date: string;
  author?: {
    name: string;
    image: string;
  };
}

export interface BlogCardProps {
  post: Blog;
}

export default function BlogCard({ post }: BlogCardProps) {
  // Default color is blue if not provided
  const categoryColor = "blue";

  return (
    <div className="group cursor-pointer">
      <div className="overflow-hidden rounded-lg sm:rounded-xl bg-gray-100 transition-all dark:bg-gray-800">
        <Link
          className="relative block aspect-[16/9] sm:aspect-video"
          href={`/blog/${post._id}`}
        >
          <Image
            alt={post.title || "Thumbnail"}
            src={post.images[0] || "/placeholder.svg"}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
            unoptimized={true}
          />
          <h2 className="absolute bg-white rounded-tr-xl max-w-[85%] dark:bg-black bottom-0 left-0 text-base sm:text-lg md:text-xl font-semibold leading-snug tracking-tight dark:text-white">
            <div className="relative p-2">
              <div className="absolute bg-transparent h-8 w-8 -top-8 -left-0 rounded-bl-xl shadow-[-6px_8px_0_0_white] dark:shadow-[-6px_8px_0_0_black]" />
              <div className="absolute bg-transparent h-8 w-8 -bottom-0 -right-8 rounded-bl-xl shadow-[-6px_8px_0_0_white] dark:shadow-[-6px_8px_0_0_black]" />
              <span className="">{post.title}</span>
            </div>
          </h2>
        </Link>
      </div>

      <div className="mt-3 sm:mt-4">
        <div className="flex gap-2 sm:gap-3">
          <Link href={`/category/${post.category}`}>
            <span
              className={`inline-block text-xs sm:text-sm font-medium tracking-wider uppercase text-${categoryColor}-600 hover:text-${categoryColor}-700 dark:text-${categoryColor}-400 dark:hover:text-${categoryColor}-300 transition-colors`}
            >
              {post.category}
            </span>
          </Link>
        </div>

        <div className="mt-2 sm:mt-3 flex items-center space-x-2 sm:space-x-3 text-gray-500 dark:text-gray-400">
          {post.author?.name && (
            <>
              <span className="truncate text-xs sm:text-sm">
                {post.author.name}
              </span>
              <span className="text-xs text-gray-300 dark:text-gray-600">
                •
              </span>
            </>
          )}
          <time className="truncate text-xs sm:text-sm" dateTime={post.date}>
            {formatDate(post.date)}
          </time>
        </div>

        <button className="w-full sm:w-auto dark:bg-white dark:text-black text-white bg-zinc-900 px-4 sm:px-6 py-2 sm:py-3 rounded-full mt-3 sm:mt-4 flex items-center justify-center gap-2 sm:gap-4 group hover:bg-zinc-800 dark:hover:bg-gray-100 transition-colors">
          <span className="text-sm sm:text-base">Read More</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300"
            viewBox="0 0 97 79"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M53.7025 1.27958C55.4085 -0.426526 58.1745 -0.426526 59.8806 1.27958L94.8296 36.2282C96.5351 37.9342 96.5351 40.7003 94.8296 42.4063L59.8806 77.3554C58.1745 79.0608 55.4085 79.0608 53.7025 77.3554C51.9964 75.649 51.9964 72.8828 53.7025 71.1764L81.1936 43.6858H4.36858C1.9559 43.6858 0 41.7299 0 39.3172C0 36.9046 1.9559 34.9487 4.36858 34.9487H81.1936L53.7025 7.45763C51.9964 5.75161 51.9964 2.9856 53.7025 1.27958Z"
              fill="currentColor"
            />
          </svg>
        </button>

        {/* {post.excerpt && (
          <div className="mt-2 sm:mt-3">
            <p className="line-clamp-2 sm:line-clamp-3 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              <Link href={`/blog/${post._id}`}>{post.excerpt}</Link>
            </p>
          </div>
        )} */}
      </div>
    </div>
  );
}
