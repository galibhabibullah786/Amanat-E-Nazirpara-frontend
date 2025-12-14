'use client';

import { motion } from 'framer-motion';
import { mockData } from '@/lib/mockData';
import { useState, useRef, useEffect } from 'react';

export default function CommitteeTimeline() {
  const [activeIndex, setActiveIndex] = useState(mockData.committees.length - 1);
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [slideWidth, setSlideWidth] = useState<number>(0);

  // Measure container width so we can translate slides exactly by pixels.
  useEffect(() => {
    function updateWidth() {
      const w = containerRef.current?.clientWidth ?? 0;
      setSlideWidth(w);
    }
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  // Only change visible slide on explicit user action (click/tap).
  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section id="committees" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Journey Through Committees
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Dedicated teams working together to bring our vision to life
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Slide viewport (no horizontal scrolling by drag) */}
          <div ref={containerRef} className="overflow-hidden pb-8 mb-8">
            <div
              ref={wrapperRef}
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${activeIndex * slideWidth}px)` }}
            >
              {mockData.committees.map((committee, index) => (
              <motion.div
                key={committee.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0"
                style={{ width: slideWidth ? `${slideWidth}px` : undefined, marginRight: index < mockData.committees.length - 1 ? '2rem' : '0' }}
              >
                <div
                  onClick={() => handleClick(index)}
                  className={`cursor-pointer transition-all duration-300 ${
                    activeIndex === index ? 'scale-100' : 'scale-95 opacity-70'
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="flex items-center mb-4">
                    <div
                      className={`w-6 h-6 rounded-full transition-all ${
                        activeIndex === index
                          ? 'bg-primary-700 ring-4 ring-primary-200 scale-125'
                          : 'bg-gray-300'
                      }`}
                    />
                    <div
                      className={`flex-1 h-1 transition-all ${
                        index < mockData.committees.length - 1
                          ? activeIndex >= index
                            ? 'bg-primary-700'
                            : 'bg-gray-300'
                          : 'bg-transparent'
                      }`}
                    />
                  </div>

                  {/* Card */}
                  <div
                    className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-all p-4 border-2 ${
                      activeIndex === index
                        ? 'border-primary-700'
                        : 'border-gray-200'
                    }`}
                  >
                    {/* Badge */}
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          committee.type === 'current'
                            ? 'bg-primary-100 text-primary-800'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {committee.type === 'current' ? 'Current' : 'Past'}
                      </span>
                      <span className="text-xs font-medium text-gray-500">
                        {committee.term}
                      </span>
                    </div>

                    {/* Committee Info */}
                    <h3 className="text-base font-semibold text-gray-900 mb-2">
                      {committee.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {committee.description}
                    </p>

                    {/* Members */}
                    <div className="space-y-1">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        Key Members
                      </p>
                      <div className="space-y-1">
                        {committee.members.slice(0, 3).map((member, i) => (
                          <div
                            key={i}
                            className="flex items-center space-x-2 text-sm text-gray-700"
                          >
                            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center text-white text-xs font-semibold">
                              {member.charAt(0)}
                            </div>
                            <span>{member}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2">
            {mockData.committees.map((_, index) => (
              <button
                key={index}
                onClick={() => handleClick(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  activeIndex === index
                    ? 'bg-primary-700 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to committee ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-8"
        >
          <a
            href="/committees"
            className="inline-flex items-center space-x-2 text-primary-700 hover:text-primary-800 font-semibold transition-colors group"
          >
            <span>View Complete Committee History</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
