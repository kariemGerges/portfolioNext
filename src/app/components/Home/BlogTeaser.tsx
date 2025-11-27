'use client';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import Link from 'next/link';

// Sample blog posts - replace with your actual blog data
const featuredPosts = [
    {
        id: 1,
        title: 'Building Scalable Enterprise Applications with Next.js',
        excerpt: 'Learn how to architect and build enterprise-grade applications that scale with your business needs using modern React and Next.js patterns.',
        date: '2024-01-15',
        readTime: '5 min read',
        category: 'Engineering',
        slug: 'building-scalable-enterprise-applications',
    },
    {
        id: 2,
        title: 'The Art of Clean Code: Best Practices for Modern Development',
        excerpt: 'Exploring principles and patterns that make code maintainable, readable, and efficient in large-scale projects.',
        date: '2024-01-08',
        readTime: '7 min read',
        category: 'Development',
        slug: 'clean-code-best-practices',
    },
    {
        id: 3,
        title: 'Design Systems: Creating Consistent UI Experiences',
        excerpt: 'How to build and maintain design systems that ensure consistency across products while enabling rapid development.',
        date: '2024-01-01',
        readTime: '6 min read',
        category: 'Design',
        slug: 'design-systems-consistent-ui',
    },
];

export default function BlogTeaser() {
    const prefersReducedMotion = useReducedMotion();

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
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredPosts.map((post, index) => (
                        <motion.article
                            key={post.id}
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
                            <Link href={`/pages/blog/${post.slug}`}>
                                <div className="h-full space-y-4">
                                    {/* Category */}
                                    <motion.div
                                        className="text-sm bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent font-light uppercase tracking-wide"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: prefersReducedMotion ? 0 : index * 0.15 + 0.2 }}
                                    >
                                        {post.category}
                                    </motion.div>

                                    {/* Title */}
                                    <h3 className="text-2xl sm:text-3xl font-light tracking-tight group-hover:bg-gradient-to-r group-hover:from-amber-600 group-hover:to-orange-600 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                                        {post.title}
                                    </h3>

                                    {/* Excerpt */}
                                    <p className="text-base text-gray-600 font-light leading-relaxed line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    {/* Meta Info */}
                                    <div className="flex items-center gap-4 text-sm text-gray-500 pt-4 border-t border-gray-200">
                                        <div className="flex items-center gap-1.5">
                                            <Calendar className="w-4 h-4" />
                                            <time dateTime={post.date}>
                                                {new Date(post.date).toLocaleDateString('en-US', {
                                                    month: 'short',
                                                    day: 'numeric',
                                                    year: 'numeric',
                                                })}
                                            </time>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Clock className="w-4 h-4" />
                                            <span>{post.readTime}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
