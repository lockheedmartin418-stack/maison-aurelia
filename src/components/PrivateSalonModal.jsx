import React, { useState } from 'react';
import { X, Calendar, MapPin, CheckCircle } from 'lucide-react';

export default function PrivateSalonModal({ isOpen, onClose }) {
  const [salonCity, setSalonCity] = useState('Paris');
  const [salonDate, setSalonDate] = useState('');
  const [clientName, setClientName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-lg bg-[#151517] border border-[#382916] p-8 shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-[#D5C3A5] hover:text-white"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="text-center py-10">
            <CheckCircle size={44} className="text-[#B08C59] mx-auto mb-4" />
            <h3 className="font-serif text-xl text-[#FAF8F5] uppercase tracking-wider mb-2">
              Appointment Requested
            </h3>
            <p className="text-xs text-[#C2A77D] font-light leading-relaxed mb-6">
              Thank you, {clientName}. Your dedicated client advisor for the {salonCity} salon will contact you within 4 hours to finalize your private consultation.
            </p>
            <button 
              onClick={() => { setSubmitted(false); onClose(); }}
              className="px-6 py-2.5 bg-[#B08C59] text-black text-xs uppercase tracking-[0.2em] font-semibold"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="text-center mb-6">
              <span className="text-[#B08C59] text-[10px] uppercase tracking-[0.3em] font-semibold">
                By Invitation & Appointment
              </span>
              <h3 className="font-serif text-2xl text-[#FAF8F5] uppercase tracking-[0.15em] mt-1">
                Private Salon Viewing
              </h3>
              <p className="text-xs text-[#C2A77D] mt-2 font-light">
                Experience exceptional gemstones in an exclusive high-security atelier.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] uppercase tracking-[0.2em] text-[#C2A77D] mb-1">
                  Full Name
                </label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Lady Genevieve Sterling"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full bg-[#0B0B0C] border border-[#382916] px-3.5 py-2 text-xs text-[#FAF8F5] focus:outline-none focus:border-[#B08C59]"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-[0.2em] text-[#C2A77D] mb-1">
                  Preferred Salon Atelier
                </label>
                <select 
                  value={salonCity} 
                  onChange={(e) => setSalonCity(e.target.value)}
                  className="w-full bg-[#0B0B0C] border border-[#382916] px-3.5 py-2 text-xs text-[#FAF8F5] focus:outline-none focus:border-[#B08C59]"
                >
                  <option value="Paris">Place Vendôme Atelier, Paris</option>
                  <option value="New York">Madison Avenue Flagship, New York</option>
                  <option value="Geneva">Rue du Rhône Salon, Geneva</option>
                  <option value="London">New Bond Street Vault, London</option>
                  <option value="Virtual">Virtual High-Jewelry Salon (Encrypted HD)</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-[0.2em] text-[#C2A77D] mb-1">
                  Preferred Date
                </label>
                <input 
                  type="date" 
                  required
                  value={salonDate}
                  onChange={(e) => setSalonDate(e.target.value)}
                  className="w-full bg-[#0B0B0C] border border-[#382916] px-3.5 py-2 text-xs text-[#FAF8F5] focus:outline-none focus:border-[#B08C59]"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-3 bg-[#B08C59] hover:bg-[#FAF8F5] text-black text-xs uppercase tracking-[0.25em] font-semibold transition-colors mt-6"
              >
                Request Confidential Appointment
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
