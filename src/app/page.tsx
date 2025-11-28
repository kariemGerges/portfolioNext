import { lazy, Suspense } from 'react';
import dynamic from 'next/dynamic';

// Critical above-the-fold components - load immediately
import Hero from '@/app/components/Home/Hero';

// Lazy load below-the-fold components for better performance
const Capabilities = dynamic(() => import('@/app/components/Home/Capabilities'), {
    loading: () => <div className="h-96" />, // Placeholder height
});

const SelectedProjects = dynamic(() => import('@/app/components/Home/SelectedProjects'), {
    loading: () => <div className="h-96" />,
});

const BlogTeaser = dynamic(() => import('@/app/components/Home/BlogTeaser'), {
    loading: () => <div className="h-96" />,
});

const About = dynamic(() => import('@/app/components/Home/About'), {
    loading: () => <div className="h-96" />,
});

const Contact = dynamic(() => import('@/app/components/Home/Contact'), {
    loading: () => <div className="h-96" />,
});

export default function PortfolioHome() {
    return (
        <div className="bg-white text-black">
            {/* Hero Section - Critical, load immediately */}
            <Hero />
            
            {/* Below-the-fold components - lazy loaded */}
            <Suspense fallback={<div className="h-96" />}>
                <Capabilities />
            </Suspense>
            
            <Suspense fallback={<div className="h-96" />}>
                <SelectedProjects />
            </Suspense>
            
            <Suspense fallback={<div className="h-96" />}>
                <BlogTeaser />
            </Suspense>
            
            <Suspense fallback={<div className="h-96" />}>
                <About />
            </Suspense>
            
            <Suspense fallback={<div className="h-96" />}>
                <Contact />
            </Suspense>
        </div>
    );
}
