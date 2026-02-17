'use client';

import { motion } from 'framer-motion';
import { users } from '@/app/data/users';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 200, damping: 20 },
  },
};

export default function Hero() {
  const mainUser = users[0];

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center px-4 py-16 overflow-hidden">
      {/* Decorative shapes */}
      <motion.div
        className="absolute top-20 left-10 w-16 h-16 bg-neo-yellow neo-border rotate-12 hidden md:block"
        animate={{ rotate: [12, -5, 12], y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-32 right-16 w-12 h-12 bg-neo-coral neo-border rounded-full hidden md:block"
        animate={{ scale: [1, 1.15, 1], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />
      <motion.div
        className="absolute bottom-32 left-20 w-10 h-10 bg-neo-mint neo-border hidden md:block"
        animate={{ rotate: [0, 90, 0], y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-14 h-14 bg-neo-lavender neo-border rotate-45 hidden md:block"
        animate={{ rotate: [45, 30, 45], scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-3xl mx-auto relative z-10"
      >
        {/* Avatar */}
        <motion.div variants={itemVariants} className="mb-8 flex justify-center">
          <motion.div
            className="relative w-36 h-36 neo-border shadow-brutal-lg bg-neo-sky rounded-2xl overflow-hidden"
            whileHover={{ rotate: -3, scale: 1.05 }}
          >
            <Image
              src={mainUser.avatar}
              alt={mainUser.name}
              className="object-cover"
              fill
              sizes="144px"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Name */}
        <motion.div variants={itemVariants}>
          <h1 className="neo-heading text-5xl md:text-7xl mb-3">{mainUser.name}</h1>
        </motion.div>

        {/* Username */}
        <motion.div variants={itemVariants}>
          <p className="text-lg font-grotesk text-gray-500 font-medium mb-4">{mainUser.username}</p>
        </motion.div>

        {/* Role Badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <motion.span
            className="neo-border shadow-brutal-sm bg-neo-yellow px-5 py-2 font-bold text-sm uppercase tracking-wider inline-block"
            whileHover={{ rotate: -2, scale: 1.05 }}
          >
            {mainUser.role}
          </motion.span>
        </motion.div>

        {/* Description */}
        <motion.div variants={itemVariants} className="mb-10">
          <div className="neo-card p-6 max-w-xl mx-auto bg-white">
            <p className="font-grotesk text-sm md:text-base leading-relaxed">
              Seorang <span className="font-bold">{mainUser.role}</span> yang berfokus pada pengembangan 
              solusi kreatif dan inovatif. Selalu berusaha memberikan yang terbaik dalam setiap proyek yang dibuat.
            </p>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
          <motion.a
            href={`https://instagram.com/${mainUser.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="neo-btn-primary flex items-center gap-2 text-sm"
            whileHover={{ y: -3, boxShadow: '6px 6px 0px #1A1A1A' }}
            whileTap={{ y: 1, boxShadow: '2px 2px 0px #1A1A1A' }}
          >
            <ArrowTopRightOnSquareIcon className="w-4 h-4 stroke-[2.5]" />
            Instagram
          </motion.a>
          <motion.div
            whileHover={{ y: -3, boxShadow: '6px 6px 0px #1A1A1A' }}
            whileTap={{ y: 1, boxShadow: '2px 2px 0px #1A1A1A' }}
          >
            <Link
              href="/portofolio"
              className="neo-btn bg-neo-mint flex items-center gap-2 text-sm"
            >
              <CodeBracketIcon className="w-4 h-4 stroke-[2.5]" />
              Portfolio
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}