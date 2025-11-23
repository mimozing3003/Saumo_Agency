import React, { useState } from 'react';
import { X } from 'lucide-react';
import Marquee from './Marquee';

const menuLinks = [
    {
        title: 'WORK',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=1000'
    },
    {
        title: 'AGENCY',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000'
    },
    {
        title: 'SERVICES',
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000'
    },
    {
        title: 'CONTACT',
        image: 'https://images.unsplash.com/photo-1493723843671-1a028d6bc9c9?auto=format&fit=crop&q=80&w=1000'
    },
];

const MenuOverlay = ({ isOpen, onClose }) => {
    const [hoveredMenuImage, setHoveredMenuImage] = useState(null);

    return (
        <>
            {/* --- FULL SCREEN MENU OVERLAY --- */}
            <div className={`fixed inset-0 z-[900] bg-black transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] flex flex-col justify-center items-center ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="fixed top-8 right-8 z-[950] text-white hover:text-[#CCFF00] transition-colors p-2"
                >
                    <X size={40} strokeWidth={1.5} />
                </button>

                {/* Background Hover Image */}
                <div className="absolute inset-0 opacity-20 pointer-events-none transition-opacity duration-500">
                    {hoveredMenuImage && <img src={hoveredMenuImage} className="w-full h-full object-cover grayscale" alt="Menu bg" />}
                    <div className="absolute inset-0 bg-black/50" />
                </div>

                {/* Menu Content */}
                <div className="w-full flex flex-col h-full justify-center relative z-10">
                    <Marquee text="CREATIVE • STRATEGY • BRUTALIST • DIGITAL •" direction="left" />

                    <div className="flex flex-col items-center gap-2 md:gap-4 py-12">
                        {menuLinks.map((link, idx) => (
                            <a
                                key={idx}
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    onClose();
                                }}
                                onMouseEnter={() => setHoveredMenuImage(link.image)}
                                onMouseLeave={() => setHoveredMenuImage(null)}
                                className="text-4xl md:text-6xl lg:text-9xl font-black uppercase tracking-tighter text-white hover:text-[#CCFF00] hover:scale-110 transition-all duration-300 relative group"
                            >
                                <span className="relative z-10">{link.title}</span>
                                {/* Strikethrough Effect on Hover */}
                                <span className="absolute left-0 bottom-2 md:bottom-4 w-full h-2 md:h-4 bg-[#CCFF00] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left -z-10" />
                            </a>
                        ))}
                    </div>

                    <Marquee text="WE BUILD THE FUTURE • NO COMPROMISE • PURE AESTHETICS •" direction="right" />
                </div>

                {/* Menu Footer */}
                <div className="absolute bottom-8 left-0 w-full text-center text-neutral-500 font-mono text-xs md:text-sm uppercase tracking-widest">
                    SAUMO AGENCY © 2025
                </div>
            </div>
        </>
    );
};

export default MenuOverlay;
