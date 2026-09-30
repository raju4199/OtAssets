export default function InstallationSteps() {
  const steps = [
    { number: 1, title: 'Download', text: 'Click the download button above to get patch.exe' },
    { number: 2, title: 'Run', text: 'Run the downloaded file as Administrator' },
    { number: 3, title: 'Follow Setup', text: 'Follow the on-screen installation steps' },
    { number: 4, title: 'Auto Update', text: 'Updates are applied automatically when available' },
  ];

  return (
    <div className="border border-gray-200 rounded-lg p-6 md:p-8 bg-white shadow-sm">
      <div className="flex items-center gap-2.5 text-lg font-bold text-gray-900 mb-8">
        <svg className="w-6 h-6 fill-[#1a2332]" viewBox="0 0 24 24">
          <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
        </svg>
        <span>Installation Instructions</span>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-2 relative">
        {steps.map((step, idx) => (
          <div key={step.number} className="flex flex-col md:flex-row items-center w-full md:w-auto">
            <div className="flex flex-col items-center text-center max-w-[150px]">
              <div className="w-10 h-10 rounded-full bg-[#1a2332] text-white font-bold text-base flex items-center justify-center mb-3">
                {step.number}
              </div>
              <h4 className="text-sm font-semibold text-gray-900 mb-1">{step.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">{step.text}</p>
            </div>

            {idx < steps.length - 1 && (
              <div className="my-3 md:my-0 md:mx-4 text-slate-300 transform rotate-90 md:rotate-0 flex-shrink-0">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
