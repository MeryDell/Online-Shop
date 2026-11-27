function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/10 bg-[radial-gradient(ellipse_at_78%_45%,rgba(111,21,46,0.3),transparent_40%),linear-gradient(120deg,#090909,#171113_58%,#090909)]">
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-8 h-80 w-80 rounded-full border border-[#d7c1a5]/10 sm:right-8 sm:h-[30rem] sm:w-[30rem]" />
      <div aria-hidden="true" className="pointer-events-none absolute right-0 top-1/2 hidden h-72 w-72 -translate-y-1/2 rounded-full bg-[#6f152e]/20 blur-3xl md:block" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 md:min-h-[560px] md:grid-cols-[1.05fr_0.95fr] md:py-24">
        <div className="relative z-10 max-w-2xl">
          <p className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.34em] text-[#d7c1a5] sm:text-xs"><span className="h-px w-8 bg-[#7b1833]" />Made to be remembered</p>
          <h1 className="font-serif text-5xl font-medium leading-[1.02] tracking-tight text-[#eadbc7] sm:text-6xl lg:text-7xl">Le beauté du<br /><span className="font-normal italic text-[#d7c1a5]">mystère.</span></h1>
          <p className="mt-6 max-w-lg text-sm leading-7 text-[#d9cbbb]/65 sm:text-base">A considered collection of timeless pieces, selected for those who find beauty in the details.</p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <a href="#products" className="inline-flex items-center gap-3 rounded-full bg-[#6f152e] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#8b1d3c] focus:outline-none focus:ring-2 focus:ring-[#a83a58]">Explore the collection <span aria-hidden="true">→</span></a>
            <a href="#story" className="text-sm text-[#d9cbbb]/65 underline decoration-white/20 underline-offset-4 transition hover:text-[#eadbc7]">Our story</a>
          </div>
          <div className="mt-12 flex gap-8 border-t border-white/10 pt-6 text-[10px] uppercase tracking-[0.2em] text-white/40 sm:gap-12">
            <span><strong className="mb-1 block font-serif text-lg font-normal normal-case tracking-normal text-[#eadbc7]">01</strong>Curated pieces</span>
            <span><strong className="mb-1 block font-serif text-lg font-normal normal-case tracking-normal text-[#eadbc7]">02</strong>Made to keep</span>
            <span><strong className="mb-1 block font-serif text-lg font-normal normal-case tracking-normal text-[#eadbc7]">03</strong>Made for you</span>
          </div>
        </div>

        <a href="#products" aria-label="Explore the L’Obscur jewelry collection" className="group relative mx-auto flex aspect-[4/5] w-full max-w-md items-center justify-center overflow-hidden rounded-t-[48%] border border-[#d7c1a5]/15 bg-[radial-gradient(ellipse_at_50%_38%,rgba(111,21,46,0.42),transparent_55%),linear-gradient(155deg,#282022,#100e0f_65%)] shadow-[0_25px_100px_rgba(0,0,0,0.5)]">
          <div aria-hidden="true" className="absolute inset-4 rounded-t-[48%] border border-white/10" />
          <div aria-hidden="true" className="absolute inset-8 rounded-t-[48%] border border-[#d7c1a5]/10" />
          <div className="relative flex h-48 w-48 items-center justify-center rounded-full border border-[#d7c1a5]/20 bg-black/20 shadow-[0_0_80px_rgba(111,21,46,0.28)] transition duration-700 group-hover:scale-105 sm:h-56 sm:w-56">
            <span className="font-serif text-7xl font-light tracking-[-0.12em] text-[#eadbc7]/80 sm:text-8xl">L’O</span>
            <span aria-hidden="true" className="absolute -right-1 top-6 text-2xl text-[#d7c1a5]">✦</span>
          </div>
          <span className="absolute bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] font-medium uppercase tracking-[0.28em] text-[#eadbc7]/60">A little mystery goes a long way</span>
          <span aria-hidden="true" className="absolute right-7 top-10 text-xs text-[#d7c1a5]/50">✧</span>
          <span aria-hidden="true" className="absolute bottom-24 left-8 text-lg text-[#d7c1a5]/40">✦</span>
        </a>
      </div>
      <div className="border-t border-white/10 bg-black/20">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 py-4 text-[9px] font-medium uppercase tracking-[0.22em] text-white/40 sm:gap-x-14 sm:text-[10px]">
          <span>✦ A detail to remember</span><span>✦ Pieces with a point of view</span><span>✦ Find your signature</span>
        </div>
      </div>
    </section>
    
  );
}

export default Hero;
