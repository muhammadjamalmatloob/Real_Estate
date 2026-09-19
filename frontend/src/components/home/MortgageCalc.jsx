import React, { useState } from 'react';
import { Calculator, DollarSign, Calendar, Percent, CheckCircle2 } from 'lucide-react';
import { formatPricePKR } from '../../utils/formatters';

export default function MortgageCalc() {
  const [propertyPrice, setPropertyPrice] = useState(35000000); // 3.5 Crore default
  const [downPaymentPercent, setDownPaymentPercent] = useState(25);
  const [tenureYears, setTenureYears] = useState(15);
  const [interestRate, setInterestRate] = useState(16); // 16% Islamic / Conventional mortgage benchmark

  // Calculation
  const downPaymentAmount = (propertyPrice * downPaymentPercent) / 100;
  const loanPrincipal = propertyPrice - downPaymentAmount;
  const monthlyInterestRate = (interestRate / 100) / 12;
  const totalPaymentsCount = tenureYears * 12;

  let monthlyEMI = 0;
  if (monthlyInterestRate > 0) {
    monthlyEMI =
      (loanPrincipal *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, totalPaymentsCount)) /
      (Math.pow(1 + monthlyInterestRate, totalPaymentsCount) - 1);
  } else {
    monthlyEMI = loanPrincipal / totalPaymentsCount;
  }

  const totalPayable = monthlyEMI * totalPaymentsCount;
  const totalInterest = totalPayable - loanPrincipal;

  return (
    <section id="calculator" className="py-20 bg-slate-50 border-t border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#01327e]">
            Financial Planning
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-4">
            Paragon City Home Financing Calculator
          </h2>
          <p className="text-sm text-slate-600">
            Estimate your monthly installments with partner Islamic and conventional banks (Meezan, HBL, Bank Alfalah) for Paragon City villas and plots.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Input Controls (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Property Value */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold uppercase text-slate-500">
                    Property Price (PKR)
                  </label>
                  <span className="text-sm font-extrabold text-[#01327e]">
                    {formatPricePKR(propertyPrice)}
                  </span>
                </div>
                <input
                  type="range"
                  min="5000000"
                  max="120000000"
                  step="1000000"
                  value={propertyPrice}
                  onChange={(e) => setPropertyPrice(Number(e.target.value))}
                  className="w-full accent-[#01327e] cursor-pointer"
                />
                <div className="flex gap-2 mt-2">
                  {[15000000, 35000000, 68000000].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setPropertyPrice(preset)}
                      className={`text-[11px] font-bold px-2.5 py-1 rounded-lg border transition-colors ${
                        propertyPrice === preset
                          ? 'bg-[#01327e] text-white border-[#01327e]'
                          : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200'
                      }`}
                    >
                      {formatPricePKR(preset)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Down Payment */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold uppercase text-slate-500">
                    Down Payment ({downPaymentPercent}%)
                  </label>
                  <span className="text-sm font-bold text-slate-800">
                    {formatPricePKR(downPaymentAmount)}
                  </span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="60"
                  step="5"
                  value={downPaymentPercent}
                  onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                  className="w-full accent-[#01327e] cursor-pointer"
                />
              </div>

              {/* Loan Tenure */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold uppercase text-slate-500">
                    Financing Tenure
                  </label>
                  <span className="text-sm font-bold text-slate-800">
                    {tenureYears} Years ({totalPaymentsCount} Months)
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[5, 10, 15, 20].map((yr) => (
                    <button
                      key={yr}
                      type="button"
                      onClick={() => setTenureYears(yr)}
                      className={`py-2 rounded-xl text-xs font-bold border transition-colors ${
                        tenureYears === yr
                          ? 'bg-[#01327e] text-white border-[#01327e]'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {yr} Years
                    </button>
                  ))}
                </div>
              </div>

              {/* Interest Rate */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold uppercase text-slate-500">
                    Expected Profit / Markup Rate
                  </label>
                  <span className="text-sm font-bold text-slate-800">{interestRate}% p.a.</span>
                </div>
                <input
                  type="range"
                  min="12"
                  max="22"
                  step="0.5"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full accent-[#01327e] cursor-pointer"
                />
              </div>

            </div>

            {/* Results Card (5 cols) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#011639] to-[#01327e] text-white rounded-2xl p-6 sm:p-7 shadow-lg flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-200">
                  Estimated Installment
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
                  PKR {Math.round(monthlyEMI).toLocaleString()}
                </div>
                <span className="text-xs text-blue-200">per month</span>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/10 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>Financed Principal:</span>
                  <strong className="text-white">{formatPricePKR(loanPrincipal)}</strong>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Down Payment:</span>
                  <strong className="text-white">{formatPricePKR(downPaymentAmount)}</strong>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Estimated Total Markup:</span>
                  <strong className="text-white">{formatPricePKR(totalInterest)}</strong>
                </div>
              </div>

              <a
                href="#contact"
                className="w-full py-3 rounded-xl bg-white hover:bg-blue-50 text-[#01327e] font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-md text-center"
              >
                Apply for Pre-Approval
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
