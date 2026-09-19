import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Heart, Menu, X, Globe, SlidersHorizontal } from 'lucide-react';
import { CURRENCIES } from '../../utils/formatters';

export default function Navbar({
  favoritesCount = 0,
  onOpenFavorites,
  compareCount = 0,
  onOpenCompare,
  currency = 'PKR',
  onChangeCurrency,
  onBookVisit
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Properties', href: '/properties' },
    { label: 'Master Plan', href: '/#sectors' },
    { label: 'Transfer Process', href: '/#timeline' },
    { label: 'Financing', href: '/#calculator' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav shadow-sm border-b border-slate-200/80 py-2.5'
          : 'bg-white/95 backdrop-blur-md py-3.5 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/Paragon_Logo.svg"
              alt="Paragon City Real Estate"
              className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="hidden sm:block text-left">
              <span className="block text-xs font-bold tracking-widest text-[#01327e] uppercase">
                Paragon City
              </span>
              <span className="block text-[10px] font-medium text-slate-500 tracking-wider">
                Official Real Estate Portal
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const isAnchor = link.href.includes('#');
              return isAnchor ? (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs font-bold text-slate-700 hover:text-[#01327e] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#01327e] hover:after:w-full after:transition-all uppercase tracking-wider"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-xs font-bold transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#01327e] hover:after:w-full after:transition-all uppercase tracking-wider ${
                    location.pathname === link.href ? 'text-[#01327e] after:w-full' : 'text-slate-700 hover:text-[#01327e]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions: Currency, Compare, Wishlist, CTA */}
          <div className="hidden lg:flex items-center gap-3">
            
            {/* Currency Selector */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200/70 border border-slate-200 transition-colors">
              <Globe className="w-3.5 h-3.5 text-[#01327e]" />
              <select
                value={currency}
                onChange={(e) => onChangeCurrency(e.target.value)}
                className="text-xs font-bold text-[#01327e] bg-transparent focus:outline-none cursor-pointer"
                title="Select Display Currency"
              >
                {CURRENCIES.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.code} ({c.symbol})
                  </option>
                ))}
              </select>
            </div>

            {/* Compare Drawer Trigger */}
            <button
              onClick={onOpenCompare}
              className="relative p-2.5 rounded-xl text-slate-600 hover:text-[#01327e] hover:bg-blue-50 transition-colors border border-transparent hover:border-blue-100"
              title="Compare Properties"
              aria-label="Compare Properties"
            >
              <SlidersHorizontal className="w-4 h-4" />
              {compareCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#01327e] text-white text-[10px] font-bold flex items-center justify-center shadow-xs">
                  {compareCount}
                </span>
              )}
            </button>

            {/* Wishlist button */}
            <button
              onClick={onOpenFavorites}
              className="relative p-2.5 rounded-xl text-slate-600 hover:text-[#01327e] hover:bg-blue-50 transition-colors border border-transparent hover:border-blue-100"
              title="Saved Properties"
              aria-label="View Saved Properties"
            >
              <Heart className="w-4 h-4" />
              {favoritesCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#01327e] text-white text-[10px] font-bold flex items-center justify-center shadow-xs">
                  {favoritesCount}
                </span>
              )}
            </button>

            {/* Book Site Visit CTA */}
            <button
              onClick={onBookVisit}
              className="px-4 py-2.5 rounded-xl bg-[#01327e] hover:bg-[#012866] text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all hover:scale-102 cursor-pointer border border-[#01327e]"
            >
              Book Site Visit
            </button>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <select
              value={currency}
              onChange={(e) => onChangeCurrency(e.target.value)}
              className="text-[11px] font-bold text-[#01327e] bg-slate-100 border border-slate-200 rounded-lg px-2 py-1"
            >
              {CURRENCIES.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.code}
                </option>
              ))}
            </select>

            <button
              onClick={onOpenFavorites}
              className="relative p-2 rounded-full text-slate-600 hover:text-[#01327e]"
              aria-label="View Saved Properties"
            >
              <Heart className="w-5 h-5" />
              {favoritesCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#01327e] text-white text-[10px] font-bold flex items-center justify-center">
                  {favoritesCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isAnchor = link.href.includes('#');
              return isAnchor ? (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-md text-sm font-semibold text-slate-700 hover:text-[#01327e] hover:bg-blue-50"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-md text-sm font-semibold text-slate-700 hover:text-[#01327e] hover:bg-blue-50"
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCompare();
              }}
              className="w-full py-2 rounded-xl bg-slate-100 text-[#01327e] text-xs font-bold flex items-center justify-center gap-2"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Compare Tray ({compareCount})</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookVisit();
              }}
              className="w-full py-2.5 rounded-xl bg-[#01327e] text-white text-xs font-bold shadow-sm uppercase tracking-wider"
            >
              Book Site Visit
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
