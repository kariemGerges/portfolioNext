'use client';
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import Image from 'next/image';

interface CarouselImage {
    src: string;
    alt: string;
    title?: string;
    description?: string;
}

interface AutoCarouselProps {
    images: CarouselImage[];
    autoPlayInterval?: number; // milliseconds
    showControls?: boolean;
    showIndicators?: boolean;
    className?: string;
}

export const AutoCarousel: React.FC<AutoCarouselProps> = ({
    images,
    autoPlayInterval = 3000,
    showControls = true,
    showIndicators = true,
    className = '',
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [direction, setDirection] = useState<'left' | 'right'>('right');
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

        const goToNext = () => {
            setDirection('right');
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        };

    useEffect(() => {
        resetTimeout();

        if (isAutoPlaying) {
            timeoutRef.current = setTimeout(() => {
                goToNext();
            }, autoPlayInterval);
        }

        return () => {
            resetTimeout();
        };
    }, [currentIndex, isAutoPlaying, autoPlayInterval]);



    const goToPrevious = () => {
        setDirection('left');
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToSlide = (index: number) => {
        setDirection(index > currentIndex ? 'right' : 'left');
        setCurrentIndex(index);
    };

    const toggleAutoPlay = () => {
        setIsAutoPlaying(!isAutoPlaying);
    };

    return (
        <div
            className={`relative w-full h-full overflow-hidden 
                shadow-2xl shadow-amber-600/50
                rounded-3xl bg-amber-600/50 ${className}`}
        >
            {/* Images Container */}
            <div className="relative w-full h-full">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                            index === currentIndex
                                ? 'opacity-100 scale-100 z-10'
                                : direction === 'right'
                                ? 'opacity-0 scale-95 -translate-x-full'
                                : 'opacity-0 scale-95 translate-x-full'
                        }`}
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="w-full h-full object-cover object-center"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

                        {/* Image Info */}
                        {(image.title || image.description) && (
                            <div className="absolute bottom-0 left-0 right-0  p-4 md:p-6 text-white z-20">
                                {image.title && (
                                    <h3 className="text-lg md:text-2xl font-bold mb-1 md:mb-2">
                                        {image.title}
                                    </h3>
                                )}
                                {image.description && (
                                    <p className="text-xs md:text-sm text-slate-200">
                                        {image.description}
                                    </p>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Controls */}
            {showControls && (
                <>
                    {/* Previous Button */}
                    <button
                        onClick={goToPrevious}
                        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full p-2 md:p-3 transition-all hover:scale-110 active:scale-95"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-white" />
                    </button>

                    {/* Next Button */}
                    <button
                        onClick={goToNext}
                        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full p-2 md:p-3 transition-all hover:scale-110 active:scale-95"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-white" />
                    </button>

                    {/* Play/Pause Button */}
                    <button
                        onClick={toggleAutoPlay}
                        className="absolute top-4 right-4 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full p-3 transition-all hover:scale-110 active:scale-95"
                        aria-label={isAutoPlaying ? 'Pause' : 'Play'}
                    >
                        {isAutoPlaying ? (
                            <Pause className="w-5 h-5 text-white" />
                        ) : (
                            <Play className="w-5 h-5 text-white" />
                        )}
                    </button>
                </>
            )}

            {/* Indicators */}
            {showIndicators && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`transition-all ${
                                index === currentIndex
                                    ? 'w-8 bg-white'
                                    : 'w-2 bg-white/40 hover:bg-white/60'
                            } h-2 rounded-full`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            )}

            {/* Progress Bar */}
            {isAutoPlaying && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-red-500 z-20">
                    <div
                        className="h-full bg-white transition-all"
                        style={{
                            animation: `progress ${autoPlayInterval}ms linear`,
                        }}
                    />
                </div>
            )}

            <style>{`
        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
            `}</style>
        </div>
    );
};
