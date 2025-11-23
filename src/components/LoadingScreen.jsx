import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

const LoadingScreen = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simulate loading
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    // Animate out
                    gsap.to('.loading-screen', {
                        y: '-100%',
                        duration: 0.8,
                        ease: 'power3.inOut',
                        delay: 0.5,
                        onComplete: () => onComplete()
                    });
                    return 100;
                }
                return prev + 10;
            });
        }, 100);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className="loading-screen fixed inset-0 bg-black z-[100] flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tighter">
                    Saumo Agency
                </h1>
                <div className="w-64 h-1 bg-gray-800 mx-auto overflow-hidden">
                    <div
                        className="h-full bg-white transition-all duration-300"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;
