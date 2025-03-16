import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { MicrosoftClarity } from "@/components/Integrations/MicrosoftClarity";
const inter = Inter({ subsets: ["latin"] });

import { Analytics } from "@vercel/analytics/react";
export const metadata: Metadata = {
  title: "RoadTorque - Automotive Excellence",
  description:
    "Your premier destination for automotive news, reviews, and insights",
  keywords: ["automotive", "news", "reviews", "insights"],
  openGraph: {
    title: "RoadTorque - Automotive Excellence",
    description:
      "Your premier destination for automotive news, reviews, and insights",
    url: process.env.NEXT_PUBLIC_APP_URL,
    siteName: "RoadTorque",
    images: [
      {
        url: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7",
        width: 1200,
        height: 630,
        alt: "RoadTorque",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <MicrosoftClarity />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex-grow">{children}</main>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
