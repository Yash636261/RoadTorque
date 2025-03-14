"use client";

import { Fragment, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Car, Moon, Search, Sun } from "lucide-react";

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const leftmenu = [
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "Reviews",
      href: "/reviews",
    },
  ];

  const rightmenu = [
    {
      label: "News",
      href: "/news",
    },
    {
      label: "About",
      href: "/about",
    },
  ];

  const mobilemenu = [...leftmenu, ...rightmenu];

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <nav>
          <div className="flex flex-wrap justify-between md:flex-nowrap md:gap-10">
            <div className="order-1 hidden w-full flex-col items-center justify-start md:order-none md:flex md:w-auto md:flex-1 md:flex-row md:justify-end">
              {leftmenu.map((item, index) => (
                <Fragment key={`${item.label}${index}`}>
                  <Link
                    href={item.href}
                    className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"
                  >
                    {item.label}
                  </Link>
                </Fragment>
              ))}
            </div>

            <div className="flex w-full items-center justify-between md:w-auto">
              <Link href="/" className="flex items-center space-x-2">
                <Car className="h-8 w-8" />
                <span className="text-2xl font-bold">RoadTorque</span>
              </Link>

              <button
                aria-label="Toggle Menu"
                className="ml-auto rounded-md px-2 py-1 text-gray-500 focus:text-blue-500 focus:outline-none dark:text-gray-300 md:hidden"
                onClick={handleToggleMobileMenu}
              >
                <svg
                  className="h-6 w-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  )}
                </svg>
              </button>
            </div>

            <div className="order-2 hidden w-full flex-col items-center justify-start md:order-none md:flex md:w-auto md:flex-1 md:flex-row">
              {rightmenu.map((item, index) => (
                <Fragment key={`${item.label}${index}`}>
                  <Link
                    href={item.href}
                    className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"
                  >
                    {item.label}
                  </Link>
                </Fragment>
              ))}
              <div className="flex items-center space-x-4 ml-4">
                {isSearchOpen ? (
                  <div className="relative">
                    <Input
                      type="search"
                      placeholder="Search articles..."
                      className="w-64"
                      autoFocus
                      onBlur={() => setIsSearchOpen(false)}
                    />
                    <Search className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
                  </div>
                ) : (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsSearchOpen(true)}
                    className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"
                  >
                    <Search className="h-5 w-5" />
                  </Button>
                )}

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"
                >
                  <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                </Button>
              </div>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="order-2 -ml-4 mt-4 flex w-full flex-col items-center justify-start md:hidden">
              {mobilemenu.map((item, index) => (
                <Fragment key={`${item.label}${index}`}>
                  <Link
                    href={item.href}
                    className="w-full px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"
                  >
                    {item.label}
                  </Link>
                </Fragment>
              ))}
              <div className="flex w-full items-center justify-center space-x-4 px-5 py-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsSearchOpen(true)}
                  className="text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"
                >
                  <Search className="h-5 w-5" />
                  <span className="ml-2">Search</span>
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"
                >
                  <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="ml-2">Theme</span>
                </Button>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
