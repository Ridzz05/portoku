'use client';

import Image from 'next/image';
import { AnimatedText } from './AnimatedElements';
import { User } from '@/app/data/users';

interface ProfileSectionProps {
  user: User;
}

export default function ProfileSection({ user }: ProfileSectionProps) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-5">
      <div className="relative w-40 h-40">
        <div className="relative w-full h-full rounded-full border-2 border-black overflow-hidden">
          <Image 
            src={user.avatar} 
            alt={user.name}
            className="object-cover"
            fill
            sizes="(max-width: 768px) 160px, 160px"
            priority
          />
        </div>
      </div>
      
      <div className="text-left max-w-lg">
        <AnimatedText>
          <h2 className="font-mono text-xl uppercase tracking-tight mb-4">{user.name}</h2>
          <p className="font-mono text-sm leading-relaxed mb-4">
            [ Saya adalah seorang {user.role} yang bersemangat dalam membuat solusi web yang kreatif dan fungsional. 
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
        </AnimatedText>
      </div>
    </div>
  );
}
