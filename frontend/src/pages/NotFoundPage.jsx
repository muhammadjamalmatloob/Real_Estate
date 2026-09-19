import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="pt-36 pb-28 text-center max-w-xl mx-auto px-4">
      <div className="w-20 h-20 rounded-3xl bg-blue-50 text-[#01327e] flex items-center justify-center mx-auto mb-6">
        <Home className="w-10 h-10" />
      </div>
      <span className="text-xs font-bold uppercase tracking-widest text-[#01327e]">
        404 Page Not Found
      </span>
      <h1 className="text-3xl font-extrabold text-slate-900 mt-2 mb-3">
        Looking for a Property in Paragon City?
      </h1>
      <p className="text-xs text-slate-500 mb-8 leading-relaxed">
        The page you requested does not exist or may have been moved. Return to the homepage or browse verified properties.
      </p>
      <div className="flex justify-center gap-3">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#01327e] text-white text-xs font-bold shadow-md hover:bg-[#012866] transition-colors"
        >
          <Home className="w-4 h-4" />
          <span>Go to Homepage</span>
        </Link>
        <Link
          to="/properties"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-50 transition-colors"
        >
          <span>Browse Properties</span>
        </Link>
      </div>
    </div>
  );
}
