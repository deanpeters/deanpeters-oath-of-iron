
import React, { useEffect } from 'react';
import { ChevronLeft, ArrowRight } from 'lucide-react';

interface CastMember {
  id: string;
  name: string;
  role: string;
  label: string;
  pullQuote: string;
  significance: string;
  image: string;
}

const castRegistry: CastMember[] = [
  {
    id: 'gemria',
    name: 'Princess Gemria MacKendree',
    role: 'THE PROTAGONIST',
    label: 'Weapon Forged in Prayer',
    pullQuote: '"A fallen princess of Bonnie Brooke who refuses to break under the tyranny of Prince Lescovarre."',
    significance: 'She embodies the theme of resilient faith, moving through various disguises (cripple, corpse, nun, monk) to survive and retrieve the document that proves her family’s royal claim.',
    image: 'https://picsum.photos/id/64/800/1200'
  },
  {
    id: 'lescovarre',
    name: 'Prince Phillipe Lescovarre',
    role: 'THE ANTAGONIST',
    label: 'The Usurper',
    pullQuote: '"A tyrant who rules Bonnie Brooke with an iron fist, justifying his cruelty through a twisted \'theology of tyranny\'."',
    significance: 'He weaponizes Scripture to claim divine right, creating the primary theological and physical conflict as he obsessively hunts Gemria.',
    image: 'https://picsum.photos/id/177/800/1200'
  },
  {
    id: 'grizmund',
    name: 'Grizmund',
    role: 'THE HUNTER',
    label: 'The Deadliest Asset',
    pullQuote: '"A clinical, hawk-eyed mercenary and assassin hired to track Gemria from the Highlands to the deserts of Sikkina."',
    significance: 'He represents secular pragmatism and clinical skill; his cold exterior only breaks when Gemria mentions "Davena," a tragic figure from his past.',
    image: 'https://picsum.photos/id/338/800/1200'
  },
  {
    id: 'luke',
    name: 'Prince Luke MacKendree',
    role: 'THE SCHOLAR',
    label: 'The Spiritual Anchor',
    pullQuote: '"Gemria’s youngest brother and primary companion during the Act 2 pursuit."',
    significance: 'A scholarly, observant monk who finds the hand of God in history and secures the vital family document from Cardinal Graysen. He provides the biblical grounding for survival.',
    image: 'https://picsum.photos/id/101/800/1200'
  },
  {
    id: 'daniel',
    name: 'Prince Daniel MacKendree',
    role: 'THE HEIR',
    label: 'Red-Haired Leader',
    pullQuote: '"The sturdy eldest brother leading the MacKendree family in exile."',
    significance: 'He struggles with perceived \'softness\' and failures while his father is ransomed. He leads the daring rescue at Thrushkill and represents the burden of earthly leadership.',
    image: 'https://picsum.photos/id/222/800/1200'
  },
  {
    id: 'falco',
    name: 'Thomas Falco',
    role: 'THE LOYAL KNIGHT',
    label: 'Devoted Protector',
    pullQuote: '"A weary but devoted protector of the royal family."',
    significance: 'A key resistor who acts as a spy and buffer between the princes and Lescovarre’s forces. His conflict lies in his soul-weariness and his secret love for Emily.',
    image: 'https://picsum.photos/id/250/800/1200'
  },
  {
    id: 'judar',
    name: 'Sheikh Judar',
    role: 'THE UNEXPECTED ALLY',
    label: 'Man of Mystery',
    pullQuote: '"The leader of Sikkina and a powerful Saracen leader who initially appears as a threat."',
    significance: 'He represents the theme of cross-faith collaboration, ultimately becoming an ally to the MacKendrees against their common enemies.',
    image: 'https://picsum.photos/id/111/800/1200'
  }
];

interface CastHubSubpageProps {
  onBack: () => void;
  onSelectCharacter: (id: string) => void;
}

const CastHubSubpage: React.FC<CastHubSubpageProps> = ({ onBack, onSelectCharacter }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="animate-fade-in min-h-screen bg-[#050505] pb-32 selection:bg-oath-crimson selection:text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        {/* Navigation Entry Point */}
        <nav className="mb-20 flex items-center gap-4">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-oath-text/50 hover:text-oath-gold transition-colors group"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Exit Registry
          </button>
          <div className="h-px w-8 bg-oath-border" />
          <span className="text-xs uppercase tracking-widest text-oath-gold font-bold">Royal Registry</span>
        </nav>

        {/* 1A. The Axis Header */}
        <header className="mb-32 space-y-8 animate-in fade-in slide-in-from-top-4 duration-700">
          <h1 className="text-6xl md:text-8xl font-serif font-black text-oath-gold uppercase tracking-tighter leading-[0.9] gold-gradient-text">
            THE CAST <br className="hidden md:block" /> OF THE KINGDOM
          </h1>
          <p className="max-w-2xl font-narrative text-2xl lg:text-3xl italic text-oath-cream/70 leading-relaxed">
            Dossiers of the souls defined by prayer, iron, and the weight of the crown in the conflict of 1387.
          </p>
        </header>

        {/* 2. Interactive Spacing & Spine Logic */}
        <div className="relative pl-0 md:pl-20">
          {/* The Spine Line: 2px vertical positioned exactly 2rem (left-8) from edge on md+ */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-oath-gold/30 to-transparent timeline-spine" />

          <div className="space-y-24 md:space-y-32">
            {castRegistry.map((member) => (
              <div 
                key={member.id}
                onClick={() => onSelectCharacter(member.id)}
                className="group relative flex flex-col md:flex-row items-stretch md:items-center gap-8 md:gap-0 cursor-pointer border border-transparent hover:border-oath-gold/10 p-4 md:p-0 rounded-2xl transition-all duration-500 timeline-card"
              >
                {/* The Timeline Dot: 12px gold circular dot pinning each row */}
                <div className="hidden md:block absolute left-[-52px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#050505] border-2 border-oath-gold z-20 timeline-dot shadow-[0_0_10px_rgba(212,175,55,0.4)] transition-all group-hover:scale-150 group-hover:bg-oath-gold" />

                {/* Zone 1: Role Metadata (16.6% Width) */}
                <div className="md:w-1/6 flex flex-col justify-center space-y-1">
                  <span className="text-oath-crimson font-black text-[12px] tracking-[0.2em] font-serif">
                    {member.role}
                  </span>
                  <span className="text-oath-gold font-bold text-[9px] tracking-widest uppercase font-body opacity-80">
                    {member.label}
                  </span>
                </div>

                {/* Zone 2: Portrait Evidence (25% Width) */}
                <div className="md:w-1/4 h-80 md:h-64 relative rounded-xl overflow-hidden border border-white/5 group-hover:border-oath-gold/40 transition-all duration-500 shadow-2xl">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 brightness-[0.5] group-hover:brightness-[0.9] scale-100 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Zone 3: Narrative Dossier (50% Width) */}
                <div className="md:w-1/2 flex flex-col justify-center md:pl-16 space-y-4 relative">
                  <div className="space-y-1">
                    <h3 className="text-3xl lg:text-4xl font-serif font-black text-oath-gold uppercase tracking-wide group-hover:text-oath-cream transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-oath-gold/90 italic font-narrative text-xl lg:text-2xl">
                      {member.pullQuote}
                    </p>
                  </div>
                  
                  <p className="text-oath-cream/70 text-lg font-narrative leading-relaxed max-w-xl">
                    {member.significance}
                  </p>

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

export default CastHubSubpage;
