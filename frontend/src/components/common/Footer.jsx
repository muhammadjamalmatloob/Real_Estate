import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#011639] text-white pt-16 pb-12 border-t border-[#012866]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-white/10 backdrop-blur-xs border border-white/20">
                <img
                  src="/Icon.svg"
                  alt="Paragon City"
                  className="h-9 w-9 object-contain"
                />
              </div>
              <div>
                <span className="block text-base font-extrabold tracking-wider text-white uppercase">
                  Paragon City
                </span>
                <span className="block text-xs font-semibold text-blue-200 tracking-widest uppercase">
                  Real Estate & Property Consultants
                </span>
              </div>
            </div>
            
            <p className="text-sm text-slate-300 leading-relaxed pr-6">
              Your premier gateway to luxury residential villas, verified plots, and high-yield commercial investments in Paragon City Lahore. Authorized consultants with 100% verified documentation.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-blue-200">
              <ShieldCheck className="w-4 h-4 text-blue-300" />
              <span>LDA Approved Master Planned Housing Scheme</span>
            </div>
          </div>

          {/* Quick Sectors */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-blue-200">
              Popular Sectors
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a href="#sectors" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <span>Imperial Garden</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-blue-300" />
                </a>
              </li>
              <li>
                <a href="#sectors" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <span>Orchard Homes</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-blue-300" />
                </a>
              </li>
              <li>
                <a href="#sectors" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <span>Executive Cottages</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-blue-300" />
                </a>
              </li>
              <li>
                <a href="#sectors" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <span>Barki Road Block</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-blue-300" />
                </a>
              </li>
              <li>
                <a href="#sectors" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <span>Commercial Boulevard</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-blue-300" />
                </a>
              </li>
            </ul>
          </div>

          {/* Property Categories */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-blue-200">
              Property Categories
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="#properties" className="hover:text-white transition-colors">1 Kanal Luxury Villas</a></li>
              <li><a href="#properties" className="hover:text-white transition-colors">10 Marla Designer Houses</a></li>
              <li><a href="#properties" className="hover:text-white transition-colors">5 Marla Budget Homes</a></li>
              <li><a href="#properties" className="hover:text-white transition-colors">Residential Plots with Possession</a></li>
              <li><a href="#properties" className="hover:text-white transition-colors">Commercial Broadway Plazas</a></li>
            </ul>
          </div>

          {/* Office & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-blue-200">
              Head Office
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-300 shrink-0 mt-0.5" />
                <span>Main Boulevard, Paragon City Gate 1, Barki Road, Lahore, Pakistan</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-300 shrink-0" />
                <span>+92 42 111-727-246</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-300 shrink-0" />
                <span>info@paragoncityrealestate.com</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-blue-300 shrink-0" />
                <span>Mon - Sat: 9:30 AM - 7:30 PM</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Paragon City Real Estate. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">LDA Regulations</a>
            <a href="#calculator" className="hover:text-white transition-colors">Mortgage Tool</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
