import {
  ArrowRight,
  Car,
  Wrench,
  Battery,
  Camera,
  FileText,
  Newspaper,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8 space-y-8 sm:space-y-10 md:space-y-20 lg:space-y-40">
      <div className="w-full bg-zinc-950 dark:bg-zinc-950 rounded-2xl sm:rounded-3xl text-white light:bg-zinc-100 light:text-zinc-900 p-4 sm:p-6 md:p-10 md:py-20 lg:py-32 transition-colors duration-300">
        {/* Header with theme toggle */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight">
            ABOUT <br /> ROADTORQUE
          </h1>
        </div>

        <div className="flex items-center gap-3 sm:gap-4 mt-6 sm:mt-10">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight">
            Explore Roadtorque
          </h2>
          <Link
            href="/"
            className="p-1.5 sm:p-2 rounded-full bg-white w-fit group-hover:rotate-45 transition-transform duration-400"
          >
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-black" />
          </Link>
        </div>
      </div>

      {/* What We Cover Section */}
      <section className="px-2 sm:px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-2 sm:mb-4">
          What We Cover
        </h2>
        <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:mb-8 text-muted-foreground">
          From breaking automotive news and first-look previews to detailed
          reviews, hands-on experiences, and expert comparisons – we bring it
          all under one digital roof:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="bg-muted p-2 sm:p-3 rounded-lg">
              <Car className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">
                Latest Car Launches
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Stay updated with the newest vehicles hitting the market.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 sm:gap-4">
            <div className="bg-muted p-2 sm:p-3 rounded-lg">
              <Wrench className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">
                In-depth Reviews & Road Tests
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Honest evaluations from our experienced team.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 sm:gap-4">
            <div className="bg-muted p-2 sm:p-3 rounded-lg">
              <Battery className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">
                EV Trends & Innovations
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                The latest in electric vehicle technology and development.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 sm:gap-4">
            <div className="bg-muted p-2 sm:p-3 rounded-lg">
              <Camera className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">
                Photo & Video Features
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Visual showcases of the most exciting automobiles.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 sm:gap-4">
            <div className="bg-muted p-2 sm:p-3 rounded-lg">
              <FileText className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">
                Buying Guides & Comparisons
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Expert advice to help you make informed decisions.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 sm:gap-4">
            <div className="bg-muted p-2 sm:p-3 rounded-lg">
              <Newspaper className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">
                Industry News & Insider Reports
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Breaking stories from the automotive world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trust Us Section */}
      <section className="px-2 sm:px-4">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10 items-center">
          <div className="w-full lg:w-1/2">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-2 sm:mb-4">
              Why Trust Us?
            </h2>
            <div>
              <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 text-muted-foreground">
                Our content is curated and crafted by car lovers for car lovers.
                We believe in honest opinions, thorough research, and real-world
                experience. We don&apos;t just talk specs — we get behind the
                wheel, feel the drive, and share the truth.
              </p>
              <div className="flex gap-3 sm:gap-4">
                <div className="h-1 w-16 sm:w-20 bg-primary rounded-full"></div>
                <div className="h-1 w-8 sm:w-10 bg-muted rounded-full"></div>
                <div className="h-1 w-4 sm:w-5 bg-muted rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative aspect-square shadow-lg rounded-xl overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dt77luabi/image/upload/v1744539308/image-1742805563738_jdwp8c.png"
              alt="Our team testing vehicles"
              width={500}
              unoptimized={true}
              height={500}
              className="object-cover aspect-square w-full h-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
