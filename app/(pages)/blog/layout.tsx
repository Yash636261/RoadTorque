import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | RoadTorque - Automotive Insights & Reviews",
  description:
    "Discover in-depth automotive articles, expert reviews, and industry insights on RoadTorque's blog. Stay updated with the latest in car technology, reviews, and automotive news.",
  keywords: [
    "automotive blog",
    "car reviews",
    "vehicle insights",
    "automotive news",
    "RoadTorque blog",
  ],
  openGraph: {
    title: "Blog | RoadTorque - Automotive Insights & Reviews",
    description:
      "Discover in-depth automotive articles, expert reviews, and industry insights on RoadTorque's blog. Stay updated with the latest in car technology, reviews, and automotive news.",
    type: "website",
    siteName: "RoadTorque",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | RoadTorque - Automotive Insights & Reviews",
    description:
      "Discover in-depth automotive articles, expert reviews, and industry insights on RoadTorque's blog.",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
