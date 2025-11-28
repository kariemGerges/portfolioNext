import mongoose from 'mongoose';

/**
 * Schema for a blog post.
 */
const postSchema = new mongoose.Schema({
  // Author of the post.
  author: {
    type: String,
    required: true,
  },
  // Date the post was created.
  date: {
    type: Date,
    default: Date.now,
  },
  // Title of the post.
  title: {
    type: String,
    required: true,
  },
  // URL of the image for the post.
  image: {
    type: String,
    required: true,
  },
  // Body content of the post.
  body: {
    type: mongoose.Schema.Types.Mixed, // Allows storing JSON
    required: true,
  },
  // Categories that the post belongs to.
  categories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
    },
  ],
  // Comments on the post.
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment',
    },
  ],
  // Users who liked the post.
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  // Tags associated with the post.
  tags: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Tag',
    },
  ],
  // Slug for URL-friendly post links
  slug: {
    type: String,
    unique: true,
    sparse: true,
    index: true, // This creates the index, so we don't need to add it separately
  },
});

// Create slug from title before saving
postSchema.pre('save', function (next) {
  if (this.isModified('title') && !this.slug) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }
  next();
});

// Add indexes for better query performance
postSchema.index({ date: -1 }); // For sorting by date
// Note: slug index is already created by unique: true above
postSchema.index({ categories: 1 }); // For filtering by category
postSchema.index({ date: -1, categories: 1 }); // Compound index for common queries

const Post = mongoose.models.Post || mongoose.model('Post', postSchema);

export default Post;

