export default function KnowledgeBaseView() {
  const articles = [
    { title: 'KB-10492: Configuring Dual-Homed NIC Networks on OT Workstations', category: 'Networking', rating: '4.9 ★ (142 reviews)' },
    { title: 'KB-10488: Hardening Windows Defender Firewall Rules for CIP Protocols', category: 'Security', rating: '4.8 ★ (98 reviews)' },
    { title: 'KB-10475: Backup & Disaster Recovery Procedures for Industrial HMIs', category: 'Maintenance', rating: '5.0 ★ (210 reviews)' },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col gap-5">
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">Knowledge Base Articles</h2>
        <p className="text-sm text-slate-600">
          Curated technical solution articles written by field application engineers.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {articles.map((art, idx) => (
          <a key={idx} href={`#knowledge-article-${idx + 1}`} id={`knowledge-article-${idx + 1}`} className="border border-gray-200 rounded-lg p-4 hover:border-[#e31837] bg-slate-50 hover:bg-white transition-all flex justify-between items-center group">
            <div>
              <span className="text-xs font-bold text-[#e31837] uppercase tracking-wide">{art.category}</span>
              <h3 className="text-sm font-bold text-slate-800 group-hover:text-[#e31837] transition-colors mt-0.5">{art.title}</h3>
              <span className="text-xs text-slate-400 mt-1 block">{art.rating}</span>
            </div>
            <span className="text-slate-400 group-hover:text-[#e31837] font-bold text-base">→</span>
          </a>
        ))}
      </div>
    </div>
  );
}
