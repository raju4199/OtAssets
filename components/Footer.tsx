import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1a2332] text-slate-400 p-8 md:p-10 text-xs flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-t border-slate-800">
      <div className="flex flex-col gap-5">
        <Link href="/" className="flex flex-col items-start gap-2.5 text-white text-lg font-bold">
          <Image
            src="/otassets-logo-transparent.png"
            alt="OTassets"
            width={214}
            height={50}
            className="h-auto w-[180px] bg-[#1a2332] object-contain md:w-[214px]"
          />
          <div>
            <span className="block text-[9px] font-normal text-slate-400 -mt-1 tracking-wide">
              Secure OT. Resilient Tomorrow.
            </span>
          </div>
        </Link>
        <div className="text-slate-400 leading-relaxed">
          © 2026 OTassets Technologies Pvt. Ltd.<br />
          All rights reserved.
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
        <div className="flex flex-wrap gap-4 text-slate-400 font-medium">
          <a href="#support-workspace" className="hover:text-white transition-colors">Support</a>
          <span>|</span>
          <a href="#support-workspace" className="hover:text-white transition-colors">Contact</a>
        </div>

        <div className="flex gap-3">
          <a href="#support-workspace" className="w-9 h-9 bg-white/10 rounded-md flex items-center justify-center hover:bg-[#e31837] transition-colors" aria-label="LinkedIn">
            <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a href="#support-workspace" className="w-9 h-9 bg-white/10 rounded-md flex items-center justify-center hover:bg-[#e31837] transition-colors" aria-label="YouTube">
            <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
          <a href="#support-workspace" className="w-9 h-9 bg-white/10 rounded-md flex items-center justify-center hover:bg-[#e31837] transition-colors" aria-label="X">
            <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        </div>

        <div className="md:border-l border-slate-700 md:pl-5 text-white font-medium text-sm leading-tight">
          Together for a<br />Safer Tomorrow
        </div>
      </div>
    </footer>
  );
}
