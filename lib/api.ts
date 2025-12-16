import axios from 'axios';

// API base URL - points to public endpoints (no auth required)
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

// Central axios instance for API calls
const apiClient = axios.create({
  baseURL: `${API_BASE_URL}/public`,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Response interceptor
apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error('API Error:', error?.response?.data?.message || error.message);
    return Promise.reject(error);
  }
);

// ============================================
// Types
// ============================================

export interface Statistics {
  totalContributions: number;
  totalAmount: number;
  totalLandDonors: number;
  totalLand: number;
  committeeMembers: number;
}

export interface CommitteeMember {
  id: number;
  name: string;
  designation: 'president' | 'vice-president' | 'secretary' | 'treasurer' | 'member';
  designationLabel: string;
  photo?: string;
  phone?: string;
  email?: string;
  bio?: string;
  order: number;
}

export interface Committee {
  id: number;
  name: string;
  term: string;
  description: string;
  image?: string;
  type: 'past' | 'current';
  isActive: boolean;
  members: CommitteeMember[];
}

export interface Contribution {
  id: number;
  contributorName: string;
  type: 'Cash' | 'Land' | 'Material';
  amount: number;
  date: string;
  anonymous: boolean;
  purpose?: string;
  status: 'pending' | 'verified' | 'rejected';
}

export interface LandDonor {
  id: number;
  name: string;
  landAmount: number;
  landType: 'Agricultural' | 'Residential';
  location: string;
  quote?: string;
  date: string;
  verified: boolean;
}

export interface GalleryImage {
  id: number;
  title: string;
  alt?: string;
  url?: string;
  description?: string;
  imageUrl: string;
  thumbnail?: string;
  category: 'Foundation' | 'Construction' | 'Events' | 'FinalLook' | 'Ceremony' | string;
  date: string;
  isFeatured: boolean;
}

export interface SiteSettings {
  mosqueName: string;
  mosqueNameEn: string;
  description?: string;
  address?: string;
  phone?: string;
  email?: string;
  foundedYear?: number;
  totalLandArea?: number;
  socialFacebook?: string;
  socialYoutube?: string;
  heroImageUrl?: string;
  logoUrl?: string;
}

export interface YearlyContribution {
  year: string;
  amount: number;
}

export interface TypeBreakdown {
  type: string;
  amount: number;
  percentage: number;
}

export interface ContributionStats {
  totalAmount: number;
  totalLand: number;
  totalContributors: number;
  yearlyContributions: YearlyContribution[];
  typeBreakdown: TypeBreakdown[];
}

export interface PaginatedResponse<T> {
  data: T[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

// ============================================
// API Functions
// ============================================

export const api = {
  // Statistics
  getStatistics: (): Promise<Statistics> => apiClient.get('/statistics'),

  // Settings
  getSettings: (): Promise<SiteSettings> => apiClient.get('/settings'),

  // Committees
  getCommittees: (params?: Record<string, unknown>): Promise<PaginatedResponse<Committee>> =>
    apiClient.get('/committees', { params }),

  getAllCommittees: (): Promise<Committee[]> => apiClient.get('/committees/all'),

  getCurrentCommittee: (): Promise<Committee | null> => apiClient.get('/committees/current'),

  getCommitteeById: (id: number): Promise<Committee> => apiClient.get(`/committees/${id}`),

  // Contributions
  getContributions: (params?: Record<string, unknown>): Promise<PaginatedResponse<Contribution>> =>
    apiClient.get('/contributions', { params }),

  getContributionStats: (): Promise<ContributionStats> => apiClient.get('/contributions/stats'),

  // Land Donors
  getLandDonors: (params?: Record<string, unknown>): Promise<PaginatedResponse<LandDonor>> =>
    apiClient.get('/land-donors', { params }),

  getAllLandDonors: (): Promise<LandDonor[]> => apiClient.get('/land-donors/all'),

  // Gallery
  getGalleryImages: (params?: Record<string, unknown>): Promise<PaginatedResponse<GalleryImage>> =>
    apiClient.get('/gallery', { params }),

  getFeaturedImages: (limit = 6): Promise<GalleryImage[]> =>
    apiClient.get('/gallery/featured', { params: { limit } }),

  getGalleryCategories: (): Promise<{ category: string; count: number }[]> =>
    apiClient.get('/gallery/categories'),
};

export default api;
