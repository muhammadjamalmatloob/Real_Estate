import React, { useState, useEffect } from 'react';
import { useParams, Link, useOutletContext } from 'react-router-dom';
import { fetchPropertyById, createPropertyInquiry } from '../api/propertiesApi';
import { formatPrice, formatArea, marlaToSqFt } from '../utils/formatters';
import { 
  Heart, Bed, Bath, Maximize2, MapPin, Phone, Mail, 
  CheckCircle2, ArrowLeft, Calendar, Share2, ShieldCheck, Car, SlidersHorizontal
} from 'lucide-react';

export default function PropertyDetailPage() {
  const { id } = useParams();
  const { 
    favorites, 
    onToggleFavorite, 
    compareList, 
    onToggleCompare, 
    currency, 
    onOpenVisitModal, 
    showToast 
  } = useOutletContext();
  
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Inquiry Form state
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [inquirySent, setInquirySent] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchPropertyById(id)
      .then((data) => {
        setProperty(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('API Error:', err);
        setLoading(false);
      });
  }, [id]);

  const handleInquirySubmit = async (e) => {
    e.preventDefault();
    if (!name || !phone) return;

    try {
      await createPropertyInquiry({
        propertyId: property.id,
        name,
        phone,
        message: message || `Inquiry for ${property.title}`
      });
      setInquirySent(true);
      showToast('Inquiry submitted! An agent will call you shortly.');
    } catch (err) {
      showToast('Failed to submit inquiry. Please try calling.');
    }
  };

  if (loading) {
    return (
      <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-8 w-40 bg-slate-200 rounded animate-pulse mb-6"></div>
        <div className="h-[450px] bg-slate-200 rounded-3xl animate-pulse mb-8"></div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <div className="h-8 bg-slate-200 rounded w-3/4 animate-pulse"></div>
            <div className="h-24 bg-slate-200 rounded animate-pulse"></div>
          </div>
          <div className="h-80 bg-slate-200 rounded-3xl animate-pulse"></div>
        </div>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="pt-36 pb-24 text-center max-w-lg mx-auto px-4">
        <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Property Not Found</h2>
        <p className="text-xs text-slate-500 mb-6">
          The listing you are looking for may have been sold or moved.
        </p>
        <Link
          to="/properties"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#01327e] text-white text-xs font-bold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Browse All Properties</span>
        </Link>
      </div>
    );
  }

  const isFavorite = favorites.includes(property.id);
  const sqft = property.unit === 'Kanal' 
    ? marlaToSqFt(property.size * 20) 
    : marlaToSqFt(property.size);

  return (
    <div className="pt-24 pb-20">
      
      {/* Top Breadcrumbs / Back Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/properties"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-[#01327e] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Listings</span>
          </Link>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleCompare(property.id)}
              className={`px-3 py-2 rounded-full border text-xs font-bold transition-all flex items-center gap-1.5 ${
                compareList.includes(property.id)
                  ? 'bg-amber-400 border-amber-400 text-slate-950 shadow-sm'
                  : 'bg-white border-slate-200 text-slate-700 hover:text-[#01327e]'
              }`}
              title="Compare with other properties"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>{compareList.includes(property.id) ? 'Comparing' : 'Compare'}</span>
            </button>

            <button
              onClick={() => onToggleFavorite(property.id)}
              className={`p-2.5 rounded-full border transition-colors ${
                isFavorite
                  ? 'bg-rose-500 border-rose-500 text-white'
                  : 'bg-white border-slate-200 text-slate-700 hover:text-rose-500'
              }`}
              title={isFavorite ? 'Saved to wishlist' : 'Save property'}
            >
              <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
            </button>
            <button
              onClick={() => {
                navigator.clipboard?.writeText(window.location.href);
                showToast('Link copied to clipboard!');
              }}
              className="p-2.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-[#01327e]"
              title="Share listing"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Gallery */}
        <div className="rounded-3xl overflow-hidden bg-slate-900 shadow-xl mb-8">
          <div className="relative aspect-16/9 sm:aspect-21/9 w-full overflow-hidden">
            <img
              src={property.images[activeImageIndex] || property.images[0]}
              alt={property.title}
              className="w-full h-full object-cover"
            />
            
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#01327e] text-white shadow-md">
                {property.badge || property.type}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/90 text-slate-900 shadow-md">
                {property.sector}
              </span>
            </div>
          </div>

          {/* Thumbnail Strip */}
          {property.images.length > 1 && (
            <div className="p-4 bg-slate-950/60 backdrop-blur-md flex gap-3 overflow-x-auto">
              {property.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-24 h-16 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                    activeImageIndex === idx ? 'border-white ring-2 ring-white/50 scale-105' : 'border-white/30 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Content Layout (2 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Info (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Header Block */}
            <div className="space-y-3 pb-6 border-b border-slate-200">
              <div className="flex flex-wrap items-baseline justify-between gap-4">
                <div className="text-3xl sm:text-4xl font-extrabold text-[#01327e]">
                  {formatPrice(property.price, currency)}
                  {property.purpose === 'rent' && (
                    <span className="text-sm font-medium text-slate-500 ml-1">/ month</span>
                  )}
                </div>
                <span className="px-3 py-1 rounded-lg text-xs font-bold bg-blue-50 text-[#01327e] border border-blue-200/80">
                  {formatArea(property.size, property.unit)}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {property.title}
              </h1>

              <p className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-500">
                <MapPin className="w-4 h-4 text-[#01327e] shrink-0" />
                {property.location}
              </p>
            </div>

            {/* Key Specs Card Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
              <div className="text-center p-2">
                <span className="block text-[11px] font-bold text-slate-400 uppercase">Plot Size</span>
                <span className="text-base font-extrabold text-slate-900">
                  {formatArea(property.size, property.unit)}
                </span>
                <span className="block text-[10px] text-slate-400">~{sqft.toLocaleString()} sqft</span>
              </div>

              <div className="text-center p-2 border-l border-slate-100">
                <span className="block text-[11px] font-bold text-slate-400 uppercase">Bedrooms</span>
                <span className="text-base font-extrabold text-slate-900">
                  {property.bedrooms > 0 ? `${property.bedrooms} Beds` : 'N/A'}
                </span>
                <span className="block text-[10px] text-slate-400">En-suite Baths</span>
              </div>

              <div className="text-center p-2 border-l border-slate-100">
                <span className="block text-[11px] font-bold text-slate-400 uppercase">Bathrooms</span>
                <span className="text-base font-extrabold text-slate-900">
                  {property.bathrooms > 0 ? `${property.bathrooms} Baths` : 'N/A'}
                </span>
                <span className="block text-[10px] text-slate-400">Imported Sanitory</span>
              </div>

              <div className="text-center p-2 border-l border-slate-100">
                <span className="block text-[11px] font-bold text-slate-400 uppercase">Car Parking</span>
                <span className="text-base font-extrabold text-slate-900">
                  {property.parking > 0 ? `${property.parking} Cars` : 'Street'}
                </span>
                <span className="block text-[10px] text-slate-400">Covered Porch</span>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs space-y-3">
              <h3 className="text-base font-bold text-slate-900">
                Property Overview & Construction Highlights
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {property.description}
              </p>
            </div>

            {/* Features & Amenities */}
            {property.amenities && property.amenities.length > 0 && (
              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs space-y-4">
                <h3 className="text-base font-bold text-slate-900">
                  Features & Societal Amenities
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {property.amenities.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Legal / Transfer Assurance Box */}
            <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200/80 flex items-start gap-4">
              <div className="p-2 rounded-xl bg-[#01327e] text-white shrink-0 mt-0.5">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-[#01327e] uppercase tracking-wider">
                  Verified Paragon City Listing
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  This listing has been verified with Paragon City management office records. Clear file documentation, zero litigation, and direct transfer through authorized registrar channels.
                </p>
              </div>
            </div>

          </div>

          {/* Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Agent Lead Card */}
            <div className="bg-gradient-to-br from-[#011639] to-[#01327e] rounded-3xl p-6 text-white shadow-xl space-y-6">
              
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-200 block mb-1">
                  Designated Listing Agent
                </span>
                <h3 className="text-lg font-bold">{property.agent.name}</h3>
                <p className="text-xs text-slate-300 mt-1">
                  Senior Property Consultant • {property.agent.experience} experience
                </p>
              </div>

              {/* Direct Buttons */}
              <div className="space-y-2.5">
                <a
                  href={`tel:${property.agent.phone}`}
                  className="w-full py-3 px-4 rounded-xl bg-white hover:bg-blue-50 text-[#01327e] text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-md text-center"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {property.agent.phone}</span>
                </a>

                <button
                  type="button"
                  onClick={onOpenVisitModal}
                  className="w-full py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors border border-white/20 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-blue-200" />
                  <span>Schedule Site Visit</span>
                </button>
              </div>

              {/* Instant Inquiry Form */}
              <div className="pt-4 border-t border-white/10">
                {inquirySent ? (
                  <div className="text-center py-4 space-y-2">
                    <CheckCircle2 className="w-8 h-8 text-white mx-auto" />
                    <h5 className="text-xs font-bold text-white">Inquiry Sent</h5>
                    <p className="text-[11px] text-slate-300">We will call you on {phone}</p>
                  </div>
                ) : (
                  <form onSubmit={handleInquirySubmit} className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                      Send Instant Message
                    </h4>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-white text-slate-900 text-xs placeholder-slate-400 outline-none"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Phone / WhatsApp"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-white text-slate-900 text-xs placeholder-slate-400 outline-none"
                    />
                    <textarea
                      rows={2}
                      placeholder="I am interested in this property..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-white text-slate-900 text-xs placeholder-slate-400 outline-none resize-none"
                    />
                    <button
                      type="submit"
                      className="w-full py-2.5 rounded-xl bg-white text-[#01327e] font-bold text-xs hover:bg-slate-100 transition-colors shadow-xs"
                    >
                      Send Inquiry
                    </button>
                  </form>
                )}
              </div>

            </div>

            {/* Office Helpline Box */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs text-center space-y-2">
              <span className="text-[11px] font-bold text-slate-400 uppercase">
                Paragon City Main Office
              </span>
              <div className="text-base font-extrabold text-[#01327e]">
                +92 42 111-727-246
              </div>
              <p className="text-[11px] text-slate-500">
                Gate 1, Main Boulevard, Barki Road, Lahore
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
