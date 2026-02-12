
import React from 'react';
import { ChevronLeft, Quote } from 'lucide-react';

interface LoreData {
  id: string;
  title: string;
  label: string;
  subhead: string;
  image: string;
  origin: string;
  category: string;
  scriptureBattle: string;
  scriptureVerse: string;
  historicalContext: string;
  culturalImplications: string;
  geographicalPresence: string;
  scriptureExpansion: string;
}

const loreEntries: Record<string, LoreData> = {
  'sacred-relics': {
    id: 'sacred-relics',
    label: 'The Artifact Dossier',
    title: 'Sacred Relics',
    subhead: 'When divinity is trapped in iron, the world burns to set it free.',
    image: 'https://picsum.photos/id/1041/1200/1600',
    origin: 'Jerusalem / Rome',
    category: 'Relic',
    scriptureBattle: 'REVELATION 13:10',
    scriptureVerse: '"He that leadeth into captivity shall go into captivity: he that killeth with the sword must be killed with the sword."',
    historicalContext: 'In the year 1387, the artifacts of the faith are more than just items of devotion; they are the ultimate currency of the Great Schism. As the dual papacies in Rome and Avignon struggle for legitimacy, the possession of a verified relic can sway the loyalty of entire nations. The Lost Seal of the Iron Lineage is whispered to be the primary relic that could unite the fractured Scottish clans under a single, divine banner.',
    culturalImplications: 'For the highland commoners, a relic is a source of hope and magic in a harsh world. To the imperial nobility, it is a legal document signed by God. This duality creates a market of blood where relics are stolen, forged, and fought over with a ferocity that matches any border raid.',
    geographicalPresence: 'The journey of these sacred objects traces a line from the sun-bleached stones of the Holy Land to the damp, torch-lit corridors of St. Ives. They travel through hidden networks of pilgrims and crusaders, often crossing borders that armies cannot penetrate.',
    scriptureExpansion: 'The theological duel surrounding the relics centers on the interpretation of captivity. Does the physical possession of a relic grant spiritual authority, or is the true "sword" a metaphor for the faith itself? The Church warns that those who weaponize these artifacts risk a divine retribution that no castle wall can withstand.'
  },
  'political-unrest': {
    id: 'political-unrest',
    label: 'The Social Dossier',
    title: 'Political Unrest',
    subhead: 'A throne built on whispers is easily toppled by a single shout.',
    image: 'https://picsum.photos/id/1015/1200/1600',
    origin: 'London / Edinburgh',
    category: 'Social Conflict',
    scriptureBattle: 'ROMANS 13:1',
    scriptureVerse: '"Let every soul be subject unto the higher powers. For there is no power but of God."',
    historicalContext: 'The 14th century is a time of decaying feudalism and the violent birth of national identity. In the Kingdom, the King\'s authority is challenged by a rising merchant class and disgruntled marcher lords who feel the throne has abandoned them to the shadows. This unrest is not merely about taxes; it is a fundamental questioning of the "divine right" that has held society together for centuries.',
    culturalImplications: 'Commoners find themselves caught between their traditional oaths to local lords and a growing sense of individual agency. This results in localized rebellions that are often suppressed with brutal efficiency, yet the embers of dissent continue to glow in every tavern and marketplace.',
    geographicalPresence: 'From the bustling docks of London to the fortified keeps of the Scottish borders, the unrest flows through the veins of the Kingdom. It is a map of tension, marked by burning effigies and secret meetings in the Highlands.',
    scriptureExpansion: 'The "Scripture Battle" here focuses on the definition of "higher powers." The Crown argues for absolute submission, while the dissident theologians argue that power is only "of God" if it is exercised with justice. This debate provides the intellectual gunpowder for the physical conflicts that define the era.'
  },
  'theological-schisms': {
    id: 'theological-schisms',
    label: 'The Faith Dossier',
    title: 'Theological Schisms',
    subhead: 'The sharpest blade is not made of steel, but of a verse used as a weapon.',
    image: 'https://picsum.photos/id/1040/1200/1600',
    origin: 'Avignon / St. Ives',
    category: 'Faith War',
    scriptureBattle: 'MATTHEW 10:34',
    scriptureVerse: '"Think not that I am come to send peace on earth: I came not to send peace, but a sword."',
    historicalContext: 'The Great Western Schism has left the Christian world with two Popes and zero certainty. In the remote abbey of St. Ives, this division takes on a deadly personal dimension. Scholars find themselves forced to choose between competing interpretations of scripture that have literal life-and-death consequences for the inhabitants of the Kingdom.',
    culturalImplications: 'Faith, once the unifying force of European life, has become a source of radical division. Families are split by theological preference, and the local clergy are often as much political agents as they are spiritual guides. The "Iron Lineage" becomes a third option—a secular-divine path that threatens both Avignon and Rome.',
    geographicalPresence: 'The schism manifests physically in the layout of towns—dual churches, competing monasteries, and the "Schism Gates" in major ports where pilgrims are vetted for their theological purity before entry.',
    scriptureExpansion: 'The "Weaponization of Peace" is the core battleground. Is the "sword" of Matthew a call to holy war or a warning of the division that truth inevitably brings? In the tunnels beneath St. Ives, this question is answered with blood as factions fight to control the definitive translation of the forbidden scrolls.'
  }
};

