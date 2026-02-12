
import React, { useEffect } from 'react';
import { ChevronLeft, ArrowRight } from 'lucide-react';

interface JourneyEvent {
  id: string;
  date: string;
  act: string;
  title: string;
  image: string;
  snippet: string;
  longDesc: string;
  actors: string[];
}

const journeyEvents: JourneyEvent[] = [
  {
    id: 'beast-in-the-hall',
    date: 'OCT 1387',
    act: 'Act 1, Scene 1',
    title: 'Beast in the Hall',
    image: 'https://picsum.photos/id/1018/800/600',
    snippet: '"He is here for the iron," she whispered.',
    longDesc: 'An unexpected visitor arrives at Dunmore Keep, signaling the start of the Great Schism’s bloody escalation. This event marks the first breach of neutrality for the Thorne lineage.',
    actors: ['Gemria', 'Lord Thorne', 'Grizmund']
  },
  {
    id: 'coffin-at-the-gate',
    date: 'DEC 1387',
    act: 'Act 1, Scene 4',
    title: 'Coffin at the Gate',
    image: 'https://picsum.photos/id/1015/800/600',
    snippet: '"The snow didn\'t melt on the black wood of the casket."',
    longDesc: 'A funeral procession arrives at the Abbey gates carrying a truth that Lescovarre has spent decades trying to bury. The containment of the Schism officially fails here.',
    actors: ['Lescovarre', 'The Silent Sentinels']
  },
  {
    id: 'ash-at-st-ives',
    date: 'MAR 1388',
    act: 'Act 2, Scene 2',
    title: 'Ash at St. Ives',
    image: 'https://picsum.photos/id/1040/800/600',
    snippet: '"The air tasted of burnt vellum and ancient regrets."',
    longDesc: 'The burning of the scriptoria represents a catastrophic loss of intelligence for the Iron Shields. Gemria must now rely on memory rather than record.',
    actors: ['Gemria', 'The Scribe of Shadows']
  },
  {
    id: 'abbey-breach',
    date: 'JUN 1388',
    act: 'Act 2, Scene 5',
    title: 'Abbey Breach',
    image: 'https://picsum.photos/id/1043/800/600',
    snippet: '"The heavy oak shattered under the weight of the ram."',
    longDesc: 'The final sanctuary for the Iron Lineage is compromised. The pursuit moves from the shadows of the cloister into the open highlands.',
    actors: ['Grizmund', 'The Knights of the Rose']
  },
  {
    id: 'the-captured-prize',
    date: 'SEP 1388',
    act: 'Act 3, Scene 1',
    title: 'The Captured Prize',
    image: 'https://picsum.photos/id/1044/800/600',
    snippet: '"A prisoner with the truth is more dangerous than a Chancellor with an army."',
    longDesc: 'Gemria’s interrogation in the Chancellor’s tower reveals the true depth of the Schism. The political vipers finally show their fangs.',
    actors: ['Lescovarre', 'Gemria']
  },
  {
    id: 'the-princes-claim',
    date: 'DEC 1388',
    act: 'Act 3, Scene 6',
    title: 'The Prince\'s Claim',
    image: 'https://picsum.photos/id/1045/800/600',
    snippet: '"The kingdom was no longer a dream; it was a blood-stained reality."',
    longDesc: 'The ancient coronation stone becomes the flashpoint for the new era. A lineage is restored, but the price in blood is yet to be fully tallied.',
    actors: ['The Iron Lineage', 'The Kingdom']
  }
];

interface JourneyHubSubpageProps {
  onBack: () => void;
  onSelectEvent: (id: string) => void;
}

