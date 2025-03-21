'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { User } from '@/app/data/users';

interface DetailProps {
  user: User | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function Detail({ user, isOpen, onClose }: DetailProps) {
  return (
    <AnimatePresence>
      {isOpen && user && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed bottom-0 left-0 right-0 w-full bg-white border-t border-black p-4 z-50 md:p-6 md:max-w-sm md:mx-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:border"
          >
            <div className="text-right mb-4">
              <button 
                onClick={onClose}
                className="font-mono text-sm hover:bg-black hover:text-white transition-colors px-2 py-1"
              >
                [ tutup ]
              </button>
            </div>
            
            <div className="flex flex-col items-center space-y-4 md:flex-row md:items-start md:space-x-6 md:space-y-0">
              <div className="w-24 h-24 border border-black overflow-hidden flex-shrink-0">
                <img 
                  src={user.avatar} 
                  alt={user.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="font-mono text-center md:text-left">
                <h2 className="text-xl uppercase tracking-tight mb-2">{user.name}</h2>
                <p className="text-sm opacity-60 mb-1">{user.username}</p>
                <p className="text-xs uppercase mb-4">[ {user.role} ]</p>
                
                <div className="space-y-2 text-xs">
                  <p>[ status: aktif ]</p>
                  <p>[ bergabung: 2024 ]</p>
                  <p>[ proyek: 5 ]</p>
                  <p>[ kontribusi: tinggi ]</p>
                  <a 
                    href={`https://instagram.com/${user.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:bg-black hover:text-white transition-colors"
                  >
                    [ instagram: @{user.instagram} ]
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
} 