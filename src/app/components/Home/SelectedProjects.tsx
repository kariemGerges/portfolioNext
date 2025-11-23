'use client';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
// Images
import ecommerce1 from '../../../../public/ecommerce1.png';
import ecommerce2 from '../../../../public/ecommerce2.png';
import ecommerce23 from '../../../../public/ecommerce23.png';
import ecommerce4 from '../../../../public/ecommerce4.png';
import crashify1 from '../../../../public/crashify1.png';
import crashify2 from '../../../../public/crashify2.png';
import crashify3 from '../../../../public/crashify3.png';
import donationPal1 from '../../../../public/donationPal1.png';
import donationPal2 from '../../../../public/donationPal2.png';
import donationPal3 from '../../../../public/donationPal3.png';

export default function SelectedProjects() {
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);
    const [activeImageIndex, setActiveImageIndex] = useState<{ [key: number]: number }>({});

    const SelectedProjects = [
        {
            id: 1,
            title: 'E-Commerce',
            images: [ecommerce1, ecommerce2, ecommerce23, ecommerce4],
            subtitle: 'E-Commerce',
            alt: 'E-Commerce screenshot',
            website: 'https://ecommerce-frontend-henna-two.vercel.app/',
            frontend: 'React.js',
            backend: 'node.js',
            database: 'MongoDB',
        },
        {
            id: 2,
            title: 'Donation Pal',
            images: [donationPal1, donationPal2, donationPal3],
            subtitle: 'Fundraising Platform',
            alt: 'Donation Pal screenshot',
            website: 'https://kariemgerges.github.io/donationPal-frontend/',
            frontend: 'React.js',
            backend: 'node.js',
            database: 'MongoDB',
        },
        {
            id: 3,
            title: 'Crashify',
            images: [crashify1, crashify2, crashify3],
            subtitle: 'Car Insurance',
            alt: 'Crashify screenshot',
            website: 'https://crashify.com.au',
            frontend: 'NEXT.js',
            backend: 'NEXT.js',
            database: 'MongoDB',
        },
    ];

    return (
        <section
            id="work"
            className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 overflow-hidden"
        >
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
                            Selected Work
                        </p>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light mb-4 sm:mb-6 tracking-tight">
                        Enterprise Solutions
                        <br />
                        <span className="text-amber-700">Delivered</span>
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-600 font-light leading-relaxed max-w-3xl">
                        A selection of high-impact projects showcasing scalable architecture, 
                        modern design, and measurable business outcomes.
                    </p>
                </motion.div>
                <div className="space-y-8 sm:space-y-10 lg:space-y-12">
                    {SelectedProjects.map((project, projectIndex) => {
                        const isHovered = hoveredProject === project.id;
                        const currentImageIndex = activeImageIndex[project.id] || 0;

                        return (
                            <motion.div
                                key={project.id}
                                className="group cursor-pointer"
                                onMouseEnter={() => setHoveredProject(project.id)}
                                onMouseLeave={() => setHoveredProject(null)}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-100px' }}
                                transition={{ duration: 0.6, delay: projectIndex * 0.1 }}
                            >
                                {/* Image Stack Container */}
                                <div className="relative h-56 sm:h-64 md:h-80 lg:h-96 xl:h-[450px] mb-3 sm:mb-4 rounded-lg overflow-hidden border border-gray-200 bg-gray-100">
                                    {/* Main Image - Always Visible */}
                                    <motion.div
                                        className="absolute inset-0 z-10"
                                        animate={{
                                            scale: isHovered ? 1.02 : 1,
                                        }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                    >
                                        <Image
                                            src={project.images[currentImageIndex]}
                                            alt={`${project.alt} - Image ${currentImageIndex + 1}`}
                                            fill
                                            className="object-cover"
                                            priority={projectIndex === 0}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                                    </motion.div>

                                    {/* Stacked Images - Reveal on Hover */}
                                    {project.images.map((image, imgIndex) => {
                                        if (imgIndex === currentImageIndex) return null;
                                        
                                        const stackOffset = imgIndex - currentImageIndex;
                                        const absOffset = Math.abs(stackOffset);
                                        
                                        return (
                                            <motion.div
                                                key={imgIndex}
                                                className="absolute inset-0 z-0"
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                animate={{
                                                    opacity: isHovered && absOffset <= 1 ? 0.2 : 0,
                                                    scale: isHovered && absOffset <= 1 ? 0.98 : 0.95,
                                                    x: isHovered ? stackOffset * 10 : 0,
                                                    y: isHovered ? absOffset * 8 : 0,
                                                }}
                                                transition={{ duration: 0.3, delay: absOffset * 0.05, ease: "easeOut" }}
                                                onMouseEnter={() => {
                                                    setActiveImageIndex(prev => ({
                                                        ...prev,
                                                        [project.id]: imgIndex,
                                                    }));
                                                }}
                                            >
                                                <Image
                                                    src={image}
                                                    alt={`${project.alt} - Image ${imgIndex + 1}`}
                                                    fill
                                                    className="object-cover rounded-lg"
                                                />
                                            </motion.div>
                                        );
                                    })}

                                    {/* Image Indicators */}
                                    <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 sm:gap-2 bg-black/20 backdrop-blur-sm px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full">
                                        {project.images.map((_, imgIndex) => (
                                            <motion.button
                                                key={imgIndex}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setActiveImageIndex(prev => ({
                                                        ...prev,
                                                        [project.id]: imgIndex,
                                                    }));
                                                }}
                                                className={`h-1 sm:h-1.5 rounded-full transition-all ${
                                                    imgIndex === currentImageIndex
                                                        ? 'w-6 sm:w-8 bg-white'
                                                        : 'w-1 sm:w-1.5 bg-white/50 hover:bg-white/70'
                                                }`}
                                                whileHover={{ scale: 1.2 }}
                                                whileTap={{ scale: 0.9 }}
                                                aria-label={`View image ${imgIndex + 1}`}
                                            />
                                        ))}
                                    </div>

                                    {/* Tech Stack Badge */}
                                    <motion.div
                                        className="absolute top-3 sm:top-4 right-3 sm:right-4 z-20 flex flex-wrap gap-1.5 sm:gap-2"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: isHovered ? 1 : 0.8 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <span className="px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs bg-white/95 backdrop-blur-sm rounded-lg text-gray-700 font-medium border border-gray-200 shadow-sm">
                                            {project.frontend}
                                        </span>
                                        <span className="px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs bg-white/95 backdrop-blur-sm rounded-lg text-gray-700 font-medium border border-gray-200 shadow-sm">
                                            {project.backend}
                                        </span>
                                    </motion.div>
                                </div>

                                {/* Project Info */}
                                <div className="flex justify-between items-start gap-2 sm:gap-3 pt-1 sm:pt-2">
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-lg sm:text-xl md:text-2xl font-light mb-1 sm:mb-1.5 tracking-tight">
                                            {project.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm lg:text-base text-gray-600 font-light mb-1.5 sm:mb-2">
                                            {project.subtitle}
                                        </p>
                                        <div className="flex items-center gap-2 text-xs text-gray-500">
                                            <span className="px-2 py-0.5 sm:py-1 bg-gray-100 rounded border border-gray-200 font-mono text-[10px] sm:text-xs">
                                                {project.database}
                                            </span>
                                        </div>
                                    </div>
                                    <motion.div
                                        animate={{
                                            x: isHovered ? 6 : 0,
                                        }}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                        className="flex-shrink-0"
                                    >
                                        {project.website ? (
                                            <Link href={project.website} target="_blank" rel="noopener noreferrer">
                                                <div className="p-1.5 sm:p-2 rounded-lg bg-gray-100 group-hover:bg-amber-50 transition-colors">
                                                    <ArrowRight
                                                        size={16}
                                                        className="sm:w-[18px] sm:h-[18px] text-amber-700 group-hover:text-amber-800 transition-colors"
                                                    />
                                                </div>
                                            </Link>
                                        ) : (
                                            <div className="p-1.5 sm:p-2 rounded-lg bg-gray-100 group-hover:bg-amber-50 transition-colors">
                                                <ArrowRight
                                                    size={16}
                                                    className="sm:w-[18px] sm:h-[18px] text-amber-700 group-hover:text-amber-800 transition-colors"
                                                />
                                            </div>
                                        )}
                                    </motion.div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
