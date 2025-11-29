'use client';
import { motion, useReducedMotion } from 'framer-motion';
import { 
    Code2, 
    Palette, 
    Zap, 
    Database, 
    Cloud,
    Smartphone
} from 'lucide-react';

const capabilities = [
    {
        icon: Code2,
        title: 'Frontend Development',
        description: 'Building responsive, performant interfaces with React, Next.js, and modern JavaScript.',
        tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    },
    {
        icon: Database,
        title: 'Backend Engineering',
        description: 'Designing scalable APIs and server architectures with Node.js and cloud services.',
        tech: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
    },
    {
        icon: Palette,
        title: 'UI/UX Design',
        description: 'Crafting intuitive user experiences that balance aesthetics with functionality.',
        tech: ['Figma', 'Design Systems', 'Prototyping'],
    },
    {
        icon: Cloud,
        title: 'Cloud & DevOps',
        description: 'Deploying and managing applications on modern cloud platforms.',
        tech: ['AWS', 'Vercel', 'Docker', 'CI/CD'],
    },
    {
        icon: Smartphone,
        title: 'Mobile Development',
        description: 'Creating cross-platform mobile experiences with modern frameworks.',
        tech: ['React Native', 'Expo'],
    },
    {
        icon: Zap,
        title: 'Performance Optimization',
        description: 'Optimizing applications for speed, efficiency, and exceptional user experience.',
        tech: ['Performance', 'SEO', 'Accessibility'],
    }
];

export default function Capabilities() {
    const prefersReducedMotion = useReducedMotion();

    return (
        <section 
            id="experience" 
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
                    className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-24"
                >
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
                            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Expertise</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 font-light max-w-2xl mx-auto px-2"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                            duration: prefersReducedMotion ? 0 : 0.8, 
                            delay: prefersReducedMotion ? 0 : 0.3,
                            ease: [0.16, 1, 0.3, 1] 
                        }}
                    >
                        Enterprise-grade technology stack.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 
                lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {capabilities.map((capability, index) => {
                        const Icon = capability.icon;
                        return (
                            <motion.div
                                key={capability.title}
                                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ 
                                    duration: prefersReducedMotion ? 0 : 0.6, 
                                    delay: prefersReducedMotion ? 0 : index * 0.1,
                                    ease: [0.16, 1, 0.3, 1] 
                                }}
                                className="group 
                                bg-gradient-to-br from-amber-900/20 to-orange-900/30 rounded-xl p-4 sm:p-5 lg:p-6
"
                                whileHover={prefersReducedMotion ? {} : { y: -8, scale: 1.02 }}
                            >
                                <div className="mb-4">
                                    <motion.div
                                        className="p-3 rounded-xl bg-gradient-to-br from-amber-900/30 to-orange-900/30 w-fit mb-4 group-hover:from-amber-800/40 group-hover:to-orange-800/40 transition-all"
                                        whileHover={prefersReducedMotion ? {} : { rotate: 5, scale: 1.1 }}
                                        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                                    >
                                        <Icon className="w-6 h-6 text-amber-400" />
                                    </motion.div>
                                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-light mb-2 sm:mb-3 tracking-tight">
                                        {capability.title}
                                    </h3>
                                    <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed font-light mb-3 sm:mb-4">
                                        {capability.description}
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-3 sm:pt-4 border-t border-gray-700">
                                    {capability.tech.map((tech, techIndex) => (
                                        <motion.span
                                            key={tech}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ 
                                                delay: prefersReducedMotion ? 0 : index * 0.1 + techIndex * 0.05,
                                                duration: 0.3
                                            }}
                                            className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs bg-gradient-to-r from-amber-900/30 to-orange-900/30 rounded-full text-gray-200 font-light border border-amber-800/50"
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
