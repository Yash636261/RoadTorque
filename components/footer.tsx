import Link from 'next/link';
import { Car } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Car className="h-6 w-6" />
              <span className="text-xl font-bold">RoadTorque</span>
            </Link>
            <p className="text-muted-foreground">
              Your premier destination for automotive news, reviews, and insights.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/blog" className="hover:text-primary">Blog</Link></li>
              <li><Link href="/reviews" className="hover:text-primary">Reviews</Link></li>
              <li><Link href="/news" className="hover:text-primary">News</Link></li>
              <li><Link href="/about" className="hover:text-primary">About</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><Link href="/category/supercars" className="hover:text-primary">Supercars</Link></li>
              <li><Link href="/category/electric" className="hover:text-primary">Electric Vehicles</Link></li>
              <li><Link href="/category/classics" className="hover:text-primary">Classic Cars</Link></li>
              <li><Link href="/category/technology" className="hover:text-primary">Car Technology</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><Link href="/contact" className="hover:text-primary">Contact Us</Link></li>
              <li><Link href="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary">Terms of Use</Link></li>
              <li><Link href="/sitemap" className="hover:text-primary">Sitemap</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} RoadTorque. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}