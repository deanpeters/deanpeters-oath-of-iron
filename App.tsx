
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

const App: React.FC = () => {
  const [selectedCharacterId, setSelectedCharacterId] = useState<string | null>(null);
  const [selectedLoreId, setSelectedLoreId] = useState<string | null>(null);

  // Sync hash with state for deep linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/cast/')) {
        setSelectedCharacterId(hash.replace('#/cast/', ''));
        setSelectedLoreId(null);
      } else if (hash.startsWith('#/lore/')) {
        setSelectedLoreId(hash.replace('#/lore/', ''));
        setSelectedCharacterId(null);
      } else {
        setSelectedCharacterId(null);
        setSelectedLoreId(null);
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
  };

  const handleSelectCharacter = (id: string) => {
    window.location.hash = `#/cast/${id}`;
    setSelectedCharacterId(id);
    setSelectedLoreId(null);
    window.scrollTo(0, 0);
  };

  const handleSelectLore = (id: string) => {
    window.location.hash = `#/lore/${id}`;
    setSelectedLoreId(id);
    setSelectedCharacterId(null);
    window.scrollTo(0, 0);
  };

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

  return (
    <div className="min-h-screen bg-oath-bg relative overflow-x-hidden selection:bg-oath-crimson selection:text-white">
      {/* Subtle global vertical gradient and vignette */}
      <div className="fixed inset-0 pointer-events-none cinematic-vignette opacity-50 z-0" />
      
      <div className="relative z-10 flex flex-col">
        <Navbar />
        
        <main>
          <Hero />
          
          <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-32 lg:space-y-48 py-24">
            <KeysSection onSelectLore={handleSelectLore} />
            <CastSection onSelectCharacter={handleSelectCharacter} />
            <JourneySection />
            <FooterCTA />
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default App;
