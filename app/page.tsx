import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  const featuredPosts = [
    {
      id: 1,
      title: "2025 Tesla Roadster: A New Era of Electric Performance",
      excerpt: "An in-depth look at Tesla's latest masterpiece, combining unprecedented range with supercar performance.",
      image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=800&q=80",
      category: "Electric Vehicles",
    },
    {
      id: 2,
      title: "The Evolution of Autonomous Driving Technology",
      excerpt: "Exploring how self-driving technology is reshaping the automotive industry and our future.",
      image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80",
      category: "Technology",
    },
    {
      id: 3,
      title: "Classic Cars in a Modern World",
      excerpt: "Why vintage automobiles continue to capture our hearts in the age of electric vehicles.",
      image: "https://images.unsplash.com/photo-1533558701576-23c65a0a2c9c?auto=format&fit=crop&w=800&q=80",
      category: "Classic Cars",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="relative h-[600px] rounded-lg overflow-hidden mb-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1920&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-2xl mx-4 text-white">
            <h1 className="text-5xl font-bold mb-4">
              Welcome to RoadTorque
            </h1>
            <p className="text-xl mb-8">
              Your premier destination for automotive excellence. Discover the latest news, reviews, and insights from the world of automobiles.
            </p>
            <Button asChild size="lg">
              <Link href="/blog">Explore Articles</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Featured Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="text-sm text-primary mb-2">{post.category}</div>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost">
                  <Link href={`/blog/${post.id}`}>Read More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Explore Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {['Supercars', 'Electric Vehicles', 'Classic Cars', 'Car Technology'].map((category) => (
            <Card key={category} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-center">{category}</CardTitle>
              </CardHeader>
              <CardFooter className="justify-center">
                <Button asChild variant="ghost">
                  <Link href={`/category/${category.toLowerCase().replace(' ', '-')}`}>
                    Explore
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}