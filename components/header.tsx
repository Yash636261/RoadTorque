"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Car, Moon, Search, Sun } from 'lucide-react';

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Car className="h-8 w-8" />
            <span className="text-2xl font-bold">RoadTorque</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/blog" className="hover:text-primary">Blog</Link>
            <Link href="/reviews" className="hover:text-primary">Reviews</Link>
            <Link href="/news" className="hover:text-primary">News</Link>
            <Link href="/about" className="hover:text-primary">About</Link>
          </nav>

          <div className="flex items-center space-x-4">
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
              >
                <Search className="h-5 w-5" />
              </Button>
            )}
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}