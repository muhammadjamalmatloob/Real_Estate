import React from 'react';
import { ArrowRight, MapPin, Building } from 'lucide-react';
import { STATIC_SECTOR_CARDS as SECTOR_CARDS } from '../../api';

export default function SectorHighlights({ onSelectSector }) {
  return (
    <section id="sectors" className="py-20 bg-slate-50 border-y border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#01327e]">
            Paragon City Master Plan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-4">
            Explore Key Sectors & Living Blocks
          </h2>
          <p className="text-sm text-slate-600">
            From regal 1 & 2 Kanal mansions in Imperial Garden to vibrant commercial avenues, Paragon City is meticulously zoned to provide unprecedented living standards.
          </p>
        </div>

        {/* Grid of Sector Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SECTOR_CARDS.map((sector) => (
            <div
              key={sector.id}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 hover:border-[#01327e] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1"
            >
              
              {/* Image with overlay */}
              <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                <img
                  src={sector.image}
                  alt={sector.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] font-bold text-blue-200 uppercase tracking-widest block">
                    {sector.plots}
                  </span>
                  <h3 className="text-lg font-extrabold">{sector.name}</h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
                <div>
                  <span className="text-[11px] font-semibold text-[#01327e] block mb-1">
                    {sector.tagline}
                  </span>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {sector.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <div className="text-[11px] font-bold text-slate-400 uppercase">Price Benchmark</div>
                  <div className="text-xs font-bold text-[#01327e] mb-3">{sector.averagePrice}</div>
                  
                  <button
                    onClick={() => onSelectSector(sector.name)}
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-50 hover:bg-[#01327e] text-[#01327e] hover:text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 border border-slate-200 hover:border-[#01327e]"
                  >
                    <span>View {sector.name} Listings</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
