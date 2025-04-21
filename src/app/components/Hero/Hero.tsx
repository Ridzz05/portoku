'use client';

import { motion } from 'framer-motion';
import { users } from '@/app/data/users';
import Image from 'next/image';

export default function Hero() {
  const mainUser = users[0]; 
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center">
      <div className="text-center max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="relative w-32 h-32 mx-auto mb-6">
            {/* Water wave animation container */}
            <div className="absolute inset-0 rounded-full animate-[wave_4s_ease-in-out_infinite]">
              <div className="absolute inset-0 rounded-full bg-black opacity-5"></div>
              <div className="absolute inset-0 rounded-full bg-black opacity-5 animate-[wave_4s_ease-in-out_infinite_0.5s]"></div>
              <div className="absolute inset-0 rounded-full bg-black opacity-5 animate-[wave_4s_ease-in-out_infinite_1s]"></div>
            </div>
            {/* Avatar container */}
            <div className="relative w-full h-full rounded-full border-2 border-black overflow-hidden">
              <Image 
                src={mainUser.avatar} 
                alt={mainUser.name}
                className="object-cover"
                fill
                sizes="(max-width: 768px) 128px, 128px"
                priority
              />
            </div>
          </div>
          <h1 className="text-4xl font-mono uppercase tracking-tight mb-4">{mainUser.name}</h1>
          <p className="text-lg font-mono opacity-60 mb-2">{mainUser.username}</p>
          <p className="text-sm font-mono uppercase mb-4">[ {mainUser.role} ]</p>
          
          <div className="flex justify-center space-x-4">
            <motion.a
              href={`https://instagram.com/${mainUser.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm border border-black px-4 py-2 hover:bg-black hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              [ Instagram ]
            </motion.a>
            <motion.button
              className="font-mono text-sm border border-black px-4 py-2 hover:bg-black hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              [ Portfolio ]
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <p className="font-mono text-sm leading-relaxed">
            [ Seorang {mainUser.role} yang berfokus pada pengembangan solusi kreatif dan inovatif. 
            Selalu berusaha memberikan yang terbaik dalam setiap proyek. ]
          </p>
        </motion.div>
      </div>

      {/* Background decoration */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTQtMi4yMSAwLTQgMS43OS00IDQgMCAyLjIxIDEuNzkgNCA0IDQgMi4yMSAwIDQtMS43OSA0LTR6IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48L3N2Zz4=')] opacity-5"></div>
      </motion.div>
    </div>
  );
} 