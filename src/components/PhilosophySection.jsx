import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PhilosophySection = () => {
    const philosophyVideoRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Parallax & Scaling for Video ONLY
            if (philosophyVideoRef.current) {
                gsap.fromTo(philosophyVideoRef.current,
                    {
                        scale: 1,
                        y: 0
                    },
                    {
                        scale: 1.2,
                        y: -50,
                        ease: "none",
                        scrollTrigger: {
                            trigger: containerRef.current,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: true
                        }
                    }
                );
            }
            // NO TEXT ANIMATIONS - text is static and always visible

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black text-white flex items-center justify-center" data-scroll-section>
            {/* Background Video with Parallax */}
            <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
                <video
                    ref={philosophyVideoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-40"
                >
                    <source src="/philosophy-video.mp4" type="video/mp4" />
                </video>
                {/* Very Dark Overlay for Maximum Text Contrast */}
                <div className="absolute inset-0 bg-black/70"></div>
            </div>

            {/* Content Container - NO ANIMATIONS */}
            <div className="relative z-50 container mx-auto px-6 md:px-12 text-center max-w-4xl flex flex-col items-center justify-center h-full">

                {/* Heading - Always visible, no animations */}
                <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter uppercase leading-none text-white"
                    style={{
                        textShadow: '0 0 40px rgba(0,0,0,1), 0 0 20px rgba(0,0,0,1), 0 4px 30px rgba(0,0,0,0.9)',
                        opacity: 1
                    }}>
                    Our Philosophy
                </h2>

                {/* Paragraphs - Always visible, no animations */}
                <div className="space-y-8">
                    <p className="text-lg md:text-2xl font-light leading-relaxed text-white"
                        style={{
                            textShadow: '0 0 30px rgba(0,0,0,1), 0 2px 20px rgba(0,0,0,0.95)',
                            opacity: 1
                        }}>
                        At <span className="font-semibold text-cyan-300">Saumo Agency</span>, we believe that the future belongs to those who dare to reimagine it. We don't just build digital products; we craft immersive ecosystems where technology meets human intuition.
                    </p>

                    <p className="text-lg md:text-2xl font-light leading-relaxed text-white"
                        style={{
                            textShadow: '0 0 30px rgba(0,0,0,1), 0 2px 20px rgba(0,0,0,0.95)',
                            opacity: 1
                        }}>
                        Innovation is our currency, and clarity is our craft. In a chaotic digital landscape, we bring focus, designing with a purpose that transcends trends. We merge the precision of code with the fluidity of art to create experiences that resonate on a primal level.
                    </p>

                    <p className="text-lg md:text-2xl font-light leading-relaxed text-white"
                        style={{
                            textShadow: '0 0 30px rgba(0,0,0,1), 0 2px 20px rgba(0,0,0,0.95)',
                            opacity: 1
                        }}>
                        We are architects of the unseen, sculpting the void into meaningful connections. Your vision is the seed; our expertise is the catalyst. Together, we define the next era of digital interaction.
                    </p>
                </div>

                {/* Neon Accent Line */}
                <div className="mt-12 w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"></div>
            </div>
        </section>
    );
};

export default PhilosophySection;
