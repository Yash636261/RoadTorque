import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NewsletterSection() {
  return (
    <section className="w-full max-w-4xl mx-auto  py-12 px-4 md:px-6">
      <div className="bg-gradient-to-b from-background to-muted rounded-3xl p-8 sm:p-12 shadow-sm">
        <div className="flex flex-col items-center text-center">
          {/* Icon */}
          <div className="bg-background rounded-full p-4 shadow-sm mb-8">
            <Mail className="h-6 w-6" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
            <span className="text-muted-foreground">Join </span>
            <span className="text-foreground">RoadTorque </span>
            <span className="text-muted-foreground">Newsletter!</span>
          </h2>

          {/* Form */}
          <div className="w-full max-w-md mb-6">
            <div className="flex flex-col sm:flex-row gap-2 bg-background rounded-2xl sm:rounded-full p-1.5 shadow-sm">
              <Input
                type="email"
                placeholder="Your Email Address"
                className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 rounded-full"
              />
              <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90">
                Join Now!
              </Button>
            </div>
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl">
            Discover untapped automotive insights and gain a competitive edge.
            Subscribe to our newsletter for expert reviews, market trends, and
            actionable insights.
          </p>
        </div>
      </div>
    </section>
  );
}
