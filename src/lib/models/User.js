import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  // User's name
  name: {
    type: String,
    required: true,
  },
  // User's email
  email: {
    type: String,
    required: true,
    unique: true,
  },
  // User's profile picture URL
  picture: {
    type: String,
  },
  // Google ID (if authenticated via Google)
  googleId: {
    type: String,
    unique: true,
    sparse: true,
  },
  // Date the user was created
  date: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;

