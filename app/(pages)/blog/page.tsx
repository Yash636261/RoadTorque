import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { fetchBlogs } from "../../actions";
import Image from "next/image";
import BlogFilters from "@/components/blog-filters";

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
  console.log("Page: Fetching blogs using server action...");
  const { blogs: blogPosts, source, error } = await fetchBlogs();

  console.log("Page: Data source:", source);
  if (error) {
    console.error("Page: Error:", error);
  }

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <BlogFilters />

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts?.map((post: Blog) => (
          <Card key={post._id}>
            <div className="aspect-video relative">
              <Image
                width={300}
                height={300}
                unoptimized={true}
                src={post.image}
                alt={post.title}
                className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
              />
            </div>
            <CardHeader>
              <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                <span>{post.category}</span>
                <span>{post.readTime}</span>
              </div>
              <CardTitle className="line-clamp-2 hover:text-primary transition-colors">
                <Link href={`/blog/${post._id}`}>{post.title}</Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground line-clamp-3">
                {post.excerpt}
              </p>
            </CardContent>
            <CardFooter className="mt-auto">
              <div className="flex items-center justify-between w-full">
                <span className="text-sm text-muted-foreground">
                  {new Date(post.date).toLocaleDateString()}
                </span>
                <Button asChild variant="ghost">
                  <Link href={`/blog/${post._id}`}>Read More</Link>
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-12 flex justify-center">
        <div className="flex gap-2">
          <Button variant="outline" disabled>
            Previous
          </Button>
          <Button>1</Button>
          <Button variant="outline">2</Button>
          <Button variant="outline">3</Button>
          <Button variant="outline">Next</Button>
        </div>
      </div>
    </div>
  );
}
