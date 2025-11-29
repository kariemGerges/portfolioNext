import BlogPostDetailClient from './BlogPostDetailClient';
import { Metadata } from 'next';
import connectDB from '@/lib/db';
import Post from '@/lib/models/Post';

interface PageParams {
  slug: string;
}

type ParamsInput = PageParams | Promise<PageParams>;

interface BlogPost {
  _id: string;
  title: string;
  body: string | { content?: string; excerpt?: string; introduction?: string; [key: string]: any };
  date: string | Date;
  slug?: string;
  author: string;
  image?: string;
  categories?: Array<{ name: string; _id: string; description?: string }>;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: ParamsInput }): Promise<Metadata> {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  
  try {
    await connectDB();
    const post = await Post.findOne({
      $or: [{ slug: slug }, { _id: slug }]
    })
      .populate('categories', 'name description')
      .lean()
      .exec() as BlogPost | null;

    if (!post) {
      return {
        title: 'Post Not Found',
        description: 'The requested blog post could not be found.',
      };
    }

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://kariemgerges.com';
    const postUrl = `${baseUrl}/pages/blog/${post.slug || post._id}`;
    const excerpt = typeof post.body === 'string' 
      ? post.body.substring(0, 160).replace(/[#*]/g, '').trim() + '...'
      : (post.body?.excerpt || post.body?.introduction || 'Read this article on software engineering and development.').substring(0, 160) + '...';
    
    const categoryName = post.categories && post.categories.length > 0 
      ? post.categories[0].name 
      : 'Software Engineering';

    return {
      title: post.title,
      description: excerpt,
      keywords: [
        categoryName,
        'Software Engineering',
        'Web Development',
        'React',
        'Next.js',
        'TypeScript',
        post.title,
      ],
      authors: [{ name: post.author || 'Kariem Gerges' }],
      openGraph: {
        type: 'article',
        url: postUrl,
        title: post.title,
        description: excerpt,
        publishedTime: typeof post.date === 'string' ? post.date : post.date.toISOString(),
        authors: [post.author || 'Kariem Gerges'],
        tags: post.categories?.map((cat: any) => cat.name) || [],
        images: post.image ? [
          {
            url: post.image.startsWith('http') ? post.image : `${baseUrl}${post.image}`,
            width: 1200,
            height: 630,
            alt: post.title,
          }
        ] : [
          {
            url: `${baseUrl}/hero.jpg`,
            width: 1200,
            height: 630,
            alt: post.title,
          }
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: excerpt,
        images: post.image ? [post.image.startsWith('http') ? post.image : `${baseUrl}${post.image}`] : [`${baseUrl}/hero.jpg`],
        creator: '@kariemgerges',
      },
      alternates: {
        canonical: postUrl,
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Blog Post',
      description: 'Read this article on software engineering and development.',
    };
  }
}

export default async function BlogPostPage({ params }: { params: ParamsInput }) {
  const resolvedParams = await params;
  return <BlogPostDetailClient slug={resolvedParams.slug} />;
}
