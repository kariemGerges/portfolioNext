// import { ArrowRight } from 'lucide-react';
// import Image from 'next/image';
// import img from '../../../../public/hero2.png';
// import Link from 'next/link';

// export default function Hero() {
//     return (
//         <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-32">
//             <div className="flex flex-row">
//                 <div className="max-w-7xl mx-auto basis-1/2">
//                     <div className="max-w-4xl">
//                         <p className="text-xs sm:text-sm text-gray-500 mb-6 sm:mb-8 tracking-wide uppercase">
//                             Designer & Software Engineer
//                         </p>
//                         <h1 className="text-4xl sm:text-6xl lg:text-8xl font-light leading-[0.95] mb-6 sm:mb-8 tracking-tight">
//                             Creating digital
//                             <br />
//                             experiences that
//                             <br />
//                             matter
//                         </h1>
//                         <div>
//                             <p
//                                 className="text-base sm:text-xl
//                         text-gray-600  lg:mb-8 lg:pt-8 sm:mb-12 font-light leading-relaxed"
//                             >
//                                 I design and build thoughtful software that
//                                 combine clean code with powerful
//                                 functionality.
//                             </p>
//                         </div>
//                     </div>
//                     <div>
//                         <Link
//                             href="/pages/work"
//                             passHref
//                             className="group inline-flex items-center gap-3 text-xs sm:text-sm font-medium
//                             mt-10
//                         border-b-2 border-black pb-1 hover:gap-4 transition-all"
//                         >
//                             <span>View Selected Work</span>
//                             <ArrowRight
//                                 size={16}
//                                 className="transition-transform animate-pulse text-amber-700"
//                             />
//                         </Link>
//                     </div>
//                 </div>

//                 <div className="max-w-7xl mx-auto basis-1/2">
//                     <div className="max-w-4xl flex justify-end">
//                         <Image
//                             src={img}
//                             alt="Hero Image"
//                             width={500}
//                             height={600}
//                             className="rounded-xl sm:rounded-2xl object-cover"
//                             loading="lazy"
//                         />
//                     </div>
//                 </div>
//             </div>

//         </section>
//     );
// }
// 'use client';
// import { motion } from 'framer-motion';
// import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
// import { Button } from '@/app/components/ui/button';
// export function Hero() {
//     const scrollToSection = (id: string) => {
//         document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
//     };

//     return (
//         <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
//             {/* Animated background elements */}
//             <div className="absolute inset-0 overflow-hidden">
//                 <motion.div
//                     className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
//                     animate={{
//                         scale: [1, 1.2, 1],
//                         opacity: [0.3, 0.5, 0.3],
//                     }}
//                     transition={{
//                         duration: 8,
//                         repeat: Infinity,
//                         ease: 'easeInOut',
//                     }}
//                 />
//                 <motion.div
//                     className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
//                     animate={{
//                         scale: [1.2, 1, 1.2],
//                         opacity: [0.3, 0.5, 0.3],
//                     }}
//                     transition={{
//                         duration: 8,
//                         repeat: Infinity,
//                         ease: 'easeInOut',
//                     }}
//                 />
//             </div>

//             <div className="container mx-auto px-6 relative z-10">
//                 <div className="max-w-4xl mx-auto text-center">
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8 }}
//                     >
//                         <motion.p
//                             className="mb-4"
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             transition={{ delay: 0.2 }}
//                         >
//                             <p className="text-xs sm:text-sm text-gray-500 mb-6 sm:mb-8 tracking-wide uppercase">
//                                 Designer & Software Engineer
//                             </p>
//                         </motion.p>

//                         <motion.h1
//                             className="text-4xl sm:text-6xl lg:text-8xl font-light leading-[0.95] mb-6 sm:mb-8 tracking-tight"
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ delay: 0.3 }}
//                         >
//                             Creating digital
//                             <br />
//                             experiences that
//                             <br />
//                             matter
//                         </motion.h1>

//                         <motion.h2
//                             className="text-base sm:text-xl
//                          text-gray-600  lg:mb-8 lg:pt-8 sm:mb-12 font-light leading-relaxed"
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ delay: 0.4 }}
//                         >
//                             I design and build thoughtful software that combine
//                             clean code with powerful functionality.
//                         </motion.h2>

//                         <motion.div
//                             className="flex gap-4 justify-center mb-12"
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ delay: 0.6 }}
//                         >
//                             <Button
//                                 size="lg"
//                                 className="bg-blue-600 hover:bg-blue-700"
//                                 onClick={() => scrollToSection('projects')}
//                             >
//                                 View My Work
//                             </Button>
//                             <Button
//                                 size="lg"
//                                 variant="outline"
//                                 className="border-slate-600 text-slate-300 hover:bg-slate-800"
//                                 onClick={() => scrollToSection('contact')}
//                             >
//                                 Get In Touch
//                             </Button>
//                         </motion.div>

//                         <motion.div
//                             className="flex gap-6 justify-center"
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             transition={{ delay: 0.7 }}
//                         >
//                             <a
//                                 href="https://github.com/kariemGerges"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="text-amber-700 transition-colors"
//                             >
//                                 <Github className="w-6 h-6" />
//                             </a>
//                             <a
//                                 href="https://www.linkedin.com/in/kariem-gerges-458294195/"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="text-amber-700 transition-colors"
//                             >
//                                 <Linkedin className="w-6 h-6" />
//                             </a>
//                         </motion.div>
            
//                     </motion.div>
//                 </div>
//             </div>

//             <motion.div
//                 className="absolute bottom-8 left-1/2 -translate-x-1/2"
//                 animate={{ y: [0, 10, 0] }}
//                 transition={{ duration: 2, repeat: Infinity }}
//             >
//                 <ArrowDown className="w-6 h-6 text-slate-400" />
//             </motion.div>
//         </section>
//     );
// }
'use client';
import { motion, useScroll, useMotionValue, useTransform } from 'framer-motion';
import { Github, Linkedin, ArrowDown } from 'lucide-react';
import { useEffect, useState, useMemo } from 'react';

