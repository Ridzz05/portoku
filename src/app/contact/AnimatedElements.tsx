'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedContainerProps {
  children: ReactNode;
  className?: string;
}

const springTransition = {
  type: 'spring' as const,
  stiffness: 200,
  damping: 20,
};

export function AnimatedContact({ children, className }: AnimatedContainerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={springTransition}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedText({ children, className }: AnimatedContainerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...springTransition, delay: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedSocialLinks({ children, className }: AnimatedContainerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...springTransition, delay: 0.4 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedLink({ href, className }: { href: string; className?: string }) {
  const getLabel = () => {
    if (href.includes('instagram')) return 'Instagram';
    if (href.includes('github')) return 'GitHub';
    return 'LinkedIn';
  };

  const getColor = () => {
    if (href.includes('instagram')) return 'bg-neo-pink';
    if (href.includes('github')) return 'bg-neo-lavender';
    return 'bg-neo-sky';
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`neo-border shadow-brutal ${getColor()} px-5 py-2.5 font-bold text-sm inline-block ${className || ''}`}
      whileHover={{ y: -3, boxShadow: '6px 6px 0px #1A1A1A', scale: 1.05 }}
      whileTap={{ y: 1, boxShadow: '2px 2px 0px #1A1A1A', scale: 0.95 }}
    >
      {getLabel()}
    </motion.a>
  );
}

export function AnimatedBackground() {
  return null;
}
