
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import KeysSection from './components/KeysSection';
import CastSection from './components/CastSection';
import JourneySection from './components/JourneySection';
import FooterCTA from './components/FooterCTA';
import Footer from './components/Footer';
import CharacterSubpage from './components/CharacterSubpage';
import LoreDossierSubpage from './components/LoreDossierSubpage';
import JourneySnapshotSubpage from './components/JourneySnapshotSubpage';
import PrologueSubpage from './components/PrologueSubpage';
import LoreArchiveSubpage from './components/LoreArchiveSubpage';
import JourneyHubSubpage from './components/JourneyHubSubpage';
import CastHubSubpage from './components/CastHubSubpage';
import MapHubSubpage from './components/MapHubSubpage';

const App: React.FC = () => {
  const [selectedCharacterId, setSelectedCharacterId] = useState<string | null>(null);
  const [selectedLoreId, setSelectedLoreId] = useState<string | null>(null);
  const [selectedJourneyId, setSelectedJourneyId] = useState<string | null>(null);
  const [isPrologueVisible, setIsPrologueVisible] = useState(false);
  const [selectedArchiveKey, setSelectedArchiveKey] = useState<string | null>(null);
  const [isJourneyHubVisible, setIsJourneyHubVisible] = useState(false);
  const [isCastHubVisible, setIsCastHubVisible] = useState(false);
  const [isMapHubVisible, setIsMapHubVisible] = useState(false);

  // Sync hash with state for deep linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      
      // Clean up states before setting new one to avoid visual glitches
      setSelectedCharacterId(null);
      setSelectedLoreId(null);
      setSelectedJourneyId(null);
      setIsPrologueVisible(false);
      setSelectedArchiveKey(null);
      setIsJourneyHubVisible(false);
      setIsCastHubVisible(false);
      setIsMapHubVisible(false);

      if (hash === '#/map') {
        setIsMapHubVisible(true);
      } else if (hash === '#/cast') {
        setIsCastHubVisible(true);
      } else if (hash.startsWith('#/cast/')) {
        setSelectedCharacterId(hash.replace('#/cast/', ''));
      } else if (hash.startsWith('#/lore/')) {
        setSelectedLoreId(hash.replace('#/lore/', ''));
      } else if (hash.startsWith('#/key/')) {
        setSelectedArchiveKey(hash.replace('#/key/', ''));
      } else if (hash === '#/journey') {
        setIsJourneyHubVisible(true);
      } else if (hash.startsWith('#/journey/')) {
        setSelectedJourneyId(hash.replace('#/journey/', ''));
      } else if (hash === '#/prologue') {
        setIsPrologueVisible(true);
      }
      
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Check on initial load
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleBackToLanding = () => {
    window.location.hash = '';
  };

  const handleSelectCharacter = (id: string) => {
    window.location.hash = `#/cast/${id}`;
  };

  const handleSelectLore = (id: string) => {
    window.location.hash = `#/lore/${id}`;
  };

  const handleSelectJourney = (id: string) => {
    window.location.hash = `#/journey/${id}`;
  };

  const handleOpenPrologue = () => {
    window.location.hash = `#/prologue`;
  };

  const handleExploreLore = () => {
    window.location.hash = `#/key/relics`;
  };

  const handleOpenJourneyHub = () => {
    window.location.hash = `#/journey`;
  };

  const handleOpenCastHub = () => {
    window.location.hash = `#/cast`;
  };

  const handleOpenMapHub = () => {
    window.location.hash = `#/map`;
  };

  // Render Strategy: Conditional rendering based on high-level navigation state
  const renderSubpage = () => {
    if (isMapHubVisible) return <MapHubSubpage onBack={handleBackToLanding} />;
    if (selectedArchiveKey) return <LoreArchiveSubpage loreId={selectedArchiveKey} onBack={handleBackToLanding} />;
    if (isPrologueVisible) return <PrologueSubpage onBack={handleBackToLanding} />;
    if (isJourneyHubVisible) return <JourneyHubSubpage onBack={handleBackToLanding} onSelectEvent={handleSelectJourney} />;
    if (isCastHubVisible) return <CastHubSubpage onBack={handleBackToLanding} onSelectCharacter={handleSelectCharacter} />;
    if (selectedCharacterId) return <CharacterSubpage characterId={selectedCharacterId} onBack={handleOpenCastHub} onSelectCharacter={handleSelectCharacter} />;
    if (selectedLoreId) return <LoreDossierSubpage loreId={selectedLoreId} onBack={handleBackToLanding} />;
    if (selectedJourneyId) return <JourneySnapshotSubpage journeyId={selectedJourneyId} onBack={handleOpenJourneyHub} />;
    
    return null;
  };

  const subpage = renderSubpage();

  if (subpage) {
    return (
      <div className="min-h-screen bg-oath-iron relative selection:bg-oath-crimson selection:text-white">
        <div className="fixed inset-0 pointer-events-none cinematic-vignette opacity-50 z-0" />
        <div className="relative z-10 flex flex-col min-h-screen">
          <div className="flex-grow">
            {subpage}
          </div>
          <Footer />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-oath-bg relative overflow-x-hidden selection:bg-oath-crimson selection:text-white">
      <div className="fixed inset-0 pointer-events-none cinematic-vignette opacity-50 z-0" />
      
      <div className="relative z-10 flex flex-col">
        <Navbar 
          onNavigateJourney={handleOpenJourneyHub} 
          onNavigateCast={handleOpenCastHub}
          onNavigateMap={handleOpenMapHub}
        />
        
        <main>
          <Hero 
            onOpenPrologue={handleOpenPrologue} 
            onExploreLore={handleExploreLore} 
            onViewJourney={handleOpenJourneyHub}
            onViewMap={handleOpenMapHub}
          />
          
          <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-32 lg:space-y-48 py-24">
            <KeysSection onSelectLore={handleSelectLore} />
            <CastSection 
              onSelectCharacter={handleSelectCharacter} 
              onViewAllCast={handleOpenCastHub} 
            />
            <JourneySection onSelectJourney={handleSelectJourney} />
            <FooterCTA />
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default App;
