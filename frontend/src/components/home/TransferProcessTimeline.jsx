import React from 'react';
import { FileText, SearchCheck, Fingerprint, KeyRound, ShieldCheck, Clock } from 'lucide-react';

export default function TransferProcessTimeline() {
  const steps = [
    {
      step: '01',
      title: 'Token & Agreement',
      time: 'Day 1',
      icon: FileText,
      description: 'Initial token amount paid with a legally binding written agreement signed by buyer and seller with verified title details.'
    },
    {
      step: '02',
      title: 'Paragon NDC Clearance',
      time: 'Day 3 - 5',
      icon: SearchCheck,
      description: 'Seller applies for the official No Demand Certificate (NDC) at Paragon Head Office to verify zero pending dues or litigation.'
    },
    {
      step: '03',
      title: 'Biometric Transfer',
      time: 'Day 7 - 10',
      icon: Fingerprint,
      description: 'Both parties appear before the Paragon Transfer Officer for NADRA biometric verification and payment of transfer taxes.'
    },
    {
      step: '04',
      title: 'Allotment & Possession',
      time: 'Day 12',
      icon: KeyRound,
      description: 'The buyer receives the official Paragon City Transfer Letter and takes immediate physical demarcated possession on-site.'
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#01327e] text-xs font-bold uppercase tracking-widest mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Official Buyer Assurance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How Property Transfer Works in Paragon City
          </h2>
          <p className="text-sm text-slate-600 mt-3">
            A transparent, legally secured 4-step transfer protocol managed directly by the Paragon City Registrar Office.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative bg-slate-50 rounded-2xl p-6 border border-slate-200/80 hover:border-[#01327e]/50 hover:bg-white transition-all duration-300 shadow-xs hover:shadow-lg flex flex-col group"
              >
                {/* Step number badge & icon */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-3xl font-extrabold text-slate-300 group-hover:text-[#01327e] transition-colors">
                    {item.step}
                  </span>
                  <div className="w-11 h-11 rounded-xl bg-white text-[#01327e] border border-slate-200 shadow-xs flex items-center justify-center group-hover:bg-[#01327e] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#01327e] uppercase mb-1">
                  <Clock className="w-3 h-3 text-blue-500" />
                  <span>{item.time}</span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
