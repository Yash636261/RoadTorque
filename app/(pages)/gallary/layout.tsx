import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | RoadTorque - Automotive Photography Collection",
  description:
    "Explore our curated collection of stunning automotive photography featuring the latest car models, design details, and automotive excellence. High-quality images of exteriors, interiors, and unique automotive perspectives.",
  keywords: [
    "car gallery",
    "automotive photography",
    "vehicle images",
    "car photos",
    "automotive design",
    "RoadTorque gallery",
  ],
  openGraph: {
    title: "Gallery | RoadTorque - Automotive Photography Collection",
    description:
      "Explore our curated collection of stunning automotive photography featuring the latest car models, design details, and automotive excellence.",
    type: "website",
    siteName: "RoadTorque",
    images: [
      {
        url: "/gallary/car-front-view.webp",
        width: 1200,
        height: 630,
        alt: "RoadTorque Gallery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RoadTorque Automotive Gallery",
    description:
      "Stunning collection of automotive photography and car imagery.",
    images: ["/gallary/car-front-view.webp"],
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
