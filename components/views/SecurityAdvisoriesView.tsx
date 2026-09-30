export default function SecurityAdvisoriesView() {
  const advisories = [
    { id: 'OTASSETS-SA-2026-08', title: 'OT Workstation Service Remote Execution Vulnerability', severity: 'Critical', cvss: '9.1', date: '15 Sep 2026' },
    { id: 'OTASSETS-SA-2026-07', title: 'EtherNet/IP Interface Out-of-Memory Condition', severity: 'High', cvss: '7.8', date: '28 Aug 2026' },
    { id: 'OTASSETS-SA-2026-06', title: 'Improper Authorization in HMI Web API Server', severity: 'Medium', cvss: '6.4', date: '11 Jul 2026' },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col gap-5">
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">Security Advisories & Vulnerability Bulletins</h2>
        <p className="text-sm text-slate-600">
          Official security notices and mitigation strategies for OT control hardware and software components.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {advisories.map((adv) => (
          <div key={adv.id} className="border border-gray-200 rounded-lg p-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-slate-50 hover:bg-white transition-colors">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-slate-600">{adv.id}</span>
                <span className={`text-[11px] font-bold px-2 py-0.5 rounded text-white ${
                  adv.severity === 'Critical' ? 'bg-red-600' : adv.severity === 'High' ? 'bg-orange-600' : 'bg-amber-600'
                }`}>
                  {adv.severity} (CVSS {adv.cvss})
                </span>
              </div>
              <h3 className="text-sm font-bold text-slate-900">{adv.title}</h3>
              <span className="text-xs text-slate-500">Published: {adv.date}</span>
            </div>
            <button
              onClick={() => { window.location.hash = adv.id; }}
              className="bg-[#1a2332] hover:bg-slate-800 text-white px-4 py-2 rounded text-xs font-semibold whitespace-nowrap transition-colors"
            >
              Read Advisory →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
