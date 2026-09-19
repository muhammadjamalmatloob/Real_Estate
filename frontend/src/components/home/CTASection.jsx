import React from 'react';
import { Phone, Calendar, ShieldCheck } from 'lucide-react';

export default function CTASection({ onBookVisit }) {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#011639] via-[#01327e] to-[#012866] text-white p-8 sm:p-14 shadow-2xl">
          
          {/* Subtle architectural background decoration */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10 pointer-events-none hidden md:block">
            <img
              src="/Paragon_Logo.svg"
              alt=""
              className="w-full h-full object-contain filter invert"
            />
          </div>

          <div className="relative z-10 max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-200 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-300" />
              <span>Complimentary Site Tours Available Daily</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              Ready to Experience Paragon City in Person?
            </h2>

            <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
              Book an accompanied private site inspection. Our senior consultants will show you on-ground villa constructions, verified plot locations, and the commercial boulevard.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onBookVisit}
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-blue-50 text-[#01327e] text-xs font-extrabold uppercase tracking-wider transition-all shadow-lg flex items-center gap-2 hover:scale-105 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#01327e]" />
                <span>Schedule Site Visit Now</span>
              </button>

              <a
                href="tel:+9242111727246"
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider transition-all border border-white/20 flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-blue-300" />
                <span>+92 42 111-PARAGON</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
