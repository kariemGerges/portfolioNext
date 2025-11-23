'use client';
import { useState, useEffect } from 'react';
import {
    Home,
    Mail,
    Rss,
    Users,
    Twitter,
    Linkedin,
    Github,
} from 'lucide-react';

export default function GravityWellFooter() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const footerLinks = [
        {
            icon: Users,
            label: 'About',
            href: '#about',
            orbit: 1,
            angle: 0,
            color: 'from-blue-500 to-cyan-500',
        },

        {
            icon: Home,
            label: 'Portfolio',
            href: '#portfolio',
            orbit: 1,
            angle: 120,
            color: 'from-green-500 to-emerald-500',
        },

        {
            icon: Rss,
            label: 'Blog',
            href: '#blog',
            orbit: 1,
            angle: 240,
            color: 'from-yellow-500 to-amber-500',
        },
        {
            icon: Mail,
            label: 'Contact',
            href: '#contact',
            orbit: 1,
            angle: 300,
            color: 'from-indigo-500 to-blue-500',
        },
        {
            icon: Twitter,
            label: 'Twitter',
            href: '#twitter',
            orbit: 2,
            angle: 30,
            color: 'from-sky-400 to-blue-400',
        },
        {
            icon: Linkedin,
            label: 'LinkedIn',
            href: '#linkedin',
            orbit: 2,
            angle: 120,
            color: 'from-blue-600 to-blue-700',
        },
        {
            icon: Github,
            label: 'GitHub',
            href: '#github',
            orbit: 2,
            angle: 210,
            color: 'from-gray-700 to-gray-900',
        },
    ];

    const calculatePosition = (angle, orbit, time) => {
        if (isExpanded) return { x: 0, y: 0 };

        const baseRadius = isMobile ? 80 : 120;
        const radius = orbit === 1 ? baseRadius : baseRadius * 1.6;
        const speed = orbit === 1 ? 1 : 0.7;
        const animatedAngle = angle + time * speed * 0.02;
        const radian = (animatedAngle * Math.PI) / 180;

        return {
            x: Math.cos(radian) * radius,
            y: Math.sin(radian) * radius,
        };
    };

    const [time, setTime] = useState(0);

    useEffect(() => {
        if (!isExpanded) {
            const interval = setInterval(() => {
                setTime((t) => t + 1);
            }, 50);
            return () => clearInterval(interval);
        }
    }, [isExpanded]);

    const handleCenterClick = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <footer className="bg-linear-to-b from-slate-900 to-black text-white py-12 md:py-16 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <div
                    className={`relative transition-all duration-1000 ${
                        isExpanded ? 'min-h-96' : 'h-80 md:h-96'
                    }`}
                >
                    {/* Center logo/button */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                        <button
                            onClick={handleCenterClick}
                            className="relative group"
                            aria-label={
                                isExpanded ? 'Collapse footer' : 'Expand footer'
                            }
                        >
                            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-linear-to-br from-indigo-600 via-purple-600 to-pink-600 flex items-center justify-center shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-180">
                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-slate-900 flex items-center justify-center">
                                    <span className="text-xl md:text-2xl font-bold bg-linear-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
                                        ACME
                                    </span>
                                </div>
                            </div>

                            {/* Pulsing rings */}
                            <div className="absolute inset-0 rounded-full border-2 border-purple-500 opacity-20 animate-ping"></div>
                            <div
                                className="absolute inset-0 rounded-full border border-purple-400 opacity-40"
                                style={{
                                    animation:
                                        'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
                                    animationDelay: '0.5s',
                                }}
                            ></div>
                        </button>
                    </div>

                    {/* Orbiting elements */}
                    {footerLinks.map((link, index) => {
                        const pos = calculatePosition(
                            link.angle,
                            link.orbit,
                            time
                        );
                        const Icon = link.icon;

                        return (
                            <div
                                key={index}
                                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ease-out"
                                style={{
                                    transform: isExpanded
                                        ? `translate(-50%, ${
                                              -50 +
                                              (Math.floor(index / 3) * 80 - 80)
                                          }px) translateX(${
                                              (index % 3) * 140 - 140
                                          }px)`
                                        : `translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px))`,
                                }}
                            >
                                <a
                                    href={link.href}
                                    className="group block"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    <div
                                        className={`relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-linear-to-br ${link.color} flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-125 group-hover:shadow-2xl`}
                                    >
                                        <Icon
                                            size={isMobile ? 20 : 24}
                                            className="text-white"
                                        />

                                        {/* Glow effect on hover */}
                                        <div
                                            className={`absolute inset-0 rounded-full bg-linear-to-br ${link.color} opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300`}
                                        ></div>
                                    </div>

                                    {/* Label */}
                                    <div
                                        className={`absolute left-1/2 -translate-x-1/2 transition-all duration-300 ${
                                            isExpanded
                                                ? 'top-full mt-2 opacity-100'
                                                : 'top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:top-full group-hover:translate-y-2'
                                        }`}
                                    >
                                        <span className="text-xs md:text-sm font-medium whitespace-nowrap bg-slate-800 px-3 py-1 rounded-full shadow-lg">
                                            {link.label}
                                        </span>
                                    </div>
                                </a>
                            </div>
                        );
                    })}
                </div>

                {/* Traditional footer info when expanded */}
                <div
                    className={`transition-all duration-1000 overflow-hidden ${
                        isExpanded
                            ? 'max-h-96 opacity-100 mt-8'
                            : 'max-h-0 opacity-0'
                    }`}
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                        <div>
                            <h3 className="text-lg font-semibold mb-3">
                                Company
                            </h3>
                            <div className="space-y-2 text-sm text-gray-400">
                                <p>Innovating since 2024</p>
                                <p>San Francisco, CA</p>
                                <p>hello@acme.com</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-3">
                                Quick Links
                            </h3>
                            <div className="space-y-2 text-sm text-gray-400">
                                <p>Privacy Policy</p>
                                <p>Terms of Service</p>
                                <p>Cookie Policy</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-3">
                                Newsletter
                            </h3>
                            <div className="text-sm text-gray-400">
                                <p>Stay updated with our latest news</p>
                                <div className="mt-3 flex gap-2 justify-center md:justify-start">
                                    <input
                                        type="email"
                                        placeholder="Enter email"
                                        className="px-3 py-1 rounded bg-slate-800 border border-slate-700 text-sm flex-1 max-w-xs"
                                    />
                                    <button className="px-4 py-1 bg-purple-600 hover:bg-purple-700 rounded text-sm transition-colors">
                                        Join
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center text-sm text-gray-500 mt-8 pt-6 border-t border-slate-800">
                    <p>© 2024 ACME Corp. All rights reserved.</p>
                    <p className="mt-1 text-xs">
                        Click the center to {isExpanded ? 'collapse' : 'expand'}{' '}
                        • Watch the orbit animation
                    </p>
                </div>
            </div>
        </footer>
    );
}
