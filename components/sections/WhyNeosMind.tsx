import React from 'react';
import { Check } from 'lucide-react';
import { WHY_NEOSMIND_CONTENT } from '../../constants';
import { SectionProps } from '../../types';

const WhyNeosMind: React.FC<SectionProps> = ({ id, className }) => {
  return (
    <section id={id} className={`py-24 md:py-32 bg-primary text-white ${className}`}>
      <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Why NeosMind?
          </h2>
          <p className="text-neutral-400 text-lg leading-relaxed mb-8">
            We bridge the gap between technical possibility and business reality. No buzzwords, just results.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
          <ul className="space-y-6">
            {WHY_NEOSMIND_CONTENT.map((item, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="mt-1 bg-accent rounded-full p-1 flex-shrink-0">
                  <Check size={14} className="text-white" strokeWidth={3} />
                </div>
                <span className="text-lg text-neutral-200 font-medium">
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyNeosMind;