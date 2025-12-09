import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm border-b border-neutral-100' : 'bg-transparent py-6'}`}>
      <div className="max-w-[1100px] mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
           {/* Abstract Logo */}
           <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
           </div>
           <span className="text-xl font-display font-bold text-primary tracking-tight">NeosMind</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('services')} className="text-sm font-medium text-neutral-600 hover:text-primary transition-colors">Services</button>
          <button onClick={() => scrollToSection('why-us')} className="text-sm font-medium text-neutral-600 hover:text-primary transition-colors">Why Us</button>
          <button onClick={() => scrollToSection('case-study')} className="text-sm font-medium text-neutral-600 hover:text-primary transition-colors">Case Study</button>
        </div>

        <Button variant="primary" className="!px-6 !py-2.5 !text-xs md:!text-sm" onClick={() => scrollToSection('cta')}>
          Get in Touch
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;