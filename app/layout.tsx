import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RoadTorque - Automotive Excellence",
  description:
    "Your premier destination for automotive news, reviews, and insights",
  openGraph: {
    title: "RoadTorque - Automotive Excellence",
    description:
      "Your premier destination for automotive news, reviews, and insights",
    url: "https://roadtorque.com",
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
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
