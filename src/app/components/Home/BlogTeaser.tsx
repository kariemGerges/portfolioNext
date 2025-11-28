'use client';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect, useMemo, useCallback } from 'react';

interface BlogPost {
    _id: string;
    title: string;
    body: string | { excerpt?: string };
    date: string;
    slug: string;
    categories?: Array<{ name: string; _id: string }>;
    image?: string;
}

// Helper function to calculate read time - memoized
const calculateReadTime = (body: string | { excerpt?: string }): string => {
    const text = typeof body === 'string' ? body : body.excerpt || '';
    const wordsPerMinute = 200;
    const words = text.split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
};

// Helper function to get excerpt from body - memoized
const getExcerpt = (body: string | { excerpt?: string }): string => {
    if (typeof body === 'string') {
        return body.length > 150 ? body.substring(0, 150) + '...' : body;
    }
    return body.excerpt || '';
};

export default function BlogTeaser() {
    const prefersReducedMotion = useReducedMotion();
    const [featuredPosts, setFeaturedPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;
        
        async function fetchPosts() {
            try {
                const response = await fetch('/api/posts?limit=3&sort=-date');
                if (response.ok) {
                    const data = await response.json();
                    // Handle both old format (array) and new format (with posts property)
                    const posts = data.posts || data;
                    if (isMounted && Array.isArray(posts)) {
                        setFeaturedPosts(posts);
                    }
                }
            } catch (err) {
                console.error('Error fetching posts:', err);
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
    }, []);

    return (
        <section 
            id="blog" 
            className="relative py-20 lg:py-32 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ 
                        duration: prefersReducedMotion ? 0 : 0.8, 
                        ease: [0.16, 1, 0.3, 1] 
                    }}
                    className="mb-16 lg:mb-24"
                >
                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-8">
                        <div>
                            <div className="overflow-hidden">
                                <motion.h2
                                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light mb-6 tracking-tight"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ 
                                        duration: prefersReducedMotion ? 0 : 0.8, 
                                        delay: prefersReducedMotion ? 0 : 0.1,
                                        ease: [0.16, 1, 0.3, 1] 
                                    }}
                                >
                                    Latest <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Insights</span>
                                </motion.h2>
                            </div>
                            <motion.p
                                className="text-xl sm:text-2xl text-gray-600 font-light max-w-2xl"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ 
                                    duration: prefersReducedMotion ? 0 : 0.8, 
                                    delay: prefersReducedMotion ? 0 : 0.3,
                                    ease: [0.16, 1, 0.3, 1] 
                                }}
                            >
                                Thoughts on software engineering, design, and building products that matter.
                            </motion.p>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: prefersReducedMotion ? 0 : 0.4 }}
                        >
                            <Link
                                href="/pages/blog"
                                className="group inline-flex items-center gap-2 text-lg text-amber-600 hover:text-orange-600 transition-colors"
                            >
                                <span>View All</span>
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Blog Posts Grid */}
                {loading ? (
                    <div className="text-center py-12">
                        <p className="text-gray-600">Loading latest posts...</p>
                    </div>
                ) : featuredPosts.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-gray-600">No blog posts yet. Check back soon!</p>
                    </div>
                ) : (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredPosts.map((post, index) => {
                            const categoryName = post.categories && post.categories.length > 0 
                                ? post.categories[0].name 
                                : 'Uncategorized';
                            const excerpt = getExcerpt(post.body);
                            const readTime = calculateReadTime(post.body);
                            const postDate = new Date(post.date).toISOString();

                            return (
                                <motion.article
                                    key={post._id}
                                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    viewport={{ once: true, margin: '-50px' }}
                                    transition={{ 
                                        duration: prefersReducedMotion ? 0 : 0.6, 
                                        delay: prefersReducedMotion ? 0 : index * 0.15,
                                        ease: [0.16, 1, 0.3, 1] 
                                    }}
                                    className="group"
                                    whileHover={prefersReducedMotion ? {} : { y: -8 }}
                                >
                                    <Link href={`/pages/blog/${post.slug || post._id}`}>
                                        <div className="h-full space-y-4">
                                            {/* Category */}
                                            <motion.div
                                                className="text-sm bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent font-light uppercase tracking-wide"
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: prefersReducedMotion ? 0 : index * 0.15 + 0.2 }}
                                            >
                                                {categoryName}
                                            </motion.div>

                                            {/* Title */}
                                            <h3 className="text-2xl sm:text-3xl font-light tracking-tight group-hover:bg-gradient-to-r group-hover:from-amber-600 group-hover:to-orange-600 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                                                {post.title}
                                            </h3>

                                            {/* Excerpt */}
                                            <p className="text-base text-gray-600 font-light leading-relaxed line-clamp-3">
                                                {excerpt}
                                            </p>

                                            {/* Meta Info */}
                                            <div className="flex items-center gap-4 text-sm text-gray-500 pt-4 border-t border-gray-200">
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
                                    </Link>
                                </motion.article>
                            );
                        })}
                    </div>
                )}
            </div>
        </section>
    );
}
