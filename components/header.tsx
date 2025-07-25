"use client";

import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Car, Moon, Search, Sun } from "lucide-react";
import { Teko } from "next/font/google";

const teko = Teko({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const leftmenu = [
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "Gallary",
      href: "/gallary",
    },
  ];

  const rightmenu = [
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  const mobilemenu = [...leftmenu, ...rightmenu];

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className=" max-md:border-b">
      <div className="container mx-auto">
        <nav>
          <div className="flex bg-gray-100 dark:bg-zinc-950 flex-wrap px-4 py-4 md:w-fit md:mx-auto justify-between md:flex-nowrap md:gap-10 md:border border-x-gray-500 rounded-b-3xl md:border-b-gray-500">
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
              <Link href="/" className="flex-center space-x-2">
                <span className={`text-3xl ${teko.className} font-medium`}>
                  RoadTorque
                </span>
              </Link>

              <button
                aria-label="Toggle Menu"
                className="ml-auto rounded-md px-2 py-1 text-gray-500 focus:text-blue-500 focus:outline-hidden dark:text-gray-300 md:hidden"
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
                  className="text-sm flex items-center justify-center font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"
                >
                  <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
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
