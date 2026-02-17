'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedContainerProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const springTransition = {
  type: 'spring' as const,
  stiffness: 200,
  damping: 20,
};

export function AnimatedSection({ children, className, delay = 0 }: AnimatedContainerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...springTransition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedText({ children, className, delay = 0.3 }: AnimatedContainerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...springTransition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedSkill({ children }: { children: ReactNode }) {
  return (
    <motion.div
      className="neo-tag cursor-default"
      whileHover={{
        y: -3,
        boxShadow: '4px 4px 0px #1A1A1A',
        backgroundColor: '#FFD60A',
        scale: 1.05,
      }}
      whileTap={{ y: 1, boxShadow: '2px 2px 0px #1A1A1A', scale: 0.95 }}
    >
      {children}
    </motion.div>
  );
}