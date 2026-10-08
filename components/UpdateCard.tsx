'use client';

interface UpdateCardProps {
  onStartDownload: () => void;
  isDownloaded?: boolean;
}

export default function UpdateCard({ onStartDownload, isDownloaded }: UpdateCardProps) {
  const downloadUrl = process.env.NEXT_PUBLIC_PATCH_DOWNLOAD_URL || '#';

  return (
    <div className="border border-gray-200 rounded-lg p-6 md:p-8 bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col sm:flex-row gap-5 items-start mb-6">
        <div className="w-16 h-16 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0">
          <svg className="w-9 h-9 fill-[#e31837]" viewBox="0 0 24 24">
            <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
          </svg>
        </div>
        <div className="flex-1">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 flex flex-wrap items-center gap-3 mb-2">
            OT Workstation Security Patch
            <span className="text-xs bg-green-100 text-green-800 font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Latest Release
            </span>
          </h2>
          <div className="text-xs md:text-sm text-gray-500 flex flex-wrap items-center gap-3 mb-3 font-medium">
            <span>Version: 3.2.1.0</span>
            <span>|</span>
            <span>Release Date: 15 Sep 2026</span>
            <span>|</span>
            <span>Size: 48.5 MB</span>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            This update includes security fixes, stability improvements and performance enhancements for OT environment workstations.
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
        <a
          href={downloadUrl}
          download
          onClick={onStartDownload}
          className="inline-flex items-center gap-2.5 bg-[#e31837] hover:bg-[#c41230] text-white px-7 py-3.5 rounded-md font-semibold text-base transition-all shadow-md hover:shadow-lg cursor-pointer"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
          </svg>
          {isDownloaded ? 'Re-download Patch.exe ✓' : 'Download Patch.exe'}
        </a>

        {downloadUrl !== '#' && (
          <a
            href={downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-slate-500 hover:text-[#e31837] underline underline-offset-2 flex items-center gap-1 font-medium"
          >
            Direct Mirror Link 🔗
          </a>
        )}
      </div>
    </div>
  );
}
