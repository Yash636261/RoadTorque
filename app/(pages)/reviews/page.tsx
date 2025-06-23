import ReviewFilters from "@/components/ReviewFilters";
import React from "react";

const page = () => {
  return (
    <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8 space-y-4 sm:space-y-8">
      <ReviewFilters />

      <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          No reviews found
        </h3>
        <p className="text-gray-500 dark:text-gray-400">
          There are no reviews available at the moment
        </p>
      </div>
    </div>
  );
};

export default page;
