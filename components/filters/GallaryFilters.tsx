"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { galleryCategories } from "@/lib/gallery-data";
import { Button } from "../ui/button";

type FilterOption = {
  name: string;
  count: number;
};

interface GallaryFiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const GallaryFilters = ({
  selectedCategory,
  onCategoryChange,
}: GallaryFiltersProps) => {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-hide">
      {galleryCategories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`
            px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
            ${
              selectedCategory === category
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-zinc-800 dark:text-gray-200 dark:hover:bg-zinc-700"
            }
          `}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default GallaryFilters;
