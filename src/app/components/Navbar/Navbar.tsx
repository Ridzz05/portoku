'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="font-mono">
      {/* Desktop & Mobile Navigation */}
      <nav className="border-b border-black">
        <div className="flex justify-between items-center px-4 h-12">
          <a href="/" className="text-sm uppercase tracking-tight hover:bg-black hover:text-white transition-colors px-2">
            website
          </a>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-xs uppercase tracking-tight hover:bg-black hover:text-white transition-colors px-2 py-1"
          >
            {isOpen ? '[ tutup ]' : '[ menu ]'}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="border-t border-black">
            <div className="flex flex-col text-sm">
              <a 
                href="/" 
                className="px-4 py-3 hover:bg-black hover:text-white transition-colors uppercase tracking-tight"
              >
                beranda
              </a>
              <a 
                href="/about" 
                className="px-4 py-3 border-t border-black hover:bg-black hover:text-white transition-colors uppercase tracking-tight"
              >
                tentang
              </a>
              <a 
                href="/contact" 
                className="px-4 py-3 border-t border-black hover:bg-black hover:text-white transition-colors uppercase tracking-tight"
              >
                kontak
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
