'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon, SparklesIcon, HeartIcon, StarIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Portofolio', href: '/portofolio' },
  { name: 'Contact', href: '/contact' },
];

const sidebarVariants = {
  closed: {
    x: '100%',
    transition: { type: 'spring', stiffness: 300, damping: 30 },
  },
  open: {
    x: 0,
    transition: { type: 'spring', stiffness: 300, damping: 30, staggerChildren: 0.07, delayChildren: 0.15 },
  },
};

const overlayVariants = {
  closed: { opacity: 0 },
  open: { opacity: 1 },
};

const itemVariants = {
  closed: { x: 40, opacity: 0 },
  open: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 200, damping: 20 } },
};

const widgetVariants = {
  closed: { scale: 0, opacity: 0 },
  open: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 15 } },
};

const randomWidgets = [
  { color: 'bg-neo-yellow', shape: 'rounded-none rotate-12', size: 'w-10 h-10', icon: <StarIcon className="w-5 h-5 stroke-[2.5]" /> },
  { color: 'bg-neo-coral', shape: 'rounded-full', size: 'w-12 h-12', icon: <HeartIcon className="w-5 h-5 stroke-[2.5]" /> },
  { color: 'bg-neo-mint', shape: 'rounded-lg -rotate-6', size: 'w-9 h-9', icon: <SparklesIcon className="w-4 h-4 stroke-[2.5]" /> },
  { color: 'bg-neo-lavender', shape: 'rounded-full rotate-45', size: 'w-8 h-8', icon: null },
  { color: 'bg-neo-sky', shape: 'rounded-none rotate-[20deg]', size: 'w-11 h-11', icon: null },
  { color: 'bg-neo-pink', shape: 'rounded-full', size: 'w-7 h-7', icon: null },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
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
              onClick={() => setIsOpen(true)}
              className="md:hidden neo-border shadow-brutal-sm bg-white p-2"
              whileHover={{ y: -2 }}
              whileTap={{ y: 1, boxShadow: '2px 2px 0px #1A1A1A' }}
            >
              <Bars3Icon className="w-6 h-6 stroke-[2.5]" />
            </motion.button>
          </div>
        </nav>
      </header>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="sidebar-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-neo-black/40 z-[60] md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            key="sidebar-panel"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-[280px] bg-white neo-border border-r-0 z-[70] md:hidden flex flex-col shadow-[-8px_0px_0px_#1A1A1A]"
          >
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-5 border-b-[3px] border-neo-black">
              <span className="font-black text-lg uppercase tracking-tight">
                Menu<span className="text-neo-coral">.</span>
              </span>
              <motion.button
                onClick={() => setIsOpen(false)}
                className="neo-border shadow-brutal-sm bg-neo-coral text-white p-1.5"
                whileHover={{ rotate: 90, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <XMarkIcon className="w-5 h-5 stroke-[3]" />
              </motion.button>
            </div>

            {/* Nav Links */}
            <div className="flex-1 p-5 space-y-3">
              {navLinks.map((link, index) => {
                const colors = ['bg-neo-yellow', 'bg-neo-mint', 'bg-neo-sky', 'bg-neo-coral'];
                return (
                  <motion.div
                    key={link.name}
                    initial={{ x: 40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.1 + index * 0.07 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block neo-border shadow-brutal-sm ${colors[index % colors.length]} px-4 py-3.5 font-bold uppercase tracking-wide text-sm hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-brutal transition-all`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Decorative Widgets */}
            <div className="p-5 border-t-[3px] border-neo-black">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">
                Random Widgets ✨
              </p>
              <div className="flex flex-wrap items-center gap-3">
                {randomWidgets.map((widget, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1, rotate: widget.shape.includes('rotate') ? [0, 10, -10, 0] : 0 }}
                    transition={{
                      scale: { type: 'spring', stiffness: 300, damping: 15, delay: 0.3 + i * 0.05 },
                      rotate: { duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut' },
                    }}
                    className={`${widget.size} ${widget.color} ${widget.shape} neo-border shadow-brutal-sm flex items-center justify-center`}
                  >
                    {widget.icon}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
