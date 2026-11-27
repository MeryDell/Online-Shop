import React, { useEffect, useState } from 'react';

const ProductModal = ({ product, onClose, onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Երբ նոր ապրանք է բացվում, զրոյացնում ենք չափսը
  useEffect(() => {
    setSelectedSize(null);
  }, [product]);

  if (!product) return null;

  // 1. Ստուգում ենք՝ արդյոք ապրանքն ունի իրական չափսեր (ոչ One Size, ոչ Adjustable)
  const hasRealSizes = product.sizes && 
                       product.sizes.length > 0 && 
                       !product.sizes.includes("One Size") && 
                       !product.sizes.includes("Adjustable");

  // 2. Կոճակը արգելափակելու պայմանը (միայն եթե իրական չափսեր կան և չընտրված է)
  const isSizeMissing = hasRealSizes && !selectedSize;

  const handleAddToCart = () => {
    if (isSizeMissing) return;
    onAddToCart(product, selectedSize || "One Size"); // Եթե չափս չկա, ուղարկում ենք "One Size"
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose} 
    >
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#1a1a1a] rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row text-[#f4ebd9]"
        onClick={(e) => e.stopPropagation()} 
      >
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black rounded-full transition-colors text-white"
        >
          ✕
        </button>

        <div className="w-full md:w-1/2 p-6 flex flex-col items-center justify-center bg-[#111]">
          <img 
            src={product.images[0]} 
            alt={product.title} 
            className="w-full h-auto max-h-[400px] object-contain rounded-lg shadow-lg mb-4"
          />
          {product.images.length > 1 && (
            <div className="flex gap-2">
              {product.images.map((img, index) => (
                <img 
                  key={index} 
                  src={img} 
                  alt={`${product.title} view ${index + 1}`} 
                  className="w-16 h-16 object-cover rounded cursor-pointer border border-transparent hover:border-[#7a1a33]"
                />
              ))}
            </div>
          )}
        </div>

        <div className="w-full md:w-1/2 p-8 overflow-y-auto">
          <p className="text-sm tracking-widest uppercase text-gray-400 mb-2">{product.category}</p>
          <h2 className="text-4xl font-serif mb-4">{product.title}</h2>
          <p className="text-2xl font-bold mb-6">{product.price.toFixed(2)} EUR</p>
          
          <p className="text-gray-300 mb-8 text-sm leading-relaxed">{product.description}</p>

          {/* 3. ՉԱՓՍԵՐԻ ՀԱՏՎԱԾԸ - ցուցադրվում է միայն եթե իրական չափսեր կան */}
          {hasRealSizes && (
            <div className="mb-8">
              <h3 className="text-sm uppercase tracking-widest mb-3">
                Size <span className="text-red-400">*</span>
              </h3>
              <div className="flex gap-2 flex-wrap">
                {product.sizes.map((size) => (
                  <button 
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded text-sm transition-colors ${
                      selectedSize === size 
                        ? 'border-[#d7c1a5] bg-[#d7c1a5]/10 text-[#d7c1a5]' 
                        : 'border-gray-600 hover:border-[#7a1a33] hover:bg-[#7a1a33]/20' 
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 4. Եթե կարգավորվող է, ցույց ենք տալիս տեղեկատվություն */}
          {product.sizes && product.sizes.includes("Adjustable") && (
            <div className="mb-8 flex items-center gap-2 text-sm text-[#d7c1a5] bg-[#d7c1a5]/10 p-3 rounded-lg border border-[#d7c1a5]/20">
              <span>✨</span>
              <span>This piece is adjustable to fit you perfectly.</span>
            </div>
          )}

          {/* 5. ADD TO BAG ԿՈՃԱԿԸ */}
          <button 
            onClick={handleAddToCart}
            disabled={isSizeMissing}
            className={`w-full py-4 rounded-full font-bold text-lg transition-colors mb-8 ${
              isSizeMissing 
                ? 'bg-gray-600 text-gray-400 cursor-not-allowed' 
                : 'bg-[#7a1a33] text-white hover:bg-[#5a1225]' 
            }`}
          >
            {isSizeMissing ? 'Select a size first' : 'Add to bag →'}
          </button>

          <div className="border-t border-gray-700 pt-4 space-y-4 text-sm">
            <details className="group cursor-pointer">
              <summary className="flex justify-between items-center font-semibold list-none">
                Material & Plating
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-gray-400 mt-2 pl-2">{product.details.material}</p>
            </details>
            <details className="group cursor-pointer">
              <summary className="flex justify-between items-center font-semibold list-none">
                Stone Details
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-gray-400 mt-2 pl-2">{product.details.stones}</p>
            </details>
            <details className="group cursor-pointer">
              <summary className="flex justify-between items-center font-semibold list-none">
                Care Guide
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-gray-400 mt-2 pl-2">{product.details.care}</p>
            </details>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductModal;