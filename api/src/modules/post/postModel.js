import { Schema, model } from 'mongoose';

const postSchema = new Schema({
  user: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  images: [
    {
      type: String,
      required: false
    }
  ],
  likes: {
    type: Number,
    default: 0
  },
  comments: [
    {
      user: {
        type: String,
        required: true
      },
      comment: {
        type: String,
        required: true
      },
      timestamp: {
        type: Date,
        default: Date.now
      }
    }
  ],
  shares: {
    type: Number,
    default: 0
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const Post = model('Post', postSchema);

export default Post;
