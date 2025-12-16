import axios from 'axios';

// API base URL - points to public endpoints (no auth required)
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/public';

// Central axios instance for API calls
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // Handle errors globally
    console.error('API Error:', error?.response?.data?.message || error.message);
    return Promise.reject(error);
  }
);

export default apiClient;

// ============================================
// API Functions for Frontend (Public Endpoints)
// ============================================

// Statistics
export const getStatistics = () => apiClient.get('/statistics');

// Settings
export const getSettings = () => apiClient.get('/settings');

// Committees
export const getCommittees = (params?: Record<string, unknown>) => 
  apiClient.get('/committees', { params });

export const getCurrentCommittee = () => apiClient.get('/committees/current');

export const getCommitteeById = (id: number) => apiClient.get(`/committees/${id}`);

// Contributions
export const getContributions = (params?: Record<string, unknown>) => 
  apiClient.get('/contributions', { params });

// Land Donors
export const getLandDonors = (params?: Record<string, unknown>) => 
  apiClient.get('/land-donors', { params });

// Gallery
export const getGalleryImages = (params?: Record<string, unknown>) => 
  apiClient.get('/gallery', { params });

export const getFeaturedImages = (limit?: number) => 
  apiClient.get('/gallery/featured', { params: { limit } });

export const getGalleryCategories = () => apiClient.get('/gallery/categories');
