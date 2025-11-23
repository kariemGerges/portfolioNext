'use client';
import React, { useState, useRef, ButtonHTMLAttributes } from 'react';

interface MorphButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'danger';
    loading?: boolean;
    children: React.ReactNode;
}

export const MorphButton: React.FC<MorphButtonProps> = ({
    variant = 'primary',
    loading = false,
    children,
    className = '',
    disabled,
    ...props
}) => {
    const [ripples, setRipples] = useState<
        Array<{ x: number; y: number; id: number }>
    >([]);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const variants = {
        primary:
            'from-amber-700 to-yellow-600 hover:from-amber-500 hover:to-red-500',
        secondary:
            'from-slate-600 to-slate-700 hover:from-slate-500 hover:to-slate-600',
        danger: 'from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500',
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (loading || disabled) return;

        const rect = buttonRef.current?.getBoundingClientRect();
        if (rect) {
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const id = Date.now();

            setRipples((prev) => [...prev, { x, y, id }]);
            setTimeout(() => {
                setRipples((prev) => prev.filter((r) => r.id !== id));
            }, 600);
        }

        props.onClick?.(e);
    };

    return (
        <button
            ref={buttonRef}
            onClick={handleClick}
            disabled={disabled || loading}
            className={`
        relative px-6 py-1 rounded-xl font-medium text-gray-100
        bg-linear-to-r ${variants[variant]}
        transition-all duration-300 overflow-hidden
        hover:scale-105 hover:shadow-lg active:scale-95
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
        ${className}
      `}
            {...props}
        >
            {/* Morphing Background Blob */}
            <div className="absolute inset-0 opacity-30">
                <svg className="w-full h-full" viewBox="0 0 200 60">
                    <path
                        d="M0,30 Q50,10 100,30 T200,30 L200,60 L0,60 Z"
                        fill="white"
                        className="animate-[morph_3s_ease-in-out_infinite]"
                    />
                </svg>
            </div>

            {/* Ripple Effects */}
            {ripples.map((ripple) => (
                <span
                    key={ripple.id}
                    className="absolute rounded-full bg-white/30 animate-[ripple_0.6s_ease-out]"
                    style={{
                        left: ripple.x,
                        top: ripple.y,
                        width: '0px',
                        height: '0px',
                    }}
                />
            ))}

            {/* Content */}
            <span className="relative z-10 flex items-center justify-center gap-2">
                {loading ? (
                    <>
                        <svg
                            className="animate-spin h-5 w-5"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                                fill="none"
                            />
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                        </svg>
                        <span>Loading...</span>
                    </>
                ) : (
                    children
                )}
            </span>

            {/* Shine Effect */}
            <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-linear-to-r from-transparent
                 via-white/20 to-transparent -skew-x-12 animate-[shine_2s_ease-in-out_infinite]" />
            </div>

            <style>{`
        @keyframes ripple {
          to {
            width: 400px;
            height: 400px;
            opacity: 0;
            transform: translate(-50%, -50%);
          }
        }

        @keyframes morph {
          0%, 100% {
            d: path("M0,30 Q50,10 100,30 T200,30 L200,60 L0,60 Z");
          }
          50% {
            d: path("M0,30 Q50,50 100,30 T200,30 L200,60 L0,60 Z");
          }
        }

        @keyframes shine {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(200%) skewX(-12deg);
          }
        }
      `}</style>
        </button>
    );
};
