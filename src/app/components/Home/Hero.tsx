'use client';
import { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, TrendingUp, Award } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MorphButton } from '../ui/MorphButton';

const stats = [
    { value: '5+', label: 'Years Experience', icon: TrendingUp },
    { value: '50+', label: 'Projects Delivered', icon: Sparkles },
    { value: '100%', label: 'Client Satisfaction', icon: Award },
];

const expertise = [
    'Full-Stack Development',
    'Enterprise Architecture',
    'Cloud Solutions',
    'UI/UX Design',
];

const codeSnippets = [
    `const engineer = {
  role: "Enterprise",
  focus: "Scale",
  impact: "Measurable"
};`,
    `function buildSolution() {
  return {
    architecture: scalable(),
    design: intuitive(),
    result: impactful()
  };
}`,
    `async function deliver() {
  const code = await writeClean();
  const design = await craftUX();
  return ship(code + design);
}`,
];

export default function Hero() {
    const [currentSnippet, setCurrentSnippet] = useState(0);
    const [displayedCode, setDisplayedCode] = useState('');
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        const snippet = codeSnippets[currentSnippet];
        let index = 0;
        setDisplayedCode('');
        setIsTyping(true);

        const typeInterval = setInterval(() => {
            if (index < snippet.length) {
                setDisplayedCode(snippet.slice(0, index + 1));
                index++;
            } else {
                setIsTyping(false);
                clearInterval(typeInterval);
                
                // Switch to next snippet after delay
                setTimeout(() => {
                    setCurrentSnippet((prev) => (prev + 1) % codeSnippets.length);
                }, 3000);
            }
        }, 50);

        return () => clearInterval(typeInterval);
    }, [currentSnippet]);
    return (
        <section className="relative pb-12 sm:pt-28 sm:pb-20 lg:pt-40 lg:pb-32 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center overflow-hidden">
            {/* Subtle background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/30 to-white pointer-events-none" />
            
            {/* Decorative grid pattern */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
                 style={{
                     backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
                     backgroundSize: '4rem 4rem'
                 }}
            />

            <div className="w-full max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 xl:gap-16 items-center lg:items-start">
                    <div className="flex-1 w-full lg:max-w-2xl xl:max-w-3xl">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-6 sm:mb-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full border border-gray-200">
                            <div className="w-2 h-2 rounded-full bg-amber-700 animate-pulse" />
                            <p className="text-xs sm:text-sm text-gray-600 tracking-wide uppercase font-medium">
                                Software Engineer & Product Designer
                            </p>
                        </div>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.1] mb-5 sm:mb-6 tracking-tight"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        Crafting enterprise
                        <br />
                        <span className="relative inline-block mb-2">
                            <span className="text-amber-700">solutions</span>
                            <motion.span
                                className="absolute -bottom-2 left-0 right-0 h-0.5 bg-amber-700/30"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                            />
                        </span>
                        <br />
                        that scale
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 lg:mb-10 font-light leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        I architect and build scalable software systems that combine
                        robust engineering with intuitive design, delivering measurable
                        business impact for enterprise clients.
                    </motion.p>

                    {/* Expertise Tags */}
                    <motion.div
                        className="flex flex-wrap gap-2 mb-6 sm:mb-8 lg:mb-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        {expertise.map((item, index) => (
                            <motion.span
                                key={item}
                                className="px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-700 bg-gray-100 border border-gray-200 rounded-full"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                            >
                                {item}
                            </motion.span>
                        ))}
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-3 mb-8 sm:mb-10 lg:mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                    >
                        <Link
                            href="/pages/work"
                            className="inline-block"
                        >
                            <MorphButton variant="danger">
                                View Selected Work
                            </MorphButton>
                        </Link>
                        <Link
                            href="#contact"
                            className="inline-flex items-center justify-center px-5 sm:px-7 py-3 bg-white text-black border-2 border-gray-300 rounded-lg font-medium text-sm hover:border-gray-400 transition-all duration-300"
                        >
                            Get In Touch
                        </Link>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        className="grid grid-cols-3 gap-3 sm:gap-6 lg:gap-8 pt-6 sm:pt-8 lg:pt-10 border-t border-gray-200"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                    >
                        {stats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <motion.div
                                    key={stat.label}
                                    className="flex flex-col"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                                >
                                    <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                                        <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-amber-700 flex-shrink-0" />
                                        <span className="text-2xl sm:text-3xl lg:text-4xl font-light text-black">
                                            {stat.value}
                                        </span>
                                    </div>
                                    <p className="text-[10px] sm:text-xs lg:text-sm text-gray-500 font-medium uppercase tracking-wide leading-tight">
                                        {stat.label}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                    </div>

                    {/* Right Side - Professional Graphic */}
                    <motion.div
                        className="hidden lg:flex flex-1 items-center justify-center relative lg:pt-8"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="relative w-full max-w-md xl:max-w-lg aspect-square">
                            {/* Animated gradient mesh */}
                            <div className="absolute inset-0 rounded-2xl overflow-hidden">
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-gray-50"
                                    animate={{
                                        background: [
                                            'linear-gradient(135deg, rgba(217, 119, 6, 0.05) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(243, 244, 246, 0.05) 100%)',
                                            'linear-gradient(135deg, rgba(217, 119, 6, 0.08) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(243, 244, 246, 0.08) 100%)',
                                            'linear-gradient(135deg, rgba(217, 119, 6, 0.05) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(243, 244, 246, 0.05) 100%)',
                                        ],
                                    }}
                                    transition={{
                                        duration: 8,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                    }}
                                />
                                
                                {/* Geometric shapes */}
                                <motion.div
                                    className="absolute top-1/4 right-1/4 w-32 h-32 bg-amber-700/10 rounded-full blur-3xl"
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.3, 0.5, 0.3],
                                    }}
                                    transition={{
                                        duration: 6,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                    }}
                                />
                                <motion.div
                                    className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-amber-700/8 rounded-full blur-3xl"
                                    animate={{
                                        scale: [1.2, 1, 1.2],
                                        opacity: [0.2, 0.4, 0.2],
                                    }}
                                    transition={{
                                        duration: 8,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                    }}
                                />
                            </div>

                            {/* Code-like structure overlay with typing effect */}
                            <div className="absolute inset-0 p-6 sm:p-8 flex flex-col gap-3 sm:gap-4 opacity-20">
                                {/* Terminal window header */}
                                <div className="flex items-center gap-2 mb-1 sm:mb-2">
                                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-400" />
                                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-yellow-400" />
                                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-400" />
                                    <span className="text-[9px] sm:text-[10px] text-gray-500 font-mono ml-2">Kariem.ts</span>
                                </div>
                                
                                {/* Typing code display */}
                                <div className="bg-gray-900 rounded-lg p-3 sm:p-4 font-mono text-[10px] sm:text-xs text-gray-300 leading-relaxed min-h-[100px] sm:min-h-[120px] flex items-start">
                                    <pre className="w-full">
                                        <code className="block whitespace-pre-wrap">
                                            {displayedCode}
                                            {isTyping && (
                                                <motion.span
                                                    animate={{ opacity: [1, 0] }}
                                                    transition={{ duration: 0.8, repeat: Infinity }}
                                                    className="inline-block w-1 h-3 sm:w-1.5 sm:h-4 bg-amber-700 ml-1 align-middle"
                                                />
                                            )}
                                        </code>
                                    </pre>
                                </div>
                            </div>

                            {/* Border decoration */}
                            {/* <div className="absolute inset-0 rounded-2xl border border-gray-200/50" /> */}
                            <div className="absolute -inset-1 rounded-2xl border border-amber-700/10 blur-sm" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
