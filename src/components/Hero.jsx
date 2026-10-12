import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';

export default function Hero({ onExplore }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Dark Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=85&w=2000" 
          alt="High Jewelry Haute Joaillerie"
          className="w-full h-full object-cover object-center filter brightness-[0.35] scale-105 transform animate-pulse duration-[10000ms]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-transparent to-[#0B0B0C]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0B0B0C_90%)]" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center mt-16">
        <div className="inline-flex items-center gap-2 border border-[#B08C59]/40 bg-[#151517]/60 backdrop-blur-md px-4 py-1.5 rounded-full mb-6 text-[#D5C3A5] text-[11px] uppercase tracking-[0.3em]">
          <Sparkles size={13} className="text-[#B08C59]" />
          <span>New Haute Joaillerie Collection 2026</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light tracking-[0.25em] text-[#FAF8F5] leading-tight mb-6 uppercase">
          Eternity <span className="italic font-subserif text-[#B08C59] lowercase text-5xl sm:text-7xl">in</span> Facets
        </h1>

        <p className="max-w-xl mx-auto text-sm sm:text-base text-[#D5C3A5] font-light tracking-[0.1em] leading-relaxed mb-10">
          Peerless gems, hand-sculpted precious metals, and timeless French craftsmanship. Designed for connoisseurs of authentic rarity.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={onExplore}
            className="w-full sm:w-auto px-9 py-4 bg-[#B08C59] text-black text-xs font-semibold uppercase tracking-[0.3em] hover:bg-[#FAF8F5] transition-all duration-300 transform hover:-translate-y-0.5 shadow-xl shadow-[#B08C59]/10"
          >
            Explore The Vault
          </button>
          <a 
            href="#collections"
            className="w-full sm:w-auto px-9 py-4 border border-[#B08C59]/50 text-[#FAF8F5] text-xs font-medium uppercase tracking-[0.3em] hover:bg-[#151517] transition-all duration-300"
          >
            View Curated Series
          </a>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-[#B08C59]/80 animate-bounce">
        <span className="text-[9px] uppercase tracking-[0.3em] mb-2 font-medium">Discover</span>
        <ArrowDown size={16} />
      </div>
    </section>
  );
}
