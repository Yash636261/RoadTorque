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
      <div className="overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105 dark:bg-gray-800">
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

      <div className="">
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

          {post.excerpt && (
            <div>
              <p className="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
                <Link href={`/blog/${post._id}`}>{post.excerpt}</Link>
              </p>
            </div>
          )}

          <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
            {/* <Link href={`/author/${post.author.slug}`}> */}
            <div className="flex items-center gap-3">
              <div className="relative h-5 w-5 flex-shrink-0">
                <Image
                  alt={post.author?.name || "Author"}
                  src={post.author?.image || "/placeholder.svg"}
                  fill
                  className="rounded-full object-cover"
                  sizes="20px"
                  loading="lazy"
                  unoptimized={true}
                />
              </div>
              <span className="truncate text-sm">{post.author?.name}</span>
            </div>
            {/* </Link> */}
            <span className="text-xs text-gray-300 dark:text-gray-600">•</span>
            <time className="truncate text-sm" dateTime={post.date}>
              {formatDate(post.date)}
            </time>
          </div>
        </div>
      </div>
    </div>
  );
}
