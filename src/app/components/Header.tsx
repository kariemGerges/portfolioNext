'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { MorphButton } from '@/app/components/ui/MorphButton';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
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
        { label: 'Contact', id: 'contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300
                ${
                    isScrolled
                        ? 'backdrop-blur-sm shadow-2xl'
                        : 'bg-transparent'
                }`}
        >
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between h-20">
                    {/* Initials */}
                    <motion.button
                        onClick={() =>
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                        }
                        className="font-medium text-amber-700 tracking-tight"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        KG
                    </motion.button>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item, index) => (
                            <motion.button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="text-xs sm:text-sm text-gray-600
                            hover:tracking-wide transition-all"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                {item.label}
                            </motion.button>
                        ))}

                        {/* Contact Button */}
                        <MorphButton
                            variant="primary"
                            onClick={() => scrollToSection('contact')}
                            loading={false}
                        >
                            Let&apos;s Talk
                        </MorphButton>
                    </div>

                    {/* Mobile Menu button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-amber-700"
                    >
                        {isOpen ? (
                            <X className="w-6 h-6 animate-bounce" />
                        ) : (
                            <Menu className="w-6 h-6" />
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
                className="md:hidden overflow-hidden"
            >
                <div className="container mx-auto px-6 py-6 space-y-4">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="block w-full text-left text-slate-800 hover:text-blue-400 transition-colors py-2"
                        >
                            {item.label}
                        </button>
                    ))}

                    <MorphButton
                        variant="primary"
                        onClick={() => scrollToSection('contact')}
                        loading={false}
                    >
                        Let&apos;s Talk
                    </MorphButton>
                </div>
            </motion.div>
        </motion.nav>
    );
}
