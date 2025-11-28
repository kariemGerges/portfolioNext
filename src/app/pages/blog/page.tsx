'use client';
import { motion } from 'framer-motion';
import { Calendar, Clock, BookOpen, ArrowLeft, ChevronLeft, ChevronRight, Search } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect, useMemo, useCallback } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import BlogImage from '@/app/components/BlogImage';
import { BlogListSkeleton } from '@/app/components/LoadingSkeleton';

interface BlogPost {
    _id: string;
    title: string;
    body: string | { excerpt?: string; introduction?: string };
    date: string;
    slug: string;
    categories?: Array<{ name: string; _id: string }>;
    image?: string;
    author?: string;
}

interface PaginationData {
    currentPage: number;
    totalPages: number;
    totalPosts: number;
    postsPerPage: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
}

// Helper function to calculate read time - memoized
const calculateReadTime = (body: string | { excerpt?: string; introduction?: string }): string => {
    let text = '';
    if (typeof body === 'string') {
        text = body;
    } else if (body.introduction) {
        text = body.introduction;
    } else if (body.excerpt) {
        text = body.excerpt;
    }
    const wordsPerMinute = 200;
    const words = text.split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
};

// Helper function to get excerpt from body - memoized
const getExcerpt = (body: string | { excerpt?: string; introduction?: string }): string => {
    if (typeof body === 'string') {
        return body.length > 200 ? body.substring(0, 200) + '...' : body;
    }
    if (body.introduction) {
        return body.introduction.length > 200 ? body.introduction.substring(0, 200) + '...' : body.introduction;
    }
    if (body.excerpt) {
        return body.excerpt.length > 200 ? body.excerpt.substring(0, 200) + '...' : body.excerpt;
    }
    return '';
};

