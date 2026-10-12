import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../data/products';
import ProductCard from './ProductCard';
import { Filter, SlidersHorizontal } from 'lucide-react';

export default function VaultCatalog({ 
  currency, 
  onQuickView, 
  onAddToCart, 
  onToggleWishlist, 
  wishlist 
}) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedMetal, setSelectedMetal] = useState('All');
  const [sortBy, setSortBy] = useState('featured');

  const categories = ['All', 'Rings', 'Necklaces', 'Earrings', 'Bracelets'];
  const metals = ['All', 'Platinum', 'Yellow Gold', 'Rose Gold', 'White Gold'];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchMetal = selectedMetal === 'All' || item.metal.toLowerCase().includes(selectedMetal.toLowerCase());
      return matchCategory && matchMetal;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      return 0; // default featured
    });
  }, [selectedCategory, selectedMetal, sortBy]);

  return (
    <section id="vault" className="py-24 bg-[#0B0B0C] border-t border-[#151517]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-[#B08C59] text-xs uppercase tracking-[0.35em] block mb-2 font-semibold">
              Permanent Archive
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF8F5] uppercase tracking-[0.2em]">
              The High Jewelry Vault
            </h2>
          </div>
          <div className="flex items-center gap-3 text-xs text-[#C2A77D]">
            <span>Displaying {filteredProducts.length} certified masterpieces</span>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-[#151517] border border-[#222226] p-4 mb-10 flex flex-wrap items-center justify-between gap-4">
          {/* Categories Buttons */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs uppercase tracking-[0.2em] px-3.5 py-1.5 transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#B08C59] text-black font-semibold'
                    : 'text-[#D5C3A5] hover:text-white hover:bg-[#222226]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Metal & Sort dropdowns */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs text-[#C2A77D] uppercase tracking-wider hidden sm:inline">Metal:</span>
              <select
                value={selectedMetal}
                onChange={(e) => setSelectedMetal(e.target.value)}
                className="bg-[#0B0B0C] text-xs text-[#FAF8F5] border border-[#382916] px-3 py-1.5 focus:outline-none focus:border-[#B08C59]"
              >
                {metals.map((m) => (
                  <option key={m} value={m}>{m === 'All' ? 'All Metals' : m}</option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-[#C2A77D] uppercase tracking-wider hidden sm:inline">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-[#0B0B0C] text-xs text-[#FAF8F5] border border-[#382916] px-3 py-1.5 focus:outline-none focus:border-[#B08C59]"
              >
                <option value="featured">Maison Curated</option>
                <option value="price-asc">Value: Low to High</option>
                <option value="price-desc">Value: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-[#222226]">
            <p className="font-serif text-lg text-[#C2A77D] tracking-wider mb-2">No jewels matching your bespoke filters.</p>
            <button 
              onClick={() => { setSelectedCategory('All'); setSelectedMetal('All'); }}
              className="text-xs uppercase tracking-[0.2em] text-[#B08C59] underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                currency={currency}
                onQuickView={onQuickView}
                onAddToCart={onAddToCart}
                onToggleWishlist={onToggleWishlist}
                isWishlisted={wishlist.some((w) => w.id === product.id)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
