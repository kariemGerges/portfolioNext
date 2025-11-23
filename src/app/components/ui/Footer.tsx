'use client';
import React, { useState, useEffect, useRef } from 'react';
import {
    Mail,
    MapPin,
    Phone,
    Twitter,
    Linkedin,
    Github,
    Instagram,
} from 'lucide-react';

export default function DepthParallaxFooter() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const footerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!footerRef.current) return;

            const footerTop = footerRef.current.offsetTop;
            const windowHeight = window.innerHeight;
            const scrollY = window.scrollY;

            // Calculate how far into the footer we've scrolled
            const distanceToFooter = footerTop - scrollY - windowHeight;
            const parallaxStart = 300; // Start parallax 300px before footer

            if (distanceToFooter < parallaxStart) {
                const progress = Math.min(
                    1,
                    (parallaxStart - distanceToFooter) / parallaxStart
                );
                setScrollProgress(progress);
            } else {
                setScrollProgress(0);
            }
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    // Calculate transforms based on scroll progress
    const getLayerTransform = (depth: number) => {
        const movement = scrollProgress * depth * 50;
        const scale = 1 + scrollProgress * depth * 0.1;
        return {
            transform: `translateY(${movement}px) scale(${scale})`,
            opacity: Math.max(0.3, 1 - scrollProgress * depth * 0.3),
        };
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
            {/* Demo content to enable scrolling */}
            <div className="container mx-auto px-4 py-20">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-800 text-center mb-12">
                        Depth Parallax Footer
                    </h1>
                    <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
                        <h2 className="text-2xl font-semibold text-slate-700 mb-4">
                            Scroll Down to Experience
                        </h2>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            As you scroll towards the footer, watch how the
                            different layers separate and create a sense of
                            depth. The copyright information floats closest to
                            you, the navigation links drift in the middle space,
                            and the background gradient exists in the far
                            distance.
                        </p>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            This creates a unique 3D peeling effect where layers
                            separate as you approach, giving the footer a sense
                            of physical depth and dimensionality that
                            traditional footers lack.
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                            The effect is fully responsive and works beautifully
                            on mobile devices, tablets, and desktop screens.
                        </p>
                    </div>

                    {/* Filler content */}
                    {[1, 2, 3].map((i) => (
                        <div
                            key={i}
                            className="bg-white rounded-xl shadow-lg p-8 md:p-12"
                        >
                            <h3 className="text-xl font-semibold text-slate-700 mb-3">
                                Section {i}
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                Keep scrolling to see the parallax effect
                                intensify. The footer layers will begin to
                                separate more dramatically as you get closer.
                                Each layer moves at a different speed, creating
                                that distinctive depth sensation.
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Parallax Footer */}
            <footer ref={footerRef} className="relative overflow-hidden">
                {/* Layer 3 (Deepest - Background) */}
                <div
                    className="absolute inset-0 transition-all duration-300 ease-out"
                    style={getLayerTransform(3)}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
                        {/* Animated gradient orbs */}
                        <div className="absolute top-20 left-10 w-64 h-64 md:w-96 md:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
                        <div
                            className="absolute bottom-20 right-10 w-64 h-64 md:w-96 md:h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
                            style={{ animationDelay: '1s' }}
                        ></div>
                        <div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
                            style={{ animationDelay: '2s' }}
                        ></div>
                    </div>
                </div>

                {/* Layer 2 (Middle - Navigation Links) */}
                <div
                    className="relative z-10 transition-all duration-300 ease-out"
                    style={getLayerTransform(2)}
                >
                    <div className="container mx-auto px-4 pt-24 md:pt-32 pb-12">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 max-w-6xl mx-auto">
                            {/* Company */}
                            <div className="text-center md:text-left">
                                <h3 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6">
                                    Company
                                </h3>
                                <ul className="space-y-2 md:space-y-3">
                                    <li>
                                        <a
                                            href="#"
                                            className="text-purple-200 hover:text-white transition-colors text-sm md:text-base"
                                        >
                                            About Us
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-purple-200 hover:text-white transition-colors text-sm md:text-base"
                                        >
                                            Our Team
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-purple-200 hover:text-white transition-colors text-sm md:text-base"
                                        >
                                            Careers
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-purple-200 hover:text-white transition-colors text-sm md:text-base"
                                        >
                                            Press
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Services */}
                            <div className="text-center md:text-left">
                                <h3 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6">
                                    Services
                                </h3>
                                <ul className="space-y-2 md:space-y-3">
                                    <li>
                                        <a
                                            href="#"
                                            className="text-purple-200 hover:text-white transition-colors text-sm md:text-base"
                                        >
                                            Web Design
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-purple-200 hover:text-white transition-colors text-sm md:text-base"
                                        >
                                            Development
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-purple-200 hover:text-white transition-colors text-sm md:text-base"
                                        >
                                            Consulting
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-purple-200 hover:text-white transition-colors text-sm md:text-base"
                                        >
                                            Support
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Resources */}
                            <div className="text-center md:text-left">
                                <h3 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6">
                                    Resources
                                </h3>
                                <ul className="space-y-2 md:space-y-3">
                                    <li>
                                        <a
                                            href="#"
                                            className="text-purple-200 hover:text-white transition-colors text-sm md:text-base"
                                        >
                                            Blog
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-purple-200 hover:text-white transition-colors text-sm md:text-base"
                                        >
                                            Documentation
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-purple-200 hover:text-white transition-colors text-sm md:text-base"
                                        >
                                            Help Center
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-purple-200 hover:text-white transition-colors text-sm md:text-base"
                                        >
                                            Community
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Contact */}
                            <div className="text-center md:text-left">
                                <h3 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6">
                                    Contact
                                </h3>
                                <ul className="space-y-2 md:space-y-3">
                                    <li className="flex items-center justify-center md:justify-start gap-2 text-purple-200 text-sm md:text-base">
                                        <Mail size={16} />
                                        <span>hello@acme.com</span>
                                    </li>
                                    <li className="flex items-center justify-center md:justify-start gap-2 text-purple-200 text-sm md:text-base">
                                        <Phone size={16} />
                                        <span>+1 (555) 123-4567</span>
                                    </li>
                                    <li className="flex items-center justify-center md:justify-start gap-2 text-purple-200 text-sm md:text-base">
                                        <MapPin size={16} />
                                        <span>San Francisco, CA</span>
                                    </li>
                                </ul>

                                {/* Social Icons */}
                                <div className="flex gap-3 mt-6 justify-center md:justify-start">
                                    <a
                                        href="#"
                                        className="w-10 h-10 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 flex items-center justify-center transition-all hover:scale-110"
                                    >
                                        <Twitter
                                            size={18}
                                            className="text-white"
                                        />
                                    </a>
                                    <a
                                        href="#"
                                        className="w-10 h-10 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 flex items-center justify-center transition-all hover:scale-110"
                                    >
                                        <Linkedin
                                            size={18}
                                            className="text-white"
                                        />
                                    </a>
                                    <a
                                        href="#"
                                        className="w-10 h-10 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 flex items-center justify-center transition-all hover:scale-110"
                                    >
                                        <Github
                                            size={18}
                                            className="text-white"
                                        />
                                    </a>
                                    <a
                                        href="#"
                                        className="w-10 h-10 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 flex items-center justify-center transition-all hover:scale-110"
                                    >
                                        <Instagram
                                            size={18}
                                            className="text-white"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Layer 1 (Closest - Copyright) */}
                <div
                    className="relative z-20 transition-all duration-300 ease-out"
                    style={getLayerTransform(1)}
                >
                    <div className="container mx-auto px-4 pb-8">
                        <div className="max-w-6xl mx-auto pt-8 border-t border-white border-opacity-20">
                            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                                <div className="text-white text-opacity-90 text-sm md:text-base">
                                    © 2024 ACME Corp. All rights reserved.
                                </div>
                                <div className="flex gap-4 md:gap-6 text-sm md:text-base">
                                    <a
                                        href="#"
                                        className="text-white text-opacity-75 hover:text-opacity-100 transition-colors"
                                    >
                                        Privacy Policy
                                    </a>
                                    <a
                                        href="#"
                                        className="text-white text-opacity-75 hover:text-opacity-100 transition-colors"
                                    >
                                        Terms of Service
                                    </a>
                                    <a
                                        href="#"
                                        className="text-white text-opacity-75 hover:text-opacity-100 transition-colors"
                                    >
                                        Cookies
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Depth indicator (optional - can be removed) */}
                <div className="fixed bottom-4 right-4 z-50 bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg text-sm backdrop-blur-sm">
                    Depth: {Math.round(scrollProgress * 100)}%
                </div>
            </footer>
        </div>
    );
}
