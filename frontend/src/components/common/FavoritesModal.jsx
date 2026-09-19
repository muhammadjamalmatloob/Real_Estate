import React from 'react';
import { X, Heart, Trash2, ArrowRight, Phone } from 'lucide-react';
import { formatPricePKR, formatArea } from '../../utils/formatters';

export default function FavoritesModal({
  isOpen,
  onClose,
  favoriteProperties,
  onRemoveFavorite,
  onViewProperty
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-full bg-rose-50 text-rose-500">
              <Heart className="w-5 h-5 fill-current" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Saved Properties</h3>
              <p className="text-xs text-slate-500">
                {favoriteProperties.length} properties in your wishlist
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 text-slate-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List */}
        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-4">
          {favoriteProperties.length > 0 ? (
            favoriteProperties.map((property) => (
              <div
                key={property.id}
                className="flex items-center gap-4 p-3 rounded-2xl border border-slate-100 hover:border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-colors"
              >
                <img
                  src={property.images[0]}
                  alt={property.title}
                  className="w-20 h-20 rounded-xl object-cover shrink-0"
                />
                
                <div className="flex-grow min-w-0">
                  <span className="text-[10px] font-bold text-[#01327e] uppercase tracking-wide block">
                    {property.sector} • {formatArea(property.size, property.unit)}
                  </span>
                  <h4 className="text-xs font-bold text-slate-900 truncate">
                    {property.title}
                  </h4>
                  <div className="text-sm font-extrabold text-[#01327e] mt-0.5">
                    {formatPricePKR(property.price)}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    onClick={() => {
                      onClose();
                      onViewProperty(property);
                    }}
                    className="p-2 rounded-xl bg-blue-50 text-[#01327e] hover:bg-[#01327e] hover:text-white transition-colors"
                    title="View Details"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onRemoveFavorite(property.id)}
                    className="p-2 rounded-xl text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                    title="Remove"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-10 space-y-3">
              <Heart className="w-12 h-12 text-slate-200 mx-auto" />
              <p className="text-sm font-bold text-slate-700">No properties saved yet</p>
              <p className="text-xs text-slate-400 max-w-xs mx-auto">
                Click the heart icon on any property card to save your favorite villas and plots here.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        {favoriteProperties.length > 0 && (
          <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-between items-center text-xs">
            <span className="text-slate-500">
              Need assistance comparing these?
            </span>
            <a
              href="tel:+9242111727246"
              className="px-4 py-2 rounded-xl bg-[#01327e] text-white font-bold flex items-center gap-1.5 shadow-xs hover:bg-[#012866]"
            >
              <Phone className="w-3.5 h-3.5" />
              Consult an Agent
            </a>
          </div>
        )}

      </div>
    </div>
  );
}
