'use client';

import { useState } from 'react';

export default function TroubleshootingView() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What should I do if patch installation fails with Error Code 0x80070005?',
      a: 'Error 0x80070005 indicates insufficient administrative privileges. Ensure you launch patch.exe by right-clicking and selecting "Run as Administrator", and verify that third-party antivirus software is temporarily paused during installation.'
    },
    {
      q: 'Will applying this firmware patch disrupt active PLC controller operations?',
      a: 'The patch updates workstation diagnostic binaries and driver layers. Controller operations remain active, but workstation monitoring services will restart automatically during setup.'
    },
    {
      q: 'How can I verify if the update applied successfully?',
      a: 'Open the OT Workstation Diagnostic Utility from the Start Menu and verify that the version string reads 3.2.1.0 and the integrity status reports "Verified".'
    }
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col gap-5">
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">Troubleshooting & Diagnostics</h2>
        <p className="text-sm text-slate-600">
          Frequently encountered installation queries and diagnostic procedures.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              className="w-full text-left p-4 bg-slate-50 hover:bg-slate-100 flex justify-between items-center font-bold text-sm text-slate-800 transition-colors"
            >
              <span>{faq.q}</span>
              <span className="text-lg text-slate-500">{openFaq === idx ? '−' : '+'}</span>
            </button>
            {openFaq === idx && (
              <div className="p-4 bg-white text-xs md:text-sm text-slate-600 leading-relaxed border-t border-gray-200">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
