import Link from "next/link";
import { Button } from "@/components/ui/button";
import BlogCard from "@/components/blogCard";
import LandingFooter from "@/components/LandingFooter";

export default function Home() {
  const featuredPosts = [
    {
      title:
        "Architectural Engineering Wonders of the modern era for your Inspiration",
      slug: "architectural-engineering-wonders-of-the-modern-era-for-your-inspiration",
      excerpt:
        "Reinvention often comes in spurts, after a long period of silence. Just as modern architecture recently enjoyed a comeback, brand architecture, a field with well-established principles for decades",
      coverImage: "/placeholder.svg?height=468&width=800",
      category: {
        title: "Technology",
        slug: "technology",
        color: "blue",
      },
      author: {
        name: "Mario Sanchez",
        image: "/placeholder.svg?height=100&width=100",
        slug: "mario-sanchez",
      },
      publishedAt: "2022-10-21T15:48:00.000Z",
    },
    {
      title:
        "Architectural Engineering Wonders of the modern era for your Inspiration",
      slug: "architectural-engineering-wonders-of-the-modern-era-for-your-inspiration",
      excerpt:
        "Reinvention often comes in spurts, after a long period of silence. Just as modern architecture recently enjoyed a comeback, brand architecture, a field with well-established principles for decades",
      coverImage: "/placeholder.svg?height=468&width=800",
      category: {
        title: "Technology",
        slug: "technology",
        color: "blue",
      },
      author: {
        name: "Mario Sanchez",
        image: "/placeholder.svg?height=100&width=100",
        slug: "mario-sanchez",
      },
      publishedAt: "2022-10-21T15:48:00.000Z",
    },
    {
      title:
        "Architectural Engineering Wonders of the modern era for your Inspiration",
      slug: "architectural-engineering-wonders-of-the-modern-era-for-your-inspiration",
      excerpt:
        "Reinvention often comes in spurts, after a long period of silence. Just as modern architecture recently enjoyed a comeback, brand architecture, a field with well-established principles for decades",
      coverImage: "/placeholder.svg?height=468&width=800",
      category: {
        title: "Technology",
        slug: "technology",
        color: "blue",
      },
      author: {
        name: "Mario Sanchez",
        image: "/placeholder.svg?height=100&width=100",
        slug: "mario-sanchez",
      },
      publishedAt: "2022-10-21T15:48:00.000Z",
    },
  ];

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="relative h-[600px] rounded-lg overflow-hidden mb-16">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1920&q=80")',
            }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative h-full flex items-center">
            <div className="max-w-2xl mx-4 text-white">
              <h1 className="text-5xl font-bold mb-4">Welcome to RoadTorque</h1>
              <p className="text-xl mb-8">
                Your premier destination for automotive excellence. Discover the
                latest news, reviews, and insights from the world of
                automobiles.
              </p>
              <Button asChild size="lg">
                <Link href="/blog">Explore Articles</Link>
              </Button>
            </div>
          </div>
        </section>

        <div className="grid gap-10 md:grid-cols-2 lg:gap-10 ">
          {featuredPosts.slice(0, 2).map((post, key) => (
            <BlogCard
              key={key}
              post={{
                ...post,
                title: "The Future of AI in Healthcare and Medical Research",
                slug: "future-of-ai-in-healthcare",
                category: {
                  title: "Health",
                  slug: "health",
                  color: "green",
                },
              }}
            />
          ))}
        </div>
        {/* <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
        {posts.slice(2, 14).map((post) => (
          <PostList key={post._id} post={post} aspect="square" />
        ))}
      </div> */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/archive"
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
