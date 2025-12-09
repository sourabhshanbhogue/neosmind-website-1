import React from 'react';
import { WHO_WE_HELP_CONTENT } from '../../constants';
import { SectionProps } from '../../types';

const WhoWeHelp: React.FC<SectionProps> = ({ id, className }) => {
  return (
    <section id={id} className={`py-24 md:py-32 bg-white ${className}`}>
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
                Who We Help
            </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-200 border border-neutral-200 rounded-2xl overflow-hidden">
          {WHO_WE_HELP_CONTENT.map((segment, index) => (
            <div key={index} className="bg-white p-10 flex flex-col items-center text-center hover:bg-neutral-50 transition-colors duration-300">
              <h3 className="text-xl font-bold text-primary mb-4">{segment.title}</h3>
              <p className="text-sm text-neutral-600 leading-relaxed max-w-xs">
                {segment.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;