'use client';

import { motion } from 'framer-motion';
import { users } from '@/app/data/users';
import Image from 'next/image';

export default function About() {
  const mainUser = users[0];
  
  return (
    <main className="min-h-screen">
      <div className="relative min-h-[80vh] flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-4xl font-mono uppercase tracking-tight pt-16 mt-6 mb-8">About Me</h1>  
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="relative w-40 h-40">
                <div className="relative w-full h-full rounded-full border-2 border-black overflow-hidden">
                  <Image 
                    src={mainUser.avatar} 
                    alt={mainUser.name}
                    className="object-cover"
                    fill
                    sizes="(max-width: 768px) 160px, 160px"
                    priority
                  />
                </div>
              </div>
              
              <div className="text-left max-w-lg">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <h2 className="font-mono text-xl uppercase tracking-tight mb-4">{mainUser.name}</h2>
                  <p className="font-mono text-sm leading-relaxed mb-4">
                    [ Saya adalah seorang {mainUser.role} yang bersemangat dalam membuat solusi web yang kreatif dan fungsional. 
                    Dengan fokus pada pengalaman pengguna dan desain yang bersih, saya berusaha menciptakan website yang tidak hanya 
                    indah tetapi juga mudah digunakan. ]
                  </p>
                  <p className="font-mono text-sm leading-relaxed mb-4">
                    [ Latar belakang saya mencakup pengalaman dalam pengembangan front-end menggunakan teknologi modern seperti 
                    React, Next.js, dan Tailwind CSS. Saya juga memiliki ketertarikan dalam desain UI/UX dan selalu berusaha 
                    mengikuti tren terbaru dalam industri pengembangan web. ]
                  </p>
                  <p className="font-mono text-sm leading-relaxed">
                    [ Di luar dunia pemrograman, saya menikmati fotografi, membaca buku, dan menjelajahi tempat-tempat baru. 
                    Saya percaya bahwa pengalaman di luar coding membantu memperkaya perspektif dan kreativitas dalam pekerjaan saya. ]
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-12"
          >
            <h3 className="font-mono text-xl uppercase tracking-tight mb-4">Skills</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Git'].map((skill, index) => (
                <motion.div
                  key={index}
                  className="font-mono text-sm border border-black px-4 py-2"
                  whileHover={{ scale: 1.05, backgroundColor: 'black', color: 'white' }}
                  whileTap={{ scale: 0.95 }}
                >
                  [ {skill} ]
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Background decoration - same as home page */}
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