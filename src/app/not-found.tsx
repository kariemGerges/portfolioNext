'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Home, ArrowLeft, Code, Bug, Terminal, Zap, Cpu, Database, Globe, Server } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function NotFound() {
    const [glitchText, setGlitchText] = useState('404');
    const glitchChars = ['4', '0', '4', '!', '@', '#', '$', '%', '&', '*'];

    useEffect(() => {
        const interval = setInterval(() => {
            setGlitchText(
                Array.from({ length: 3 }, () => 
                    glitchChars[Math.floor(Math.random() * glitchChars.length)]
                ).join('')
            );
        }, 100);

        const timeout = setTimeout(() => {
            clearInterval(interval);
            setGlitchText('404');
        }, 2000);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, []);

    const techIcons = [
        { icon: Code, delay: 0.1 },
        { icon: Bug, delay: 0.2 },
        { icon: Terminal, delay: 0.3 },
        { icon: Zap, delay: 0.4 },
        { icon: Cpu, delay: 0.5 },
        { icon: Database, delay: 0.6 },
        { icon: Globe, delay: 0.7 },
        { icon: Server, delay: 0.8 },
    ];

    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-6 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -right-16 w-96 h-96 bg-amber-200/30 blur-3xl rounded-full animate-pulse" />
                <div className="absolute -bottom-24 -left-16 w-96 h-96 bg-orange-200/30 blur-3xl rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            {/* Floating tech icons */}
            {techIcons.map((item, index) => {
                const Icon = item.icon;
                const angle = (index / techIcons.length) * 360;
                const radius = 200;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

                return (
                    <motion.div
                        key={index}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ 
                            opacity: [0, 0.3, 0],
                            x: [0, x, 0],
                            y: [0, y, 0],
                            scale: [0, 1, 0],
                        }}
                        transition={{
                            duration: 4,
                            delay: item.delay,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <Icon className="w-8 h-8 text-amber-400/20" />
                    </motion.div>
                );
            })}

            <div className="relative z-10 max-w-2xl mx-auto text-center">
                {/* Glitchy 404 */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-8"
                >
                    <h1 className="text-9xl sm:text-[12rem] font-light tracking-tight mb-4 relative">
                        <span className="block bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                            {glitchText}
                        </span>
                        <motion.span
                            className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent opacity-0"
                            animate={{
                                opacity: [0, 0.5, 0],
                                x: [-2, 2, -2],
                            }}
                            transition={{
                                duration: 0.1,
                                repeat: Infinity,
                                repeatDelay: 0.5
                            }}
                        >
                            {glitchText}
                        </motion.span>
                    </h1>
                </motion.div>

                {/* Error message */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-8"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 text-gray-900">
                        Page Not Found
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 font-light max-w-md mx-auto leading-relaxed">
                        Looks like this route got lost in the stack. The page you're looking for doesn't exist or has been moved.
                    </p>
                </motion.div>

                {/* Tech-themed error code */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-12"
                >
                    <div className="inline-block bg-gray-900 rounded-lg p-4 font-mono text-sm text-green-400 border border-gray-800 shadow-xl">
                        <div className="flex items-center gap-2 mb-2">
                            <Terminal className="w-4 h-4 text-green-400" />
                            <span className="text-gray-400">Error:</span>
                        </div>
                        <div className="text-left">
                            <div className="text-red-400">❌ HTTP 404</div>
                            <div className="text-gray-300 mt-1">
                                Route not found: <span className="text-amber-400">/undefined</span>
                            </div>
                            <div className="text-gray-500 text-xs mt-2">
                                // This page doesn't exist in the codebase
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
                            href="/"
                            className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full text-base sm:text-lg font-medium text-white hover:shadow-xl transition-all duration-300 min-h-[44px] touch-manipulation"
                        >
                            <Home className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span>Go Home</span>
                        </Link>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    >
                        <Link
                            href="/pages/work"
                            className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white border-2 border-gray-200 rounded-full text-base sm:text-lg font-medium text-gray-700 hover:border-amber-600 hover:text-amber-600 transition-all duration-300 min-h-[44px] touch-manipulation"
                        >
                            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span>View Work</span>
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Fun tech message */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-12 text-sm text-gray-500 font-light"
                >
                    <p className="mb-2">💡 Pro tip: Check the URL or navigate from the menu</p>
                    <p className="text-xs">Even the best developers encounter 404s sometimes</p>
                </motion.div>
            </div>
        </div>
    );
}

