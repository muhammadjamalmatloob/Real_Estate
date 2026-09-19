/**
 * Centralized Real Estate API Service for Paragon City
 * All data operations for properties, sectors, inquiries, and site visits route through here.
 * 
 * Switching to Live Backend:
 * Change `USE_MOCK_DATA` in `src/api/config.js` to `false`.
 */

import apiClient from './client';
import { USE_MOCK_DATA } from './config';
import { 
  PROPERTIES as MOCK_PROPERTIES, 
  SECTORS as MOCK_SECTORS, 
  PROPERTY_TYPES as MOCK_TYPES, 
  SECTOR_CARDS as MOCK_SECTOR_CARDS 
} from '../data/properties';

// Re-export static constants through the API layer
export const STATIC_SECTORS = MOCK_SECTORS;
export const STATIC_PROPERTY_TYPES = MOCK_TYPES;
export const STATIC_SECTOR_CARDS = MOCK_SECTOR_CARDS;
export const STATIC_PROPERTIES = MOCK_PROPERTIES;

/**
 * Fetch list of properties with optional filter criteria
 * @param {Object} [filters]
 * @returns {Promise<Array>}
 */
export async function fetchProperties(filters = {}) {
  if (!USE_MOCK_DATA) {
    // REAL BACKEND CALL: GET /api/properties?purpose=...&sector=...
    return await apiClient.get('/properties', filters);
  }

  // MOCK DATA FALLBACK:
  await new Promise((resolve) => setTimeout(resolve, 80));

  let results = [...MOCK_PROPERTIES];

  if (filters.purpose && filters.purpose !== 'all') {
    results = results.filter((p) => p.purpose === filters.purpose);
  }

  if (filters.sector && filters.sector !== 'All Sectors') {
    results = results.filter((p) => p.sector === filters.sector);
  }

  if (filters.type && filters.type !== 'All Types') {
    results = results.filter((p) => p.type === filters.type);
  }

  if (filters.maxPrice) {
    results = results.filter((p) => p.price <= filters.maxPrice);
  }

  if (filters.bedrooms) {
    results = results.filter((p) => p.bedrooms >= filters.bedrooms);
  }

  if (filters.search && filters.search.trim() !== '') {
    const q = filters.search.toLowerCase();
    results = results.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.sector.toLowerCase().includes(q) ||
        p.location.toLowerCase().includes(q)
    );
  }

  return results;
}

/**
 * Fetch single property by its ID
 * @param {string} id 
 * @returns {Promise<Object|null>}
 */
export async function fetchPropertyById(id) {
  if (!USE_MOCK_DATA) {
    // REAL BACKEND CALL: GET /api/properties/:id
    return await apiClient.get(`/properties/${id}`);
  }

  // MOCK DATA FALLBACK:
  await new Promise((resolve) => setTimeout(resolve, 60));
  const property = MOCK_PROPERTIES.find((p) => p.id === id);
  return property || null;
}

/**
 * Fetch all available Paragon City sectors and overview cards
 * @returns {Promise<Object>}
 */
export async function fetchSectors() {
  if (!USE_MOCK_DATA) {
    // REAL BACKEND CALL: GET /api/sectors
    return await apiClient.get('/sectors');
  }

  // MOCK DATA FALLBACK:
  await new Promise((resolve) => setTimeout(resolve, 40));
  return {
    sectorNames: MOCK_SECTORS,
    sectorCards: MOCK_SECTOR_CARDS
  };
}

/**
 * Fetch supported property types
 * @returns {Promise<Array<string>>}
 */
export async function fetchPropertyTypes() {
  if (!USE_MOCK_DATA) {
    // REAL BACKEND CALL: GET /api/property-types
    return await apiClient.get('/property-types');
  }

  return MOCK_TYPES;
}

/**
 * Schedule an accompanied site visit
 * @param {Object} bookingData
 * @returns {Promise<Object>}
 */
export async function createVisitBooking(bookingData) {
  if (!USE_MOCK_DATA) {
    // REAL BACKEND CALL: POST /api/visits
    return await apiClient.post('/visits', bookingData);
  }

  // MOCK DATA FALLBACK:
  await new Promise((resolve) => setTimeout(resolve, 150));
  console.log('[API Mock] Site visit booked:', bookingData);
  return {
    success: true,
    bookingId: `BK-${Date.now().toString().slice(-6)}`,
    data: bookingData
  };
}

/**
 * Submit an inquiry or viewing request for a specific property
 * @param {Object} inquiryData
 * @returns {Promise<Object>}
 */
export async function createPropertyInquiry(inquiryData) {
  if (!USE_MOCK_DATA) {
    // REAL BACKEND CALL: POST /api/inquiries
    return await apiClient.post('/inquiries', inquiryData);
  }

  // MOCK DATA FALLBACK:
  await new Promise((resolve) => setTimeout(resolve, 150));
  console.log('[API Mock] Property inquiry received:', inquiryData);
  return {
    success: true,
    inquiryId: `INQ-${Date.now().toString().slice(-6)}`,
    data: inquiryData
  };
}
