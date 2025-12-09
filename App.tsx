import React from 'react';
import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import Problem from './components/sections/Problem';
import Services from './components/sections/Services';
import WhoWeHelp from './components/sections/WhoWeHelp';
import WhyNeosMind from './components/sections/WhyNeosMind';
import CaseStudy from './components/sections/CaseStudy';
import CTA from './components/sections/CTA';
import Footer from './components/sections/Footer';

const App: React.FC = () => {
  return (
    <main className="min-h-screen font-sans selection:bg-accent/20 selection:text-primary">
      <Navbar />
      
      <Hero />
      <Problem id="problem" />
      <Services id="services" />
      <WhoWeHelp id="who-we-help" />
      <WhyNeosMind id="why-us" />
      <CaseStudy id="case-study" />
      <CTA id="cta" />
      
      <Footer />
    </main>
  );
};

export default App;