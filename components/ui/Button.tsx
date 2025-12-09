import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-neutral-800 hover:shadow-lg focus:ring-primary",
    secondary: "bg-accent text-white hover:bg-indigo-600 focus:ring-accent shadow-glow",
    outline: "bg-transparent text-primary border border-neutral-200 hover:border-neutral-400 focus:ring-neutral-500"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
