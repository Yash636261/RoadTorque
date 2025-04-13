"use client";

import { useState } from "react";
import { Search } from "lucide-react";

type FilterOption = {
  name: string;
  count: number;
};

export default function NewsFilters() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters: FilterOption[] = [
    { name: "All", count: 28 },
    { name: "News", count: 12 },
    { name: "Automotive", count: 4 },
    { name: "Electric Vehicles", count: 12 },
    { name: "Technology", count: 12 },
    { name: "Classic Cars", count: 12 },
    { name: "Reviews", count: 12 },
  ];

  return (
    <div className="w-full bg-zinc-950 dark:bg-zinc-950 rounded-3xl text-white light:bg-zinc-100 light:text-zinc-900 p-6 md:p-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header with theme toggle */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            NEWS
          </h1>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row justify-between gap-6 items-start md:items-center">
          <div>
            <p className="text-sm text-zinc-400 mb-3 uppercase tracking-wider font-medium">
              FILTERS
            </p>
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.name}
                  onClick={() => setActiveFilter(filter.name)}
                  className={`
                    px-4 py-2 rounded-full text-sm transition-colors duration-200
                    ${
                      activeFilter === filter.name
                        ? "bg-white text-zinc-900 dark:bg-white dark:text-zinc-900 light:bg-zinc-900 light:text-white"
                        : "bg-zinc-800 text-white hover:bg-zinc-700 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700 light:bg-zinc-200 light:text-zinc-900 light:hover:bg-zinc-300"
                    }
                  `}
                >
                  {filter.name}{" "}
                  <span className="opacity-70">• {filter.count}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="w-full md:w-auto">
            <p className="text-sm text-zinc-400 mb-3 uppercase tracking-wider font-medium">
              SEARCH NEWS
            </p>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 h-4 w-4" />
              <input
                type="text"
                placeholder="I want to read about..."
                className="w-full md:w-80 bg-zinc-800 dark:bg-zinc-800 light:bg-zinc-200 light:text-zinc-900 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-hidden focus:ring-2 focus:ring-zinc-600 transition-colors"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
