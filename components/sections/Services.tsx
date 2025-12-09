import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { SERVICES_CONTENT } from '../../constants';
import { SectionProps } from '../../types';

const Services: React.FC<SectionProps> = ({ id, className }) => {
  const handleGetInTouch = () => {
    window.open('https://tally.so/r/kdl7lZ', '_blank');
  };

  return (
    <section id={id} className={`py-24 md:py-32 bg-neutral-50 ${className}`}>
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="mb-16">
          <span className="text-accent font-semibold tracking-wider text-sm uppercase">What We Do</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mt-3">
            Holistic AI Integration
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES_CONTENT.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="flex flex-col h-full">
                <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-8 text-primary">
                  <Icon size={24} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
                <p className="text-neutral-600 leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>

        <div className="flex justify-center mt-16">
          <Button onClick={handleGetInTouch}>Get in Touch</Button>
        </div>
      </div>
    </section>
  );
};

export default Services;