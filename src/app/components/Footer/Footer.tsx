'use client';

import { motion } from 'framer-motion';
import { HeartIcon } from '@heroicons/react/24/solid';

export default function Footer() {
  return (
    <footer className="border-t-[3px] border-neo-black bg-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo */}
          <motion.div
            className="neo-border shadow-brutal-sm bg-neo-yellow px-4 py-1.5 font-black text-lg tracking-tight"
            whileHover={{ rotate: -2, scale: 1.05 }}
          >
            RIZKI<span className="text-neo-coral">.</span>
          </motion.div>

          {/* Copyright */}
          <p className="font-grotesk text-sm font-medium flex items-center gap-1">
            Made with <HeartIcon className="w-4 h-4 text-neo-coral inline" /> by Rizki — 2025
          </p>

          {/* Social Links */}
          <div className="flex gap-2">
            <motion.a
              href="https://instagram.com/ezpzlemonsquizy"
              target="_blank"
              rel="noopener noreferrer"
              className="neo-border shadow-brutal-sm bg-neo-pink px-3 py-1.5 text-xs font-bold"
              whileHover={{ y: -2, boxShadow: '4px 4px 0px #1A1A1A' }}
              whileTap={{ y: 1 }}
            >
              IG
            </motion.a>
            <motion.a
              href="https://github.com/Ridzz05"
              target="_blank"
              rel="noopener noreferrer"
              className="neo-border shadow-brutal-sm bg-neo-lavender px-3 py-1.5 text-xs font-bold"
              whileHover={{ y: -2, boxShadow: '4px 4px 0px #1A1A1A' }}
              whileTap={{ y: 1 }}
            >
              GH
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="neo-border shadow-brutal-sm bg-neo-sky px-3 py-1.5 text-xs font-bold"
              whileHover={{ y: -2, boxShadow: '4px 4px 0px #1A1A1A' }}
              whileTap={{ y: 1 }}
            >
              LI
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
