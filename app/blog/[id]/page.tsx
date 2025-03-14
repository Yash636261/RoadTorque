import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { blogPosts } from '@/lib/blog-data';
import { Calendar, Clock, ChevronLeft } from 'lucide-react';

type Props = {
  params: { id: string }
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString(),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find(post => post.id === parseInt(params.id));
  
  if (!post) {
    return {
      title: 'Post Not Found | RoadTorque',
      description: 'The requested article could not be found.'
    };
  }

  return {
    title: post.seo.metaTitle,
    description: post.seo.metaDescription,
    keywords: post.seo.keywords,
    openGraph: {
      title: post.seo.metaTitle,
      description: post.seo.metaDescription,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seo.metaTitle,
      description: post.seo.metaDescription,
      images: [post.image],
    },
    alternates: {
      canonical: post.seo.canonicalUrl,
    },
  };
}

export default function BlogPost({ params }: Props) {
  const post = blogPosts.find(post => post.id === parseInt(params.id));
  
  if (!post) {
    notFound();
  }

  const relatedPosts = post.relatedPosts
    ? blogPosts.filter(p => post.relatedPosts?.includes(p.id))
    : [];

  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    image: post.image,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: post.author.name,
    },
    publisher: {
      '@type': 'Organization',
      name: 'RoadTorque',
      logo: {
        '@type': 'ImageObject',
        url: 'https://roadtorque.com/logo.png'
      }
    },
    description: post.excerpt,
    articleBody: post.content,
    keywords: post.seo.keywords?.join(', '),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link href="/blog" className="flex items-center gap-2">
              <ChevronLeft className="h-4 w-4" />
              Back to Articles
            </Link>
          </Button>
        </div>

        {/* Hero Image */}
        <div className="relative h-[400px] md:h-[600px] rounded-lg overflow-hidden mb-8">
          <img
            src={post.image}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Article Header */}
        <header className="max-w-3xl mx-auto mb-12">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
              {post.category}
            </span>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {post.date}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
          
          <div className="flex items-center gap-4">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <div className="font-semibold">{post.author.name}</div>
              <div className="text-sm text-muted-foreground">Author</div>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="max-w-3xl mx-auto prose prose-lg dark:prose-invert">
          {post.content.split('\n\n').map((paragraph, index) => {
            if (paragraph.startsWith('## ')) {
              return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{paragraph.substring(3)}</h2>;
            }
            if (paragraph.startsWith('- ')) {
              return (
                <ul key={index} className="list-disc list-inside my-4">
                  {paragraph.split('\n').map((item, itemIndex) => (
                    <li key={itemIndex} className="mb-2">{item.substring(2)}</li>
                  ))}
                </ul>
              );
            }
            return <p key={index} className="mb-6">{paragraph}</p>;
          })}
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="max-w-5xl mx-auto mt-16">
            <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Card key={relatedPost.id}>
                  <div className="aspect-video relative">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
                    />
                  </div>
                  <CardHeader>
                    <div className="text-sm text-muted-foreground mb-2">
                      {relatedPost.category}
                    </div>
                    <CardTitle className="line-clamp-2">
                      <Link href={`/blog/${relatedPost.id}`} className="hover:text-primary transition-colors">
                        {relatedPost.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </article>
    </>
  );
}