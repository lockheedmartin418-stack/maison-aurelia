import React from 'react';

export default function Footer({ onOpenBooking }) {
  return (
    <footer className="bg-[#0B0B0C] border-t border-[#151517] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Col */}
          <div className="space-y-4">
            <span className="font-serif text-lg tracking-[0.3em] text-[#FAF8F5] block">
              MAISON AURELIA
            </span>
            <p className="text-xs text-[#C2A77D] font-light leading-relaxed">
              Purveyors of rare natural diamonds, Colombian emeralds, and certified unheated gemstones since 1928.
            </p>
          </div>

          {/* Salons */}
          <div>
            <h4 className="font-serif text-xs uppercase tracking-[0.25em] text-[#FAF8F5] mb-4">
              Private Salons
            </h4>
            <ul className="text-xs text-[#C2A77D] space-y-2 font-light">
              <li>12 Place Vendôme, Paris</li>
              <li>740 Madison Ave, New York</li>
              <li>24 Rue du Rhône, Geneva</li>
              <li>45 New Bond Street, London</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-xs uppercase tracking-[0.25em] text-[#FAF8F5] mb-4">
              Concierge Services
            </h4>
            <ul className="text-xs text-[#C2A77D] space-y-2 font-light">
              <li><button onClick={onOpenBooking} className="hover:text-white">Bespoke Diamond Sourcing</button></li>
              <li><a href="#vault" className="hover:text-white">Heirloom Restoration</a></li>
              <li><a href="#craft" className="hover:text-white">Armored Worldwide Transport</a></li>
              <li><a href="#craft" className="hover:text-white">Gemological Appraisal</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-xs uppercase tracking-[0.25em] text-[#FAF8F5] mb-4">
              Private Gazette
            </h4>
            <p className="text-xs text-[#C2A77D] font-light mb-3">
              Receive confidential notices of rare stone acquisitions prior to auction.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="salon@client.com"
                className="bg-[#151517] border border-[#382916] text-xs px-3 py-2 text-[#FAF8F5] placeholder-[#755833] flex-1 focus:outline-none"
              />
              <button className="bg-[#B08C59] text-black px-4 text-xs uppercase tracking-wider font-semibold">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#151517] flex flex-col sm:flex-row justify-between items-center text-[11px] text-[#755833]">
          <p>© 2026 Maison Aurelia Joaillerie. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-[#FAF8F5]">Privacy Policy</a>
            <a href="#" className="hover:text-[#FAF8F5]">Ethical Sourcing Treaty</a>
            <a href="#" className="hover:text-[#FAF8F5]">Terms of Acquisition</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
