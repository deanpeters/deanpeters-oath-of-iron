
import React from 'react';

interface JourneyTileProps {
  id: string;
  image: string;
  number: string;
  title: string;
  onSelect: (id: string) => void;
}

const JourneyTile: React.FC<JourneyTileProps> = ({ id, image, number, title, onSelect }) => (
  <div 
    onClick={() => onSelect(id)}
    className="relative group rounded-xl overflow-hidden border border-oath-border aspect-video cursor-pointer"
  >
    <img 
      src={image} 
      alt={title} 
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-[0.6] group-hover:brightness-[0.7]"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
    <div className="absolute bottom-6 left-6 space-y-1">
      <p className="font-serif text-oath-gold text-xs tracking-widest">{number}.</p>
      <h4 className="font-serif text-oath-text group-hover:text-oath-gold transition-colors text-sm tracking-widest uppercase">{title}</h4>
    </div>
    <div className="absolute inset-0 border border-oath-gold/0 group-hover:border-oath-gold/20 transition-all duration-300 rounded-xl" />
  </div>
);

interface JourneySectionProps {
  onSelectJourney: (id: string) => void;
}

const JourneySection: React.FC<JourneySectionProps> = ({ onSelectJourney }) => {
  return (
    <section id="journey" className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-4">
          <h2 className="text-3xl lg:text-4xl font-serif text-oath-gold tracking-wide uppercase">
            The Kingdom Journey
          </h2>
          <p className="text-oath-text/70 max-w-md">
            Key events that shaped the destiny of the Kingdom and the lineage of iron.
          </p>
        </div>
        <button className="text-oath-gold text-xs tracking-[0.2em] font-bold uppercase border-b border-oath-gold/30 hover:border-oath-gold pb-1 transition-all">
          View Legend
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <JourneyTile 
          id="beast-in-the-hall"
          image="https://picsum.photos/id/1018/800/600"
          number="I"
          title="Beast in the Hall"
          onSelect={onSelectJourney}
        />
        <JourneyTile 
          id="coffin-at-the-gate"
          image="https://picsum.photos/id/1015/800/600"
          number="II"
          title="Coffin at the Gate"
          onSelect={onSelectJourney}
        />
        <JourneyTile 
          id="ash-at-st-ives"
          image="https://picsum.photos/id/1040/800/600"
          number="III"
          title="Ash at St. Ives"
          onSelect={onSelectJourney}
        />
        <JourneyTile 
          id="abbey-breach"
          image="https://picsum.photos/id/1043/800/600"
          number="IV"
          title="Abbey Breach"
          onSelect={onSelectJourney}
        />
        <JourneyTile 
          id="the-captured-prize"
          image="https://picsum.photos/id/1044/800/600"
          number="V"
          title="The Captured Prize"
          onSelect={onSelectJourney}
        />
        <JourneyTile 
          id="the-princes-claim"
          image="https://picsum.photos/id/1045/800/600"
          number="VI"
          title="The Prince's Claim"
          onSelect={onSelectJourney}
        />
      </div>
    </section>
  );
};

export default JourneySection;
