'use client';

interface CompatibilityCardProps {
  onCopyChecksum?: () => void;
}

export default function CompatibilityCard({ onCopyChecksum }: CompatibilityCardProps) {
  const osList = [
    'Windows 10 (64-bit)',
    'Windows 11 (64-bit)',
    'OT Workstation Series',
    'Industrial HMI Systems',
  ];

  const fileDetails = [
    { label: 'File Name', value: 'patch.exe' },
    { label: 'File Size', value: '48.5 MB' },
    { label: 'Version', value: '3.2.1.0' },
    { label: 'Release Date', value: '15 Sep 2026' },
  ];

  const checksum = '7f3e2e9c4b7d8a1c0f9e6d2b4a7c1e8f9d3b6a2c4e7f1d9a8b3c5d6e9f0';

  const handleCopy = () => {
    navigator.clipboard.writeText(checksum);
    if (onCopyChecksum) onCopyChecksum();
  };

  return (
    <div className="border border-gray-200 rounded-lg bg-white p-6 flex flex-col gap-5 shadow-sm h-fit">
      <div className="flex items-center gap-2.5 text-base font-bold text-gray-900 border-b border-gray-200 pb-3.5">
        <svg className="w-5 h-5 fill-[#1a2332]" viewBox="0 0 24 24">
          <path d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/>
        </svg>
        <span>System Compatibility</span>
      </div>

      <ul className="flex flex-col gap-3 text-sm text-slate-700 font-medium">
        {osList.map((item) => (
          <li key={item} className="flex items-center gap-2.5">
            <svg className="w-4 h-4 fill-emerald-600 flex-shrink-0" viewBox="0 0 24 24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="border-t border-gray-200 pt-4 flex flex-col gap-3 text-xs">
        {fileDetails.map((detail) => (
          <div key={detail.label} className="flex justify-between border-b border-dashed border-gray-200 pb-2">
            <span className="text-gray-500">{detail.label}</span>
            <span className="font-semibold text-gray-900 text-right">{detail.value}</span>
          </div>
        ))}

        <div className="flex flex-col gap-1.5 pt-1">
          <div className="flex justify-between items-center">
            <span className="text-gray-500 font-medium">Checksum (SHA256)</span>
            <button
              onClick={handleCopy}
              className="text-[#e31837] hover:underline text-[11px] font-bold cursor-pointer"
            >
              Copy Hash 📋
            </button>
          </div>
          <div 
            onClick={handleCopy}
            className="bg-slate-100 p-2.5 rounded border border-gray-200 font-mono text-[11px] text-slate-700 break-all leading-relaxed hover:bg-slate-200 cursor-pointer transition-colors"
            title="Click to copy SHA256 checksum"
          >
            {checksum}
          </div>
        </div>
      </div>
    </div>
  );
}
