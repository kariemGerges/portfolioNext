'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

import img from '../../../../public/portLight.jpg';

export default function FeaturedImage() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="px-4 sm:px-6 lg:px-12 mb-16 sm:mb-32">
            <div className="max-w-7xl mx-auto">
                <div
                    className="relative h-[50vh] sm:h-[70vh] bg-gray-100 rounded-xl sm:rounded-2xl overflow-hidden"
                    style={{
                        transform: `translateY(${scrollY * 0.1}px)`,
                    }}
                >
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                        <Image
                            src={img}
                            alt="Descriptive alt text"
                            width={600}
                            height={400}
                            loading="lazy" 
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
