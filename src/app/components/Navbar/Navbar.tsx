'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Portofolio', href: '/portofolio' },
  { name: 'Contact', href: '/contact' },
];

const menuVariants = {
  closed: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
  open: {
    height: 'auto',
    opacity: 1,
    transition: { duration: 0.3, ease: 'easeInOut', staggerChildren: 0.07, delayChildren: 0.1 },
  },
};

const itemVariants = {
  closed: { x: -20, opacity: 0 },
  open: { x: 0, opacity: 1 },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Top accent bar */}
      <div className="h-2 bg-neo-yellow border-b-[3px] border-neo-black" />
      
      <nav className="bg-white border-b-[3px] border-neo-black">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4 h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ rotate: -3, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/"
              className="neo-border bg-neo-yellow shadow-brutal-sm px-4 py-1.5 text-xl font-black tracking-tight inline-block"
            >
              RIZKI<span className="text-neo-coral">.</span>
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                whileHover={{ y: -2, boxShadow: '4px 4px 0px #1A1A1A' }}
                whileTap={{ y: 1 }}
              >
                <Link
                  href={link.href}
                  className="neo-border px-4 py-2 text-sm font-bold uppercase tracking-wide bg-white hover:bg-neo-mint transition-colors"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden neo-border shadow-brutal-sm bg-white p-2"
            whileHover={{ y: -2 }}
            whileTap={{ y: 1, boxShadow: '2px 2px 0px #1A1A1A' }}
          >
            {isOpen ? (
              <XMarkIcon className="w-6 h-6 stroke-[2.5]" />
            ) : (
              <Bars3Icon className="w-6 h-6 stroke-[2.5]" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="md:hidden overflow-hidden border-t-[3px] border-neo-black"
            >
              <div className="p-4 space-y-2">
                {navLinks.map((link, index) => {
                  const colors = ['bg-neo-yellow', 'bg-neo-mint', 'bg-neo-sky', 'bg-neo-coral'];
                  return (
                    <motion.div key={link.name} variants={itemVariants}>
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`block neo-border shadow-brutal-sm ${colors[index % colors.length]} px-4 py-3 font-bold uppercase tracking-wide text-sm hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-brutal transition-all`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
