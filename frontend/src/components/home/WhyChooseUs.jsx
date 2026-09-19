import React from 'react';
import { ShieldCheck, Zap, Compass, School, Trees, FileCheck } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: ShieldCheck,
      title: '100% LDA Approved',
      description: 'Clear NOC and complete legal safety. All transfers conducted through the official Paragon City Management Office.'
    },
    {
      icon: Compass,
      title: 'Prime Barki Road Location',
      description: 'Directly linked to Lahore Ring Road, DHA Phase 8, and Allama Iqbal International Airport in under 7 minutes.'
    },
    {
      icon: Zap,
      title: 'Underground Infrastructure',
      description: 'Zero dangling wires. Modern underground electricity grid, Sui Gas network, fiber internet, and dedicated drainage systems.'
    },
    {
      icon: Trees,
      title: 'Lush Parks & Green Belts',
      description: 'Over 20+ community parks, jogging tracks, botanical gardens, and dedicated recreational areas for families.'
    },
    {
      icon: School,
      title: 'Top Tier Education',
      description: 'Prestigious institutions inside the society including LACAS, Scarsdale International, and leading Montessori campuses.'
    },
    {
      icon: FileCheck,
      title: 'Direct Transfer & Fast Token',
      description: 'Transparent dealings with no hidden commissions. On-site plot verification and immediate possession certificates.'
    }
  ];

  return (
    <section id="why-paragon" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#01327e]">
            The Paragon Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-4">
            Why Invest & Live in Paragon City?
          </h2>
          <p className="text-sm text-slate-600">
            Engineered as a self-contained modern township, Paragon City combines upscale peace of mind with exceptional real estate capital appreciation.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-[#01327e]/40 hover:bg-white transition-all duration-300 shadow-xs hover:shadow-lg group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#01327e] text-white flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-[#01327e] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
