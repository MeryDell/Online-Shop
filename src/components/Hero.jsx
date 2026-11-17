function Hero() {
  return (
   <section className="relative isolate overflow-hidden border-b border-white/10 bg-[radial-gradient(ellipse_at_78%_45%,rgba(111,21,46,0.28),transparent_42%),linear-gradient(120deg,#0b0b0b,#151113_58%,#090909)]">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 sm:px-8 md:grid-cols-[1.2fr_0.8fr] md:py-24">
            <div className="relative z-10 max-w-2xl">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-[#d7c1a5]">Made to be remembered.</p>
              <h1 className="font-serif text-5xl font-medium leading-[1.02] tracking-tight text-[#eadbc7] sm:text-6xl lg:text-7xl"><br />Le beauté du <br /><span className="font-normal italic text-[#d7c1a5]">mystère.</span></h1>
              <p className="mt-6 max-w-lg text-base leading-7 text-[#d9cbbb]/65">A considered collection of timeless pieces, selected for those who find beauty in the details.</p>
              <a href="#products" className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#6f152e] px-7 py-3.5 text-sm font-semibold transition hover:bg-[#8b1d3c] focus:outline-none focus:ring-2 focus:ring-[#a83a58]">Explore the collection <span aria-hidden="true">→</span></a>
            </div>
            <div aria-hidden="true" className="hidden h-64 items-center justify-center md:flex"><div className="flex h-64 w-64 items-center justify-center rounded-full border border-[#7b1833]/40 bg-[#6f152e]/10 shadow-[0_0_100px_rgba(111,21,46,0.22)]"><span className="text-8xl font-extralight tracking-[-0.12em] text-white/15">L’O</span></div></div>
          </div>
        </section>
  );
}

export default Hero;