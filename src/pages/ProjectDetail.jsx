import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useParams } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const ProjectDetail = () => {
    const { slug } = useParams();
    const containerRef = useRef(null);
    const heroTextRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(heroTextRef.current, {
                y: 100,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out"
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="bg-white min-h-screen">
            {/* Hero Section with Embedded Image in Text */}
            <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#F4F4F4]" data-scroll-section>
                <div className="relative z-10 w-full px-8 md:px-16">
                    <div ref={heroTextRef} className="relative">
                        {/* First Line: SIXTY with embedded image */}
                        <div className="relative mb-4">
                            <h1 className="text-[20vw] md:text-[18vw] font-bold tracking-[-0.05em] uppercase leading-[0.85] text-black inline-block relative">
                                <span className="inline-block relative">
                                    SI
                                    <span className="inline-block relative overflow-hidden align-middle mx-2 md:mx-4" style={{ width: '18vw', height: '20vw' }}>
                                        <img
                                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
                                            alt="Team member"
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    </span>
                                    TY-
                                </span>
                            </h1>
                        </div>
                        {/* Second Line: SEVENTH */}
                        <div>
                            <h1 className="text-[20vw] md:text-[18vw] font-bold tracking-[-0.05em] uppercase leading-[0.85] text-black">
                                SEVENTH
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Details Section */}
            <section className="py-32 px-6 md:px-12 bg-white text-black" data-scroll-section>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-12">
                        <div className="md:col-span-3 relative">
                            <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-black sticky top-32">
                                Project Details
                            </h2>
                        </div>
                        <div className="md:col-span-9">
                            <h3 className="text-4xl md:text-5xl font-medium leading-[1.1] tracking-tight mb-8">
                                A groundbreaking project that pushes the boundaries of digital creativity.
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                                <div>
                                    <p className="text-lg leading-[1.6] text-gray-600 mb-6">
                                        This project represents our commitment to innovative design and strategic thinking. We collaborated closely with the client to create an experience that resonates with their audience.
                                    </p>
                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-[11px] uppercase tracking-[0.1em] text-gray-500 mb-2">Services</p>
                                            <p className="text-lg">Branding, Digital, Strategy</p>
                                        </div>
                                        <div>
                                            <p className="text-[11px] uppercase tracking-[0.1em] text-gray-500 mb-2">Year</p>
                                            <p className="text-lg">2024</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-lg leading-[1.6] text-gray-600">
                                        Through meticulous attention to detail and bold creative choices, we delivered a solution that exceeded expectations and set a new standard in the industry.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Images Gallery */}
            <section className="py-20 bg-[#F4F4F4]" data-scroll-section>
                <div className="container mx-auto px-6 md:px-12">
                    <div className="space-y-32">
                        {/* Image 1 - Full Width */}
                        <div className="w-full">
                            <img
                                src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop"
                                alt="Project showcase 1"
                                className="w-full h-[70vh] object-cover"
                            />
                        </div>

                        {/* Images 2 & 3 - Side by Side */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <img
                                src="https://images.unsplash.com/photo-1531591022136-eb8b0da1e6d0?q=80&w=2000&auto=format&fit=crop"
                                alt="Project showcase 2"
                                className="w-full h-[60vh] object-cover"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?q=80&w=2000&auto=format&fit=crop"
                                alt="Project showcase 3"
                                className="w-full h-[60vh] object-cover"
                            />
                        </div>

                        {/* Image 4 - Full Width */}
                        <div className="w-full">
                            <img
                                src="https://images.unsplash.com/photo-1558655146-d09347e0b7a8?q=80&w=2000&auto=format&fit=crop"
                                alt="Project showcase 4"
                                className="w-full h-[70vh] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Next Project CTA */}
            <section className="py-40 px-6 bg-black text-white min-h-screen flex flex-col justify-center items-center text-center" data-scroll-section>
                <h2 className="text-[10vw] font-bold mb-10 tracking-[-0.05em] leading-none">Next Project</h2>
                <a href="/" className="border border-white/30 px-12 py-5 text-sm hover:bg-white hover:text-black transition-all duration-500 uppercase tracking-[0.2em]">
                    View All Work
                </a>
            </section>
        </div>
    );
};

export default ProjectDetail;
