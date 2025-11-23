'use client';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp, Code2, Sparkles } from 'lucide-react';
import Link from 'next/link';

interface PortfolioFooterProps {
    ownerName: string;
}

export const Footer: React.FC<PortfolioFooterProps> = ({ ownerName }) => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: 'GitHub',
            href: 'https://github.com/kariemGerges',
            icon: Github,
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/kariem-gerges-458294195/',
            icon: Linkedin,
        },
        {
            name: 'Email',
            href: 'mailto:kariem.gerges@outlook.com',
            icon: Mail,
        },
    ];

    const navLinks = [
        { label: 'About', id: 'about', href: '/#about' },
        { label: 'Work', id: 'work', href: '/pages/work' },
        { label: 'Experience', id: 'experience', href: '/#experience' },
        { label: 'Blog', id: 'blog', href: '/pages/blog' },
        { label: 'Contact', id: 'contact', href: '/#contact' },
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative bg-white border-t border-gray-200 overflow-hidden">
            {/* Subtle background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-50/30 via-transparent to-transparent pointer-events-none" />
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-12">
                    {/* Brand Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="md:col-span-4"
                    >
                        <div className="mb-5 sm:mb-6">
                            <h3 className="text-xl sm:text-2xl font-light mb-3 sm:mb-4 text-amber-700 tracking-tight">
                                {ownerName}
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed mb-4 sm:mb-6">
                                Crafting enterprise solutions that combine robust engineering 
                                with intuitive design, delivering measurable business impact.
                            </p>
                        </div>
                        
                        {/* Social Links */}
                        <div className="flex gap-2.5 sm:gap-3">
                            {socialLinks.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <motion.a
                                        key={social.name}
                                        href={social.href}
                                        target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                                        rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                                        aria-label={`Link to ${social.name}`}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="p-2.5 sm:p-3 rounded-lg bg-gray-100 hover:bg-amber-50 border border-gray-200 hover:border-amber-700/30 transition-all duration-300 group"
                                    >
                                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 group-hover:text-amber-700 transition-colors" />
                                    </motion.a>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Navigation Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="md:col-span-4"
                    >
                        <h4 className="text-xs sm:text-sm font-medium text-amber-700 uppercase tracking-wide mb-4 sm:mb-6">
                            Navigation
                        </h4>
                        <nav className="space-y-3 sm:space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.id}
                                    href={link.href}
                                    className="block text-sm sm:text-base text-gray-600 hover:text-black font-light transition-colors duration-300 group"
                                >
                                    <span className="flex items-center gap-1.5 sm:gap-2">
                                        {link.label}
                                        <ArrowUp className="w-2.5 h-2.5 sm:w-3 sm:h-3 rotate-45 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </span>
                                </Link>
                            ))}
                        </nav>
                    </motion.div>

                    {/* Contact Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="md:col-span-4"
                    >
                        <h4 className="text-xs sm:text-sm font-medium text-amber-700 uppercase tracking-wide mb-4 sm:mb-6">
                            Get In Touch
                        </h4>
                        <div className="space-y-3 sm:space-y-4">
                            <a
                                href="mailto:kariem.gerges@outlook.com"
                                className="block text-sm sm:text-base text-gray-600 hover:text-black font-light transition-colors duration-300 break-all"
                            >
                                kariem.gerges@outlook.com
                            </a>
                            <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed">
                                Available for enterprise projects and strategic consulting engagements.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Section */}
                <div className="pt-8 sm:pt-10 lg:pt-12 border-t border-gray-200">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-5 sm:gap-6">
                        {/* Copyright */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-500"
                        >
                            <Code2 className="w-3 h-3 sm:w-4 sm:h-4 text-amber-700 flex-shrink-0" />
                            <span className="text-center sm:text-left">
                                &copy; {currentYear} {ownerName}. All rights reserved.
                            </span>
                        </motion.div>

                        {/* Scroll to Top */}
                        <motion.button
                            onClick={scrollToTop}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-1.5 sm:gap-2 px-3 mb-4 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-gray-100 hover:bg-amber-50 border border-gray-200 hover:border-amber-700/30 transition-all duration-300 text-xs sm:text-sm text-gray-700 hover:text-amber-700 font-medium group"
                        >
                            <span>Back to Top</span>
                            <ArrowUp className="w-3 h-3 sm:w-4 sm:h-4 group-hover:-translate-y-1 transition-transform" />
                        </motion.button>
                    </div>

                    {/* Additional Info */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-100 flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:gap-6 text-[10px] sm:text-xs text-gray-400"
                    >
                        <div className="flex items-center gap-1.5 sm:gap-2">
                            <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-700 flex-shrink-0" />
                            <span>Built with Next.js & TypeScript</span>
                        </div>
                        <span className="hidden sm:inline">•</span>
                        <span>Designed with attention to detail</span>
                    </motion.div>
                </div>
            </div>
        </footer>
    );
};
