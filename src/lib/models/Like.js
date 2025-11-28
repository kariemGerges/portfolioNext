import mongoose from 'mongoose';

const likeSchema = new mongoose.Schema({
  // User who liked the post
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  // Post that was liked
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
    required: true,
  },
  // Date the like was created
  date: {
    type: Date,
    default: Date.now,
  },
});

// Ensure one like per user per post
likeSchema.index({ user: 1, post: 1 }, { unique: true });

const Like = mongoose.models.Like || mongoose.model('Like', likeSchema);

export default Like;

