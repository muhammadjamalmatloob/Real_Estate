import React, { useState } from 'react';
import { X, Heart, Bed, Bath, Maximize2, MapPin, Phone, Mail, CheckCircle2, Calendar, Share2 } from 'lucide-react';
import { formatPricePKR, formatArea, marlaToSqFt } from '../../utils/formatters';

export default function PropertyDetailModal({
  property,
  isFavorite,
  onToggleFavorite,
  onClose,
  onScheduleVisit
}) {
  if (!property) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');

  const sqft = property.unit === 'Kanal' 
    ? marlaToSqFt(property.size * 20) 
    : marlaToSqFt(property.size);

  const handleSubmitInquiry = (e) => {
    e.preventDefault();
    if (!contactName || !contactPhone) return;
    setFormSubmitted(true);
    setTimeout(() => {
      onScheduleVisit && onScheduleVisit(property, contactName, contactPhone);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/70 backdrop-blur-xs">
      
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 my-auto animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Control Bar */}
        <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
          <button
            onClick={() => onToggleFavorite(property.id)}
            className={`p-2.5 rounded-full backdrop-blur-md shadow-md transition-colors ${
              isFavorite ? 'bg-rose-500 text-white' : 'bg-white/90 text-slate-700 hover:text-rose-500'
            }`}
            title="Save to favorites"
          >
            <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
          </button>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-white/90 text-slate-700 hover:bg-white hover:text-slate-950 shadow-md backdrop-blur-md transition-colors"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Scroll Area */}
        <div className="max-h-[85vh] overflow-y-auto">
          
          {/* Main Image Gallery */}
          <div className="relative bg-slate-900">
            <div className="aspect-16/9 sm:aspect-21/9 w-full overflow-hidden">
              <img
                src={property.images[activeImageIndex] || property.images[0]}
                alt={property.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Switcher */}
            {property.images.length > 1 && (
              <div className="absolute bottom-4 left-4 right-4 flex gap-2 overflow-x-auto pb-1">
                {property.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-16 h-12 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                      activeImageIndex === idx ? 'border-amber-400 scale-105' : 'border-white/60 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details Content */}
          <div className="p-6 sm:p-8 space-y-8">
            
            {/* Header: Title, Price, Location */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-slate-100">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#01327e] text-white">
                    {property.badge || property.type}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800">
                    {property.sector}
                  </span>
                </div>
                <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  {property.title}
                </h1>
                <p className="flex items-center gap-1.5 text-xs text-slate-500">
                  <MapPin className="w-3.5 h-3.5 text-[#01327e]" />
                  {property.location}
                </p>
              </div>

              <div className="text-left sm:text-right shrink-0">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#01327e]">
                  {formatPricePKR(property.price)}
                </div>
                <span className="text-xs font-medium text-slate-500">
                  {property.purpose === 'rent' ? 'Monthly Rent' : 'Demanded Price'}
                </span>
              </div>
            </div>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/60">
              <div className="text-center p-2">
                <span className="block text-[11px] font-bold text-slate-400 uppercase">Plot Area</span>
                <span className="text-sm font-extrabold text-slate-900">
                  {formatArea(property.size, property.unit)}
                </span>
                <span className="block text-[10px] text-slate-400">~{sqft.toLocaleString()} sqft</span>
              </div>

              <div className="text-center p-2 border-l border-slate-200">
                <span className="block text-[11px] font-bold text-slate-400 uppercase">Bedrooms</span>
                <span className="text-sm font-extrabold text-slate-900">
                  {property.bedrooms > 0 ? `${property.bedrooms} Beds` : 'N/A'}
                </span>
                <span className="block text-[10px] text-slate-400">Master Suites</span>
              </div>

              <div className="text-center p-2 border-l border-slate-200">
                <span className="block text-[11px] font-bold text-slate-400 uppercase">Bathrooms</span>
                <span className="text-sm font-extrabold text-slate-900">
                  {property.bathrooms > 0 ? `${property.bathrooms} Baths` : 'N/A'}
                </span>
                <span className="block text-[10px] text-slate-400">Tile Finish</span>
              </div>

              <div className="text-center p-2 border-l border-slate-200">
                <span className="block text-[11px] font-bold text-slate-400 uppercase">Car Parking</span>
                <span className="text-sm font-extrabold text-slate-900">
                  {property.parking > 0 ? `${property.parking} Vehicles` : 'Road Access'}
                </span>
                <span className="block text-[10px] text-slate-400">Secure Porch</span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                Property Description
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {property.description}
              </p>
            </div>

            {/* Amenities Checklist */}
            {property.amenities && property.amenities.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                  Features & Community Amenities
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {property.amenities.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white p-2.5 rounded-xl border border-slate-200/80">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Agent Contact & Quick Lead Form */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#011639] to-[#01327e] text-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                
                {/* Agent Bio */}
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                    Assigned Property Consultant
                  </span>
                  <h4 className="text-lg font-bold">{property.agent.name}</h4>
                  <p className="text-xs text-slate-300">
                    Paragon City Verified Consultant • {property.agent.experience} experience in Lahore real estate market.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    <a
                      href={`tel:${property.agent.phone}`}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-[#01327e] text-xs font-bold shadow-sm hover:bg-amber-400 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      {property.agent.phone}
                    </a>
                    <a
                      href={`mailto:${property.agent.email}?subject=Inquiry for ${property.title}`}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/20 transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      Email
                    </a>
                  </div>
                </div>

                {/* Instant Visit Booking */}
                <div className="bg-white/10 p-4 rounded-xl border border-white/15 backdrop-blur-xs">
                  {formSubmitted ? (
                    <div className="text-center py-4 space-y-2">
                      <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto animate-bounce" />
                      <h5 className="text-sm font-bold">Inquiry Received!</h5>
                      <p className="text-xs text-slate-200">
                        Our consultant will contact you within 30 minutes to confirm your visit.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmitInquiry} className="space-y-3">
                      <h5 className="text-xs font-bold uppercase tracking-wider text-amber-300">
                        Schedule a Private Viewing
                      </h5>
                      <input
                        type="text"
                        placeholder="Your Full Name"
                        required
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg bg-white text-slate-900 placeholder-slate-400 text-xs focus:outline-none"
                      />
                      <input
                        type="tel"
                        placeholder="Phone / WhatsApp Number"
                        required
                        value={contactPhone}
                        onChange={(e) => setContactPhone(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg bg-white text-slate-900 placeholder-slate-400 text-xs focus:outline-none"
                      />
                      <button
                        type="submit"
                        className="w-full py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs tracking-wide uppercase transition-colors shadow-sm"
                      >
                        Request Site Visit
                      </button>
                    </form>
                  )}
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
