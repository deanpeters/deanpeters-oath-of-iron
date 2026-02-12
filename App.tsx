
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

const App: React.FC = () => {
  const [selectedCharacterId, setSelectedCharacterId] = useState<string | null>(null);
  const [selectedLoreId, setSelectedLoreId] = useState<string | null>(null);
  const [selectedJourneyId, setSelectedJourneyId] = useState<string | null>(null);
  const [isPrologueVisible, setIsPrologueVisible] = useState(false);
  const [selectedArchiveKey, setSelectedArchiveKey] = useState<string | null>(null);

  // Sync hash with state for deep linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/cast/')) {
        setSelectedCharacterId(hash.replace('#/cast/', ''));
        setSelectedLoreId(null);
        setSelectedJourneyId(null);
        setIsPrologueVisible(false);
        setSelectedArchiveKey(null);
      } else if (hash.startsWith('#/lore/')) {
        setSelectedLoreId(hash.replace('#/lore/', ''));
        setSelectedCharacterId(null);
        setSelectedJourneyId(null);
        setIsPrologueVisible(false);
        setSelectedArchiveKey(null);
      } else if (hash.startsWith('#/key/')) {
        setSelectedArchiveKey(hash.replace('#/key/', ''));
        setSelectedLoreId(null);
        setSelectedCharacterId(null);
        setSelectedJourneyId(null);
        setIsPrologueVisible(false);
      } else if (hash.startsWith('#/journey/')) {
        setSelectedJourneyId(hash.replace('#/journey/', ''));
        setSelectedCharacterId(null);
        setSelectedLoreId(null);
        setIsPrologueVisible(false);
        setSelectedArchiveKey(null);
      } else if (hash === '#/prologue') {
        setIsPrologueVisible(true);
        setSelectedCharacterId(null);
        setSelectedLoreId(null);
        setSelectedJourneyId(null);
        setSelectedArchiveKey(null);
      } else {
        setSelectedCharacterId(null);
        setSelectedLoreId(null);
        setSelectedJourneyId(null);
        setIsPrologueVisible(false);
        setSelectedArchiveKey(null);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Check on initial load
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleBackToLanding = () => {
    window.location.hash = '';
    setSelectedCharacterId(null);
    setSelectedLoreId(null);
    setSelectedJourneyId(null);
    setIsPrologueVisible(false);
    setSelectedArchiveKey(null);
  };

  const handleSelectCharacter = (id: string) => {
    window.location.hash = `#/cast/${id}`;
    setSelectedCharacterId(id);
    setSelectedLoreId(null);
    setSelectedJourneyId(null);
    setIsPrologueVisible(false);
    setSelectedArchiveKey(null);
    window.scrollTo(0, 0);
  };

  const handleSelectLore = (id: string) => {
    window.location.hash = `#/lore/${id}`;
    setSelectedLoreId(id);
    setSelectedCharacterId(null);
    setSelectedJourneyId(null);
    setIsPrologueVisible(false);
    setSelectedArchiveKey(null);
    window.scrollTo(0, 0);
  };

  const handleSelectJourney = (id: string) => {
    window.location.hash = `#/journey/${id}`;
    setSelectedJourneyId(id);
    setSelectedCharacterId(null);
    setSelectedLoreId(null);
    setIsPrologueVisible(false);
    setSelectedArchiveKey(null);
    window.scrollTo(0, 0);
  };

  const handleOpenPrologue = () => {
    window.location.hash = `#/prologue`;
    setIsPrologueVisible(true);
    setSelectedCharacterId(null);
    setSelectedLoreId(null);
    setSelectedJourneyId(null);
    setSelectedArchiveKey(null);
    window.scrollTo(0, 0);
  };

  const handleExploreLore = () => {
    window.location.hash = `#/key/relics`;
    setSelectedArchiveKey('relics');
    setSelectedCharacterId(null);
    setSelectedLoreId(null);
    setSelectedJourneyId(null);
    setIsPrologueVisible(false);
    window.scrollTo(0, 0);
  };

  if (selectedArchiveKey) {
    return (
      <div className="min-h-screen bg-oath-iron relative selection:bg-oath-crimson selection:text-white">
        <div className="fixed inset-0 pointer-events-none cinematic-vignette opacity-50 z-0" />
        <div className="relative z-10">
          <LoreArchiveSubpage loreId={selectedArchiveKey} onBack={handleBackToLanding} />
          <Footer />
        </div>
      </div>
    );
  }

  if (isPrologueVisible) {
    return (
      <div className="min-h-screen bg-oath-iron relative selection:bg-oath-crimson selection:text-white">
        <div className="fixed inset-0 pointer-events-none cinematic-vignette opacity-50 z-0" />
        <div className="relative z-10">
          <PrologueSubpage onBack={handleBackToLanding} />
          <Footer />
        </div>
      </div>
    );
  }

  if (selectedCharacterId) {
    return (
      <div className="min-h-screen bg-oath-iron relative selection:bg-oath-crimson selection:text-white">
        <div className="fixed inset-0 pointer-events-none cinematic-vignette opacity-50 z-0" />
        <div className="relative z-10">
          <CharacterSubpage 
            characterId={selectedCharacterId} 
            onBack={handleBackToLanding} 
            onSelectCharacter={handleSelectCharacter}
          />
          <Footer />
        </div>
      </div>
    );
  }

  if (selectedLoreId) {
    return (
      <div className="min-h-screen bg-oath-iron relative selection:bg-oath-crimson selection:text-white">
        <div className="fixed inset-0 pointer-events-none cinematic-vignette opacity-50 z-0" />
        <div className="relative z-10">
          <LoreDossierSubpage 
            loreId={selectedLoreId} 
            onBack={handleBackToLanding} 
          />
          <Footer />
        </div>
      </div>
    );
  }

  if (selectedJourneyId) {
    return (
      <div className="min-h-screen bg-oath-iron relative selection:bg-oath-crimson selection:text-white">
        <div className="fixed inset-0 pointer-events-none cinematic-vignette opacity-50 z-0" />
        <div className="relative z-10">
          <JourneySnapshotSubpage 
            journeyId={selectedJourneyId} 
            onBack={handleBackToLanding} 
          />
          <Footer />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-oath-bg relative overflow-x-hidden selection:bg-oath-crimson selection:text-white">
      <div className="fixed inset-0 pointer-events-none cinematic-vignette opacity-50 z-0" />
      
      <div className="relative z-10 flex flex-col">
        <Navbar />
        
        <main>
          <Hero onOpenPrologue={handleOpenPrologue} onExploreLore={handleExploreLore} />
          
          <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-32 lg:space-y-48 py-24">
            <KeysSection onSelectLore={handleSelectLore} />
            <CastSection onSelectCharacter={handleSelectCharacter} />
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
