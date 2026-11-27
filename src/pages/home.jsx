import { useState } from "react";
import { useOutletContext } from "react-router";

import Hero from "../components/Hero";
import ProductList from "../components/ProductList";
// Ուշադրություն․ ֆայլի անունը պետք է լինի ProductModal.jsx, ոչ թե ProductModel.jsx
import ProductModal from "../components/ProductModal"; 

function Home() {
  const { addToCart } = useOutletContext();
  
  // 1. State ընտրված ապրանքի համար
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="min-h-screen bg-[#090909] text-white">
      <main>
        <Hero />
        {/* 2. Փոխանցում ենք onProductClick-ը, որը պահում է ընտրված ապրանքը */}
        <ProductList 
          onAddToCart={addToCart} 
          onProductClick={setSelectedProduct} 
        />
      </main>

      {/* 3. Մոդալը ցուցադրվում է միայն երբ selectedProduct-ը կա */}
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
          onAddToCart={addToCart} 
        />
      )}
    </div>
  );
}

export default Home;