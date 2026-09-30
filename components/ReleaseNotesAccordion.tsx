'use client';

import { useState } from 'react';

export default function ReleaseNotesAccordion() {
  const [activeTab, setActiveTab] = useState<'notes' | 'cve' | 'history'>('notes');

  const historyReleases = [
    { version: '3.2.1.0', date: '15 Sep 2026', size: '48.5 MB', type: 'Critical Patch', status: 'Active' },
    { version: '3.2.0.4', date: '02 Aug 2026', size: '46.2 MB', type: 'Feature Update', status: 'Superceded' },
    { version: '3.1.9.1', date: '14 May 2026', size: '42.8 MB', type: 'Security Patch', status: 'Archived' },
    { version: '3.1.8.0', date: '10 Feb 2026', size: '41.0 MB', type: 'Maintenance', status: 'Archived' },
  ];

  return (
    <div className="border border-gray-200 rounded-lg bg-white p-6 shadow-sm flex flex-col gap-5">
      <div className="flex border-b border-gray-200 gap-6 text-sm font-semibold">
        <button
          onClick={() => setActiveTab('notes')}
          className={`pb-3 border-b-2 transition-colors ${
            activeTab === 'notes' ? 'border-[#e31837] text-[#e31837]' : 'border-transparent text-gray-500 hover:text-gray-900'
          }`}
        >
          Release Notes (v3.2.1)
        </button>
        <button
          onClick={() => setActiveTab('cve')}
          className={`pb-3 border-b-2 transition-colors flex items-center gap-1.5 ${
            activeTab === 'cve' ? 'border-[#e31837] text-[#e31837]' : 'border-transparent text-gray-500 hover:text-gray-900'
          }`}
        >
          <span>Resolved Security Bulletins</span>
          <span className="text-[10px] bg-red-100 text-red-700 px-1.5 py-0.5 rounded font-bold">2 Vulnerabilities</span>
        </button>
        <button
          onClick={() => setActiveTab('history')}
          className={`pb-3 border-b-2 transition-colors ${
            activeTab === 'history' ? 'border-[#e31837] text-[#e31837]' : 'border-transparent text-gray-500 hover:text-gray-900'
          }`}
        >
          Historical Versions
        </button>
      </div>

      {activeTab === 'notes' && (
        <div className="flex flex-col gap-4 text-xs md:text-sm text-slate-700 leading-relaxed">
          <h4 className="font-bold text-slate-900 text-base">Key Enhancements & Bug Fixes</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Hardened OT Network Communication:</strong> Enhanced TLS 1.3 protocol negotiation for industrial Ethernet gateways.</li>
            <li><strong>Memory Buffer Mitigation:</strong> Resolved heap buffer overflow condition during rapid telemetry frame ingestion.</li>
            <li><strong>HMI Render Engine Optimization:</strong> Reduced CPU utilization by 18% during high-frequency alarm visualization.</li>
            <li><strong>Windows 11 24H2 Compatibility:</strong> Updated device driver signatures to prevent kernel driver isolation conflicts.</li>
          </ul>
        </div>
      )}

      {activeTab === 'cve' && (
        <div className="flex flex-col gap-3">
          <div className="border border-red-200 bg-red-50/50 p-4 rounded-lg flex flex-col gap-1.5">
            <div className="flex justify-between items-center">
              <span className="font-bold text-red-900 text-sm">CVE-2026-1042 — Out-of-bounds Read in Packet Parser</span>
              <span className="text-xs bg-red-600 text-white font-bold px-2 py-0.5 rounded">CVSS 8.8 (High)</span>
            </div>
            <p className="text-xs text-red-950">
              An unauthenticated remote attacker could craft malicious Modbus TCP headers causing workstation service crash or unexpected reboot. Patch v3.2.1 mitigates packet boundary checking.
            </p>
          </div>

          <div className="border border-amber-200 bg-amber-50/50 p-4 rounded-lg flex flex-col gap-1.5">
            <div className="flex justify-between items-center">
              <span className="font-bold text-amber-900 text-sm">CVE-2026-1043 — Privilege Elevation in Service Host</span>
              <span className="text-xs bg-amber-600 text-white font-bold px-2 py-0.5 rounded">CVSS 7.2 (Medium)</span>
            </div>
            <p className="text-xs text-amber-950">
              Local authenticated users could manipulate weak service file permissions to gain System privileges. Patch v3.2.1 enforces strict ACL controls on runtime binaries.
            </p>
          </div>
        </div>
      )}

      {activeTab === 'history' && (
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left text-slate-700">
            <thead className="bg-slate-100 text-slate-900 font-bold uppercase border-b border-gray-200">
              <tr>
                <th className="px-4 py-2.5">Version</th>
                <th className="px-4 py-2.5">Release Date</th>
                <th className="px-4 py-2.5">Type</th>
                <th className="px-4 py-2.5">File Size</th>
                <th className="px-4 py-2.5 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {historyReleases.map((rel) => (
                <tr key={rel.version} className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3 font-semibold text-slate-900">{rel.version}</td>
                  <td className="px-4 py-3">{rel.date}</td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-0.5 bg-slate-200 text-slate-800 rounded font-medium text-[11px]">
                      {rel.type}
                    </span>
                  </td>
                  <td className="px-4 py-3">{rel.size}</td>
                  <td className="px-4 py-3 text-right">
                    <button
                      onClick={() => { window.location.hash = `release-${rel.version}`; }}
                      className="text-[#e31837] hover:underline font-semibold"
                    >
                      Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
