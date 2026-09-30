export default function Breadcrumbs() {
  return (
    <div className="px-6 md:px-10 py-3.5 text-xs text-gray-500 flex items-center gap-2 bg-[#f4f4f4]">
      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
      </svg>
      <span>/</span>
      <span>Support</span>
      <span>/</span>
      <span>Firmware Updates</span>
      <span>/</span>
      <span className="text-[#e31837] font-semibold">OT Workstation Patch</span>
    </div>
  );
}
