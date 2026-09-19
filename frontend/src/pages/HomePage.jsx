import React, { useState, useEffect } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import HeroSection from '../components/home/HeroSection';
import InteractiveMasterMap from '../components/home/InteractiveMasterMap';
import TransferProcessTimeline from '../components/home/TransferProcessTimeline';
import OverseasInvestorDesk from '../components/home/OverseasInvestorDesk';
import WhyChooseUs from '../components/home/WhyChooseUs';
import MortgageCalc from '../components/home/MortgageCalc';
import CTASection from '../components/home/CTASection';
import PropertyCard from '../components/properties/PropertyCard';
import { fetchProperties } from '../api/propertiesApi';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function HomePage() {
  const navigate = useNavigate();
  const { 
    favorites, 
    onToggleFavorite, 
    compareList, 
    onToggleCompare, 
    currency, 
    onOpenVisitModal 
  } = useOutletContext();

  const [featuredProperties, setFeaturedProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  const [heroFilters, setHeroFilters] = useState({
    purpose: 'sale',
    sector: 'All Sectors',
    type: 'All Types',
    maxPrice: null
  });

  useEffect(() => {
    fetchProperties({ purpose: 'all' })
      .then((data) => {
        setFeaturedProperties(data.slice(0, 6));
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load featured properties:', err);
        setLoading(false);
      });
  }, []);

  const handleHeroSearch = () => {
    const params = new URLSearchParams();
    if (heroFilters.purpose && heroFilters.purpose !== 'all') params.set('purpose', heroFilters.purpose);
    if (heroFilters.sector && heroFilters.sector !== 'All Sectors') params.set('sector', heroFilters.sector);
    if (heroFilters.type && heroFilters.type !== 'All Types') params.set('type', heroFilters.type);
    if (heroFilters.maxPrice) params.set('maxPrice', heroFilters.maxPrice);
    navigate(`/properties?${params.toString()}`);
  };

  const handleSelectSector = (sectorName) => {
    navigate(`/properties?sector=${encodeURIComponent(sectorName)}`);
  };

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        filters={heroFilters}
        onFilterChange={(newFilters) => setHeroFilters((prev) => ({ ...prev, ...newFilters }))}
        onSearchSubmit={handleHeroSearch}
      />

      {/* Featured Properties Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#01327e] text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#01327e]" />
              <span>Curated Portfolio</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
              Featured Luxury Listings
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Verified villas and commercial opportunities. Switch currency in the top bar to view in USD, GBP, or AED.
            </p>
          </div>

          <button
            onClick={() => navigate('/properties')}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#01327e] hover:text-[#012866] bg-blue-50 hover:bg-blue-100 px-4 py-2.5 rounded-xl transition-colors shrink-0"
          >
            <span>Explore All Listings</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((n) => (
              <div key={n} className="h-96 rounded-2xl bg-slate-200 animate-pulse"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredProperties.map((property) => (
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
        )}
      </section>

      {/* Interactive 3D Master Plan Map Explorer */}
      <div id="sectors">
        <InteractiveMasterMap onSelectSector={handleSelectSector} />
      </div>

      {/* 4-Step Official Transfer Process Timeline */}
      <div id="timeline">
        <TransferProcessTimeline />
      </div>

      {/* Dedicated Overseas Pakistani Expatriate Desk */}
      <OverseasInvestorDesk onBookConsultation={onOpenVisitModal} />

      {/* Why Choose Us & Trust Indicators */}
      <WhyChooseUs />

      {/* Financial / Mortgage Calculator */}
      <MortgageCalc />

      {/* Site Tour CTA */}
      <CTASection onBookVisit={onOpenVisitModal} />
    </div>
  );
}
