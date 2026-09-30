'use client';

import { useEffect } from 'react';

interface ToastProps {
  message: string;
  onClose: () => void;
  type?: 'success' | 'info';
}

export default function Toast({ message, onClose, type = 'success' }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-24 right-6 z-50 flex items-center gap-3 bg-[#1a2332] text-white px-5 py-3.5 rounded-lg shadow-2xl border border-slate-700 animate-bounce">
      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
        type === 'success' ? 'bg-emerald-500 text-white' : 'bg-blue-500 text-white'
      }`}>
        ✓
      </div>
      <span className="text-sm font-medium">{message}</span>
      <button onClick={onClose} className="ml-2 text-slate-400 hover:text-white text-xs">
        ✕
      </button>
    </div>
  );
}
