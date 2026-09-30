'use client';

import Image from 'next/image';
import { useState } from 'react';

interface MainNavProps {
  onOpenSearch?: () => void;
}

export default function MainNav({ onOpenSearch }: MainNavProps) {
  const [activeTab, setActiveTab] = useState('Sales & Partners');

  const navItems = [
    'Products',
    'Services',
    'Solutions & Industries',
    'Support',
    'Sales & Partners',
  ];

  return (
    <nav className="bg-white px-6 md:px-10 py-4 flex justify-between items-center border-b border-[#dedede] relative z-10">
      <div className="flex items-center gap-3">
        <Image
          src="/otassets-logo-transparent.png"
          alt="OTassets"
          width={214}
          height={50}
          className="h-auto w-[180px] bg-white object-contain md:w-[214px]"
          priority
        />
      </div>

      <ul className="hidden lg:flex gap-7 items-center text-sm font-medium text-[#252525]">
        {navItems.map((item) => (
          <li key={item}>
            <button
              onClick={() => {
                setActiveTab(item);
                document.getElementById('support-workspace')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`py-2 border-b-2 transition-colors cursor-pointer ${
                  activeTab === item
                  ? 'border-[#cd163f] text-[#cd163f] font-semibold'
                  : 'border-transparent text-[#333] hover:text-[#cd163f]'
              }`}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3 text-[#333]">
        <button 
          onClick={onOpenSearch} 
          aria-label="Search" 
          className="p-1.5 hover:text-[#cd163f] transition-colors cursor-pointer flex items-center gap-2 px-2 py-1.5 text-xs"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
          </svg>
          <span className="hidden sm:inline font-medium">Search</span>
        </button>
        <button
          aria-label="User Account"
          onClick={() => document.getElementById('support-workspace')?.scrollIntoView({ behavior: 'smooth' })}
          className="hidden md:block border-l border-[#dedede] pl-3 p-1.5 hover:text-[#cd163f] transition-colors cursor-pointer"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
        </button>
      </div>
    </nav>
  );
}
