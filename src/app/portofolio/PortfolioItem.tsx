'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Project } from '@/app/data/portofolio';

interface PortfolioItemProps {
  project: Project;
  index: number;
}

export default function PortfolioItem({ project, index }: PortfolioItemProps) {
  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 * index, duration: 0.5 }}
      className="border border-black p-4 text-left"
    >
      <div className="relative h-48 mb-4 overflow-hidden border border-black group">
        <div className={`absolute inset-0 ${project.bgColor} flex items-center justify-center z-0`}>
          <span className="font-mono text-2xl">[ {project.title} ]</span>
        </div>
        
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover z-10 transition-all duration-300 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={index < 2}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />
        
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 flex items-center justify-center z-20 transition-all duration-300">
          <span className="font-mono text-white text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            [ {project.title} ]
          </span>
        </div>
      </div>
      
      <h3 className="font-mono text-xl uppercase tracking-tight mb-2">{project.title}</h3>
      <p className="font-mono text-sm leading-relaxed mb-4">[ {project.description} ]</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, tagIndex) => (
          <span 
            key={tagIndex} 
            className="font-mono text-xs border border-black px-2 py-1"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <motion.a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="font-mono text-sm border border-black px-4 py-2 inline-block hover:bg-black hover:text-white transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        [ Lihat Proyek ]
      </motion.a>
    </motion.div>
  );
}
