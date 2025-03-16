import Link from "next/link";
import { Button } from "@/components/ui/button";
import BlogCard from "@/components/blogCard";
import LandingFooter from "@/components/LandingFooter";
import { fetchBlogs } from "./actions";
import Hero from "@/components/Hero";

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

export default async function Home() {
  const { blogs: featuredPosts, source, error } = await fetchBlogs();
  console.log(featuredPosts);

  return (
    <>
      {/* Hero Section */}
      <Hero blog={featuredPosts?.[1]} />
      <div className="container mx-auto px-4 py-8">
        {featuredPosts && featuredPosts.length > 0 && (
          <div className="grid gap-10 md:grid-cols-2 lg:gap-10 ">
            {featuredPosts.slice(0, 2).map((post: Blog, key: number) => (
              <div key={key}>
                <BlogCard post={post} />
              </div>
            ))}
          </div>
        )}
        {/* <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
        {posts.slice(2, 14).map((post) => (
          <PostList key={post._id} post={post} aspect="square" />
        ))}
      </div> */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/blog"
            className="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300"
          >
            <span>View all Posts</span>
          </Link>
        </div>

        {/* Categories
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Explore Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            "Supercars",
            "Electric Vehicles",
            "Classic Cars",
            "Car Technology",
          ].map((category) => (
            <Card key={category} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-center">{category}</CardTitle>
              </CardHeader>
              <CardFooter className="justify-center">
                <Button asChild variant="ghost">
                  <Link
                    href={`/category/${category
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    Explore
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section> */}
      </div>
      <LandingFooter />
    </>
  );
}
