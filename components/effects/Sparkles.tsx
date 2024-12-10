'use client';

import { useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Sparkle {
  id: string;
  color: string;
  size: number;
  style: {
    top: string;
    left: string;
  };
}

const generateSparkle = (): Sparkle => ({
  id: Math.random().toString(36).slice(2),
  color: 'hsl(var(--primary))',
  size: Math.random() * 10 + 5,
  style: {
    top: Math.random() * 100 + '%',
    left: Math.random() * 100 + '%',
  },
});

export default function Sparkles({ children }: { children: React.ReactNode }) {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  const addSparkle = useCallback(() => {
    const sparkle = generateSparkle();
    setSparkles(prev => [...prev, sparkle]);
    setTimeout(() => {
      setSparkles(prev => prev.filter(s => s.id !== sparkle.id));
    }, 300);
  }, []);

  useEffect(() => {
    const interval = setInterval(addSparkle, 500);
    return () => clearInterval(interval);
  }, [addSparkle]);

  return (
    <span className="relative inline-block">
      <AnimatePresence>
        {sparkles.map(sparkle => (
          <motion.span
            key={sparkle.id}
            className="pointer-events-none absolute inline-block"
            style={sparkle.style}
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: 180 }}
            exit={{ scale: 0, rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            <svg
              width={sparkle.size}
              height={sparkle.size}
              viewBox="0 0 160 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z"
                fill={sparkle.color}
              />
            </svg>
          </motion.span>
        ))}
      </AnimatePresence>
      {children}
    </span>
  );
}