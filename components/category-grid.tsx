import Link from "next/link";
import Image from "next/image";

interface CategoryCardProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundColor: string;
  textColor: string;
  imageUrl?: string;
  bgImageUrl?: string;
  link: string;
  logo?: string;
  date?: string;
}

const CategoryCard = ({
  title,
  subtitle,
  description,
  backgroundColor,
  textColor,
  imageUrl,
  bgImageUrl,
  link,
  logo,
  date,
}: CategoryCardProps) => {
  return (
    <Link
      href={link}
      className="block h-full transition-transform hover:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary group"
    >
      <div
        className="relative h-full overflow-hidden rounded-xl p-4 md:p-6 flex flex-col"
        style={{ backgroundColor, color: textColor }}
      >
        {logo && (
          <div className="mb-4">
            <Image
              src={logo || "/placeholder.svg"}
              alt={`${title} logo`}
              width={120}
              height={40}
              className="object-contain"
            />
          </div>
        )}

        {bgImageUrl && (
          <div className="absolute top-0 left-0 w-full h-full">
            <Image
              src={bgImageUrl}
              alt=""
              width={1000}
              height={1000}
              className="object-cover"
            />
          </div>
        )}

        <div className="flex flex-col h-full justify-between z-10 w-full">
          {" "}
          {imageUrl && (
            <div className=" w-full  mb-2 md:mb-4">
              <Image
                src={imageUrl || "/placeholder.svg"}
                alt=""
                width={96}
                height={96}
                className="object-cover w-full"
                aria-hidden="true"
              />
            </div>
          )}
          <div className="flex-between w-full">
            <div>
              {subtitle && (
                <p className="text-xs md:text-sm font-medium mb-0.5 md:mb-1 opacity-80">
                  {subtitle}
                </p>
              )}
              <h3 className="text-lg md:text-xl font-bold  mb-1 md:mb-2">
                {title}
              </h3>
              {description && (
                <p className=" text-xs md:text-sm opacity-90">{description}</p>
              )}
            </div>
            <div className=" p-2 rounded-full bg-white w-fit group-hover:rotate-45 transition-transform duration-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 63 63"
                fill="none"
                className=" h-3 w-3"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.08128 61.6791C-0.360427 60.2371 -0.360427 57.8995 1.08128 56.4582L50.1556 7.38353H18.4588C16.4199 7.38353 14.767 5.73066 14.767 3.69177C14.767 1.65288 16.4199 0 18.4588 0H59.0682C60.0473 0 60.9865 0.388965 61.679 1.08132C62.3709 1.7736 62.76 2.71264 62.76 3.69177V44.3013C62.76 46.3402 61.1068 47.993 59.0682 47.993C57.0296 47.993 55.3765 46.3402 55.3765 44.3013V12.6045L6.30218 61.6791C4.86047 63.1203 2.52299 63.1203 1.08128 61.6791Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
          {date && (
            <div className="mt-2 md:mt-4 text-xs md:text-sm font-medium">
              {date}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default function CategoryGrid() {
  const categories = [
    {
      title: "Scoop",
      backgroundColor: "#222222",
      textColor: "#ffffff",
      link: "/customer-success",
      imageUrl:
        "https://res.cloudinary.com/dt77luabi/image/upload/v1742138950/ln8yc50uv24ehd1c7ws9__1_-removebg-preview_vbqszr.webp",
    },
    {
      title: "Sales",
      backgroundColor: "#5EFFAA",
      textColor: "#000000",
      link: "/format",
      imageUrl:
        "https://res.cloudinary.com/dt77luabi/image/upload/v1742134560/Screenshot_2025-03-16_194450_ww9edn.webp",
    },
    {
      title: "Mods",
      subtitle: "Ordinary to Extraordinary",
      backgroundColor: "#333333",
      textColor: "#ffffff",
      link: "/webinars/azure-data-lake",
      imageUrl:
        "https://res.cloudinary.com/dt77luabi/image/upload/v1742139814/xwd52m5sgwfvq9kphb4g__2_-removebg-preview_qpyndq.webp",
    },
    {
      title: "Electic Vehicles",
      description: "Towards a Greener Future",
      backgroundColor: "#f0f0f0",
      textColor: "#000000",
      link: "/eone",
      logo: "https://res.cloudinary.com/dt77luabi/image/upload/v1742134913/electric-refueling-svgrepo-com_snq10h.webp",
    },
    {
      title: "Classic & Vintage",
      description: "Timeless Machines, Endless Stories",
      backgroundColor: "#f5f5f5",
      textColor: "#000000",
      link: "/dynamics-gp",
      imageUrl:
        "https://res.cloudinary.com/dt77luabi/image/upload/v1742139814/y79ulwq7mflpyxi6vwyd__1_-removebg-preview_bnxd00.webp",
    },

    {
      title: "Luxury",
      subtitle: "Cars",
      backgroundColor: "#f5f5f5",
      textColor: "#333333",
      link: "/data-lake-tool",
      imageUrl:
        "https://res.cloudinary.com/dt77luabi/image/upload/v1742138512/u9z3ko2xwmrjvdymlls9__1_-removebg-preview_usyheq.webp",
    },
    {
      title: "Off-Road",
      backgroundColor: "#3333FF",
      textColor: "#ffffff",
      link: "/tech-tuesday",
      imageUrl:
        "https://res.cloudinary.com/dt77luabi/image/upload/v1742139815/okl6mbqgktpxzgsjqsn0__1_-removebg-preview_rjyppy.webp",
    },
    {
      title: "Sports",
      backgroundColor: "#333333",
      textColor: "#ffffff",
      link: "/popdock-features",
      imageUrl:
        "https://res.cloudinary.com/dt77luabi/image/upload/v1742138512/bkcr88zxuwcqqs33shvz__1_-removebg-preview_er8qwq.webp",
    },
  ];

  return (
    <section className="w-full py-12 px-4 md:px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Categories</h2>
        <div className=" columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}
