import mongoose from 'mongoose';

const tagSchema = new mongoose.Schema({
  // Name of the tag
  name: {
    type: String,
    required: true,
    unique: true,
  },
  // Description of the tag
  description: {
    type: String,
  },
});

const Tag = mongoose.models.Tag || mongoose.model('Tag', tagSchema);

export default Tag;

