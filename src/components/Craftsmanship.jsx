import React from 'react';
import { ShieldCheck, Sparkles, Compass, Award } from 'lucide-react';

export default function Craftsmanship() {
  const pillars = [
    {
      icon: <Award className="w-6 h-6 text-[#B08C59]" />,
      title: 'Conflict-Free Provenance',
      desc: 'All diamonds comply 100% with Kimberley Process certification and RJC ethical standards.'
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#B08C59]" />,
      title: 'Vendôme Savoir-Faire',
      desc: 'Over 200 hours of precision hand-setting by French master jewelers for every individual piece.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#B08C59]" />,
      title: 'Maison Lifetime Guarantee',
      desc: 'Complimentary semi-annual claw inspection, sonic cleaning, and insured re-polishing.'
    },
    {
      icon: <Compass className="w-6 h-6 text-[#B08C59]" />,
      title: 'Bespoke Atelier Commission',
      desc: 'Collaborate with our chief gemologist to source unheated sapphires, emeralds, and Argyle pinks.'
    }
  ];

  return (
    <section id="craft" className="py-24 bg-[#151517] border-t border-[#222226]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#B08C59] text-xs uppercase tracking-[0.35em] block mb-2 font-semibold">
            The Pinnacle of Artistry
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF8F5] uppercase tracking-[0.2em]">
            Uncompromising Standards
          </h2>
          <div className="w-16 h-0.5 bg-[#B08C59] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((p, idx) => (
            <div key={idx} className="bg-[#0B0B0C] border border-[#222226] p-8 hover:border-[#B08C59]/40 transition-colors">
              <div className="mb-5">{p.icon}</div>
              <h3 className="font-serif text-lg text-[#FAF8F5] uppercase tracking-[0.1em] mb-3">
                {p.title}
              </h3>
              <p className="text-xs text-[#C2A77D] leading-relaxed font-light">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
