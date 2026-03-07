'use client';

import { motion } from 'framer-motion';

export default function DecorativeShapes() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <motion.div
        className="absolute top-16 left-6 md:left-10 w-10 h-10 md:w-16 md:h-16 bg-neo-yellow neo-border"
        animate={{ rotate: [12, -12, 12], y: [0, -20, 0], x: [0, 8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-24 right-8 md:right-16 w-8 h-8 md:w-12 md:h-12 bg-neo-coral neo-border rounded-full"
        animate={{ scale: [1, 1.3, 1], y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />
      <motion.div
        className="absolute bottom-40 left-8 md:left-20 w-8 h-8 md:w-10 md:h-10 bg-neo-mint neo-border"
        animate={{ rotate: [0, 180, 360], scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-24 right-6 md:right-10 w-10 h-10 md:w-14 md:h-14 bg-neo-lavender neo-border rotate-45"
        animate={{ rotate: [45, -15, 45], y: [0, -25, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <motion.div
        className="absolute top-1/2 left-4 md:left-8 w-6 h-6 md:w-8 md:h-8 bg-neo-pink neo-border rounded-full"
        animate={{ y: [0, -30, 0], x: [0, 10, 0], scale: [1, 0.8, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      <motion.div
        className="absolute top-40 right-1/4 w-5 h-5 md:w-7 md:h-7 bg-neo-sky neo-border hidden md:block"
        animate={{ rotate: [0, 90, 180, 270, 360], y: [0, -12, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-48 right-1/3 w-4 h-4 md:w-6 md:h-6 bg-neo-orange neo-border rounded-full hidden md:block"
        animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
      />
    </div>
  );
}
