
import React from 'react';
import { ChevronLeft, ArrowRight } from 'lucide-react';

interface PrologueSubpageProps {
  onBack: () => void;
}

const PrologueSubpage: React.FC<PrologueSubpageProps> = ({ onBack }) => {
  return (
    <div className="animate-fade-in min-h-screen">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-12">
        {/* Navigation Layer */}
        <nav className="mb-12 flex items-center gap-4">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-oath-text/50 hover:text-oath-gold transition-colors group"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Exit Reader
          </button>
          <div className="h-px w-8 bg-oath-border" />
          <span className="text-xs uppercase tracking-widest text-oath-gold">Prologue: The Hall of Ash</span>
        </nav>

        {/* 1. Archivist Note (The Bridge) - Top Section */}
        <div className="max-w-4xl mx-auto mb-16 relative">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-oath-gold/30 rounded-full" />
          <div className="bg-black py-10 px-12 rounded-r-2xl border border-l-0 border-oath-border shadow-inner">
            <h5 className="font-serif text-oath-gold text-2xl uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
              <span className="w-3 h-3 bg-oath-gold rounded-full" />
              Archivist Entry: Record #1387-B
            </h5>
            <p className="font-narrative text-2xl text-[#b8b3aa] leading-[1.5] italic opacity-80">
              "The following account was salvaged from the ruins of the scriptoria at St. Ives. It details the precise moment the Great Schism ceased to be a war of words and became a war of lineage. The reader should note that the 'Beast' referenced is likely a code for the Chancellor's primary enforcer."
            </p>
          </div>
        </div>

        {/* 2. Tactical Atmosphere Header (Side-by-Side) */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-8 mb-16 items-stretch">
          <div className="md:col-span-6 relative rounded-2xl overflow-hidden border border-oath-border">
            <img 
              src="https://picsum.photos/id/1043/1200/400" 
              alt="Dunvarg Keep landscape" 
              className="w-full h-full object-cover brightness-[0.4] grayscale-[30%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="text-xs uppercase tracking-[0.3em] text-oath-gold font-bold">Primary Visual Record</p>
              <h4 className="font-serif text-oath-text text-lg">EXT: DUNVARG KEEP</h4>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col justify-between">
            <div className="bg-oath-charcoal border border-oath-border rounded-2xl p-6 h-full flex flex-col justify-between">
              <h4 className="text-xs uppercase tracking-[0.4em] text-oath-gold font-bold border-b border-oath-border pb-4 mb-4">Tactical Intel</h4>
              
              <div className="space-y-4 flex-grow">
                {[
                  { label: 'Season', value: 'Winter 1387' },
                  { label: 'Temperature', value: '-4°C' },
                  { label: 'Location', value: 'High Hall, Dunvarg' },
                  { label: 'Intel Status', value: 'COMPROMISED', critical: true }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-1">
                    <span className="text-[10px] uppercase tracking-tighter text-gray-500 font-bold">{item.label}</span>
                    <span className={`text-xs font-semibold uppercase tracking-widest ${item.critical ? 'text-oath-crimson' : 'text-oath-cream'}`}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <a 
                  href="https://amzn.to/4kC2HpC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-oath-crimson/20 border border-oath-crimson/40 hover:bg-oath-crimson text-white text-xs font-bold uppercase tracking-[0.3em] py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-3"
                >
                  Continue in the Book
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Atmospheric Opening (The Hook) */}
        <header className="max-w-4xl mx-auto mb-24 border-l-4 border-oath-crimson pl-8 py-6">
          <blockquote className="text-4xl font-narrative italic text-oath-gold leading-tight">
            "For iron is not born in the light, but forged in the dark. And so it is with the lineage of kings, who must bleed to prove the metal of their soul."
          </blockquote>
          <p className="mt-4 text-xs tracking-widest text-oath-crimson font-bold uppercase">— THE BOOK OF IRON, 1:12</p>
        </header>

        {/* Narrative Column */}
        <article className="max-w-4xl mx-auto space-y-16 pb-32">
          <header className="space-y-4">
            <span className="text-oath-crimson text-sm tracking-[0.4em] font-black uppercase">Opening Vignette</span>
            <h1 className="text-5xl lg:text-[5rem] font-serif text-oath-gold leading-[1.1] gold-gradient-text tracking-tighter">
              The Hall <br /> of Ash
            </h1>
          </header>

          <div className="font-narrative text-2xl lg:text-3xl text-[#e0e0e0] leading-[1.8] space-y-12">
            <p className="relative">
              <span className="float-left text-[8rem] font-serif text-oath-gold leading-[0.6] pr-8 pt-6">T</span>
              he cold did not merely bite; it possessed. Inside the Great Hall of Dunvarg, the tapestries stirred in the draft like the ghosts of ancient kings. Gemria huddled closer to the dying embers of the hearth, the iron seal heavy against her chest. She could feel the rhythm of the storm outside, each gust of wind echoing the pounding of her heart. The scent of old parchment and woodsmoke hung thick in the air, a familiar comfort that today felt like a funeral shroud.
            </p>

            <p>
              It had been three days since the messenger arrived—three days since the letters from Avignon had been burned. Her father had said the truth was a fire that could not be contained, but now the only heat in the hall was the fading glow of a legacy turned to ash. 
            </p>

            {/* Mid-Prose Snippet */}
            <div className="py-16 border-y border-oath-gold/10 flex flex-col items-center text-center space-y-8">
              <div className="w-16 h-px bg-oath-gold" />
              <p className="text-3xl lg:text-4xl italic text-oath-gold/90 font-light max-w-3xl px-6 leading-relaxed">
                "There is no sanctuary for the woman who carries the key to a throne that does not exist."
              </p>
              <div className="w-16 h-px bg-oath-gold" />
            </div>

            <p>
              The silence was broken not by a scream, but by the heavy, measured thud of iron-soled boots on stone. It was a sound that had echoed in her nightmares for weeks. Gemria didn't turn. She knew who it was. The Beast had come for his prize, and the Great Hall of Dunvarg was no longer a home, but a trap.
            </p>

            <p>
              Slowly, she stood, her shadow lengthening across the cold floor until it touched the edge of the darkness. "I thought you would come with the dawn," she said, her voice surprisingly steady. The figure at the entrance did not move, but the torchlight caught the glint of a red-stained blade. 
            </p>
          </div>

          {/* High-Contrast Conversion */}
          <div className="relative rounded-[3rem] overflow-hidden bg-oath-charcoal border border-oath-border p-12 lg:p-20 shadow-2xl mt-24">
            <div className="relative z-10 max-w-2xl space-y-8">
              <h2 className="text-4xl lg:text-6xl font-serif text-oath-gold uppercase tracking-widest leading-tight">
                Find the <br /> Truth Beneath <br /> the Iron
              </h2>
              <p className="text-2xl text-oath-text/70 font-narrative leading-relaxed">
                The prologue is only the beginning of the hunt. The Kingdom is fractured, the dual popes are at war, and Gemria’s journey has just begun. 
              </p>
              <div className="pt-10">
                <a 
                  href="https://amzn.to/4kC2HpC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-6 bg-oath-crimson hover:bg-oath-crimson-bright text-white px-12 py-6 rounded-full font-bold uppercase tracking-[0.2em] transition-all hover:scale-105 crimson-glow text-xl"
                >
                  Buy Book One Now
                  <ArrowRight className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            {/* Visual background element */}
            <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-20 pointer-events-none">
              <div className="h-full w-full bg-gradient-to-l from-oath-gold/20 to-transparent" />
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default PrologueSubpage;
