"use client";
import { Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import * as z from "zod";
import { useActionState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useEffect } from "react";
import { toast } from "sonner";
import { SubscribeToNewsletter } from "@/lib/actions/newsletter.action";
const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
});

export default function NewsletterSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useActionState(
    SubscribeToNewsletter,
    {}
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

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
              <form
                action={formAction}
                ref={formRef}
                className="flex flex-1 items-center gap-2"
              >
                <Input
                  type="email"
                  placeholder="name@email.com"
                  autoCapitalize="off"
                  autoComplete="email"
                  autoCorrect="off"
                  {...form.register("email")}
                  required
                  className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 rounded-full"
                />
                <Button
                  type="submit"
                  className="rounded-full gap-2 bg-foreground text-background hover:bg-foreground/90"
                >
                  Join Now <ArrowRight className="w-4 h-4" />
                </Button>
              </form>
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
