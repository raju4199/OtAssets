'use client';

import { useState } from 'react';

interface ContactSupportViewProps {
  onSubmitted?: () => void;
}

export default function ContactSupportView({ onSubmitted }: ContactSupportViewProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (onSubmitted) onSubmitted();
  };

  if (submitted) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm text-center flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xl">
          ✓
        </div>
        <h3 className="text-xl font-bold text-slate-900">Support Ticket Submitted!</h3>
        <p className="text-sm text-slate-600 max-w-md">
          Your request (Ticket #TK-2026-9481) has been received. A support engineer will reach out within 2 hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-2 bg-[#1a2332] text-white px-5 py-2.5 rounded text-xs font-semibold hover:bg-slate-800 transition-colors"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col gap-5">
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">Submit Technical Support Request</h2>
        <p className="text-sm text-slate-600">
          Direct line to our technical support team for firmware and workstation assistance.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-xs md:text-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="font-semibold text-slate-700">Full Name</label>
            <input required type="text" placeholder="John Doe" className="border border-gray-300 rounded p-2.5 bg-slate-50 focus:outline-none focus:border-[#e31837]" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-semibold text-slate-700">Work Email</label>
            <input required type="email" placeholder="johndoe@company.com" className="border border-gray-300 rounded p-2.5 bg-slate-50 focus:outline-none focus:border-[#e31837]" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="font-semibold text-slate-700">Affected Product Series</label>
            <select className="border border-gray-300 rounded p-2.5 bg-slate-50 focus:outline-none focus:border-[#e31837]">
              <option>OT Workstation Series 3.x</option>
              <option>ControlLogix 5580</option>
              <option>Industrial HMI Panel</option>
              <option>Other / General Inquiry</option>
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-semibold text-slate-700">Severity Level</label>
            <select className="border border-gray-300 rounded p-2.5 bg-slate-50 focus:outline-none focus:border-[#e31837]">
              <option>Low — General Question</option>
              <option>Medium — Non-blocking Issue</option>
              <option>High — System Degraded</option>
              <option>Critical — Production Down</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="font-semibold text-slate-700">Detailed Description</label>
          <textarea required rows={4} placeholder="Describe the behavior or error code you are observing..." className="border border-gray-300 rounded p-2.5 bg-slate-50 focus:outline-none focus:border-[#e31837]"></textarea>
        </div>

        <button type="submit" className="bg-[#e31837] hover:bg-[#c41230] text-white font-bold py-3 rounded text-sm transition-colors shadow-md w-fit px-8 cursor-pointer">
          Submit Ticket →
        </button>
      </form>
    </div>
  );
}
