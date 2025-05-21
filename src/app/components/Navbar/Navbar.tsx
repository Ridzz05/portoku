'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="font-mono">
      {/* Desktop & Mobile Navigation */}
      <nav className="border-b border-black">
        <div className="flex justify-between items-center px-4 h-14">
          <motion.a 
            href="/" 
            className="text-2xl tracking-tight hover:bg-black hover:text-white transition-colors px-3 py-1.5 my-1.5 font-[var(--font-javanese)]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ꦬꦰ꧀
          </motion.a>
          
          {/* Mobile Menu Button */}
          <motion.button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-xs uppercase tracking-tight hover:bg-black hover:text-white transition-colors px-2 py-1.5 my-1.5"
            whileHover={{ scale: 1.00 }}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? '[ tutup ]' : '[ menu ]'}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div 
          initial={false}
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0
          }}
          transition={{
            height: { duration: 0.3 },
            opacity: { duration: 0.2 }
          }}
          className="overflow-hidden"
        >
          {isOpen && (
            <div className="border-t border-black">
              <div className="flex flex-col text-sm">
                <motion.a 
                  href="/" 
                  className="px-4 py-3 hover:bg-black hover:text-white transition-colors uppercase tracking-tight"
                  whileHover={{ x: 10 }}
                >
                  Home
                </motion.a>
              </div>
              <div className="flex flex-col text-sm">
                <motion.a 
                  href="/about" 
                  className="px-4 py-3 hover:bg-black hover:text-white transition-colors uppercase tracking-tight"
                  whileHover={{ x: 10 }}
                  >
                    About Me
                </motion.a>
              </div>
              <div className="flex flex-col text-sm">
                <motion.a 
                  href="/portofolio" 
                  className="px-4 py-3 hover:bg-black hover:text-white transition-colors uppercase tracking-tight"
                  whileHover={{ x: 10 }}
                >
                  Portofolio
                </motion.a>
              </div>
              <div className="flex flex-col text-sm">
                <motion.a 
                  href="/contact" 
                  className="px-4 py-3 hover:bg-black hover:text-white transition-colors uppercase tracking-tight"
                  whileHover={{ x: 10 }}
                >
                  Contact
                </motion.a>
              </div>
            </div>
          )}
        </motion.div>
      </nav>
    </header>
  );
}
