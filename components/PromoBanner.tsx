'use client';

import { useState } from 'react';

export default function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-[#c41230] to-[#f58220] text-white flex justify-between items-center px-6 md:px-10 py-2.5 text-sm font-medium">
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2 text-[11px] font-bold tracking-wider uppercase leading-tight">
          <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
          </svg>
          <span>Automation Fair<br />FUTURE<br />in FOCUS</span>
        </div>
        <div className="flex items-center gap-2.5 text-xs md:text-sm">
          <span>Ending soon! Automation Fair early registration pricing expires September 15.</span>
          <a href="#support-workspace" className="inline-flex items-center gap-1 font-bold underline underline-offset-4 hover:no-underline">
            Register now
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
            </svg>
          </a>
        </div>
      </div>
      <button 
        onClick={() => setIsVisible(false)} 
        className="p-1 hover:bg-white/10 rounded transition-colors" 
        aria-label="Close banner"
      >
        <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
        </svg>
      </button>
    </div>
  );
}
