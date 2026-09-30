export default function UtilityNav() {
  return (
    <div className="bg-[#f5f5f5] border-b border-[#dedede] px-6 md:px-10 py-2 flex justify-between items-center text-[11px] text-[#444]">
      <div className="flex items-center gap-1.5 cursor-pointer hover:text-[#e31837] transition-colors">
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
        <span className="font-semibold">United States | English</span>
        <svg className="w-3 h-3 fill-current mt-0.5" viewBox="0 0 24 24">
          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
        </svg>
      </div>

      <ul className="hidden md:flex gap-6">
        <li><a href="#support-workspace" className="hover:text-[#cd163f] transition-colors">My OTassets</a></li>
        <li><a href="#support-workspace" className="hover:text-[#cd163f] transition-colors">Contact Us</a></li>
        <li>
          <a href="#support-workspace" className="flex items-center gap-1 hover:text-[#cd163f] transition-colors">
            Resources
            <svg className="w-3 h-3 fill-current mt-0.5" viewBox="0 0 24 24">
              <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
}
