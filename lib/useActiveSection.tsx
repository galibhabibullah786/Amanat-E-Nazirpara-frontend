"use client";

import { useEffect, useState } from 'react';

/**
 * Observes a list of section ids and returns the id of the section most visible on screen.
 * Use this hook in client components (e.g. header) to highlight active nav items.
 */
export default function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (!sectionIds || sectionIds.length === 0) return;

    const elements = sectionIds
      .map((id) => ({ id, el: document.getElementById(id) }))
      .filter((x) => x.el !== null) as { id: string; el: HTMLElement }[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Prefer the entry with highest intersectionRatio among intersecting elements
        const visible = entries.filter((e) => e.isIntersecting && e.target instanceof HTMLElement);
        if (visible.length > 0) {
          visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          const top = visible[0].target as HTMLElement;
          setActiveId(top.id);
          return;
        }

        // If nothing is intersecting, pick the closest to the top of viewport
        let closest: { id: string; distance: number } | null = null;
        for (const entry of entries) {
          const el = entry.target as HTMLElement;
          const rect = el.getBoundingClientRect();
          const distance = Math.abs(rect.top);
          if (!closest || distance < closest.distance) {
            closest = { id: el.id, distance };
          }
        }
        if (closest) setActiveId(closest.id);
      },
      {
        root: null,
        rootMargin: '0px 0px -40% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    elements.forEach((e) => observer.observe(e.el));

    return () => {
      observer.disconnect();
    };
  }, [sectionIds.join(',')]);

  return activeId;
}
