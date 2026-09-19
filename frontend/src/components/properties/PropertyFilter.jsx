import React from 'react';
import { SlidersHorizontal, RotateCcw, MapPin, Home, DollarSign } from 'lucide-react';
import { STATIC_SECTORS as SECTORS, STATIC_PROPERTY_TYPES as PROPERTY_TYPES } from '../../api';
import { formatPricePKR } from '../../utils/formatters';

export default function PropertyFilter({
  filters,
  onFilterChange,
  onResetFilters,
  totalResults
}) {
  const purposes = [
    { label: 'All Properties', value: 'all' },
    { label: 'Buy Homes', value: 'sale' },
    { label: 'For Rent', value: 'rent' },
    { label: 'Plots', value: 'plot' },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs mb-8">
      
      {/* Top Row: Purpose Tabs + Reset Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
        
        {/* Purpose pills */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100/90 rounded-xl">
          {purposes.map((p) => (
            <button
              key={p.value}
              onClick={() => onFilterChange({ purpose: p.value })}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                filters.purpose === p.value
                  ? 'bg-[#01327e] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Results count & reset */}
        <div className="flex items-center gap-4 self-end sm:self-center">
          <span className="text-xs text-slate-500 font-medium">
            Showing <strong className="text-slate-900 font-bold">{totalResults}</strong> listings
          </span>
          <button
            onClick={onResetFilters}
            className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-[#01327e] font-semibold transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        </div>

      </div>

      {/* Filter Controls Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-5">
        
        {/* Sector Filter */}
        <div>
          <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5 flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-[#01327e]" />
            Paragon Sector
          </label>
          <select
            value={filters.sector}
            onChange={(e) => onFilterChange({ sector: e.target.value })}
            className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-800 bg-slate-50/50 hover:bg-white focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#01327e]/20 focus:border-[#01327e] transition-colors"
          >
            {SECTORS.map((sector) => (
              <option key={sector} value={sector}>
                {sector}
              </option>
            ))}
          </select>
        </div>

        {/* Property Type Filter */}
        <div>
          <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5 flex items-center gap-1">
            <Home className="w-3.5 h-3.5 text-[#01327e]" />
            Property Type
          </label>
          <select
            value={filters.type}
            onChange={(e) => onFilterChange({ type: e.target.value })}
            className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-800 bg-slate-50/50 hover:bg-white focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#01327e]/20 focus:border-[#01327e] transition-colors"
          >
            {PROPERTY_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Max Budget Filter */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
              <DollarSign className="w-3.5 h-3.5 text-[#01327e]" />
              Max Budget
            </label>
            <span className="text-xs font-bold text-[#01327e]">
              {filters.maxPrice ? formatPricePKR(filters.maxPrice) : 'Any Budget'}
            </span>
          </div>
          <select
            value={filters.maxPrice || ''}
            onChange={(e) => onFilterChange({ maxPrice: e.target.value ? Number(e.target.value) : null })}
            className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-800 bg-slate-50/50 hover:bg-white focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#01327e]/20 focus:border-[#01327e] transition-colors"
          >
            <option value="">Any Budget</option>
            <option value="10000000">Up to PKR 1 Crore</option>
            <option value="25000000">Up to PKR 2.5 Crore</option>
            <option value="40000000">Up to PKR 4 Crore</option>
            <option value="70000000">Up to PKR 7 Crore</option>
            <option value="100000000">Up to PKR 10 Crore</option>
          </select>
        </div>

        {/* Minimum Bedrooms */}
        <div>
          <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5 flex items-center gap-1">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#01327e]" />
            Bedrooms
          </label>
          <select
            value={filters.bedrooms || ''}
            onChange={(e) => onFilterChange({ bedrooms: e.target.value ? Number(e.target.value) : null })}
            className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-800 bg-slate-50/50 hover:bg-white focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#01327e]/20 focus:border-[#01327e] transition-colors"
          >
            <option value="">Any Bedrooms</option>
            <option value="3">3+ Bedrooms</option>
            <option value="4">4+ Bedrooms</option>
            <option value="5">5+ Bedrooms</option>
          </select>
        </div>

      </div>

    </div>
  );
}
