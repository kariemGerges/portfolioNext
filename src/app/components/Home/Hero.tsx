'use client';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

export default function Hero() {
    const ref = useRef<HTMLDivElement>(null);
    const prefersReducedMotion = useReducedMotion();
    const [scrollY, setScrollY] = useState(0);
    
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start']
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section 
            ref={ref}
            className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-16 sm:pb-24 lg:pb-32 overflow-hidden"
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
                    <div className="overflow-hidden mb-4 sm:mb-6">
                        <motion.h1
                            className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light leading-[1.05] tracking-tight m-1 sm:m-2"
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
                    <div className="overflow-hidden mb-4 sm:mb-6">
                        <motion.h1
                            className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ 
                                duration: 1, 
                                ease: [0.16, 1, 0.3, 1],
                                delay: 0.2
                            }}
                        >
                            &
                        </motion.h1>
                    </div>
                    <div className="overflow-hidden">
                        <motion.span
                            className="block text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 
                            font-normal bg-gradient-to-r from-amber-400 via-amber-300 
                            to-orange-400 bg-clip-text text-transparent pb-1 sm:pb-2"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ 
                                duration: 1, 
                                ease: [0.16, 1, 0.3, 1],
                                delay: 0.4
                            }}
                        >
                            Product Designer
                        </motion.span>
                    </div>

                    {/* Subheading */}
                    <motion.p
                        className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto leading-relaxed mt-4 sm:mt-6 px-2"
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
                        className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-6 px-2"
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
                                className="group inline-flex items-center gap-2 px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full text-sm sm:text-base lg:text-lg font-medium hover:shadow-xl transition-all duration-300 backdrop-blur-sm min-h-[44px] touch-manipulation text-white w-full sm:w-auto justify-center"
                            >
                                <span>View Work</span>
                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </motion.div>
                        <span className="hidden sm:inline text-gray-400">/</span>
                        <motion.div
                            whileHover={{ scale: 1.15, x: 4 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                        >
                            <Link
                                href="#contact"
                                className="group relative inline-block text-base sm:text-lg text-gray-300 hover:text-amber-400 transition-colors min-h-[44px] flex items-center touch-manipulation"
                            >
                                <span className="relative z-10">Get in touch</span>
                                <motion.span
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 origin-left"
                                    initial={{ scaleX: 0 }}
                                    whileHover={{ scaleX: 1 }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
            
            {/* Animated Arrow at end of section - disappears on scroll */}
            {scrollY < 100 && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="absolute bottom-6 sm:bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 z-20"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="flex flex-col items-center gap-2 cursor-pointer"
                        onClick={() => {
                            const nextSection = document.getElementById('experience') || document.getElementById('work');
                            if (nextSection) {
                                nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }
                        }}
                    >
                        <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
                        <span className="text-xs sm:text-sm text-amber-400 font-light">Scroll</span>
                    </motion.div>
                </motion.div>
            )}
        </section>
    );
}
