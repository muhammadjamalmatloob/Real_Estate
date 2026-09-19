import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, User, Phone, CheckCircle2 } from 'lucide-react';
import { STATIC_SECTORS as SECTORS } from '../../api';

export default function BookVisitModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    sector: 'Imperial Garden',
    date: '',
    timeSlot: 'Morning (10:00 AM - 1:00 PM)',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header with deep blue banner */}
        <div className="bg-[#01327e] p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/20 text-white text-[10px] font-bold uppercase tracking-wider mb-2">
            Complimentary Service
          </div>
          <h3 className="text-xl font-bold">Book an Accompanied Site Visit</h3>
          <p className="text-xs text-slate-200 mt-1">
            Explore Paragon City on-ground with an authorized consultant.
          </p>
        </div>

        {/* Form Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-3">
              <CheckCircle2 className="w-14 h-14 text-emerald-500 mx-auto animate-bounce" />
              <h4 className="text-lg font-bold text-slate-900">Visit Scheduled!</h4>
              <p className="text-xs text-slate-600 max-w-xs mx-auto">
                Thank you, <strong>{formData.name}</strong>. Our representative will call <strong>{formData.phone}</strong> to confirm your pickup/meeting point at Paragon Gate 1.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="mt-4 px-6 py-2.5 rounded-xl bg-[#01327e] text-white text-xs font-bold shadow-sm"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Muhammad Ali"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#01327e]/20 focus:border-[#01327e] outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+92 300 1234567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#01327e]/20 focus:border-[#01327e] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Preferred Sector
                  </label>
                  <select
                    value={formData.sector}
                    onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#01327e]/20 focus:border-[#01327e] outline-none bg-white"
                  >
                    {SECTORS.filter(s => s !== 'All Sectors').map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#01327e]/20 focus:border-[#01327e] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Time Window
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#01327e]/20 focus:border-[#01327e] outline-none bg-white"
                  >
                    <option>Morning (10:00 AM - 1:00 PM)</option>
                    <option>Afternoon (2:00 PM - 5:00 PM)</option>
                    <option>Evening (5:00 PM - 7:30 PM)</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3 rounded-xl bg-[#01327e] hover:bg-[#012866] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-colors"
              >
                Confirm Appointment
              </button>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
