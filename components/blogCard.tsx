import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

interface Blog {
  _id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
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
      <div className="overflow-hidden rounded-md bg-gray-100 transition-all dark:bg-gray-800">
        <Link
          className="relative block aspect-video"
          href={`/blog/${post._id}`}
        >
          <Image
            alt="Thumbnail"
            src={post.image || "/placeholder.svg"}
            fill
            sizes="(max-width: 768px) 30vw, 33vw"
            className="object-cover transition-all"
            priority
            unoptimized={true}
          />
        </Link>
      </div>

      <div>
        <div className="flex gap-3">
          <Link href={`/category/${post.category}`}>
            <span
              className={`inline-block text-xs font-medium tracking-wider uppercase mt-5 text-${categoryColor}-600`}
            >
              {post.category}
            </span>
          </Link>
        </div>

        <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2 dark:text-white">
          <Link href={`/blog/${post._id}`}>
            <span className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900">
              {post.title}
            </span>
          </Link>
        </h2>

        <div className="mt-2 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
          <span className="truncate text-sm">{post.author?.name}</span>
          <span className="text-xs text-gray-300 dark:text-gray-600">•</span>
          <time className="truncate text-sm" dateTime={post.date}>
            {formatDate(post.date)}
          </time>
        </div>
        <button className="dark:bg-white dark:text-black text-white bg-zinc-900 px-6 py-3 rounded-full mt-4 flex-center gap-4 group">
          Read More{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
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
            <div>
              <p className="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
                <Link href={`/blog/${post._id}`}>{post.excerpt}</Link>
              </p>
            </div>
          )} */}
      </div>
    </div>
  );
}
