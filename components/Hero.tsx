
import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';

interface HeroProps {
  onOpenPrologue: () => void;
  onExploreLore: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenPrologue, onExploreLore }) => {
  return (
    <section className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-oath-crimson/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Column: Text */}
        <div className="lg:col-span-5 flex flex-col space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
          <div className="space-y-4">
            <span className="text-oath-crimson/80 text-xs tracking-widest uppercase font-semibold">
              A Medieval Theological Thriller
            </span>
            <h1 className="text-5xl lg:text-7xl font-serif leading-[1.1] text-oath-gold">
              Oath of Iron: <br />
              <span className="opacity-90">The Kingdom</span>
            </h1>
          </div>

          <p className="text-oath-text leading-relaxed text-lg max-w-lg">
            <span className="text-oath-gold font-serif text-xl italic mr-1">1387.</span> Secrets of the cloth, shadows of the throne. A fractured empire held together by a single, blood-stained vow.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button 
              onClick={onOpenPrologue}
              className="bg-oath-crimson hover:bg-oath-crimson-bright text-white px-8 py-4 rounded-md font-bold uppercase tracking-widest text-sm transition-all flex items-center justify-center gap-2 crimson-glow group"
            >
              Read the Prologue
              <BookOpen className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </button>
            <button 
              onClick={onExploreLore}
              className="border border-oath-gold/40 hover:border-oath-gold text-oath-gold px-8 py-4 rounded-md font-bold uppercase tracking-widest text-sm transition-all hover:bg-oath-gold/5 flex items-center justify-center gap-2"
            >
              Explore the Lore
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Column: Featured Image */}
        <div className="lg:col-span-7 relative group animate-in fade-in zoom-in-95 duration-1000 delay-200">
          <div className="relative rounded-2xl overflow-hidden border border-oath-border bg-oath-surface-light p-2 shadow-2xl">
            <img 
              src="https://picsum.photos/id/1041/1200/800" 
              alt="Sword in cathedral nave" 
              className="w-full aspect-[4/3] object-cover rounded-xl filter brightness-75 contrast-125 grayscale-[20%] group-hover:brightness-90 transition-all duration-700"
            />
            {/* Dark overlay for atmosphere */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            
            {/* Quote Plaque */}
            <div className="absolute bottom-10 left-10 right-10 flex justify-center">
              <div className="bg-oath-bg/80 backdrop-blur-md border border-oath-gold/20 px-8 py-4 rounded-lg shadow-xl text-center max-w-sm">
                <p className="font-serif italic text-oath-gold text-lg tracking-wide">
                  "Trust no one with the Seal."
                </p>
              </div>
            </div>
          </div>
          
          {/* Subtle decoration elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-oath-gold/20 rounded-tr-3xl pointer-events-none" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-oath-crimson/20 rounded-bl-3xl pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
