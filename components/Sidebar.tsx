'use client';

import PartnersTicker from './PartnersTicker';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tabLabel: string) => void;
}

export default function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  const menuItems = [
    {
      label: 'Firmware Updates',
      icon: 'M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z',
    },
    {
      label: 'Product Documentation',
      icon: 'M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z',
    },
    {
      label: 'Security Advisories',
      icon: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z',
    },
    {
      label: 'Troubleshooting',
      icon: 'M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z',
    },
    {
      label: 'Knowledge Base',
      icon: 'M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z',
    },
    {
      label: 'Contact Support',
      icon: 'M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z',
    },
  ];

  return (
    <aside className="w-full lg:w-64 flex-shrink-0 flex flex-col gap-5">
      <ul className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm divide-y divide-gray-100">
        {menuItems.map((item) => {
          const isActive = activeTab === item.label;
          return (
            <li key={item.label}>
              <button
                onClick={() => onTabChange(item.label)}
                className={`w-full text-left flex items-center gap-3 px-5 py-4 text-sm font-medium transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-[#1a2332] text-white'
                    : 'text-gray-800 hover:bg-slate-50 hover:text-[#e31837]'
                }`}
              >
                <svg className="w-5 h-5 fill-current flex-shrink-0" viewBox="0 0 24 24">
                  <path d={item.icon} />
                </svg>
                <span>{item.label}</span>
              </button>
            </li>
          );
        })}
      </ul>

      <PartnersTicker />
    </aside>
  );
}
