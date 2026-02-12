
import React from 'react';
import { ChevronLeft, Shield } from 'lucide-react';

interface CharacterData {
  id: string;
  name: string;
  role: string;
  image: string;
  affiliation: string;
  status: string;
  weapon: string;
  traits: string[];
  pullQuote: string;
  biography: string;
}

const characters: Record<string, CharacterData> = {
  gemria: {
    id: 'gemria',
    name: 'Gemria',
    role: 'The Protagonist',
    image: 'https://picsum.photos/id/64/800/1200',
    affiliation: 'The Hidden Lineage',
    status: 'Active',
    weapon: 'Iron Dagger & Wit',
    traits: ['Resilient', 'Calculating', 'Enigmatic'],
    pullQuote: 'A fractured memory is still a weapon if you sharpen the edges.',
    biography: `Born into the velvet shadows of a fallen house, Gemria was raised on stories of a kingdom that no longer existed. Her childhood was defined by the scent of old parchment and the cold touch of iron. By the age of nineteen, she had mastered the art of being invisible in a room full of kings.

When the Great Schism threatened to tear the holy city of St. Ives apart, Gemria found herself at the center of a conspiracy that spanned three generations. Tasked with retrieving the Lost Seal of the Iron Lineage, she must navigate a world where a whisper in the confessional is more dangerous than a blade in the dark.

Her journey is not one of glory, but of survival and the heavy cost of truth. As she uncovers the secrets buried beneath the cathedral's stone floors, Gemria realizes that her own blood might be the very key the Church has spent centuries trying to erase.`
  },
  lescovarre: {
    id: 'lescovarre',
    name: 'Lescovarre',
    role: 'The Antagonist',
    image: 'https://picsum.photos/id/177/800/1200',
    affiliation: 'Council of Whispers',
    status: 'High Chancellor',
    weapon: 'Political Influence',
    traits: ['Machiavellian', 'Brilliant', 'Ruthless'],
    pullQuote: 'Faith is a tool for the masses; power is the tool for the few.',
    biography: `Lescovarre did not rise to power through noble birth, but through the systematic elimination of anyone who stood in his path. As the High Chancellor to a weakening King, he has effectively become the architect of the realm's future. 

He believes that order can only be maintained through absolute control and that the myths of "divine right" are merely useful narratives for keeping the commoners in line. When the protagonist threatens to reveal a truth that could dismantle his carefully constructed order, Lescovarre deploys every resource at his disposal to ensure the status quo remains unchanged.`
  },
  grizmund: {
    id: 'grizmund',
    name: 'Grizmund',
    role: 'The Catalyst',
    image: 'https://picsum.photos/id/338/800/1200',
    affiliation: 'Order of the Iron Shield',
    status: 'Knight Commander',
    weapon: 'Heirloom Greatsword',
    traits: ['Loyal', 'Relentless', 'Devout'],
    pullQuote: 'My oath is not to the man on the throne, but to the blood that put him there.',
    biography: `Grizmund is the physical manifestation of the Kingdom's ancient laws. As the last Knight Commander of a forgotten order, his loyalty is to the lineage of iron, not the politics of the day. His unexpected encounter with Gemria serves as the catalyst for the entire story, as he recognizes a familiar fire in her eyes that he hasn't seen in decades.

His choice to protect her sets off a chain reaction that forces the Kingdom into open conflict, forcing everyone to choose between the safety of the present and the justice of the past.`
  }
};

interface CharacterSubpageProps {
  characterId: string;
  onBack: () => void;
  onSelectCharacter: (id: string) => void;
}

const CharacterSubpage: React.FC<CharacterSubpageProps> = ({ characterId, onBack, onSelectCharacter }) => {
  const character = characters[characterId] || characters['gemria'];

  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-12 py-12 animate-fade-in min-h-screen">
      {/* Navigation Layer */}
      <nav className="mb-12 flex items-center gap-4">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-xs uppercase tracking-widest text-oath-text/50 hover:text-oath-gold transition-colors group"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Cast
        </button>
        <div className="h-px w-8 bg-oath-border" />
        <span className="text-xs uppercase tracking-widest text-oath-gold">{character.name}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
        {/* The Dossier (Left Column) */}
        <aside className="md:col-span-4 lg:col-span-3">
          <div className="md:sticky md:top-24 space-y-8">
            <div className="rounded-2xl overflow-hidden border border-oath-gold/20 bg-oath-charcoal p-1 shadow-2xl">
              <img 
                src={character.image} 
                alt={character.name} 
                className="w-full aspect-[3/4] object-cover rounded-xl"
              />
            </div>

            <div className="bg-oath-charcoal border border-oath-border rounded-xl p-6 space-y-6">
              <div className="space-y-4">
                <div className="space-y-1">
                  <p className="text-[10px] uppercase tracking-tighter text-gray-500 font-bold">Affiliation</p>
                  <p className="text-sm font-semibold text-oath-cream">{character.affiliation}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] uppercase tracking-tighter text-gray-500 font-bold">Status</p>
                  <p className="text-sm font-semibold text-oath-cream">{character.status}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] uppercase tracking-tighter text-gray-500 font-bold">Primary Weapon</p>
                  <p className="text-sm font-semibold text-oath-cream">{character.weapon}</p>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Narrative Core (Right Column) */}
        <div className="md:col-span-8 lg:col-span-9 space-y-12">
          <header className="space-y-6">
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-oath-crimson text-xs tracking-[0.4em] font-black uppercase">
                {character.role}
              </span>
              <div className="flex gap-2">
                {character.traits.map(trait => (
                  <span key={trait} className="px-3 py-1 bg-oath-gold/10 border border-oath-gold/20 rounded-full text-[10px] uppercase tracking-widest text-oath-gold">
                    {trait}
                  </span>
                ))}
              </div>
            </div>

            <h1 className="text-6xl lg:text-8xl font-serif text-oath-gold tracking-tight leading-none">
              {character.name}
            </h1>
            
            <p className="text-2xl lg:text-3xl font-narrative italic text-oath-text/80 font-light leading-relaxed">
              "{character.pullQuote}"
            </p>
          </header>

          <div className="prose prose-invert max-w-none">
            <div className="font-narrative text-xl text-oath-cream leading-loose space-y-8 whitespace-pre-wrap opacity-90">
              {character.biography}
            </div>
          </div>

          {/* Other Key Players Grid */}
          <div className="pt-16 border-t border-oath-border space-y-8">
            <h3 className="font-serif text-oath-gold text-lg tracking-widest uppercase">Other Key Players</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {Object.values(characters)
                .filter(c => c.id !== character.id)
                .map(other => (
                  <div 
                    key={other.id}
                    onClick={() => onSelectCharacter(other.id)}
                    className="group cursor-pointer space-y-3"
                  >
                    <div className="aspect-[3/4] rounded-lg overflow-hidden border border-oath-border transition-all duration-500 hover:border-oath-gold/30">
                      <img 
                        src={other.image} 
                        alt={other.name} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                      />
                    </div>
                    <div>
                      <p className="text-[10px] text-oath-crimson font-bold uppercase tracking-widest">{other.role.split(' ').pop()}</p>
                      <p className="font-serif text-sm text-oath-gold group-hover:text-oath-cream transition-colors">{other.name}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterSubpage;
