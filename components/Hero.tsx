"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus, Moon, Sun, Search, Menu, X } from "lucide-react";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="md:p-4 p-2 flex items-center justify-center transition-colors duration-300 w-full">
      <div className="w-full bg-white dark:bg-black p-2 md:p-8 transition-colors duration-300">
        {/* Header */}
        <header className="flex items-center justify-between mb-8 md:mb-16">
          <button
            className="md:hidden p-2 rounded-full bg-zinc-100 dark:bg-zinc-700 transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />
            ) : (
              <Menu className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />
            )}
          </button>
          <Link
            href="/"
            className="font-bold dark:text-white transition-colors outline-hidden"
          >
            <span
              className={`text-2xl md:text-3xl ${teko.className} font-medium`}
            >
              RoadTorque
            </span>
          </Link>
          {/* Mobile Menu Button */}
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/articles"
              className="text-sm dark:text-zinc-200 transition-colors hover:text-zinc-600 dark:hover:text-zinc-400"
            >
              Articles
            </Link>
            <Link
              href="/blog"
              className="text-sm dark:text-zinc-200 transition-colors hover:text-zinc-600 dark:hover:text-zinc-400"
            >
              Blogs
            </Link>
            <Link
              href="/reviews"
              className="text-sm dark:text-zinc-200 transition-colors hover:text-zinc-600 dark:hover:text-zinc-400"
            >
              Reviews
            </Link>
          </nav>
          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="absolute top-20 h-full left-0 right-0 bg-white dark:bg-black p-4 md:hidden z-50 shadow-lg">
              <div className="flex flex-col space-y-4">
                <Link
                  href="/articles"
                  className="text-xl dark:text-zinc-200 font-semibold transition-colors hover:text-zinc-600 dark:hover:text-zinc-400"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Articles
                </Link>
                <Link
                  href="/blog"
                  className="text-xl dark:text-zinc-200 font-semibold transition-colors hover:text-zinc-600 dark:hover:text-zinc-400"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Blogs
                </Link>
                <Link
                  href="/reviews"
                  className="text-xl dark:text-zinc-200 font-semibold transition-colors hover:text-zinc-600 dark:hover:text-zinc-400"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Reviews
                </Link>
              </div>
            </nav>
          )}
          <div className="flex items-center space-x-4">
            {/* <button
              className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-700 transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />
            </button> */}
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
          </div>
        </header>

        {/* Main Content */}
        <main className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
          <div className="lg:col-span-2">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 md:mb-8 gap-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold dark:text-white transition-colors">
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
              <article className="relative rounded-[16px] md:rounded-[24px] overflow-hidden bg-sky-100 dark:bg-sky-900 transition-colors">
                <div className="absolute top-2 left-2 md:top-4 md:left-4 z-10 flex flex-wrap gap-2">
                  <span className="px-2 py-1 md:px-3 md:py-1 text-xs md:text-sm bg-white dark:bg-zinc-800 dark:text-white rounded-full transition-colors">
                    {formatDate(blog.date)}
                  </span>
                  <span className="px-2 py-1 md:px-3 md:py-1 text-xs md:text-sm bg-white dark:bg-zinc-800 dark:text-white rounded-full transition-colors">
                    {blog.category}
                  </span>
                </div>
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={800}
                  height={500}
                  unoptimized={true}
                  loading="eager"
                  className="w-full object-cover aspect-16/10"
                />
                <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 md:bottom-8 md:right-8 max-w-[90%] md:max-w-md bg-black/30 backdrop-blur-md dark:bg-zinc-800/50 p-4 md:p-6 rounded-[16px] md:rounded-[20px] transition-colors">
                  <h2 className="text-base sm:text-lg md:text-2xl font-bold mb-2 text-white transition-colors line-clamp-2">
                    {blog.title}
                  </h2>
                  <div className="ml-auto p-2 md:p-3 rounded-full bg-white w-fit hover:rotate-45 transition-transform duration-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 63 63"
                      fill="none"
                      className="h-3 w-3 md:h-4 md:w-4 text-black"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.08128 61.6791C-0.360427 60.2371 -0.360427 57.8995 1.08128 56.4582L50.1556 7.38353H18.4588C16.4199 7.38353 14.767 5.73066 14.767 3.69177C14.767 1.65288 16.4199 0 18.4588 0H59.0682C60.0473 0 60.9865 0.388965 61.679 1.08132C62.3709 1.7736 62.76 2.71264 62.76 3.69177V44.3013C62.76 46.3402 61.1068 47.993 59.0682 47.993C57.0296 47.993 55.3765 46.3402 55.3765 44.3013V12.6045L6.30218 61.6791C4.86047 63.1203 2.52299 63.1203 1.08128 61.6791Z"
                        fill="#000000"
                      />
                    </svg>
                  </div>
                </div>
              </article>
            </Link>
          </div>

          {/* Sidebar */}
          <div className="space-y-4 md:space-y-6">
            <div className="bg-sky-100 dark:bg-sky-900/50 p-4 md:p-6 rounded-[16px] md:rounded-[24px] transition-colors">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs md:text-sm font-medium dark:text-white transition-colors">
                  ADS
                </span>
                <Plus className="w-4 h-4 md:w-5 md:h-5 dark:text-white transition-colors" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 dark:text-white transition-colors">
                Become A<br />
                BROADCAST MEMBER
              </h3>
              <p className="text-base md:text-xl font-bold mb-4 dark:text-white transition-colors">
                Real talk in a corporate world
              </p>
              <Link
                href="/blog"
                className="text-xs md:text-sm hover:underline dark:text-zinc-300 transition-colors"
              >
                Learn more
              </Link>
            </div>

            <div className="relative rounded-[16px] md:rounded-[24px] overflow-hidden bg-sage-100 dark:bg-zinc-700 transition-colors">
              <Image
                src="https://res.cloudinary.com/dt77luabi/image/upload/v1742103670/a-visually-stunning-tilted-gallery-of-mu_5jeN2_GsTtirRblbY4qwvg_ZIU-svXGQS-Fuihrq60TMg_pr2zr9.webp"
                alt="Featured person"
                width={400}
                height={400}
                className="w-full object-cover aspect-square"
              />
              <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 flex items-center gap-2">
                <span className="bg-white/80 dark:bg-zinc-800/80 p-1.5 md:p-2 hover:bg-white dark:hover:bg-zinc-800 rounded-full text-xs md:text-sm dark:text-white transition-colors">
                  24
                </span>
                <Link
                  href="/blog"
                  className="outline-hidden bg-white/80 hover:bg-white dark:hover:bg-zinc-800 dark:bg-zinc-800/80 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm dark:text-white transition-colors"
                >
                  See all Posts →
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
