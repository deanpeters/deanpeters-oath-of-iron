
import React from 'react';
import { Cross, Castle, Scroll } from 'lucide-react';

interface KeyCardProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  onSelect: (id: string) => void;
}

const KeyCard: React.FC<KeyCardProps> = ({ id, icon, title, description, onSelect }) => (
  <div 
    onClick={() => onSelect(id)}
    className="bg-oath-surface border border-oath-border rounded-xl p-8 space-y-6 transition-all duration-300 hover:-translate-y-2 gold-border-glow group cursor-pointer"
  >
    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-oath-crimson/10 text-oath-crimson group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <div className="space-y-3">
      <h3 className="font-serif text-oath-gold text-xl tracking-wider uppercase">{title}</h3>
      <p className="text-oath-text/80 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

interface KeysSectionProps {
  onSelectLore: (id: string) => void;
}

const KeysSection: React.FC<KeysSectionProps> = ({ onSelectLore }) => {
  return (
    <section id="keys" className="space-y-16">
      <div className="text-center space-y-4">
        <h2 className="text-3xl lg:text-4xl font-serif text-oath-gold tracking-wide uppercase">
          Keys to the Kingdom
        </h2>
        <div className="w-24 h-1 bg-oath-crimson mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <KeyCard 
          id="sacred-relics"
          icon={<Cross className="w-6 h-6" />}
          title="Sacred Relics"
          description="Ancient artifacts holding power to break empires or define royal lineage. Sought by popes and kings alike."
          onSelect={onSelectLore}
        />
        <KeyCard 
          id="political-unrest"
          icon={<Castle className="w-6 h-6" />}
          title="Political Unrest"
          description="A fractured kingdom where loyalty is bought with gold or blood. The throne sits atop a nest of vipers."
          onSelect={onSelectLore}
        />
        <KeyCard 
          id="theological-schisms"
          icon={<Scroll className="w-6 h-6" />}
          title="Theological Schisms"
          description="The thin line between faith and corruption. Forbidden scrolls whisper of truths the Church would see buried."
          onSelect={onSelectLore}
        />
      </div>
    </section>
  );
};

export default KeysSection;
