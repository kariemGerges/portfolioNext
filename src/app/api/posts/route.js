import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Post from '@/lib/models/Post';
import Category from '@/lib/models/Category';

// GET all posts
export async function GET(request) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const limit = parseInt(searchParams.get('limit')) || 12; // Default 12 posts per page
    const page = parseInt(searchParams.get('page')) || 1; // Default page 1
    const sort = searchParams.get('sort') || '-date'; // Default sort by date descending

    const filter = {};
    if (category) {
      filter.categories = category;
    }

    // Calculate skip for pagination
    const skip = (page - 1) * limit;

    // Optimize: Get total count and posts in parallel
    const [total, posts] = await Promise.all([
      Post.countDocuments(filter),
      Post.find(filter)
        .select('title slug date author image body categories') // Only select needed fields
        .populate('categories', 'name description')
        .sort(sort)
        .skip(skip)
        .limit(limit)
        .lean() // Use lean() for faster queries (returns plain JS objects)
        .exec(),
    ]);
    
    // Calculate pagination metadata
    const totalPages = Math.ceil(total / limit);
    const hasNextPage = page < totalPages;
    const hasPrevPage = page > 1;
    
    // Set cache headers for better performance
    return NextResponse.json({
      posts,
      pagination: {
        currentPage: page,
        totalPages,
        totalPosts: total,
        postsPerPage: limit,
        hasNextPage,
        hasPrevPage,
      },
    }, { 
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
      },
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch posts', message: error.message },
      { status: 500 }
    );
  }
}

// POST create new post
export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();
    const { author, title, image, body: postBody, categories } = body;

    // Validate required fields
    if (!author || !title || !image || !postBody) {
      return NextResponse.json(
        { error: 'Missing required fields: author, title, image, and body are required' },
        { status: 400 }
      );
    }

    const newPost = new Post({
      author,
      title,
      image,
      body: postBody,
      categories: categories || [],
    });

    const savedPost = await newPost.save();
    
    // Populate categories before returning
    await savedPost.populate('categories', 'name description');

    return NextResponse.json(savedPost, { status: 201 });
  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json(
      { error: 'Failed to create post', message: error.message },
      { status: 400 }
    );
  }
}

