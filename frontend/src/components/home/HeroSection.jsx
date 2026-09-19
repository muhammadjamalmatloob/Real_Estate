import React from 'react';
import { Search, MapPin, Home, DollarSign, ShieldCheck, CheckCircle } from 'lucide-react';
import { STATIC_SECTORS as SECTORS, STATIC_PROPERTY_TYPES as PROPERTY_TYPES } from '../../api';

export default function HeroSection({
  filters,
  onFilterChange,
  onSearchSubmit
}) {
  const purposes = [
    { label: 'Buy Property', value: 'sale' },
    { label: 'Rent Villa', value: 'rent' },
    { label: 'Plots & Land', value: 'plot' },
  ];

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#011639]">
      
      {/* Background with Luxury Architectural Image & Monochrome Navy Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80"
          alt="Paragon City Luxury Villas"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#011639]/95 via-[#011639]/85 to-[#011639]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Brand Tag / Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6 shadow-sm">
          <img src="/Icon.svg" alt="" className="w-4 h-4 object-contain" />
          <span className="text-xs font-bold tracking-widest text-blue-200 uppercase">
            Paragon City Official Portal • Barki Road Lahore
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto mb-6">
          Find Your Luxury Dream Residence in{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-300">
            Paragon City
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Experience Lahore’s most prestigious master-planned community. Verified 5 Marla, 10 Marla & 1 Kanal villas, possession-ready residential plots, and high-ROI commercial opportunities.
        </p>

        {/* Search Engine Container */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-4 sm:p-6 shadow-2xl border border-slate-100 text-left">
          
          {/* Purpose Tabs */}
          <div className="flex items-center gap-2 mb-4 border-b border-slate-100 pb-4">
            {purposes.map((p) => (
              <button
                key={p.value}
                onClick={() => onFilterChange({ purpose: p.value })}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  filters.purpose === p.value
                    ? 'bg-[#01327e] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Search Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            
            {/* Sector Picker */}
            <div className="p-2.5 rounded-xl border border-slate-200 hover:border-[#01327e] transition-colors bg-slate-50/50">
              <label className="block text-[10px] font-bold uppercase text-slate-500 mb-1 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#01327e]" /> Sector / Block
              </label>
              <select
                value={filters.sector}
                onChange={(e) => onFilterChange({ sector: e.target.value })}
                className="w-full text-xs font-bold text-slate-800 bg-transparent focus:outline-none cursor-pointer"
              >
                {SECTORS.map((sec) => (
                  <option key={sec} value={sec}>{sec}</option>
                ))}
              </select>
            </div>

            {/* Property Type */}
            <div className="p-2.5 rounded-xl border border-slate-200 hover:border-[#01327e] transition-colors bg-slate-50/50">
              <label className="block text-[10px] font-bold uppercase text-slate-500 mb-1 flex items-center gap-1">
                <Home className="w-3 h-3 text-[#01327e]" /> Property Type
              </label>
              <select
                value={filters.type}
                onChange={(e) => onFilterChange({ type: e.target.value })}
                className="w-full text-xs font-bold text-slate-800 bg-transparent focus:outline-none cursor-pointer"
              >
                {PROPERTY_TYPES.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* Budget Range */}
            <div className="p-2.5 rounded-xl border border-slate-200 hover:border-[#01327e] transition-colors bg-slate-50/50">
              <label className="block text-[10px] font-bold uppercase text-slate-500 mb-1 flex items-center gap-1">
                <DollarSign className="w-3 h-3 text-[#01327e]" /> Max Budget
              </label>
              <select
                value={filters.maxPrice || ''}
                onChange={(e) => onFilterChange({ maxPrice: e.target.value ? Number(e.target.value) : null })}
                className="w-full text-xs font-bold text-slate-800 bg-transparent focus:outline-none cursor-pointer"
              >
                <option value="">Any Budget</option>
                <option value="15000000">Up to PKR 1.5 Crore</option>
                <option value="30000000">Up to PKR 3.0 Crore</option>
                <option value="50000000">Up to PKR 5.0 Crore</option>
                <option value="80000000">Up to PKR 8.0 Crore</option>
              </select>
            </div>

          </div>

          {/* Submit CTA */}
          <div className="mt-4 pt-3 flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-3 text-xs text-slate-500">
              <span className="flex items-center gap-1 text-[#01327e] font-semibold">
                <CheckCircle className="w-3.5 h-3.5 text-blue-600" /> 100% Verified Documents
              </span>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span className="hidden sm:inline">Direct Transfer from Paragon Office</span>
            </div>

            <button
              onClick={onSearchSubmit}
              className="w-full sm:w-auto px-7 py-3 rounded-xl bg-[#01327e] hover:bg-[#012866] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all hover:scale-102 cursor-pointer"
            >
              <Search className="w-4 h-4" />
              <span>Explore Listings</span>
            </button>
          </div>

        </div>

        {/* Ticker / Metrics in Monochrome Blue & White */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 border-t border-white/10 text-white">
          <div className="p-3 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-white">1,500+</div>
            <div className="text-xs text-blue-200 font-medium mt-1">Verified Properties</div>
          </div>
          <div className="p-3 text-center border-l border-white/10">
            <div className="text-2xl sm:text-3xl font-extrabold text-white">12,000+</div>
            <div className="text-xs text-blue-200 font-medium mt-1">Families Living</div>
          </div>
          <div className="p-3 text-center border-l border-white/10">
            <div className="text-2xl sm:text-3xl font-extrabold text-white">100%</div>
            <div className="text-xs text-blue-200 font-medium mt-1">LDA Approved</div>
          </div>
          <div className="p-3 text-center border-l border-white/10">
            <div className="text-2xl sm:text-3xl font-extrabold text-white">24/7</div>
            <div className="text-xs text-blue-200 font-medium mt-1">Gated & Guarded</div>
          </div>
        </div>

      </div>

    </section>
  );
}
