import Link from "next/link";
import Image from "next/image";

const NotFound = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 px-4">
      <h1
        className="text-5xl sm:text-7xl font-bold text-orange-400 mb-2 text-center"
        aria-label="404"
      >
        404
      </h1>
      <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8 text-center">
        Oops, you&apos;ve lost your engine.
      </p>
      <div className="mb-10 w-64 sm:w-full max-w-xs sm:max-w-md">
        <Image
          src="https://res.cloudinary.com/dt77luabi/image/upload/v1747576648/a-flat-vector-illustration-showcasing-a-_8Zb1qDYeQLq5Vtd0OopLSQ_D3J7wRMjR3eN-1ItCdNtLQ-removebg-preview_mluicu.webp"
          alt="404"
          width={320}
          height={320}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
      <Link
        href="/"
        tabIndex={0}
        aria-label="Back to Home"
        className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 rounded-md bg-black text-white font-semibold text-base sm:text-lg shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 transition"
      >
        BACK TO HOME
      </Link>
    </main>
  );
};

export default NotFound;
