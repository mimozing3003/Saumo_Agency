import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuOverlay from './MenuOverlay';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 px-8 py-8 flex justify-between items-start mix-blend-difference text-white pointer-events-none">
        <Link to="/" className="text-2xl font-bold tracking-[-0.05em] pointer-events-auto uppercase">
          Saumo Agency
        </Link>
        <button
          className="pointer-events-auto hover:opacity-70 transition-opacity"
          onClick={() => setIsMenuOpen(true)}
        >
          <div className="flex flex-col space-y-1.5 w-8 items-end">
            <span className="block w-full h-[2px] bg-white"></span>
            <span className="block w-full h-[2px] bg-white"></span>
            <span className="block w-full h-[2px] bg-white"></span>
          </div>
        </button>
      </header>
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Header;

