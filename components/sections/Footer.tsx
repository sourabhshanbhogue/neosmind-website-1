import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t border-neutral-100">
      <div className="max-w-[1100px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
           <div className="w-5 h-5 bg-primary rounded flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
           </div>
           <span className="text-lg font-bold text-primary tracking-tight">NeosMind</span>
        </div>
        
        <div className="text-sm text-neutral-500">
          &copy; {new Date().getFullYear()} NeosMind. All rights reserved.
        </div>
        
        <div className="flex gap-6 text-sm text-neutral-500">
          <a href="#" className="hover:text-primary transition-colors">Terms</a>
          <a href="#" className="hover:text-primary transition-colors">Privacy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
