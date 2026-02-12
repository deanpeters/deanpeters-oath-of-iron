
import React from 'react';
import { ChevronLeft, MapPin, Clock, Users, ArrowRight } from 'lucide-react';

interface JourneyData {
  id: string;
  title: string;
  image: string;
  time: string;
  location: string;
  actors: string[];
  context: string;
  proseSnippet: string;
  taunt: string;
}

const journeyEvents: Record<string, JourneyData> = {
  'beast-in-the-hall': {
    id: 'beast-in-the-hall',
    title: 'Beast in the Hall',
    image: 'https://picsum.photos/id/1018/800/1200',
    time: 'Late Autumn 1387',
    location: 'Dunmore Keep, Scotland',
    actors: ['Gemria', 'Lord Thorne', 'Grizmund'],
    context: 'The shadows grow long as an unexpected visitor arrives at Dunmore Keep. What was meant to be a simple diplomatic dinner quickly transforms into a test of iron and blood when an old secret finds its way into the Great Hall.',
    proseSnippet: 'The torchlight flickered violently as the doors groaned open. It was not a man who entered, but a memory wrapped in cold steel. Gemria felt the seal against her skin grow heavy, a warning that the hunt had truly begun. "He is here for the iron," she whispered, as the first blade was drawn.',
    taunt: 'When the beast demands the truth, will you surrender the seal or face the darkness in the hall?'
  },
  'coffin-at-the-gate': {
    id: 'coffin-at-the-gate',
    title: 'Coffin at the Gate',
    image: 'https://picsum.photos/id/1015/800/1200',
    time: 'Midwinter 1387',
    location: 'St. Ives Abbey Entrance',
    actors: ['Lescovarre', 'The Silent Sentinels'],
    context: 'A heavy mist clings to the valley floors as a funeral procession arrives at the Abbey gates. But there is no body in the coffin—only a truth that Lescovarre has spent decades trying to bury.',
    proseSnippet: 'The snow didn\'t melt on the black wood of the casket. It stood as a silent witness to the treason within. Lescovarre watched from the battlements, his fingers tightening on the stone. "Open the gate," he commanded, knowing that once this box entered the sanctuary, there would be no going back to the peace of lies.',
    taunt: 'Will you find the path through the kitchen vaults before the coffin reveals its deadly cargo?'
  },
  'ash-at-st-ives': {
    id: 'ash-at-st-ives',
    title: 'Ash at St. Ives',
    image: 'https://picsum.photos/id/1040/800/1200',
    time: 'Spring 1388',
    location: 'Ruins of the Scriptoria',
    actors: ['Gemria', 'The Scribe of Shadows'],
    context: 'Fire cleanses all, or so the Church believes. After the raid, only the ash remains of the forbidden scrolls. Gemria must sift through the embers of her history to find the one verse that can save the Kingdom.',
    proseSnippet: 'The air tasted of burnt vellum and ancient regrets. Gemria knelt amidst the blackened pages, her hands stained with the ink of lost centuries. Somewhere in this soot lay the map to the Iron Lineage, hidden by a scribe who knew the fire was coming.',
    taunt: 'The library is burning, and the secret is turning to smoke. Can you read the ash before it scatters?'
  },
  'abbey-breach': {
    id: 'abbey-breach',
    title: 'Abbey Breach',
    image: 'https://picsum.photos/id/1043/800/1200',
    time: 'Summer 1388',
    location: 'The Inner Sanctum',
    actors: ['Grizmund', 'The Knights of the Rose'],
    context: 'The final defenses crumble as the Iron Shields break through the sacred walls. Grizmund leads the charge into the heart of the Abbey, looking for the girl who carries the fate of the throne.',
    proseSnippet: 'The heavy oak shattered under the weight of the ram. It wasn\'t just a door breaking; it was the end of a sanctuary. Grizmund stepped over the threshold, his greatsword singing through the dusty air. "Find her," he roared, "before the Chancellor finds the key!"',
    taunt: 'The walls have fallen. Will you be the hunter or the prey in the corridors of faith?'
  },
  'the-captured-prize': {
    id: 'the-captured-prize',
    title: 'The Captured Prize',
    image: 'https://picsum.photos/id/1044/800/1200',
    time: 'Autumn 1388',
    location: 'High Chancellor\'s Tower',
    actors: ['Lescovarre', 'Gemria'],
    context: 'The game of whispers reaches its climax as Gemria is brought before Lescovarre in chains. But a prisoner with the truth is more dangerous than a Chancellor with an army.',
    proseSnippet: 'Lescovarre circled her like a wolf around a trapped fawn. He didn\'t see the iron dagger hidden in the folds of her gown, nor did he hear the tremor of victory in her silent defiance. "You have the seal," he sneered, "but you lack the blood to use it." Gemria only smiled.',
    taunt: 'The cage is locked, but the secret has already escaped. Can you turn your capture into a coup?'
  },
  'the-princes-claim': {
    id: 'the-princes-claim',
    title: 'The Prince\'s Claim',
    image: 'https://picsum.photos/id/1045/800/1200',
    time: 'Winter 1388',
    location: 'The Coronation Stone',
    actors: ['The Iron Lineage', 'The Kingdom'],
    context: 'At the ancient stone, the lineage of iron finally makes its stand. The fractured Kingdom watches as a new vow is sworn—one that will either unite the realm or destroy it forever.',
    proseSnippet: 'The crown of iron sat heavy on the stone, waiting for a head that could bear the weight of truth. As the sun broke over the Highland peaks, Gemria stepped forward. The silence was absolute. The kingdom was no longer a dream; it was a blood-stained reality.',
    taunt: 'The throne is waiting. Will you take the oath of iron or fall to the shadows of the past?'
  }
};

