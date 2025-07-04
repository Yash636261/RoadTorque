"use client";

import GallaryFilters from "@/components/filters/GallaryFilters";
import { galleryImages } from "@/lib/gallery-data";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <div className="max-w-[2000px] mx-auto px-4 py-8">
        <GallaryFilters
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {filteredImages.length === 0 ? (
          <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              No images found
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              No images available for the selected category
            </p>
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 mt-8">
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="break-inside-avoid mb-4"
              >
                <div className="relative rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <div
                    className="relative"
                    style={{ aspectRatio: image.aspectRatio }}
                  >
                    <Image
                      src={image.imageUrl}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;
