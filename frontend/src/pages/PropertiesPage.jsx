import React, { useState, useEffect } from 'react';
import { useSearchParams, useOutletContext } from 'react-router-dom';
import PropertyFilter from '../components/properties/PropertyFilter';
import PropertyGrid from '../components/properties/PropertyGrid';
import { fetchProperties } from '../api/propertiesApi';
import { Building2 } from 'lucide-react';

export default function PropertiesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { 
    favorites, 
    onToggleFavorite, 
    compareList, 
    onToggleCompare, 
    currency 
  } = useOutletContext();

  const [filters, setFilters] = useState({
    purpose: searchParams.get('purpose') || 'all',
    sector: searchParams.get('sector') || 'All Sectors',
    type: searchParams.get('type') || 'All Types',
    maxPrice: searchParams.get('maxPrice') ? Number(searchParams.get('maxPrice')) : null,
    bedrooms: searchParams.get('bedrooms') ? Number(searchParams.get('bedrooms')) : null,
    search: searchParams.get('q') || ''
  });

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setFilters({
      purpose: searchParams.get('purpose') || 'all',
      sector: searchParams.get('sector') || 'All Sectors',
      type: searchParams.get('type') || 'All Types',
      maxPrice: searchParams.get('maxPrice') ? Number(searchParams.get('maxPrice')) : null,
      bedrooms: searchParams.get('bedrooms') ? Number(searchParams.get('bedrooms')) : null,
      search: searchParams.get('q') || ''
    });
  }, [searchParams]);

  useEffect(() => {
    setLoading(true);
    fetchProperties(filters)
      .then((data) => {
        setProperties(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('API Error loading properties:', err);
        setLoading(false);
      });
  }, [filters]);

  const handleFilterChange = (newFilters) => {
    const updated = { ...filters, ...newFilters };
    setFilters(updated);

    const params = new URLSearchParams();
    if (updated.purpose && updated.purpose !== 'all') params.set('purpose', updated.purpose);
    if (updated.sector && updated.sector !== 'All Sectors') params.set('sector', updated.sector);
    if (updated.type && updated.type !== 'All Types') params.set('type', updated.type);
    if (updated.maxPrice) params.set('maxPrice', updated.maxPrice);
    if (updated.bedrooms) params.set('bedrooms', updated.bedrooms);
    if (updated.search) params.set('q', updated.search);
    setSearchParams(params);
  };

  const handleResetFilters = () => {
    setFilters({
      purpose: 'all',
      sector: 'All Sectors',
      type: 'All Types',
      maxPrice: null,
      bedrooms: null,
      search: ''
    });
    setSearchParams({});
  };

  return (
    <div className="pt-24 pb-20">
      
      {/* Page Header */}
      <div className="bg-[#011639] text-white py-12 mb-10 border-b border-[#012866]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-200 text-xs font-bold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>Verified Portfolio Listings</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold">
            Paragon City Properties & Plots
          </h1>
          <p className="text-sm text-slate-300 mt-2 max-w-xl">
            Browse through genuine residential bungalows, vacant possession plots, and commercial properties. Compare listings and switch currency anytime.
          </p>
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Filter Toolbar */}
        <PropertyFilter
          filters={filters}
          onFilterChange={handleFilterChange}
          onResetFilters={handleResetFilters}
          totalResults={properties.length}
        />

        {/* Listings Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="h-96 rounded-2xl bg-slate-200 animate-pulse"></div>
            ))}
          </div>
        ) : (
          <PropertyGrid
            properties={properties}
            favorites={favorites}
            onToggleFavorite={onToggleFavorite}
            currency={currency}
            compareList={compareList}
            onToggleCompare={onToggleCompare}
            onResetFilters={handleResetFilters}
          />
        )}

      </div>

    </div>
  );
}
