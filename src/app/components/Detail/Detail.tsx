'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { User } from '@/app/data/users';
import Image from 'next/image';

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
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ 
              y: 0,
              opacity: 1,
              transition: {
                type: "spring",
                damping: 25,
                stiffness: 300,
                opacity: { duration: 0.3 }
              }
            }}
            exit={{ 
              y: "100%",
              opacity: 0,
              transition: {
                type: "spring",
                damping: 25,
                stiffness: 300,
                opacity: { duration: 0.2 }
              }
            }}
            className="fixed bottom-0 left-0 right-0 w-full bg-white border-t border-black p-4 z-50 md:p-6 md:max-w-sm md:mx-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:border"
          >
            <div className="text-right mb-4">
              <motion.button 
                onClick={onClose}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="font-mono text-sm hover:bg-black hover:text-white transition-colors px-2 py-1"
              >
                [ tutup ]
              </motion.button>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: {
                  delay: 0.2,
                  duration: 0.3
                }
              }}
              className="flex flex-col items-center space-y-4 md:flex-row md:items-start md:space-x-6 md:space-y-0"
            >
              <motion.div 
                initial={{ scale: 0.8 }}
                animate={{ 
                  scale: 1,
                  transition: {
                    delay: 0.3,
                    type: "spring",
                    damping: 20
                  }
                }}
                className="relative w-24 h-24 border border-black overflow-hidden flex-shrink-0"
              >
                <Image 
                  src={user.avatar} 
                  alt={user.name}
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 96px, 96px"
                />
              </motion.div>
              
              <div className="font-mono text-center md:text-left">
                <h2 className="text-xl uppercase tracking-tight mb-2">{user.name}</h2>
                <p className="text-sm opacity-60 mb-1">{user.username}</p>
                <p className="text-xs uppercase mb-4">[ {user.role} ]</p>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
} 