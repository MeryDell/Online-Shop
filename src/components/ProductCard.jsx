function ProductCard({ product, onAddToCart }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#121212] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#7b1833]/60 hover:shadow-xl hover:shadow-[#4b1022]/20">
      <div className="relative flex h-64 items-center justify-center overflow-hidden bg-linear-to-b from-[#1b191a] to-[#0d0d0d] p-5">
        <img src={product.image} alt={product.title} className="h-full w-auto max-w-full rounded-md object-contain shadow-lg transition duration-300 group-hover:scale-[1.04]" />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h2 className="min-h-14 font-serif text-2xl font-medium leading-snug text-[#eadbc7]">{product.title}</h2>
        <p className="mt-4 text-xl font-semibold tracking-tight text-[#d7c1a5]">{product.price.toLocaleString()} EURO</p>
        <p className="mt-2 text-sm text-white/50">{product.category}</p>
        {product.featured && <span className="mt-3 inline-block w-fit rounded-full bg-[#6f152e]/30 px-3 py-1 text-xs font-medium text-[#eadbc7]">⭐ Featured</span>}
        
        <button onClick={() => onAddToCart(product)} className="mt-auto flex w-full items-center justify-center gap-2 rounded-xl bg-[#6f152e] px-4 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-[#8b1d3c] focus:outline-none focus:ring-2 focus:ring-[#a83a58]/60">
          Add to bag
        </button>
      </div>
    </article>
  );
} 

export default ProductCard;
