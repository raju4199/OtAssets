export default function DocumentationView() {
  const docs = [
    { title: 'OT Workstation Hardware & OS Requirements Guide', type: 'PDF', size: '3.4 MB', date: 'Sep 2026' },
    { title: 'Industrial Security Deployment Reference Architecture', type: 'PDF', size: '12.1 MB', date: 'Aug 2026' },
    { title: 'Firmware Patching & Rollback Procedures', type: 'PDF', size: '1.8 MB', date: 'Jul 2026' },
    { title: 'Control Network Protocol Configuration Manual', type: 'PDF', size: '8.5 MB', date: 'May 2026' },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Product Documentation</h2>
        <p className="text-sm text-slate-600 mb-6">
          Download technical manuals, hardware specifications, and deployment guides for OT environments.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {docs.map((doc, idx) => (
            <div key={idx} className="border border-gray-200 rounded-lg p-4 hover:border-[#e31837] transition-colors flex flex-col justify-between gap-4 bg-slate-50">
              <div>
                <div className="flex justify-between items-start gap-2 mb-2">
                  <span className="text-xs font-bold text-[#e31837] bg-red-100 px-2 py-0.5 rounded">{doc.type}</span>
                  <span className="text-xs text-slate-400">{doc.date}</span>
                </div>
                <h3 className="text-sm font-bold text-slate-800 leading-snug">{doc.title}</h3>
              </div>

              <div className="flex justify-between items-center text-xs text-slate-500 pt-2 border-t border-gray-200">
                <span>Size: {doc.size}</span>
                <button
                  onClick={() => window.print()}
                  className="text-[#e31837] font-bold hover:underline flex items-center gap-1"
                >
                  Print Guide ↓
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
