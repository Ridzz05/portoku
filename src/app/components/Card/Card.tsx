'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { users } from '@/app/data/users';
import Detail from '../Detail/Detail';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon, EyeIcon } from '@heroicons/react/24/outline';

export default function Card() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
      rotate: direction > 0 ? 5 : -5,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotate: 0,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
      rotate: direction < 0 ? 5 : -5,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = users.length - 1;
      if (nextIndex >= users.length) nextIndex = 0;
      return nextIndex;
    });
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <>
      <div className="relative w-full max-w-sm mx-auto neo-card bg-neo-sky/20 overflow-hidden">
        <div className="relative h-80 flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
                scale: { duration: 0.3 },
                rotate: { duration: 0.3 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) paginate(1);
                else if (swipe > swipeConfidenceThreshold) paginate(-1);
              }}
              className="absolute w-full h-full flex items-center justify-center p-6"
            >
              <div className="text-center">
                <motion.div
                  className="relative w-24 h-24 mx-auto mb-4 neo-border shadow-brutal bg-neo-lavender rounded-xl overflow-hidden"
                  whileHover={{ rotate: -5 }}
                >
                  <Image
                    src={users[currentIndex].avatar}
                    alt={users[currentIndex].name}
                    className="object-cover"
                    fill
                    sizes="96px"
                  />
                </motion.div>
                <h3 className="neo-heading text-2xl mb-1">{users[currentIndex].name}</h3>
                <p className="text-sm text-gray-500 font-medium mb-1">{users[currentIndex].username}</p>
                <span className="neo-tag bg-neo-yellow text-xs mb-3 inline-block">
                  {users[currentIndex].role}
                </span>
                <div className="mt-3">
                  <motion.button
                    onClick={() => setIsDetailOpen(true)}
                    className="neo-btn-primary text-xs flex items-center gap-2 mx-auto"
                    whileHover={{ y: -2, boxShadow: '6px 6px 0px #1A1A1A' }}
                    whileTap={{ y: 1, boxShadow: '2px 2px 0px #1A1A1A' }}
                  >
                    <EyeIcon className="w-4 h-4 stroke-[2.5]" />
                    Detail
                  </motion.button>
                </div>
                <p className="text-xs font-bold mt-3 text-gray-400">
                  {currentIndex + 1} / {users.length}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <motion.button
          className="absolute left-3 top-1/2 -translate-y-1/2 neo-border shadow-brutal-sm bg-white p-2 rounded-lg z-10"
          onClick={() => paginate(-1)}
          whileHover={{ x: -2, boxShadow: '4px 4px 0px #1A1A1A' }}
          whileTap={{ x: 1 }}
        >
          <ChevronLeftIcon className="w-5 h-5 stroke-[2.5]" />
        </motion.button>

        <motion.button
          className="absolute right-3 top-1/2 -translate-y-1/2 neo-border shadow-brutal-sm bg-white p-2 rounded-lg z-10"
          onClick={() => paginate(1)}
          whileHover={{ x: 2, boxShadow: '4px 4px 0px #1A1A1A' }}
          whileTap={{ x: -1 }}
        >
          <ChevronRightIcon className="w-5 h-5 stroke-[2.5]" />
        </motion.button>
      </div>

      <Detail
        user={users[currentIndex]}
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
      />
    </>
  );
}