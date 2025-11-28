'use client';
import { motion } from 'framer-motion';
import { FileText, Code, Terminal, Loader2 } from 'lucide-react';

export default function ArticleLoading() {
    const loadingDots = [0, 1, 2];

    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-6 py-24 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -right-32 w-96 h-96 bg-amber-200/20 blur-3xl rounded-full animate-pulse" />
                <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-orange-200/20 blur-3xl rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="relative z-10 max-w-2xl mx-auto text-center">
                {/* Animated icon */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-8 flex justify-center"
                >
                    <div className="relative">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full blur-xl opacity-30"
                        />
                        <motion.div
                            animate={{ 
                                scale: [1, 1.1, 1],
                                rotate: [0, 5, -5, 0]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="relative bg-gradient-to-br from-amber-100 to-orange-100 rounded-full p-6 border-4 border-amber-200"
                        >
                            <FileText className="w-16 h-16 text-amber-600" />
                        </motion.div>
                    </div>
                </motion.div>

                {/* Loading text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-8"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 text-gray-900">
                        Loading
                        <span className="block bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                            Article
                        </span>
                    </h2>
                </motion.div>

                {/* Animated loading dots */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex items-center justify-center gap-2 mb-8"
                >
                    {loadingDots.map((index) => (
                        <motion.div
                            key={index}
                            className="w-3 h-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-500"
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                                duration: 1.2,
                                repeat: Infinity,
                                delay: index * 0.2,
                                ease: "easeInOut"
                            }}
                        />
                    ))}
                </motion.div>

                {/* Tech-themed loading display */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-8"
                >
                    <div className="inline-block bg-gray-900 rounded-lg p-5 font-mono text-sm text-left border border-gray-800 shadow-xl max-w-md">
                        <div className="flex items-center gap-2 mb-3">
                            <Terminal className="w-4 h-4 text-green-400" />
                            <span className="text-gray-400">Loading Article:</span>
                        </div>
                        <div className="space-y-2">
                            <div className="text-green-400 flex items-center gap-2">
                                <Loader2 className="w-4 h-4 animate-spin" />
                                <span>Fetching content...</span>
                            </div>
                            <div className="text-gray-300 text-xs pl-6 space-y-1">
                                <motion.div
                                    animate={{ opacity: [0.3, 1, 0.3] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    • Parsing markdown
                                </motion.div>
                                <motion.div
                                    animate={{ opacity: [0.3, 1, 0.3] }}
                                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                                >
                                    • Loading images
                                </motion.div>
                                <motion.div
                                    animate={{ opacity: [0.3, 1, 0.3] }}
                                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
                                >
                                    • Rendering content
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Skeleton content preview */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="max-w-2xl mx-auto space-y-4"
                >
                    <div className="space-y-3">
                        <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto animate-pulse" />
                        <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto animate-pulse" />
                    </div>
                    <div className="space-y-2 pt-4">
                        <div className="h-3 bg-gray-100 rounded w-full animate-pulse" />
                        <div className="h-3 bg-gray-100 rounded w-5/6 mx-auto animate-pulse" />
                        <div className="h-3 bg-gray-100 rounded w-4/6 mx-auto animate-pulse" />
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

