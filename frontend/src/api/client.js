/**
 * Base API Client for Paragon City Real Estate
 * Handles centralized network requests, headers, and error formatting.
 */

import { API_BASE_URL } from './config';

/**
 * Generic request handler
 * @param {string} endpoint 
 * @param {RequestInit} options 
 * @returns {Promise<any>}
 */
export async function apiClient(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;

  const defaultHeaders = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  };

  const config = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };

  try {
    const response = await fetch(url, config);

    if (!response.ok) {
      const errorBody = await response.json().catch(() => ({}));
      throw new Error(errorBody.message || `API Error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`[API Error] ${options.method || 'GET'} ${endpoint}:`, error.message);
    throw error;
  }
}

// Convenience helpers
apiClient.get = (endpoint, params) => {
  let url = endpoint;
  if (params) {
    const query = new URLSearchParams();
    Object.entries(params).forEach(([key, val]) => {
      if (val !== undefined && val !== null && val !== '') {
        query.append(key, val);
      }
    });
    const queryString = query.toString();
    if (queryString) url += `?${queryString}`;
  }
  return apiClient(url, { method: 'GET' });
};

apiClient.post = (endpoint, body) => {
  return apiClient(endpoint, {
    method: 'POST',
    body: JSON.stringify(body),
  });
};

apiClient.put = (endpoint, body) => {
  return apiClient(endpoint, {
    method: 'PUT',
    body: JSON.stringify(body),
  });
};

apiClient.delete = (endpoint) => {
  return apiClient(endpoint, { method: 'DELETE' });
};

export default apiClient;
