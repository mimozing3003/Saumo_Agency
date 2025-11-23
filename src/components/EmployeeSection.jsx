import React, { useRef, useState, useEffect } from 'react';

// --- DATA: EMPLOYEES (6 PEOPLE) ---
const employees = [
    {
        id: 1,
        name: "SAUMOJIT ROY",
        role: "THE FOUNDER",
        description: "Orchestrating the intersection of brutalism and digital emotion.",
        image: "/saumojit-photo.png"
    },
    {
        id: 2,
        name: "ELARA VOSS",
        role: "HEAD OF DESIGN",
        description: "Crafting visual systems that defy conventional grids.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 3,
        name: "KAI ZEN",
        role: "CREATIVE TECHNOLOGIST",
        description: "Merging code with canvas to build immersive realities.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 4,
        name: "MIRA FLUX",
        role: "STRATEGY DIRECTOR",
        description: "Turning abstract noise into clear, profitable signals.",
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 5,
        name: "JAX ONYX",
        role: "3D ARTIST",
        description: "Sculpting light and shadow in the virtual void.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 6,
        name: "ZARA VOID",
        role: "CONTENT LEAD",
        description: "Words that cut through the silence.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800"
    },
];

// --- COMPONENT: EMPLOYEE ROW ---
const EmployeeRow = ({ employee, isActive, rowRef }) => {
    return (
        <div
            ref={rowRef}
            className={`relative w-full border-t border-neutral-800 overflow-hidden
        transition-all duration-[1000ms] ease-out
        ${isActive ? 'h-[450px] md:h-[550px] bg-neutral-950' : 'h-32 md:h-40 bg-black hover:bg-neutral-950'}`}
        >
            <div className="container mx-auto px-4 md:px-12 h-full flex items-center justify-between gap-4 md:gap-8">

                {/* Left: Text */}
                <div className="flex-1 min-w-0">
                    <p className={`text-[10px] md:text-xs font-mono uppercase tracking-widest mb-1 md:mb-2
             transition-colors duration-500
             ${isActive ? 'text-[#CCFF00]' : 'text-neutral-600'}`}>
                        0{employee.id} — {employee.role}
                    </p>

                    <h3 className={`font-black uppercase tracking-tighter leading-tight
             transition-all duration-1000 ease-out
             ${isActive
                            ? 'text-3xl md:text-5xl lg:text-7xl text-white'
                            : 'text-2xl md:text-3xl lg:text-4xl text-neutral-700'
                        }`}>
                        {employee.name}
                    </h3>

                    <div className={`overflow-hidden transition-all duration-1000
             ${isActive ? 'max-h-24 opacity-100 mt-3 md:mt-5' : 'max-h-0 opacity-0'}`}>
                        <p className="text-neutral-400 text-xs md:text-sm max-w-md border-l-2 border-[#CCFF00] pl-3 md:pl-4">
                            {employee.description}
                        </p>
                    </div>
                </div>

                {/* Right: CIRCLE → PANORAMIC */}
                <div className={`relative shrink-0
          transition-all duration-1000 ease-out
          ${isActive
                        ? 'w-32 h-32 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-lg opacity-100 grayscale-0 shadow-2xl'
                        : 'w-12 h-12 md:w-16 md:h-16 rounded-full opacity-30 grayscale'
                    }`}
                >
                    <img
                        src={employee.image}
                        className="w-full h-full object-cover"
                        alt={employee.name}
                    />

                    {isActive && (
                        <>
                            <div className="absolute top-0 left-0 w-6 h-6 md:w-10 md:h-10 border-t-2 border-l-2 border-[#CCFF00]" />
                            <div className="absolute bottom-0 right-0 w-6 h-6 md:w-10 md:h-10 border-b-2 border-r-2 border-[#CCFF00]" />
                        </>
                    )}
                </div>
            </div>

            {isActive && (
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/50 pointer-events-none" />
            )}
        </div>
    );
};

export default function EmployeeSection() {
    const [activeEmployeeId, setActiveEmployeeId] = useState(null);
    const rowRefs = useRef([]);

    // Use IntersectionObserver for reliable scroll detection
    useEffect(() => {
        const observers = rowRefs.current.map((row, index) => {
            if (!row) return null;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                        setActiveEmployeeId(employees[index].id);
                    }
                },
                {
                    threshold: [0, 0.25, 0.5, 0.75, 1],
                    rootMargin: '-25% 0px -25% 0px'
                }
            );

            observer.observe(row);
            return observer;
        });

        return () => {
            observers.forEach((observer) => observer?.disconnect());
        };
    }, []);

    return (
        <section className="bg-black py-16 md:py-28" data-scroll-section>
            {/* Header */}
            <div className="container mx-auto px-4 md:px-12 mb-12 md:mb-20">
                <p className="text-[#CCFF00] text-xs font-mono uppercase tracking-widest mb-2">
                    Agency Minds
                </p>
                <h2 className="text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter text-white">
                    THE TEAM
                </h2>
            </div>

            {/* Employee List */}
            <div>
                {employees.map((emp, index) => (
                    <EmployeeRow
                        key={emp.id}
                        employee={emp}
                        isActive={activeEmployeeId === emp.id}
                        rowRef={(el) => (rowRefs.current[index] = el)}
                    />
                ))}
            </div>

            <div className="border-b border-neutral-800 mt-16"></div>
        </section>
    );
}
