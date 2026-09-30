export default function HeroSection() {
  return (
    <section className="border-b border-[#dedede] bg-white px-6 py-12 md:px-10 lg:py-16">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 lg:flex-row lg:items-end">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#cd163f]">
            OTassets support
          </p>
          <h1 className="text-4xl font-light leading-[1.08] tracking-tight text-[#2d2d2d] md:text-6xl">
            Firmware &amp; patch updates for <span className="text-[#1466b8]">confident operations.</span>
          </h1>
        </div>
        <a href="#support-workspace" className="inline-flex w-fit items-center gap-2 border-b-2 border-[#cd163f] pb-2 text-sm font-semibold text-[#2d2d2d] transition-colors hover:text-[#cd163f]">
          Explore support
          <span aria-hidden="true">-&gt;</span>
        </a>
      </div>
    </section>
  );
}
