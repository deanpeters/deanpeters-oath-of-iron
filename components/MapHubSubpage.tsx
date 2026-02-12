
import React, { useEffect } from 'react';
import { ChevronLeft, ExternalLink, MapPin, Shield, Target } from 'lucide-react';

interface LocationSector {
  id: string;
  sector: string;
  name: string;
  status: string;
  suggestedVisual: string;
  lat: number;
  lng: number;
  strategicControl: string;
  geographicAnalogue: string;
  intel: string;
  tacticalNote: string;
  image: string;
}

const mapRegistry: LocationSector[] = [
  {
    id: 'iverleigh',
    sector: 'Sector 1',
    name: 'Iverleigh Castle',
    status: 'OCCUPIED',
    suggestedVisual: 'A cold, paranoid stone fortress dominated by long shadows and the "Sable Falcon" heraldry of Lescovarre.',
    lat: 55.6,
    lng: -4.5,
    strategicControl: 'Prince Phillipe Lescovarre',
    geographicAnalogue: 'Scottish Lowlands / Borderlands (55.6° N, 4.5° W)',
    intel: 'Once the beacon of the MacKendree line, it is now a den of dark thoughts where Lescovarre executes his own captains for failure.',
    tacticalNote: 'The site of Princess Gemria’s initial escape, setting the entire pursuit in motion.',
    image: 'https://picsum.photos/id/1041/900/1600'
  },
  {
    id: 'st-ives',
    sector: 'Sector 2',
    name: 'St. Ives & The Abbey',
    status: 'VIOLATED',
    suggestedVisual: 'A village of narrow, muddy alleys and a Lady Chapel where the shadow of a cross falls upon the stone walls.',
    lat: 55.4,
    lng: -4.6,
    strategicControl: 'Contested (Lescovarre occupation vs. Underground Resistance)',
    geographicAnalogue: 'Scottish Lowlands, South of Iverleigh (55.4° N, 4.6° W)',
    intel: 'The physician Jonas used a "third casket" in a funeral wagon to smuggle Gemria past the village gates.',
    tacticalNote: 'The resistance utilized a secret passage from the Abbey to evade Grizmund’s forces during the raid.',
    image: 'https://picsum.photos/id/1015/900/1600'
  },
  {
    id: 'bresbain',
    sector: 'Sector 3',
    name: 'The City of Bresbain',
    status: 'INFILTRATED',
    suggestedVisual: 'A sprawling city of towering cathedral spires and bustling marketplaces filled with exotic wares and thermal springs.',
    lat: 45.6,
    lng: 5.9,
    strategicControl: 'Neutral / Cardinal Graysen',
    geographicAnalogue: 'Southern France / Northern Italy analogue (45.6° N, 5.9° E)',
    intel: 'The location of the archives where Prince Luke successfully secured the document proving the family claim.',
    tacticalNote: 'Site of the spear duel where Grizmund successfully captured Gemria despite her spirited defense.',
    image: 'https://picsum.photos/id/1040/900/1600'
  },
  {
    id: 'thrushkill',
    sector: 'Sector 4',
    name: 'Thrushkill Fortress',
    status: 'FORTIFIED',
    suggestedVisual: 'A decaying, moss-covered stone fortress crumbling into a moat of stagnant, brown water.',
    lat: 44.0,
    lng: 4.0,
    strategicControl: 'Prince Phillipe Lescovarre',
    geographicAnalogue: 'Marshlands (44.0° N, 4.0° E)',
    intel: 'The fortress reflects Lescovarre\'s inner rot; he uses a "Trinity" scourge here to attempt to force Gemria’s submission.',
    tacticalNote: 'The MacKendrees executed a daring rescue involving a crossbow bolt and rope, allowing Gemria to slide to safety.',
    image: 'https://picsum.photos/id/1043/900/1600'
  },
  {
    id: 'sikkina',
    sector: 'Sector 5',
    name: 'Sikkina Oasis',
    status: 'HOSTILE',
    suggestedVisual: 'A mud-brick plateau fortress featuring four weathered towers jutting into a sunbaked sky.',
    lat: 31.6,
    lng: -8.0,
    strategicControl: 'Sheikh Judar',
    geographicAnalogue: 'Maghreb (North Africa) analogue (31.6° N, 8.0° W)',
    intel: 'Sheikh Judar is known to raid caravans and maintains a hidden force of assassins.',
    tacticalNote: 'Grizmund earned Judar\'s begrudging respect by identifying an assassin during their parley.',
    image: 'https://picsum.photos/id/1044/900/1600'
  },
  {
    id: 'saracen-camp',
    sector: 'Sector 6',
    name: 'The Saracen Camp',
    status: 'CAPTURED',
    suggestedVisual: 'Numerous domed tents in the deep desert lit by torches, surrounded by masked warriors in chain mail.',
    lat: 28.0,
    lng: -10.0,
    strategicControl: 'Saracen Tribes / The Masked Leader',
    geographicAnalogue: 'Deep Sahara / Sinai analogue (28.0° N, 10.0° W)',
    intel: 'These warriors represent the "White Lion" prophecy—unexpected allies rather than obstacles.',
    tacticalNote: 'The unveiling of Gemria\'s true identity occurred here when the leader removed her monk\'s hood.',
    image: 'https://picsum.photos/id/1045/900/1600'
  }
];

