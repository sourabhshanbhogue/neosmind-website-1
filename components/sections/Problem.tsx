import React from 'react';
import { PROBLEM_CONTENT } from '../../constants';
import { SectionProps } from '../../types';

const Problem: React.FC<SectionProps> = ({ id, className }) => {
  return (
    <section id={id} className={`py-24 md:py-32 bg-white ${className}`}>
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6">
            {PROBLEM_CONTENT.title}
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            {PROBLEM_CONTENT.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {PROBLEM_CONTENT.points.map((point, index) => {
            const Icon = point.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-2xl bg-neutral-50 flex items-center justify-center mb-6 group-hover:bg-accent/5 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{point.title}</h3>
                <p className="text-neutral-600 leading-relaxed">
                  {point.text}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-20">
          <p className="text-xl md:text-2xl font-medium text-primary border-b-2 border-accent/20 inline-block pb-1">
            {PROBLEM_CONTENT.closing}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;