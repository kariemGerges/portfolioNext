'use client';
import { motion } from 'framer-motion';
import { 
    Code2, 
    Palette, 
    Zap, 
    Database, 
    Cloud,
    Smartphone,
    Globe,
    Layers
} from 'lucide-react';

const capabilities = [
    {
        icon: Code2,
        title: 'Frontend Development',
        description: 'Building responsive, performant interfaces with React, Next.js, and modern JavaScript.',
        tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
        color: 'text-blue-600'
    },
    {
        icon: Database,
        title: 'Backend Engineering',
        description: 'Designing scalable APIs and server architectures with Node.js and cloud services.',
        tech: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
        color: 'text-green-600'
    },
    {
        icon: Palette,
        title: 'UI/UX Design',
        description: 'Crafting intuitive user experiences that balance aesthetics with functionality.',
        tech: ['Figma', 'Design Systems', 'Prototyping'],
        color: 'text-purple-600'
    },
    {
        icon: Cloud,
        title: 'Cloud & DevOps',
        description: 'Deploying and managing applications on modern cloud platforms.',
        tech: ['AWS', 'Vercel', 'Docker', 'CI/CD'],
        color: 'text-orange-600'
    },
    {
        icon: Smartphone,
        title: 'Mobile Development',
        description: 'Creating cross-platform mobile experiences with modern frameworks.',
        tech: ['React Native', 'Expo'],
        color: 'text-pink-600'
    },
    {
        icon: Zap,
        title: 'Performance Optimization',
        description: 'Optimizing applications for speed, efficiency, and exceptional user experience.',
        tech: ['Performance', 'SEO', 'Accessibility'],
        color: 'text-amber-600'
    }
];

export default function Capabilities() {
    return (
        <section id="experience" className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 overflow-hidden">
            {/* Subtle background elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/30 to-transparent pointer-events-none" />
            
            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-8 sm:mb-10 lg:mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full border border-gray-200 mb-6">
                        <div className="w-2 h-2 rounded-full bg-amber-700" />
                        <p className="text-xs sm:text-sm text-gray-600 tracking-wide uppercase font-medium">
                            Expertise
                        </p>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light mb-4 sm:mb-6 tracking-tight">
                        Enterprise-Grade
                        <br />
                        <span className="text-amber-700">Technology Stack</span>
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-600 font-light leading-relaxed max-w-3xl">
                        Comprehensive solutions built with modern, scalable technologies 
                        designed for enterprise environments.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
                    {capabilities.map((capability, index) => {
                        const Icon = capability.icon;
                        return (
                            <motion.div
                                key={capability.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative p-4 sm:p-5 lg:p-6 rounded-lg border border-gray-200 hover:border-amber-700/50 transition-all duration-300 hover:shadow-xl bg-white"
                            >
                                <div className="mb-4 sm:mb-5">
                                    <div className="p-2 sm:p-2.5 rounded-lg bg-amber-50 w-fit mb-3 group-hover:bg-amber-100 transition-colors">
                                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-amber-700" />
                                    </div>
                                    <h3 className="text-base sm:text-lg lg:text-xl font-light mb-2 tracking-tight">
                                        {capability.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed font-light mb-3 sm:mb-4">
                                        {capability.description}
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-3 border-t border-gray-100">
                                    {capability.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2.5 py-1 text-[10px] sm:text-xs bg-gray-100 rounded-full text-gray-700 font-medium border border-gray-200"
                                        >
                                            {tech}
                                        </span>
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
