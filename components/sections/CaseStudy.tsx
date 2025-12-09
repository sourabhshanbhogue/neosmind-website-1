import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CASE_STUDY_CONTENT } from '../../constants';
import { SectionProps } from '../../types';

const CaseStudy: React.FC<SectionProps> = ({ id, className }) => {
  return (
    <section id={id} className={`py-24 md:py-32 bg-white ${className}`}>
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="border-l-4 border-accent pl-6 md:pl-10 py-2">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-primary mb-12">
            {CASE_STUDY_CONTENT.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-12 items-center">
            
            {/* Before */}
            <div className="bg-neutral-50 p-8 rounded-xl border border-neutral-100">
              <span className="text-xs font-bold tracking-wider text-red-500 uppercase mb-2 block">Before</span>
              <p className="text-neutral-700 font-medium leading-relaxed">
                "{CASE_STUDY_CONTENT.before}"
              </p>
            </div>

            {/* Arrow */}
            <div className="flex justify-center transform rotate-90 md:rotate-0 text-neutral-300">
              <ArrowRight size={32} />
            </div>

            {/* After */}
            <div className="bg-neutral-50 p-8 rounded-xl border border-neutral-100">
               <span className="text-xs font-bold tracking-wider text-green-600 uppercase mb-2 block">After</span>
               <p className="text-neutral-700 font-medium leading-relaxed">
                "{CASE_STUDY_CONTENT.after}"
               </p>
            </div>

          </div>

          <div className="mt-12">
            <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2 tracking-tight">85% Reduction</h3>
            <p className="text-neutral-500 text-lg">in manual data entry time.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;