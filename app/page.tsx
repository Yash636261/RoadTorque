import Link from "next/link";
import BlogCard from "@/components/blogCard";
import LandingFooter from "@/components/LandingFooter";
import { fetchBlogs } from "./actions";
import Hero from "@/components/Hero";
import CategoryGrid from "@/components/category-grid";
import NewsletterSection from "@/components/NewletterSection";
import FAQ from "@/components/FAQ";
import CtaSection from "@/components/CtaSection";

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

export default async function Home() {
  const { blogs: featuredPosts, source, error } = await fetchBlogs();
  // console.log(featuredPosts);

  return (
    <>
      {/* Hero Section */}
      <Hero blog={featuredPosts?.[0]} />

      {/* Featured Posts */}
      <div className="container mx-auto px-4 py-8">
        {featuredPosts && featuredPosts.length > 0 && (
          <div className="grid gap-10 md:grid-cols-2 lg:gap-10 ">
            {featuredPosts.slice(0, 4).map((post: Blog, key: number) => (
              <div key={key}>
                <BlogCard post={post} />
              </div>
            ))}
          </div>
        )}
        <div className="mt-10 flex justify-center">
          <Link
            href="/blog"
            className="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300"
          >
            <span>View all Posts</span>
          </Link>
        </div>
      </div>

      {/* Categories */}
      <CategoryGrid />

      <FAQ />

      <CtaSection />

      <NewsletterSection />

      {/* Footer */}
      <LandingFooter />
    </>
  );
}
