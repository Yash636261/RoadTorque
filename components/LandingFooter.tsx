import Image from "next/image";
import Link from "next/link";

export default function LandingFooter() {
  return (
    <footer className="border-t border-neutral-100 dark:border-white/[0.1] px-8 py-20 bg-white dark:bg-neutral-950 w-full relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-sm text-neutral-500 flex sm:flex-row flex-col justify-between items-start md:px-8">
        {/* Logo and Copyright */}
        <div>
          <div className="mr-0 md:mr-4 md:flex mb-4">
            <Link
              className="font-normal flex space-x-2 items-center text-sm mr-4 text-black dark:text-white px-2 py-1 relative z-20"
              href="/"
            >
              <Image
                alt="logo"
                width={30}
                height={30}
                src="/Icons/favicon-32x32.png"
                unoptimized={true}
              />
              <span className="font-medium text-black dark:text-white">
                RoadTorque
              </span>
            </Link>
          </div>
          <div className="mt-2 ml-2">
            © copyright RoadTorque {new Date().getFullYear()}. All rights
            reserved.
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 items-start mt-10 sm:mt-0 md:mt-0">
          {/* Pages Column */}
          <div className="flex justify-center space-y-4 flex-col w-full">
            <p className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 font-bold">
              Pages
            </p>
            <ul className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 list-none space-y-4">
              <li className="list-none">
                <Link
                  className="transition-colors hover:text-text-neutral-800"
                  href="/blog"
                >
                  Blog
                </Link>
              </li>
              {/* <li className="list-none">
                <Link
                  className="transition-colors hover:text-text-neutral-800"
                  href="/contact"
                >
                  Contact
                </Link>
              </li> */}
              <li className="list-none">
                <Link
                  className="transition-colors hover:text-text-neutral-800"
                  href="/about"
                >
                  About
                </Link>
              </li>
              <li className="list-none">
                <Link
                  className="transition-colors hover:text-text-neutral-800"
                  href="/gallary"
                >
                  Gallary
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials Column */}
          {/* <div className="flex justify-center space-y-4 flex-col">
            <p className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 font-bold">
              Socials
            </p>
            <ul className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 list-none space-y-4">
              <li className="list-none">
                <Link
                  className="transition-colors hover:text-text-neutral-800"
                  href="https://github.com/Yash636261"
                >
                  Github
                </Link>
              </li>
              <li className="list-none">
                <Link
                  className="transition-colors hover:text-text-neutral-800"
                  href="https://www.linkedin.com/in/yash-suthar-22339124a"
                >
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div> */}

          {/* Legal Column */}
          <div className="flex justify-center space-y-4 flex-col">
            <p className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 font-bold">
              Legal
            </p>
            <ul className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 list-none space-y-4">
              <li className="list-none">
                <Link
                  className="transition-colors hover:text-text-neutral-800"
                  href="/privacy-policy"
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="list-none">
                <Link
                  className="transition-colors hover:text-text-neutral-800"
                  href="/terms-of-service"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Large Gradient Text */}
      <p className="text-center mt-20 text-5xl md:text-9xl lg:text-[12rem] xl:text-[13rem] font-bold bg-clip-text text-transparent bg-linear-to-b from-neutral-50 dark:from-neutral-950 to-neutral-200 dark:to-neutral-800 inset-x-0">
        RoadTorque
      </p>
    </footer>
  );
}
