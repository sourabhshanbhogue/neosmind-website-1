import React from 'react';
import Button from '../ui/Button';
import { CTA_CONTENT } from '../../constants';
import { SectionProps } from '../../types';

const CTA: React.FC<SectionProps> = ({ id, className }) => {
  const handleGetInTouch = () => {
    window.open('https://tally.so/r/kdl7lZ', '_blank');
  };

  return (
    <section id={id} className={`py-24 md:py-32 bg-neutral-50 border-t border-neutral-200 ${className}`}>
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
          {CTA_CONTENT.headline}
        </h2>
        <p className="text-xl text-neutral-600 mb-10 leading-relaxed">
          {CTA_CONTENT.subheadline}
        </p>
        <Button variant="primary" className="!px-10 !py-4 !text-base shadow-glow" onClick={handleGetInTouch}>
          {CTA_CONTENT.button}
        </Button>
      </div>
    </section>
  );
};

export default CTA;