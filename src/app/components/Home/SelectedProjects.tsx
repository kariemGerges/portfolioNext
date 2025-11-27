'use client';
import { useState } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
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
            subtitle: 'E-Commerce Platform',
            description: 'A full-featured e-commerce solution with modern UI, secure payment processing, and comprehensive admin dashboard.',
            alt: 'E-Commerce screenshot',
            website: 'https://ecommerce-frontend-henna-two.vercel.app/',
            frontend: 'React.js',
            backend: 'Node.js',
            database: 'MongoDB',
        },
        {
            id: 2,
            title: 'Donation Pal',
            images: [donationPal1, donationPal2, donationPal3],
            subtitle: 'Fundraising Platform',
            description: 'A platform for creating and managing fundraising campaigns with real-time donation tracking and social sharing.',
            alt: 'Donation Pal screenshot',
            website: 'https://kariemgerges.github.io/donationPal-frontend/',
            frontend: 'React.js',
            backend: 'Node.js',
            database: 'MongoDB',
        },
        {
            id: 3,
            title: 'Crashify',
            images: [crashify1, crashify2, crashify3],
            subtitle: 'Car Insurance Platform',
            description: 'An insurance platform with quote generation, policy management, and claims processing capabilities.',
            alt: 'Crashify screenshot',
            website: 'https://crashify.com.au',
            frontend: 'Next.js',
            backend: 'Next.js',
            database: 'MongoDB',
        },
    ];

    return (
        <section
            id="work"
            className="relative py-20 lg:py-32 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ 
                        duration: 0.6, 
                        ease: [0.16, 1, 0.3, 1] 
                    }}
                    className="text-center mb-20 lg:mb-32"
                >
                    <div className="overflow-hidden mb-4">
                        <motion.h2
                            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ 
                                duration: 0.7, 
                                ease: [0.16, 1, 0.3, 1] 
                            }}
                        >
                            Selected <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Work</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        className="text-xl sm:text-2xl text-gray-600 font-light max-w-2xl mx-auto mt-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                            duration: 0.7, 
                            delay: 0.2,
                            ease: [0.16, 1, 0.3, 1] 
                        }}
                    >
                        Enterprise solutions delivered with precision and care.
                    </motion.p>
                </motion.div>

                {/* Projects */}
                <div className="space-y-24 lg:space-y-32">
                    {SelectedProjects.map((project, projectIndex) => {
                        const isHovered = hoveredProject === project.id;
                        const currentImageIndex = activeImageIndex[project.id] || 0;

                        return (
                            <motion.div
                                key={project.id}
                                className="group"
                                onMouseEnter={() => setHoveredProject(project.id)}
                                onMouseLeave={() => setHoveredProject(null)}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-100px' }}
                                transition={{ 
                                    duration: 0.7, 
                                    delay: projectIndex * 0.15, 
                                    ease: [0.16, 1, 0.3, 1] 
                                }}
                            >
                                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                                    {/* Image Section */}
                                    <motion.div
                                        className={`relative ${projectIndex % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                    >
                                        <div className="relative w-full rounded-3xl overflow-hidden bg-gray-100 shadow-2xl">
                                            <div className="relative aspect-[4/3] lg:aspect-[16/10]">
                                                <Image
                                                    src={project.images[currentImageIndex]}
                                                    alt={`${project.alt} - Image ${currentImageIndex + 1}`}
                                                    fill
                                                    className="object-cover transition-transform duration-700"
                                                    priority={projectIndex === 0}
                                                    style={{ 
                                                        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                                                        willChange: 'transform'
                                                    }}
                                                />
                                                {/* Gradient Overlay */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            </div>

                                            {/* Image Indicators */}
                                            {project.images.length > 1 && (
                                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full">
                                                    {project.images.map((_, imgIndex) => (
                                                        <button
                                                            key={imgIndex}
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                setActiveImageIndex(prev => ({
                                                                    ...prev,
                                                                    [project.id]: imgIndex,
                                                                }));
                                                            }}
                                                            className={`h-1.5 rounded-full transition-all duration-300 ${
                                                                imgIndex === currentImageIndex
                                                                    ? 'w-8 bg-white'
                                                                    : 'w-1.5 bg-white/60 hover:bg-white/80'
                                                            }`}
                                                            aria-label={`View image ${imgIndex + 1}`}
                                                        />
                                                    ))}
                                                </div>
                                            )}

                                            {/* Tech Stack Badge */}
                                            <div className="absolute top-4 right-4 z-20 flex flex-wrap gap-2">
                                                <span className="px-3 py-1.5 text-xs font-medium bg-white/95 backdrop-blur-sm rounded-lg text-gray-800 shadow-sm">
                                                    {project.frontend}
                                                </span>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Content Section */}
                                    <motion.div
                                        className={`space-y-6 ${projectIndex % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
                                        initial={{ opacity: 0, x: projectIndex % 2 === 0 ? 30 : -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ 
                                            duration: 0.7, 
                                            delay: projectIndex * 0.15 + 0.2,
                                            ease: [0.16, 1, 0.3, 1] 
                                        }}
                                    >
                                        {/* Project Number */}
                                        <div className="text-sm font-medium text-amber-600 uppercase tracking-wider">
                                            Project {String(projectIndex + 1).padStart(2, '0')}
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight">
                                            {project.title}
                                        </h3>

                                        {/* Subtitle */}
                                        <p className="text-xl sm:text-2xl text-gray-600 font-light">
                                            {project.subtitle}
                                        </p>

                                        {/* Description */}
                                        <p className="text-base sm:text-lg text-gray-600 font-light leading-relaxed max-w-lg">
                                            {project.description}
                                        </p>

                                        {/* Tech Stack */}
                                        <div className="flex flex-wrap items-center gap-3 pt-4">
                                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                                <span className="px-3 py-1.5 bg-amber-50 rounded-lg border border-amber-100 text-amber-700 font-medium">
                                                    {project.frontend}
                                                </span>
                                                <span className="text-gray-400">/</span>
                                                <span className="px-3 py-1.5 bg-amber-50 rounded-lg border border-amber-100 text-amber-700 font-medium">
                                                    {project.backend}
                                                </span>
                                                <span className="text-gray-400">/</span>
                                                <span className="px-3 py-1.5 bg-amber-50 rounded-lg border border-amber-100 text-amber-700 font-medium">
                                                    {project.database}
                                                </span>
                                            </div>
                                        </div>

                                        {/* CTA */}
                                        {project.website && (
                                            <motion.div
                                                className="pt-4"
                                                whileHover={{ x: 4 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <Link
                                                    href={project.website}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="group/link inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-full text-base font-medium hover:shadow-lg transition-all duration-300"
                                                >
                                                    <span>Visit Live Site</span>
                                                    <ExternalLink className="w-4 h-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                                                </Link>
                                            </motion.div>
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
