import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import Header from './Header';

const Layout = ({ children }) => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const scroll = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,
            lerp: 0.1,
            multiplier: 1,
        });

        return () => {
            if (scroll) scroll.destroy();
        };
    }, []);

    return (
        <div className="bg-black text-white min-h-screen flex flex-col">
            <Header />
            <main ref={scrollRef} data-scroll-container className="flex-grow">
                {children}
            </main>
        </div>
    );
};

export default Layout;
