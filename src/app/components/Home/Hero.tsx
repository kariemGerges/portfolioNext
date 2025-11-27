'use client';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { useRef } from 'react';

export default function Hero() {
    const ref = useRef<HTMLDivElement>(null);
    const prefersReducedMotion = useReducedMotion();
    
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start']
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section 
            ref={ref}
            className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 pt-20 pb-32 overflow-hidden"
            style={{ willChange: 'auto' }}
        >
            {/* Background Image */}
            {/* <div className="absolute inset-0 z-0">
                {!prefersReducedMotion ? (
                    <motion.div
                        style={{ y, willChange: 'transform' }}
                        className="absolute inset-0"
                    >
                        <Image
                            src="/hero.png"
                            alt="Hero Background"
                            fill
                            priority
                            className="object-cover"
                            quality={90}
                            style={{ willChange: 'transform' }}
                        />
                    </motion.div>
                ) : (
                    <Image
                        src="/hero.png"
                        alt="Hero Background"
                        fill
                        priority
                        className="object-cover"
                        quality={90}
                    />
                )}
                {/* Overlay for text readability
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
            </div> */}

            <motion.div 
                style={{ opacity, willChange: 'opacity' }}
                className="w-full max-w-7xl mx-auto relative z-10"
            >
                <div className="text-center">
                    {/* Main Heading - Apple Style with text reveal */}
                    <div className="overflow-hidden mb-6">
                        <motion.h1
                            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light leading-[1.05] tracking-tight m-2"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ 
                                duration: 1, 
                                ease: [0.16, 1, 0.3, 1],
                                delay: 0.2
                            }}
                        >
                            Software Engineer
                        </motion.h1>
                    </div>
                    <div className="overflow-hidden">
                        <motion.span
                            className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-normal bg-gradient-to-r from-amber-400 via-amber-300 to-orange-400 bg-clip-text text-transparent pb-2"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ 
                                duration: 1, 
                                ease: [0.16, 1, 0.3, 1],
                                delay: 0.4
                            }}
                        >
                            & Product Designer
                        </motion.span>
                    </div>

                    {/* Subheading */}
                    <motion.p
                        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-12 max-w-3xl mx-auto leading-relaxed mt-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                            duration: 0.8, 
                            delay: 0.6, 
                            ease: [0.16, 1, 0.3, 1] 
                        }}
                    >
                        Crafting enterprise solutions that scale.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                            duration: 0.8, 
                            delay: 0.8, 
                            ease: [0.16, 1, 0.3, 1] 
                        }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                        >
                            <Link
                                href="/pages/work"
                                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full text-lg font-medium hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
                            >
                                <span>View Work</span>
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </motion.div>
                        <span className=" hidden sm:inline">/</span>
                        <motion.div
                            whileHover={{ scale: 1.15, x: 4 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                        >
                            <Link
                                href="#contact"
                                className="group relative inline-block text-lg text-gray-600 hover:text-amber-600 transition-colors"
                            >
                                <span className="relative z-10">Get in touch</span>
                                <motion.span
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-600 to-orange-600 origin-left"
                                    initial={{ scaleX: 0 }}
                                    whileHover={{ scaleX: 1 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
            <div className="absolute inset-0 z-0 
         
            ">
                <ArrowDown className="w-5 h-5 absolute bottom-10 left-1/2 -translate-x-1/2 text-amber-600 animate-bounce cursor-pointer" />
            </div>
        </section>
    );
}
