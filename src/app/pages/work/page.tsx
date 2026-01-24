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
    ArrowLeft,
    Smartphone,
    GraduationCap,
    TrendingUp,
    Utensils,
    Gamepad2
} from 'lucide-react';
import Link from 'next/link';



const projects = [
    {
        id: 1,
        title: 'Portfolio NEXT.js',
        image: '/mp.png',
        alt: 'Portfolio Next.js Website',
        webSite: 'https://kariemgerges.vercel.app',
        githubUrl: 'https://github.com/kariemGerges/portfolioNext',
        category: 'Portfolio',
        gradient: 'from-blue-500 via-purple-500 to-pink-500',
        prevDescription: '<div><h1>Portfolio Next: Modern Portfolio Website</h1><p>A modern, responsive portfolio website built with Next.js 16, featuring a blog system, project showcase, and dynamic content management. The site includes SEO optimization, performance enhancements, and a beautiful UI with dark mode support.</p><h2>Technology Stack:</h2><ul><li><strong>Frontend:</strong> Next.js 16, React 19, TypeScript</li><li><strong>Styling:</strong> Tailwind CSS, Framer Motion</li><li><strong>Database:</strong> MongoDB (for blog posts)</li><li><strong>Deployment:</strong> Vercel</li></ul><p><strong>Features:</strong> Blog system with categories and tags, project showcase, contact form, responsive design, SEO optimized, performance optimized.</p></div>',
        frontend: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
        backend: ['Next.js API Routes', 'MongoDB'],
        database: ['MongoDB'],
    },
    {
        id: 2,
        title: 'Crashify',
        image: '/crashify1.png',
        alt: 'Crashify Application',
        webSite: 'https://crashify.com.au',
        githubUrl: 'https://github.com/kariemGerges/crashify',
        category: 'Web Application',
        gradient: 'from-red-500 via-orange-500 to-yellow-500',
        prevDescription: '<div><h1>Crashify: Modern Web Application</h1><p>A full-stack web application built with TypeScript, featuring modern UI/UX design and robust functionality. The project demonstrates advanced TypeScript patterns and modern web development practices.</p><h2>Technology Stack:</h2><ul><li><strong>Frontend:</strong> TypeScript, React</li><li><strong>Backend:</strong> TypeScript, Node.js</li><li><strong>Database:</strong> Modern database solution</li></ul></div>',
        frontend: ['TypeScript', 'React', 'Tailwind CSS', 'Next.js'],
        backend: ['TypeScript', 'Node.js', 'Next.js APP Routes'],
        database: ['MongoDB', 'Supabase', 'Prisma'],
    },
    {
        id: 15,
        title: 'Indiana iLearn',
        image: '/ilearn-homepage.png',
        alt: 'Indiana iLearn 4th Grade Practice Exams',
        webSite: 'https://ilearn-ten.vercel.app/',
        githubUrl: '',
        category: 'Education',
        gradient: 'from-blue-600 via-indigo-600 to-purple-600',
        prevDescription: '<div><h1>Indiana iLearn: 4th Grade Practice Exams</h1><p>Free practice assessments aligned with Indiana State Standards for Mathematics and English Language Arts. This educational platform helps students build confidence and prepare for success with real exam-style questions. Features instant scoring, multiple question formats, and comprehensive progress tracking.</p><h2>Features:</h2><ul><li><strong>Mathematics Practice:</strong> 44 questions covering Number Sense, Computation, Geometry, Measurement, and Data Analysis (70-100 minutes)</li><li><strong>English Language Arts:</strong> 40 questions covering Reading Foundations, Reading Comprehension, Vocabulary, Grammar, and Writing (90 minutes)</li><li><strong>Difficulty Levels:</strong> Below-Level (Easy), On-Level (Medium), and Above-Level (Hard) options</li><li><strong>Instant Scoring:</strong> Get immediate feedback after submission</li><li><strong>Multiple Formats:</strong> Multiple choice, passage-based, and writing tasks</li><li><strong>Standards Aligned:</strong> All questions follow Indiana Academic Standards for Grade 4</li></ul><h2>Technology Stack:</h2><ul><li><strong>Frontend:</strong> Next.js, React, TypeScript, Tailwind CSS</li><li><strong>Backend:</strong> Next.js API Routes</li><li><strong>Deployment:</strong> Vercel</li></ul><p><strong>Purpose:</strong> Designed to simulate the real iLearn assessment experience and help Indiana students prepare effectively for their official assessments.</p></div>',
        frontend: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
        backend: ['Next.js API Routes'],
        database: [],
    },
    {
        id: 3,
        title: 'iBrain',
        image: '/ibrain-homepage.png',
        alt: 'iBrain Application',
        webSite: 'https://ibrain.vercel.app',
        githubUrl: 'https://github.com/kariemGerges/iBrain',
        category: 'AI/ML',
        gradient: 'from-indigo-500 via-purple-500 to-pink-500',
        prevDescription: '<div><h1>iBrain: AI-Powered Application</h1><p>An intelligent application built with TypeScript, leveraging AI and machine learning capabilities to provide smart solutions and insights.</p><h2>Technology Stack:</h2><ul><li><strong>Frontend:</strong> TypeScript, React</li><li><strong>Backend:</strong> TypeScript, AI Integration</li><li><strong>AI/ML:</strong> Advanced AI algorithms</li></ul></div>',
        frontend: ['TypeScript', 'React'],
        backend: ['TypeScript', 'AI Integration'],
        database: ['Database'],
    },
    {
        id: 4,
        title: 'Donation Pal',
        image: '/donationpal1.png',
        alt: 'Donation Pal',
        webSite: 'https://kariemgerges.github.io/donationPal-frontend/',
        githubUrl: 'https://github.com/kariemGerges/donationPal-frontend',
        category: 'Social Impact',
        gradient: 'from-emerald-500 via-cyan-500 to-blue-500',
        prevDescription: '<div><h1>Donation Pal: Streamlined Fundraising</h1><p>Donation Pal is a dynamic web application for creating and managing fundraising campaigns. Features include user-friendly campaign creation, secure donations, real-time tracking, and an admin dashboard. Built with Node.js and React, it uses MongoDB for data management.</p><h2>Technology Stack:</h2><ul><li><strong>Frontend:</strong> React.js</li><li><strong>Backend:</strong> Node.js, payment processing</li><li><strong>Database:</strong> MongoDB</li></ul><p><strong>Repository:</strong> <a href="https://github.com/kariemGerges/donationPal-frontend" target="_blank">Frontend</a> | <a href="https://github.com/kariemGerges/donationPal-backend" target="_blank">Backend</a></p></div>',
        frontend: ['React.js'],
        backend: ['Node.js'],
        database: ['MongoDB'],
    },
    {
        id: 5,
        title: 'E-Commerce Platform',
        image: '/ecommerce1.png',
        alt: 'E-Commerce Platform',
        webSite: 'https://ecommerce-frontend-henna-two.vercel.app/',
        githubUrl: 'https://github.com/kariemGerges/ecommerce-frontend',
        category: 'E-Commerce',
        gradient: 'from-rose-500 via-pink-500 to-purple-500',
        prevDescription: '<div><h1>FreshMart: E-Commerce Platform</h1><p>The FreshMart project is a dynamic digital platform that transforms the grocery shopping experience. It combines a user‑friendly interface with robust inventory management and secure e‑commerce features to connect consumers with a curated selection of local and international grocery items, ensuring convenience and efficiency in every transaction.</p><h2>Technology Stack:</h2><ul><li><strong>Frontend:</strong> React.js, JavaScript</li><li><strong>Backend:</strong> Node.js, Express</li><li><strong>Database:</strong> MongoDB, MySQL</li></ul><p><strong>Repositories:</strong> <a href="https://github.com/kariemGerges/ecommerce-frontend" target="_blank">Frontend</a> | <a href="https://github.com/kariemGerges/ecommerce-frontend-admin" target="_blank">Admin Dashboard</a> | <a href="https://github.com/kariemGerges/ecommerce-backend" target="_blank">Backend</a></p></div>',
        frontend: ['React.js', 'JavaScript'],
        backend: ['Node.js', 'Express'],
        database: ['MongoDB', 'MySQL'],
    },
    {
        id: 6,
        title: 'Admin Dashboard',
        image: '/admin-dashboard-homepage.png',
        alt: 'E-Commerce Admin Dashboard',
        webSite: 'https://ecommerce-frontend-admindashborad.vercel.app/',
        githubUrl: 'https://github.com/kariemGerges/ecommerce-frontend-admin',
        category: 'Dashboard',
        gradient: 'from-slate-600 via-gray-600 to-zinc-600',
        prevDescription: '<div><h1>Admin Dashboard</h1><p>Comprehensive admin dashboard for e-commerce management with real-time analytics and control panels. Features include inventory management, order tracking, user management, and sales analytics.</p><h2>Technology Stack:</h2><ul><li><strong>Frontend:</strong> React.js, JavaScript</li><li><strong>Backend:</strong> Node.js, Express</li><li><strong>Database:</strong> MongoDB, MySQL</li></ul></div>',
        frontend: ['React.js', 'JavaScript'],
        backend: ['Node.js', 'Express'],
        database: ['MongoDB', 'MySQL'],
    },
    {
        id: 7,
        title: 'Guide Me',
        image: '/guide-me-homepage.png',
        alt: 'Guide Me',
        webSite: 'https://kariemgerges.github.io/GuideMe/',
        githubUrl: 'https://github.com/kariemGerges/GuideMe',
        category: 'AI Travel',
        gradient: 'from-purple-600 via-pink-600 to-blue-600',
        prevDescription: '<div><h1>GuideMe: Your AI Travel Companion</h1><p>GuideMe is an AI-driven travel companion app that helps users plan and enhance their journeys. Key features include personalized travel suggestions, an intuitive itinerary planner, integration with Google Places API, interactive user interface with map and card components, and valuable travel insights.</p><h2>Technology Stack:</h2><ul><li><strong>Frontend:</strong> React.js, JavaScript</li><li><strong>Backend:</strong> Node.js, Google Places API</li><li><strong>AI Integration:</strong> Advanced AI algorithms</li><li><strong>Database:</strong> Firebase</li></ul><p><strong>Repository:</strong> <a href="https://github.com/kariemGerges/GuideMe" target="_blank">Frontend</a> | <a href="https://github.com/kariemGerges/GuideMe-backend" target="_blank">Backend</a></p></div>',
        frontend: ['React.js', 'JavaScript'],
        backend: ['Node.js', 'Google Places API'],
        database: ['Firebase'],
    },
    {
        id: 8,
        title: 'StockMe - Stock Management',
        image: '/ecommerce1.png',
        alt: 'StockMe Application',
        webSite: '',
        githubUrl: 'https://github.com/kariemGerges/stockMe2_frontend',
        category: 'FinTech',
        gradient: 'from-yellow-500 via-orange-500 to-red-500',
        underConstruction: true,
        prevDescription: '<div><h1>StockMe: Real-Time Stock Management</h1><p>StockMe offers real-time stock data, market analysis, and advanced inventory management. Built with React, Node.js, and Express for the front-end and back-end, it integrates Python for AI-driven analysis to help users make informed investment and inventory decisions.</p><h2>Technology Stack:</h2><ul><li><strong>Frontend:</strong> React, JavaScript</li><li><strong>Backend:</strong> Node.js, Express, Python</li><li><strong>Database:</strong> Modern database solution</li></ul><p><strong>Repositories:</strong> <a href="https://github.com/kariemGerges/stockMe2_frontend" target="_blank">Frontend</a> | <a href="https://github.com/kariemGerges/StockMe2-backend-express" target="_blank">Express Backend</a> | <a href="https://github.com/kariemGerges/StockMe2-Backend-py" target="_blank">Python Backend</a> | <a href="https://github.com/kariemGerges/StockMe-BackEnd-node" target="_blank">Node Backend</a> | <a href="https://github.com/kariemGerges/StockMe-frontEnd" target="_blank">Legacy Frontend</a></p></div>',
        frontend: ['React', 'JavaScript'],
        backend: ['Node.js', 'Express', 'Python'],
        database: ['Database'],
    },
    {
        id: 9,
        title: 'TeachMe App',
        image: '/ecommerce1.png',
        alt: 'TeachMe App',
        webSite: 'Full Mobile App',
        githubUrl: 'https://github.com/kariemGerges/teach-me',
        category: 'Mobile Education',
        gradient: 'from-violet-500 via-blue-500 to-cyan-500',
        prevDescription: '<div><h1>TeachMe App</h1><p>A full mobile app for android and ios, helping students from 1st grade to 12th grade learn and practice their subjects with video lessons, quizzes, and progress tracking. Built with React Native and TypeScript for a seamless cross-platform experience.</p><h2>Technology Stack:</h2><ul><li><strong>Frontend:</strong> React Native, TypeScript</li><li><strong>Backend:</strong> Firebase</li><li><strong>Database:</strong> FireStore</li></ul><p><strong>Features:</strong> Video lessons, interactive quizzes, progress tracking, grade-specific content, offline support.</p></div>',
        frontend: ['React Native', 'TypeScript'],
        backend: ['Firebase'],
        database: ['FireStore'],
    },
    {
        id: 10,
        title: 'ChatNCook App',
        image: '/ecommerce1.png',
        alt: 'ChatNCook App',
        webSite: 'Full Mobile App',
        githubUrl: 'https://github.com/kariemGerges/chatNcook-fe',
        category: 'Mobile Lifestyle',
        gradient: 'from-orange-500 via-amber-500 to-yellow-500',
        prevDescription: '<div><h1>ChatNCook App</h1><p>A full mobile app for android and ios, combining social features with cooking guidance and recipe sharing capabilities. Built with React Native and TypeScript, featuring real-time chat, recipe database, and social interactions.</p><h2>Technology Stack:</h2><ul><li><strong>Frontend:</strong> React Native, TypeScript</li><li><strong>Backend:</strong> Node.js, JavaScript, Firebase</li><li><strong>Database:</strong> FireStore, MongoDB</li></ul><p><strong>Repositories:</strong> <a href="https://github.com/kariemGerges/chatNcook-fe" target="_blank">Frontend</a> | <a href="https://github.com/kariemGerges/chatNcook-be" target="_blank">Backend</a></p><p><strong>Features:</strong> Social cooking community, recipe sharing, real-time chat, cooking tips, meal planning.</p></div>',
        frontend: ['React Native', 'TypeScript'],
        backend: ['Node.js', 'JavaScript', 'Firebase'],
        database: ['FireStore'],
    },
    {
        id: 11,
        title: 'WatchMe',
        image: '/watchme.png',
        alt: 'WatchMe Luxury Watch E-Commerce Platform',
        webSite: 'https://watchme-eight-omega.vercel.app/',
        githubUrl: 'https://github.com/kariemGerges/watchme',
        category: 'E-Commerce',
        gradient: 'from-pink-500 via-red-500 to-orange-500',
        prevDescription: '<div><h1>WatchMe: Luxury Watch E-Commerce Platform</h1><p>A premium e-commerce platform for luxury timepieces, featuring elegant design and seamless shopping experience. WatchMe showcases exceptional craftsmanship with Swiss precision movements, lifetime warranties, and master watchmaking expertise.</p><h2>Features:</h2><ul><li><strong>Product Collections:</strong> Men\'s, Women\'s, and Limited Edition timepieces</li><li><strong>Shop by Category:</strong> Altitude Series, Heritage Collection, Oceanic Professional, Metropolitan, Celestial, and Athletic Elite</li><li><strong>Featured Products:</strong> Classic Chronograph, Ocean Explorer, Aviator Professional, Urban Minimalist</li><li><strong>Customer Testimonials:</strong> Service and repair reviews from satisfied customers</li><li><strong>Swiss Movement:</strong> Every watch features precision Swiss movement</li><li><strong>Lifetime Warranty:</strong> Comprehensive warranty coverage</li><li><strong>Master Craftsmanship:</strong> Hand-assembled by skilled watchmakers</li></ul><h2>Technology Stack:</h2><ul><li><strong>Frontend:</strong> TypeScript, React</li><li><strong>E-Commerce:</strong> Shopping cart, product catalog, category browsing</li><li><strong>User Experience:</strong> Account management, search functionality</li></ul><p><strong>Website:</strong> <a href="https://watchme-eight-omega.vercel.app/" target="_blank">https://watchme-eight-omega.vercel.app/</a></p></div>',
        frontend: ['TypeScript', 'React'],
        backend: ['Backend'],
        database: ['Database'],
    },
    {
        id: 12,
        title: 'RedPOS',
        image: '/ecommerce1.png',
        alt: 'RedPOS Application',
        webSite: '',
        githubUrl: 'https://github.com/kariemGerges/redpos',
        category: 'Business',
        gradient: 'from-red-600 via-pink-600 to-purple-600',
        underConstruction: true,
        prevDescription: '<div><h1>RedPOS: Point of Sale System</h1><p>A comprehensive Point of Sale (POS) system built with TypeScript and modern web technologies. Features include inventory management, sales tracking, receipt generation, and reporting capabilities.</p><h2>Technology Stack:</h2><ul><li><strong>Frontend:</strong> TypeScript, React</li><li><strong>Backend:</strong> TypeScript, Node.js</li><li><strong>Database:</strong> Modern database solution</li></ul></div>',
        frontend: ['TypeScript', 'React'],
        backend: ['TypeScript', 'Node.js'],
        database: ['Database'],
    },
    {
        id: 13,
        title: 'Portfolio Page React',
        image: '/portLight.jpg',
        alt: 'Portfolio Page',
        webSite: 'https://kariemgerges.github.io/portfolioPage/',
        githubUrl: 'https://github.com/kariemGerges/portfolioPage',
        category: 'Portfolio',
        gradient: 'from-cyan-500 via-blue-500 to-indigo-500',
        prevDescription: '<div><h1>Portfolio Page: Personal Portfolio</h1><p>A personal portfolio website built with JavaScript and modern web technologies, showcasing projects, skills, and professional experience.</p><h2>Technology Stack:</h2><ul><li><strong>Frontend:</strong> JavaScript, HTML, CSS</li><li><strong>Framework:</strong> Modern JavaScript framework</li></ul></div>',
        frontend: ['JavaScript', 'HTML', 'CSS'],
        backend: [],
        database: [],
    },
    {
        id: 14,
        title: 'Portfolio Backend',
        image: '/ecommerce1.png',
        alt: 'Portfolio Backend API',
        webSite: '',
        githubUrl: 'https://github.com/kariemGerges/KariemPortfolio-backend',
        category: 'Backend',
        gradient: 'from-gray-600 via-slate-600 to-zinc-600',
        prevDescription: '<div><h1>Portfolio Backend: API Server</h1><p>Backend API server for portfolio website, handling data management, contact form submissions, and content delivery. Built with Node.js and JavaScript.</p><h2>Technology Stack:</h2><ul><li><strong>Backend:</strong> Node.js, JavaScript</li><li><strong>Database:</strong> Database solution</li><li><strong>API:</strong> RESTful API</li></ul></div>',
        frontend: [],
        backend: ['Node.js', 'JavaScript'],
        database: ['Database'],
    },
];

