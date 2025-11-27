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
                    className="text-center mb-16 lg:mb-24"
                >
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
                            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Expertise</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        className="text-xl sm:text-2xl text-gray-600 font-light max-w-2xl mx-auto"
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

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                                className="group"
                                whileHover={prefersReducedMotion ? {} : { y: -8, scale: 1.02 }}
                            >
                                <div className="mb-4">
                                    <motion.div
                                        className="p-3 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 w-fit mb-4 group-hover:from-amber-100 group-hover:to-orange-100 transition-all"
                                        whileHover={prefersReducedMotion ? {} : { rotate: 5, scale: 1.1 }}
                                        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                                    >
                                        <Icon className="w-6 h-6 text-amber-600" />
                                    </motion.div>
                                    <h3 className="text-2xl sm:text-3xl font-light mb-3 tracking-tight">
                                        {capability.title}
                                    </h3>
                                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-light mb-4">
                                        {capability.description}
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200">
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
                                            className="px-3 py-1 text-xs bg-gradient-to-r from-amber-50 to-orange-50 rounded-full text-gray-700 font-light border border-amber-100"
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
