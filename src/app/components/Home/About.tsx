'use client';
import { motion, useReducedMotion } from 'framer-motion';

const stats = [
    { label: 'Years Experience', value: '5+' },
    { label: 'Projects Delivered', value: '50+' },
    { label: 'Enterprise Clients', value: '20+' },
    { label: 'Success Rate', value: '100%' },
];

const skills = [
    { name: 'React/Next.js', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Node.js', level: 88 },
    { name: 'UI/UX Design', level: 85 },
    { name: 'MongoDB', level: 85 },
    { name: 'Cloud Services', level: 80 },
];

export default function About() {
    const prefersReducedMotion = useReducedMotion();

    return (
        <section 
            id="about" 
            className="relative py-20 lg:py-32 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header with text reveal */}
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
                            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">About</span>
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
                        Building enterprise solutions that drive business growth.
                    </motion.p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    {/* Left Column - Story with staggered text */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ 
                            duration: prefersReducedMotion ? 0 : 0.8, 
                            ease: [0.16, 1, 0.3, 1] 
                        }}
                        className="space-y-6 text-lg sm:text-xl text-gray-600 font-light leading-relaxed"
                    >
                        {[
                            "With over 5 years of experience in enterprise software development, I specialize in architecting scalable systems that deliver measurable business value and exceptional user experiences.",
                            "My approach combines deep technical expertise with strategic business thinking, resulting in solutions that are both robust and intuitive. I focus on writing clean, maintainable code that scales with organizational growth.",
                            "I work closely with stakeholders to understand business objectives, translating complex requirements into elegant technical solutions. My commitment to best practices and continuous learning ensures projects are built on solid foundations.",
                            "Currently available for enterprise projects and strategic consulting engagements."
                        ].map((text, index) => (
                            <motion.p
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ 
                                    duration: prefersReducedMotion ? 0 : 0.6, 
                                    delay: prefersReducedMotion ? 0 : index * 0.1,
                                    ease: [0.16, 1, 0.3, 1] 
                                }}
                                className={index === 0 ? "font-normal text-black" : index === 3 ? "text-amber-600 font-medium" : ""}
                            >
                                {index === 0 ? (
                                    <>
                                        With over <span className="font-semibold text-amber-600">5 years</span> of experience in enterprise software development, I specialize in architecting scalable systems that deliver measurable business value and exceptional user experiences.
                                    </>
                                ) : (
                                    text
                                )}
                            </motion.p>
                        ))}
                    </motion.div>

                    {/* Right Column - Stats & Skills */}
                    <div className="space-y-12">
                        {/* Stats Grid with stagger */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ 
                                duration: prefersReducedMotion ? 0 : 0.8, 
                                ease: [0.16, 1, 0.3, 1] 
                            }}
                            className="grid grid-cols-2 gap-6"
                        >
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, scale: 0.8, y: 30 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ 
                                        duration: prefersReducedMotion ? 0 : 0.6, 
                                        delay: prefersReducedMotion ? 0 : index * 0.1,
                                        ease: [0.16, 1, 0.3, 1] 
                                    }}
                                    className="text-center"
                                    whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                                >
                                    <motion.div
                                        className="text-5xl sm:text-6xl font-light mb-2 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: prefersReducedMotion ? 0 : index * 0.1 + 0.3 }}
                                    >
                                        {stat.value}
                                    </motion.div>
                                    <div className="text-sm text-gray-600 font-light">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Skills */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ 
                                duration: prefersReducedMotion ? 0 : 0.8, 
                                delay: prefersReducedMotion ? 0 : 0.2,
                                ease: [0.16, 1, 0.3, 1] 
                            }}
                            className="pt-8 border-t border-gray-200"
                        >
                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: prefersReducedMotion ? 0 : 0.3 }}
                                className="text-3xl sm:text-4xl font-light mb-8 tracking-tight"
                            >
                                Technical Expertise
                            </motion.h3>
                            <div className="space-y-6">
                                {skills.map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ 
                                            duration: prefersReducedMotion ? 0 : 0.5, 
                                            delay: prefersReducedMotion ? 0 : index * 0.1,
                                            ease: [0.16, 1, 0.3, 1] 
                                        }}
                                    >
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-base text-gray-700 font-light">
                                                {skill.name}
                                            </span>
                                            <span className="text-sm text-gray-500 font-light">
                                                {skill.level}%
                                            </span>
                                        </div>
                                        <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ 
                                                    duration: prefersReducedMotion ? 0 : 1.2, 
                                                    delay: prefersReducedMotion ? 0 : index * 0.1 + 0.5,
                                                    ease: [0.16, 1, 0.3, 1] 
                                                }}
                                                className="h-full bg-gradient-to-r from-amber-600 to-orange-600 rounded-full"
                                                style={{ willChange: 'width' }}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
