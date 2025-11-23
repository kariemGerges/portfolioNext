'use client';
import { motion } from 'framer-motion';
import { Calendar, Clock, BookOpen, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

// Sample blog posts - replace with your actual blog data source
const blogPosts = [
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
    {
        id: 4,
        title: 'TypeScript Best Practices for Large Codebases',
        excerpt: 'Advanced TypeScript patterns and strategies for maintaining type safety and developer experience in enterprise applications.',
        date: '2023-12-20',
        readTime: '8 min read',
        category: 'Engineering',
        slug: 'typescript-best-practices',
    },
    {
        id: 5,
        title: 'Performance Optimization in React Applications',
        excerpt: 'Techniques and strategies for optimizing React applications to deliver exceptional user experiences.',
        date: '2023-12-10',
        readTime: '6 min read',
        category: 'Development',
        slug: 'react-performance-optimization',
    },
    {
        id: 6,
        title: 'The Future of Web Development: Trends and Predictions',
        excerpt: 'Exploring emerging technologies and trends that will shape the future of web development.',
        date: '2023-12-01',
        readTime: '9 min read',
        category: 'Technology',
        slug: 'future-of-web-development',
    },
];

export default function Blog() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header Section */}
            <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 via-transparent to-transparent pointer-events-none" />
                
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black transition-colors mb-6"
                        >
                            <ArrowLeft size={16} />
                            <span>Back to Home</span>
                        </Link>
                        
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full border border-gray-200 mb-6">
                            <div className="w-2 h-2 rounded-full bg-amber-700" />
                            <p className="text-xs sm:text-sm text-gray-600 tracking-wide uppercase font-medium">
                                Blog
                            </p>
                        </div>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light leading-[1.1] mb-4 sm:mb-6 tracking-tight">
                            Insights & Thoughts
                            <br />
                            <span className="text-amber-700">On Software Engineering</span>
                        </h1>
                        <p className="text-sm sm:text-base lg:text-lg text-gray-600 font-light leading-relaxed max-w-3xl">
                            Articles on software engineering, design, architecture, and building products that make a difference.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24">
                <div className="max-w-7xl mx-auto">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
                        {blogPosts.map((post, index) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group"
                            >
                                <Link href={`/pages/blog/${post.slug}`}>
                                    <div className="h-full p-5 sm:p-6 rounded-lg border border-gray-200 hover:border-amber-700/50 transition-all duration-300 hover:shadow-xl bg-white">
                                        {/* Category Badge */}
                                        <div className="flex items-center gap-2 mb-4">
                                            <BookOpen className="w-4 h-4 text-amber-700" />
                                            <span className="text-xs font-medium text-amber-700 uppercase tracking-wide">
                                                {post.category}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h2 className="text-lg sm:text-xl font-light mb-3 tracking-tight group-hover:text-amber-700 transition-colors">
                                            {post.title}
                                        </h2>

                                        {/* Excerpt */}
                                        <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed mb-4 line-clamp-3">
                                            {post.excerpt}
                                        </p>

                                        {/* Meta Info */}
                                        <div className="flex items-center gap-4 text-xs text-gray-500 pt-4 border-t border-gray-100">
                                            <div className="flex items-center gap-1.5">
                                                <Calendar className="w-3 h-3" />
                                                <time dateTime={post.date}>
                                                    {new Date(post.date).toLocaleDateString('en-US', {
                                                        month: 'short',
                                                        day: 'numeric',
                                                        year: 'numeric',
                                                    })}
                                                </time>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <Clock className="w-3 h-3" />
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
        </div>
    );
}