const JourneyHubSubpage: React.FC<JourneyHubSubpageProps> = ({ onBack, onSelectEvent }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="animate-fade-in min-h-screen bg-oath-bg pb-32 selection:bg-oath-crimson selection:text-white">
      {/* 0. Navigation Layer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <nav className="mb-20 flex items-center gap-4">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-oath-text/50 hover:text-oath-gold transition-colors group"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Return Home
          </button>
          <div className="h-px w-8 bg-oath-border" />
          <span className="text-xs uppercase tracking-widest text-oath-gold font-bold">Chronicle of 1387</span>
        </nav>

        {/* 1A. The Chronicle Header */}
        <header className="mb-32 space-y-8 animate-in fade-in slide-in-from-top-4 duration-700">
          <h1 className="text-6xl md:text-8xl font-serif font-black text-oath-gold uppercase tracking-tighter leading-[0.9] gold-gradient-text">
            The Chronicle <br className="hidden md:block" /> of 1387
          </h1>
          <p className="max-w-2xl font-narrative text-2xl lg:text-3xl italic text-oath-cream/70 leading-relaxed">
            This temporal guide serves as a tactical briefing of the lineage’s progression. Navigate the history of iron through the strictly ordered time-series below.
          </p>
        </header>

        {/* 2. Visual Elements & Spacing (The Vertical Spine) */}
        <div className="relative">
          {/* Spine Line: 2px vertical gradient positioned exactly 2rem (left-8) from edge on md+ */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-oath-gold/30 to-transparent timeline-spine" />

          <div className="space-y-24 md:space-y-32 pl-0 md:pl-20">
            {journeyEvents.map((event) => (
              <div 
                key={event.id}
                onClick={() => onSelectEvent(event.id)}
                className="group relative flex flex-col md:flex-row items-stretch md:items-center gap-8 md:gap-0 cursor-pointer border border-transparent hover:border-oath-gold/10 p-4 md:p-0 rounded-2xl transition-all duration-500 timeline-card"
              >
                {/* The Dot: circular gold anchor aligned with spine */}
                <div className="hidden md:block absolute left-[-52px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-oath-bg border-2 border-oath-gold z-20 timeline-dot shadow-[0_0_10px_rgba(212,175,55,0.3)] transition-all group-hover:scale-125 group-hover:bg-oath-gold" />

                {/* Zone 1: Temporal Metadata (16.6% / md:w-1/6) */}
                <div className="md:w-1/6 flex flex-col justify-center space-y-1">
                  <span className="text-oath-gold font-black tracking-widest text-sm uppercase font-body">
                    {event.date}
                  </span>
                  <span className="text-oath-crimson font-black text-[11px] tracking-widest uppercase font-serif">
                    {event.act.toUpperCase()}
                  </span>
                </div>

                {/* Zone 2: Visual Evidence (25% / md:w-1/4) */}
                <div className="md:w-1/4 h-48 md:h-40 relative rounded-xl overflow-hidden border border-oath-border group-hover:border-oath-gold/40 transition-all duration-500 shadow-2xl">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 brightness-[0.4] group-hover:brightness-[0.8] scale-100 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-1.5 h-1.5 bg-oath-gold rounded-full animate-pulse" />
                    <span className="text-[9px] uppercase tracking-widest text-oath-gold font-bold">Live Record</span>
                  </div>
                </div>

                {/* Zone 3: Narrative Narrative (50% / md:w-1/2) */}
                <div className="md:w-1/2 flex flex-col justify-center md:pl-16 space-y-4 relative">
                  <div className="space-y-1">
                    <h3 className="text-2xl lg:text-3xl font-serif font-black text-oath-gold uppercase tracking-wide group-hover:text-oath-cream transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-oath-gold/80 italic font-narrative text-xl lg:text-2xl">
                      {event.snippet}
                    </p>
                  </div>
                  
                  <p className="text-oath-cream/70 text-lg font-narrative leading-relaxed max-w-xl">
                    {event.longDesc}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-x-6 gap-y-2 items-center">
                    <span className="text-[10px] text-gray-500 font-body font-bold uppercase tracking-widest border-r border-oath-border pr-6">Primary Actors</span>
                    {event.actors.map(actor => (
                      <span key={actor} className="text-[10px] text-oath-text/50 font-body font-semibold uppercase tracking-widest">
                        {actor}
                      </span>
                    ))}
                  </div>

                  {/* Hover Indicator Arrow */}
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                    <div className="w-12 h-12 rounded-full border border-oath-gold/30 flex items-center justify-center group-hover:bg-oath-gold transition-colors">
                      <ArrowRight className="w-5 h-5 text-oath-gold group-hover:text-oath-bg" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneyHubSubpage;
