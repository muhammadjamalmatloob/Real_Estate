/**
 * Global API Configuration & Backend Toggle
 * 
 * To connect your website to a live backend:
 * 1. Change USE_MOCK_DATA below to `false` (or set VITE_USE_MOCK_DATA="false" in your .env)
 * 2. Set VITE_API_BASE_URL (or API_BASE_URL below) to your backend server URL
 */

export const USE_MOCK_DATA = import.meta.env.VITE_USE_MOCK_DATA !== undefined
  ? import.meta.env.VITE_USE_MOCK_DATA === 'true'
  : true; // <-- Simply flip this to false to connect to your live backend!

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';
