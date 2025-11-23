// Components
import About from '@/app/components/Home/About';
import Contact from '@/app/components/Home/Contact';
import SelectedProjects from '@/app/components/Home/SelectedProjects';
import Capabilities from '@/app/components/Home/Capabilities';
import Hero from '@/app/components/Home/Hero';
import BlogTeaser from '@/app/components/Home/BlogTeaser';

export default function PortfolioHome() {
    return (
        <div className="bg-white text-black">
            {/* Hero Section */}
            <Hero />
            
            {/* Capabilities */}
            <Capabilities />
            
            {/* Selected Projects */}
            <SelectedProjects />
            
            {/* Blog Teaser */}
            <BlogTeaser />
            
            {/* About Section */}
            <About />
            
            {/* Contact Section */}
            <Contact />
        </div>
    );
}
