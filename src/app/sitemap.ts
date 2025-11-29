import { MetadataRoute } from 'next'
import connectDB from '@/lib/db';
import Post from '@/lib/models/Post';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://kariemgerges.com'
  
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/pages/work`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pages/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pages/resume`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];

  // Dynamic blog posts
  try {
    await connectDB();
    const posts = await Post.find({})
      .select('slug _id date')
      .sort('-date')
      .lean()
      .exec();

    const blogPosts: MetadataRoute.Sitemap = posts.map((post: any) => ({
      url: `${baseUrl}/pages/blog/${post.slug || post._id}`,
      lastModified: post.date ? new Date(post.date) : new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));

    return [...staticPages, ...blogPosts];
  } catch (error) {
    console.error('Error generating sitemap:', error);
    // Return static pages even if database fails
    return staticPages;
  }
}

