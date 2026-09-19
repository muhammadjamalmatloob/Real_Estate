import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Bed, Bath, Maximize2, MapPin, Eye, Phone, SlidersHorizontal, Check } from 'lucide-react';
import { formatPrice, formatArea, marlaToSqFt } from '../../utils/formatters';

export default function PropertyCard({
  property,
  isFavorite,
  onToggleFavorite,
  currency = 'PKR',
  isComparing = false,
  onToggleCompare
}) {
  const isRental = property.purpose === 'rent';
  const sqft = property.unit === 'Kanal' 
    ? marlaToSqFt(property.size * 20) 
    : marlaToSqFt(property.size);

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 hover:border-[#01327e]/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1">
      
      {/* Media Container */}
      <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
        <Link to={`/properties/${property.id}`} className="block w-full h-full">
          <img
            src={property.images[0]}
            alt={property.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        </Link>
        
        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2 items-center pointer-events-none">
          {property.badge && (
            <span className="px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase bg-[#01327e] text-white shadow-md">
              {property.badge}
            </span>
          )}
          <span className="px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase bg-white/90 backdrop-blur-md text-slate-800 shadow-sm border border-slate-200/50">
            {property.purpose === 'rent' ? 'For Rent' : property.purpose === 'plot' ? 'Plot' : 'For Sale'}
          </span>
        </div>

        {/* Top Right Action Controls: Favorite + Compare */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 z-10">
          
          {/* Compare Toggle */}
          {onToggleCompare && (
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onToggleCompare(property.id);
              }}
              className={`px-2.5 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase backdrop-blur-md transition-all flex items-center gap-1 ${
                isComparing
                  ? 'bg-[#01327e] text-white shadow-md scale-105'
                  : 'bg-white/85 text-slate-700 hover:bg-white hover:text-[#01327e] shadow-sm'
              }`}
              title="Compare with other properties"
            >
              {isComparing ? (
                <>
                  <Check className="w-3 h-3 text-slate-950" />
                  <span>Added</span>
                </>
              ) : (
                <>
                  <SlidersHorizontal className="w-3 h-3" />
                  <span>Compare</span>
                </>
              )}
            </button>
          )}

          {/* Favorite Heart Button */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onToggleFavorite(property.id);
            }}
            className={`p-2 rounded-full backdrop-blur-md transition-transform active:scale-90 ${
              isFavorite
                ? 'bg-rose-500 text-white shadow-md'
                : 'bg-white/80 text-slate-700 hover:bg-white hover:text-rose-500 shadow-sm'
            }`}
            aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Sector Label Overlay at Bottom */}
        <div className="absolute bottom-3 left-3 pointer-events-none">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md text-white text-xs font-medium">
            <MapPin className="w-3 h-3 text-blue-300 shrink-0" />
            {property.sector}
          </span>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-5 flex flex-col flex-grow">
        
        {/* Price Tag with Multi-Currency */}
        <div className="flex items-baseline justify-between mb-2">
          <div>
            <span className="text-xl font-extrabold text-[#01327e]">
              {formatPrice(property.price, currency)}
            </span>
            {isRental && (
              <span className="text-xs font-medium text-slate-500 ml-1">/ month</span>
            )}
          </div>
          <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-50 text-[#01327e] border border-blue-200/80">
            {formatArea(property.size, property.unit)}
          </span>
        </div>

        {/* Title */}
        <Link
          to={`/properties/${property.id}`}
          className="text-base font-bold text-slate-900 group-hover:text-[#01327e] transition-colors line-clamp-1 mb-2"
        >
          {property.title}
        </Link>

        {/* Location description */}
        <p className="text-xs text-slate-500 line-clamp-1 mb-4">
          {property.location}
        </p>

        {/* Features Row: Beds, Baths, Sq. Ft */}
        <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-100 mb-4 text-slate-600 text-xs">
          {property.bedrooms > 0 ? (
            <div className="flex items-center gap-1.5 justify-center">
              <Bed className="w-4 h-4 text-slate-400" />
              <span>{property.bedrooms} Beds</span>
            </div>
          ) : (
            <div className="flex items-center gap-1.5 justify-center text-slate-400">
              <span>{property.type}</span>
            </div>
          )}

          {property.bathrooms > 0 ? (
            <div className="flex items-center gap-1.5 justify-center border-x border-slate-100">
              <Bath className="w-4 h-4 text-slate-400" />
              <span>{property.bathrooms} Baths</span>
            </div>
          ) : (
            <div className="flex items-center gap-1.5 justify-center border-x border-slate-100 text-slate-400">
              <span>Verified</span>
            </div>
          )}

          <div className="flex items-center gap-1.5 justify-center">
            <Maximize2 className="w-3.5 h-3.5 text-slate-400" />
            <span>~{sqft.toLocaleString()} sqft</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-auto flex items-center gap-2 pt-1">
          <Link
            to={`/properties/${property.id}`}
            className="flex-1 py-2.5 px-3 rounded-xl bg-slate-50 hover:bg-[#eff6ff] text-[#01327e] text-xs font-bold border border-slate-200 hover:border-[#01327e]/30 flex items-center justify-center gap-1.5 transition-colors"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>View Details</span>
          </Link>

          <a
            href={`tel:${property.agent.phone}`}
            className="py-2.5 px-3 rounded-xl bg-[#01327e] hover:bg-[#012866] text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-xs"
            title={`Call agent: ${property.agent.name}`}
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call</span>
          </a>
        </div>

      </div>

    </div>
  );
}