const categoryIcons: { [key: string]: any } = {
    'Portfolio': Code2,
    'Social Impact': Globe,
    'E-Commerce': TrendingUp,
    'Dashboard': Code2,
    'Gaming': Gamepad2,
    'AI Travel': Globe,
    'Education': GraduationCap,
    'FinTech': TrendingUp,
    'Mobile Education': Smartphone,
    'Mobile Lifestyle': Utensils,
    'Web Application': Code2,
    'AI/ML': Code2,
    'Entertainment': Gamepad2,
    'Business': TrendingUp,
    'Backend': Database,
};

const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

export default function Work() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    // Structured data for CreativeWork/Portfolio
    const portfolioStructuredData = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Kariem Gerges Portfolio Projects",
        "description": "A comprehensive collection of enterprise solutions including web applications, mobile platforms, and innovative digital experiences.",
        "itemListElement": projects.map((project, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@type": "CreativeWork",
                "name": project.title,
                "description": project.prevDescription.replace(/<[^>]*>/g, '').substring(0, 200),
                "category": project.category,
                "url": project.webSite && project.webSite !== 'Full Mobile App' ? project.webSite : undefined
            }
        }))
    };

    const filteredProjects = useMemo(() => {
        if (selectedCategory === 'All') {
            return projects;
        }
        const filtered = projects.filter(p => p.category === selectedCategory);
        return filtered;
    }, [selectedCategory]);

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioStructuredData) }}
            />
            {/* Header Section */}
            <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-transparent pointer-events-none" />
                <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-amber-400 transition-colors mb-6"
                        >
                            <ArrowLeft size={16} />
                            <span>Back to Home</span>
                        </Link>
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900/50 backdrop-blur-sm rounded-full border border-gray-700 shadow-sm mb-6">
                            <div className="w-2 h-2 rounded-full bg-amber-400" />
                            <p className="text-xs sm:text-sm text-gray-300 tracking-wide uppercase font-medium">
                                Portfolio
                            </p>
                        </div>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light leading-[1.1] mb-4 sm:mb-6 tracking-tight text-white">
                            Complete Project
                            <br />
                            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Showcase</span>
                        </h1>
                        <p className="text-sm sm:text-base lg:text-lg text-gray-300 font-light leading-relaxed max-w-3xl">
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
                        <Filter className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" />
                        {categories.map((category) => {
                            const Icon = category === 'All' ? null : categoryIcons[category];
                            return (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-1.5 sm:gap-2 min-h-[36px] touch-manipulation ${
                                        selectedCategory === category
                                            ? 'bg-amber-500 text-white shadow-lg border border-amber-500'
                                            : 'bg-gray-900/50 backdrop-blur-sm text-gray-300 hover:bg-gray-800 border border-gray-700'
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
                                const isAndroidApp = project.id === 9 || project.id === 10; // TeachMe or ChatNCook
                                const isBackendProject = project.id === 14; // Portfolio Backend
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
                                        <div className="relative h-56 sm:h-72 lg:h-80 rounded-lg overflow-hidden border border-gray-700 bg-gray-900/30 mb-3 sm:mb-4">
                                            {/* Gradient Overlay */}
                                            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                                            
                                            {/* Image, Under Construction, or Android App */}
                                            <div className="relative w-full h-full">
                                                {project.underConstruction ? (
                                                    <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black">
                                                        {/* Animated Background Pattern */}
                                                        <div className="absolute inset-0 opacity-20">
                                                            <div 
                                                                className="absolute inset-0"
                                                                style={{
                                                                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)`,
                                                                    backgroundSize: '28px 28px',
                                                                    animation: 'slide 3s linear infinite'
                                                                }}
                                                            />
                                                        </div>
                                                        
                                                        {/* Animated Construction Icon */}
                                                        <div className="relative z-10 flex flex-col items-center justify-center gap-4">
                                                            <motion.div
                                                                animate={{ 
                                                                    rotate: [0, 10, -10, 0],
                                                                    scale: [1, 1.1, 1]
                                                                }}
                                                                transition={{ 
                                                                    duration: 2,
                                                                    repeat: Infinity,
                                                                    ease: "easeInOut"
                                                                }}
                                                                className="text-6xl sm:text-7xl lg:text-8xl"
                                                            >
                                                                🚧
                                                            </motion.div>
                                                            <motion.div
                                                                initial={{ opacity: 0, y: 10 }}
                                                                animate={{ opacity: [0.5, 1, 0.5], y: 0 }}
                                                                transition={{ 
                                                                    duration: 2,
                                                                    repeat: Infinity,
                                                                    ease: "easeInOut"
                                                                }}
                                                                className="text-center"
                                                            >
                                                                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-1">
                                                                    Under Construction
                                                                </h3>
                                                                <p className="text-xs sm:text-sm text-gray-400">
                                                                    Coming Soon
                                                                </p>
                                                            </motion.div>
                                                        </div>
                                                        
                                                        {/* Animated Progress Bar */}
                                                        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-3/4 max-w-xs">
                                                            <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
                                                                <motion.div
                                                                    className="h-full bg-gradient-to-r from-amber-400 via-orange-500 to-red-500"
                                                                    initial={{ width: "0%" }}
                                                                    animate={{ width: ["0%", "100%", "0%"] }}
                                                                    transition={{ 
                                                                        duration: 3,
                                                                        repeat: Infinity,
                                                                        ease: "easeInOut"
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>
                                                        
                                                        {/* Sparkle Effects */}
                                                        {[...Array(6)].map((_, i) => (
                                                            <motion.div
                                                                key={i}
                                                                className="absolute w-2 h-2 bg-amber-400 rounded-full"
                                                                style={{
                                                                    left: `${20 + i * 15}%`,
                                                                    top: `${30 + (i % 3) * 20}%`,
                                                                }}
                                                                animate={{
                                                                    opacity: [0, 1, 0],
                                                                    scale: [0, 1.5, 0],
                                                                }}
                                                                transition={{
                                                                    duration: 2,
                                                                    repeat: Infinity,
                                                                    delay: i * 0.3,
                                                                    ease: "easeInOut"
                                                                }}
                                                            />
                                                        ))}
                                                    </div>
                                                ) : isAndroidApp ? (
                                                    <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-green-800 via-green-900 to-emerald-900">
                                                        {/* Android Logo */}
                                                        <div className="flex flex-col items-center justify-center gap-3">
                                                            <svg
                                                                width="80"
                                                                height="80"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
                                                            >
                                                                <path
                                                                    d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997 0-.5511.4482-.9993.9993-.9993.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997 0-.5511.4482-.9993.9993-.9993.551 0 .9993.4482.9993.9993 0 .5511-.4483.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1349 1.0957L4.8428 5.4437a.4161.4161 0 00-.5676-.1521.416.416 0 00-.1521.5676l1.9973 3.4592C2.6889 11.186.8535 12.7874.8535 15.7406v.9229c0 .5092.4159.9251.9251.9251h20.443c.5092 0 .9251-.4159.9251-.9251v-.9229c0-2.9532-1.8354-4.5546-5.1345-5.4192"
                                                                    fill="#3DDC84"
                                                                />
                                                            </svg>
                                                            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white">
                                                                Android App
                                                            </h3>
                                                        </div>
                                                    </div>
                                                ) : isBackendProject ? (
                                                    <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-700 via-slate-700 to-zinc-800">
                                                        {/* Backend Logo */}
                                                        <div className="flex flex-col items-center justify-center gap-3">
                                                            <Database className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-gray-300" />
                                                            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white">
                                                                Backend
                                                            </h3>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <>
                                                        <Image
                                                            src={project.image}
                                                            alt={project.alt}
                                                            fill
                                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                            unoptimized
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                                    </>
                                                )}
                                            </div>

                                            {/* Category Badge */}
                                            <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-10 flex items-center gap-1.5 sm:gap-2">
                                                {CategoryIcon && (
                                                    <div className="p-1.5 sm:p-2 bg-gray-900/90 backdrop-blur-sm rounded-lg border border-gray-700">
                                                        <CategoryIcon className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400" />
                                                    </div>
                                                )}
                                                <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-gray-900/90 backdrop-blur-sm rounded-lg border border-gray-700 text-[10px] sm:text-xs font-medium text-gray-200">
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
                                                    <div className="px-4 sm:px-6 py-2 sm:py-3 bg-gray-900/90 backdrop-blur-sm rounded-lg shadow-xl border border-gray-700">
                                                        <span className="text-xs sm:text-sm font-medium text-white">View Details</span>
                                                    </div>
                                                </motion.div>
                                            </div>
                                        </div>

                                        {/* Project Info */}
                                        <div>
                                            <h3 className="text-lg sm:text-xl lg:text-2xl font-light mb-1.5 sm:mb-2 tracking-tight text-white group-hover:text-amber-400 transition-colors">
                                                {project.title}
                                            </h3>
                                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                                {project.frontend && project.frontend.length > 0 ? (
                                                    project.frontend.map((tech) => (
                                                        <span
                                                            key={tech}
                                                            className="px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs bg-gray-900/50 rounded border border-gray-700 text-gray-300 font-mono"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))
                                                ) : (
                                                    <span className="px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs bg-gray-900/50 rounded border border-gray-700 text-gray-300 font-mono">
                                                        Backend Project
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </AnimatePresence>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-24">
                            <p className="text-gray-400 text-lg">No projects found in this category.</p>
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
                            <div className="min-h-full bg-gray-900 rounded-lg shadow-2xl overflow-hidden border border-gray-700">
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
                                        className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10 p-2 sm:p-3 bg-gray-900/90 backdrop-blur-sm rounded-lg border border-gray-700 hover:bg-gray-800 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation"
                                        aria-label="Close modal"
                                    >
                                        <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                    </button>

                                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 z-10">
                                        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                                            {categoryIcons[selectedProject.category] && (
                                                <div className="p-1.5 sm:p-2 bg-gray-900/90 backdrop-blur-sm rounded-lg border border-gray-700">
                                                    {(() => {
                                                        const Icon = categoryIcons[selectedProject.category];
                                                        return <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />;
                                                    })()}
                                                </div>
                                            )}
                                            <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-gray-900/90 backdrop-blur-sm rounded-lg border border-gray-700 text-[10px] sm:text-xs font-medium text-gray-200">
                                                {selectedProject.category}
                                            </span>
                                        </div>
                                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white mb-3 sm:mb-4 tracking-tight">
                                            {selectedProject.title}
                                        </h2>
                                        <div className="flex flex-wrap gap-2 sm:gap-3">
                                            {selectedProject.webSite && selectedProject.webSite !== 'Full Mobile App' && (
                                                <a
                                                    href={selectedProject.webSite}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg font-medium text-sm sm:text-base hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 shadow-lg min-h-[44px] touch-manipulation"
                                                >
                                                    <span>Visit Project</span>
                                                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                                                </a>
                                            )}
                                            {selectedProject.githubUrl && (
                                                <a
                                                    href={selectedProject.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-3 bg-gray-800/90 backdrop-blur-sm text-white rounded-lg font-medium text-sm sm:text-base hover:bg-gray-700 transition-all duration-300 border border-gray-700 min-h-[44px] touch-manipulation"
                                                >
                                                    <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />
                                                    <span>View on GitHub</span>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Modal Content */}
                                <div className="p-4 sm:p-6 lg:p-8">
                                    <div 
                                        className="mb-6 sm:mb-8 text-gray-300 [&_h1]:text-xl [&_h1]:sm:text-2xl [&_h1]:lg:text-3xl [&_h1]:font-light [&_h1]:mb-3 [&_h1]:sm:mb-4 [&_h1]:tracking-tight [&_h1]:text-white [&_h2]:text-lg [&_h2]:sm:text-xl [&_h2]:lg:text-2xl [&_h2]:font-light [&_h2]:mt-6 [&_h2]:sm:mt-8 [&_h2]:mb-3 [&_h2]:sm:mb-4 [&_h2]:text-gray-200 [&_p]:text-sm [&_p]:sm:text-base [&_p]:leading-relaxed [&_p]:mb-3 [&_p]:sm:mb-4 [&_p]:text-gray-300 [&_ul]:list-disc [&_ul]:ml-5 [&_ul]:sm:ml-6 [&_ul]:mb-3 [&_ul]:sm:mb-4 [&_ul]:text-gray-300 [&_li]:mb-2 [&_li]:text-sm [&_li]:sm:text-base [&_li]:text-gray-300 [&_strong]:font-medium [&_strong]:text-white"
                                        dangerouslySetInnerHTML={{ __html: selectedProject.prevDescription }}
                                    />

                                    {/* Tech Stack */}
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-gray-700">
                                        <div>
                                            <div className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                                                <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                                                <h3 className="text-base sm:text-lg font-medium text-white">Frontend</h3>
                                            </div>
                                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                                {selectedProject.frontend.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="px-2 sm:px-3 py-1 sm:py-1.5 bg-gray-900/50 rounded-lg text-xs sm:text-sm text-gray-300 font-medium border border-gray-700"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <div className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                                                <Database className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                                                <h3 className="text-base sm:text-lg font-medium text-white">Backend</h3>
                                            </div>
                                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                                {selectedProject.backend.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="px-2 sm:px-3 py-1 sm:py-1.5 bg-gray-900/50 rounded-lg text-xs sm:text-sm text-gray-300 font-medium border border-gray-700"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <div className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                                                <Database className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                                                <h3 className="text-base sm:text-lg font-medium text-white">Database</h3>
                                            </div>
                                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                                {selectedProject.database.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="px-2 sm:px-3 py-1 sm:py-1.5 bg-gray-900/50 rounded-lg text-xs sm:text-sm text-gray-300 font-medium border border-gray-700"
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
                        className="group inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-300 hover:text-amber-400 transition-colors"
                    >
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 rotate-180 transition-transform group-hover:-translate-x-1" />
                        <span>Back to Home</span>
                    </Link>
                </div>
            </section>
        </div>
    );
}
