'use client';

import { useState, useEffect } from 'react';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownloadComplete: () => void;
}

export default function DownloadModal({ isOpen, onClose, onDownloadComplete }: DownloadModalProps) {
  const [progress, setProgress] = useState(0);
  const [speed, setSpeed] = useState('12.4 MB/s');
  const [stage, setStage] = useState<'downloading' | 'verifying' | 'complete'>('downloading');

  useEffect(() => {
    if (!isOpen) {
      setProgress(0);
      setStage('downloading');
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setStage('verifying');
          setTimeout(() => {
            setStage('complete');
            onDownloadComplete();
          }, 1200);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15 + 10);
      });
    }, 300);

    return () => clearInterval(interval);
  }, [isOpen, onDownloadComplete]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl border border-gray-200 w-full max-w-md p-6 flex flex-col gap-5 animate-in fade-in zoom-in-95 duration-200">
        
        <div className="flex justify-between items-center border-b border-gray-100 pb-3">
          <div className="flex items-center gap-2.5 font-bold text-slate-900 text-base">
            <div className="w-8 h-8 rounded-lg bg-red-50 text-[#e31837] flex items-center justify-center">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
              </svg>
            </div>
            <span>Downloading Security Patch</span>
          </div>
          {stage === 'complete' && (
            <button onClick={onClose} className="text-slate-400 hover:text-slate-700 text-sm">
              ✕
            </button>
          )}
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-slate-50 p-3.5 rounded-lg border border-gray-200 flex justify-between items-center text-xs">
            <div>
              <div className="font-semibold text-slate-800">patch.exe (v3.2.1.0)</div>
              <div className="text-slate-500 mt-0.5">Size: 48.5 MB</div>
            </div>
            <div className="text-right">
              <span className="font-bold text-slate-700 block">{progress}%</span>
              <span className="text-slate-400 text-[11px]">{stage === 'downloading' ? speed : 'Done'}</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden p-0.5 border border-gray-200">
            <div 
              className={`h-full rounded-full transition-all duration-300 ${
                stage === 'complete' ? 'bg-emerald-500' : 'bg-[#e31837]'
              }`}
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Status Message */}
          <div className="text-xs text-slate-600 flex items-center gap-2 font-medium">
            {stage === 'downloading' && (
              <>
                <svg className="w-4 h-4 animate-spin text-[#e31837]" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Transferring package from secure distribution mirror...</span>
              </>
            )}

            {stage === 'verifying' && (
              <>
                <svg className="w-4 h-4 animate-spin text-amber-500" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Validating SHA256 checksum integrity...</span>
              </>
            )}

            {stage === 'complete' && (
              <>
                <span className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] font-bold">
                  ✓
                </span>
                <span className="text-emerald-700 font-semibold">Download verified & saved to Downloads folder!</span>
              </>
            )}
          </div>
        </div>

        {stage === 'complete' && (
          <div className="pt-2 border-t border-gray-100 flex gap-3">
            <button
              onClick={onClose}
              className="w-full bg-[#1a2332] hover:bg-slate-800 text-white py-2.5 rounded-md font-semibold text-xs transition-colors"
            >
              Close & View Setup Guide
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
