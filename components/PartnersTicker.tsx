export default function PartnersTicker() {
  const partners = [
    { name: 'OTassets', path: 'M12 2L2 22h20L12 2zm0 4.5l5.5 11h-11L12 6.5z' },
    { name: 'NexGen', path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z' },
    { name: 'Vanguard', path: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z' },
    { name: 'SysCore', path: 'M12 2L2 22h20L12 2zm0 4.5l5.5 11h-11L12 6.5z' },
    { name: 'OmniTech', path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z' },
    { name: 'DeltaFlow', path: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z' },
    { name: 'Stratos', path: 'M12 2L2 22h20L12 2zm0 4.5l5.5 11h-11L12 6.5z' },
    { name: 'Zenith', path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z' },
  ];

  const duplicated = [...partners, ...partners];

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm flex flex-col gap-4">
      <div className="text-xs font-bold uppercase text-gray-500 tracking-wider text-center border-b border-gray-200 pb-2.5">
        Our Trusted Partners
      </div>

      <div className="h-44 overflow-hidden relative">
        <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />

        <div className="flex flex-col gap-3 animate-ticker">
          {duplicated.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center gap-2.5 h-10 bg-slate-50 border border-gray-200 rounded text-xs font-bold text-slate-600 tracking-wide"
            >
              <svg className="w-4 h-4 fill-slate-500" viewBox="0 0 24 24">
                <path d={item.path} />
              </svg>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
