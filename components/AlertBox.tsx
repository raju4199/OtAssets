export default function AlertBox() {
  return (
    <div className="bg-red-50 border border-red-200 border-l-4 border-l-[#e31837] rounded-md p-4 flex gap-4 items-start shadow-xs">
      <div className="flex-shrink-0 mt-0.5">
        <svg className="w-6 h-6 fill-[#e31837]" viewBox="0 0 24 24">
          <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
        </svg>
      </div>
      <div>
        <h4 className="text-red-700 text-sm font-bold mb-1">Important Security Update</h4>
        <p className="text-red-950 text-xs md:text-sm leading-relaxed">
          A critical security update is available for OT workstations to address recent security vulnerabilities. Please download and install the latest patch at the earliest.
        </p>
      </div>
    </div>
  );
}
