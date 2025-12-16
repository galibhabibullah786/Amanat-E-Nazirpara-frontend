'use client';

import { motion } from 'framer-motion';

interface LandDonor {
  id: number;
  name: string;
  landAmount: string;
  quote?: string;
  date: string;
}

interface LandDonorCardProps {
  donors: LandDonor[];
}

export default function LandDonorCard({ donors }: LandDonorCardProps) {
  if (donors.length === 0) return null;

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
          Honoring Our <span className="text-primary-600">Land Donors</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Their sacrifice forms the foundation of our community center
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {donors.map((donor, index) => (
          <motion.div
            key={donor.id}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="relative overflow-hidden bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100 p-6 sm:p-8"
          >
            {/* Trophy Decoration */}
            <div className="absolute top-0 right-0 text-8xl opacity-10 transform translate-x-4 -translate-y-2 pointer-events-none">
              🏆
            </div>

            <div className="relative">
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-xl sm:text-2xl font-bold flex-shrink-0 shadow-lg">
                  {donor.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800">{donor.name}</h3>
                  <p className="text-primary-600 font-semibold">{donor.landAmount}</p>
                </div>
              </div>

              {/* Quote */}
              {donor.quote && (
                <blockquote className="border-l-4 border-primary-500 pl-4 italic text-gray-600 mb-4">
                  &ldquo;{donor.quote}&rdquo;
                </blockquote>
              )}

              {/* Date */}
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Donated on {new Date(donor.date).toLocaleDateString('en-BD', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
