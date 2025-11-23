'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        // Call once to set initial state
        handleScroll();

        // Use passive listener for better Safari performance
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        setIsOpen(false);
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        }, 300);
    };

    const navItems = [
        { label: 'About', id: 'about' },
        { label: 'Work', id: 'work' },
        { label: 'Experience', id: 'experience' },
        { label: 'Blog', id: 'blog' },
        { label: 'Contact', id: 'contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300
                ${
                    isScrolled
                        ? 'bg-white/10 backdrop-blur-sm shadow-lg border-b border-gray-200'
                        : 'bg-white/60 backdrop-blur-md'
                }`}
            style={{
                WebkitBackdropFilter: isScrolled ? 'blur(8px)' : 'blur(12px)',
            }}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    {/* Initials */}
                    <motion.button
                        onClick={() =>
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                        }
                        className="text-base sm:text-lg font-medium text-amber-700 tracking-tight hover:text-amber-800 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        KG
                    </motion.button>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6 lg:gap-8">
                        {navItems.map((item, index) => (
                            <motion.button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="text-sm text-gray-600 hover:text-black font-medium transition-colors"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                {item.label}
                            </motion.button>
                        ))}

                        {/* Contact Button */}
                        <motion.button
                            onClick={() => scrollToSection('contact')}
                            className="px-5 py-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-900 transition-all duration-300 shadow-sm hover:shadow-md"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Let&apos;s Talk
                        </motion.button>
                    </div>

                    {/* Mobile Menu button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-amber-700 hover:text-amber-800 transition-colors p-2 -mr-2"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
                            <X className="w-5 h-5" />
                        ) : (
                            <Menu className="w-5 h-5" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <motion.div
                initial={false}
                animate={{
                    height: isOpen ? 'auto' : 0,
                    opacity: isOpen ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md border-t border-gray-200"
            >
                <div className="container mx-auto px-4 py-5 space-y-2">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="block w-full text-left text-gray-700 hover:text-black font-medium transition-colors py-2.5 px-2 rounded-lg hover:bg-gray-100"
                        >
                            {item.label}
                        </button>
                    ))}

                    <button
                        onClick={() => scrollToSection('contact')}
                        className="w-full px-5 py-2.5 mt-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-900 transition-all duration-300 shadow-sm"
                    >
                        Let&apos;s Talk
                    </button>
                </div>
            </motion.div>
        </motion.nav>
    );
}
