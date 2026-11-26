import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { fetchProducts } from "../api/productsApi";
import JewelryLoader from "./Loader";

function ProductList({ onAddToCart }) {

    const [productsData, setProductsData] = useState([])
    const [isloading, setIsloading] = useState(true)

    useEffect(() => {
        async function loadProductds() {
        try{
            setIsloading(true);

            const data = await fetchProducts();

            setProductsData(data);
        } catch {
            console.log("error");
        } finally {
            setIsloading(false);
        }
    }
    loadProductds();
    }, []);

    

    if (isloading) {
        return(
            <JewelryLoader />
        )
        
    }
    return (
        <section id="products" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20">
            <div id="collections" className="mb-9 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
                <div>
                    <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c8ae8d]">Selected for the details</p>
                    <h2 className="font-serif text-4xl font-medium tracking-tight text-[#eadbc7] md:text-5xl">Our collection<span className="text-[#7b1833]">.</span></h2>
                    <p className="mt-3 max-w-lg text-sm leading-6 text-white/45">Small details. Strong presence. Find the piece that feels like you.</p>
                </div>
                <a href="#story" className="group inline-flex w-fit items-center gap-3 border-b border-[#c8ae8d]/30 pb-2 text-xs font-medium uppercase tracking-[0.16em] text-[#d7c1a5] transition hover:border-[#d7c1a5]">Discover our world <span className="transition group-hover:translate-x-1">→</span></a>
            </div>

            <nav aria-label="Shop by category" className="mb-8 flex gap-2 overflow-x-auto pb-2">
                {["All pieces", "Necklaces", "Rings", "Bracelets", "Jewelry sets"].map((category, index) => (
                    <a key={category} href="#products" className={`whitespace-nowrap rounded-full border px-4 py-2 text-xs transition ${index === 0 ? "border-[#6f152e] bg-[#6f152e] text-white" : "border-white/10 text-white/55 hover:border-[#7b1833]/70 hover:text-[#eadbc7]"}`}>{category}</a>
                ))}
            </nav>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {productsData.map((product) => (
                    <ProductCard 
                     key={product.id} 
                     product={product} 
                     onAddToCart={onAddToCart}
                    />
                ))}
            </div>

            <div id="story" className="relative mt-20 overflow-hidden rounded-3xl border border-white/10 bg-[radial-gradient(ellipse_at_90%_50%,rgba(111,21,46,0.22),transparent_45%),linear-gradient(115deg,#151112,#0b0b0b)] px-7 py-10 sm:px-10 md:mt-28 md:px-14 md:py-14">
                <span aria-hidden="true" className="absolute -right-4 -top-16 font-serif text-[15rem] leading-none text-white/[0.025]">L’O</span>
                <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
                    <div className="max-w-2xl">
                        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c8ae8d]">A little about us</p>
                        <h3 className="font-serif text-3xl leading-tight text-[#eadbc7] sm:text-4xl">Beauty lives in<br /><span className="italic text-[#d7c1a5]">the details.</span></h3>
                        <p className="mt-5 max-w-xl text-sm leading-7 text-white/50">L’Obscur is a carefully chosen collection for everyday rituals and unforgettable moments. Find the piece that makes your own style feel a little more you.</p>
                    </div>
                    <a href="#products" className="inline-flex w-fit items-center gap-3 rounded-full border border-[#d7c1a5]/30 px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#eadbc7] transition hover:border-[#d7c1a5] hover:bg-white/5">Find your piece <span aria-hidden="true">↗</span></a>
                </div>
            </div>
        </section>
    );
}

export default ProductList;
