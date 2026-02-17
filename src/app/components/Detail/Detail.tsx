'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { User } from '@/app/data/users';
import Image from 'next/image';
import { XMarkIcon } from '@heroicons/react/24/outline';

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
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ y: '100%', opacity: 0, rotate: 2 }}
            animate={{
              y: 0,
              opacity: 1,
              rotate: 0,
              transition: { type: 'spring', damping: 25, stiffness: 300 },
            }}
            exit={{
              y: '100%',
              opacity: 0,
              rotate: -2,
              transition: { type: 'spring', damping: 25, stiffness: 300 },
            }}
            className="fixed bottom-0 left-0 right-0 w-full neo-border border-b-0 shadow-[0_-6px_0px_#1A1A1A] bg-white p-6 z-50
                       md:bottom-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 
                       md:max-w-md md:rounded-none md:border-b-[3px] md:shadow-brutal-lg"
          >
            {/* Close Button */}
            <div className="flex justify-end mb-4">
              <motion.button
                onClick={onClose}
                className="neo-border shadow-brutal-sm bg-neo-coral text-white p-2"
                whileHover={{ rotate: 90, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <XMarkIcon className="w-5 h-5 stroke-[2.5]" />
              </motion.button>
            </div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.15 } }}
              className="flex flex-col items-center gap-4 md:flex-row md:items-start md:gap-6"
            >
              <motion.div
                initial={{ scale: 0.8, rotate: -5 }}
                animate={{ scale: 1, rotate: 0, transition: { type: 'spring', damping: 15, delay: 0.2 } }}
                className="relative w-28 h-28 neo-border shadow-brutal bg-neo-mint rounded-xl overflow-hidden flex-shrink-0"
              >
                <Image
                  src={user.avatar}
                  alt={user.name}
                  className="object-cover"
                  fill
                  sizes="112px"
                />
              </motion.div>

              <div className="text-center md:text-left">
                <h2 className="neo-heading text-2xl mb-2">{user.name}</h2>
                <p className="text-sm text-gray-500 font-medium mb-2">{user.username}</p>
                <span className="neo-tag bg-neo-yellow">{user.role}</span>

                <div className="mt-4">
                  <motion.a
                    href={`https://instagram.com/${user.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neo-btn-primary text-xs inline-flex items-center gap-2"
                    whileHover={{ y: -2, boxShadow: '6px 6px 0px #1A1A1A' }}
                    whileTap={{ y: 1, boxShadow: '2px 2px 0px #1A1A1A' }}
                  >
                    @{user.instagram}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}