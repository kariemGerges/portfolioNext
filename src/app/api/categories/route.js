import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Category from '@/lib/models/Category';

// GET all categories
export async function GET() {
  try {
    await connectDB();

    const filter = {};
    const categories = await Category.find(filter).exec();

    return NextResponse.json(categories, { status: 200 });
  } catch (error) {
    console.error('Error fetching categories:', error);
    return NextResponse.json(
      { error: 'Failed to fetch categories', message: error.message },
      { status: 500 }
    );
  }
}

// POST create new category
export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();
    const { name, description } = body;

    if (!name) {
      return NextResponse.json(
        { error: 'Missing required field: name is required' },
        { status: 400 }
      );
    }

    const newCategory = new Category({
      name,
      description: description || '',
    });

    const savedCategory = await newCategory.save();

    return NextResponse.json(savedCategory, { status: 201 });
  } catch (error) {
    console.error('Error creating category:', error);
    return NextResponse.json(
      { error: 'Failed to create category', message: error.message },
      { status: 400 }
    );
  }
}