interface MapHubSubpageProps {
  onBack: () => void;
}

const MapHubSubpage: React.FC<MapHubSubpageProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openInGoogleMaps = (lat: number, lng: number) => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`, '_blank');
  };

  return (
    <div className="animate-in fade-in zoom-in-95 duration-700 min-h-screen bg-oath-bg pb-48 selection:bg-oath-crimson selection:text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        {/* Navigation Layer */}
        <nav className="mb-12 flex items-center gap-4">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-oath-text/50 hover:text-oath-gold transition-colors group"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Exit Strategy
          </button>
          <div className="h-px w-8 bg-oath-border" />
          <span className="text-xs uppercase tracking-widest text-oath-gold font-bold">Tactical Cartography</span>
        </nav>

        {/* 1. The Strategic Briefing Stack */}
        <div className="space-y-16 mb-32">
          {/* A. Archivist Note */}
          <div className="max-w-6xl mx-auto relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-oath-gold/30 rounded-full" />
            <div className="bg-black py-12 px-10 md:px-16 rounded-r-2xl border border-white/5 shadow-2xl">
              <h5 className="font-serif text-oath-gold text-2xl uppercase tracking-[0.3em] mb-6 flex items-center gap-4">
                <Shield className="w-6 h-6 text-oath-gold" />
                Strategic Briefing: MacKendree Flight
              </h5>
              <p className="font-narrative text-2xl text-[#b8b3aa] leading-relaxed italic opacity-85">
                The map before you is more than a geographic reference; it is a <strong className="text-oath-gold">Tactical Briefing</strong> recovered from the MacKendree resistance. It bears the physical scars of the journey—the damp-stained edges of the Scottish Highlands and the grit-blasted vellum of the Sikkina desert. As you navigate the path from the fallen throne of <span className="text-oath-cream">Bonnie Brooke</span> to the <span className="text-oath-cream">Saracen</span> camps of the South, note the shifting sigils: where the <strong className="text-oath-crimson">Cross</strong> marks a sanctuary, the <strong className="text-oath-gold">Sable Falcon</strong> marks an occupation.
              </p>
            </div>
          </div>

          {/* B. Strategic Header (Side-by-Side) */}
          <div className="grid grid-cols-1 md:grid-cols-10 gap-8 items-stretch">
            <div className="md:col-span-6 relative rounded-2xl overflow-hidden border border-oath-border shadow-2xl">
              <img 
                src="https://picsum.photos/id/1041/1900/600" 
                alt="Tactical Visualization" 
                className="w-full h-full object-cover grayscale-[0.6] brightness-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8">
                <p className="text-xs uppercase tracking-[0.4em] text-oath-gold font-black">Region Analysis Record</p>
                <h2 className="text-3xl font-serif text-oath-text uppercase">Continental Flight Pattern</h2>
              </div>
            </div>

            <div className="md:col-span-4">
              <div className="bg-oath-charcoal/95 border border-oath-border rounded-2xl p-8 h-full flex flex-col justify-between">
                <div>
                  <h4 className="text-xs uppercase tracking-[0.4em] text-oath-gold font-bold border-b border-oath-border pb-4 mb-6">Strategic Intelligence</h4>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center py-2 border-b border-white/5">
                      <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Region</span>
                      <span className="text-sm font-semibold text-oath-cream uppercase tracking-wide">The MacKendree Flight</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-white/5">
                      <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Scale</span>
                      <span className="text-sm font-semibold text-oath-cream uppercase tracking-wide">Bonnie Brooke to Sikkina</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-white/5">
                      <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Tactical Grip</span>
                      <span className="text-sm font-semibold text-oath-crimson uppercase tracking-wide">Contested Ground</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <a 
                    href="https://amzn.to/4kC2HpC"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-oath-crimson hover:bg-oath-crimson-bright text-white text-sm font-bold uppercase tracking-[0.2em] py-5 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(220,38,38,0.3)]"
                  >
                    Follow the Path
                    <ChevronLeft className="w-5 h-5 rotate-180" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* C. Geographical Pull Quote */}
          <div className="max-w-4xl mx-auto border-[3px] border-oath-crimson rounded-2xl py-12 px-10 text-center bg-black/40">
            <blockquote className="font-narrative text-3xl lg:text-4xl italic text-oath-gold leading-tight">
              "For he looked for a city which hath foundations, whose builder and maker is God."
            </blockquote>
            <p className="mt-6 text-xs tracking-widest text-oath-crimson font-black uppercase">HEBREWS 11:10 — THE PILGRIM'S ANCHOR</p>
          </div>
        </div>

        {/* 2. The Location Chronicle */}
        <div className="relative pl-0 md:pl-20">
          {/* The Spine Line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-oath-gold/30 to-transparent timeline-spine" />

          <div className="space-y-48">
            {mapRegistry.map((loc) => (
              <div 
                key={loc.id}
                className="group relative flex flex-col lg:flex-row items-start gap-12 lg:gap-0"
              >
                {/* The Timeline Dot */}
                <div className="hidden md:block absolute left-[-52px] top-12 w-3 h-3 rounded-full bg-oath-bg border-2 border-oath-gold z-20 timeline-dot shadow-[0_0_15px_rgba(212,175,55,0.4)]" />

                {/* Zone 1: Tactical Status (16.6% Width) */}
                <div className="lg:w-1/6 flex flex-col pt-12">
                  <span className="text-oath-crimson font-black text-xs tracking-[0.3em] uppercase mb-2">
                    STATUS: {loc.status}
                  </span>
                  <span className="text-oath-gold font-serif text-sm tracking-widest uppercase opacity-70">
                    {loc.sector}
                  </span>
                </div>

                {/* Main Content Spine Area (Combined Width for Top & Bottom) */}
                <div className="lg:w-5/6 flex flex-col space-y-12">
                  {/* Top Level: Image & Metadata Grid */}
                  <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
                    {/* Zone 2: Visual Evidence (Image Area) */}
                    <div className="lg:w-[35%] h-[370px] relative shrink-0 rounded-2xl overflow-hidden border border-white/10 shadow-2xl cursor-pointer" onClick={() => openInGoogleMaps(loc.lat, loc.lng)}>
                      <img 
                        src={loc.image} 
                        alt={loc.name} 
                        className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 brightness-[0.4] group-hover:brightness-[0.8] scale-100 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                      
                      {/* Google Maps Hover Indicator */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-sm">
                        <div className="bg-oath-gold text-oath-bg px-6 py-3 rounded-full font-bold uppercase tracking-widest text-[10px] flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          View Real-World Location
                          <ExternalLink className="w-4 h-4" />
                        </div>
                      </div>
                      
                      <div className="absolute bottom-6 left-6 flex items-center gap-2">
                        <Target className="w-4 h-4 text-oath-gold animate-pulse" />
                        <span className="text-[10px] uppercase tracking-widest text-oath-gold font-bold">Coordinate Locked</span>
                      </div>
                    </div>

                    {/* Zone 3: Strategic Meta Information */}
                    <div className="flex-grow space-y-8">
                      <div className="space-y-4">
                        <h3 className="text-5xl lg:text-7xl font-serif font-bold text-oath-gold uppercase tracking-tighter group-hover:text-oath-cream transition-colors duration-500">
                          {loc.name}
                        </h3>
                        <p className="text-oath-gold/90 italic font-narrative text-2xl lg:text-3xl leading-relaxed">
                          {loc.suggestedVisual}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-8 border-y border-white/5 py-8">
                        <div className="space-y-1">
                          <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Strategic Control</p>
                          <p className="text-sm font-serif text-oath-cream tracking-wide">{loc.strategicControl}</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Geographic Analogue</p>
                          <p className="text-sm font-serif text-oath-cream tracking-wide">{loc.geographicAnalogue}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Level: The Intel Box - Spanning Under Image & Info */}
                  <div className="w-full bg-black/40 border border-white/5 p-10 rounded-2xl space-y-8 shadow-inner">
                    <p className="text-oath-text/80 text-3xl font-narrative leading-relaxed">
                      {loc.intel}
                    </p>
                    <div className="pt-6 border-t border-white/5">
                      <p className="text-oath-cream text-2xl lg:text-3xl italic font-narrative leading-relaxed">
                        <span className="text-oath-crimson font-black text-[14px] tracking-[0.3em] uppercase mr-4 not-italic font-body">Tactical Note:</span>
                        {loc.tacticalNote}
                      </p>
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

export default MapHubSubpage;
