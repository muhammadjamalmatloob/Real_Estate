import React, { useState } from 'react';
import { Globe2, ShieldCheck, Video, CreditCard, ArrowRight, CheckCircle2 } from 'lucide-react';
import { formatPrice } from '../../utils/formatters';

export default function OverseasInvestorDesk({ onBookConsultation }) {
  const [calcAmountPKR] = useState(35000000); // 3.5 Crore default

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left 3D Vector Illustration Asset (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900 group">
                <img
                  src="/images/overseas_investment.jpg"
                  alt="Overseas Pakistani Real Estate Investment"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#011639]/90 backdrop-blur-md text-blue-200 text-xs font-bold border border-white/20">
                  <Globe2 className="w-3.5 h-3.5 text-blue-300" />
                  <span>Expatriate & Overseas Desk</span>
                </div>
              </div>
            </div>

            {/* Right Information & Benefits (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#01327e]">
                  Global Investors in UK, USA, UAE & Canada
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                  Investing in Paragon City from Abroad is 100% Secure
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Over 3,500 expatriates have built and invested in Paragon City. We provide turnkey end-to-end support with certified embassy attestations, Roshan Digital Account transfers, and live 4K video inspections.
                </p>
              </div>

              {/* 4 Feature Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 flex items-start gap-3">
                  <CreditCard className="w-5 h-5 text-[#01327e] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Roshan Digital Account</h4>
                    <p className="text-[11px] text-slate-500">Fast, direct remittances with legal tax incentives.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 flex items-start gap-3">
                  <Video className="w-5 h-5 text-[#01327e] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Virtual 4K Video Tours</h4>
                    <p className="text-[11px] text-slate-500">Live drone footage & walk-through of your plot/villa.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#01327e] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">POA & Embassy Transfer</h4>
                    <p className="text-[11px] text-slate-500">Legally attested Power of Attorney without flying to Pakistan.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#01327e] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Repatriation of Capital</h4>
                    <p className="text-[11px] text-slate-500">Freedom to repatriate rental yields and sales profits.</p>
                  </div>
                </div>
              </div>

              {/* Currency Estimator Widget in Monochrome Blue & White */}
              <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200/80">
                <span className="text-[11px] font-bold text-[#01327e] uppercase tracking-wide block mb-2">
                  Quick Overseas Valuation Estimator (PKR to Foreign Currencies):
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                  <div className="p-2 bg-white rounded-xl shadow-2xs border border-blue-100">
                    <span className="text-[10px] text-slate-400 block uppercase font-bold">PKR</span>
                    <span className="text-xs font-extrabold text-[#01327e]">{formatPrice(calcAmountPKR, 'PKR')}</span>
                  </div>
                  <div className="p-2 bg-white rounded-xl shadow-2xs border border-blue-100">
                    <span className="text-[10px] text-blue-500 block uppercase font-bold">USD ($)</span>
                    <span className="text-xs font-extrabold text-[#01327e]">{formatPrice(calcAmountPKR, 'USD')}</span>
                  </div>
                  <div className="p-2 bg-white rounded-xl shadow-2xs border border-blue-100">
                    <span className="text-[10px] text-blue-500 block uppercase font-bold">GBP (£)</span>
                    <span className="text-xs font-extrabold text-[#01327e]">{formatPrice(calcAmountPKR, 'GBP')}</span>
                  </div>
                  <div className="p-2 bg-white rounded-xl shadow-2xs border border-blue-100">
                    <span className="text-[10px] text-blue-500 block uppercase font-bold">AED (Dirhams)</span>
                    <span className="text-xs font-extrabold text-[#01327e]">{formatPrice(calcAmountPKR, 'AED')}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={onBookConsultation}
                  className="px-6 py-3 rounded-xl bg-[#01327e] hover:bg-[#012866] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-md transition-all hover:scale-102 cursor-pointer"
                >
                  <span>Book Overseas Video Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
