'use client';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
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

    return (
        <footer className="relative bg-black/80 backdrop-blur-sm border-t border-gray-800 overflow-hidden">
            <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
                    {/* Brand Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                            duration: 0.6,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                        className="md:col-span-4"
                    >
                        <h3 className="text-2xl font-light mb-4 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent tracking-tight">
                            {ownerName}
                        </h3>
                        <p className="text-base text-gray-300 font-light leading-relaxed mb-6">
                            Crafting enterprise solutions that combine robust engineering 
                            with intuitive design, delivering measurable business impact.
                        </p>
                        
                        {/* Social Links */}
                        <div className="flex gap-3">
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
                                        transition={{ 
                                            duration: 0.4, 
                                            delay: index * 0.1,
                                            ease: [0.16, 1, 0.3, 1]
                                        }}
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="p-3 rounded-full bg-gradient-to-br from-amber-900/30 to-orange-900/30 hover:from-amber-800/40 hover:to-orange-800/40 transition-all border border-amber-800/50"
                                    >
                                        <Icon className="w-5 h-5 text-amber-400" />
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
                        transition={{ 
                            duration: 0.6, 
                            delay: 0.1,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                        className="md:col-span-4"
                    >
                        <h4 className="text-sm font-light text-amber-400 text-bold uppercase tracking-wide mb-6">
                            Navigation
                        </h4>
                        <nav className="space-y-4">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ 
                                        delay: 0.1 + index * 0.05,
                                        duration: 0.4
                                    }}
                                >
                                    <Link
                                        href={link.href}
                                        className="block text-base text-gray-300 hover:bg-gradient-to-r hover:from-amber-400 hover:to-orange-400 hover:bg-clip-text hover:text-transparent font-light transition-all duration-300"
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>
                    </motion.div>

                    {/* Contact Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                            duration: 0.6, 
                            delay: 0.2,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                        className="md:col-span-4"
                    >
                        <h4 className="text-sm font-light text-amber-400 text-bold uppercase tracking-wide mb-6">
                            Contact
                        </h4>
                        <div className="space-y-4">
                            <a
                                href="mailto:kariem.gerges@outlook.com"
                                className="block text-base text-gray-300 hover:bg-gradient-to-r hover:from-amber-400 hover:to-orange-400 hover:bg-clip-text hover:text-transparent font-light transition-all duration-300 break-all"
                            >
                                kariem.gerges@outlook.com
                            </a>
                            <p className="text-sm text-gray-400 font-light leading-relaxed">
                                Available for enterprise projects and strategic consulting engagements.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Section */}
                <div className="pt-8 border-t border-gray-800">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ 
                                duration: 0.6,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                            className="text-sm text-gray-400 font-light"
                        >
                            &copy; {currentYear} {ownerName}. All rights reserved.
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ 
                                duration: 0.6, 
                                delay: 0.2,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                            className="text-sm text-gray-400 font-light"
                        >
                            Built with ❤️ by 
                            <a href="https://kariemgerges.vercel.app" className="text-amber-400 hover:text-amber-300 transition-colors"> Kariem Gerges</a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
