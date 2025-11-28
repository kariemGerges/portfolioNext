'use client';
import { useState } from 'react';
import Image from 'next/image';
import { ImageIcon } from 'lucide-react';

interface BlogImageProps {
    src?: string;
    alt: string;
    fill?: boolean;
    className?: string;
    priority?: boolean;
    width?: number;
    height?: number;
    sizes?: string;
}

export default function BlogImage({
    src,
    alt,
    fill = false,
    className = '',
    priority = false,
    width,
    height,
    sizes,
}: BlogImageProps) {
    const [imageError, setImageError] = useState(false);
    const [imageSrc, setImageSrc] = useState(src);

    const handleError = () => {
        setImageError(true);
        setImageSrc(undefined);
    };

    // If no src or error occurred, show placeholder
    if (!imageSrc || imageError) {
        return (
            <div
                className={`relative bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center ${className}`}
                style={fill ? {} : { width, height }}
            >
                <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
                    <ImageIcon className="w-12 h-12 sm:w-16 sm:h-16 mb-2 opacity-50" />
                    <span className="text-xs sm:text-sm font-light">No Image</span>
                </div>
                {/* Decorative pattern */}
                <div className="absolute inset-0 opacity-5">
                    <svg width="100%" height="100%">
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>
            </div>
        );
    }

    // Render Next.js Image component
    if (fill) {
        return (
            <Image
                src={imageSrc}
                alt={alt}
                fill
                className={className}
                onError={handleError}
                priority={priority}
                sizes={sizes}
            />
        );
    }

    return (
        <Image
            src={imageSrc}
            alt={alt}
            width={width}
            height={height}
            className={className}
            onError={handleError}
            priority={priority}
            sizes={sizes}
        />
    );
}

