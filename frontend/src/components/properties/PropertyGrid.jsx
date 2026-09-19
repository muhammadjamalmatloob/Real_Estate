import React, { useState } from 'react';
import PropertyCard from './PropertyCard';
import { ArrowUpDown, AlertCircle } from 'lucide-react';

export default function PropertyGrid({
  properties,
  favorites,
  onToggleFavorite,
  currency = 'PKR',
  compareList = [],
  onToggleCompare,
  onResetFilters
}) {
  const [sortBy, setSortBy] = useState('featured');

  const sortedProperties = [...properties].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'featured') return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    return 0;
  });

  return (
    <section id="properties" className="scroll-mt-24">
      
      {/* Section Header & Sorting */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#01327e]">
            Verified Portfolio
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
            Featured Properties in Paragon City
          </h2>
        </div>

        {/* Sorting Dropdown */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <ArrowUpDown className="w-4 h-4 text-slate-400" />
          <span className="text-xs text-slate-500 font-semibold">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-xs font-bold text-slate-700 bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-[#01327e]"
          >
            <option value="featured">Featured First</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Grid or Empty State */}
      {sortedProperties.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {sortedProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              isFavorite={favorites.includes(property.id)}
              onToggleFavorite={onToggleFavorite}
              currency={currency}
              isComparing={compareList.includes(property.id)}
              onToggleCompare={onToggleCompare}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl p-12 text-center border border-slate-200/80 shadow-xs max-w-xl mx-auto my-8">
          <div className="w-14 h-14 rounded-full bg-blue-50 text-[#01327e] flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="w-7 h-7" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-2">No Properties Found</h3>
          <p className="text-xs text-slate-500 mb-6">
            We couldn't find any listings matching your exact criteria. Try broadening your sector, budget, or bedroom selections.
          </p>
          <button
            onClick={onResetFilters}
            className="px-5 py-2.5 rounded-xl bg-[#01327e] text-white text-xs font-bold shadow-sm hover:bg-[#012866] transition-colors"
          >
            Reset All Filters
          </button>
        </div>
      )}

    </section>
  );
}
