'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/app/data/portofolio';

export default function Portfolio() {
  return (
    <main className="min-h-screen">
      <div className="relative min-h-[80vh] flex items-center justify-center">
        <div className="text-center max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-4xl font-mono uppercase tracking-tight pt-16 mt-6 mb-8">Portofolio</h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-8"
            >
              <p className="font-mono text-sm leading-relaxed max-w-2xl mx-auto">
                [ Berikut adalah beberapa proyek yang telah saya kerjakan. Setiap proyek mencerminkan 
                pendekatan saya dalam menyelesaikan masalah dan menciptakan solusi yang kreatif. ]
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index, duration: 0.5 }}
                  className="border border-black p-4 text-left"
                >
                  <div className="relative h-48 mb-4 overflow-hidden border border-black">
                    <div className={`absolute inset-0 ${project.bgColor} flex items-center justify-center`}>
                      {/* Fallback content jika gambar gagal dimuat */}
                      <span className="font-mono text-2xl">[ {project.title} ]</span>
                    </div>
                    
                    {/* Image with error handling */}
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover hover:opacity-80 transition-opacity"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index < 2}
                      onError={(e) => {
                        // Jika gambar gagal dimuat, fallback content akan tetap ditampilkan
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
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
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-16"
          >
            <h3 className="font-mono text-xl uppercase tracking-tight mb-4">Ingin Berkolaborasi?</h3>
            <p className="font-mono text-sm leading-relaxed max-w-2xl mx-auto mb-6">
              [ Jika Anda tertarik untuk berkolaborasi atau memiliki pertanyaan tentang proyek saya, 
              jangan ragu untuk menghubungi saya. ]
            </p>
            <motion.a
              href="/contact"
              className="font-mono text-sm border border-black px-6 py-2 inline-block hover:bg-black hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              [ Hubungi Saya ]
            </motion.a>
          </motion.div>
        </div>

        {/* Background decoration - sama seperti halaman lainnya */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTQtMi4yMSAwLTQgMS43OS00IDQgMCAyLjIxIDEuNzkgNCA0IDQgMi4yMSAwIDQtMS43OSA0LTR6IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48L3N2Zz4=')] opacity-5"></div>
        </motion.div>
      </div>
    </main>
  );
} 