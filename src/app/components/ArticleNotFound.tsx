'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, BookOpen, FileText, Search, Code, Terminal, AlertCircle } from 'lucide-react';

interface ArticleNotFoundProps {
    slug?: string;
    error?: string;
}

export default function ArticleNotFound({ slug, error }: ArticleNotFoundProps) {
    return (
        <div className="min-h-screen flex items-center justify-center px-6 py-24 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -right-32 w-96 h-96 bg-amber-500/10 blur-3xl rounded-full animate-pulse" />
                <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-orange-500/10 blur-3xl rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="relative z-10 max-w-2xl mx-auto text-center">
                {/* Icon with animation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-8 flex justify-center"
                >
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full blur-xl opacity-30 animate-pulse" />
                        <div className="relative bg-gradient-to-br from-amber-900/30 to-orange-900/30 rounded-full p-6 border-4 border-amber-800/50">
                            <FileText className="w-16 h-16 text-amber-400" />
                        </div>
                    </div>
                </motion.div>

                {/* Main heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-6"
                >
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-light mb-4 text-white">
                        Article
                        <span className="block bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                            Not Found
                        </span>
                    </h1>
                </motion.div>

                {/* Error message */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-8"
                >
                    <p className="text-lg sm:text-xl text-gray-300 font-light max-w-md mx-auto leading-relaxed mb-4">
                        {error || "The article you're looking for doesn't exist or may have been moved."}
                    </p>
                    {slug && (
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-lg text-sm text-gray-300 font-mono border border-gray-700">
                            <Search className="w-4 h-4" />
                            <span>Slug: <span className="text-amber-400">{slug}</span></span>
                        </div>
                    )}
                </motion.div>

                {/* Tech-themed error display */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-12"
                >
                    <div className="inline-block bg-gray-900 rounded-lg p-5 font-mono text-sm text-left border border-gray-800 shadow-xl max-w-md">
                        <div className="flex items-center gap-2 mb-3">
                            <Terminal className="w-4 h-4 text-green-400" />
                            <span className="text-gray-400">Article Error:</span>
                        </div>
                        <div className="space-y-2">
                            <div className="text-red-400 flex items-center gap-2">
                                <AlertCircle className="w-4 h-4" />
                                <span>ArticleNotFoundException</span>
                            </div>
                            <div className="text-gray-300 text-xs pl-6">
                                Article with slug <span className="text-amber-400">"{slug || 'undefined'}"</span> not found
                            </div>
                            <div className="text-gray-500 text-xs mt-3 pt-3 border-t border-gray-700">
                                // Check the URL or browse available articles
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Action buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    >
                        <Link
                            href="/pages/blog"
                            className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full text-base sm:text-lg font-medium text-white hover:shadow-xl transition-all duration-300 min-h-[44px] touch-manipulation"
                        >
                            <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span>Browse Articles</span>
                        </Link>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    >
                        <Link
                            href="/"
                            className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gray-900/50 backdrop-blur-sm border-2 border-gray-700 rounded-full text-base sm:text-lg font-medium text-gray-300 hover:border-amber-400 hover:text-amber-400 transition-all duration-300 min-h-[44px] touch-manipulation"
                        >
                            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span>Go Home</span>
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Fun message */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-12 text-sm text-gray-400 font-light"
                >
                    <p className="mb-2">📚 Maybe it's still being written, or got lost in the codebase</p>
                    <p className="text-xs">Check out other articles while you're here!</p>
                </motion.div>
            </div>
        </div>
    );
}

