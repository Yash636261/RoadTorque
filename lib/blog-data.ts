export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    avatar: string;
  };
  relatedPosts?: number[];
  seo: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
    canonicalUrl?: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "2025 Tesla Roadster: A New Era of Electric Performance",
    excerpt: "An in-depth look at Tesla's latest masterpiece, combining unprecedented range with supercar performance.",
    content: `The 2025 Tesla Roadster represents a quantum leap in electric vehicle technology, setting new benchmarks in performance, range, and innovation. This comprehensive review explores every aspect of Tesla's latest masterpiece.

## Unprecedented Performance

The new Roadster boasts truly remarkable performance figures:
- 0-60 mph in 1.9 seconds
- Top speed of over 250 mph
- Quarter-mile time under 8.8 seconds

These numbers don't just make it the fastest electric car - they make it one of the fastest production cars ever made.

## Revolutionary Battery Technology

At the heart of the 2025 Roadster lies Tesla's next-generation battery technology:
- 200+ kWh battery pack
- 620+ miles of range
- New cell chemistry for improved longevity
- Advanced thermal management system

## Design and Aerodynamics

The Roadster's design is a perfect marriage of form and function:
- Record-breaking 0.21 drag coefficient
- Active aerodynamic elements
- Removable glass roof
- Spacious interior despite compact dimensions

## The Future of Performance

This isn't just another fast car - it's a glimpse into the future of automotive performance. The 2025 Tesla Roadster proves that sustainable technology and extreme performance aren't mutually exclusive.`,
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1920&q=80",
    category: "Electric Vehicles",
    date: "2025-01-15",
    readTime: "8 min read",
    author: {
      name: "Alex Thompson",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80"
    },
    relatedPosts: [2, 6],
    seo: {
      metaTitle: "2025 Tesla Roadster Review: The Future of Electric Supercars | RoadTorque",
      metaDescription: "Discover the groundbreaking 2025 Tesla Roadster with its 620+ mile range, 1.9s 0-60 time, and revolutionary battery technology. Read our comprehensive review.",
      keywords: ["Tesla Roadster", "electric supercar", "EV performance", "Tesla 2025", "electric vehicle review"],
      canonicalUrl: "https://roadtorque.com/blog/1"
    }
  },
  {
    id: 2,
    title: "The Evolution of Autonomous Driving Technology",
    excerpt: "Exploring how self-driving technology is reshaping the automotive industry and our future.",
    content: `Autonomous driving technology has evolved dramatically over the past decade, transforming from science fiction into reality. This article explores the current state of self-driving technology and its implications for the future of transportation.

## The Levels of Autonomy

Understanding the different levels of autonomous driving:
- Level 1: Driver Assistance
- Level 2: Partial Automation
- Level 3: Conditional Automation
- Level 4: High Automation
- Level 5: Full Automation

## Current Technology

Today's autonomous vehicles rely on a sophisticated array of sensors and systems:
- LiDAR sensors
- Radar systems
- Computer vision cameras
- Advanced GPS
- Artificial Intelligence and Machine Learning

## The Road Ahead

The future of autonomous driving holds immense promise:
- Reduced accidents and improved safety
- Enhanced mobility for elderly and disabled
- Reduced traffic congestion
- Environmental benefits

## Challenges and Considerations

Several hurdles remain before widespread adoption:
- Regulatory framework
- Public trust
- Technical challenges
- Ethical considerations`,
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1920&q=80",
    category: "Technology",
    date: "2025-01-14",
    readTime: "6 min read",
    author: {
      name: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80"
    },
    relatedPosts: [1, 4],
    seo: {
      metaTitle: "The Evolution of Autonomous Driving Technology | RoadTorque",
      metaDescription: "Explore the latest developments in self-driving technology, from current capabilities to future possibilities. Learn about the 5 levels of autonomous driving.",
      keywords: ["autonomous driving", "self-driving cars", "autonomous vehicles", "car technology", "future of transportation"],
      canonicalUrl: "https://roadtorque.com/blog/2"
    }
  }
];