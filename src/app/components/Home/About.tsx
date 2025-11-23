'use client';
import { motion } from 'framer-motion';
import { Code2, TrendingUp, Award, Users } from 'lucide-react';

const stats = [
    { label: 'Years Experience', value: '5+', icon: TrendingUp },
    { label: 'Projects Delivered', value: '50+', icon: Code2 },
    { label: 'Enterprise Clients', value: '20+', icon: Users },
    { label: 'Success Rate', value: '100%', icon: Award },
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
    return (
        <section id="about" className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 overflow-hidden">
            {/* Subtle background elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 via-transparent to-transparent pointer-events-none" />
            
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
                            About
                        </p>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light leading-[1.1] mb-4 sm:mb-6 tracking-tight">
                        Building enterprise solutions
                        <br />
                        <span className="text-amber-700">that drive business growth</span>
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">
                    {/* Left Column - Story */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-4 sm:space-y-5 text-gray-600 font-light leading-relaxed"
                    >
                        <p className="text-base sm:text-lg lg:text-xl">
                            With over <span className="font-medium text-black">5 years</span> of experience in enterprise software development, 
                            I specialize in architecting scalable systems that deliver measurable business value 
                            and exceptional user experiences.
                        </p>
                        <p className="text-sm sm:text-base lg:text-lg">
                            My approach combines deep technical expertise with strategic business thinking, 
                            resulting in solutions that are both robust and intuitive. I focus on writing 
                            clean, maintainable code that scales with organizational growth.
                        </p>
                        <p className="text-sm sm:text-base lg:text-lg">
                            I work closely with stakeholders to understand business objectives, translating 
                            complex requirements into elegant technical solutions. My commitment to best 
                            practices and continuous learning ensures projects are built on solid foundations.
                        </p>
                        <div className="pt-3 sm:pt-4 border-t border-gray-200">
                            <p className="text-amber-700 font-medium text-sm sm:text-base">
                                Currently available for enterprise projects and strategic consulting engagements.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Column - Stats & Skills */}
                    <div className="space-y-6 sm:space-y-8 lg:space-y-10">
                        {/* Stats Grid */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6"
                        >
                            {stats.map((stat, index) => {
                                const Icon = stat.icon;
                                return (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        className="p-4 sm:p-5 lg:p-6 bg-white rounded-lg border border-gray-200 hover:border-amber-700/30 transition-all duration-300 hover:shadow-md"
                                    >
                                        <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                                            <div className="p-1.5 sm:p-2 bg-amber-50 rounded-lg">
                                                <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-amber-700" />
                                            </div>
                                        </div>
                                        <div className="text-2xl sm:text-3xl lg:text-4xl font-light mb-1 sm:mb-2 text-black">
                                            {stat.value}
                                        </div>
                                        <div className="text-[10px] sm:text-xs lg:text-sm text-gray-600 font-medium uppercase tracking-wide leading-tight">
                                            {stat.label}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>

                        {/* Skills */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="pt-5 sm:pt-6 lg:pt-8 border-t border-gray-200"
                        >
                            <h3 className="text-lg sm:text-xl lg:text-2xl font-light mb-4 sm:mb-6 tracking-tight">
                                Technical Expertise
                            </h3>
                            <div className="space-y-3 sm:space-y-4">
                                {skills.map((skill, index) => (
                                    <div key={skill.name}>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-xs sm:text-sm lg:text-base text-gray-700 font-medium">
                                                {skill.name}
                                            </span>
                                            <span className="text-xs text-gray-500 font-medium">
                                                {skill.level}%
                                            </span>
                                        </div>
                                        <div className="h-2 sm:h-2.5 bg-gray-100 rounded-full overflow-hidden border border-gray-200">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                                                className="h-full bg-gradient-to-r from-amber-600 to-amber-700 rounded-full"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
