import React from 'react';
import { Link } from 'react-router-dom';
import { X, Trash2, ArrowRight, Check, Minus, Bed, Bath, Car, Maximize2 } from 'lucide-react';
import { formatPrice, formatArea, marlaToSqFt } from '../../utils/formatters';

export default function PropertyCompareModal({
  isOpen,
  onClose,
  compareProperties,
  onRemoveFromCompare,
  onClearCompare,
  currency = 'PKR'
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/75 backdrop-blur-xs">
      <div 
        className="relative w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div>
            <h3 className="text-xl font-extrabold text-slate-900">
              Side-by-Side Property Comparison
            </h3>
            <p className="text-xs text-slate-500">
              Comparing {compareProperties.length} of max 3 properties
            </p>
          </div>

          <div className="flex items-center gap-3">
            {compareProperties.length > 0 && (
              <button
                onClick={onClearCompare}
                className="text-xs font-bold text-slate-500 hover:text-rose-600 transition-colors"
              >
                Clear All
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-slate-200 text-slate-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Comparison Content */}
        <div className="p-6 overflow-x-auto flex-grow">
          {compareProperties.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-[#01327e] flex items-center justify-center mx-auto">
                <Maximize2 className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-slate-800">No Properties to Compare</h4>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Click the "Compare" checkbox on any listing card to compare specs, prices, and amenities side-by-side.
              </p>
            </div>
          ) : (
            <div className="min-w-[650px]">
              
              {/* Top Row: Cards */}
              <div className="grid grid-cols-4 gap-4 pb-6 border-b border-slate-200">
                <div className="flex items-end text-xs font-extrabold text-slate-400 uppercase">
                  Feature Overview
                </div>

                {compareProperties.map((item) => (
                  <div key={item.id} className="space-y-3 relative">
                    <button
                      onClick={() => onRemoveFromCompare(item.id)}
                      className="absolute -top-2 -right-2 p-1.5 rounded-full bg-rose-50 text-rose-600 hover:bg-rose-100 transition-colors"
                      title="Remove"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>

                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="w-full h-32 rounded-xl object-cover"
                    />

                    <div>
                      <span className="text-[10px] font-bold text-[#01327e] uppercase block">
                        {item.sector}
                      </span>
                      <h4 className="text-xs font-bold text-slate-900 line-clamp-1">
                        {item.title}
                      </h4>
                      <div className="text-sm font-extrabold text-[#01327e] mt-1">
                        {formatPrice(item.price, currency)}
                      </div>
                    </div>

                    <Link
                      to={`/properties/${item.id}`}
                      onClick={onClose}
                      className="w-full py-1.5 rounded-lg bg-blue-50 hover:bg-[#01327e] text-[#01327e] hover:text-white text-xs font-bold transition-colors flex items-center justify-center gap-1 block text-center"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3 h-3 inline" />
                    </Link>
                  </div>
                ))}
              </div>

              {/* Rows */}
              <div className="divide-y divide-slate-100 text-xs text-slate-700">
                
                {/* Sector / Block */}
                <div className="grid grid-cols-4 gap-4 py-3 items-center">
                  <span className="font-bold text-slate-500 uppercase text-[11px]">Sector / Block</span>
                  {compareProperties.map((p) => (
                    <span key={p.id} className="font-semibold">{p.sector}</span>
                  ))}
                </div>

                {/* Plot Size & Sq Ft */}
                <div className="grid grid-cols-4 gap-4 py-3 items-center">
                  <span className="font-bold text-slate-500 uppercase text-[11px]">Plot Size</span>
                  {compareProperties.map((p) => (
                    <span key={p.id} className="font-semibold">
                      {formatArea(p.size, p.unit)} (~{marlaToSqFt(p.unit === 'Kanal' ? p.size * 20 : p.size).toLocaleString()} sqft)
                    </span>
                  ))}
                </div>

                {/* Bedrooms & Baths */}
                <div className="grid grid-cols-4 gap-4 py-3 items-center">
                  <span className="font-bold text-slate-500 uppercase text-[11px]">Bedrooms & Baths</span>
                  {compareProperties.map((p) => (
                    <span key={p.id} className="font-semibold">
                      {p.bedrooms > 0 ? `${p.bedrooms} Beds / ${p.bathrooms} Baths` : 'Plot / Commercial'}
                    </span>
                  ))}
                </div>

                {/* Parking */}
                <div className="grid grid-cols-4 gap-4 py-3 items-center">
                  <span className="font-bold text-slate-500 uppercase text-[11px]">Parking Garage</span>
                  {compareProperties.map((p) => (
                    <span key={p.id} className="font-semibold">
                      {p.parking > 0 ? `${p.parking} Cars` : 'Street'}
                    </span>
                  ))}
                </div>

                {/* Rate Per Marla Estimation */}
                <div className="grid grid-cols-4 gap-4 py-3 items-center">
                  <span className="font-bold text-slate-500 uppercase text-[11px]">Rate / Marla (Approx)</span>
                  {compareProperties.map((p) => {
                    const totalMarlas = p.unit === 'Kanal' ? p.size * 20 : p.size;
                    const perMarla = Math.round(p.price / totalMarlas);
                    return (
                      <span key={p.id} className="font-extrabold text-[#01327e]">
                        {formatPrice(perMarla, currency)} / Marla
                      </span>
                    );
                  })}
                </div>

                {/* Key Amenities */}
                <div className="grid grid-cols-4 gap-4 py-3 items-start">
                  <span className="font-bold text-slate-500 uppercase text-[11px]">Key Highlights</span>
                  {compareProperties.map((p) => (
                    <div key={p.id} className="space-y-1">
                      {p.amenities?.slice(0, 3).map((a, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-[11px]">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{a}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>

              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
}
