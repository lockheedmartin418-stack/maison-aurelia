import React from 'react';
import { X, Shield, Sparkles, ShoppingBag, Heart } from 'lucide-react';

export default function QuickViewModal({ 
  product, 
  currency, 
  onClose, 
  onAddToCart, 
  onToggleWishlist, 
  isWishlisted 
}) {
  if (!product) return null;

  const formatPrice = (val) => {
    switch(currency) {
      case 'EUR': return `€${Math.round(val * 0.92).toLocaleString()}`;
      case 'GBP': return `£${Math.round(val * 0.79).toLocaleString()}`;
      default: return `$${val.toLocaleString()}`;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-4xl bg-[#151517] border border-[#382916] overflow-hidden shadow-2xl flex flex-col md:flex-row">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-[#D5C3A5] hover:text-white p-2"
        >
          <X size={22} />
        </button>

        {/* Product Image */}
        <div className="md:w-1/2 bg-[#0B0B0C] relative">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover object-center max-h-[500px]"
          />
          <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#B08C59]">
            {product.collection}
          </div>
        </div>

        {/* Details & Ordering */}
        <div className="md:w-1/2 p-8 flex flex-col justify-between">
          <div>
            <span className="text-[#B08C59] text-xs uppercase tracking-[0.3em] font-semibold block mb-2">
              {product.category}
            </span>
            <h3 className="font-serif text-2xl text-[#FAF8F5] tracking-[0.1em] mb-4">
              {product.name}
            </h3>

            <div className="text-2xl font-serif text-[#B08C59] mb-6">
              {formatPrice(product.price)}
            </div>

            <p className="text-xs text-[#D5C3A5] font-light leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Specifications */}
            <div className="bg-[#0B0B0C] border border-[#222226] p-4 space-y-2 mb-6 text-xs">
              <div className="flex justify-between text-[#C2A77D]">
                <span className="font-light">Precious Metal:</span>
                <span className="font-medium text-[#FAF8F5]">{product.metal}</span>
              </div>
              <div className="flex justify-between text-[#C2A77D]">
                <span className="font-light">Gemstone Composition:</span>
                <span className="font-medium text-[#FAF8F5]">{product.gemstone}</span>
              </div>
              <div className="flex justify-between text-[#C2A77D]">
                <span className="font-light">Total Carat Weight:</span>
                <span className="font-medium text-[#FAF8F5]">{product.carat}</span>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => { onAddToCart(product); onClose(); }}
              className="flex-1 py-3.5 bg-[#B08C59] hover:bg-[#FAF8F5] text-black font-semibold uppercase tracking-[0.25em] text-xs transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingBag size={14} />
              <span>Acquire Creation</span>
            </button>
            <button
              onClick={() => onToggleWishlist(product)}
              className="p-3.5 border border-[#382916] text-[#FAF8F5] hover:text-[#B08C59] transition-colors"
              title="Add to Wishlist"
            >
              <Heart size={18} fill={isWishlisted ? "#B08C59" : "none"} color={isWishlisted ? "#B08C59" : "currentColor"} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
