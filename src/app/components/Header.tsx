'use client';
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Menu, X, User, Briefcase, GraduationCap, BookOpen, Mail, Home, Plus } from 'lucide-react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const scrollToSection = (id: string) => {
        setActiveSection(id);
        setIsOpen(false);
        setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 300);
    };

    const scrollToTop = () => {
        setActiveSection('home');
        setIsOpen(false);
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 300);
    };

    const [activeSection, setActiveSection] = useState<string>('home');

    // Track active section on scroll
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['about', 'work', 'experience', 'blog', 'contact'];
            const scrollPosition = window.scrollY + 150;

            // Check if at top of page
            if (window.scrollY < 100) {
                setActiveSection('home');
                return;
            }

            // Check other sections
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop } = element;
                    if (scrollPosition >= offsetTop) {
                        setActiveSection(section);
                        return;
                    }
                }
            }
        };

        handleScroll(); // Check on mount
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: 'About', id: 'about', icon: User, action: () => scrollToSection('about') },
        { label: 'Work', id: 'work', icon: Briefcase, action: () => scrollToSection('work') },
        { label: 'Experience', id: 'experience', icon: GraduationCap, action: () => scrollToSection('experience') },
        { label: 'Blog', id: 'blog', icon: BookOpen, action: () => scrollToSection('blog') },
        { label: 'Contact', id: 'contact', icon: Mail, action: () => scrollToSection('contact') },
    ];

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                isScrolled
                    ? 'bg-white/80 backdrop-blur-xl border-b border-gray-200/50'
                    : 'bg-white/0 backdrop-blur-0'
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-14">
                    {/* Logo */}
                    <motion.button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="text-lg font-medium bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent tracking-tight"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    >
                        KG
                    </motion.button>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item, index) => (
                            <motion.button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="text-sm text-gray-600 hover:text-amber-600 transition-colors font-normal relative"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ 
                                    duration: 0.5, 
                                    delay: index * 0.1,
                                    ease: [0.16, 1, 0.3, 1]
                                }}
                                whileHover={{ y: -2 }}
                            >
                                {item.label}
                                <motion.span
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-600 to-orange-600"
                                    initial={{ scaleX: 0 }}
                                    whileHover={{ scaleX: 1 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.button>
                        ))}
                    </div>

                    {/* Mobile Menu button */}
                    <motion.button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden relative z-50 text-black p-2 -mr-2 min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation"
                        aria-label="Toggle menu"
                        whileTap={{ scale: 0.95 }}
                    >
                        <AnimatePresence mode="wait">
                            {isOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <X className="w-6 h-6" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Menu className="w-6 h-6" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </div>
            </div>

            {/* Mobile Navigation - Side Panel Design */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
                        />

                        {/* Slide-in Panel from Left */}
                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ 
                                type: 'spring', 
                                damping: 30, 
                                stiffness: 300,
                                duration: 0.4
                            }}
                            className="fixed top-0 left-0 bottom-0 w-full max-w-xs bg-white z-50 md:hidden shadow-2xl overflow-hidden"
                        >
                            <div className="flex flex-col h-full">
                                {/* Header with Hamburger Menu Icon */}
                                <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
                                    <motion.button
                                        onClick={() => setIsOpen(false)}
                                        className="p-2 rounded-lg hover:bg-gray-100 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation"
                                        whileTap={{ scale: 0.95 }}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.1 }}
                                    >
                                        <Menu className="w-6 h-6 text-gray-700" />
                                    </motion.button>
                                    <motion.button
                                        className="p-2 rounded-lg hover:bg-gray-100 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation"
                                        whileTap={{ scale: 0.95 }}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.15 }}
                                    >
                                        <Plus className="w-6 h-6 text-gray-700" />
                                    </motion.button>
                                </div>

                                {/* Navigation Items */}
                                <div className="flex-1 px-4 py-6 overflow-y-auto">
                                    <nav className="space-y-1">
                                        {navItems.map((item, index) => {
                                            const Icon = item.icon;
                                            const isActive = activeSection === item.id;
                                            return (
                                                <motion.button
                                                    key={item.id}
                                                    onClick={item.action}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ 
                                                        delay: 0.1 + index * 0.05,
                                                        type: 'spring',
                                                        stiffness: 300,
                                                        damping: 25
                                                    }}
                                                    whileTap={{ scale: 0.98 }}
                                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                                                        isActive
                                                            ? 'bg-purple-100 text-purple-700'
                                                            : 'text-gray-700 hover:bg-gray-50'
                                                    }`}
                                                >
                                                    <Icon className={`w-5 h-5 ${isActive ? 'text-purple-700' : 'text-gray-600'}`} />
                                                    <span className={`text-base font-medium ${isActive ? 'text-purple-700' : 'text-gray-700'}`}>
                                                        {item.label}
                                                    </span>
                                                </motion.button>
                                            );
                                        })}
                                    </nav>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
