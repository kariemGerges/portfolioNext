'use client';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function Resume() {
    return (
        <div className="min-h-screen bg-black text-white">
            {/* Header Section */}
            <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-transparent pointer-events-none" />
                
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-amber-400 transition-colors mb-6"
                        >
                            <ArrowLeft size={16} />
                            <span>Back to Home</span>
                        </Link>
                        
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900/50 backdrop-blur-sm rounded-full border border-gray-700 shadow-sm mb-6">
                            <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                            <p className="text-xs sm:text-sm text-gray-300 tracking-wide uppercase font-medium">
                                Resume
                            </p>
                        </div>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light leading-[1.1] mb-4 sm:mb-6 tracking-tight text-white">
                            Resume
                            <br />
                            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
                                Coming Soon
                            </span>
                        </h1>
                        <p className="text-sm sm:text-base lg:text-lg text-gray-300 font-light leading-relaxed max-w-3xl">
                            My professional resume and experience will be available here soon.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Back to Home Link at Bottom */}
            <section className="px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
                <div className="max-w-7xl mx-auto">
                    <Link
                        href="/"
                        className="group inline-flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-amber-400 transition-colors"
                    >
                        <ArrowLeft size={16} />
                        <span>Back to Home</span>
                    </Link>
                </div>
            </section>
        </div>
    );
}
