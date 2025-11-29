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
            className="relative py-12 sm:py-16 md:py-20 lg:py-32 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ 
                        duration: prefersReducedMotion ? 0 : 0.8, 
                        ease: [0.16, 1, 0.3, 1] 
                    }}
                    className="mb-10 sm:mb-12 md:mb-16 lg:mb-24"
                >
                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
                        <div>
                            <div className="overflow-hidden">
                                <motion.h2
                                    className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light mb-4 sm:mb-6 tracking-tight"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ 
                                        duration: prefersReducedMotion ? 0 : 0.8, 
                                        delay: prefersReducedMotion ? 0 : 0.1,
                                        ease: [0.16, 1, 0.3, 1] 
                                    }}
                                >
                                    Latest <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Insights</span>
                                </motion.h2>
                            </div>
                            <motion.p
                                className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 font-light max-w-2xl"
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
                                className="group inline-flex items-center gap-2 text-base sm:text-lg text-amber-400 hover:text-orange-400 transition-colors"
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
                        <p className="text-gray-300">Loading latest posts...</p>
                    </div>
                ) : featuredPosts.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-gray-300">No blog posts yet. Check back soon!</p>
                    </div>
                ) : (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
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
                                    className="group h-full"
                                    whileHover={prefersReducedMotion ? {} : { y: -8, scale: 1.02 }}
                                >
                                    <Link href={`/pages/blog/${post.slug || post._id}`} className="h-full block">
                                        <div className="h-full bg-gradient-to-br from-amber-900/20 to-orange-900/30 rounded-xl p-4 sm:p-5 lg:p-6 flex flex-col">
                                            <div className="flex flex-col space-y-3 sm:space-y-4 flex-grow">
                                                {/* Category */}
                                                <motion.div
                                                    className="text-xs sm:text-sm bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent font-light uppercase tracking-wide"
                                                    initial={{ opacity: 0 }}
                                                    whileInView={{ opacity: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: prefersReducedMotion ? 0 : index * 0.15 + 0.2 }}
                                                >
                                                    {categoryName}
                                                </motion.div>

                                                {/* Title */}
                                                <h3 className="text-xl sm:text-2xl lg:text-3xl font-light tracking-tight text-white group-hover:bg-gradient-to-r group-hover:from-amber-400 group-hover:to-orange-400 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                                                    {post.title}
                                                </h3>

                                                {/* Excerpt */}
                                                <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed line-clamp-3 flex-grow">
                                                    {excerpt}
                                                </p>
                                            </div>

                                            {/* Meta Info - Footer */}
                                            <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400 pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-gray-700">
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
