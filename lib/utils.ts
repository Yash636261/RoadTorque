import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Gets the base URL for API requests
 * Uses NEXT_PUBLIC_APP_URL from environment variables if available
 * Falls back to http://localhost:3000 for development
 */
export function getBaseUrl() {
  // For client-side requests in development
  if (typeof window !== "undefined") {
    return window.location.origin;
  }

  // For server-side requests in development
  if (process.env.NEXT_PUBLIC_APP_URL) {
    // Remove trailing slash if present
    return process.env.NEXT_PUBLIC_APP_URL.replace(/\/$/, "");
  }

  // Fallback for development
  return "http://localhost:3000";
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
