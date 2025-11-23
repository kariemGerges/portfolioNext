'use client';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { 
    ExternalLink, 
    X, 
    Code2, 
    Database, 
    Globe, 
    Filter,
    ArrowRight,
    Smartphone,
    GraduationCap,
    TrendingUp,
    Utensils,
    Gamepad2
} from 'lucide-react';
import Link from 'next/link';

// Note: You'll need to import the actual images. For now, using placeholders
// import donationPal from '../../../../public/donationPal1.png';
// import eCommerce from '../../../../public/ecommerce1.png';
// etc.

const projects = [
    {
        id: 1,
        title: 'Donation Pal',
        image: '/donationPal1.png', // Update with actual import
        alt: 'Donation Pal',
        webSite: 'https://kariemgerges.github.io/donationPal-frontend/',
        category: 'Social Impact',
        gradient: 'from-emerald-500 via-cyan-500 to-blue-500',
        prevDescription: '<div><h1>Donation Pal: Streamlined Fundraising</h1><p>Donation Pal is a dynamic web application for creating and managing fundraising campaigns. Features include user-friendly campaign creation, secure donations, real-time tracking, and an admin dashboard. Built with Node.js and React, it uses MongoDB for data management.</p><h2>Technology Stack:</h2><ul><li><strong>Frontend:</strong> React.js</li><li><strong>Backend:</strong> Node.js, payment processing</li><li><strong>Database:</strong> MongoDB</li></ul></div>',
        frontend: ['React.js'],
        backend: ['Node.js'],
        database: ['MongoDB'],
    },
    {
        id: 2,
        title: 'E-Commerce',
        image: '/ecommerce1.png', // Update with actual import
        alt: 'E-Commerce',
        webSite: 'https://ecommerce-frontend-henna-two.vercel.app/',
        category: 'E-Commerce',
        gradient: 'from-rose-500 via-pink-500 to-purple-500',
        prevDescription: '<div><h1>FreshMart: E-Commerce Platform</h1><p>The FreshMart project is a dynamic digital platform that transforms the grocery shopping experience. It combines a user‑friendly interface with robust inventory management and secure e‑commerce features to connect consumers with a curated selection of local and international grocery items, ensuring convenience and efficiency in every transaction.</p></div>',
        frontend: ['React.js'],
        backend: ['Node.js'],
        database: ['MongoDB', 'MySQL'],
    },
    {
        id: 3,
        title: 'Admin Dashboard',
        image: '/ecommerce1.png', // Update with actual import
        alt: 'E-Commerce Admin Dashboard',
        webSite: 'https://ecommerce-frontend-admindashborad.vercel.app/',
        category: 'Dashboard',
        gradient: 'from-slate-600 via-gray-600 to-zinc-600',
        prevDescription: '<div><h1>Admin Dashboard</h1><p>Comprehensive admin dashboard for e-commerce management with real-time analytics and control panels.</p></div>',
        frontend: ['React.js'],
        backend: ['Node.js'],
        database: ['MongoDB', 'MySQL'],
    },
    {
        id: 4,
        title: 'Travia',
        image: '/ecommerce1.png', // Update with actual import
        alt: 'Travia',
        category: 'Gaming',
        gradient: 'from-indigo-500 via-purple-500 to-pink-500',
        prevDescription: '<div><h1>Travia: Engaging Trivia Game</h1><p>Travia is a web app for playing trivia games with an engaging and interactive experience. It uses Google Big Data for trivia questions and MongoDB for secure authentication. The backend is built with Node.js and Express, while the frontend uses React.</p></div>',
        frontend: ['React'],
        backend: ['Node.js', 'Express'],
        database: ['MongoDB', 'Google Big Data'],
    },
    {
        id: 5,
        title: 'Guide Me',
        image: '/ecommerce1.png', // Update with actual import
        alt: 'Guide Me',
        webSite: 'https://kariemgerges.github.io/GuideMe/',
        category: 'AI Travel',
        gradient: 'from-purple-600 via-pink-600 to-blue-600',
        prevDescription: '<div><h1>GuideMe: Your AI Travel Companion</h1><p>GuideMe is an AI-driven travel companion app that helps users plan and enhance their journeys. Key features include personalized travel suggestions, an intuitive itinerary planner, integration with Google Places API, interactive user interface with map and card components, and valuable travel insights.</p><h2>Technology Stack:</h2><ul><li><strong>Frontend:</strong> React.js</li><li><strong>Backend:</strong> Node.js, Google Places API</li><li><strong>AI Integration:</strong> Advanced AI algorithms</li></ul></div>',
        frontend: ['React.js'],
        backend: ['Node.js', 'Google Places API'],
        database: ['Firebase'],
    },
    {
        id: 6,
        title: 'TheStateQuiz',
        image: '/ecommerce1.png', // Update with actual import
        alt: 'State Quiz',
        webSite: 'https://pages.github.iu.edu/kgerges/sp23-advanced-web-final-project/index.html',
        category: 'Education',
        gradient: 'from-green-500 via-teal-500 to-blue-500',
        prevDescription: '<div><h1>StateQuiz: Learning U.S. States</h1><p>StateQuiz is a website designed to help 3rd graders learn about U.S. states through engaging lessons and quizzes. It features interactive maps and quizzes stored in a MongoDB database, with a frontend built using HTML and advanced CSS for a fun and educational experience.</p></div>',
        frontend: ['HTML', 'CSS'],
        backend: ['Not specified'],
        database: ['MongoDB'],
    },
    {
        id: 7,
        title: 'StockSavvy',
        image: '/ecommerce1.png', // Update with actual import
        alt: 'Stock Savvy',
        category: 'FinTech',
        gradient: 'from-yellow-500 via-orange-500 to-red-500',
        prevDescription: '<div><h1>StockSavvy: Real-Time Stock Analysis</h1><p>StockSavvy offers real-time stock data, market analysis, and advanced predictive modeling. Built with React, Node.js, and Express for the front-end and back-end, it integrates Python for AI-driven analysis to help users make informed investment decisions.</p></div>',
        frontend: ['React'],
        backend: ['Node.js', 'Express', 'Python'],
        database: ['Not specified'],
    },
    {
        id: 8,
        title: 'TeachMe App',
        image: '/ecommerce1.png', // Update with actual import
        alt: 'TeachMe App',
        webSite: 'Full Mobile App',
        category: 'Mobile Education',
        gradient: 'from-violet-500 via-blue-500 to-cyan-500',
        prevDescription: '<div><h1>TeachMe App</h1><p>A full mobile app for android and ios, helping students from 1st grade to 12th grade learn and practice their subjects with video lessons, quizzes, and progress tracking.</p></div>',
        frontend: ['React Native'],
        backend: ['Firebase'],
        database: ['FireStore'],
    },
    {
        id: 9,
        title: 'ChatNCook App',
        image: '/ecommerce1.png', // Update with actual import
        alt: 'ChatNCook App',
        webSite: 'Full Mobile App',
        category: 'Mobile Lifestyle',
        gradient: 'from-orange-500 via-amber-500 to-yellow-500',
        prevDescription: '<div><h1>ChatNCook App</h1><p>A full mobile app for android and ios, combining social features with cooking guidance and recipe sharing capabilities.</p></div>',
        frontend: ['React Native'],
        backend: ['Firebase'],
        database: ['FireStore'],
    },
];

