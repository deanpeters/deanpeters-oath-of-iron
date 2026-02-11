
import React from 'react';

interface CharacterCardProps {
  image: string;
  name: string;
  role: string;
  description: string;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ image, name, role, description }) => (
  <div className="relative group bg-oath-surface border border-oath-border rounded-xl overflow-hidden flex flex-col h-full transition-all duration-300 hover:border-oath-gold/30">
    <div className="relative aspect-[3/4] overflow-hidden">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-oath-surface via-transparent to-transparent opacity-60" />
    </div>
    <div className="p-8 space-y-4 relative -mt-16 bg-gradient-to-t from-oath-surface via-oath-surface to-transparent pt-20">
      <div className="space-y-1">
        <span className="text-oath-crimson text-[10px] tracking-[0.2em] font-bold uppercase">{role}</span>
        <h3 className="font-serif text-oath-gold text-2xl tracking-wide">{name}</h3>
      </div>
      <p className="text-oath-text/80 text-sm leading-relaxed min-h-[4rem]">
        {description}
      </p>
    </div>
  </div>
);

const CastSection: React.FC = () => {
  return (
    <section id="cast" className="space-y-16">
      <div className="text-center space-y-4">
        <h2 className="text-3xl lg:text-4xl font-serif text-oath-gold tracking-wide uppercase">
          Protagonist, Catalyst, Antagonist
        </h2>
        <div className="w-24 h-1 bg-oath-crimson mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <CharacterCard 
          image="https://picsum.photos/id/64/800/1200"
          name="Gemria"
          role="The Protagonist"
          description="A woman with a hidden past, navigating a web of lies to protect—or ignite—something truly holy."
        />
        <CharacterCard 
          image="https://picsum.photos/id/177/800/1200"
          name="Lescovarre"
          role="The Antagonist"
          description="Master of whispers and court intrigue. To him, the stakes are not souls, but the very survival of nations."
        />
        <CharacterCard 
          image="https://picsum.photos/id/338/800/1200"
          name="Grizmund"
          role="The Catalyst"
          description="The iron fist of faith. His devotion is as unyielding as the blade he carries in the King's name."
        />
      </div>
    </section>
  );
};

export default CastSection;
