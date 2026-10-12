import React, { useState, useEffect } from 'react';
import { ShoppingBag, Heart, Search, Calendar, Menu, X } from 'lucide-react';

export default function Navbar({ 
  cartCount, 
  wishlistCount, 
  onOpenCart, 
  onOpenWishlist, 
  onOpenBooking,
  currency,
  setCurrency
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-[#0B0B0C]/90 backdrop-blur-md border-b border-[#222226] py-4' 
          : 'bg-gradient-to-b from-[#0B0B0C]/80 to-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden text-[#E8DCCB] hover:text-[#B08C59] transition-colors"
          >
            <Menu size={24} />
          </button>

          {/* Left Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-xs uppercase tracking-[0.25em] font-medium text-[#D5C3A5]">
            <a href="#collections" className="hover:text-white transition-colors duration-300">Collections</a>
            <a href="#vault" className="hover:text-white transition-colors duration-300">The Vault</a>
            <a href="#craft" className="hover:text-white transition-colors duration-300">Savoir-Faire</a>
            <button 
              onClick={onOpenBooking} 
              className="text-[#B08C59] hover:text-white flex items-center gap-1.5 transition-colors duration-300"
            >
              <Calendar size={13} />
              <span>Private Salon</span>
            </button>
          </nav>

          {/* Brand Logo */}
          <a href="#" className="text-center group">
            <span className="block font-serif text-xl sm:text-2xl tracking-[0.35em] text-[#FAF8F5] uppercase group-hover:text-[#B08C59] transition-colors duration-500">
              MAISON AURELIA
            </span>
            <span className="block text-[9px] tracking-[0.45em] text-[#C2A77D] font-light uppercase">
              Haute Joaillerie Paris
            </span>
          </a>

          {/* Right Action Icons */}
          <div className="flex items-center space-x-5 text-[#E8DCCB]">
            {/* Currency Selector */}
            <select 
              value={currency} 
              onChange={(e) => setCurrency(e.target.value)}
              className="bg-transparent text-xs text-[#C2A77D] border border-[#382916] rounded px-2 py-1 focus:outline-none focus:border-[#B08C59] cursor-pointer"
            >
              <option value="USD" className="bg-[#151517]">USD ($)</option>
              <option value="EUR" className="bg-[#151517]">EUR (€)</option>
              <option value="GBP" className="bg-[#151517]">GBP (£)</option>
            </select>

            <button 
              onClick={onOpenWishlist}
              className="relative hover:text-[#B08C59] transition-colors duration-300"
              title="View Wishlist"
            >
              <Heart size={20} strokeWidth={1.5} />
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#B08C59] text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            <button 
              onClick={onOpenCart}
              className="relative hover:text-[#B08C59] transition-colors duration-300"
              title="Shopping Bag"
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#FAF8F5] text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#0B0B0C]/95 backdrop-blur-xl flex flex-col p-8 md:hidden">
          <div className="flex justify-between items-center mb-12">
            <span className="font-serif tracking-[0.3em] text-[#FAF8F5]">MAISON AURELIA</span>
            <button onClick={() => setMobileMenuOpen(false)} className="text-[#FAF8F5]">
              <X size={28} />
            </button>
          </div>
          <nav className="flex flex-col space-y-6 text-lg uppercase tracking-[0.2em] font-serif text-[#FAF8F5]">
            <a href="#collections" onClick={() => setMobileMenuOpen(false)}>Collections</a>
            <a href="#vault" onClick={() => setMobileMenuOpen(false)}>The Vault</a>
            <a href="#craft" onClick={() => setMobileMenuOpen(false)}>Savoir-Faire</a>
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
              className="text-left text-[#B08C59]"
            >
              Book Private Salon
            </button>
          </nav>
        </div>
      )}
    </>
  );
}
