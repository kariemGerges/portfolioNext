import { ArrowRight } from 'lucide-react';
import { AutoCarousel } from '../ui/AutoCarousel';
// Images
import ecommerce1 from '../../../../public/ecommerce1.png';
import ecommerce2 from '../../../../public/ecommerce2.png';
import ecommerce23 from '../../../../public/ecommerce23.png';
import ecommerce4 from '../../../../public/ecommerce4.png';
import crashify1 from '../../../../public/crashify1.png';
import crashify2 from '../../../../public/crashify2.png';
import crashify3 from '../../../../public/crashify3.png';
import donationPal1 from '../../../../public/donationPal1.png';
import donationPal2 from '../../../../public/donationPal2.png';
import donationPal3 from '../../../../public/donationPal3.png';

export default function SelectedProjects() {
    const SelectedProjects = [
        {
            id: 1,
            title: 'E-Commerce',
            images: [ecommerce1, ecommerce2, ecommerce23, ecommerce4],
            subtitle: 'E-Commerce',
            alt: 'E-Commerce screenshot',
            webSite: 'https://ecommerce-frontend-henna-two.vercel.app/',
            frontend: 'React.js',
            backend: 'node.js',
            database: 'MongoDB',
        },
        {
            id: 2,
            title: 'Donation Pal',
            images: [donationPal1, donationPal2, donationPal3],
            subtitle: 'Fundraising Platform',
            alt: 'Donation Pal screenshot',
            website: 'https://kariemgerges.github.io/donationPal-frontend/',
            frontend: 'React.js',
            backend: 'node.js',
            database: 'MongoDB',
        },
        {
            id: 3,
            title: 'Crashify',
            images: [crashify1, crashify2, crashify3],
            subtitle: 'Car Insurance',
            alt: 'Crashify screenshot',
            website: 'https://crashify.com.au',
            frontend: 'NEXT.js',
            backend: 'NEXT.js',
            database: 'MongoDB',
        },
    ];

    return (
        <section
            id="work"
            className="px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20 mb-16 sm:mb-24 lg:mb-32"
        >
            <div className="max-w-7xl mx-auto">
                <p className="text-xs sm:text-sm text-gray-500 mb-8 sm:mb-12 lg:mb-16 tracking-wide uppercase">
                    Selected Work
                </p>
                <div className="space-y-12 sm:space-y-16 lg:space-y-24">
                    {SelectedProjects.map((project) => (
                        <div key={project.id} className="group cursor-pointer">
                            {/* Carousel Container */}
                            <div className="relative h-48 xs:h-56 sm:h-64 md:h-80 lg:h-96 xl:h-[500px] mb-4 sm:mb-6 rounded-xl sm:rounded-2xl overflow-hidden">
                                <AutoCarousel
                                    images={project.images.map((image) => ({
                                        src: image.src,
                                        alt: project.alt,
                                        title: project.title,
                                        description: project.subtitle,
                                    }))}
                                    autoPlayInterval={4000}
                                    showControls={true}
                                    showIndicators={true}
                                />
                            </div>

                            {/* Project Info */}
                            <div className="flex justify-between items-start gap-4">
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-light mb-1 sm:mb-2 tracking-tight truncate sm:whitespace-normal">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm sm:text-base text-gray-600 font-light">
                                        {project.subtitle}
                                    </p>
                                </div>
                                <ArrowRight
                                    size={16}
                                    className="mt-1 sm:mt-2 text-amber-800 group-hover:translate-x-2 group-hover:text-black transition-all flex-shrink-0 sm:w-5 sm:h-5"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
