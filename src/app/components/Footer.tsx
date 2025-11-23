// export default function Footer() {
//         const currentYear = new Date().getFullYear();

//     return (
//         <footer className="px-6 lg:px-12 py-8 border-t border-gray-200">
//             <div className="max-w-7xl mx-auto flex justify-between items-center text-sm text-gray-500">
//                 <p>© {currentYear} Kariem Gerges</p>
//                 <p>Designed & Built with care</p>
//             </div>
//         </footer>
//     );
// }
'use client';
const GitHubIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
    >
        <path d="M12 0C5.372 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.344.726-4.043-1.612-4.043-1.612-.546-1.387-1.334-1.756-1.334-1.756-1.09-.745.082-.729.082-.729 1.205.084 1.838 1.238 1.838 1.238 1.07 1.834 2.809 1.303 3.495.998.108-.775.42-.998.77-.998 3.328-.39 6.81-1.637 6.81-7.27 0-1.612-.58-2.92-1.53-3.95.154-.366.666-1.874-.145-3.913 0 0-1.25-.4-4.072 1.51-.237-.066-.487-.099-.737-.101-.25.002-.5.035-.737.101-2.822-1.91-4.072-1.51-4.072-1.51-.81 2.039-.3 3.547-.145 3.913-.95.03-1.53 1.338-1.53 3.95 0 5.648 3.48 6.874 6.81 7.262.53.456 1.01.998 1.01 2.015 0 1.45-.015 2.625-.015 2.974 0 .318.22.69.82.578C20.562 21.8 24 17.303 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
);

const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
    >
        <path d="M4.98 3.5C4.98 2.66 4.31 2 3.48 2h-.03C2.62 2 2 2.66 2 3.5v17C2 21.34 2.66 22 3.51 22h.02c.84 0 1.5-.66 1.5-1.5v-17zm17.9 17.5h-4.66v-7.3c0-1.74-.63-2.93-2.18-2.93-1.18 0-1.87.82-2.18 1.62-.11.28-.14.68-.14 1.08v7.54H7.9v-13h4.63v2c.62-.97 1.68-1.92 4.14-1.92 3.03 0 5.35 1.98 5.35 6.27v7.65z" />
    </svg>
);

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
    >
        <path d="M18.9 1.1h3.4l-8.9 10.9 9.8 11.9h-7.8l-6.5-8.2-7.5 8.2h-3.4l8.3-9.2L1.5 1.1h7.6l5.2 6.5L18.9 1.1zm-2.4 18.7h2.1L6.7 3.3H4.4l11.9 16.5z" />
    </svg>
);

// --- Component Interface ---

interface PortfolioFooterProps {
    ownerName: string;
}

// --- Footer Component ---

import { Github, Linkedin } from 'lucide-react';

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
    ];

    const navLinks = [
        { label: 'About', id: 'about' },
        { label: 'Work', id: 'work' },
        { label: 'Experience', id: 'experience' },
        { label: 'Contact', id: 'contact' },
    ];

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className="bg-white border-t border-gray-200 text-gray-600 py-12 px-4 w-full">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 text-center md:text-left">
                        {navLinks.map((link) => (
                            <button
                                key={link.label}
                                onClick={() => scrollToSection(link.id)}
                                className="text-lg font-medium hover:text-indigo-400 transition duration-300"
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>

                    <div className="flex space-x-6">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Link to ${social.name}`}
                                className="group p-2 rounded-full hover:bg-indigo-700 transition duration-300"
                            >
                                <social.icon className="w-6 h-6 text-amber-700 group-hover:text-white transition duration-300" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* --- Separator and Copyright Section --- */}
                <hr className="my-8 border-gray-200" />

                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
                    {/* Copyright Info */}
                    <p className="text-sm">
                        &copy; {currentYear} {ownerName}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};
