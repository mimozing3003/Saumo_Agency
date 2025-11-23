import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '../components/Header';
import PhilosophySection from '../components/PhilosophySection';
import WorkSection from '../components/WorkSection';
import EmployeeSection from '../components/EmployeeSection';
import ClientsSection from '../components/ClientsSection';
import FooterCTA from '../components/FooterCTA';

gsap.registerPlugin(ScrollTrigger);

const Agence = () => {
    const heroRef = useRef(null);
    const textRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero Animation
            const tl = gsap.timeline();

            // Initial Reveal
            tl.from(heroRef.current, {
                scale: 1.1,
                opacity: 0,
                duration: 1.5,
                ease: "power2.out"
            })
                .from(textRef.current, {
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    ease: "power2.out"
                }, "-=1");

            // Parallax for Hero Text
            gsap.to(textRef.current, {
                y: -50,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <>
            <Header />
            <div ref={containerRef} className="bg-black min-h-screen">
                {/* Hero Section */}
                <section
                    className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black"
                    data-scroll-section
                >
                    <div ref={heroRef} className="absolute inset-0 z-0 opacity-60">
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover"
                        >
                            <source src="/hero-video.mp4" type="video/mp4" />
                        </video>
                    </div>

                    <div className="relative z-10 w-full px-4 text-center">
                        <h1
                            ref={textRef}
                            className="text-[18vw] font-bold tracking-[-0.08em] uppercase text-white mix-blend-difference leading-[0.8] select-none"
                        >
                            Saumo Agency
                        </h1>
                    </div>
                </section>

                <PhilosophySection />
                <WorkSection />
                <EmployeeSection />
                <ClientsSection />
            </div>

            <FooterCTA />
        </>
    );
};

export default Agence;
