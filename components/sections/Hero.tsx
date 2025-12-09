import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import { HERO_CONTENT } from '../../constants';

const Hero = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleGetInTouch = () => {
    window.open('https://tally.so/r/kdl7lZ', '_blank');
  };

  // 3x3 Grid generation for the "Chaos to Clarity" visual
  const blocks = Array.from({ length: 9 }).map((_, i) => {
    const row = Math.floor(i / 3);
    const col = i % 3;
    return {
      id: i,
      // Target (Ordered) positions relative to center (0,0)
      orderX: (col - 1) * 44, 
      orderY: (row - 1) * 44,
      // Source (Chaos) positions - random scattering
      chaosX: (Math.random() - 0.5) * 180,
      chaosY: (Math.random() - 0.5) * 180,
      chaosRotate: Math.random() * 360,
    };
  });

  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden max-w-[1100px] mx-auto px-6">
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
            <Button onClick={handleGetInTouch}>
              {HERO_CONTENT.ctaPrimary}
            </Button>
            <Button variant="outline" onClick={() => scrollTo('services')}>
              {HERO_CONTENT.ctaSecondary}
            </Button>
          </div>
        </motion.div>

        {/* Right Visual - Abstract Representation of Value */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative h-[450px] md:h-[550px] w-full flex items-center justify-center lg:justify-end perspective-1000"
        >
          <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
            {/* Background Blob 1 */}
            <div className="absolute top-0 right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
            {/* Background Blob 2 */}
            <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-200/40 rounded-full blur-3xl"></div>
            
            {/* Main Composition Card: Confusion -> Clarity */}
            <div className="relative w-72 h-80 md:w-80 md:h-96 bg-white/40 backdrop-blur-xl border border-white/60 rounded-3xl shadow-soft z-10 flex flex-col items-center justify-center overflow-hidden">
                <div className="absolute top-6 left-0 right-0 px-8 flex justify-between items-center opacity-50">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <div className="h-px bg-primary/20 flex-grow mx-4"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                </div>

                {/* Animation Container */}
                <div className="relative w-full h-48 flex items-center justify-center">
                     {blocks.map((block) => (
                         <motion.div
                            key={block.id}
                            className="absolute w-9 h-9 bg-white border border-neutral-100 shadow-sm rounded-lg flex items-center justify-center"
                            animate={{
                                x: [block.chaosX, block.orderX, block.orderX, block.chaosX],
                                y: [block.chaosY, block.orderY, block.orderY, block.chaosY],
                                rotate: [block.chaosRotate, 0, 0, block.chaosRotate],
                                opacity: [0.5, 1, 1, 0.5],
                                borderRadius: ["50%", "20%", "20%", "50%"]
                            }}
                            transition={{
                                duration: 8,
                                ease: "easeInOut",
                                times: [0, 0.3, 0.7, 1], // 30% Chaos->Order, Hold 40%, 30% Order->Chaos
                                repeat: Infinity,
                                repeatDelay: 1
                            }}
                         >
                            <div className="w-2 h-2 rounded-full bg-accent/30"></div>
                         </motion.div>
                     ))}
                </div>

                {/* Status Label */}
                <div className="absolute bottom-8 text-center w-full">
                     <motion.div
                        animate={{ opacity: [1, 0, 0, 1] }}
                        transition={{ duration: 8, times: [0, 0.25, 0.75, 1], repeat: Infinity, repeatDelay: 1 }}
                        className="absolute inset-x-0 bottom-0 text-xs font-semibold uppercase tracking-widest text-neutral-400"
                     >
                        Unstructured
                     </motion.div>
                     <motion.div
                        animate={{ opacity: [0, 1, 1, 0] }}
                        transition={{ duration: 8, times: [0, 0.25, 0.75, 1], repeat: Infinity, repeatDelay: 1 }}
                        className="absolute inset-x-0 bottom-0 text-xs font-bold uppercase tracking-widest text-primary flex items-center justify-center gap-2"
                     >
                        Optimized <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                     </motion.div>
                </div>
            </div>
              
            {/* Metric 1: Productivity Increase */}
            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute top-12 -right-4 md:-right-8 bg-white px-5 py-4 rounded-xl shadow-soft border border-neutral-100 flex items-center gap-4 z-20 backdrop-blur-md bg-white/90"
            >
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                    <TrendingUp size={20} strokeWidth={2.5} />
                </div>
                <div>
                    <div className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider mb-0.5">Productivity</div>
                    <div className="text-lg font-bold text-primary">+240%</div>
                </div>
            </motion.div>
            
            {/* Metric 2: Cost Saving */}
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -bottom-12 left-4 md:bottom-16 md:-left-8 bg-white px-5 py-4 rounded-xl shadow-soft border border-neutral-100 flex items-center gap-4 z-20 backdrop-blur-md bg-white/90"
            >
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <TrendingDown size={20} strokeWidth={2.5} />
                </div>
                <div>
                    <div className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider mb-0.5">OpEx Costs</div>
                    <div className="text-lg font-bold text-primary">-45%</div>
                </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
