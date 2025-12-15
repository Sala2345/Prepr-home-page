import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PartnersSection from './components/PartnersSection';
import HowWeHelpSection from './components/HowWeHelpSection';
import FourPillarsSection from './components/FourPillarsSection';
import LearningJourneySection from './components/LearningJourneySection';
import UniqueValueSection from './components/UniqueValueSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import FeedbackTool from './components/FeedbackTool';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary-foreground">
      <Header />
      <main>
        <HeroSection />
        <PartnersSection />
        <HowWeHelpSection />
        <FourPillarsSection />
        <LearningJourneySection />
        <UniqueValueSection />
        <CTASection />
      </main>
      <Footer />
      <FeedbackTool />
    </div>
  );
};

export default App;