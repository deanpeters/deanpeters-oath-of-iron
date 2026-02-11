
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import KeysSection from './components/KeysSection';
import CastSection from './components/CastSection';
import JourneySection from './components/JourneySection';
import FooterCTA from './components/FooterCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-oath-bg relative overflow-x-hidden selection:bg-oath-crimson selection:text-white">
      {/* Subtle global vertical gradient and vignette */}
      <div className="fixed inset-0 pointer-events-none cinematic-vignette opacity-50 z-0" />
      
      <div className="relative z-10 flex flex-col">
        <Navbar />
        
        <main>
          <Hero />
          
          <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-32 lg:space-y-48 py-24">
            <KeysSection />
            <CastSection />
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
