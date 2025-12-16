'use client';

import { useState, useMemo, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import IslamicPattern from '@/components/ui/IslamicPattern';
import ContributionStats from '@/components/contributions/ContributionStats';
import ContributionChart from '@/components/contributions/ContributionChart';
import ContributionFilters from '@/components/contributions/ContributionFilters';
import ContributionTable from '@/components/contributions/ContributionTable';
import LandDonorCard from '@/components/contributions/LandDonorCard';
import { 
  api, 
  Contribution, 
  LandDonor, 
  ContributionStats as ContributionStatsType,
} from '@/lib/api';

const ITEMS_PER_PAGE = 10;

export default function ContributionsPage() {
  const [dateFrom, setDateFrom] = useState('2022-01-01');
  const [dateTo, setDateTo] = useState('2024-12-31');
  const [type, setType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [displayCount, setDisplayCount] = useState(ITEMS_PER_PAGE);
  const [isLoading, setIsLoading] = useState(true);
  
  // Data states
  const [contributions, setContributions] = useState<Contribution[]>([]);
  const [landDonors, setLandDonors] = useState<LandDonor[]>([]);
  const [stats, setStats] = useState<ContributionStatsType | null>(null);

  // Fetch data on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [contributionsRes, landDonorsData, statsData] = await Promise.all([
          api.getContributions({ limit: 1000 }),
          api.getAllLandDonors(),
          api.getContributionStats(),
        ]);
        setContributions(contributionsRes.data);
        setLandDonors(landDonorsData);
        setStats(statsData);
      } catch (error) {
        console.error('Failed to fetch contributions data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter contributions
  const filteredContributions = useMemo(() => {
    return contributions.filter((contribution) => {
      // Date filter
      const contributionDate = new Date(contribution.date);
      const fromDate = new Date(dateFrom);
      const toDate = new Date(dateTo);
      if (contributionDate < fromDate || contributionDate > toDate) {
        return false;
      }

      // Type filter
      if (type !== 'all' && contribution.type !== type) {
        return false;
      }

      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        if (contribution.anonymous) {
          if (!('anonymous'.includes(query) || 'donor'.includes(query))) {
            return false;
          }
        } else if (!contribution.contributorName.toLowerCase().includes(query)) {
          return false;
        }
      }

      return true;
    });
  }, [contributions, dateFrom, dateTo, type, searchQuery]);

  // Sort by date (newest first)
  const sortedContributions = useMemo(() => {
    return [...filteredContributions].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }, [filteredContributions]);

  // Paginated contributions
  const displayedContributions = useMemo(() => {
    return sortedContributions.slice(0, displayCount);
  }, [sortedContributions, displayCount]);

  // Handle filter reset
  const handleReset = useCallback(() => {
    setDateFrom('2022-01-01');
    setDateTo('2024-12-31');
    setType('all');
    setSearchQuery('');
    setDisplayCount(ITEMS_PER_PAGE);
  }, []);

  // Handle load more
  const handleLoadMore = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      setDisplayCount((prev) => prev + ITEMS_PER_PAGE);
      setIsLoading(false);
    }, 300);
  }, []);

  // Calculate totals from API stats
  const totalStats = useMemo(() => {
    if (!stats) {
      return { totalFunds: 0, landDonated: 0, totalContributors: 0 };
    }
    return {
      totalFunds: stats.totalAmount,
      landDonated: stats.totalLand,
      totalContributors: stats.totalContributors,
    };
  }, [stats]);

  const hasMore = displayCount < sortedContributions.length;

  if (isLoading) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-stone-950 text-white pt-24 sm:pt-28 pb-12 sm:pb-16">
          <div className="container mx-auto px-4 text-center">
            <div className="animate-pulse">
              <div className="h-12 w-72 bg-white/20 rounded mx-auto mb-6"></div>
              <div className="h-6 w-96 bg-white/10 rounded mx-auto"></div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-16">
          <div className="animate-pulse space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-gray-100 rounded-xl h-32"></div>
              ))}
            </div>
            <div className="bg-gray-100 rounded-xl h-64"></div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-stone-950 text-white pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden">
        <IslamicPattern variant="complex" />
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-primary-500/20 blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-amber-500/10 blur-2xl" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transparency <span className="text-primary-300">Ledger</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-primary-100 max-w-2xl mx-auto leading-relaxed">
              Complete accountability for every contribution received. 
              Every donation is documented and traceable.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <ContributionStats
          totalFunds={totalStats.totalFunds}
          landDonated={totalStats.landDonated}
          totalContributors={totalStats.totalContributors}
        />
      </div>

      {/* Charts Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
            Contribution <span className="text-primary-600">Breakdown</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Visual representation of how contributions are distributed over time and by type
          </p>
        </motion.div>

        <ContributionChart
          yearlyData={stats?.yearlyContributions || []}
          typeBreakdown={stats?.typeBreakdown || []}
        />
      </div>

      {/* Land Donors Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-gradient-to-b from-primary-50/50 to-transparent">
        <LandDonorCard donors={landDonors} />
      </div>

      {/* Contributions Table Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
            Complete Contribution <span className="text-primary-600">Records</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Every contribution is documented and traceable for complete transparency
          </p>
        </motion.div>

        {/* Filters */}
        <div className="mb-6">
          <ContributionFilters
            dateFrom={dateFrom}
            dateTo={dateTo}
            type={type}
            searchQuery={searchQuery}
            onDateFromChange={setDateFrom}
            onDateToChange={setDateTo}
            onTypeChange={setType}
            onSearchChange={setSearchQuery}
            onReset={handleReset}
            filteredCount={sortedContributions.length}
            totalCount={contributions.length}
          />
        </div>

        {/* Table */}
        <ContributionTable
          contributions={displayedContributions}
          isLoading={isLoading}
        />

        {/* Load More */}
        {hasMore && !isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleLoadMore}
              className="px-8 py-3 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Load More Records
            </motion.button>
          </motion.div>
        )}

        {/* Loading indicator */}
        <AnimatePresence>
          {isLoading && displayCount > ITEMS_PER_PAGE && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-center py-8"
            >
              <div className="flex items-center gap-3 text-primary-600">
                <svg className="animate-spin w-6 h-6" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span className="font-medium">Loading more records...</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Call to Action Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
      >
        <div className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 rounded-3xl p-8 sm:p-12 text-center text-white">
          <IslamicPattern variant="simple" opacity={0.1} />
          
          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </motion.div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Join Our Contributors
            </h2>
            <p className="text-primary-100 max-w-xl mx-auto mb-8">
              Your contribution, no matter the size, makes a lasting difference in our community.
              Be a part of something meaningful.
            </p>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-700 rounded-full font-bold shadow-lg hover:shadow-xl transition-all"
            >
              <span>Make a Contribution</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
