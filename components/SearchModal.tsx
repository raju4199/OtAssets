'use client';

import { useState, useEffect } from 'react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const quickLinks = [
    { title: 'OT Workstation Security Patch v3.2.1', cat: 'Firmware', badge: 'Latest' },
    { title: 'ControlLogix 5580 Controller Firmware v34', cat: 'Firmware', badge: 'Popular' },
    { title: 'Industrial Cybersecurity Hardening Guide', cat: 'Documentation', badge: 'PDF' },
    { title: 'CVE-2026-1042 Security Advisory Bulletin', cat: 'Advisory', badge: 'Critical' },
    { title: 'Studio 5000 Logix Designer Installation', cat: 'Knowledge Base', badge: 'Article' },
  ];

  const filtered = query.trim() === ''
    ? quickLinks
    : quickLinks.filter(item => item.title.toLowerCase().includes(query.toLowerCase()) || item.cat.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-start justify-center pt-20 px-4">
      <div className="bg-white rounded-xl shadow-2xl border border-gray-200 w-full max-w-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-150">
        
        {/* Search Input Bar */}
        <div className="p-4 border-b border-gray-200 flex items-center gap-3 bg-slate-50">
          <svg className="w-5 h-5 fill-slate-400" viewBox="0 0 24 24">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
          </svg>
          <input
            type="text"
            placeholder="Search firmware updates, advisories, documentation, KB articles..."
            className="w-full bg-transparent text-sm text-gray-900 focus:outline-none font-medium placeholder-slate-400"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
          <button 
            onClick={onClose}
            className="text-xs bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold px-2.5 py-1 rounded transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-3 flex flex-col gap-1">
          <div className="text-[11px] font-bold uppercase text-slate-400 px-3 py-1.5 tracking-wider">
            {query.trim() === '' ? 'Suggested Results' : `Search Results (${filtered.length})`}
          </div>

          {filtered.length === 0 ? (
            <div className="p-8 text-center text-sm text-slate-500">
              No matching records found for "{query}".
            </div>
          ) : (
            filtered.map((item, idx) => (
              <a
                key={idx}
                href="#support-workspace"
                onClick={(e) => { e.preventDefault(); onClose(); }}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-100 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-md bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-xs group-hover:bg-[#e31837] group-hover:text-white transition-colors">
                    {item.cat[0]}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-800 group-hover:text-[#e31837] transition-colors">
                      {item.title}
                    </div>
                    <div className="text-xs text-slate-500">{item.cat}</div>
                  </div>
                </div>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-200 text-slate-700 group-hover:bg-red-100 group-hover:text-red-700">
                  {item.badge}
                </span>
              </a>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="bg-slate-50 px-4 py-2.5 border-t border-gray-200 text-xs text-slate-500 flex justify-between items-center">
          <span>Use <strong>↑</strong> <strong>↓</strong> to navigate, <strong>ESC</strong> to close</span>
          <span>OTassets Search Engine v2.4</span>
        </div>
      </div>
    </div>
  );
}
