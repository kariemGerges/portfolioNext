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
    const [particles, setParticles] = useState<
        Array<{ x: number; y: number; id: number; angle: number }>
    >([]);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const variants = {
        primary: {
            gradient: 'from-cyan-500 via-blue-500 to-purple-600',
            glow: 'shadow-[0_0_20px_rgba(6,182,212,0.5),0_0_40px_rgba(59,130,246,0.3)]',
            border: 'border-cyan-400/50',
            hoverGlow: 'hover:shadow-[0_0_30px_rgba(6,182,212,0.7),0_0_60px_rgba(59,130,246,0.5)]',
        },
        secondary: {
            gradient: 'from-purple-500 via-pink-500 to-rose-500',
            glow: 'shadow-[0_0_20px_rgba(168,85,247,0.5),0_0_40px_rgba(236,72,153,0.3)]',
            border: 'border-purple-400/50',
            hoverGlow: 'hover:shadow-[0_0_30px_rgba(168,85,247,0.7),0_0_60px_rgba(236,72,153,0.5)]',
        },
        danger: {
            gradient: 'from-red-500 via-orange-500 to-yellow-500',
            glow: 'shadow-[0_0_20px_rgba(239,68,68,0.5),0_0_40px_rgba(249,115,22,0.3)]',
            border: 'border-red-400/50',
            hoverGlow: 'hover:shadow-[0_0_30px_rgba(239,68,68,0.7),0_0_60px_rgba(249,115,22,0.5)]',
        },
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (loading || disabled) return;

        const rect = buttonRef.current?.getBoundingClientRect();
        if (rect) {
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const id = Date.now();

            // Create ripple
            setRipples((prev) => [...prev, { x, y, id }]);
            setTimeout(() => {
                setRipples((prev) => prev.filter((r) => r.id !== id));
            }, 800);

            // Create particle burst
            const newParticles = Array.from({ length: 8 }, (_, i) => ({
                x,
                y,
                id: id + i,
                angle: (i * 360) / 8,
            }));
            setParticles((prev) => [...prev, ...newParticles]);
            setTimeout(() => {
                setParticles((prev) => prev.filter((p) => p.id < id));
            }, 1000);
        }

        props.onClick?.(e);
    };

    return (
        <button
            ref={buttonRef}
            onClick={handleClick}
            disabled={disabled || loading}
            className={`
        group relative px-8 py-3.5 font-semibold text-white uppercase tracking-wider text-sm
        bg-gradient-to-r ${variants[variant].gradient}
        border-2 ${variants[variant].border}
        ${variants[variant].glow}
        ${variants[variant].hoverGlow}
        transition-all duration-300 overflow-hidden
        hover:scale-105 active:scale-95
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
        backdrop-blur-sm
        clip-hexagon
        ${className}
      `}
            style={{
                clipPath: 'polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)',
            }}
            {...props}
        >
            {/* Animated Grid Background */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_49%,rgba(255,255,255,0.4)_49%,rgba(255,255,255,0.4)_51%,transparent_51%)] bg-[length:20px_20px]" />
                <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_49%,rgba(255,255,255,0.4)_49%,rgba(255,255,255,0.4)_51%,transparent_51%)] bg-[length:20px_20px]" />
            </div>

            {/* Circuit Pattern Overlay */}
            <div className="absolute inset-0 opacity-30">
                <svg className="w-full h-full" viewBox="0 0 200 60">
                    <pattern id="circuit" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M20 0 L20 10 L30 10 L30 30 L10 30 L10 10 L20 10" 
                              stroke="currentColor" strokeWidth="0.5" fill="none" 
                              className="text-white animate-[pulse_2s_ease-in-out_infinite]" />
                        <circle cx="20" cy="10" r="1" fill="currentColor" className="text-white" />
                        <circle cx="30" cy="30" r="1" fill="currentColor" className="text-white" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#circuit)" />
                </svg>
            </div>

            {/* Holographic Scan Line */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent 
                    h-[2px] animate-[scan_3s_ease-in-out_infinite]" />
            </div>

            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-white/50" 
                 style={{ clipPath: 'polygon(0 0, 100% 0, 100% 20%, 20% 20%, 20% 100%, 0 100%)' }} />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-white/50"
                 style={{ clipPath: 'polygon(0 80%, 80% 80%, 80% 0, 100% 0, 100% 100%, 0 100%)' }} />

            {/* Energy Ripples */}
            {ripples.map((ripple) => (
                <span
                    key={ripple.id}
                    className="absolute rounded-full border-2 border-white animate-[energyRipple_0.8s_ease-out]"
                    style={{
                        left: ripple.x,
                        top: ripple.y,
                        width: '0px',
                        height: '0px',
                    }}
                />
            ))}

            {/* Particle Burst */}
            {particles.map((particle) => (
                <span
                    key={particle.id}
                    className="absolute w-1 h-1 bg-white rounded-full animate-[particle_1s_ease-out]"
                    style={{
                        left: particle.x,
                        top: particle.y,
                        '--angle': `${particle.angle}deg`,
                    } as React.CSSProperties}
                />
            ))}

            {/* Content */}
            <span className="relative z-10 flex items-center justify-center gap-3">
                {loading ? (
                    <>
                        <div className="relative w-5 h-5">
                            <div className="absolute inset-0 border-2 border-white/30 rounded-full" />
                            <div className="absolute inset-0 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        </div>
                        <span className="animate-pulse">Processing...</span>
                    </>
                ) : (
                    <>
                        <span className="relative">
                            {children}
                            <span className="absolute inset-0 blur-sm opacity-50 group-hover:opacity-100 transition-opacity">
                                {children}
                            </span>
                        </span>
                        <span className="text-xl leading-none opacity-70 group-hover:opacity-100 transition-opacity">▸</span>
                    </>
                )}
            </span>

            {/* Holographic Shine */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent 
                    -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
            </div>

            {/* Glitch Effect on Hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 mix-blend-overlay">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-transparent to-purple-500/20 
                    animate-[glitch_0.3s_infinite]" />
            </div>

            <style>{`
        @keyframes energyRipple {
          to {
            width: 300px;
            height: 300px;
            opacity: 0;
            transform: translate(-50%, -50%);
          }
        }

        @keyframes particle {
          to {
            transform: translate(
              calc(cos(var(--angle)) * 80px),
              calc(sin(var(--angle)) * 80px)
            );
            opacity: 0;
          }
        }

        @keyframes scan {
          0%, 100% {
            transform: translateY(-100%);
          }
          50% {
            transform: translateY(2000%);
          }
        }

        @keyframes glitch {
          0%, 100% {
            transform: translateX(0);
          }
          33% {
            transform: translateX(-2px) skew(-2deg);
          }
          66% {
            transform: translateX(2px) skew(2deg);
          }
        }
      `}</style>
        </button>
    );
};
