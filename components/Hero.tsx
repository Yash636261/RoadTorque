"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus, Moon, Sun, Search } from "lucide-react";
import { useTheme } from "next-themes";
import { formatDate } from "@/lib/utils";
import { Teko } from "next/font/google";

const teko = Teko({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

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

export default function Hero({ blog }: { blog: Blog }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="min-h-screen  p-4 flex items-center justify-center transition-colors duration-300 w-full">
      <div className="w-full bg-white dark:bg-black p-8 transition-colors duration-300">
        {/* Header */}
        <header className="flex items-center justify-between mb-16">
          <Link
            href="/"
            className=" font-bold dark:text-white transition-colors"
          >
            <span className={`text-3xl ${teko.className} font-medium`}>
              RoadTorque
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/articles"
              className="text-sm dark:text-zinc-200 transition-colors"
            >
              Articles
            </Link>
            <Link
              href="/radio"
              className="text-sm dark:text-zinc-200 transition-colors"
            >
              Blogs
              {/* <span className="text-zinc-400 dark:text-zinc-500">(8)</span> */}
            </Link>
            <Link
              href="/podcast"
              className="text-sm dark:text-zinc-200 transition-colors"
            >
              Reviews
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <button
              className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-700 transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />
            </button>
            <button
              className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-700 transition-colors"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {mounted &&
                (theme === "dark" ? (
                  <Sun className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />
                ) : (
                  <Moon className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />
                ))}
            </button>
            {/* <button className="px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-700 dark:text-white transition-colors">
              Menu
            </button> */}
          </div>
        </header>

        {/* Main Content */}
        <main className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-5xl font-bold dark:text-white transition-colors">
                Best of the week
              </h1>
              <Link
                href="/blog"
                className="text-sm hover:underline dark:text-zinc-300 transition-colors"
              >
                See all posts →
              </Link>
            </div>

            {/* Featured Article */}
            <Link href={`/blog/${blog._id}`} className="block">
              <article className="relative rounded-[24px] overflow-hidden bg-sky-100 dark:bg-sky-900 transition-colors">
                <div className="absolute top-4 left-4 z-10 flex space-x-2">
                  <span className="px-3 py-1 text-sm bg-white dark:bg-zinc-800 dark:text-white rounded-full transition-colors">
                    {formatDate(blog.date)}
                  </span>
                  <span className="px-3 py-1 text-sm bg-white dark:bg-zinc-800 dark:text-white rounded-full transition-colors">
                    {blog.category}
                  </span>
                </div>
                <Image
                  src={blog.image}
                  alt="People wearing hats on a sunny day"
                  width={800}
                  height={500}
                  className="w-full object-cover aspect-[16/10]"
                />
                <div className="absolute bottom-8 right-8 max-w-md bg-white/50 backdrop-blur-md dark:bg-zinc-800/50 p-6 rounded-[20px] transition-colors">
                  <h2 className="text-2xl font-bold mb-2 dark:text-white text-black transition-colors">
                    {blog.title}
                  </h2>
                </div>
              </article>
            </Link>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-sky-100 dark:bg-sky-900/50 p-6 rounded-[24px] transition-colors">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium dark:text-white transition-colors">
                  ADS
                </span>
                <Plus className="w-5 h-5 dark:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-2 dark:text-white transition-colors">
                Become A<br />
                BROADCAST MEMBER
              </h3>
              <p className="text-xl font-bold mb-4 dark:text-white transition-colors">
                Real talk in a corporate world
              </p>
              <Link
                href="/learn-more"
                className="text-sm hover:underline dark:text-zinc-300 transition-colors"
              >
                Learn more
              </Link>
            </div>

            <div className="relative rounded-[24px] overflow-hidden bg-sage-100 dark:bg-zinc-700 transition-colors">
              <span className="absolute top-4 right-4 bg-white/80 dark:bg-zinc-800/80 px-2 py-1 rounded-full text-sm dark:text-white transition-colors">
                24
              </span>
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Featured person"
                width={400}
                height={400}
                className="w-full object-cover aspect-square"
              />
              <Link
                href="/blog"
                className="absolute bottom-4 left-4 bg-white dark:bg-zinc-800 px-4 py-2 rounded-full text-sm dark:text-white transition-colors"
              >
                See all Posts →
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
