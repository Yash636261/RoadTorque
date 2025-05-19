import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a title"],
      maxlength: [200, "Title cannot be more than 200 characters"],
    },
    excerpt: {
      type: String,
      required: [true, "Please provide an excerpt"],
      maxlength: [500, "Excerpt cannot be more than 500 characters"],
    },
    content: {
      type: String,
      required: [true, "Please provide content"],
    },
    image: {
      type: String,
      required: [true, "Please provide an image URL"],
    },
    category: {
      type: String,
      required: [true, "Please provide a category"],
    },
    views: {
      type: Number,
      default: 0,
    },
    author: {
      name: {
        type: String,
        required: [true, "Please provide author name"],
      },
      avatar: {
        type: String,
        required: [true, "Please provide author avatar"],
      },
    },
    seo: {
      metaTitle: String,
      metaDescription: String,
      keywords: [String],
      canonicalUrl: String,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    readTime: String,
    relatedPosts: [Number],
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
