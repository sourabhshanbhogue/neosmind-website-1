import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { HERO_CONTENT } from '../../constants';

const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden max-w-[1100px] mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-8 text-center lg:text-left z-10"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight text-primary">
            {HERO_CONTENT.h1}
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
            {HERO_CONTENT.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <Button onClick={() => scrollTo('cta')}>
              {HERO_CONTENT.ctaPrimary}
            </Button>
            <Button variant="outline" onClick={() => scrollTo('services')}>
              {HERO_CONTENT.ctaSecondary}
            </Button>
          </div>
        </motion.div>

        {/* Right Visual - Abstract Art */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-md aspect-square">
            {/* Background Blob 1 */}
            <div className="absolute top-0 right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
            {/* Background Blob 2 */}
            <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-200/40 rounded-full blur-3xl"></div>
            
            {/* Geometric Composition */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-64 h-64 bg-white/40 backdrop-blur-xl border border-white/50 rounded-2xl shadow-soft z-10 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 to-white/80"></div>
                <div className="grid grid-cols-2 gap-4 p-8 w-full h-full opacity-60">
                    <div className="bg-primary/5 rounded-lg h-full w-full"></div>
                    <div className="bg-accent/10 rounded-lg h-full w-full"></div>
                    <div className="bg-accent/10 rounded-lg h-full w-full"></div>
                    <div className="bg-primary/5 rounded-lg h-full w-full"></div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 w-24 h-24 bg-primary text-white rounded-xl shadow-xl flex items-center justify-center z-20"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M2 12h20M12 2l10 10-10 10-10-10 10-10Z"/>
                </svg>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-8 -left-4 w-32 h-16 bg-white border border-neutral-100 rounded-lg shadow-lg flex items-center gap-3 px-4 z-20"
              >
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <div className="h-2 w-16 bg-neutral-100 rounded-full"></div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;