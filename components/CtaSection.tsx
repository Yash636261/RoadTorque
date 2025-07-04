import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function CtaSection() {
  return (
    <div className="max-w-full overflow-hidden border-y border-border bg-accent pt-10 md:pt-16 lg:pt-20">
      <div className="relative flex flex-col px-4 md:flex-row md:space-x-12 md:px-8">
        <div className="mb-[18rem] md:mb-28 md:w-2/3 lg:shrink-0 xl:mb-20 xl:w-1/2">
          <h3 className="mb-3 text-4xl font-semibold md:mb-4 md:text-5xl lg:mb-6">
            Stay Ahead in the Automotive World
          </h3>
          <p className="mb-8 text-muted-foreground lg:text-lg">
            Get the latest automotive news, in-depth reviews, and expert
            insights delivered straight to you. From breaking industry updates
            to detailed car reviews, we keep you informed about everything that
            matters in the world of automobiles.
          </p>
          <Link href="/blog">
            <Button size="lg" className="gap-2">
              Read Latest News
            </Button>
          </Link>
        </div>
        <div className="absolute bottom-0 right-1/2 mr-6 h-min w-[110%] max-w-md translate-x-1/2 md:-right-36 md:mr-0 md:w-3/4 md:max-w-xl md:translate-x-0 lg:mt-auto xl:relative xl:right-0 xl:h-full xl:w-full xl:max-w-full">
          <div className="relative aspect-[8/5] h-full min-h-[16rem] w-full">
            {/* Card 1 - Most tilted */}
            <Link href="/blog/expert-insights" className="group cursor-pointer">
              <div className="absolute right-0 top-0 z-40 flex aspect-[3/5] w-3/5 -translate-x-[24%] translate-y-[24%] -rotate-[30deg] justify-center overflow-clip rounded-3xl bg-background shadow-lg shadow-foreground/20 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl md:max-xl:-translate-x-[8%] md:max-xl:translate-y-[16%] group-hover:-rotate-[28deg]">
                <div className="relative h-full w-full overflow-hidden">
                  <Image
                    src="/images/expert-insights.png"
                    alt="Expert automotive insights"
                    width={500}
                    height={500}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="absolute bottom-4 left-4 text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Expert Insights
                  </span>
                </div>
              </div>
            </Link>

            {/* Card 2 - Middle tilt */}
            <Link href="/blog/automotive-news" className="group cursor-pointer">
              <div className="absolute right-0 top-0 z-40 flex aspect-[3/5] w-3/5 -translate-x-[16%] translate-y-[8%] -rotate-[15deg] justify-center overflow-clip rounded-3xl bg-background shadow-xl shadow-foreground/20 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl md:max-xl:-translate-x-[6%] md:max-xl:translate-y-[6%] group-hover:-rotate-[13deg]">
                <div className="relative h-full w-full overflow-hidden">
                  <Image
                    src="/images/automotive-news.png"
                    alt="Breaking automotive news"
                    width={500}
                    height={500}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="absolute bottom-4 left-4 text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Latest News
                  </span>
                </div>
              </div>
            </Link>

            {/* Card 3 - No tilt */}
            <Link href="/blog/car-reviews" className="group cursor-pointer">
              <div className="absolute right-0 top-0 z-40 flex aspect-[3/5] w-3/5 items-center justify-center overflow-clip rounded-3xl bg-background shadow-2xl shadow-foreground/20 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                <div className="relative h-full w-full overflow-hidden">
                  <Image
                    src="/images/latest-car-review.png"
                    alt="Latest car review showcase"
                    width={500}
                    height={500}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="absolute bottom-4 left-4 text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Car Reviews
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
