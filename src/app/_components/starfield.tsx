"use client";

import React, { useEffect, useState } from 'react';

export default function Starfield() {
  const [stars, setStars] = useState<{id: number, top: string, left: string, delay: string, duration: string}[]>([]);

  useEffect(() => {
    // We generate stars on the client side only to prevent "Hydration" errors
    const generatedStars = Array.from({ length: 80 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${2 + Math.random() * 3}s`,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full animate-pulse"
          style={{
            top: star.top,
            left: star.left,
            width: '2px',
            height: '2px',
            animationDelay: star.delay,
            animationDuration: star.duration,
            opacity: 0.4,
          }}
        />
      ))}
    </div>
  );
}