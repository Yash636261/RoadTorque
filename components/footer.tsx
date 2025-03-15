import Image from "next/image";
import Link from "next/link";
import { Twitter, Linkedin, Github, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-100 dark:border-white/[0.1] px-8 py-20 bg-white dark:bg-neutral-950 w-full relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-sm text-neutral-500 justify-between items-start md:px-8">
        <div className="flex flex-col items-center justify-center w-full relative">
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
                className="dark:invert"
              />
              <span className="font-medium text-black dark:text-white">
                RoadTorque
              </span>
            </Link>
          </div>

          <ul className="transition-colors flex sm:flex-row flex-col hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 list-none gap-4">
            <li className="list-none">
              <Link
                className="transition-colors hover:text-neutral-800 dark:hover:text-white"
                href="/products"
              >
                Products
              </Link>
            </li>
            <li className="list-none">
              <Link
                className="transition-colors hover:text-neutral-800 dark:hover:text-white"
                href="/blog"
              >
                Blog
              </Link>
            </li>
            <li className="list-none">
              <Link
                className="transition-colors hover:text-neutral-800 dark:hover:text-white"
                href="/privacy-policy"
              >
                Privacy
              </Link>
            </li>
            <li className="list-none">
              <Link
                className="transition-colors hover:text-neutral-800 dark:hover:text-white"
                href="/terms-of-service"
              >
                Terms
              </Link>
            </li>
          </ul>

          {/* Decorative divider with dashed line effect */}
          <div
            className="w-[calc(100%+var(--offset))] h-[var(--height)] bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)] [background-size:var(--width)_var(--height)] [mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)] [mask-composite:exclude] z-30 dark:bg-[linear-gradient(to_right,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)] max-w-7xl mx-auto mt-8"
            style={
              {
                "--background": "#ffffff",
                "--color": "rgba(0, 0, 0, 0.2)",
                "--height": "1px",
                "--width": "5px",
                "--fade-stop": "90%",
                "--offset": "200px",
                "--color-dark": "rgba(255, 255, 255, 0.2)",
                maskComposite: "exclude",
              } as React.CSSProperties
            }
          ></div>
        </div>

        <div className="flex sm:flex-row flex-col justify-between mt-8 items-center w-full">
          <p className="text-neutral-500 dark:text-neutral-400 mb-8 sm:mb-0">
            ©RoadTorque {new Date().getFullYear()}
          </p>

          <div className="flex gap-4">
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-6 w-6 text-neutral-500 dark:text-neutral-300 hover:text-neutral-700 dark:hover:text-white transition-colors" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6 text-neutral-500 dark:text-neutral-300 hover:text-neutral-700 dark:hover:text-white transition-colors" />
            </Link>
            <Link href="#" aria-label="GitHub">
              <Github className="h-6 w-6 text-neutral-500 dark:text-neutral-300 hover:text-neutral-700 dark:hover:text-white transition-colors" />
            </Link>
            <Link href="#" aria-label="Facebook">
              <Facebook className="h-6 w-6 text-neutral-500 dark:text-neutral-300 hover:text-neutral-700 dark:hover:text-white transition-colors" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram className="h-6 w-6 text-neutral-500 dark:text-neutral-300 hover:text-neutral-700 dark:hover:text-white transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
