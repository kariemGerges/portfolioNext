// Components
import About from '@/app/components/Home/About';
import Contact from '@/app/components/Home/Contact';
import SelectedProjects from '@/app/components/Home/SelectedProjects';
import Capabilities from '@/app/components/Home/Capabilities';
import   Hero   from '@/app/components/Home/Hero';
// import FeaturedImage from '@/app/components/Home/FeaturedImage';

export default function PortfolioHome() {
    return (
        <div className="bg-white text-black">
            {/* Hero Section */}
            <Hero />
                {/* Featured Image */}
                {/* <FeaturedImage /> */}
                    {/* Capabilities */}
                    <Capabilities />
                    {/* Selected Projects */}
                    <SelectedProjects />
                {/* About Section */}
                <About />
            {/* Contact Section */}
            <Contact />
        </div>
    );
}
