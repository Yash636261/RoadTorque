import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { blogPosts } from "@/lib/blog-data";
import { Calendar, Clock, ChevronLeft } from "lucide-react";
import { getblogsbyid } from "@/lib/actions/blogs.action";
import { formatDate } from "@/lib/utils";
import CategoryLabel from "@/components/Category";
import Image from "next/image";
import Container from "@/components/Container";
type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString(),
  }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const post = await getblogsbyid(params.id);

  if (!post) {
    return {
      title: "Post Not Found | RoadTorque",
      description: "The requested article could not be found.",
    };
  }

  return {
    title: post.seo.metaTitle,
    description: post.seo.metaDescription,
    keywords: post.seo.keywords,
    openGraph: {
      title: post.seo.metaTitle,
      description: post.seo.metaDescription,
      type: "article",
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
      card: "summary_large_image",
      title: post.seo.metaTitle,
      description: post.seo.metaDescription,
      images: [post.image],
    },
    alternates: {
      canonical: post.seo.canonicalUrl,
    },
  };
}

const renderContent = (content: string) => {
  // First, handle all bold text formatting
  const processedContent = content
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<strong>$1</strong>");

  // Split content into sections by horizontal rule
  const sections = processedContent
    .split("---")
    .map((section) => section.trim());

  return sections.map((section, sectionIndex) => {
    // Split section into paragraphs
    const paragraphs = section.split("\n\n").filter((p) => p.trim());

    return (
      <div key={sectionIndex} className="mb-8">
        {paragraphs.map((paragraph, index) => {
          // Handle headings
          if (paragraph.startsWith("## ")) {
            return (
              <h2
                key={index}
                className="text-2xl sm:text-3xl font-bold mt-8 mb-4"
                dangerouslySetInnerHTML={{ __html: paragraph.substring(3) }}
              />
            );
          }
          if (paragraph.startsWith("### ")) {
            return (
              <h3
                key={index}
                className="text-xl sm:text-2xl font-bold mt-6 mb-3"
                dangerouslySetInnerHTML={{ __html: paragraph.substring(4) }}
              />
            );
          }

          // Handle bullet points
          if (paragraph.startsWith("* ")) {
            return (
              <ul key={index} className="list-disc list-inside my-4 space-y-2">
                {paragraph
                  .split("\n")
                  .filter((item) => item.trim())
                  .map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-base sm:text-lg"
                      dangerouslySetInnerHTML={{ __html: item.substring(2) }}
                    />
                  ))}
              </ul>
            );
          }

          // Handle tables
          if (paragraph.includes("|")) {
            const rows = paragraph.split("\n").filter((row) => row.trim());
            const headers = rows[0].split("|").filter((cell) => cell.trim());
            const data = rows.slice(2); // Skip header separator

            return (
              <div key={index} className="overflow-x-auto my-6">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr>
                      {headers.map((header, headerIndex) => (
                        <th
                          key={headerIndex}
                          className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left bg-gray-100 dark:bg-gray-800"
                          dangerouslySetInnerHTML={{ __html: header.trim() }}
                        />
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((row, rowIndex) => {
                      const cells = row
                        .split("|")
                        .filter((cell) => cell.trim());
                      return (
                        <tr key={rowIndex}>
                          {cells.map((cell, cellIndex) => (
                            <td
                              key={cellIndex}
                              className="border border-gray-300 dark:border-gray-700 px-4 py-2"
                              dangerouslySetInnerHTML={{ __html: cell.trim() }}
                            />
                          ))}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            );
          }

          // Handle regular paragraphs
          return (
            <p
              key={index}
              className="mb-4 text-base sm:text-lg leading-relaxed"
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          );
        })}
      </div>
    );
  });
};

export default async function BlogPost(props: Props) {
  const params = await props.params;
  // const post = blogPosts.find(post => post.id === parseInt(params.id));
  const post = await getblogsbyid(params.id);
  // console.log(post);
  if (!post) {
    notFound();
  }

  const relatedPosts = post.relatedPosts
    ? blogPosts.filter((p) => post.relatedPosts?.includes(p.id))
    : [];

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    image: post.image,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: "RoadTorque",
      logo: {
        "@type": "ImageObject",
        url: "https://roadtorque.com/logo.png",
      },
    },
    description: post.excerpt,
    articleBody: post.content,
    keywords: post.seo.keywords?.join(", "),
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
        <Container className="pt-0!">
          <div className="mx-auto max-w-(--breakpoint-md) ">
            <div className="flex justify-center">
              <CategoryLabel categories={post.category} />
            </div>

            <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
              {post.title}
            </h1>

            <div className="mt-3 flex justify-center space-x-3 text-gray-500 ">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 shrink-0">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="rounded-full object-cover"
                    fill
                    unoptimized={true}
                    sizes="40px"
                  />
                </div>
                <div>
                  <p className="text-gray-800 dark:text-gray-400">
                    {post.author.name}
                  </p>
                  <div className="flex items-center space-x-2 text-sm">
                    {formatDate(post.date)}

                    <span>· {post.estReadingTime || "5"} min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>

        <div className="relative z-0 mx-auto w-full max-w-(--breakpoint-lg) overflow-hidden lg:rounded-lg">
          {post.image && (
            <Image
              src={post.image}
              alt={post.title || "Thumbnail"}
              loading="eager"
              width={1000}
              height={1000}
              className="object-contain"
              unoptimized={true}
            />
          )}
        </div>

        {/* Article Content */}
        <Container>
          <div className="max-w-3xl mx-auto prose prose-lg dark:prose-invert">
            {renderContent(post.content)}
          </div>
        </Container>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="max-w-5xl mx-auto mt-16">
            <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Card key={relatedPost.id}>
                  <div className="aspect-video relative">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
                      fill
                      unoptimized={true}
                    />
                  </div>
                  <CardHeader>
                    <div className="text-sm text-muted-foreground mb-2">
                      {relatedPost.category}
                    </div>
                    <CardTitle className="line-clamp-2">
                      <Link
                        href={`/blog/${relatedPost.id}`}
                        className="hover:text-primary transition-colors"
                      >
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
