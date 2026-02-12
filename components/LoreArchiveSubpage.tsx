
import React from 'react';
import { ChevronLeft, ArrowRight, BookOpen } from 'lucide-react';

interface LoreArchiveSubpageProps {
  loreId: string;
  onBack: () => void;
}

const LoreArchiveSubpage: React.FC<LoreArchiveSubpageProps> = ({ loreId, onBack }) => {
  // Data for "Sacred Relics" lore entry
  const data = {
    title: 'Sacred Relics',
    subhead: 'When divinity is trapped in iron, the world burns to set it free.',
    image: 'https://picsum.photos/id/1041/1200/675', // 16:9 Landscape aspect ratio
    archivistNote: 'The following account was salvaged from the ruins of the scriptoria at St. Ives. It details why the Sacred Relics are vital to the survival of the Kingdom in 1387, contextualizing the items of devotion as the ultimate currency of the Great Schism.',
    stats: [
      { label: 'Origin Point', value: 'Jerusalem / Rome' },
      { label: 'Category', value: 'Artifact Dossier' },
      { label: 'Scripture Battle', value: 'REVELATION 13:10', critical: true }
    ],
    scripture: '"For iron is not born in the light, but forged in the dark. And so it is with the relics of kings, who must bleed to prove the metal of their soul."',
    sections: [
      {
        title: 'Historical Context',
        content: 'In the year 1387, the artifacts of the faith are more than just items of devotion; they are the ultimate currency of the Great Schism. As the dual papacies in Rome and Avignon struggle for legitimacy, the possession of a verified relic can sway the loyalty of entire nations. The Lost Seal of the Iron Lineage is whispered to be the primary relic that could unite the fractured Scottish clans under a single, divine banner.'
      },
      {
        title: 'Cultural Implications',
        content: 'For the highland commoners, a relic is a source of hope and magic in a harsh world. To the imperial nobility, it is a legal document signed by God. This duality creates a market of blood where relics are stolen, forged, and fought over with a ferocity that matches any border raid.'
      },
      {
        title: 'Geographical Presence',
        content: 'The journey of these sacred objects traces a line from the sun-bleached stones of the Holy Land to the damp, torch-lit corridors of St. Ives. They travel through hidden networks of pilgrims and crusaders, often crossing borders that armies cannot penetrate.'
      }
    ],
    scriptureBattle: {
      title: 'The Theological Duel',
      content: 'Lescovarre uses these relics as political leverage to enforce submission to the Crown, while Gemria seeks them to prove a lineage that predates the Schism. This dossier is a weaponized piece of history used to dismantle the legitimacy of the dual Popes.'
    }
  };

  return (
    <div className="animate-fade-in min-h-screen">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-12">
        {/* Navigation Layer - Exact Match to Prologue */}
        <nav className="mb-12 flex items-center gap-4">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-oath-text/50 hover:text-oath-gold transition-colors group"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Exit Archive
          </button>
          <div className="h-px w-8 bg-oath-border" />
          <span className="text-xs uppercase tracking-widest text-oath-gold">Lore Archive: {data.title}</span>
        </nav>

        {/* 1. Archivist Entry (The Bridge) - Exact Match to Prologue Dimensions */}
        <div className="max-w-4xl mx-auto mb-16 relative">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-oath-gold/30 rounded-full" />
          <div className="bg-black py-10 px-12 rounded-r-2xl border border-l-0 border-oath-border shadow-inner">
            <h5 className="font-serif text-oath-gold text-2xl uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
              <span className="w-3 h-3 bg-oath-gold rounded-full" />
              Archivist Entry: Record #1387-B
            </h5>
            <p className="font-narrative text-2xl text-[#b8b3aa] leading-[1.5] italic opacity-80">
              "{data.archivistNote}"
            </p>
          </div>
        </div>

        {/* 2. Tactical Header (Side-by-Side) - Exact Match to Prologue Dimensions & Landscape Image */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-8 mb-16 items-stretch">
          <div className="md:col-span-6 relative rounded-2xl overflow-hidden border border-oath-border">
            <img 
              src={data.image} 
              alt={data.title} 
              className="w-full h-full object-cover brightness-[0.4] grayscale-[30%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="text-xs uppercase tracking-[0.3em] text-oath-gold font-bold">Primary Visual Record</p>
              <h4 className="font-serif text-oath-text text-lg">EXT: ARTIFACT #1104</h4>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col justify-between">
            <div className="bg-oath-charcoal border border-oath-border rounded-2xl p-6 h-full flex flex-col justify-between">
              <h4 className="text-xs uppercase tracking-[0.4em] text-oath-gold font-bold border-b border-oath-border pb-4 mb-4">Tactical Intel Dossier</h4>
              
              <div className="space-y-4 flex-grow">
                {data.stats.map((item, idx) => (
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
                  Purchase Lore Archive
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Pull Quote (The Hook) - Exact Match to Prologue Dimensions */}
        <header className="max-w-4xl mx-auto mb-24 border-l-4 border-oath-crimson pl-8 py-6">
          <blockquote className="text-4xl font-narrative italic text-oath-gold leading-tight">
            {data.scripture}
          </blockquote>
          <p className="mt-4 text-xs tracking-widest text-oath-crimson font-bold uppercase">— THE BOOK OF IRON, 1:12</p>
        </header>

        {/* 4. Narrative Column & Scholarly Content */}
        <article className="max-w-4xl mx-auto space-y-16 pb-32">
          <header className="space-y-4">
            <span className="text-oath-crimson text-sm tracking-[0.4em] font-black uppercase">Lore Dossier</span>
            <h1 className="text-5xl lg:text-[5rem] font-serif text-oath-gold leading-[1.1] gold-gradient-text tracking-tight uppercase font-black">
              {data.title.split(' ')[0]} <br /> {data.title.split(' ')[1] || ''}
            </h1>
            <p className="text-3xl lg:text-4xl font-narrative italic text-oath-gold/60 font-light mt-12 leading-relaxed">
              {data.subhead}
            </p>
          </header>

          <div className="font-narrative text-2xl lg:text-3xl text-[#e0e0e0] leading-[1.8] space-y-24 pt-12">
            {data.sections.map((section, idx) => (
              <div key={idx} className="space-y-8">
                <div className="flex items-center gap-6">
                  <h3 className="text-2xl lg:text-3xl font-serif tracking-[0.2em] uppercase text-oath-gold font-bold shrink-0">{section.title}</h3>
                  <div className="h-px w-full bg-oath-gold/20" />
                </div>
                <p className="opacity-90 leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}

            {/* Closure Module - Enhanced Visibility */}
            <div className="relative rounded-[2.5rem] overflow-hidden bg-oath-charcoal border border-oath-crimson/30 p-12 lg:p-16 shadow-2xl mt-24">
              <div className="relative z-10 space-y-8">
                <div className="flex items-center gap-4 text-oath-crimson">
                  <BookOpen className="w-8 h-8" />
                  <h3 className="text-3xl lg:text-4xl font-serif uppercase tracking-widest">{data.scriptureBattle.title}</h3>
                </div>
                <p className="text-2xl lg:text-3xl text-oath-text leading-relaxed italic opacity-95">
                  {data.scriptureBattle.content}
                </p>
                <div className="pt-8">
                  <a 
                    href="https://amzn.to/4kC2HpC"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-6 bg-oath-crimson hover:bg-oath-crimson-bright text-white px-10 py-5 rounded-full font-bold uppercase tracking-[0.2em] transition-all hover:scale-105 crimson-glow text-lg"
                  >
                    Buy Book One
                    <ArrowRight className="w-6 h-6" />
                  </a>
                </div>
              </div>
              
              {/* Subtle background glow for the closure module */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-oath-crimson/5 blur-[80px] rounded-full pointer-events-none" />
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default LoreArchiveSubpage;
