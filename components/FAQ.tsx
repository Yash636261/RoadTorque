"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface FaqItem {
  question: string;
  answer: React.ReactNode;
  answerText: string;
}

const faqData: FaqItem[] = [
  {
    question: "What kind of automotive content can I find on RoadTorque?",
    answer: (
      <>
        RoadTorque provides a wide range of automotive content including
        articles, blogs, reviews, and &apos;Best of the week&apos; posts. You
        can find news on new car launches, detailed car reviews, and insights
        across various categories like Electric Vehicles, Classic & Vintage
        cars, Luxury, Off-Road, and Sports vehicles. Explore our{" "}
        <Link href="/blog" className="text-primary hover:underline">
          blogs
        </Link>{" "}
        and{" "}
        <Link href="/reviews" className="text-primary hover:underline">
          reviews
        </Link>
        .
      </>
    ),
    answerText:
      "RoadTorque provides a wide range of automotive content including articles, blogs, reviews, and 'Best of the week' posts. You can find news on new car launches, detailed car reviews, and insights across various categories like Electric Vehicles, Classic & Vintage cars, Luxury, Off-Road, and Sports vehicles. Explore our blogs and reviews.",
  },
  {
    question: "How frequently is new content published on RoadTorque?",
    answer:
      "RoadTorque regularly publishes new content, with recent articles indicating frequent updates on new car launches and automotive news.",
    answerText:
      "RoadTorque regularly publishes new content, with recent articles indicating frequent updates on new car launches and automotive news.",
  },
  {
    question: "Can I subscribe to receive updates from RoadTorque?",
    answer: (
      <>
        Yes, you can join the RoadTorque Newsletter to discover untapped
        automotive insights, expert reviews, market trends, and actionable
        insights delivered directly to your inbox.
      </>
    ),
    answerText:
      "Yes, you can join the RoadTorque Newsletter to discover untapped automotive insights, expert reviews, market trends, and actionable insights delivered directly to your inbox.",
  },
  {
    question:
      "What specific car brands or types of vehicles does RoadTorque cover?",
    answer: (
      <>
        RoadTorque covers a diverse range of vehicles and brands, including
        recent news on Honda, Kia, and Tata models. Content is categorized to
        help you find information on Electric Vehicles, Classic & Vintage cars,
        Luxury, Off-Road, and Sports vehicles, among others. See all our posts
        on the{" "}
        <Link href="/blog" className="text-primary hover:underline">
          blog
        </Link>
        .
      </>
    ),
    answerText:
      "RoadTorque covers a diverse range of vehicles and brands, including recent news on Honda, Kia, and Tata models. Content is categorized to help you find information on Electric Vehicles, Classic & Vintage cars, Luxury, Off-Road, and Sports vehicles, among others. See all our posts on the blog.",
  },
  {
    question:
      "Is RoadTorque a reliable source for automotive news and reviews?",
    answer: (
      <>
        RoadTorque aims to provide expert reviews, market trends, and actionable
        insights, with content contributed by individuals like Yash Suthar. The
        platform focuses on delivering &apos;Real talk in a corporate
        world&apos; to help readers gain a competitive edge in understanding the
        automotive landscape. Learn more{" "}
        <Link href="/about" className="text-primary hover:underline">
          about us
        </Link>
        .
      </>
    ),
    answerText:
      "RoadTorque aims to provide expert reviews, market trends, and actionable insights, with content contributed by individuals like Yash Suthar. The platform focuses on delivering 'Real talk in a corporate world' to help readers gain a competitive edge in understanding the automotive landscape. Learn more about us.",
  },
  {
    question: "Where can I find information about new car launches in India?",
    answer: (
      <>
        RoadTorque frequently covers new car launches in India, such as the
        Honda City Sport and the new Kia Carens Clavis. You can find details on
        features, powertrains, pricing, and booking information within our{" "}
        <Link href="/news" className="text-primary hover:underline">
          news section
        </Link>
        .
      </>
    ),
    answerText:
      "RoadTorque frequently covers new car launches in India, such as the Honda City Sport and the new Kia Carens Clavis. You can find details on features, powertrains, pricing, and booking information within our news section.",
  },
  {
    question: "Does RoadTorque cover electric vehicles (EVs)?",
    answer: (
      <>
        Yes, RoadTorque has a dedicated category for &apos;Electric
        Vehicles&apos; under &apos;Towards a Greener Future,&apos; providing
        insights and news on the latest developments in the EV sector. Check out
        our{" "}
        <Link
          href="/blog?category=Electric+Vehicles"
          className="text-primary hover:underline"
        >
          EV articles
        </Link>
        .
      </>
    ),
    answerText:
      "Yes, RoadTorque has a dedicated category for 'Electric Vehicles' under 'Towards a Greener Future,' providing insights and news on the latest developments in the EV sector. Check out our EV articles.",
  },
];

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 py-10 items-center justify-between font-medium transition-all hover:underline [&[data-state=open]>svg.plus]:hidden [&[data-state=closed]>svg.minus]:hidden",
        className
      )}
      {...props}
    >
      {children}
      <Plus className="h-4 w-4 shrink-0 transition-transform duration-200 plus" />
      <Minus className="h-4 w-4 shrink-0 transition-transform duration-200 minus" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const FAQ = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => {
      return {
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answerText,
        },
      };
    }),
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 px-5 bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto max-w-3xl px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <span className="text-primary font-semibold">FAQs</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter">
            Frequently asked{" "}
            <span className="text-muted-foreground">questions</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Have questions? We&apos;re here to help.
          </p>
        </div>
        <div className="mt-12">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            value={openAccordion || ""}
            onValueChange={(value) => setOpenAccordion(value)}
          >
            {faqData.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
