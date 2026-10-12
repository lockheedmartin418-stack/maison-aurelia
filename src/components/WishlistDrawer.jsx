import React from 'react';
import { X, Trash2, ShoppingBag } from 'lucide-react';

export default function WishlistDrawer({ 
  isOpen, 
  onClose, 
  wishlist, 
  onRemove, 
  onMoveToCart, 
  currency 
}) {
  if (!isOpen) return null;

  const formatPrice = (val) => {
    switch(currency) {
      case 'EUR': return `€${Math.round(val * 0.92).toLocaleString()}`;
      case 'GBP': return `£${Math.round(val * 0.79).toLocaleString()}`;
      default: return `$${val.toLocaleString()}`;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-sm">
      <div className="w-full max-w-md bg-[#151517] border-l border-[#222226] h-full flex flex-col justify-between p-6 overflow-y-auto">
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-[#222226]">
            <div>
              <h3 className="font-serif text-lg tracking-[0.2em] text-[#FAF8F5] uppercase">
                Curated Wishlist
              </h3>
              <span className="text-[11px] text-[#C2A77D] tracking-wider">
                {wishlist.length} reserved item{wishlist.length !== 1 ? 's' : ''}
              </span>
            </div>
            <button onClick={onClose} className="text-[#C2A77D] hover:text-white">
              <X size={20} />
            </button>
          </div>

          {wishlist.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-sm text-[#C2A77D] font-light tracking-wider mb-4">
                No pieces saved to your private curation yet.
              </p>
              <button 
                onClick={onClose}
                className="text-xs uppercase tracking-[0.25em] text-[#B08C59] underline"
              >
                Browse The Vault
              </button>
            </div>
          ) : (
            <div className="divide-y divide-[#222226] my-4">
              {wishlist.map((item) => (
                <div key={item.id} className="py-4 flex gap-4">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-16 h-16 object-cover bg-black"
                  />
                  <div className="flex-1">
                    <h5 className="font-serif text-xs text-[#FAF8F5] line-clamp-1">{item.name}</h5>
                    <div className="text-xs text-[#B08C59] my-1">{formatPrice(item.price)}</div>
                    
                    <div className="flex items-center justify-between mt-2">
                      <button 
                        onClick={() => onMoveToCart(item)}
                        className="text-[10px] text-black font-semibold bg-[#B08C59] px-2.5 py-1 uppercase tracking-wider flex items-center gap-1 hover:bg-white transition-colors"
                      >
                        <ShoppingBag size={11} />
                        <span>Move to Bag</span>
                      </button>

                      <button 
                        onClick={() => onRemove(item.id)}
                        className="text-[#C2A77D] hover:text-red-400 p-1"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <button 
          onClick={onClose}
          className="w-full py-3 border border-[#382916] text-[#FAF8F5] text-xs uppercase tracking-[0.2em] hover:bg-[#222226]"
        >
          Continue Viewing
        </button>
      </div>
    </div>
  );
}
