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

import GithubOriginal from '@devicon/react/github/original';
import LinkedinOriginal from '@devicon/react/linkedin/original';

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
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

  const getIcon = () => {
    if (href.includes('instagram')) return <InstagramIcon size={18} />;
    if (href.includes('github')) return <GithubOriginal size={18} />;
    return <LinkedinOriginal size={18} />;
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`neo-border shadow-brutal ${getColor()} px-5 py-2.5 font-bold text-sm inline-flex items-center gap-2 ${className || ''}`}
      whileHover={{ y: -3, boxShadow: '6px 6px 0px #1A1A1A', scale: 1.05 }}
      whileTap={{ y: 1, boxShadow: '2px 2px 0px #1A1A1A', scale: 0.95 }}
    >
      {getIcon()}
      {getLabel()}
    </motion.a>
  );
}

export function AnimatedBackground() {
  return null;
}
