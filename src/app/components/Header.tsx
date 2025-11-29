'use client';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X, User, Briefcase, GraduationCap, BookOpen, Mail } from 'lucide-react';

export default function Header() {
    const [isMounted, setIsMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Track scroll position for header styling
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        handleScroll(); // Check initial state
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
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 pointer-events-auto ${
                    isScrolled
                        ? 'bg-black/80 backdrop-blur-md shadow-sm'
                        : 'bg-black/0 backdrop-blur-0'
                }`}
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex items-center justify-between h-14">
                        {/* Logo */}
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="text-lg font-semibold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent tracking-tight hover:opacity-80 transition-opacity"
                        >
                            KG
                        </button>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className="text-sm text-gray-300 hover:text-amber-400 transition-colors font-medium relative group"
                                >
                                    {item.label}
                                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                                </button>
                            ))}
                        </div>

                        {/* Mobile Menu button */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsOpen(!isOpen);
                            }}
                            className="md:hidden relative z-[110] text-gray-300 p-2 -mr-2 min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation pointer-events-auto hover:bg-gray-800 rounded-lg transition-colors"
                            aria-label="Toggle menu"
                            style={{ pointerEvents: 'auto' }}
                        >
                            {isOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            {isMounted &&
                createPortal(
                    <>
                        {/* Backdrop */}
                        {isOpen && (
                            <div
                                onClick={() => setIsOpen(false)}
                                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9990] md:hidden"
                            />
                        )}
                        
                        {/* Slide-in Panel from Left - Overlay menu */}
                        <div
                            className={`fixed top-0 left-0 bottom-0 w-full max-w-sm  z-[9991] md:hidden shadow-2xl overflow-hidden transform transition-transform duration-300 ease-out ${
                                isOpen ? 'translate-x-0' : '-translate-x-full'
                            }`}
                        >
                            <div className="flex flex-col h-full">
                                {/* Header */}
                                <div className="flex items-center justify-between px-6 py-5">
                                    <h2 className="text-lg font-semibold text-white">Menu</h2>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="p-2 rounded-lg hover:bg-gray-800 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation"
                                        aria-label="Close menu"
                                    >
                                        <X className="w-5 h-5 text-gray-300" />
                                    </button>
                                </div>

                                {/* Navigation Items */}
                                <div className="flex-1 px-4 py-6 overflow-y-auto">
                                    <nav className="space-y-2">
                                        {navItems.map((item) => {
                                            const Icon = item.icon;
                                            const isActive = activeSection === item.id;
                                            return (
                                                <button
                                                    key={item.id}
                                                    onClick={item.action}
                                                    className={`w-full flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-200 ${
                                                        isActive
                                                            ? 'bg-gradient-to-r from-amber-900/40 to-orange-900/40 text-amber-300 shadow-sm'
                                                            : 'text-gray-300 hover:bg-gray-800/40 active:bg-gray-700/40'
                                                    }`}
                                                >
                                                    <div className={`flex items-center justify-center w-10 h-10 rounded-lg ${
                                                        isActive 
                                                            ? 'bg-amber-800/50 text-amber-300' 
                                                            : 'bg-gray-800 text-gray-400'
                                                    } transition-colors`}>
                                                        <Icon className="w-5 h-5" />
                                                    </div>
                                                    <span className={`text-base font-medium flex-1 text-left ${
                                                        isActive ? 'text-amber-300' : 'text-gray-300'
                                                    }`}>
                                                        {item.label}
                                                    </span>
                                                    {isActive && (
                                                        <div className="w-2 h-2 rounded-full bg-amber-400" />
                                                    )}
                                                </button>
                                            );
                                        })}
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </>,
                    document.body
                )}
        </>
    );
}
