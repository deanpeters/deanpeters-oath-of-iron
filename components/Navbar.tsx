
import React, { useState, useEffect } from 'react';
import { Shield } from 'lucide-react';

interface NavbarProps {
  onNavigateJourney?: () => void;
  onNavigateCast?: () => void;
  onNavigateMap?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigateJourney, onNavigateCast, onNavigateMap }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-oath-bg/95 backdrop-blur-sm border-b border-oath-border py-3' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Left: Brand */}
        <div className="flex items-center gap-3">
          <Shield className="w-6 h-6 text-oath-crimson fill-oath-crimson" />
          <a href="#" className="font-serif text-lg tracking-widest text-oath-gold uppercase font-bold">
            Oath of Iron
          </a>
        </div>

        {/* Center: Nav Links */}
        <div className="hidden md:flex items-center gap-10">
          <button 
            onClick={() => onNavigateJourney ? onNavigateJourney() : window.location.hash = '#/journey'}
            className="text-xs tracking-widest text-oath-text/70 hover:text-oath-gold uppercase transition-colors"
          >
            The Journey
          </button>
          <button 
            onClick={() => onNavigateCast ? onNavigateCast() : window.location.hash = '#/cast'}
            className="text-xs tracking-widest text-oath-text/70 hover:text-oath-gold uppercase transition-colors"
          >
            The Cast
          </button>
          <button 
            onClick={() => onNavigateMap ? onNavigateMap() : window.location.hash = '#/map'}
            className="text-xs tracking-widest text-oath-text/70 hover:text-oath-gold uppercase transition-colors"
          >
            The Map
          </button>
        </div>

        {/* Right: CTA */}
        <a 
          href="https://amzn.to/4kC2HpC"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-oath-crimson hover:bg-oath-crimson-bright text-white px-6 py-2.5 rounded-md text-xs font-bold uppercase tracking-widest transition-all duration-200 crimson-glow"
        >
          Buy on Amazon
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
