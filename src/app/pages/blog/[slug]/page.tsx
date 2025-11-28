import BlogPostDetailClient from './BlogPostDetailClient';

interface PageParams {
  slug: string;
}

type ParamsInput = PageParams | Promise<PageParams>;

export default async function BlogPostPage({ params }: { params: ParamsInput }) {
  const resolvedParams = await params;
  return <BlogPostDetailClient slug={resolvedParams.slug} />;
}
