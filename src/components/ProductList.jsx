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
            <div id="collections" className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                    <h2 className="font-serif text-4xl font-medium tracking-tight text-[#eadbc7] md:text-5xl">Our collection</h2>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {productsData.map((product) => (
                    <ProductCard 
                     key={product.id} 
                     product={product} 
                     onAddToCart={onAddToCart}
                    />
                ))}
            </div>
        </section>
    );
}

export default ProductList;
