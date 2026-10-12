import React from 'react';
import { Heart, Eye, ShoppingBag } from 'lucide-react';

export default function ProductCard({ 
  product, 
  currency, 
  onQuickView, 
  onAddToCart, 
  onToggleWishlist, 
  isWishlisted 
}) {
  const formatPrice = (val) => {
    switch(currency) {
      case 'EUR': return `€${Math.round(val * 0.92).toLocaleString()}`;
      case 'GBP': return `£${Math.round(val * 0.79).toLocaleString()}`;
      default: return `$${val.toLocaleString()}`;
    }
  };

  return (
    <div className="group bg-[#151517] border border-[#222226] flex flex-col justify-between overflow-hidden transition-all duration-300 hover:border-[#B08C59]/60">
      <div className="relative aspect-square overflow-hidden bg-[#0B0B0C]">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
          {product.isNew && (
            <span className="bg-[#B08C59] text-black text-[9px] font-bold px-2 py-0.5 tracking-[0.2em] uppercase">
              New
            </span>
          )}
          {product.isFeatured && (
            <span className="bg-[#FAF8F5]/90 text-black text-[9px] font-bold px-2 py-0.5 tracking-[0.2em] uppercase">
              Exclusive
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button 
          onClick={(e) => { e.stopPropagation(); onToggleWishlist(product); }}
          className="absolute top-3 right-3 p-2 rounded-full bg-[#0B0B0C]/70 backdrop-blur-md text-[#FAF8F5] hover:text-[#B08C59] transition-colors z-10"
        >
          <Heart size={16} fill={isWishlisted ? "#B08C59" : "none"} color={isWishlisted ? "#B08C59" : "currentColor"} />
        </button>

        {/* Hover Quick Action Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
          <div className="flex gap-2 w-full">
            <button 
              onClick={() => onQuickView(product)}
              className="flex-1 py-2.5 bg-[#FAF8F5] text-black text-[10px] uppercase font-bold tracking-[0.2em] flex items-center justify-center gap-1.5 hover:bg-[#B08C59] transition-colors"
            >
              <Eye size={13} />
              <span>Inspect</span>
            </button>
            <button 
              onClick={() => onAddToCart(product)}
              className="p-2.5 bg-[#B08C59] text-black hover:bg-white transition-colors"
              title="Add to Shopping Bag"
            >
              <ShoppingBag size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex justify-between items-baseline text-[11px] text-[#C2A77D] tracking-[0.2em] uppercase mb-1">
            <span>{product.category}</span>
            <span>{product.carat}</span>
          </div>
          <h4 className="font-serif text-sm tracking-[0.1em] text-[#FAF8F5] group-hover:text-[#B08C59] transition-colors mb-2 line-clamp-1">
            {product.name}
          </h4>
          <p className="text-[11px] text-[#D5C3A5] font-light line-clamp-1 mb-3">
            {product.metal} • {product.gemstone}
          </p>
        </div>

        <div className="pt-3 border-t border-[#222226] flex items-center justify-between">
          <span className="font-serif text-base text-[#FAF8F5] tracking-wider">
            {formatPrice(product.price)}
          </span>
          <span className="text-[10px] text-[#C2A77D] uppercase tracking-widest font-light">
            Maison Certified
          </span>
        </div>
      </div>
    </div>
  );
}
