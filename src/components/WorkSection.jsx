import React, { useRef, useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
    { id: 1, title: "LUMIÈRE HALL", category: "Architecture", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" },
    { id: 2, title: "NIGHTHAWK", category: "Branding", image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=800" },
    { id: 3, title: "VOID STRUCTURE", category: "Installation", image: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?auto=format&fit=crop&q=80&w=800" },
    { id: 4, title: "AERO DYNAMICS", category: "Product", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800" },
    { id: 5, title: "CARBON ECHO", category: "Web Design", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800" },
    { id: 6, title: "SILENT MODE", category: "Photography", image: "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?auto=format&fit=crop&q=80&w=800" },
    { id: 7, title: "NEON FLUX", category: "Art Direction", image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800" },
];

const ProjectCard = ({ project, onMouseEnter, onMouseLeave }) => {
    return (
        <div
            className="relative shrink-0 group cursor-pointer"
            style={{
                width: 'clamp(280px, 90vw, 400px)',
                height: 'clamp(350px, 70vh, 500px)'
            }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div className="w-full h-full overflow-hidden bg-neutral-900 relative">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            <div className="absolute bottom-0 left-0 p-4 md:p-6 w-full transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out z-10">
                <p className="text-xs font-mono mb-1 tracking-widest uppercase text-[#CCFF00]">
                    {project.category}
                </p>
                <h3 className="text-2xl md:text-4xl font-bold text-white uppercase tracking-tighter">
                    {project.title}
                </h3>
            </div>
        </div>
    );
};

export default function WorkSection() {
    const scrollContainerRef = useRef(null);
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [showCursor, setShowCursor] = useState(false);

    // SMOOTH Horizontal Scroll with Momentum
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        let scrollSpeed = 0;
        let isScrolling = false;

        const handleWheel = (evt) => {
            if (window.innerWidth > 768 && evt.deltaY !== 0) {
                evt.preventDefault();

                // Smooth momentum scrolling with amplified speed
                scrollSpeed = evt.deltaY * 1.8;

                if (!isScrolling) {
                    isScrolling = true;
                    smoothScroll();
                }
            }
        };

        const smoothScroll = () => {
            if (Math.abs(scrollSpeed) > 0.5) {
                container.scrollLeft += scrollSpeed;
                scrollSpeed *= 0.88; // Deceleration for smooth momentum
                requestAnimationFrame(smoothScroll);
            } else {
                isScrolling = false;
                scrollSpeed = 0;
            }
        };

        container.addEventListener('wheel', handleWheel, { passive: false });
        return () => container.removeEventListener('wheel', handleWheel);
    }, []);

    // Custom Cursor
    useEffect(() => {
        const handleMouseMove = (e) => {
            setCursorPos({ x: e.clientX, y: e.clientY });
        };

        if (window.innerWidth > 768) {
            window.addEventListener('mousemove', handleMouseMove);
            return () => window.removeEventListener('mousemove', handleMouseMove);
        }
    }, []);

    return (
        <section className="bg-black text-white overflow-hidden" data-scroll-section>

            {/* Custom Cursor */}
            <div
                className="hidden md:flex fixed pointer-events-none z-50 items-center justify-center transition-all duration-100 ease-out mix-blend-difference"
                style={{
                    left: cursorPos.x,
                    top: cursorPos.y,
                    transform: `translate(-50%, -50%) scale(${isHovering ? 1 : 0})`,
                    opacity: showCursor ? 1 : 0
                }}
            >
                <div className="bg-white text-black px-6 py-3 rounded-full font-bold text-sm tracking-widest uppercase flex items-center gap-2 whitespace-nowrap">
                    View Project <ArrowUpRight size={16} />
                </div>
            </div>

            {/* Header */}
            <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 border-b border-neutral-800">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                    <h1 className="text-4xl md:text-6xl lg:text-9xl font-black tracking-tighter leading-none">
                        SELECTED<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-500 to-neutral-800">
                            WORKS (7)
                        </span>
                    </h1>
                    <div className="text-left md:text-right mb-0 md:mb-4">
                        <p className="text-neutral-500 max-w-xs text-xs md:text-sm uppercase tracking-wider">
                            We build brands that define the future. <br />
                            <span className="hidden md:inline">Scroll to explore.</span>
                            <span className="md:hidden">Swipe to explore.</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Horizontal Scroll */}
            <div
                className="w-full py-12 md:py-0 md:h-[600px] flex items-center relative"
                onMouseEnter={() => setShowCursor(true)}
                onMouseLeave={() => {
                    setShowCursor(false);
                    setIsHovering(false);
                }}
            >
                <div
                    ref={scrollContainerRef}
                    className="flex gap-2 md:gap-1 overflow-x-auto overflow-y-hidden w-full h-full items-center px-4 md:px-6 hide-scrollbar"
                >
                    {/* Intro Block */}
                    <div className="shrink-0 w-[250px] md:w-[300px] h-[350px] md:h-[500px] flex flex-col justify-between p-4 md:p-6 border-l border-neutral-800">
                        <div className="w-12 h-1 bg-[#CCFF00] mb-4 md:mb-6"></div>
                        <p className="text-xl md:text-2xl font-light leading-snug">
                            Our approach is <br />
                            <span className="text-neutral-500">strategic</span>, <br />
                            <span className="text-neutral-500">bold</span>, and <br />
                            <span className="text-[#CCFF00]">unapologetic</span>.
                        </p>
                        <p className="text-xs text-neutral-600 uppercase tracking-widest mt-auto">
                            Swipe / Scroll &rarr;
                        </p>
                    </div>

                    {/* Project Cards */}
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onMouseEnter={() => setIsHovering(true)}
                            onMouseLeave={() => setIsHovering(false)}
                        />
                    ))}

                    {/* End Block */}
                    <div className="shrink-0 w-[280px] md:w-[400px] h-[350px] md:h-[500px] bg-neutral-900 flex items-center justify-center group cursor-pointer hover:bg-[#CCFF00] transition-colors duration-500">
                        <h2 className="text-2xl md:text-4xl font-bold group-hover:text-black transition-colors text-center px-4">ALL PROJECTS</h2>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 border-t border-neutral-800 mt-8 md:mt-12 flex flex-col md:flex-row justify-between items-center gap-4">
                <span className="text-neutral-500 text-xs md:text-sm">© 2025 SAUMO AGENCY</span>
                <button className="text-lg md:text-xl font-bold hover:text-[#CCFF00] transition-colors uppercase">
                    Start a project
                </button>
            </div>

            <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </section>
    );
}
