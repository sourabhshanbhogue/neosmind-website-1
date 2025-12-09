import React from 'react';

const Card = ({ children, className = '', hoverEffect = true }) => {
  return (
    <div className={`bg-white p-8 md:p-10 rounded-2xl shadow-soft border border-neutral-100 ${hoverEffect ? 'hover:shadow-xl hover:-translate-y-1 transition-all duration-300' : ''} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
