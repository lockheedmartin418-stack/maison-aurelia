import React, { useState } from 'react';
import { X, Trash2, ShieldCheck, ArrowRight } from 'lucide-react';

export default function CartDrawer({ 
  isOpen, 
  onClose, 
  cart, 
  onUpdateQuantity, 
  onRemove, 
  currency 
}) {
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [promoMessage, setPromoMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const rawSubtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const subtotal = rawSubtotal * (1 - discount);

  const formatPrice = (val) => {
    switch(currency) {
      case 'EUR': return `€${Math.round(val * 0.92).toLocaleString()}`;
      case 'GBP': return `£${Math.round(val * 0.79).toLocaleString()}`;
      default: return `$${Math.round(val).toLocaleString()}`;
    }
  };

  const applyPromo = () => {
    if (promoCode.trim().toUpperCase() === 'MAISON10') {
      setDiscount(0.10);
      setPromoMessage('10% Private Atelier Privilege Applied');
    } else {
      setPromoMessage('Invalid invitation code');
    }
  };

  const handleCheckout = () => {
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-sm">
      <div className="w-full max-w-md bg-[#151517] border-l border-[#222226] h-full flex flex-col justify-between p-6 overflow-y-auto">
        {/* Top Header */}
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-[#222226]">
            <div>
              <h3 className="font-serif text-lg tracking-[0.2em] text-[#FAF8F5] uppercase">
                Your Vault Bag
              </h3>
              <span className="text-[11px] text-[#C2A77D] tracking-wider">
                {cart.length} unique creation{cart.length !== 1 ? 's' : ''}
              </span>
            </div>
            <button onClick={onClose} className="text-[#C2A77D] hover:text-white">
              <X size={20} />
            </button>
          </div>

          {/* Cart Items */}
          {isSuccess ? (
            <div className="py-16 text-center">
              <ShieldCheck size={48} className="text-[#B08C59] mx-auto mb-4" />
              <h4 className="font-serif text-xl text-[#FAF8F5] mb-2 uppercase tracking-widest">
                Acquisition Confirmed
              </h4>
              <p className="text-xs text-[#C2A77D] leading-relaxed mb-6 font-light">
                Our concierge has received your priority acquisition request. A certified courier will reach out for secure white-glove delivery scheduling.
              </p>
              <button
                onClick={() => { setIsSuccess(false); onClose(); }}
                className="px-6 py-2.5 bg-[#B08C59] text-black text-xs uppercase tracking-[0.2em] font-semibold"
              >
                Return to Gallery
              </button>
            </div>
          ) : cart.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-sm text-[#C2A77D] font-light tracking-wider mb-4">
                Your shopping bag is currently empty.
              </p>
              <button 
                onClick={onClose}
                className="text-xs uppercase tracking-[0.25em] text-[#B08C59] underline"
              >
                Discover Collections
              </button>
            </div>
          ) : (
            <div className="divide-y divide-[#222226] my-4">
              {cart.map((item) => (
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
                      <div className="flex items-center border border-[#382916] text-xs">
                        <button 
                          onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          className="px-2 py-0.5 text-[#C2A77D] hover:bg-[#222226]"
                        >-</button>
                        <span className="px-3 py-0.5 text-[#FAF8F5]">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-0.5 text-[#C2A77D] hover:bg-[#222226]"
                        >+</button>
                      </div>

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

        {/* Bottom Section */}
        {!isSuccess && cart.length > 0 && (
          <div className="pt-4 border-t border-[#222226]">
            {/* Promo code */}
            <div className="flex gap-2 mb-3">
              <input
                type="text"
                placeholder="Code (Try MAISON10)"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="flex-1 bg-[#0B0B0C] border border-[#382916] px-3 py-1.5 text-xs text-[#FAF8F5] placeholder-[#755833] focus:outline-none"
              />
              <button 
                onClick={applyPromo}
                className="px-3 py-1.5 bg-[#222226] text-xs text-[#FAF8F5] hover:bg-[#382916] uppercase tracking-wider"
              >
                Apply
              </button>
            </div>
            {promoMessage && (
              <p className={`text-[10px] mb-3 ${discount > 0 ? 'text-green-400' : 'text-red-400'}`}>
                {promoMessage}
              </p>
            )}

            {/* Calculations */}
            <div className="space-y-1.5 text-xs text-[#C2A77D] mb-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{formatPrice(rawSubtotal)}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-green-400">
                  <span>Privilege (10%)</span>
                  <span>-{formatPrice(rawSubtotal * discount)}</span>
                </div>
              )}
              <div className="flex justify-between text-[#FAF8F5] text-sm font-serif pt-2 border-t border-[#222226]">
                <span>Total Value</span>
                <span className="text-[#B08C59]">{formatPrice(subtotal)}</span>
              </div>
            </div>

            <button 
              onClick={handleCheckout}
              className="w-full py-3.5 bg-[#B08C59] hover:bg-[#FAF8F5] text-black text-xs uppercase tracking-[0.25em] font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight size={14} />
            </button>
            <p className="text-[10px] text-center text-[#755833] mt-2">
              Complimentary armored worldwide courier & transit insurance included.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
