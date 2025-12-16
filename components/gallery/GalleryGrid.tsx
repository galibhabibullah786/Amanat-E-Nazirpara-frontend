'use client';

import { motion } from 'framer-motion';
import GalleryCard from './GalleryCard';
import type { GalleryImage } from '@/lib/api';

interface GalleryGridProps {
  images: GalleryImage[];
  onImageClick: (image: GalleryImage) => void;
  isLoading?: boolean;
}

// Loading Skeleton Component
function GallerySkeleton() {
  const heights = ['h-48', 'h-56', 'h-64', 'h-72', 'h-80'];
  
  return (
    <>
      {[...Array(8)].map((_, index) => (
        <div
          key={index}
          className={`${heights[index % heights.length]} rounded-2xl overflow-hidden bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 animate-pulse`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skeleton-shimmer" />
        </div>
      ))}
    </>
  );
}

export default function GalleryGrid({ images, onImageClick, isLoading = false }: GalleryGridProps) {
  if (isLoading) {
    return (
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 sm:gap-5">
        <GallerySkeleton />
      </div>
    );
  }

  if (images.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-20"
      >
        <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
          <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">No photos found</h3>
        <p className="text-gray-500">Try selecting a different category</p>
      </motion.div>
    );
  }

  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 sm:gap-5">
      {images.map((image, index) => (
        <div key={image.id} className="mb-4 sm:mb-5 break-inside-avoid">
          <GalleryCard
            image={image}
            index={index}
            onClick={onImageClick}
          />
        </div>
      ))}
    </div>
  );
}
