import React, { useState } from 'react';
import { MapPin, ArrowRight, ShieldCheck, Layers } from 'lucide-react';
import { STATIC_SECTOR_CARDS as SECTOR_CARDS } from '../../api';

export default function InteractiveMasterMap({ onSelectSector }) {
  const [activeZone, setActiveZone] = useState('imperial');

  const zones = [
    {
      id: 'imperial',
      name: 'Imperial Garden',
      badge: 'Zone A - Ultra Luxury',
      coords: { top: '38%', left: '26%' },
      tagline: '1 & 2 Kanal Mansions & Luxury Plots',
      specs: 'Wide 80ft Boulevards • Underground Electricity • Lush Green Belts',
      avgPrice: 'PKR 2.4 - 7.5 Crore',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'orchard',
      name: 'Orchard Homes',
      badge: 'Zone B - Family Community',
      coords: { top: '56%', left: '38%' },
      tagline: '10 Marla & 1 Kanal Villas with Parks',
      specs: 'Central Theme Gardens • LACAS School • Sports Arena',
      avgPrice: 'PKR 1.6 - 4.2 Crore',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'executive',
      name: 'Executive Cottages',
      badge: 'Zone C - Modern Living',
      coords: { top: '62%', left: '72%' },
      tagline: '5 & 10 Marla High-Spec Residences',
      specs: 'Close to Gate 1 • Community Mosque • 24/7 Patrol Squad',
      avgPrice: 'PKR 80 Lac - 2.2 Crore',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'commercial',
      name: 'Commercial Boulevard',
      badge: 'Retail & Corporate Hub',
      coords: { top: '35%', left: '74%' },
      tagline: 'Main 150ft Commercial Broadway',
      specs: 'Banks & Corporate Suites • Fast Food Hubs • High Footfall',
      avgPrice: 'PKR 5.0 - 18.0 Crore',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80'
    },
  ];

  const currentZone = zones.find((z) => z.id === activeZone) || zones[0];

  return (
    <section className="py-24 bg-[#011639] text-white relative overflow-hidden">
      
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#01327e]/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-blue-200 text-xs font-bold uppercase tracking-widest mb-3 backdrop-blur-md">
            <Layers className="w-3.5 h-3.5 text-blue-300" />
            <span>Interactive Master Plan Explorer</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Architectural Master Plan of Paragon City
          </h2>
          <p className="text-sm text-slate-300 mt-3 leading-relaxed">
            Click on any sector pin to explore the zoning, infrastructure specs, and live property valuations.
          </p>
        </div>

        {/* Interactive Master Map Container */}
        <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-slate-900 shadow-2xl">
          
          {/* Main 3D Render Image */}
          <div className="relative aspect-16/10 sm:aspect-16/9 w-full overflow-hidden select-none">
            <img
              src="/images/paragon_master_plan.jpg"
              alt="Paragon City Master Plan"
              className="w-full h-full object-cover"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#011639]/90 via-transparent to-transparent pointer-events-none"></div>

            {/* Interactive Pins in Monochrome Blue & White */}
            {zones.map((zone) => (
              <div
                key={zone.id}
                style={{ top: zone.coords.top, left: zone.coords.left }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
              >
                <button
                  onClick={() => setActiveZone(zone.id)}
                  className={`group relative flex items-center justify-center p-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeZone === zone.id
                      ? 'bg-white text-[#01327e] scale-125 shadow-xl ring-4 ring-[#01327e]'
                      : 'bg-[#01327e] text-white hover:bg-white hover:text-[#01327e] shadow-md hover:scale-110'
                  }`}
                  aria-label={`Select ${zone.name}`}
                >
                  <MapPin className="w-5 h-5 fill-current" />
                  
                  {/* Pin label */}
                  <span className="absolute -bottom-7 whitespace-nowrap px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-slate-950/90 backdrop-blur-md text-white border border-white/20 shadow-md pointer-events-none">
                    {zone.name}
                  </span>
                </button>
              </div>
            ))}
          </div>

          {/* Floating Zone Info Card */}
          <div className="p-6 sm:p-8 bg-[#011639] border-t border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              {/* Sector selector pills */}
              <div className="lg:col-span-5 space-y-3">
                <span className="text-[11px] font-bold text-blue-200 uppercase tracking-widest block">
                  Select Sector Zone
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {zones.map((z) => (
                    <button
                      key={z.id}
                      onClick={() => setActiveZone(z.id)}
                      className={`px-4 py-3 rounded-2xl text-xs font-bold text-left transition-all border ${
                        activeZone === z.id
                          ? 'bg-[#01327e] text-white border-white ring-2 ring-white/20 shadow-md'
                          : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <div className="text-[10px] text-blue-200 uppercase">{z.badge}</div>
                      <div className="text-sm font-extrabold">{z.name}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Zone Detail Card */}
              <div className="lg:col-span-7 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15 flex flex-col sm:flex-row gap-6 items-center">
                <img
                  src={currentZone.image}
                  alt={currentZone.name}
                  className="w-full sm:w-36 h-28 rounded-xl object-cover shrink-0 border border-white/20"
                />

                <div className="space-y-2 flex-grow min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase bg-white text-[#01327e]">
                      {currentZone.badge}
                    </span>
                    <span className="text-xs font-bold text-blue-200 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-blue-300" /> Possession Active
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-white">
                    {currentZone.name} — {currentZone.tagline}
                  </h3>

                  <p className="text-xs text-slate-300">
                    {currentZone.specs}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase block">Benchmark Price</span>
                      <span className="text-sm font-extrabold text-white">{currentZone.avgPrice}</span>
                    </div>

                    <button
                      onClick={() => onSelectSector(currentZone.name)}
                      className="px-4 py-2 rounded-xl bg-white hover:bg-blue-50 text-[#01327e] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
                    >
                      <span>Explore Sector</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
