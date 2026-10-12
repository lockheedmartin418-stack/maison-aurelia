import React from 'react';
import { COLLECTIONS } from '../data/products';
import { ArrowRight } from 'lucide-react';

export default function CollectionsSection() {
  return (
    <section id="collections" className="py-24 bg-[#0B0B0C] border-t border-[#151517]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#B08C59] text-xs uppercase tracking-[0.35em] block mb-3 font-semibold">
            Signature Ensembles
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF8F5] uppercase tracking-[0.2em] mb-4">
            Curated Collections
          </h2>
          <div className="w-16 h-0.5 bg-[#B08C59] mx-auto mb-4" />
          <p className="text-[#C2A77D] text-sm tracking-wide">
            Each collection explores a distinct philosophical chapter of gemstone architecture and rare goldsmithing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COLLECTIONS.map((c, idx) => (
            <div key={idx} className="group relative overflow-hidden bg-[#151517] border border-[#222226] cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={c.image} 
                  alt={c.title} 
                  className="w-full h-full object-cover object-center filter brightness-90 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-out"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-[#0B0B0C]/40 to-transparent flex flex-col justify-end p-8">
                <span className="text-[#B08C59] text-[10px] tracking-[0.3em] uppercase mb-1 font-semibold">{c.subtitle}</span>
                <h3 className="font-serif text-2xl text-[#FAF8F5] tracking-[0.15em] uppercase mb-2">{c.title}</h3>
                <p className="text-xs text-[#D5C3A5] font-light leading-relaxed mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
                  {c.desc}
                </p>
                <div className="inline-flex items-center gap-2 text-xs text-[#FAF8F5] font-medium tracking-[0.2em] uppercase group-hover:text-[#B08C59] transition-colors">
                  <span>Explore Series</span>
                  <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
