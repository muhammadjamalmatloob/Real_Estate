/**
 * Currency conversion exchange benchmarks
 */
export const EXCHANGE_RATES = {
  PKR: 1,
  USD: 280,
  GBP: 365,
  AED: 76.5,
};

export const CURRENCIES = [
  { code: 'PKR', symbol: 'Rs', label: 'Pakistani Rupee (PKR)' },
  { code: 'USD', symbol: '$', label: 'US Dollar (USD)' },
  { code: 'GBP', symbol: '£', label: 'British Pound (GBP)' },
  { code: 'AED', symbol: 'AED', label: 'UAE Dirham (AED)' },
];

/**
 * Format currency with dynamic currency selection (PKR Lacs/Crores, USD, GBP, AED)
 * @param {number} amountPKR Amount in PKR
 * @param {string} currency 'PKR' | 'USD' | 'GBP' | 'AED'
 * @returns {string}
 */
export function formatPrice(amountPKR, currency = 'PKR') {
  if (!amountPKR || isNaN(amountPKR)) return 'Price on Call';

  if (currency === 'PKR') {
    if (amountPKR >= 10000000) {
      const crores = amountPKR / 10000000;
      return `PKR ${crores.toFixed(crores % 1 === 0 ? 0 : 2)} Crore`;
    }
    if (amountPKR >= 100000) {
      const lacs = amountPKR / 100000;
      return `PKR ${lacs.toFixed(lacs % 1 === 0 ? 0 : 2)} Lac`;
    }
    return `PKR ${amountPKR.toLocaleString()}`;
  }

  // Foreign currencies
  const rate = EXCHANGE_RATES[currency] || 1;
  const converted = amountPKR / rate;

  if (currency === 'USD') {
    if (converted >= 1000000) return `$${(converted / 1000000).toFixed(2)}M`;
    return `$${Math.round(converted).toLocaleString()}`;
  }

  if (currency === 'GBP') {
    if (converted >= 1000000) return `£${(converted / 1000000).toFixed(2)}M`;
    return `£${Math.round(converted).toLocaleString()}`;
  }

  if (currency === 'AED') {
    if (converted >= 1000000) return `${(converted / 1000000).toFixed(2)}M AED`;
    return `${Math.round(converted).toLocaleString()} AED`;
  }

  return `${currency} ${Math.round(converted).toLocaleString()}`;
}

/**
 * Backward-compatible helper for PKR
 */
export function formatPricePKR(amount) {
  return formatPrice(amount, 'PKR');
}

/**
 * Format area with unit (Marla / Kanal / Sq. Ft.)
 */
export function formatArea(size, unit = 'Marla') {
  if (!size) return '';
  return `${size} ${unit}`;
}

/**
 * Approximate square footage from Marla (1 Marla ≈ 225 sq ft in modern Lahore housing schemes)
 */
export function marlaToSqFt(marlas) {
  return Math.round(marlas * 225);
}
