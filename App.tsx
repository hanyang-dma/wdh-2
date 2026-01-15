import React from 'react';
import Hero from './components/Hero';
import Objectives from './components/Objectives';
import ChapterList from './components/ChapterList';
import Grading from './components/Grading';
import Footer from './components/Footer';
import Marquee from './components/Marquee';
import { LanguageProvider, useLanguage } from './LanguageContext';

const AppContent: React.FC = () => {
  const { content } = useLanguage();
  
  return (
    <div className="min-h-screen bg-offWhite selection:bg-swissRed selection:text-white">
      <div className="mx-auto max-w-[1440px] border-x-2 border-black bg-white shadow-2xl">
        <Hero />
        <Marquee text={content.ui.marquee1} />
        <Objectives />
        <ChapterList />
        <Grading />
        <Marquee text={content.ui.marquee2} reverse />
        <Footer />
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;