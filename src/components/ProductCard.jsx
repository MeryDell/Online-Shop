function ProductCard({ product, onAddToCart }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#121212] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#7b1833]/60 hover:shadow-xl hover:shadow-[#4b1022]/20">
      <div className="relative flex h-72 items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_50%_45%,rgba(111,21,46,0.16),transparent_60%),linear-gradient(to_bottom,#1b191a,#0d0d0d)] p-5">
        <img src={product.image} alt={product.title} loading="lazy" className="h-full w-auto max-w-full rounded-md object-contain shadow-lg transition duration-500 group-hover:scale-[1.06]" />
        <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/55 px-3 py-1 text-[9px] font-medium uppercase tracking-[0.18em] text-[#eadbc7]/80">{product.featured ? "Selected" : product.category}</span>
        {product.featured && <span aria-hidden="true" className="absolute right-4 top-4 text-sm text-[#d7c1a5]">✦</span>}
        <span className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h2 className="min-h-14 font-serif text-2xl font-medium leading-snug text-[#eadbc7]">{product.title.trim()}</h2>
        <div className="mt-3 flex items-center justify-between gap-3">
          <p className="text-lg font-semibold tracking-tight text-[#d7c1a5]">{product.price.toLocaleString()} <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-white/40">EUR</span></p>
          <span className="text-[10px] uppercase tracking-[0.14em] text-white/35">{product.category}</span>
        </div>
        
        <button onClick={() => onAddToCart(product)} className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-[#7b1833]/70 bg-[#6f152e]/90 px-4 py-3 text-sm font-semibold text-white transition duration-200 hover:border-[#a83a58] hover:bg-[#8b1d3c] focus:outline-none focus:ring-2 focus:ring-[#a83a58]/60">
          Add to bag <span aria-hidden="true" className="transition group-hover:translate-x-1">→</span>
        </button>
      </div>
    </article>
  );
} 

export default ProductCard;