interface LoreDossierSubpageProps {
  loreId: string;
  onBack: () => void;
}

const LoreDossierSubpage: React.FC<LoreDossierSubpageProps> = ({ loreId, onBack }) => {
  const data = loreEntries[loreId] || loreEntries['sacred-relics'];

  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-12 py-12 animate-fade-in min-h-screen pb-32">
      {/* Navigation Layer */}
      <nav className="mb-12 flex items-center gap-4">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-xs uppercase tracking-widest text-oath-text/50 hover:text-oath-gold transition-colors group"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Return to Keys
        </button>
        <div className="h-px w-8 bg-oath-border" />
        <span className="text-xs uppercase tracking-widest text-oath-gold">{data.title}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
        {/* The Dossier Sidebar (Left Column) */}
        <aside className="md:col-span-4 lg:col-span-3">
          <div className="md:sticky md:top-24 space-y-8">
            <div className="rounded-2xl overflow-hidden border border-oath-gold/20 bg-oath-charcoal p-1 shadow-2xl">
              <img 
                src={data.image} 
                alt={data.title} 
                className="w-full aspect-[3/4] object-cover rounded-xl grayscale-[20%] brightness-75"
              />
            </div>

            <div className="bg-black/40 border border-oath-border rounded-xl p-6 space-y-6">
              <h4 className="text-[10px] uppercase tracking-widest text-oath-gold font-bold border-b border-oath-gold/10 pb-3">Key Attributes</h4>
              <div className="space-y-4">
                <div className="space-y-1">
                  <p className="text-[9px] uppercase tracking-tighter text-gray-500 font-bold">Origin Point</p>
                  <p className="text-xs font-semibold text-oath-cream">{data.origin}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[9px] uppercase tracking-tighter text-gray-500 font-bold">Lore Category</p>
                  <p className="text-xs font-semibold text-oath-cream">{data.category}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[9px] uppercase tracking-tighter text-oath-crimson font-bold">Primary Scripture Battle</p>
                  <p className="text-xs font-semibold text-oath-crimson">{data.scriptureBattle}</p>
                </div>
              </div>
            </div>

            {/* Primary Scripture Inset */}
            <div className="border-l-2 border-oath-crimson pl-6 py-2 italic text-sm text-oath-text/70 leading-relaxed font-narrative">
              {data.scriptureVerse}
            </div>
          </div>
        </aside>

        {/* Content Column (Right Column) */}
        <div className="md:col-span-8 lg:col-span-9 space-y-16">
          <header className="space-y-6">
            <span className="text-oath-crimson text-sm tracking-[0.4em] font-black uppercase block">
              {data.label}
            </span>

            <h1 className="text-6xl lg:text-[8rem] font-serif text-oath-gold tracking-tight leading-[0.9] gold-gradient-text">
              {data.title}
            </h1>
            
            <p className="text-2xl lg:text-3xl font-narrative italic text-oath-gold/80 font-light leading-relaxed">
              {data.subhead}
            </p>
          </header>

          <div className="space-y-16">
            {/* Historical Context */}
            <section className="space-y-6">
              <div className="flex items-center gap-4">
                <h3 className="font-serif text-oath-gold text-lg tracking-widest uppercase shrink-0">Historical Context</h3>
                <div className="h-px w-full bg-oath-gold/10" />
              </div>
              <p className="font-narrative text-3xl text-oath-cream/90 leading-loose">
                {data.historicalContext}
              </p>
            </section>

            {/* Cultural Implications */}
            <section className="space-y-6">
              <div className="flex items-center gap-4">
                <h3 className="font-serif text-oath-gold text-lg tracking-widest uppercase shrink-0">Cultural Implications</h3>
                <div className="h-px w-full bg-oath-gold/10" />
              </div>
              <p className="font-narrative text-3xl text-oath-cream/90 leading-loose">
                {data.culturalImplications}
              </p>
            </section>

            {/* Geographical Presence */}
            <section className="space-y-6">
              <div className="flex items-center gap-4">
                <h3 className="font-serif text-oath-gold text-lg tracking-widest uppercase shrink-0">Geographical Presence</h3>
                <div className="h-px w-full bg-oath-gold/10" />
              </div>
              <p className="font-narrative text-3xl text-oath-cream/90 leading-loose">
                {data.geographicalPresence}
              </p>
            </section>

            {/* The Scripture Battle (Expansion) */}
            <section className="bg-oath-charcoal border border-oath-crimson/20 rounded-2xl p-8 lg:p-12 space-y-8 shadow-inner">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-oath-crimson">
                  <Quote className="w-8 h-8 fill-current opacity-50" />
                  <h3 className="font-serif text-2xl tracking-widest uppercase">The Scripture Battle</h3>
                </div>
                <div className="w-full h-px bg-oath-crimson/10" />
              </div>
              <p className="font-narrative text-2xl text-oath-cream/80 leading-relaxed italic">
                {data.scriptureExpansion}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoreDossierSubpage;
