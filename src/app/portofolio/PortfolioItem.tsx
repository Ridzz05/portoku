'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Project } from '@/app/data/portofolio';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

interface PortfolioItemProps {
  project: Project;
  index: number;
}

const cardColors = ['bg-neo-yellow/20', 'bg-neo-mint/20', 'bg-neo-sky/20', 'bg-neo-lavender/20'];
const tagColors = ['bg-neo-yellow', 'bg-neo-mint', 'bg-neo-sky', 'bg-neo-coral', 'bg-neo-lavender', 'bg-neo-pink', 'bg-neo-lime', 'bg-neo-orange'];

export default function PortfolioItem({ project, index }: PortfolioItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: index % 2 === 0 ? -1 : 1 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 20,
        delay: 0.15 * index,
      }}
      whileHover={{ y: -4, boxShadow: '8px 8px 0px #1A1A1A' }}
      className={`neo-card ${cardColors[index % cardColors.length]} p-5 transition-shadow`}
    >
      {/* Image */}
      <div className="relative h-48 mb-4 overflow-hidden neo-border bg-gray-100 group">
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center z-0">
          <span className="neo-heading text-lg text-gray-400">{project.title}</span>
        </div>

        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover z-10 transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={index < 2}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />

        <div className="absolute inset-0 bg-neo-black/0 group-hover:bg-neo-black/60 flex items-center justify-center z-20 transition-all duration-300">
          <motion.span
            className="neo-border shadow-brutal-sm bg-neo-yellow px-4 py-2 font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={false}
          >
            {project.title}
          </motion.span>
        </div>
      </div>

      {/* Content */}
      <h3 className="neo-heading text-xl mb-2">{project.title}</h3>
      <p className="font-grotesk text-sm leading-relaxed mb-4 text-gray-700">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, tagIndex) => (
          <span
            key={tagIndex}
            className={`neo-border shadow-brutal-sm ${tagColors[tagIndex % tagColors.length]} text-xs font-bold px-2 py-1`}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Link */}
      <motion.a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="neo-btn-primary text-xs inline-flex items-center gap-2"
        whileHover={{ y: -2, boxShadow: '6px 6px 0px #1A1A1A' }}
        whileTap={{ y: 1, boxShadow: '2px 2px 0px #1A1A1A' }}
      >
        <ArrowTopRightOnSquareIcon className="w-4 h-4 stroke-[2.5]" />
        Lihat Proyek
      </motion.a>
    </motion.div>
  );
}