export default function Hero() {
    const [isMounted, setIsMounted] = useState(false);
    const { scrollY } = useScroll();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    const title = ['Creating digital', 'experiences that', 'matter'];

    // Pre-calculate random scatter values once
    const scatterData = useMemo(() => {
        return title.map((line) =>
            line.split('').map(() => ({
                x: (Math.random() - 0.5) * 1000,
                y: (Math.random() - 0.5) * 800,
                rotate: (Math.random() - 0.5) * 720,
            }))
        );
    }, []);

    // Create opacity transforms
    const titleOpacity = useTransform(scrollY, [0, 300], [1, 0]);
    const subtitleOpacity = useTransform(scrollY, [0, 300], [1, 0]);
    const taglineOpacity = useTransform(scrollY, [0, 200], [1, 0]);
    const buttonsOpacity = useTransform(scrollY, [0, 300], [1, 0]);
    const arrowOpacity = useTransform(scrollY, [0, 200], [1, 0]);

    return (
        <div className="min-h-[200vh] bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
            <section className="min-h-screen flex items-center justify-center relative overflow-hidden sticky top-0">
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />
                    <motion.div
                        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
                        animate={{
                            scale: [1.2, 1, 1.2],
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.p
                                className="mb-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                style={{ opacity: taglineOpacity }}
                            >
                                <p className="text-xs sm:text-sm text-gray-500 mb-6 sm:mb-8 tracking-wide uppercase">
                                    Designer & Software Engineer
                                </p>
                            </motion.p>

                            <motion.h1
                                className="text-4xl sm:text-6xl lg:text-8xl font-light leading-[0.95] mb-6 sm:mb-8 tracking-tight text-white"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                {isMounted &&
                                    title.map((line, lineIndex) => (
                                        <div
                                            key={lineIndex}
                                            className="overflow-visible"
                                        >
                                            {line.split('').map((char, i) => {
                                                const values =
                                                    scatterData[lineIndex][i];
                                                const scrollProgress =
                                                    scrollY.get() / 500;

                                                return (
                                                    <motion.span
                                                        key={`${lineIndex}-${i}`}
                                                        style={{
                                                            display:
                                                                'inline-block',
                                                            opacity:
                                                                titleOpacity,
                                                        }}
                                                        animate={{
                                                            x:
                                                                scrollY.get() >
                                                                0
                                                                    ? values.x *
                                                                      Math.min(
                                                                          scrollY.get() /
                                                                              500,
                                                                          1
                                                                      )
                                                                    : 0,
                                                            y:
                                                                scrollY.get() >
                                                                0
                                                                    ? values.y *
                                                                      Math.min(
                                                                          scrollY.get() /
                                                                              500,
                                                                          1
                                                                      )
                                                                    : 0,
                                                            rotate:
                                                                scrollY.get() >
                                                                0
                                                                    ? values.rotate *
                                                                      Math.min(
                                                                          scrollY.get() /
                                                                              500,
                                                                          1
                                                                      )
                                                                    : 0,
                                                        }}
                                                        transition={{
                                                            type: 'spring',
                                                            stiffness: 100,
                                                            damping: 20,
                                                        }}
                                                        className={
                                                            char === ' '
                                                                ? 'w-2 sm:w-4'
                                                                : ''
                                                        }
                                                    >
                                                        {char === ' '
                                                            ? '\u00A0'
                                                            : char}
                                                    </motion.span>
                                                );
                                            })}
                                        </div>
                                    ))}
                            </motion.h1>

                            <motion.h2
                                className="text-base sm:text-xl text-gray-600 lg:mb-8 lg:pt-8 sm:mb-12 font-light leading-relaxed"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                style={{ opacity: subtitleOpacity }}
                            >
                                I design and build thoughtful software that
                                combine clean code with powerful functionality.
                            </motion.h2>

                            <motion.div
                                className="flex gap-4 justify-center mb-12"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                style={{ opacity: buttonsOpacity }}
                            >
                                <button
                                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                                    onClick={() => scrollToSection('projects')}
                                >
                                    View My Work
                                </button>
                                <button
                                    className="px-6 py-3 border border-slate-600 text-slate-300 hover:bg-slate-800 rounded-lg transition-colors"
                                    onClick={() => scrollToSection('contact')}
                                >
                                    Get In Touch
                                </button>
                            </motion.div>

                            <motion.div
                                className="flex gap-6 justify-center"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.7 }}
                                style={{ opacity: buttonsOpacity }}
                            >
                                <a
                                    href="https://github.com/kariemGerges"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-amber-700 hover:text-amber-600 transition-colors"
                                >
                                    <Github className="w-6 h-6" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/kariem-gerges-458294195/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-amber-700 hover:text-amber-600 transition-colors"
                                >
                                    <Linkedin className="w-6 h-6" />
                                </a>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{ opacity: arrowOpacity }}
                >
                    <ArrowDown className="w-6 h-6 text-slate-400" />
                </motion.div>
            </section>

            {/* Placeholder sections for scrolling */}
            <section
                id="projects"
                className="min-h-screen flex items-center justify-center bg-slate-900"
            >
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Projects
                    </h2>
                    <p className="text-gray-400">
                        Your projects section goes here
                    </p>
                </div>
            </section>

            <section
                id="contact"
                className="min-h-screen flex items-center justify-center bg-slate-950"
            >
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Contact
                    </h2>
                    <p className="text-gray-400">
                        Your contact section goes here
                    </p>
                </div>
            </section>
        </div>
    );
}