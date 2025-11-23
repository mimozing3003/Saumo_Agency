import React from 'react';

const Marquee = ({ text, direction = 'left' }) => {
    return (
        <div className="w-full overflow-hidden bg-neutral-950 py-4 border-y border-neutral-800">
            <div className={`flex whitespace-nowrap ${direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'}`}>
                <span className="text-sm md:text-base font-mono uppercase tracking-[0.3em] text-neutral-600 mx-8">
                    {text}
                </span>
                <span className="text-sm md:text-base font-mono uppercase tracking-[0.3em] text-neutral-600 mx-8">
                    {text}
                </span>
                <span className="text-sm md:text-base font-mono uppercase tracking-[0.3em] text-neutral-600 mx-8">
                    {text}
                </span>
                <span className="text-sm md:text-base font-mono uppercase tracking-[0.3em] text-neutral-600 mx-8">
                    {text}
                </span>
            </div>

            <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left 20s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 20s linear infinite;
        }
      `}</style>
        </div>
    );
};

export default Marquee;
