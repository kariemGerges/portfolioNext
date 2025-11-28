import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  // Author of the comment
  author: {
    type: String,
    required: true,
  },
  // Content of the comment
  content: {
    type: String,
    required: true,
  },
  // Date the comment was created
  date: {
    type: Date,
    default: Date.now,
  },
  // Post this comment belongs to
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
  },
  // User who made the comment (if authenticated)
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

const Comment = mongoose.models.Comment || mongoose.model('Comment', commentSchema);

export default Comment;