export default function Blog() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const currentPage = parseInt(searchParams.get('page') || '1');
    
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [pagination, setPagination] = useState<PaginationData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        let isMounted = true;
        
        async function fetchPosts() {
            try {
                setLoading(true);
                const page = searchParams.get('page') || '1';
                const response = await fetch(`/api/posts?page=${page}&limit=12`, {
                    // Add cache for better performance
                    next: { revalidate: 60 },
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch posts');
                }
                const data = await response.json();
                if (isMounted) {
                    setPosts(data.posts || []);
                    setPagination(data.pagination || null);
                }
            } catch (err) {
                if (isMounted) {
                    setError(err instanceof Error ? err.message : 'An error occurred');
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        }

        fetchPosts();
        
        return () => {
            isMounted = false;
        };
    }, [searchParams]);

    const handlePageChange = useCallback((newPage: number) => {
        router.push(`/pages/blog?page=${newPage}`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [router]);

    // Memoize filtered posts to avoid recalculating on every render
    const filteredPosts = useMemo(() => {
        if (!searchQuery) return posts;
        const query = searchQuery.toLowerCase();
        return posts.filter(post => {
            return (
                post.title.toLowerCase().includes(query) ||
                getExcerpt(post.body).toLowerCase().includes(query) ||
                (post.categories && post.categories.some(cat => cat.name.toLowerCase().includes(query)))
            );
        });
    }, [posts, searchQuery]);

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Header Section */}
            <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/30 to-transparent pointer-events-none" />
                
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors mb-8"
                        >
                            <ArrowLeft size={16} />
                            <span>Back to Home</span>
                        </Link>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-8">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm mb-6">
                                    <div className="w-2 h-2 rounded-full bg-amber-600 animate-pulse" />
                                    <p className="text-xs sm:text-sm text-gray-600 tracking-wide uppercase font-medium">
                                        Blog
                                    </p>
                                </div>
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.1] mb-4 sm:mb-6 tracking-tight">
                                    Engineering
                                    <br />
                                    <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600 bg-clip-text text-transparent">
                                        Insights
                                    </span>
                                </h1>
                                <p className="text-base sm:text-lg lg:text-xl text-gray-600 font-light leading-relaxed max-w-2xl">
                                    Explore articles on software engineering, modern development practices, and building products that make a difference.
                                </p>
                            </div>
                        </div>

                        {/* Search Bar */}
                        <div className="relative max-w-md">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Blog Posts Section */}
            <section className="px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24">
                <div className="max-w-7xl mx-auto">
                    {loading ? (
                        <BlogListSkeleton />
                    ) : error ? (
                        <div className="text-center py-20">
                            <p className="text-red-600 text-lg">{error}</p>
                        </div>
                    ) : filteredPosts.length === 0 ? (
                        <div className="text-center py-20">
                            <p className="text-gray-600 text-lg">
                                {searchQuery ? 'No articles found matching your search.' : 'No blog posts yet. Check back soon!'}
                            </p>
                        </div>
                    ) : (
                        <>
                            {/* Results Count */}
                            {searchQuery && (
                                <div className="mb-8 text-sm text-gray-600">
                                    Found {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} matching "{searchQuery}"
                                </div>
                            )}

                            {/* Blog Posts Grid */}
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
                                {filteredPosts.map((post, index) => {
                                    const categoryName = post.categories && post.categories.length > 0 
                                        ? post.categories[0].name 
                                        : 'Uncategorized';
                                    const excerpt = getExcerpt(post.body);
                                    const readTime = calculateReadTime(post.body);
                                    const postDate = new Date(post.date).toISOString();

                                    return (
                                        <motion.article
                                            key={post._id}
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.05 }}
                                            className="group"
                                        >
                                            <Link href={`/pages/blog/${post.slug || post._id}`}>
                                                <div className="h-full bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-amber-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col">
                                                    {/* Featured Image */}
                                                    <div className="relative w-full h-48 sm:h-56 overflow-hidden bg-gray-100">
                                                        <BlogImage
                                                            src={post.image}
                                                            alt={post.title}
                                                            fill
                                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                                    </div>
                                                    
                                                    <div className="p-6 flex-1 flex flex-col">
                                                        {/* Category Badge */}
                                                        <div className="flex items-center gap-2 mb-4">
                                                            <BookOpen className="w-4 h-4 text-amber-600" />
                                                            <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider">
                                                                {categoryName}
                                                            </span>
                                                        </div>

                                                        {/* Title */}
                                                        <h2 className="text-xl sm:text-2xl font-light mb-3 tracking-tight text-gray-900 group-hover:text-amber-600 transition-colors line-clamp-2">
                                                            {post.title}
                                                        </h2>

                                                        {/* Excerpt */}
                                                        <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed mb-6 line-clamp-3 flex-1">
                                                            {excerpt}
                                                        </p>

                                                        {/* Meta Info */}
                                                        <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
                                                            <div className="flex items-center gap-4">
                                                                <div className="flex items-center gap-1.5">
                                                                    <Calendar className="w-4 h-4" />
                                                                    <time dateTime={postDate}>
                                                                        {new Date(post.date).toLocaleDateString('en-US', {
                                                                            month: 'short',
                                                                            day: 'numeric',
                                                                            year: 'numeric',
                                                                        })}
                                                                    </time>
                                                                </div>
                                                                <div className="flex items-center gap-1.5">
                                                                    <Clock className="w-4 h-4" />
                                                                    <span>{readTime}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </motion.article>
                                    );
                                })}
                            </div>

                            {/* Pagination */}
                            {!searchQuery && pagination && pagination.totalPages > 1 && (
                                <div className="flex items-center justify-center gap-2 mt-12">
                                    <button
                                        onClick={() => handlePageChange(pagination.currentPage - 1)}
                                        disabled={!pagination.hasPrevPage}
                                        className="flex items-center gap-2 px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:border-amber-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all min-h-[44px] touch-manipulation text-sm sm:text-base"
                                    >
                                        <ChevronLeft className="w-4 h-4" />
                                        <span>Previous</span>
                                    </button>

                                    <div className="flex items-center gap-1">
                                        {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map((pageNum) => {
                                            // Show first page, last page, current page, and pages around current
                                            const showPage = 
                                                pageNum === 1 ||
                                                pageNum === pagination.totalPages ||
                                                (pageNum >= pagination.currentPage - 1 && pageNum <= pagination.currentPage + 1);

                                            if (!showPage) {
                                                // Show ellipsis
                                                const prevPage = pageNum - 1;
                                                const nextPage = pageNum + 1;
                                                if (
                                                    (prevPage === 1 || prevPage === pagination.currentPage - 2) &&
                                                    (nextPage === pagination.totalPages || nextPage === pagination.currentPage + 2)
                                                ) {
                                                    return <span key={pageNum} className="px-2 text-gray-400">...</span>;
                                                }
                                                return null;
                                            }

                                            return (
                                                <button
                                                    key={pageNum}
                                                    onClick={() => handlePageChange(pageNum)}
                                                    className={`px-3 sm:px-4 py-2 sm:py-3 rounded-lg border transition-all min-w-[44px] min-h-[44px] touch-manipulation text-sm sm:text-base ${
                                                        pageNum === pagination.currentPage
                                                            ? 'bg-amber-600 text-white border-amber-600'
                                                            : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50 hover:border-amber-500'
                                                    }`}
                                                >
                                                    {pageNum}
                                                </button>
                                            );
                                        })}
                                    </div>

                                    <button
                                        onClick={() => handlePageChange(pagination.currentPage + 1)}
                                        disabled={!pagination.hasNextPage}
                                        className="flex items-center gap-2 px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:border-amber-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all min-h-[44px] touch-manipulation text-sm sm:text-base"
                                    >
                                        <span>Next</span>
                                        <ChevronRight className="w-4 h-4" />
                                    </button>
                                </div>
                            )}

                            {/* Pagination Info */}
                            {!searchQuery && pagination && (
                                <div className="text-center mt-8 text-sm text-gray-500">
                                    Showing {((pagination.currentPage - 1) * pagination.postsPerPage) + 1} to{' '}
                                    {Math.min(pagination.currentPage * pagination.postsPerPage, pagination.totalPosts)} of{' '}
                                    {pagination.totalPosts} articles
                                </div>
                            )}
                        </>
                    )}
                </div>
            </section>

            {/* Back to Home Link at Bottom */}
            <section className="px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
                <div className="max-w-7xl mx-auto">
                    <Link
                        href="/"
                        className="group inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black transition-colors"
                    >
                        <ArrowLeft size={16} />
                        <span>Back to Home</span>
                    </Link>
                </div>
            </section>
        </div>
    );
}
