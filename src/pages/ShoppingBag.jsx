function ShoppingBag({ cart = [], removeFromCart = () => {}, onClose }) {
  const total = cart.reduce((sum, product) => sum + product.price, 0);

  return (
    <div className="bg-[#0b0a0a] p-5 text-white sm:p-7">
      {cart.length === 0 ? (
        <div className="py-8 text-center sm:py-10">
          <span aria-hidden="true" className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#d7c1a5]/20 text-2xl text-[#d7c1a5]">✧</span>
          <h3 className="mt-5 font-serif text-2xl text-[#eadbc7]">Your bag is waiting.</h3>
          <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-white/45">Explore the collection and find a piece that feels like it was made for you.</p>
          <button type="button" onClick={onClose} className="mt-6 rounded-full bg-[#6f152e] px-6 py-3 text-sm font-semibold transition hover:bg-[#8b1d3c]">Continue browsing <span aria-hidden="true">→</span></button>
        </div>
      ) : (
        <>
          <div className="max-h-[42vh] space-y-3 overflow-y-auto pr-1">
            {cart.map((product, index) => (
              <article key={`${product.id}-${index}`} className="flex gap-3 rounded-xl border border-white/10 bg-[#111010] p-3 sm:gap-4 sm:p-4">
                <div className="flex h-20 w-16 shrink-0 items-center justify-center rounded-lg bg-[radial-gradient(ellipse_at_50%_45%,rgba(111,21,46,0.18),transparent_60%),#1b191a] p-1.5 sm:h-24 sm:w-20"><img src={product.image} alt={product.title} className="h-full w-full object-contain" /></div>
                <div className="flex min-w-0 flex-1 flex-col justify-center"><p className="text-[9px] uppercase tracking-[0.18em] text-[#c8ae8d]">{product.category}</p><h3 className="mt-1 font-serif text-lg text-[#eadbc7]">{product.title.trim()}</h3><button type="button" onClick={() => removeFromCart(index)} className="mt-2 w-fit text-[11px] text-white/40 underline decoration-white/20 underline-offset-4 hover:text-rose-200">Remove</button></div>
                <p className="shrink-0 pt-1 text-xs font-semibold text-[#d7c1a5]">{product.price.toFixed(2)} EUR</p>
              </article>
            ))}
          </div>
          <div className="mt-5 border-t border-white/10 pt-4">
            <div className="flex justify-between text-sm text-white/55"><span>Subtotal</span><span>{total.toFixed(2)} EUR</span></div>
            <div className="mt-3 flex justify-between font-serif text-xl text-[#eadbc7]"><span>Total</span><span>{total.toFixed(2)} EUR</span></div>
            <button type="button" className="mt-5 w-full rounded-xl bg-[#6f152e] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#8b1d3c]">Continue to checkout <span aria-hidden="true">→</span></button>
          </div>
        </>
      )}
    </div>
  );
}

export default ShoppingBag;