interface JourneySnapshotSubpageProps {
  journeyId: string;
  onBack: () => void;
}

const JourneySnapshotSubpage: React.FC<JourneySnapshotSubpageProps> = ({ journeyId, onBack }) => {
  const data = journeyEvents[journeyId] || journeyEvents['beast-in-the-hall'];

  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-12 py-12 animate-fade-in min-h-screen pb-32">
      {/* Navigation Layer */}
      <nav className="mb-12 flex items-center gap-4">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-xs uppercase tracking-widest text-oath-text/50 hover:text-oath-gold transition-colors group"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Journey
        </button>
        <div className="h-px w-8 bg-oath-border" />
        <span className="text-xs uppercase tracking-widest text-oath-gold">{data.title}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
        {/* The Event Sidebar (Left Column) */}
        <aside className="md:col-span-4 lg:col-span-3">
          <div className="md:sticky md:top-24 space-y-8">
            <div className="rounded-2xl overflow-hidden border border-oath-border bg-oath-charcoal p-1 shadow-2xl">
              <img 
                src={data.image} 
                alt={data.title} 
                className="w-full aspect-[3/4] object-cover rounded-xl grayscale-[20%] brightness-75"
              />
            </div>

            <div className="bg-oath-charcoal border border-oath-border rounded-xl p-6 space-y-6">
              <h4 className="text-[10px] uppercase tracking-widest text-oath-gold font-bold border-b border-oath-gold/10 pb-3">Event Log</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-oath-crimson shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <p className="text-[9px] uppercase tracking-tighter text-gray-500 font-bold">Point in Time</p>
                    <p className="text-xs font-semibold text-oath-cream">{data.time}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-oath-crimson shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <p className="text-[9px] uppercase tracking-tighter text-gray-500 font-bold">Location</p>
                    <p className="text-xs font-semibold text-oath-cream">{data.location}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-4 h-4 text-oath-crimson shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <p className="text-[9px] uppercase tracking-tighter text-gray-500 font-bold">Primary Actors</p>
                    <p className="text-xs font-semibold text-oath-cream">{data.actors.join(', ')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Narrative Column (Right Column) */}
        <div className="md:col-span-8 lg:col-span-9 space-y-12">
          <header className="space-y-6">
            <span className="text-oath-crimson text-sm tracking-[0.4em] font-black uppercase block">
              A Narrative Snapshot
            </span>
            <h1 className="text-6xl lg:text-8xl font-serif text-oath-gold tracking-tight leading-none gold-gradient-text">
              {data.title}
            </h1>
          </header>

          <div className="space-y-12">
            {/* The Context Section */}
            <div className="prose prose-invert max-w-none">
              <p className="font-narrative text-xl text-oath-cream/90 leading-loose">
                {data.context}
              </p>
            </div>

            {/* The Prose Snippet (The "Hook") */}
            <div className="border-y border-oath-gold/10 py-10 lg:py-16">
              <p className="font-narrative text-2xl lg:text-[1.75rem] italic text-[#d1d1d1] leading-relaxed text-center px-4 lg:px-12">
                {data.proseSnippet}
              </p>
            </div>

            {/* The Challenge Box (The CTA) */}
            <div className="bg-oath-charcoal border border-oath-crimson/30 rounded-2xl p-8 lg:p-12 space-y-8 shadow-2xl relative overflow-hidden group">
              {/* Subtle ambient glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-oath-crimson/5 to-transparent pointer-events-none" />
              
              <div className="relative z-10 text-center space-y-8">
                <h3 className="font-serif text-2xl lg:text-3xl text-oath-gold italic leading-relaxed">
                  {data.taunt}
                </h3>
                
                <div className="flex flex-col items-center gap-4">
                  <a 
                    href="https://amzn.to/4kC2HpC"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-oath-crimson hover:bg-oath-crimson-bright text-white px-10 py-4 rounded-md font-bold uppercase tracking-widest text-sm transition-all flex items-center gap-3 crimson-glow"
                  >
                    Find out in Book One
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <p className="text-[10px] text-oath-text/40 uppercase tracking-widest font-bold">
                    Join the Journey on Amazon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneySnapshotSubpage;
