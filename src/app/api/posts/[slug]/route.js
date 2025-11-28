import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Post from '@/lib/models/Post';
import Category from '@/lib/models/Category';
import Comment from '@/lib/models/Comment';
import Like from '@/lib/models/Like';
import Tag from '@/lib/models/Tag';
import User from '@/lib/models/User';

// GET single post by slug
export async function GET(request, { params }) {
  try {
    await connectDB();

    // Next.js 16: params is now a Promise and must be awaited
    const { slug } = await params;

    // Try to find by slug first, then fall back to _id if slug doesn't exist
    // This handles both slug-based URLs and legacy _id-based URLs
    const post = await Post.findOne({
      $or: [
        { slug: slug },
        { _id: slug }
      ]
    })
      .populate('categories', 'name description')
      .populate('comments', 'author content date') // Only select needed comment fields
      .populate('likes', 'user date') // Only select needed like fields
      .populate('tags', 'name') // Only select needed tag fields
      .lean() // Use lean() for faster queries
      .exec();

    if (!post) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(post, { 
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
      },
    });
  } catch (error) {
    console.error('Error fetching post:', error);
    return NextResponse.json(
      { error: 'Failed to fetch post', message: error.message },
      { status: 500 }
    );
  }
}