const categoryIcons: { [key: string]: any } = {
    'Social Impact': Globe,
    'E-Commerce': TrendingUp,
    'Dashboard': Code2,
    'Gaming': Gamepad2,
    'AI Travel': Globe,
    'Education': GraduationCap,
    'FinTech': TrendingUp,
    'Mobile Education': Smartphone,
    'Mobile Lifestyle': Utensils,
};

const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

export default function Work() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    const filteredProjects = useMemo(() => {
        if (selectedCategory === 'All') return projects;
        return projects.filter(p => p.category === selectedCategory);
    }, [selectedCategory]);

    return (
        <div className="min-h-screen bg-white">
            {/* Header Section */}
            <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 via-transparent to-transparent pointer-events-none" />
                
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full border border-gray-200 mb-6">
                            <div className="w-2 h-2 rounded-full bg-amber-700" />
                            <p className="text-xs sm:text-sm text-gray-600 tracking-wide uppercase font-medium">
                                Portfolio
                            </p>
                        </div>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light leading-[1.1] mb-4 sm:mb-6 tracking-tight">
                            Complete Project
                            <br />
                            <span className="text-amber-700">Showcase</span>
                        </h1>
                        <p className="text-sm sm:text-base lg:text-lg text-gray-600 font-light leading-relaxed max-w-3xl">
                            A comprehensive collection of enterprise solutions spanning web applications, 
                            mobile platforms, and innovative digital experiences.
                        </p>
                    </motion.div>

                    {/* Category Filter */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-wrap items-center gap-2 mt-6 sm:mt-8"
                    >
                        <Filter className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500 flex-shrink-0" />
                        {categories.map((category) => {
                            const Icon = category === 'All' ? null : categoryIcons[category];
                            return (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-1.5 sm:gap-2 ${
                                        selectedCategory === category
                                            ? 'bg-black text-white shadow-lg'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                                    }`}
                                >
                                    {Icon && <Icon className="w-3 h-3 sm:w-4 sm:h-4" />}
                                    <span className="whitespace-nowrap">{category}</span>
                                </button>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24">
                <div className="max-w-7xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedCategory}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
                        >
                            {filteredProjects.map((project, index) => {
                                const CategoryIcon = categoryIcons[project.category];
                                return (
                                    <motion.div
                                        key={project.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -30 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        onClick={() => setSelectedProject(project)}
                                        className="group cursor-pointer"
                                    >
                                        <div className="relative h-56 sm:h-72 lg:h-80 rounded-lg overflow-hidden border border-gray-200 bg-gray-100 mb-3 sm:mb-4">
                                            {/* Gradient Overlay */}
                                            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                                            
                                            {/* Image */}
                                            <div className="relative w-full h-full">
                                                <Image
                                                    src={project.image}
                                                    alt={project.alt}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                            </div>

                                            {/* Category Badge */}
                                            <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-10 flex items-center gap-1.5 sm:gap-2">
                                                {CategoryIcon && (
                                                    <div className="p-1.5 sm:p-2 bg-white/90 backdrop-blur-sm rounded-lg">
                                                        <CategoryIcon className="w-3 h-3 sm:w-4 sm:h-4 text-gray-700" />
                                                    </div>
                                                )}
                                                <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/90 backdrop-blur-sm rounded-lg text-[10px] sm:text-xs font-medium text-gray-700">
                                                    {project.category}
                                                </span>
                                            </div>

                                            {/* Hover Overlay */}
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                                                <motion.div
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    whileHover={{ opacity: 1, scale: 1 }}
                                                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                                                >
                                                    <div className="px-4 sm:px-6 py-2 sm:py-3 bg-white rounded-lg shadow-xl">
                                                        <span className="text-xs sm:text-sm font-medium text-gray-900">View Details</span>
                                                    </div>
                                                </motion.div>
                                            </div>
                                        </div>

                                        {/* Project Info */}
                                        <div>
                                            <h3 className="text-lg sm:text-xl lg:text-2xl font-light mb-1.5 sm:mb-2 tracking-tight group-hover:text-amber-700 transition-colors">
                                                {project.title}
                                            </h3>
                                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                                {project.frontend.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs bg-gray-100 rounded border border-gray-200 text-gray-600 font-mono"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </AnimatePresence>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-24">
                            <p className="text-gray-500 text-lg">No projects found in this category.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Project Detail Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="fixed inset-4 sm:inset-8 lg:inset-16 z-50 overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="min-h-full bg-white rounded-lg shadow-2xl overflow-hidden">
                                {/* Modal Header */}
                                <div className={`relative h-48 sm:h-64 lg:h-80 bg-gradient-to-br ${selectedProject.gradient}`}>
                                    <div className="absolute inset-0 bg-black/20" />
                                    <Image
                                        src={selectedProject.image}
                                        alt={selectedProject.alt}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                                    
                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10 p-2 sm:p-3 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-white transition-colors"
                                        aria-label="Close modal"
                                    >
                                        <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900" />
                                    </button>

                                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 z-10">
                                        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                                            {categoryIcons[selectedProject.category] && (
                                                <div className="p-1.5 sm:p-2 bg-white/90 backdrop-blur-sm rounded-lg">
                                                    {(() => {
                                                        const Icon = categoryIcons[selectedProject.category];
                                                        return <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />;
                                                    })()}
                                                </div>
                                            )}
                                            <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/90 backdrop-blur-sm rounded-lg text-[10px] sm:text-xs font-medium text-gray-700">
                                                {selectedProject.category}
                                            </span>
                                        </div>
                                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white mb-3 sm:mb-4 tracking-tight">
                                            {selectedProject.title}
                                        </h2>
                                        {selectedProject.webSite && selectedProject.webSite !== 'Full Mobile App' && (
                                            <a
                                                href={selectedProject.webSite}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white text-black rounded-lg font-medium text-sm hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                                            >
                                                <span>Visit Project</span>
                                                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Modal Content */}
                                <div className="p-4 sm:p-6 lg:p-8">
                                    <div 
                                        className="mb-6 sm:mb-8 text-gray-700 [&_h1]:text-xl [&_h1]:sm:text-2xl [&_h1]:lg:text-3xl [&_h1]:font-light [&_h1]:mb-3 [&_h1]:sm:mb-4 [&_h1]:tracking-tight [&_h2]:text-lg [&_h2]:sm:text-xl [&_h2]:lg:text-2xl [&_h2]:font-light [&_h2]:mt-6 [&_h2]:sm:mt-8 [&_h2]:mb-3 [&_h2]:sm:mb-4 [&_p]:text-sm [&_p]:sm:text-base [&_p]:leading-relaxed [&_p]:mb-3 [&_p]:sm:mb-4 [&_ul]:list-disc [&_ul]:ml-5 [&_ul]:sm:ml-6 [&_ul]:mb-3 [&_ul]:sm:mb-4 [&_li]:mb-2 [&_li]:text-sm [&_li]:sm:text-base [&_strong]:font-medium [&_strong]:text-black"
                                        dangerouslySetInnerHTML={{ __html: selectedProject.prevDescription }}
                                    />

                                    {/* Tech Stack */}
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-gray-200">
                                        <div>
                                            <div className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                                                <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-amber-700" />
                                                <h3 className="text-base sm:text-lg font-medium">Frontend</h3>
                                            </div>
                                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                                {selectedProject.frontend.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="px-2 sm:px-3 py-1 sm:py-1.5 bg-gray-100 rounded-lg text-xs sm:text-sm text-gray-700 font-medium border border-gray-200"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <div className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                                                <Database className="w-4 h-4 sm:w-5 sm:h-5 text-amber-700" />
                                                <h3 className="text-base sm:text-lg font-medium">Backend</h3>
                                            </div>
                                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                                {selectedProject.backend.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="px-2 sm:px-3 py-1 sm:py-1.5 bg-gray-100 rounded-lg text-xs sm:text-sm text-gray-700 font-medium border border-gray-200"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <div className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                                                <Database className="w-4 h-4 sm:w-5 sm:h-5 text-amber-700" />
                                                <h3 className="text-base sm:text-lg font-medium">Database</h3>
                                            </div>
                                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                                {selectedProject.database.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="px-2 sm:px-3 py-1 sm:py-1.5 bg-gray-100 rounded-lg text-xs sm:text-sm text-gray-700 font-medium border border-gray-200"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Back to Home Link */}
            <section className="px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
                <div className="max-w-7xl mx-auto">
                    <Link
                        href="/"
                        className="group inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-600 hover:text-black transition-colors"
                    >
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 rotate-180 transition-transform group-hover:-translate-x-1" />
                        <span>Back to Home</span>
                    </Link>
                </div>
            </section>
        </div>
    );
}
