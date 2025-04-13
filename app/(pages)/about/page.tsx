import React from "react";

const page = () => {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="w-full bg-zinc-950 dark:bg-zinc-950 rounded-3xl text-white light:bg-zinc-100 light:text-zinc-900 p-6 md:p-10 md:py-40 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          {/* Header with theme toggle */}
          <div className="flex justify-between items-center">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              ABOUT <br /> ROADTORQUE
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
