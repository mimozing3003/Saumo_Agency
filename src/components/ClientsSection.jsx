import React, { useState, useRef } from 'react';

const ClientsSection = () => {
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        setCursorPos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    const clients = [
        "GOOGLE", "NIKE", "SPOTIFY", "TESLA", "NETFLIX", "APPLE", "AMAZON", "META"
    ];

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative py-16 overflow-hidden border-t border-neutral-800 select-none cursor-crosshair"
            style={{ backgroundColor: '#000000' }}
        >
            <div className="container mx-auto px-6 mb-8">
                <p className="text-[#CCFF00] font-mono text-sm tracking-widest uppercase mb-4">Trusted By</p>
            </div>

            {/* LAYER 1: Ghost Outline */}
            <div className="flex flex-col gap-8 opacity-30">
                <MarqueeRow clients={clients} direction="left" outline />
                <MarqueeRow clients={[...clients].reverse()} direction="right" outline />
            </div>

            {/* LAYER 2: Neon Reveal */}
            <div
                className="absolute inset-0 flex flex-col gap-8 pt-24 pointer-events-none"
                style={{
                    clipPath: `circle(350px at ${cursorPos.x}px ${cursorPos.y}px)`
                }}
            >
                <MarqueeRow clients={clients} direction="left" />
                <MarqueeRow clients={[...clients].reverse()} direction="right" />
            </div>
        </section>
    );
};

const MarqueeRow = ({ clients, direction, outline }) => {
    return (
        <div className="relative flex overflow-hidden w-full">
            <div
                className="flex whitespace-nowrap gap-16"
                style={{
                    animation: `scroll 30s linear infinite ${direction === 'right' ? 'reverse' : 'normal'}`,
                }}
            >
                {[...clients, ...clients, ...clients, ...clients].map((client, i) => (
                    <span
                        key={i}
                        className="text-6xl md:text-8xl font-black tracking-tighter uppercase"
                        style={outline
                            ? {
                                color: 'transparent',
                                WebkitTextStroke: '1px rgba(255,255,255,0.4)'
                            }
                            : {
                                color: '#CCFF00'
                            }
                        }
                    >
                        {client}
                    </span>
                ))}
            </div>

            <style>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-25%); }
                }
            `}</style>
        </div>
    );
};

export default ClientsSection;
