const resourceLinks = [
  { label: 'Downloads', icon: 'M12 3v11m0 0 4-4m-4 4-4-4M5 20h14' },
  { label: 'Knowledgebase', icon: 'M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5v-15Z' },
  { label: 'Documentation', icon: 'M6 3h9l3 3v15H6V3Zm3 6h6m-6 4h6m-6 4h4' },
  { label: 'Product Catalog', icon: 'M4 5h16v14H4V5Zm0 4h16M8 5v4m4-4v4m4-4v4' },
  { label: 'Training', icon: 'M7 3h10v18H7V3Zm3 4h4m-4 4h4m-4 4h3' },
  { label: 'Advisor', icon: 'M4 4h16v13H4V4Zm4 17h8m-4-4v4' },
];

export default function HomepageIntro() {
  return (
    <>
      <nav className="relative z-10 mx-6 -mt-8 flex flex-wrap justify-center bg-white px-4 py-5 shadow-[0_12px_35px_rgba(20,33,50,0.12)] md:mx-10 lg:flex-nowrap lg:px-8" aria-label="Support resources">
        {resourceLinks.map((item, index) => (
          <a
            key={item.label}
            href={item.label === 'Knowledgebase' ? '#knowledge-base' : '#support-workspace'}
            className={`flex min-w-[145px] flex-1 items-center justify-center gap-3 border-[#dedede] px-4 py-2 text-sm font-medium text-[#1466b8] transition-colors hover:text-[#cd163f] ${index > 0 ? 'border-l' : ''}`}
          >
            <svg className="h-7 w-7 flex-shrink-0 fill-none stroke-current stroke-1.5" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
            </svg>
            <span>{item.label}</span>
          </a>
        ))}
      </nav>

      <section className="px-6 pb-12 pt-16 md:px-10 lg:pb-16 lg:pt-20">
        <div className="max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#cd163f]">Support for your journey</p>
          <h2 className="max-w-5xl text-4xl font-light leading-[1.08] tracking-tight text-[#2d2d2d] md:text-6xl">
            Keep your operations moving with <span className="text-[#1466b8]">trusted automation support.</span>
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#666] md:text-xl">
            Find the updates, resources, and guidance you need to make your industrial systems more resilient, agile, and ready for what&apos;s next.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-r from-[#087fbd] via-[#124a88] to-[#a60045] px-6 py-12 text-white md:px-10 lg:py-16">
        <div className="pointer-events-none absolute -left-20 top-10 h-64 w-96 -skew-x-45 border-[28px] border-white/10" />
        <div className="pointer-events-none absolute -right-24 bottom-[-120px] h-80 w-80 -skew-x-45 border-[26px] border-white/10" />
        <div className="relative mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/85">Latest support updates</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">Resources that help you act with confidence</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {['Optimize production', 'Empower people', 'Build resilience', 'Drive sustainability'].map((item) => (
              <a key={item} href="#support-workspace" className="border border-white/75 px-4 py-2 text-sm transition-colors hover:bg-white hover:text-[#124a88]">
                {item}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
