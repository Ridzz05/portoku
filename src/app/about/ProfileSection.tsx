'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { AnimatedText } from './AnimatedElements';
import { User } from '@/app/data/users';

interface ProfileSectionProps {
  user: User;
}

export default function ProfileSection({ user }: ProfileSectionProps) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
      {/* Avatar */}
      <motion.div
        className="relative w-44 h-44 neo-border shadow-brutal-lg bg-neo-sky rounded-2xl overflow-hidden flex-shrink-0"
        whileHover={{ rotate: -3, scale: 1.05 }}
        initial={{ scale: 0.8, rotate: 5 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      >
        <Image
          src={user.avatar}
          alt={user.name}
          className="object-cover"
          fill
          sizes="176px"
          priority
        />
      </motion.div>

      {/* Bio */}
      <div className="text-left max-w-lg">
        <AnimatedText delay={0.2}>
          <h2 className="neo-heading text-2xl mb-4">{user.name}</h2>
        </AnimatedText>

        <AnimatedText delay={0.3}>
          <div className="neo-card p-4 mb-4 bg-neo-mint/30">
            <p className="font-grotesk text-sm leading-relaxed">
              Saya adalah seorang <span className="font-bold">{user.role}</span> yang bersemangat dalam membuat solusi web yang kreatif dan fungsional.
              Dengan fokus pada pengalaman pengguna dan desain yang bersih, saya berusaha menciptakan website yang tidak hanya
              indah tetapi juga mudah digunakan.
            </p>
          </div>
        </AnimatedText>

        <AnimatedText delay={0.4}>
          <div className="neo-card p-4 mb-4 bg-neo-yellow/20">
            <p className="font-grotesk text-sm leading-relaxed">
              Latar belakang saya mencakup pengalaman dalam pengembangan front-end menggunakan teknologi modern seperti
              React, Next.js, dan Tailwind CSS. Saya juga memiliki ketertarikan dalam desain UI/UX.
            </p>
          </div>
        </AnimatedText>

        <AnimatedText delay={0.5}>
          <div className="neo-card p-4 bg-neo-lavender/20">
            <p className="font-grotesk text-sm leading-relaxed">
              Di luar dunia pemrograman, saya menikmati fotografi, membaca buku, dan menjelajahi tempat-tempat baru.
              Pengalaman di luar coding membantu memperkaya perspektif dan kreativitas dalam pekerjaan saya.
            </p>
          </div>
        </AnimatedText>
      </div>
    </div>
  );
}
