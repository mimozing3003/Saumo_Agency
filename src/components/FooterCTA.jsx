import React, { useState } from 'react';
import { ArrowUpRight, Mail, MapPin, Share2 } from 'lucide-react';

const FooterCTA = () => {
    const [activeSection, setActiveSection] = useState(0);

    const sections = [
        {
            id: 0,
            title: "START A PROJECT",
            subtitle: "We build brands that matter.",
            icon: <Mail size={32} />,
            action: "hello@saumo.agency",
            image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200",
            link: "mailto:hello@saumo.agency"
        },
        {
            id: 1,
            title: "VISIT THE STUDIO",
            subtitle: "1234 St-Denis, Montréal, QC",
            icon: <MapPin size={32} />,
            action: "Get Directions",
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
            link: "#"
        },
        {
            id: 2,
            title: "STALK US ONLINE",
            subtitle: "Instagram • LinkedIn • Twitter",
            icon: <Share2 size={32} />,
            action: "Follow @Saumo",
            image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200",
            link: "#"
        }
    ];

    return (
        <footer className="bg-black text-white relative z-10 border-t border-neutral-800">
            {/* Massive Header */}
            <div className="container mx-auto px-6 pt-24 pb-12">
                <h2 className="text-[10vw] leading-[0.8] font-black uppercase tracking-tighter text-white mb-8">
                    Let's <span className="text-neutral-700">Work.</span>
                </h2>
            </div>

            {/* The Brutalist Accordion */}
            <div className="w-full border-t border-neutral-800">
                {sections.map((section) => (
                    <div
                        key={section.id}
                        onMouseEnter={() => setActiveSection(section.id)}
                        className={`relative border-b border-neutral-800 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group cursor-pointer
                            ${activeSection === section.id ? 'h-[400px]' : 'h-[120px] hover:bg-neutral-900'}
                        `}
                    >
                        {/* Background Image Reveal */}
                        <div
                            className={`absolute inset-0 transition-opacity duration-700 ease-out pointer-events-none
                                ${activeSection === section.id ? 'opacity-100' : 'opacity-0'}
                            `}
                        >
                            <img
                                src={section.image}
                                alt={section.title}
                                className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
                        </div>

                        {/* Content Container */}
                        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-between py-8">

                            {/* Top Row */}
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-6">
                                    <span className={`text-sm font-mono border rounded-full w-8 h-8 flex items-center justify-center transition-colors duration-300
                                        ${activeSection === section.id ? 'border-[#CCFF00] text-[#CCFF00]' : 'border-neutral-700 text-neutral-500'}
                                    `}>
                                        0{section.id + 1}
                                    </span>
                                    <h3 className={`text-4xl md:text-6xl font-black uppercase tracking-tighter transition-all duration-300
                                        ${activeSection === section.id ? 'text-[#CCFF00] translate-x-4' : 'text-white'}
                                    `}>
                                        {section.title}
                                    </h3>
                                </div>

                                <div className={`transition-transform duration-500 ${activeSection === section.id ? 'rotate-45 text-[#CCFF00]' : 'text-neutral-500'}`}>
                                    <ArrowUpRight size={48} />
                                </div>
                            </div>

                            {/* Bottom Row */}
                            <div className={`flex justify-between items-end transition-all duration-500 delay-100
                                ${activeSection === section.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                            `}>
                                <div>
                                    <p className="text-xl text-neutral-400 font-light mb-2">{section.subtitle}</p>
                                    <a
                                        href={section.link}
                                        className="text-3xl font-bold text-white hover:text-[#CCFF00] decoration-2 underline-offset-4 hover:underline flex items-center gap-2"
                                    >
                                        {section.action}
                                    </a>
                                </div>
                                <div className="hidden md:block text-[#CCFF00]">
                                    {section.icon}
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom Strip */}
            <div className="bg-[#CCFF00] py-4 overflow-hidden">
                <div className="whitespace-nowrap flex gap-8 animate-marquee">
                    {[...Array(20)].map((_, i) => (
                        <span key={i} className="text-black font-bold uppercase tracking-widest text-sm">
                            Saumo Agency © 2025 • No Compromise • Pure Aesthetics •
                        </span>
                    ))}
                </div>
            </div>

            <style>{`
                .animate-marquee {
                    animation: marquee 20s linear infinite;
                }
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>
        </footer>
    );
};

export default FooterCTA;
