# 🚗 RoadTorque - Automotive Excellence

A modern, full-stack automotive blog and news platform built with Next.js 15, TypeScript, and MongoDB. RoadTorque provides comprehensive automotive news, reviews, and insights with a beautiful, responsive design.

## ✨ Features

### 🎯 Core Features

- **Automotive Blog & News Platform** - Comprehensive coverage of automotive industry
- **Modern Tech Stack** - Built with Next.js 15, TypeScript, and Tailwind CSS
- **Responsive Design** - Mobile-first approach with beautiful UI components
- **SEO Optimized** - Built-in SEO features with metadata and structured data
- **Dark/Light Theme** - Theme switching with system preference detection
- **Performance Optimized** - Server-side rendering, image optimization, and caching

### 📝 Content Management

- **Blog System** - Create, edit, and manage automotive blog posts
- **News Section** - Dedicated news coverage with filtering
- **Reviews Platform** - Car reviews with detailed analysis
- **Gallery** - High-quality automotive images and galleries
- **Categories** - Organized content by automotive categories

### 🔧 Technical Features

- **MongoDB Integration** - Robust database with Mongoose ODM
- **Authentication** - NextAuth.js integration for admin access
- **Server Actions** - Modern form handling and data mutations
- **API Routes** - RESTful API endpoints for data management
- **Image Optimization** - Cloudinary integration for media management
- **Analytics** - Vercel Analytics and Microsoft Clarity integration

## 🛠️ Tech Stack

### Frontend

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Shadcn/ui** - Beautiful, customizable components
- **Framer Motion** - Smooth animations and transitions

### Backend & Database

- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **NextAuth.js** - Authentication solution
- **Server Actions** - Server-side form handling

### Development & Deployment

- **Vercel** - Hosting and deployment platform
- **Cloudinary** - Cloud image management
- **ESLint** - Code linting
- **pnpm** - Fast package manager

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm
- MongoDB database
- Cloudinary account (for image uploads)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/RoadTorque.git
   cd RoadTorque
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:

   ```env
   # Database
   MONGODB_URI=your_mongodb_connection_string

   # Authentication
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=http://localhost:3000

   # Cloudinary
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret

   # App
   NEXT_PUBLIC_APP_URL=http://localhost:3000

   # Analytics (Optional)
   MICROSOFT_CLARITY_ID=your_clarity_id
   ```

4. **Run the development server**

   ```bash
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
RoadTorque/
├── app/                          # Next.js App Router
│   ├── (pages)/                  # Route groups
│   │   ├── about/               # About page
│   │   ├── blog/                # Blog pages
│   │   ├── contact/             # Contact page
│   │   ├── gallery/             # Gallery pages
│   │   ├── news/                # News pages
│   │   └── reviews/             # Reviews pages
│   ├── admin/                   # Admin dashboard
│   ├── api/                     # API routes
│   ├── components/              # App-specific components
│   ├── lib/                     # Utilities and configurations
│   └── layout.tsx              # Root layout
├── components/                   # Shared components
│   ├── ui/                      # Shadcn/ui components
│   ├── filters/                 # Filter components
│   └── ...                      # Other shared components
├── lib/                         # Library code
│   ├── actions/                 # Server actions
│   ├── models/                  # MongoDB models
│   └── ...                      # Utilities
├── public/                      # Static assets
└── hooks/                       # Custom React hooks
```

## 🎨 Key Components

### Core Components

- **Hero Section** - Featured blog post showcase
- **Blog Cards** - Responsive blog post previews
- **Category Grid** - Automotive category navigation
- **Newsletter Section** - Email subscription
- **FAQ Section** - Frequently asked questions
- **CTA Section** - Call-to-action components

### Admin Features

- **Blog Management** - Create and edit blog posts
- **News Management** - Manage news articles
- **Review System** - Write and publish car reviews
- **Content Filtering** - Advanced filtering and search

## 🔧 Configuration

### MongoDB Setup

The application uses MongoDB with Mongoose for data modeling. Key models include:

- **Blog** - Blog posts with SEO metadata
- **Subscribers** - Newsletter subscribers

### Image Management

Images are handled through Cloudinary integration with:

- Automatic optimization
- Responsive image delivery
- Cloud storage management

### Authentication

NextAuth.js provides:

- Admin authentication
- Protected routes
- Session management

## 📊 API Endpoints

### Blog API

- `GET /api/blogs` - Fetch all blog posts
- `POST /api/blogs` - Create new blog post

### Authentication

- `GET /api/auth/[...nextauth]` - NextAuth.js endpoints

## 🚀 Deployment

### Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Set up environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Environment Variables

Ensure all required environment variables are set in your deployment platform.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing React framework
- **Vercel** - For hosting and deployment
- **Tailwind CSS** - For the utility-first CSS framework
- **Shadcn/ui** - For beautiful component library
- **MongoDB** - For the database solution

## 📞 Support

For support, email support@roadtorque.com or create an issue in the GitHub repository.

---

**RoadTorque** - Your premier destination for automotive news, reviews, and insights. 🚗✨
